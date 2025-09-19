import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>GitHub User Search</h1>
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={<div>Welcome to GitHub User Search</div>}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
