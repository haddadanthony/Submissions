import React from "react";

const Search = props => {
  return (
    <header className="app__header">
      <input
        type="text"
        id="input-country"
        placeholder="Input country name..."
      />
      <button>FIND WEATHER</button>
    </header>
  );
};

export default Search;
