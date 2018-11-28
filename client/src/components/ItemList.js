import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'semantic-ui-react';

const ItemList = ({ items }) => {
  const renderItems = items.map((item, key) => {
    if (item) {
      const markup = (
        <div className="column">
          <img
            src={`./assets/item/${item.image.full}`}
            alt={item.name}
            width="25"
            height="25"
          />
        </div>
      );

      return (
        <Popup trigger={markup} key={key}>
          <Popup.Header>{item.name}</Popup.Header>
          <Popup.Content>{item.plaintext}</Popup.Content>
        </Popup>
      );
    }
  });
  return (
    <div className="ui two column grid">
      <div className="row">{renderItems}</div>
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
};

export default ItemList;
