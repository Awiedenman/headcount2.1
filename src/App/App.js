import React, { Component } from 'react';
import './App.css';
import { CardContainer } from '../CardContainer/CardContainer';
import { SearchForm } from '../SearchForm/SearchForm';
import DistrictRepository from '../helper';
import kinderData from '../data/kindergartners_in_full_day_program';
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
    const allDistrictsWithClickedCard = this.state.allDistricts.map(district => {
      if (district.location === location) {
        district.clicked = true;
      }
      return district;
    });

    this.setState({
      allDistricts: allDistrictsWithClickedCard
    });
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

          {/* <ClickedContainer /> */}
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
