import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUserToken } from "../redux/userSlice/selector";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const token = useSelector(selectUserToken);
  const shouldRedirect = !token;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
