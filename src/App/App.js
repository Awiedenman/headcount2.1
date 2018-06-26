import React, { Component } from 'react';
import './App.css';
import { CardContainer } from '../CardContainer/CardContainer';
import DistrictRepository from '../helper';
import kinderData from '../data/kindergartners_in_full_day_program';

class App extends Component {
  constructor( props ){
    super( props );
    this.state = {
      allDistricts: {}
    };
  }

  componentDidMount() {
    const allDistricts = new DistrictRepository( kinderData );
    this.setState({ allDistricts });
  }
  
  render() {
    return (
      <div>
        <header>
          <h1>Headcount 2.0</h1>
          {/* <SearchForm /> */}
          {/* <ClickedContainer /> */}
        </header>
        <CardContainer />
      </div>
    );
  }
}

export default App;
