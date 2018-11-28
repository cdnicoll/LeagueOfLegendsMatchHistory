import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'semantic-ui-react';

const RuneList = ({ runes }) => {
  const renderRunes = runes.map((rune) => {
    const markup = (
      <div className="row">
        <img
          src={`./assets/${rune.icon}`}
          alt={rune.name}
          width="40"
          height="40"
        />
      </div>
    );

    return (
      <Popup trigger={markup} key={rune.id}>
        <Popup.Header>{rune.name}</Popup.Header>
        <Popup.Content>{rune.description}</Popup.Content>
      </Popup>
    );
  });
  return <div className="ui grid one column">{renderRunes}</div>;
};

RuneList.propTypes = {
  runes: PropTypes.instanceOf(Array).isRequired,
};

export default RuneList;
