import React from 'react';
import classes from './ArticleText.module.scss';
import ReactMarkdown from 'react-markdown';
import Modal from '../ui/Modal/Modal';
import { useState } from 'react';



function ArticleText({ body }) {

    const [isShow, setIsShow] = useState(true)

    function showModal() {
        setIsShow(!isShow)
    }

    return (<section className={classes['article-text']}>
        <div className={classes["buttons"]} >
            <button
                onClick={showModal}
                className={classes['delete']}>Delete</button>
            <Modal style={{
                display: isShow ? 'block' : 'none'
            }} />
            <button
                onClick={() => console.log('edit')}
                className={classes['edit']}>Edit</button>
        </div>
        <ReactMarkdown>
            {body}
        </ReactMarkdown>
    </section>);
}

export default ArticleText;