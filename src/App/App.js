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

  setDistrictData = () => {
    this.setState({ allDistricts: this.districtRepository.stats });    
  };
  
  showSearchResults = (searchInput) => {
    const foundMatches = this.districtRepository.findAllMatches(searchInput);
    this.setState({ allDistricts: foundMatches });
  };

  addClickedCard = (location) => {
    const allDistrictsWithClickedCard = this.state.allDistricts.map((district, index, array) => {
      if (district.location === location && !district.clicked && this.districtRepository.limitClicked(array) < 2) {
        district.clicked = true;
      } else if ( district.location === location && district.clicked) {
        district.clicked = false;
      }
      return district;
    });
    this.setState({
      allDistricts: allDistrictsWithClickedCard
    });
  };

  componentDidMount() {
    this.setDistrictData();
  }
  
  render() {
    //place filter here
    const clickedCards = this.state.allDistricts.filter(( district ) => {
      return district.clicked;
    });
    return (
      <div>
        <header>
          <h1 className='main-title'>Headcount 2.0</h1>
          <SearchForm 
            showSearchResults={ this.showSearchResults }
          />
          <ClickedContainer 
            clickedCard1={ clickedCards[0] }
            clickedCard2={ clickedCards[1] }
            addClickedCard={ this.addClickedCard }
            compareDistrictAverages={ this.districtRepository.compareDistrictAverages}
            findAverage={this.districtRepository.findAverage}
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
