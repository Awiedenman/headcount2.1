import React from 'react';
import './ComparisonCard.css';
import PropTypes from 'prop-types';

export const ComparisonCard = ({ renderClickedCards, compareDistrictAverages, findAverage }) => {
  let location1;
  let location2;
  if(renderClickedCards.length > 1) {
    location1 = renderClickedCards[0].location;
    location2 = renderClickedCards[1].location;
  }
  return(
    <div>
      <h2>{renderClickedCards.length > 1 ? location1 + ":" + findAverage(location1) : ''}</h2>
      <p>{renderClickedCards.length > 1 ? compareDistrictAverages(location1, location2).compared : ''}</p>
      <h2>{renderClickedCards.length > 1 ? location2 + ":" + findAverage(location2) : ''}</h2>
    </div>
  )
}

ComparisonCard.propTypes = {
  renderClickedCards: PropTypes.func,
  compareDistrictAverages: PropTypes.func,
  findAverage: PropTypes.func
}
