import React from 'react';
import './ComparisonCard.css';

export const ComparisonCard = ({ renderClickedCards, compareDistrictAverages }) => {
  console.log(renderClickedCards)
  return(
    <div>
      <h1>{renderClickedCards.length > 1 ? renderClickedCards[0].location : ''}</h1>
    </div>
  )
}
