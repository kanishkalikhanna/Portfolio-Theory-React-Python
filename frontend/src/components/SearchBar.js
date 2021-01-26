import React from 'react';

const SearchBar = ({input:keyword, onChange:setKeyword}) => {
  
  const searchBarStyle = {width:"25rem", background:"#F2F1F9", border:"2pt", padding:"0.7rem", margin: "6%", marginTop: "14%"};
  
  return (
    <input 
        style={searchBarStyle}
        key="random1"
        value={keyword}
        placeholder={"Search for stocks"}
        onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar