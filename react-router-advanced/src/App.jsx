import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/Profile.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile-details" element={<ProfileDetails />} />
        <Route path="/profile-settings" element={<ProfileSettings />} />
      </Routes>
    </>
  );
}

export default App;
