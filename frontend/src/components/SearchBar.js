import React from 'react';

const SearchBar = ({input:keyword, onChange:setKeyword}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.9rem"};
  return (
    <input 
        style={BarStyling}
        key="random1"
        value={keyword}
        placeholder={"Search for stocks"}
        onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar