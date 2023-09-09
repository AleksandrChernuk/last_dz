import { Box, Button } from "@mui/material";
import Login from "../../pages/Logim";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { email } from "../../redux/userSlice/selector";

const AuthNav = () => {
  return (
    <Box sx={{ display: "flex", gap: ".5rem" }}>
      <Button size="small" component={NavLink} to="register" color="inherit" variant="outlined">
        Регистрация
      </Button>
      <Button size="small" component={NavLink} to="login" color="inherit" variant="outlined">
        Войти
      </Button>
    </Box>
  );
};

export default AuthNav;
