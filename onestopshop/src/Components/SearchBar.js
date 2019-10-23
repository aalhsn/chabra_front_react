import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar({ onChange }) {
  return (
    <div className="form-group col-lg-6 col-12 mx-auto">
      <div className="input-group my-3">
        <input
          id="border-search"
          className="form-control"
          type="text"
          onChange={e => onChange(e.target.value)}
        />
        <div className="input-group-append">
          <span id="search-icon-color" className="input-group-text">
            <FontAwesomeIcon id="search-icon" icon={faSearch} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
