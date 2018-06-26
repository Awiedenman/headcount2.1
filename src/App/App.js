import React, { Component } from 'react';
import './App.css';
import { CardContainer } from '../CardContainer/CardContainer';


class App extends Component {
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
