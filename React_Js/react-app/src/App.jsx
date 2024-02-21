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
  linkClasses,
} from "@mui/material";
import LoginPage from "./LoginForm/Login";
import RegisterPage from "./LoginForm/Register";
import About from "./LoginForm/About";
import Contact from "./LoginForm/Contact";
import ProductCard from "./LoginForm/ProductCard";
import SingleProduct from "./LoginForm/SingleProduct";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const App = () => {
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Create a custom theme based on dark mode state
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light", // Set theme mode based on darkMode state
      background: {
        default: darkMode ? "#0d4a7d" : "#f5f5f5", // Set the background color based on darkMode state
      }
    },
  });

  const menuItems = [
    { title: "Login", path: "/login" },
    { title: "Register", path: "/register" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Shop", path: "/shop" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalize CSS */}
      <BrowserRouter>
        <AppBar position="fixed" style={{ backgroundColor: "#1769aa" }}>
          <Toolbar sx={{ p: 0.5 }}>
            {/* Logo on the right */}
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "flex-start",
                width: 100,
                height: 50,
                maxHeight: 70,
                objectFit: "scale-down",
              }}
            >
              <img src="./src/LoginForm/assets/logo.png" alt="RINOR" />
            </Box>

            {/* Menu items on the left */}
            {menuItems.map((item) => (
              <Button
                key={item.title}
                color="inherit"
                sx={{
                  marginLeft: 2,
                  "&:hover": { backgroundColor: "#bbdefb", color: "#1769aa" },
                }}
                component={Link} // Use the Link component as the root component of Button
                to={item.path} // Set the navigation path
              >
                {item.title}
              </Button>
            ))}
            {darkMode ? (
              <Brightness7Icon
                sx={{
                  marginLeft: 2,
                  "&:hover": { cursor: "pointer", color: "#ffffff" },
                }}
                onClick={toggleDarkMode}
              />
            ) : (
              <Brightness4Icon
                sx={{
                  marginLeft: 2,
                  "&:hover": { cursor: "pointer", color: "#ffffff" },
                }}
                onClick={toggleDarkMode}
              />
            )}
          </Toolbar>
        </AppBar>

        <Routes>
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
