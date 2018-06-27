import React from 'react';

export const Card = ( {location, stats} ) => {
  const districtStats = Object.keys(stats).map(year => {
    return (
      <p>{year} : {stats[year]}</p>
    )
  })
 return (
    <div>
      <h1>{location}</h1>
       { districtStats }
    </div>
  )
};