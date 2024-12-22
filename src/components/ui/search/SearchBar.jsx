import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

import classes from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const onClickSearch = async () => {
    return await onSearch(query);
  };
  return (
    <nav className={classes.searchBar}>
      <input
        className={classes.searchField}
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search over 1,000,000 recipes..."
      />
      <button className={classes.searchBtn} onClick={onClickSearch}>
        <CiSearch />
        Search
      </button>
    </nav>
  );
};

export default SearchBar;
