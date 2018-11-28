import React from 'react';
import { Button } from 'semantic-ui-react';
import LeagueMatchHistory from '../api/LeagueMatchHistory';
import Header from './Header';
import Section from './Section';
import SearchBar from './SearchBar';
import Matches from './Matches';

// @TODO: Remove this when pulling from APU
import mockMatches from '../mock/get_matches';

const MATCHES_TO_LOAD = 10;

class App extends React.Component {
  state = {
    matches: [],
    startIndex: 0,
    endIndex: 10,
    totalLoLGames: 50,
    loadMore: false,
    loading: false,
  };

  loadMoreMatches = () => {
    const updatedEndIndex = this.state.endIndex + MATCHES_TO_LOAD;
    const updatedStartIndex =
      this.state.endIndex + 1 >= updatedEndIndex
        ? updatedEndIndex
        : this.state.endIndex;

    this.setState({
      startIndex:
        updatedStartIndex + 1 >= this.state.totalLoLGames
          ? updatedStartIndex
          : updatedStartIndex + 1,
    });

    this.setState({
      endIndex:
        updatedEndIndex >= this.state.totalLoLGames
          ? this.state.totalLoLGames
          : updatedEndIndex,
    });

    this.loadMatches();
  };

  /*
  onSearchSubmit = term => {
    console.log('Setting timeout to simulate throttle');
    console.log('REMOVE THIS SOON');
    const self = this;
    setTimeout(function() {
      console.log('timeout done');
      console.log(mockMatches);
      self.setState({ matches: mockMatches });
    }, 400);
  }
  */

  loadMatches = async (summonerName) => {
    const tmpAmountMatchesLoaded = 55; // to be replaced with total amount of matches
    console.log(this.state);
    const summoner = await LeagueMatchHistory.get(
      `/getSummoner/${summonerName}`,
    );
    const matches = await LeagueMatchHistory.get(
      `/getMatches/${summoner.data.accountId}/${this.state.startIndex}/${
        this.state.endIndex
      }`,
    );

    //console.log(this.state);
    // ... loaded some matches
    console.log(matches.data);
    //this.setState({ totalLoLGames: matches.data.totalGames });
    const shouldLoadMore =
      matches.data.totalGames > MATCHES_TO_LOAD &&
      matches.data.totalGames > this.state.startIndex;
    this.setState({ loadMore: true });
  };

  render() {
    return (
      <div className="ui container grid">
        <Section>
          <Header title="Match History" />
        </Section>
        <Section>
          <SearchBar onSubmit={this.loadMatches} />
        </Section>
        <Section>
          <Matches matches={this.state.matches} />
        </Section>
        <Button
          disabled={!this.state.loadMore}
          onClick={this.loadMoreMatches}
          loading={this.state.loading}
        >
          Load More
        </Button>
      </div>
    );
  }
}

export default App;
