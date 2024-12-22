import React from "react";
import { useLocation } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  const location = useLocation();

  const shouldHideNavbar = location.pathname !== "/";
  if (shouldHideNavbar) return null;
  return (
    <header className={classes.mainHeader}>
      <h2 className={classes.primaryLogo}>RECIPES APP</h2>
    </header>
  );
};

export default Header;
