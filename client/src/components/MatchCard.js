import React from 'react';
import { Image, Segment, Header } from 'semantic-ui-react';

const MatchCard = (props) => {
  const { championName, summonerName, championLevel, kda } = props.match;
  return (
    <Segment className="ui message five column grid floating">
      <div className="column">
        <Image
          label={{ color: 'blue', content: championLevel, floating: true }}
          src={`./assets/champion/${championName}.png`}
          size="tiny"
        />
        <Header as="h5" color="grey">
          K/D/A:
          {kda}
        </Header>
      </div>
    </Segment>
  );
};

export default MatchCard;
