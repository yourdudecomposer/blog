import React from 'react';
import classes from './ArticleIntro.module.scss'
function ArticleIntro() {
    return ( 
        <section className={classes['article-intro']}>
            <p className={classes["article-intro__text"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat.</p>
        </section>
     );
}

export default ArticleIntro;