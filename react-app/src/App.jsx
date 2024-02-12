import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/Login";
import RegisterForm from "./components/Register";
import { Typography } from "@mui/material";
const App = () => {
  return (
    <React.Fragment>
      <Typography variant="h4" align="center" gutterBottom>
        Home Page{" "}
      </Typography>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
