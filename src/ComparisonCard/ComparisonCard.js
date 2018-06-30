import React from 'react';
import './ComparisonCard.css';
import PropTypes from 'prop-types';

export const ComparisonCard = ({ renderClickedCards, compareDistrictAverages, findAverage }) => {
  
  if(renderClickedCards.length > 1) {
    const comparedDistrictsObj = compareDistrictAverages(renderClickedCards[0].location, renderClickedCards[1].location)
    return(
      <div>
        <h2 className="compare-location1">{ renderClickedCards[0].location + ":" + comparedDistrictsObj[renderClickedCards[0].location.toUpperCase()] }</h2>
        <h2>{comparedDistrictsObj.compared}</h2>
        <h2>{ renderClickedCards[1].location + ":" + comparedDistrictsObj[renderClickedCards[1].location.toUpperCase()] }</h2>
      </div>
    )   
  } else {
    return <div></div>
  }
}

ComparisonCard.propTypes = {
  renderClickedCards: PropTypes.array,
  compareDistrictAverages: PropTypes.func,
  findAverage: PropTypes.func
}
