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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./LoginForm/Layout";
import LoginPage from "./LoginForm/Login";
import RegisterPage from "./LoginForm/Register";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
