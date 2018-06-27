import React from 'react';
import PropTypes from 'prop-types';

export const Card = ( {location, stats} ) => {
  const districtStats = Object.keys(stats).map((year, index) => {
    return (
      <p key={ index }>{ year } : { stats[year] }</p>
    );
  });
  return (
    <div>
      <h1>{location}</h1>
      { districtStats }
    </div>
  );
};

Card.propTypes = {
  location: PropTypes.string,
  stats: PropTypes.object
};