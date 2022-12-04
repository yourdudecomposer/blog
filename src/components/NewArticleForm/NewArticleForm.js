import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";

import TagField from "../TagField/TagField";
import FormHeader from "../ui/FormHeader/FormHeader";
import SubmitButton from "../ui/SubmitButton/SubmitButton";

import classes from "./NewArticleForm.module.scss";

function NewArticleForm({
  onSubmit: onS,
  label,
  tagList,
  title,
  description,
  body,
}) {
  const {
    register,
    unregister,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => onS(data);

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <FormHeader title={label} />
      <label htmlFor="title">Title</label>

      <input
        defaultValue={title}
        id="title"
        placeholder="Title"
        {...register("title", { required: true })}
      />
      {errors.title && (
        <span className={classes["error-message"]}>Title is required</span>
      )}
      <label htmlFor="description">Short description</label>
      <input
        defaultValue={description}
        id="description"
        placeholder="Title"
        {...register("description", { required: true })}
      />
      {errors.description && (
        <span className={classes["error-message"]}>Title is required</span>
      )}
      <label htmlFor="body">Text</label>
      <textarea
        defaultValue={body}
        id="body"
        placeholder="Text"
        {...register("body", { required: true })}
      />
      {errors.body && (
        <span className={classes["error-message"]}>Text is required</span>
      )}

      <TagField tagList={tagList} unregister={unregister} register={register} />
      <SubmitButton label="Send" />
    </form>
  );
}

NewArticleForm.propTypes = {
  body: PropTypes.string,
  description: PropTypes.string,
  label: PropTypes.string,
  onSubmit: PropTypes.func,
  tagList: PropTypes.arrayOf(PropTypes.any),
  title: PropTypes.string,
};
NewArticleForm.defaultProps = {
  body: "",
  description: "",
  label: "",
  onSubmit: () => {},
  tagList: [],
  title: "",
};

function mstp(s) {
  return {
    created: s.create.created,
  };
}

export default connect(mstp)(NewArticleForm);
