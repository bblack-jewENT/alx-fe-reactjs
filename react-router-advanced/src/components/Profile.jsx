import { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import ProfileDetails from "./ProfileDetails.jsx";
import ProfileSettings from "./ProfileSettings.jsx";

function Profile() {
  return (
    <>
      <h1>Profile 🚻</h1>
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default Profile;
