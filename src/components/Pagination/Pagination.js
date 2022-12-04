import PropTypes from "prop-types";
import { Pagination as P } from "antd";
import React, { useState } from "react";
import "./Pagination.css";
import { connect } from "react-redux";

import { fetchArticles } from "../../redux/actions/actions";
import api from "../../services/Api/Api";

import classes from "./pag.module.scss";

function Pagination({ dispatch, articlesCount }) {
  const [currentPage, setPage] = useState(1);

  const onChange = (page) => {
    setPage(page);
    const ofset = api.limit * page - api.limit;
    dispatch(fetchArticles(ofset));
  };

  if (articlesCount)
    return (
      <P
        className={classes.pagination}
        onChange={onChange}
        current={currentPage}
        showSizeChanger={false}
        pageSize={api.limit}
        size="small"
        total={articlesCount}
      />
    );
}

Pagination.propTypes = {
  articlesCount: PropTypes.number,
  dispatch: PropTypes.func,
};
Pagination.defaultProps = {
  articlesCount: 0,
  dispatch: () => {},
};

const mapStateToProps = (state) => ({
  articlesCount: state.articles.articlesCount,
});
export default connect(mapStateToProps)(Pagination);
