import { Box, Toolbar, Button, AppBar, Container, useMediaQuery, List, ListItem, Drawer } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import { NavLink } from "react-router-dom";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectUserToken } from "../../redux/userSlice/selector";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 960px)");
  const userToken = useSelector(selectUserToken);

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [isSmallScreen]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const list = (
    <List sx={{ padding: "0", display: { lg: "flex", md: "flex" }, gap: "10px" }}>
      <ListItem sx={{ padding: { lg: "0", md: "0" } }}>
        <Button size="small" component={NavLink} to="/" color="inherit" variant="outlined" fullWidth>
          Home
        </Button>
      </ListItem>
      <ListItem sx={{ padding: { lg: "0", md: "0" } }}>
        <Button size="small" component={NavLink} to="/contacts" color="inherit" variant="outlined">
          Contacts
        </Button>
      </ListItem>
    </List>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="success">
        <Container>
          <Toolbar disableGutters>
            {isSmallScreen ? (
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                <MenuIcon fontSize="large" />
              </IconButton>
            ) : (
              list
            )}
            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer} variant="temporary">
              <Box my={2}>
                <IconButton color="inherit" onClick={toggleDrawer} alignSelf="center">
                  <CloseIcon />
                </IconButton>

                {list}
              </Box>
            </Drawer>
            <Box sx={{ display: "flex", gap: "10px" }}></Box>
            <Box sx={{ marginLeft: "auto" }}>{!userToken ? <AuthNav /> : <UserMenu />}</Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default NavBar;
//
