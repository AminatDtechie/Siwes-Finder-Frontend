import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }: { allowedRoles?: string[] }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const location = useLocation();

  // Define routes that don't need auth
  const publicRoutes = ["/", "/login", "/register", "/placements"];


  if (publicRoutes.includes(location.pathname)) {
    return <Outlet />;
  }

  // If no token, redirect to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If roles are provided, check if user role is allowed
  if (allowedRoles && !allowedRoles.includes(role || "")) {
    return <Navigate to="/404" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
