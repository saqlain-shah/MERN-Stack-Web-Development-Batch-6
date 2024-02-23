import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";

import LoginPage from "./LoginForm/Login";
import RegisterPage from "./LoginForm/Register";
import About from "./LoginForm/About";
import Contact from "./LoginForm/Contact";
import ProductCard from "./LoginForm/ProductCard";
import SingleProduct from "./LoginForm/SingleProduct";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import MultiStepForm from "./Form/Index";

const App = () => {
  const [darkMode, setDarkMode] = useState(false); // State for dark mode
  const [anchorEl, setAnchorEl] = useState(null); // State for anchor element of the menu

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Create a custom theme based on dark mode state
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light", // Set theme mode based on darkMode state
      background: {
        default: darkMode ? "#0d4a7d" : "#f5f5f5", // Set the background color based on darkMode state
      },
    },
  });

  const menuItems = [
    { title: "Login", path: "/login" },
    { title: "Register", path: "/register" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Form", path: "/form" },
    { title: "Shop", path: "/shop" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalize CSS */}
      <BrowserRouter>
        <AppBar position="fixed" style={{ backgroundColor: "#1769aa" }}>
          <Toolbar
            sx={{ p: 0.5, display: "flex", justifyContent: "space-around" }}
          >
            {/* Logo */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                minWidth: 100,
                width: 120,
                height: 50,
              }}
            >
              <img
                src="./src/LoginForm/assets/logo.png"
                alt="RINOR"
                style={{ maxWidth: "100%", height: "auto " }}
              />
            </Box>

            {/* Menu icon for small screens */}
            <IconButton
              sx={{ display: { sm: "flex", md: "none" }, ml: "auto" }}
              color="inherit"
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>

            {/* Menu items */}
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },
                alignItems: "center",
              }}
            >
              {menuItems.map((item) => (
                <Button
                  key={item.title}
                  color="inherit"
                  sx={{
                    marginLeft: 2,
                    "&:hover": { backgroundColor: "#bbdefb", color: "#1769aa" },
                  }}
                  component={Link}
                  to={item.path}
                >
                  {item.title}
                </Button>
              ))}
            </Box>

            {/* Dark mode toggle */}
            <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
              {darkMode ? (
                <Brightness7Icon
                  sx={{ "&:hover": { cursor: "pointer", color: "#ffffff" } }}
                  onClick={toggleDarkMode}
                />
              ) : (
                <Brightness4Icon
                  sx={{ "&:hover": { cursor: "pointer", color: "#ffffff" } }}
                  onClick={toggleDarkMode}
                />
              )}
            </Box>
          </Toolbar>
        </AppBar>

        {/* Responsive Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                width: 200,
                marginTop: 2,
                backgroundColor: "#1769aa",
              },
            },
          }}
        >
          {menuItems.map((item) => (
            <MenuItem
              key={item.title}
              onClick={() => {
                handleClose();
                // Navigate to the selected page
              }}
              component={Link}
              to={item.path}
              sx={{ color: "#ffffff" }}
            >
              {item.title}
            </MenuItem>
          ))}
        </Menu>

        <Routes>
          <Route path="/form" element={<MultiStepForm />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<ProductCard />} />
          <Route path="/products/:id" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
