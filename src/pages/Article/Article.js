import React from 'react';
import { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ArticleHeader from '../../components/ArticleHeader/ArticleHeader';
import ArticleIntro from '../../components/ArticleIntro/ArticleIntro';
import ArticleText from '../../components/ArticleText/ArticleText';
import classes from './Article.module.scss'
import { fetchArticle } from '../../redux/actions/actions';


function Article({dispatch,article,loading,error}) {

    const { slug } = useParams();


    useEffect(() => {
        dispatch(fetchArticle(slug))
    }, [])

    
    if (error) {
        return (<div className={classes['server-error']}>
            Something wrong with server</div>);
    }

    if (loading) {
        return (<div className={classes['loading']}>
          loading</div>);
    }


    return (
        <div className={classes["article-container"]}>
            <article className={classes["article"]}>
                <ArticleHeader {...article} />
                <ArticleIntro {...article} />
                <ArticleText {...article} />
            </article>
        </div>
    );
}

const mapStateToProps = state => ({
    article: state.article.article,
    loading: state.article.loading,
    error: state.article.error
});

export default connect(mapStateToProps)(Article);