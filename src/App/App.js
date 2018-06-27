import React, { Component } from 'react';
import './App.css';
import { CardContainer } from '../CardContainer/CardContainer';
import DistrictRepository from '../helper';
import kinderData from '../data/kindergartners_in_full_day_program';

class App extends Component {
  constructor( props ){
    super( props );
    this.state = {
      allDistricts: this.setDistrictData()
    };
  }
  setDistrictData=() => {
    const allDistricts = new DistrictRepository( kinderData );
    // this.setState({ allDistricts: allDistricts.stats });
    return allDistricts.stats
    
  }

  // componentDidMount() {
  //   this.setDistrictData();
  // }
  
  render() {
    return (
      <div>
        <header>
          <h1>Headcount 2.0</h1>
          {/* <SearchForm /> */}
          {/* <ClickedContainer /> */}
        </header>
        <CardContainer 
          allDistricts={ this.state.allDistricts }/>
      </div>
    );
  }
}

export default App;
