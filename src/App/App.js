import React, { Component } from 'react';
import './App.css';
import { CardContainer } from '../CardContainer/CardContainer';
import { SearchForm } from '../SearchForm/SearchForm';
import DistrictRepository from '../helper';
import kinderData from '../data/kindergartners_in_full_day_program';
import { ClickedContainer } from '../ClickedContainer/ClickedContainer';

class App extends Component {
  constructor( props ){
    super( props );
    this.districtRepository = new DistrictRepository( kinderData ),
    this.state = {
      allDistricts: []
    };
  }
  setDistrictData=() => {
    this.setState({ allDistricts: this.districtRepository.stats });    
  }
  
  showSearchResults = (searchInput) => {
    const foundMatches = this.districtRepository.findAllMatches(searchInput);
    this.setState({ allDistricts: foundMatches });
  }

  addClickedCard = (location) => {
    const allDistrictsWithClickedCard = this.state.allDistricts.map((district, index, array) => {
      if (district.location === location && !district.clicked && this.limitClicked(array) < 2) {
        district.clicked = true;
      } else if ( district.location === location && district.clicked) {
        district.clicked = false;
      }
      return district;
    });
    console.log(allDistrictsWithClickedCard);
    this.setState({
      allDistricts: allDistrictsWithClickedCard
    });
  }

  limitClicked = (allDistricts) => {
    const limit = allDistricts.reduce(( totalClicks, district ) => {
      if ( district.clicked) {
        totalClicks += 1;
      }
      return totalClicks;
    }, 0);
    console.log(limit)
    return limit; 
  }

  comparedCardInfo = (district) => {

  }

  componentDidMount() {
    this.setDistrictData();
  }
  
  render() {
    return (
      <div>
        <header>
          <h1>Headcount 2.0</h1>
          <SearchForm 
            showSearchResults={ this.showSearchResults }
          />
          <ClickedContainer 
            allDistricts={ this.state.allDistricts }
            addClickedCard={ this.addClickedCard }
            compareDistrictAverages={ this.districtRepository.compareDistrictAverages }
          />
        </header>
        <CardContainer 
          allDistricts={ this.state.allDistricts }
          addClickedCard={ this.addClickedCard }
        />
      </div>
    );
  }
}

export default App;
