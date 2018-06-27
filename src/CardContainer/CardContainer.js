import React from 'react';
import { Card } from '../Card/Card';
import PropTypes from 'prop-types';

export const CardContainer = ( { allDistricts } ) => {
  
  const createCards = Object.keys(allDistricts).map(( district, index) => {
    return (
      <Card 
        title={ allDistricts[district].title } 
        key={ index }
      />
    );
  });

  return (
    <div>
      {createCards}
    </div>
  );
};

