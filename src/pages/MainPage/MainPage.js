import React from 'react';
import ArticleList from '../../components/ArticleList/ArticleList';
import Pagination from '../../components/Pagination/Pagination';
import { useSelector } from 'react-redux'
import classes from './MainPage.module.scss';

function MainPage() {

    const loading = useSelector((state) => state.mainPageSlice.loading)
    console.log(loading)
    if (loading === 'failed') {
        return (<div className={classes['server-error']}>
            Something wrong with server</div>);
    }
    return (<>
        <ArticleList />
        <Pagination /></>);
}

export default MainPage;