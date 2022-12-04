import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import HeaderRightSide from "../HeaderRightSide/HeaderRightSide";

import classes from "./Header.module.scss";

function Header() {
  return (
    <header className={classes.header}>
      <Link to="/">
        <h1>Realworld Blog</h1>
      </Link>
      <HeaderRightSide />
    </header>
  );
}

function mstp(state) {
  return {
    token: state.auth.token,
  };
}
export default connect(mstp)(Header);
