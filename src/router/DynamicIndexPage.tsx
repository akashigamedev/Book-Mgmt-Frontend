import { Navigate } from "react-router";
import useAuthStore from "../features/auth/useAuthStore";

const DynamicIndexPage = () => {
  const authData = useAuthStore((s) => s.data);

  if (authData?.role === "admin")
    return <Navigate to="/admin/requests" replace />;
  if (authData?.role === "user")
    return <Navigate to="/user/dashboard" replace />;

  return <Navigate to="/login" replace />;
};

export default DynamicIndexPage;
