import React from "react";
import { useRecipeStore } from "./store";

const RecipeList = () => {
  console.log("useRecipeStore in RecipeList:", useRecipeStore);
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
