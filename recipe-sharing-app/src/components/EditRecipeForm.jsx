import { useState, useEffect } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = ({ recipeId, onSave }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe?.title || "");
  const [description, setDescription] = useState(recipe?.description || "");

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe(recipeId, { title, description });
    if (onSave) onSave();
  };

  if (!recipe) return null;

  return (
    <form
<<<<<<< HEAD
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
      onSubmit={handleSubmit}
    >
=======
        className="form"
        onSubmit={handleSubmit}>
>>>>>>> 56224c408e3d263fe8b6724701f6848994ac20bd
      <input
        className="form-input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        className="form-textarea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;
