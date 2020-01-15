import React from "react";

const Search = props => {
  return (
    <header className="app__header">
      <input
        type="text"
        id="input-country"
        placeholder="Input country name..."
        onChange={props.change}
        value={props.value}
      />
      <button onClick={props.click}>FIND WEATHER</button>
    </header>
  );
};

export default Search;
