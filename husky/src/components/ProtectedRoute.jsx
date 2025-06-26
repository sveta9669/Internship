import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const userID = localStorage.getItem("userId");

  if (!userID) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default ProtectedRoute;