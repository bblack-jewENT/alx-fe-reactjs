import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './components/UserContext';

const userData = {
  name: "Jane Doe",
  email: "jane@example.com",
};

function App() {
  return (
  <UserContext.Provider value={userData}>
     <ProfilePage />;
  </UserContext.Provider>
);
}

export default App;
