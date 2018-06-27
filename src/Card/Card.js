import React from 'react';

export const Card = ( {allDistricts} ) => {
  const districtsData = Object.keys(allDistricts.stats).map(district => {
    let dataCard = allDistricts.stats[district].reduce((dataCard, year) => {
      
      return [...dataCard, year.Data];
    }, [] );
    return <div>
            <h1>{district}</h1>
           { dataCard.map(data => {
              return <p>{data}</p>
            })}
          </div>
  });
  return districtsData;
};