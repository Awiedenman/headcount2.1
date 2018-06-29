
import React from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';

export const SearchForm = ({ showSearchResults }) => {

  return ( 
    <form className = "search" >
      <input type = "text"
        name = "search"
        placeholder = "search for area"
        onChange = { (event) =>{
          showSearchResults(event.target.value);
        }}
      /> 
    </form>);
};

SearchForm.propTypes = {
  showSearchResults: PropTypes.func.isRequired
};