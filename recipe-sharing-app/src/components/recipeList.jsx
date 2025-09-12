import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "../stores/store";

const RecipeList = () => {
  console.log("useRecipeStore in RecipeList:", useRecipeStore);
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      {recipes.map((recipe) => (
        <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
          <div>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecipeList;
