import React from 'react';
import MatchCard from './MatchCard';

const Matches = props => {
    const renderMatches = props.matches.map(match => {
        return (
            <MatchCard key={ match.gameId } match={ match } />
        )
    });
    return (
        <div>
            { renderMatches }
        </div>
    )
}

export default Matches;
