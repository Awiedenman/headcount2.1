import React, { Component } from 'react';

export class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: ''
    }
  }

  handleSearch = (districtName) => {
    // this.props.searchDistricts(districtName)
  }

  handleChange = (e) => {
    this.setState({
      searchInput: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={() => {
        this.handleSearch(this.state.searchInput)
      }} className="search">
        <input 
          type="text" 
          name="search" 
          placeholder="search for area"
          onChange={this.handleChange}
        />
      </form>
    )
  }
}