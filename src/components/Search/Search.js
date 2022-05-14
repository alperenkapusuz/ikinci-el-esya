import React from "react";
import "./Search.css";

const Search = ({
  searchCategory,
  setSearchCategory,
  searchTitle,
  setSearchTitle,
}) => {
  return (
    <div className="Search__page">
      <div className="Search__category_div">
        <input
          name="search"
          value={searchCategory}
          className="form-control me-sm-2"
          type="text"
          placeholder="Category"
          onChange={(e) => setSearchCategory(e.target.value)}
        />
      </div>
      <div className="Search__title_div">
        <input
          name="search"
          value={searchTitle}
          className="form-control me-sm-2"
          type="text"
          placeholder="Title"
          onChange={(e) => setSearchTitle(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
