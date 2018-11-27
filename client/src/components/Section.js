import React from 'react';

const Section = (props) => {
  return (
    <div className='row'>
      <div className='column'>{props.children}</div>
    </div>
  );
};

export default Section;
