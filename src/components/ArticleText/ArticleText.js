import PropTypes from "prop-types";
import React, { useState, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import { Link, withRouter } from "react-router-dom";
import { Alert } from "antd";

import Modal from "../ui/Modal/Modal";
import api from "../../services/Api/Api";

import classes from "./ArticleText.module.scss";

function ArticleText({ body, slug, author: { username }, history }) {
  const [isShow, setIsShow] = useState(false);
  const [isError, setIsError] = useState(false);

  function showModal() {
    setIsShow(!isShow);
  }

  const closeModal = useCallback(() => {
    setIsShow(!isShow);
  });

  const sendDeleteRequest = useCallback(async () => {
    try {
      await api.deleteArticle(slug);
      history.push("./");
    } catch (error) {
      setIsError(true);
      setIsShow(false);
    }
  });

  return (
    <section className={classes["article-text"]}>
      {username !==
      JSON.parse(localStorage.getItem("user"))?.username ? null : (
        <div className={classes.buttons}>
          <button type="button" onClick={showModal} className={classes.delete}>
            Delete
          </button>
          <Modal
            closeModal={closeModal}
            sendDeleteRequest={sendDeleteRequest}
            style={{
              display: isShow ? "block" : "none",
            }}
          />
          <Link to={`/articles/${slug}/edit`}>
            <button type="button" className={classes.edit}>
              Edit
            </button>
          </Link>
        </div>
      )}
      {isError ? <Alert message="Can' t delete" closable type="error" /> : null}
      <ReactMarkdown>{body}</ReactMarkdown>
    </section>
  );
}

ArticleText.propTypes = {
  author: PropTypes.shape({
    username: PropTypes.string,
  }),
  body: PropTypes.string,
  history: PropTypes.object,
  slug: PropTypes.string,
  username: PropTypes.string,
};

ArticleText.defaultProps = {
  author: {
    username: "John Doe",
  },
  body: "",
  history: {},
  slug: "",
  username: "",
};
export default withRouter(ArticleText);
