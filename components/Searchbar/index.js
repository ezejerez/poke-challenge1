import React from "react";
import "./searchbar.css";
import SearchIcon from "../../public/img/search-icon.png";

function Searchbar({ onChange }) {
  return (
    <>
      <div className="searchbar-wrapper">
        <form className="searchbar-container">
          <input
            type="text"
            placeholder="Search.."
            name="search"
            className="searchbar-input"
            onChange={onChange}
          />
          <img src={SearchIcon} alt="Search icon" className="icon" />
        </form>
      </div>
    </>
  );
}

export default Searchbar;
