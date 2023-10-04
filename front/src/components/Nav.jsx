import React from 'react';
import SearchBar from './SearchBar';

function Nav({ onSearch }) {
  return (
    <div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default Nav;
