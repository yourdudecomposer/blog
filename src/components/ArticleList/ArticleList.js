import React, { useEffect } from 'react';
import ArticlePreview from '../ArticlePreview/ArticlePreview';
import module from './ArticleList.module.scss'
import { connect } from 'react-redux';
import { fetchArticles } from '../../new-redux/actions/actions'

function ArticleList({ dispatch, articles,loading,error }) {

    useEffect(() => {
        dispatch(fetchArticles())
    }, [dispatch])

    if (error) {
        return (<div className={module['server-error']}>
            Something wrong with server</div>);
    }

    if (loading) {
        return (<div className={module['loading']}>
          loading</div>);
    }


    return (
        <section className={module['article-list']}>
            {articles
                .map(el => {
                    return <ArticlePreview key={el.slug} {...el} />
                })
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