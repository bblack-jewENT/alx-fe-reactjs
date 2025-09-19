import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  return (
    <div>
      <h2>Recommended for You</h2>
      <button onClick={generateRecommendations}>
        Generate Recommendations
      </button>
      {recommendations.length === 0 ? (
        <p>No recommendations yet. Add some favorites and click generate.</p>
      ) : (
        recommendations.map((recipe) => (
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
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
