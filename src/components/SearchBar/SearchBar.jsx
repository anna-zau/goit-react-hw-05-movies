import { useState } from 'react';
import PropTypes from 'prop-types'; // ES6

import { Form, Input, Button } from './SearchBar.styled';

export const SearchBox = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleFormSubmit = evt => {
    evt.preventDefault();
    onSubmit(query);

    setQuery('');
  };

  const handleInputChange = evt => {
    setQuery(evt.target.value);
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Input
        type="text"
        placeholder="Enter movie title"
        onChange={handleInputChange}
        value={query}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
