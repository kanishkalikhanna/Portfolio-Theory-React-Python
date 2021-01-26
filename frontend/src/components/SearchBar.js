import React from 'react';
import '../css/components.css';

const SearchBar = ({input:keyword, onChange:setKeyword}) => {
  return (
    <input 
        className = "SearchBar"
        key="random1"
        value={keyword}
        placeholder={"Search for stocks"}
        onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar