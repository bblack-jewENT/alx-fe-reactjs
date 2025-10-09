import { Navigate } from "react-router-dom";

// Custom hook to simulate authentication
function useAuth() {
  // In a real app, this would check context or global state
  return localStorage.getItem("isAuthenticated") === "true";
}

function ProtectedRoute({ children }) {
  const isAuthenticated = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;
