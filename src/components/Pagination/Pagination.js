import { Pagination as P } from 'antd';
import React, { useState } from 'react';
import './Pagination.css';
import classes from './pag.module.scss';
import { useSelector, useDispatch } from 'react-redux'
import { fetchArticles } from '../../redux/mainPageSlice'
import api from '../../services/Api/Api';


const Pagination = () => {

  const [page, setPage] = useState(1)
  const dispatch = useDispatch();
  const articlesCount = useSelector((state) => state.mainPageSlice.articlesCount)
  const onChange = (page) => {
    setPage(page)
    const ofset = api.limit * page - api.limit;
    dispatch(fetchArticles(ofset))
  }
  if (articlesCount) return  <P className={classes['pagination']} onChange={onChange} current={page} showSizeChanger={false} pageSize={api.limit} size="small" total={articlesCount} />
  
}

export default Pagination;