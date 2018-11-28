import React from 'react';
import axios from 'axios';
import LeagueMatchHistory from '../api/LeagueMatchHistory';
import Header from './Header';
import Section from './Section';
import SearchBar from './SearchBar';
import Matches from './Matches';

const START_INDEX = 0;
const END_INDEX = 20;

class App extends React.Component {
  state = {
    matches: [],
  };

  onSearchSubmit = async (summonerName) => {
    const summoner = await LeagueMatchHistory.get(
      `/getSummoner/${summonerName}`,
    );
    const matches = await LeagueMatchHistory.get(
      `/getMatches/${summoner.data.accountId}/${START_INDEX}/${END_INDEX}`,
    );

    const gamePromises = [];
    matches.data.matches.forEach((game) => {
      gamePromises.push(
        LeagueMatchHistory.get(
          `/getMatch/${game.gameId}/${summoner.data.accountId}`,
        ),
      );
    });

    const matchInformationData = await axios.all(gamePromises);
    const matchesInformation = matchInformationData.map((match) => {
      return match.data;
    });

    this.state = {
      matches: matchesInformation,
    };
  };

  render() {
    return (
      <div className="ui container grid">
        <Section>
          <Header title="Match History" />
        </Section>
        <Section>
          <SearchBar onSubmit={this.onSearchSubmit} />
        </Section>
        <Section>
          <Matches matches={this.state.matches} />
        </Section>
      </div>
    );
  }
}

export default App;
