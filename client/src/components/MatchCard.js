import React from 'react';
import { Image, Segment } from 'semantic-ui-react';

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
      </div>
    </Segment>
  );
};

export default MatchCard;
