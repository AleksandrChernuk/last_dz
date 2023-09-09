import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUserToken } from "../redux/userSlice/selector";

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const token = useSelector(selectUserToken);
  return token ? <Navigate to={redirectTo} /> : Component;
};
