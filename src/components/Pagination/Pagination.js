import { Pagination as P } from 'antd';
import React, {useState} from 'react';
import './Pagination.css';
import { useSelector, useDispatch } from 'react-redux'
import { fetchArticles } from '../../redux/blogSlice'
import Api from '../../services/Api/Api';


const Pagination = () => {

const [page,setPage] = useState(1)
  const dispatch = useDispatch();
  const articlesCount = useSelector((state) => state.blog.articlesCount)
  const onChange = (page) => {
    setPage(page)
    const ofset = Api.limit * page - Api.limit;
    dispatch(fetchArticles(ofset))
  }
  if ( articlesCount ) return (<>
    <P onChange={onChange} current={page} showSizeChanger={false} pageSize={Api.limit} className='pagination' size="small" total={articlesCount} />
  </>)
}

export default Pagination;