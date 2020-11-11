import React from "react";

const SearchBar = ({ onChange }) => (
  <div className="form-group col-lg-6 col-12 mx-auto">
    <div className="input-group my-3">
      <input
        className="form-control"
        type="text"
        placeholder="search.."
        onChange={(event) => onChange(event.target.value)}
      />
      <div className="input-group-append">
        <span className="input-group-text">search</span>
      </div>
    </div>
  </div>
);

export default SearchBar;
