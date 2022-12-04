import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ArticlePreview from '../ArticlePreview/ArticlePreview';
import { fetchArticles } from '../../redux/actions/actions'

import module from './ArticleList.module.scss'

function ArticleList({ dispatch, articles,loading,error }) {

    useEffect(() => {
        dispatch(fetchArticles())
    }, [dispatch])

    if (error) {
        return (<div className={module['server-error']}>
            Something wrong with server or internet</div>);
    }

    if (loading) {
        return (<div className={module.loading}>
          loading</div>);
    }

    return (
        <section className={module['article-list']}>
            {articles
                .map(el => <ArticlePreview key={el.slug} {...el} />)
            }

        </section>



    );
}

const mapStateToProps = state => ({
    articles: state.articles.articles,
    loading: state.articles.loading,
    error: state.articles.error
});

export default connect(mapStateToProps)(ArticleList);