
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Components/Loader";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(user, loading);
  if (loading) {
    return <Loader></Loader>
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
