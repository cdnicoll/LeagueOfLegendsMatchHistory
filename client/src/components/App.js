import React, { useState } from 'react';
import axios from 'axios';
import LeagueMatchHistory from '../api/LeagueMatchHistory';
import Error from './Error';
import Header from './Header';
import Section from './Section';
import SearchBar from './SearchBar';
import Matches from './Matches';

const START_INDEX = 0;
const END_INDEX = 5;

const App = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const onSearchSubmit = async summonerName => {
    setIsLoading(true);
    setIsError(false);
    try {
      const summoner = await LeagueMatchHistory.get(
        `/getSummoner/${summonerName}`,
      );

      const matches = await LeagueMatchHistory.get(
        `/getMatches/${summoner.data.accountId}/${START_INDEX}/${END_INDEX}`,
      );

      const gamePromises = [];
      matches.data.matches.forEach(game => {
        gamePromises.push(
          LeagueMatchHistory.get(
            `/getMatch/${game.gameId}/${summoner.data.accountId}`,
          ),
        );
      });

      const matchInformationData = await axios.all(gamePromises);
      const matchesInformation = matchInformationData.map(match => {
        return match.data;
      });

      setMatches(matchesInformation);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
      setErrMsg('Something went wrong');
    }
  };

  return (
    <div className='ui container grid'>
      <Section>
        <Header title='Match History' />
      </Section>
      <Section>
        <Error text={errMsg} isHidden={!error} />
      </Section>
      <Section>
        <SearchBar onSubmit={onSearchSubmit} loading={loading} />
      </Section>
      <Section>
        <Matches matches={matches} />
      </Section>
    </div>
  );
};

export default App;
