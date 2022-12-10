import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import unLike from "../../assets/img/heart.svg";
import like from "../../assets/img/heart-liked.svg";
import Tag from "../ui/Tag/Tag";
import avatar from "../../assets/img/avatar.svg";
import api from "../../services/Api/Api";

import classes from "./ArticleHeader.module.scss";

function ArticleHeader({
  isLoggedIn,
  title,
  createdAt,
  favoritesCount,
  favorited,
  slug,
  tagList,
  author: { username, image },
}) {
  const [liked, setLiked] = useState(favorited);
  const [count, setCount] = useState(favoritesCount);
  function likeArticle() {
    if (!isLoggedIn) return;
    setLiked(!liked);
    if (count === favoritesCount && !liked) setCount(count + 1);
    else if (count === favoritesCount && liked) setCount(count - 1);
    else if (count !== favoritesCount && liked) setCount(count - 1);
    else if (count !== favoritesCount && !liked) setCount(count + 1);
  }

  useEffect(() => {
    if (liked !== favorited) {
      // eslint-disable-next-line no-unused-expressions
      liked
        ? api.addFavorites(slug).catch(() => {})
        : api.deleteFavorites(slug).catch(() => {});
    }
  }, [liked]);

  return (
    <header className={classes["article-header"]}>
      <div className={classes["article-header__left-side"]}>
        <Link to={`/articles/${slug}`}>
          <h2 className={classes["article-header__title"]}>{title}</h2>
        </Link>
        <span className={classes.likes}>
          {/* eslint-disable-next-line */}
          <img
            onClick={() => likeArticle(slug)}
            src={liked ? like : unLike}
            alt="like"
            className={classes["article-header__like-img"]}
          />
          <span className={classes["article-header__like-count"]}>{count}</span>
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
  isLoggedIn: PropTypes.bool,
  author: PropTypes.shape({
    username: PropTypes.string,
    image: PropTypes.string,
  }),
  createdAt: PropTypes.string,
  favoritesCount: PropTypes.number,
  slug: PropTypes.string,
  tagList: PropTypes.array,
  title: PropTypes.string,
  favorited: PropTypes.bool,
};

ArticleHeader.defaultProps = {
  isLoggedIn: false,
  author: {
    username: "John Doe",
    image: avatar,
  },
  createdAt: "2022-12-07T13:15:33.909Z",
  favoritesCount: 0,
  slug: "",
  tagList: [],
  title: "",
  favorited: false,
};

function mstp(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  };
}
export default connect(mstp)(ArticleHeader);
