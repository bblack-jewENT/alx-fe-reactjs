import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import "./components/Search.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Search />
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={<div style={{
                padding-bottom: 25px;
              }}>Welcome to GitHub User Search</div>}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
