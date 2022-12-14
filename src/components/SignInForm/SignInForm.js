import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import FormHeader from "../ui/FormHeader/FormHeader";
import SubmitButton from "../ui/SubmitButton/SubmitButton";
import errorStyle from "../../assets/errorStyle";
import api from "../../services/Api/Api";
import { logIn, loginFailed } from "../../redux/actions/actions";

import classes from "./SignInForm.module.scss";

function SignInForm({ dispatch }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const dataForSend = {
      user: {
        email: data.mail,
        password: data.password,
      },
    };

    api
      .loginUser(dataForSend)
      .then((res) => localStorage.setItem("user", JSON.stringify(res.user)))
      .then(() => dispatch(logIn()))
      .catch((err) => dispatch(loginFailed(err)));
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <FormHeader title="Sign In" />

      <label htmlFor="mail">Email address</label>
      <input
        style={errors.mail && errorStyle}
        id="mail"
        {...register("mail", {
          required: "Email Address is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Email Address is not correct",
          },
        })}
        placeholder="Email address"
      />
      <p className={classes["error-message"]}>{errors.mail?.message}</p>
      <label htmlFor="password">Password</label>

      <input
        id="password"
        type="password"
        style={errors.password && errorStyle}
        {...register("password", {
          required: "Password is required",
        })}
        placeholder="Password"
      />
      <p className={classes["error-message"]}>{errors.password?.message}</p>

      <SubmitButton label="Login" />

      <p className={classes["sign-in-text"]}>
        Don’t have an account? <Link to="/sign-up">Sign Up</Link>.
      </p>
    </form>
  );
}

SignInForm.propTypes = {
  dispatch: PropTypes.func,
};
SignInForm.defaultProps = {
  dispatch: () => {},
};

export default connect()(SignInForm);
