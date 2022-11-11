import { Pagination as P } from 'antd';
import React, { useState } from 'react';
import './Pagination.css';
import classes from './pag.module.scss';
import { connect } from 'react-redux';
import { fetchArticles } from '../../new-redux/actions/actions'
import api from '../../services/Api/Api';


const Pagination = ({ dispatch, articlesCount }) => {

  const [page, setPage] = useState(1)

  const onChange = (page) => {
    setPage(page)
    const ofset = api.limit * page - api.limit;
    dispatch(fetchArticles(ofset))
  }
  if (articlesCount) return <P
    className={classes['pagination']}
    onChange={onChange}
    current={page}
    showSizeChanger={false}
    pageSize={api.limit}
    size="small" total={articlesCount} />

}

const mapStateToProps = state => ({
  articlesCount: state.articlesCount
});
export default connect(mapStateToProps)(Pagination);