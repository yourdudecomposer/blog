import PropTypes from "prop-types";
import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

import like from "../../assets/img/heart.svg";
import Tag from "../ui/Tag/Tag";
import avatar from "../../assets/img/avatar.svg";

import classes from "./ArticleHeader.module.scss";

function ArticleHeader({
  title,
  createdAt,
  favoritesCount,
  slug,
  tagList,
  author: { username, image },
}) {
  return (
    <header className={classes["article-header"]}>
      <div className={classes["article-header__left-side"]}>
        <Link to={`/articles/${slug}`}>
          <h2 className={classes["article-header__title"]}>{title}</h2>
        </Link>
        <span className={classes.likes}>
          <img
            src={like}
            alt="like"
            className={classes["article-header__like-img"]}
          />
          <span className={classes["article-header__like-count"]}>
            {favoritesCount}
          </span>
        </span>
        <section className={classes["article-header__tag-list"]}>
          <Tag tagList={tagList} />
        </section>
      </div>
      <section className={classes["article-header__right-side"]}>
        <h3 className={classes["article-header__author-name"]}>{username}</h3>
        <p className={classes["article-header__date"]}>
          {format(new Date(createdAt), "MMMM d, Y")}
        </p>
        <img
          src={image}
          alt=""
          className={classes["article-header__author-img"]}
        />
      </section>
    </header>
  );
}

ArticleHeader.propTypes = {
  author: PropTypes.shape({
    username: PropTypes.string,
    image: PropTypes.string,
  }),
  createdAt: PropTypes.string,
  favoritesCount: PropTypes.number,
  slug: PropTypes.string,
  tagList: PropTypes.array,
  title: PropTypes.string,
};

ArticleHeader.defaultProps = {
  author: {
    username: "John Doe",
    image: avatar,
  },
  createdAt: "0",
  favoritesCount: 0,
  slug: "",
  tagList: [],
  title: "",
};
export default ArticleHeader;
