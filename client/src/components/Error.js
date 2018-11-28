import React from 'react';
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Error = ({ text, isHidden }) => {
  return (
    <Segment hidden={isHidden} inverted color="red" tertiary>
      {text}
    </Segment>
  );
};

Error.propTypes = {
  text: PropTypes.string.isRequired,
  isHidden: PropTypes.bool.isRequired,
};

export default Error;
