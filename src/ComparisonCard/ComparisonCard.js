import React from 'react';
import './ComparisonCard.css';
import PropTypes from 'prop-types';

export const ComparisonCard = ({ 
  clickedCards, 
  compareDistrictAverages
}) => {
  
  if (clickedCards.length > 1) {
    const comparedDistrictsObj = 
    compareDistrictAverages(
      clickedCards[0].location,
      clickedCards[1].location
    );

    return (
      <div className='card clicked comparison-card'>
        <h2
          className="compare-location1">{
            clickedCards[0].location + ":" + 
            comparedDistrictsObj[clickedCards[0].location.toUpperCase()] }
        </h2>
        <h2>{`<------ ${comparedDistrictsObj.compared} ------>`}</h2>
        <h2>{ clickedCards[1].location + ":" + 
          comparedDistrictsObj[clickedCards[1].location.toUpperCase()] }
        </h2>
      </div>
    );   
  } else {
    return <div></div>;
  }
};

ComparisonCard.propTypes = {
  clickedCards: PropTypes.array,
  compareDistrictAverages: PropTypes.func,
  findAverage: PropTypes.func
};
