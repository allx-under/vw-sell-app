import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoute() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (isAuth) {
    return <Navigate to="/profile" />;
  }

  return <Outlet />;
}
