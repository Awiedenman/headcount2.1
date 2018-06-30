import React from 'react';
import { Card } from '../Card/Card';
import PropTypes from 'prop-types';
import './ClickedContainer.css';
import { ComparisonCard } from '../ComparisonCard/ComparisonCard';

export const ClickedContainer = ( { allDistricts, addClickedCard, compareDistrictAverages, findAverage }) => {
  
  const renderClickedCards = allDistricts.filter(( district ) => {
    return district.clicked;
  });
  
  const compareCards = renderClickedCards.map(( clickedDistrict, index) => {
    return ( 
      <Card 
        key={index}
        location={clickedDistrict.location}
        stats={clickedDistrict.stats}
        addClickedCard={addClickedCard}
        clicked={ clickedDistrict.clicked }
      />
    );
  });

  return (
    <div className='clicked-container'>
      <ComparisonCard 
        renderClickedCards={ renderClickedCards }
        compareDistrictAverages={ compareDistrictAverages }
        findAverage={findAverage}
      />
      { compareCards }
    </div>
  );
};

ClickedContainer.propTypes = {
  allDistricts: PropTypes.array,
  addClickedCard: PropTypes.func,
  findAverage: PropTypes.func,
  compareDistrictAverages: PropTypes.func
};