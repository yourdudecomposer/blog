import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ArticleHeader from '../../components/ArticleHeader/ArticleHeader';
import ArticleIntro from '../../components/ArticleIntro/ArticleIntro';
import ArticleText from '../../components/ArticleText/ArticleText';
import classes from './Article.module.scss'
import { useDispatch } from 'react-redux';
import { fetchArticle } from '../../redux/articlePageSlice';





function Article() {
    console.log();

const {slug} = useParams();
    const { article } = useSelector(state => state.articlePageSlice)
console.log(article)
 const dispatch = useDispatch()
 useEffect(()=>{ 
    dispatch(fetchArticle(slug))
 },[])
    return (
        <div className={classes["article-container"]}>
            <article className={classes["article"]}>
                {article.slug||23}
                <ArticleHeader {...article} />
                {/* <ArticleIntro /> */}
                {/* <ArticleText /> */}
            </article>
        </div>
    );
}
export default Article;