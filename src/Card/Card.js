import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export const Card = ( {location, stats} ) => {
  const districtStats = Object.keys(stats).map((year, index) => {
    return (
      <p key={ index }>{ year } : { stats[year] }</p>
    );
  });
  return (
    <div className="card">
      <h1>{location}</h1>
      { districtStats }
    </div>
  );
};

Card.propTypes = {
  location: PropTypes.string,
  stats: PropTypes.object
};