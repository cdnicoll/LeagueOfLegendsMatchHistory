import React from 'react';
import LeagueMatchHistory from '../api/LeagueMatchHistory';
import Section from './Section';
import SearchBar from './SearchBar';

// @TODO: Remove this when pulling from APU
import mockMatches from '../mock/get_matches';

class App extends React.Component {
  state = {
    matches: [],
  };

  // @TODO: To avoid slamming the API while under development
  // @TODO: pass along mock data with a timeout
  onSearchSubmit = async term => {
    // handle async data
    console.log('Setting timeout to simulate throttle');
    const self = this;
    setTimeout(function() {
      console.log('timeout done');
      console.log(mockMatches);
      self.setState({ matches: mockMatches });
    }, 400);
  };

  render() {
    return (
      <div className='ui container grid'>
        <Section>
          <h1 className='ui header'>Hello World!</h1>
        </Section>
        <Section>
          <SearchBar onSubmit={this.onSearchSubmit} />
        </Section>
        <Section>
          <p>Body Content</p>
        </Section>
      </div>
    );
  }
}

export default App;
