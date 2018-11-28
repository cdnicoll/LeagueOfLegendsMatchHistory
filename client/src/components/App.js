import React from 'react';
import LeagueMatchHistory from '../api/LeagueMatchHistory';
import Header from './Header';
import Section from './Section';
import SearchBar from './SearchBar';
import Matches from './Matches';

// @TODO: Remove this when pulling from APU
import mockMatches from '../mock/get_matches';

class App extends React.Component {
  state = {
    matches: [],
  };

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

  render() {
    return (
      <div className='ui container grid'>
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
