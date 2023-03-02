import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  if (!isAuth) {
    return <Navigate to="/signin" />;
  }

  return <Outlet />;
}
