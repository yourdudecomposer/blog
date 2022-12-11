import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import FormHeader from "../ui/FormHeader/FormHeader";
import SubmitButton from "../ui/SubmitButton/SubmitButton";
import errorStyle from "../../assets/errorStyle";
import api from "../../services/Api/Api";
import { editFailed, editSuccess } from "../../redux/actions/actions";

import classes from "./EditProfileForm.module.scss";

function EditProfileForm({ history, dispatch }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    api
      .updateUser({ user: data })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.user));
        return res;
      })
      .then((res) => dispatch(editSuccess(res)))
      .then(() => history.push("/articles"))
      .catch((err) => dispatch(editFailed(err)));
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <FormHeader title="Edit Profile" />
      <label htmlFor="username">Username</label>
      <input
        id="username"
        defaultValue={JSON.parse(localStorage.getItem("user"))?.username}
        style={errors.username && errorStyle}
        {...register("username", {
          required: "Username is required",
        })}
        placeholder="Username"
      />
      <p className={classes["error-message"]}>{errors.username?.message}</p>

      <label htmlFor="mail">Email address</label>
      <input
        style={errors.mail && errorStyle}
        defaultValue={JSON.parse(localStorage.getItem("user"))?.email}
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
      <label htmlFor="password">New password</label>

      <input
        id="password"
        type="password"
        style={errors.password && errorStyle}
        {...register("password", {
          minLength: {
            value: 6,
            message: "Your password needs to be at least 6 characters.",
          },
          maxLength: {
            value: 40,
            message: "Max length is 40",
          },
        })}
        placeholder="New password"
      />
      <p className={classes["error-message"]}>{errors.password?.message}</p>
      <label htmlFor="avatar_image">Avatar image (url)</label>
      <input
        style={errors.avatar_image && errorStyle}
        id="avatar_image"
        {...register("image", {
          pattern: {
            value:
              // eslint-disable-next-line
              /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
            message: "Url is not correct",
          },
        })}
        placeholder="Avatar image"
      />
      <p className={classes["error-message"]}>{errors.image?.message}</p>
      <SubmitButton label="Save" />
    </form>
  );
}

EditProfileForm.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

EditProfileForm.defaultProps = {
  dispatch: () => {},
  history: {},
};

export default withRouter(connect()(EditProfileForm));
