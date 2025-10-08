import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true");
    setIsLoggedIn(true);
    navigate("/profile");
  };

  return (
    <>
      <h1>Login</h1>
      {!isLoggedIn ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <p>You are logged in!</p>
      )}
    </>
  );
}

export default Login;
