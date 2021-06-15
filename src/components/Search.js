import React from "react";

function Search({ searchPokemon }) {
  const handleChange = (e) => {
    searchPokemon(e.target.value)
  }
  
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={(e) => handleChange(e)}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
