import React from "react";
import PropTypes from "prop-types";

import classes from "./ArticleIntro.module.scss";

function ArticleIntro({ description }) {
  return (
    <section className={classes["article-intro"]}>
      <p className={classes["article-intro__text"]}>{description}</p>
    </section>
  );
}

ArticleIntro.propTypes = {
  description: PropTypes.string,
};
ArticleIntro.defaultProps = {
  description: "",
};
export default ArticleIntro;
