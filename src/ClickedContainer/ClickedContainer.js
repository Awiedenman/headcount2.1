import React from 'react';
import { Card } from '../Card/Card';
import PropTypes from 'prop-types';

export const ClickedContainer = ( { allDistricts, addClickedCard }) => {
  const renderClickedCards = allDistricts.filter(( district ) => {
    return district.clicked;
  }).map(( clickedDistrict, index) => {
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
      { renderClickedCards }
    </div>
  );
};

ClickedContainer.propTypes = {
  allDistricts: PropTypes.array,
  addClickedCard: PropTypes.func
};