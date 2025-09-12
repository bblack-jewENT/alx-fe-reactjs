import { useState } from "react";
import RecipeList from "./stores/recipeStore";
import AddRecipeForm from "./stores/recipeFormStore";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RecipeList />
      <AddRecipeForm />
    </>
  );
}

export default App;
