import React from "react";
import { useRecipeStore } from "./recipeStore";

const SearchBar = () => {
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  const handleChange = (e) => {
    const value = e.target.value;
    console.log("SearchBar: Input changed to:", value);
    setSearchTerm(value);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        className="searchBar-input"
        type="text"
        placeholder="Search recipes by title..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
