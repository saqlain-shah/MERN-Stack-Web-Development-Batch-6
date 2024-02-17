import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import LoginForm from "./components/Login";
import RegisterForm from "./components/Register";
const App = () => {

  const menuItems = [
    { title: 'Login', path: '/login' },
    { title: 'Register', path: '/register' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];
  return (
    <React.Fragment>
          <BrowserRouter>

       <AppBar position="static" style={{ backgroundColor: 'blue' }}>
      <Toolbar>
        {/* Logo on the right */}
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-start' }}>
          <Typography variant="h4">
      RINOR 
      </Typography>
        </Box>

        {/* Menu items on the left */}
        {menuItems.map((item) => (
          <Button
            key={item.title}
            color="inherit"
            sx={{ marginLeft: 2, '&:hover': { backgroundColor: '#FF8911' } }}
            component={Link} // Use the Link component as the root component of Button
            to={item.path} // Set the navigation path
          >
            {item.title}
          </Button>
        ))}
      </Toolbar>
    </AppBar>


        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/about" element={<h4>About Page</h4>} />
          <Route path="/contact" element={ <h4>Contact Page</h4>} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
