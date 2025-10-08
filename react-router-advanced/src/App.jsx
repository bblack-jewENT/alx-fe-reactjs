import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import Profile from "./components/Profile.jsx";
import BlogPost from "./components/BlogPost.jsx";
import Login from "./components/Login.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import "./App.css";

function App() {
  return (
    <>
      {/* BrowserRouter is already wrapped in main.jsx, so don't wrap again */}
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Protected nested routes for profile */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        {/* Dynamic blog route as required */}
        <Route path="/blog/:id" element={<BlogPost />} />
        {/* Example of nested route */}
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome to the Blog App</h1>
      <p>Use the navigation to visit profile or blog posts.</p>
    </div>
  );
}

export default App;
