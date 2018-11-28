import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'semantic-ui-react';

const SpellList = ({ spells }) => {
  const renderSpells = spells.map((spell) => {
    const markup = (
      <div className="row">
        <img
          src={`./assets/spell/${spell.image.full}`}
          alt={spell.name}
          width="40"
          height="40"
        />
      </div>
    );

    return (
      <Popup trigger={markup} key={spell.key}>
        <Popup.Header>{spell.name}</Popup.Header>
        <Popup.Content>{spell.description}</Popup.Content>
      </Popup>
    );
  });
  return <div className="ui grid one column">{renderSpells}</div>;
};

SpellList.propTypes = {
  spells: PropTypes.instanceOf(Array).isRequired,
};

export default SpellList;
