import React, { useState } from "react";
import "./search.css";

const Search = ({ onFormSubmit }) => {
  const [search, setSearch] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    onFormSubmit(search);
  };

  const getSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="input-group">
      <form onSubmit={onSubmit} className="form">
        <div className="field">
          <label className="label fw-bolder">Search Crypto:</label>
          <input type="text" value={search} onChange={getSearch} />
        </div>
      </form>
    </div>
  );
};

export default Search;
