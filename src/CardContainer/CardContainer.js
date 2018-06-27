import React from 'react';
import { Card } from '../Card/Card';
import PropTypes from 'prop-types';

export const CardContainer = ( { allDistricts } ) => {
  const createCards = allDistricts.map( (district, index)  => {
    return (<Card
      key={index}
      location={district.location}
      stats={district.stats}
    />
    );
  });
  return (
    <div>
      {createCards}
    </div>
  );
};

CardContainer.propTypes = {
  allDistricts: PropTypes.array
};

