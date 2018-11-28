import React from 'react';
import PropTypes from 'prop-types';
import MatchCard from './MatchCard';

const Matches = ({ matches }) => {
  const renderMatches = matches.map((match) => {
    return <MatchCard key={match.gameId} match={match} />;
  });
  return <div>{renderMatches}</div>;
};

Matches.propTypes = {
  matches: PropTypes.instanceOf(Array).isRequired,
};

export default Matches;
