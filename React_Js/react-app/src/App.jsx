// import React from "react";
// import Home from "./components/Home.jsx";
// import Hooks from "./components/hooks/Hooks-useSate.jsx";
// import Person from "./components/props/Person.jsx";
// import User from "./components/hooks/User.jsx";
// import HooksUseEffect from "./components/hooks/Hooks-useEffect.jsx";
// import HooksUseState from "./components/hooks/Hooks-useSate.jsx";
// import MainContent from "./Portfolio/MainContent.jsx";

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import LoginForm from "./LoginForm/Login";
// import RegisterForm from "./LoginForm/Register";
// import ContainedButton from "./LoginForm/Button";

// function App() {
//   return (
// <React.Fragment>
{
  /* <h2>Raect Js</h2>
      <p>I'm Jalal Hussain, MERN stack intern at Rinor.</p>
      <hr />
      <Home />
      <hr />
      <Person prop={{ name: "Jalal Hussain", status: "student" }} />
      <hr />
      <HooksUseState />
      <hr />
      <User />
      <hr />
      <HooksUseEffect /> */
}
{
  /* <div className="main-content">
        <MainContent />
      </div> */
}
//   <ContainedButton />
//   <BrowserRouter>
//     <Routes>
//       <Route path="/login" element={<LoginForm />} />
//       <Route path="/register" element={<RegisterForm />} />
//     </Routes>
//   </BrowserRouter>
// </React.Fragment>

//   );
// }

// export default App;

// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import LoginPage from "./LoginForm/Login";
import RegisterPage from "./LoginForm/Register";
import About from "./LoginForm/About";
import Contact from "./LoginForm/Contact";

const App = () => {
  const menuItems = [
    { title: "Login", path: "/login" },
    { title: "Register", path: "/register" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];
  return (
    <React.Fragment>
      <BrowserRouter>
        <AppBar position="fixed" style={{ backgroundColor: "#1769aa" }}>
          <Toolbar sx={{p:0.5}}>
            {/* Logo on the right */}
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "flex-start",
                width: 100,
                height: 50,
                maxHeight: 70,
                objectFit: "scale-down"
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
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
