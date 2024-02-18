// App.js

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RegistrationForm from './component/reg';
import LoginForm from './component/LoginFrom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import AboutPage from './component/about';
import ContactPage from './component/contact';

const App = () => {
  const menuItems = [
    { title: 'Login', path: '/LoginForm' },
    { title: 'Register', path: '/reg' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];
  return (

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
        <Route path="/reg" element={<RegistrationForm />} />
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />


      </Routes>
    </BrowserRouter>
  );
};

export default App;
