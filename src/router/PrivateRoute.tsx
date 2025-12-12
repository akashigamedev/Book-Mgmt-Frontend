import { Navigate, Outlet } from "react-router";
import useAuthStore from "../features/auth/useAuthStore";

const PrivateRoute = () => {
  const authData = useAuthStore((s) => s.data);

  if (authData?.name) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default PrivateRoute;
