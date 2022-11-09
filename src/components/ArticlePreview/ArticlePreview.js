import React from 'react';
import ArticleHeader from '../ArticleHeader/ArticleHeader';
import ArticleIntro from '../ArticleIntro/ArticleIntro';
import classes from './ArticlePreview.module.scss';

function ArticlePreview(props) {
    return (<article className={classes["article-preview"]}>
<ArticleHeader
{...props}/>
<ArticleIntro {...props}/>
    </article>);
}

export default ArticlePreview;