import React from "react";
import "./Search.css";

const Search = ({
  searchCategory,
  setSearchCategory,
  searchPlace,
  setSearchPlace,
  searchTitle,
  setSearchTitle,
}) => {
  return (
    <div className="Search__page">
      <form className="Search__category_div">
        <label>Category filter</label>
        <input
          name="search"
          list="category"
          value={searchCategory}
          className="form-control me-sm-2"
          type="text"
          placeholder="Category"
          onChange={(e) => setSearchCategory(e.target.value)}
        />
        <datalist id="category">
          <option value="Bilgisayar" />
          <option value="Telefon" />
          <option value="Araba" />
          <option value="Beyaz eşya" />
          <option value="Spor" />
          <option value="Aksesuar" />
          <option value="Kitap" />
          <option value="Diğer" />
        </datalist>
      </form>
      <div className="Search__place_div">
        <label>Place filter</label>
        <input
          name="search"
          value={searchPlace}
          className="form-control me-sm-2"
          type="text"
          placeholder="Place"
          onChange={(e) => setSearchPlace(e.target.value)}
        />
      </div>
      <div className="Search__title_div">
        <label>Search</label>
        <input
          name="search"
          value={searchTitle}
          className="form-control me-sm-2"
          type="text"
          placeholder="iPhone"
          onChange={(e) => setSearchTitle(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
