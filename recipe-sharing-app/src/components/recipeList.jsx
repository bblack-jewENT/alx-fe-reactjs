import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "../stores/store";
import FavoriteButton from "./FavoriteButton";

const RecipeList = () => {
  console.log("useRecipeStore in RecipeList:", useRecipeStore);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  console.log("RecipeList: filteredRecipes length:", filteredRecipes.length);

  return (
    <div>
      {filteredRecipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            marginBottom: "10px",
            border: "1px solid #ddd",
            padding: "10px",
          }}
        >
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </Link>
          <FavoriteButton recipeId={recipe.id} />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
