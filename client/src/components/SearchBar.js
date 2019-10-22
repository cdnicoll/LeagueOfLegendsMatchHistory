import React, { useState } from 'react';
import { Input, Button } from 'semantic-ui-react';

const SearchBar = (props) => {
  const [term, setTerm] = useState('');

  const onFormSubmit = event => {
    event.preventDefault();
    props.onSubmit(term);
  };

  return (
    <div>
      <Input
        icon='search'
        value={term}
        placeholder='Search...'
        onChange={e => setTerm(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <Button
        disabled={!term}
        loading={props.loading}
        content='Search'
        onClick={onFormSubmit}
      />
    </div>
  );
};

export default SearchBar;
