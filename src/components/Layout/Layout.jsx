import { Box, Container, Paper, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "../AppBar/NavBar";

const Layout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <header>
        <NavBar />
      </header>
      <Box component="main" sx={{ flexGrow: 1, flexShrink: 0, flexBasis: "auto" }}>
        <Container>
          <Outlet />
        </Container>
      </Box>
      <footer>
        <Paper elevation={3} sx={{ padding: "16px" }}>
          <Container>
            <Typography variant="body1">Footer</Typography>
          </Container>
        </Paper>
      </footer>
    </Box>
  );
};

export default Layout;
