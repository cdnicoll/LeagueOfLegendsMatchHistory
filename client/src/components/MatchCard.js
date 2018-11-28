import React from 'react';
import { Image, Segment, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import SpellList from './SpellList';
import RuneList from './RuneList';
import ItemList from './ItemList';

const MatchCard = ({ match }) => {
  const {
    championName,
    summonerName,
    championLevel,
    kda,
    totalCreepScore,
    creepScorePerMinutes,
    summonerSpells,
    summonerRunes,
    itemsBought,
  } = match;
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
      <div className="column">
        <div className="row">
          <Header as="h2">{championName}</Header>
          <Header as="h5">{summonerName}</Header>
        </div>
        <div className="row">
          <Header as="h5">Creep Score/Time</Header>
          <p>
            {totalCreepScore}/{creepScorePerMinutes}
          </p>
        </div>
      </div>
      <div className="column">
        <SpellList spells={summonerSpells} />
      </div>
      <div className='column'>
        <RuneList runes={summonerRunes} />
      </div>
      <div className='column'>
        <ItemList items={itemsBought} />
      </div>
    </Segment>
  );
};

MatchCard.propTypes = {
  match: PropTypes.instanceOf(Array).isRequired,
};

export default MatchCard;
