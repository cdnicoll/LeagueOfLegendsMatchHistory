import React from 'react';
import { Segment, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <Segment basic textAlign="center">
      <Image src="./assets/landing.png" wrapped />
      <h1 className="ui header">{title}</h1>
    </Segment>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
