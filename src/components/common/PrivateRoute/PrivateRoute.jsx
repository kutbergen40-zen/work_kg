import { Navigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (!user) {
    return <Navigate to="/register" replace />;
  }

  return children;
}

export default PrivateRoute;