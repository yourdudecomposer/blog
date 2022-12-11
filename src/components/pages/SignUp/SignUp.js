import { Alert } from "antd";
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import SignUpForm from "../../SignUpForm/SignUpForm";

import classes from "./SignUp.module.scss";

function SignUp({ isSignUpFailed }) {
  return (
    <div className={classes["form-container"]}>
      {isSignUpFailed && (
        <Alert
          style={{
            position: "absolute",
            width: "384px",
            height: "40px",
          }}
          message={isSignUpFailed.slice(1, -1)}
          type="error"
        />
      )}
      <SignUpForm />
    </div>
  );
}

SignUp.defaultProps = {
  isSignUpFailed: false,
};

SignUp.propTypes = {
  isSignUpFailed: PropTypes.bool,
};

function mstp(s) {
  return { isSignUpFailed: s.auth.isSignUpFailed };
}

export default connect(mstp)(SignUp);
