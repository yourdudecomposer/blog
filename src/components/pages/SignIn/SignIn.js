import { Alert } from "antd";
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import SignInForm from "../../SignInForm/SignInForm";

import classes from "./SignIn.module.scss";

function SignIn({ isLogInFailed }) {
  return (
    <div className={classes["form-container"]}>
      {isLogInFailed && (
        <Alert
          style={{
            position: "absolute",
            width: "384px",
            height: "40px",
          }}
          message="can't log in"
          type="error"
        />
      )}
      <SignInForm />
    </div>
  );
}

function mstp(s) {
  return {
    isLogInFailed: s.auth.isLogInFailed,
  };
}

SignIn.defaultProps = {
  isLogInFailed: false,
};

SignIn.propTypes = {
  isLogInFailed: PropTypes.bool,
};

export default connect(mstp)(SignIn);
