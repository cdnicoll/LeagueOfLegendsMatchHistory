import React from 'react';

const MatchCard = (props) => {
  const {
    championName,
    summonerName,
    championLevel,
    kda,
  } = props.match;
  return (
    <div className='ui message grid'>
      <h2>{championName}</h2>
      <h5>{summonerName}</h5>
      <span>{championLevel}</span>
      <span>{kda}</span>
    </div>
  );
};

export default MatchCard;
