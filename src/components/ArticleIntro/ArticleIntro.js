import React from 'react';

import classes from './ArticleIntro.module.scss'

function ArticleIntro({description}) {
    return ( 
        <section className={classes['article-intro']}>
            <p className={classes["article-intro__text"]}>{description}</p>
        </section>
     );
}

export default ArticleIntro;