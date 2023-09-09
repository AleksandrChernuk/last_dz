import { useDispatch, useSelector } from "react-redux";
import { selectUserEmail } from "../../redux/userSlice/selector";
import { Box, Button, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { logOut } from "../../redux/userSlice/operation";

const UserMenu = () => {
  const userEmail = useSelector(selectUserEmail);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = () => {
    dispatch(logOut());
    navigate("/");
  };
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Typography variant="subtitle1">{userEmail}</Typography>
      <Button variant="contained" color="warning" size="small" onClick={onClick} type="button">
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;
