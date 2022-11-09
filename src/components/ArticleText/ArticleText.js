import React from 'react';
import classes from './ArticleText.module.scss';
import ReactMarkdown from 'react-markdown';




function ArticleText({body}) {
    return ( <section className={classes['article-text']}>
        
        <ReactMarkdown>
            {body}
        </ReactMarkdown>
    </section> );
}

export default ArticleText;