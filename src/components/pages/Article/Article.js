import { Spin } from "antd";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import ArticleHeader from "../../ArticleHeader/ArticleHeader";
import ArticleIntro from "../../ArticleIntro/ArticleIntro";
import ArticleText from "../../ArticleText/ArticleText";
import { fetchArticle } from "../../../redux/actions/actions";

import classes from "./Article.module.scss";

function Article({ dispatch, article, loading, error }) {
  const { slug } = useParams();

  useEffect(() => {
    dispatch(fetchArticle(slug));
  }, []);

  if (error) {
    return (
      <div className={classes["server-error"]}>Something wrong with server</div>
    );
  }

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

  return (
    <div className={classes["article-container"]}>
      <article className={classes.article}>
        <ArticleHeader {...article} />
        <ArticleIntro {...article} />
        <ArticleText {...article} />
      </article>
    </div>
  );
}

Article.propTypes = {
  article: PropTypes.objectOf(PropTypes.any),
  dispatch: PropTypes.func,
  error: PropTypes.objectOf(PropTypes.any),
  loading: PropTypes.bool,
};
Article.defaultProps = {
  article: {},
  dispatch: () => {},
  error: null,
  loading: true,
};

const mapStateToProps = (state) => ({
  article: state.article.article,
  loading: state.article.loading,
  error: state.article.error,
});

export default connect(mapStateToProps)(Article);
