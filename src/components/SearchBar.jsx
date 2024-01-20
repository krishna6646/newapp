// SearchBar.js
import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';

const SearchBar = ({ onPlaceSelected }) => {
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autocomplete) => {
    setAutocomplete(autocomplete);
  };

  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      onPlaceSelected(place);
    }
  };

  return (
    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
      <input type="text" placeholder="Search for a location" />
    </Autocomplete>
  );
};

export default SearchBar;
