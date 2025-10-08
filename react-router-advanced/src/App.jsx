import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/Profile.jsx";
import BlogPost from "./components/BlogPost.jsx";
import Login from "./components/Login.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/posts/:id" element={<BlogPost />} />
      </Routes>
    </>
  );
}

export default App;
