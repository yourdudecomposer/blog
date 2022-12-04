import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";

import ArticlePreview from "../ArticlePreview/ArticlePreview";
import { fetchArticles } from "../../redux/actions/actions";

import classes from "./ArticleList.module.scss";

function ArticleList({ dispatch, articles, loading, error }) {
  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  if (error) {
    return (
      <div className={classes["server-error"]}>
        Something wrong with server or internet
      </div>
    );
  }

  if (loading) {
    return <div className={classes.loading}>loading</div>;
  }

  return (
    <section className={classes["article-list"]}>
      {articles.map((el) => (
        <ArticlePreview key={el.slug} {...el} />
      ))}
    </section>
  );
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.any),
  dispatch: PropTypes.func,
  error: PropTypes.object,
  loading: PropTypes.bool,
};
ArticleList.defaultProps = {
  articles: [],
  dispatch: () => {},
  error: null,
  loading: false,
};

const mapStateToProps = (state) => ({
  articles: state.articles.articles,
  loading: state.articles.loading,
  error: state.articles.error,
});

export default connect(mapStateToProps)(ArticleList);
