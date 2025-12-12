import { Navigate, Outlet } from "react-router";
import useAuthStore from "../features/auth/useAuthStore";

const PublicRoute = () => {
  const authData = useAuthStore((s) => s.data);

  if (!authData?.name) {
    return <Outlet />;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default PublicRoute;
