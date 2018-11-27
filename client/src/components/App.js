import React from 'react';
import LeagueMatchHistory from '../api/LeagueMatchHistory';
import Section from "./Section";

class App extends React.Component {
  render() {
    return (
      <div className="ui container grid">
        <Section>
          <h1 className="ui header">Hello World!</h1>
        </Section>
        <Section>
          <input />
        </Section>
        <Section>
          <p>Body Content</p>
        </Section>
      </div>
    );
  }
}

export default App;
