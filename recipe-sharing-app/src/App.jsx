import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/recipeList";
import AddRecipeForm from "./components/recipeForm";
import RecipeDetails from "./components/recipeDetails";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar />
              <RecipeList />
              <AddRecipeForm />
            </>
          }
        />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
