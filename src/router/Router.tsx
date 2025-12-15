import { Routes, Route, Navigate } from "react-router";
import LoginPage from "../features/auth/login/pages/LoginPage";
import NotFoundPage from "../globals/pages/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import AdminLayout from "../globals/layouts/AdminLayout";
import UserLayout from "../globals/layouts/UserLayout";
import DynamicIndexPage from "./DynamicIndexPage";
import UserDashboard from "../features/user/pages/UserDashboard";
import RequestsPage from "../features/admin/pages/RequestsPage";
import BooksPage from "../features/admin/pages/BooksPage";

const Router = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      {/* Private route that dynamically picks layout based on user role */}
      <Route element={<PrivateRoute allowedRoles={["admin", "user"]} />}>
        <Route index element={<DynamicIndexPage />} />

        <Route path="/admin/*" element={<AdminLayout />}>
          <Route index element={<Navigate to={"/admin/requests"} />} />
          <Route path="requests" element={<RequestsPage />} />
          <Route path="payments" element={<>Payment Status</>} />
          <Route path="books" element={<BooksPage />} />
          <Route path="users" element={<>Users List</>} />
        </Route>

        <Route path="/user/*" element={<UserLayout />}>
          <Route path="dashboard" element={<UserDashboard />} />
          {/* other user pages */}
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
