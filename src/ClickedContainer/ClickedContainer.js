import React from 'react';
import { Card } from '../Card/Card';
import PropTypes from 'prop-types';
import './ClickedContainer.css';
import { ComparisonCard } from '../ComparisonCard/ComparisonCard';

export const ClickedContainer = ( { allDistricts, addClickedCard, compareDistrictAverages }) => {
  
  const renderClickedCards = allDistricts.filter(( district ) => {
    return district.clicked;
  });
  console.log(renderClickedCards)
  
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
      />
      { compareCards }
    </div>
  );
};

ClickedContainer.propTypes = {
  allDistricts: PropTypes.array,
  addClickedCard: PropTypes.func,
  compareDistrictAverages: PropTypes.func
};