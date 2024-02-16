// Layout.jsx
import React from "react";
import ContainedButton from "./Button";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <ContainedButton />
      {children}
    </React.Fragment>
  );
};

export default Layout;
