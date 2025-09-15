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
        type="text"
        placeholder="Search recipes by title..."
        value={searchTerm}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "25px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
};

export default SearchBar;
