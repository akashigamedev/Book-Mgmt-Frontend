import { Navigate, Outlet } from "react-router";
import useAuthStore from "../features/auth/useAuthStore";

const PrivateRoute = ({ allowedRoles }: { allowedRoles: string[] }) => {
  const authData = useAuthStore((s) => s.data);

  if (!authData?.name) {
    return <Navigate to="/login" replace />;
  } else {
    if (!allowedRoles.includes(authData.role))
      return <Navigate to="/unauthorized" replace />;

    return <Outlet />;
  }
};

export default PrivateRoute;
