import React, { useState } from 'react';
import './search.css'
import searchIcon from '../../images/Group 18657.png'

const Search = ({ radius }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='search_container' style={{ borderRadius: radius }}>
      <img src={searchIcon} alt='' style={{ height: 15, width: 15 }} />
      <input
        type="text"
        id="search"
        placeholder="What would you like to learn"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;
