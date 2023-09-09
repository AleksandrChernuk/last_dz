import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "../pages/HomePage";
import Registration from "../pages/Registration";
import Login from "../pages/Logim";
import ContactsPage from "../pages/ContactsPage";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "../redux/userSlice/selector";
import { useEffect } from "react";
import { refreshUser } from "../redux/userSlice/operation";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Loading</div>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />} />
          <Route path="register" element={<RestrictedRoute redirectTo="/contacts" component={<Registration />} />} />
          <Route path="login" element={<RestrictedRoute redirectTo="/contacts" component={<Login />} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
