// App.js

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RegistrationForm from './component/reg';
import LoginForm from './component/LoginFrom';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/loginform"><button>Login</button></Link>
        <Link to="/reg"><button>Reg</button></Link>
      </nav>
      <Routes>
        <Route path="/reg" element={<RegistrationForm />} />
        <Route path="/loginform" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
