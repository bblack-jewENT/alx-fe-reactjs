import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './components/UserContext';

const userData = {
  name: "Jane Doe",
  email: "jane@example.com",
  // ...other user data
};

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return <ProfilePage userData={userData} />;
}

export default App;
