import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  // Simple authentication check - in a real app, this would check for a token or user state
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
