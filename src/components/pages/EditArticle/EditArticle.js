import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { Spin } from "antd";
import { withRouter } from "react-router-dom";

import NewArticleForm from "../../NewArticleForm/NewArticleForm";
import { editArticle, makeData } from "../../../redux/actions/actions";

import classes from "./EditArticle.module.scss";

function EditArticle({
  history,
  dispatch,
  loading,
  article: { slug, tagList, title, description, body },
}) {
  if (loading) {
    return (
      <Spin
        size="large"
        style={{
          width: "100%",
          margin: "20px auto",
        }}
      />
    );
  }
  const onSubmit = (data) => {
    dispatch(editArticle(makeData(data), history, slug));
  };

  return (
    <div className={classes["form-container"]}>
      <NewArticleForm
        tagList={tagList}
        title={title}
        description={description}
        body={body}
        onSubmit={onSubmit}
        label="Edit article"
      />
    </div>
  );
}

EditArticle.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.object,
  article: PropTypes.object,
  loading: PropTypes.bool,
  slug: PropTypes.string,
  tagList: PropTypes.array,
  title: PropTypes.string,
  description: PropTypes.string,
  body: PropTypes.string,
};
EditArticle.defaultProps = {
  dispatch: () => {},
  article: {},
  history: {},
  loading: true,
  slug: "",
  tagList: [],
  title: "",
  description: "",
  body: "",
};

function mstp(s) {
  return {
    article: s.article.article,
    loading: s.edit.loading,
  };
}
export default withRouter(connect(mstp)(EditArticle));
