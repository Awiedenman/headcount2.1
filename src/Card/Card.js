import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export const Card = ( {location, stats, addClickedCard } ) => {
  const districtStats = Object.keys(stats).map((year, index) => {
    return (
      <p className={stats[year] < .5 ? 'under' : 'over'} key={ index }>{ year } : { stats[year] }</p>
    );
  });


  return (
    <div className={"card" (clicked ? "true" : "")} onClick={()=>{ addClickedCard} }>
      <h1>{location}</h1>
      { districtStats }
    </div>
  );
};

Card.propTypes = {
  location: PropTypes.string,
  stats: PropTypes.object,
  addClickedCard: PropTypes.func
};