import React from 'react';
import { Card } from '../Card/Card';
import PropTypes from 'prop-types';
import './CardContainer.css';

export const CardContainer = ( { allDistricts } ) => {
  const createCards = allDistricts.map( (district, index)  => {
    return (
      <Card
        key={index}
        location={district.location}
        stats={district.stats}
      />
    );
  });
  return (
    <div className="card-container">
      {createCards}
    </div>
  );
};

CardContainer.propTypes = {
  allDistricts: PropTypes.array
};

