import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./AddRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(id))
  );

  const [isEditing, setIsEditing] = useState(false);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <EditRecipeForm recipeId={recipe.id} onSave={handleSave} />
      ) : (
        <div>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <button onClick={handleEdit}>Edit</button>
          <DeleteRecipeButton recipeId={recipe.id} />
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
