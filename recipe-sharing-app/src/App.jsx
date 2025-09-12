import { useState } from "react";
import RecipeList from "./components/recipeList";
import AddRecipeForm from "./components/recipeForm";
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
