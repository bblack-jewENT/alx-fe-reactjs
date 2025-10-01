import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Failed to load recipes:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Recipe Sharing Platform
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:scale-105 overflow-hidden flex flex-col"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex-1 flex flex-col">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600 mb-4 flex-1">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
