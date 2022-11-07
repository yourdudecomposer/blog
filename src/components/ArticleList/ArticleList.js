import React, { useEffect } from 'react';
import ArticlePreview from '../ArticlePreview/ArticlePreview';
import module from './ArticleList.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { fetchArticles } from '../../redux/mainPageSlice'

function ArticleList() {

    const articles = useSelector((state) => state.mainPageSlice.articles)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchArticles())
    }, [dispatch])


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

export default ArticleList;