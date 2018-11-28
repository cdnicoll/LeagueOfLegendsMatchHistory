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
    totalGames: 0,
    loadMore: false,
    loading: false,
  };

  loadMoreMatches = () => {
    const updatedEndIndex = this.state.endIndex + MATCHES_TO_LOAD;
    const updatedStartIndex =
      this.state.endIndex + 1 >= updatedEndIndex
        ? updatedEndIndex
        : this.state.endIndex;

    this.state.startIndex =
      updatedStartIndex + 1 >= this.state.totalGames
        ? updatedStartIndex
        : updatedStartIndex + 1;
    this.state.endIndex =
      updatedEndIndex >= this.state.totalGames
        ? this.state.totalGames
        : updatedEndIndex;
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
    // ... loaded some matches
    this.setState({totalGames: tmpAmountMatchesLoaded});
    const shouldLoadMore = tmpAmountMatchesLoaded > MATCHES_TO_LOAD && tmpAmountMatchesLoaded > this.state.startIndex
    this.setState({ loadMore: shouldLoadMore });
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
