import React from 'react';
import { Card } from '../Card/Card';
import PropTypes from 'prop-types';
import './ClickedContainer.css';
import { ComparisonCard } from '../ComparisonCard/ComparisonCard';

export const ClickedContainer = ( { clickedCard1, clickedCard2, addClickedCard, compareDistrictAverages, findAverage }) => {
  //remove filter part and just pass in two districts to component
  // const renderClickedCards = allDistricts.filter(( district ) => {
  //   return district.clicked;
  // });
  let clickedCards;
  if(clickedCard1 && clickedCard2) {
    clickedCards = [clickedCard1, clickedCard2]
  } else if(clickedCard1) {
    clickedCards = [clickedCard1]
  } else if(clickedCard2) {
    clickedCards = [clickedCard2]
  } else {
    clickedCards = [];
  }
  const compareCards = clickedCards.map(( clickedDistrict, index) => {
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
        clickedCards={ clickedCards }
        compareDistrictAverages={ compareDistrictAverages }
        findAverage={findAverage}
      />
      { compareCards }
    </div>
  );
};

ClickedContainer.propTypes = {
  // allDistricts: PropTypes.array,
  addClickedCard: PropTypes.func,
  findAverage: PropTypes.func,
  compareDistrictAverages: PropTypes.func
};