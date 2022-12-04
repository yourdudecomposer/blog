import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link, withRouter } from 'react-router-dom';
import { Alert } from 'antd';

import Modal from '../ui/Modal/Modal';
import api from '../../services/Api/Api';


import classes from './ArticleText.module.scss';




function ArticleText({ body, slug, author: { username }, history }) {
    const [isShow, setIsShow] = useState(false)
    const [isError, setIsError] = useState(false)

    function showModal() {
        setIsShow(!isShow)
    }
    function closeModal() {
        showModal()
    }
    async function sendDeleteRequest() {

        try {
            await api.deleteArticle(slug)
            history.push('./')
        } catch (error) {
            setIsError(true)
            setIsShow(false)
        }
    }



    return (<section className={classes['article-text']}>
        {username !== JSON.parse(localStorage.getItem('user'))?.username ? null : <div className={classes.buttons} >
            <button
                onClick={showModal}
                className={classes.delete}>Delete</button>
            <Modal
                closeModal={closeModal}
                sendDeleteRequest={sendDeleteRequest}
                style={{
                    display: isShow ? 'block' : 'none'
                }} />
            <Link to={`/articles/${slug}/edit`}>
                <button
                    className={classes.edit}>Edit</button>
            </Link>
        </div>}
        {isError ? <Alert
            message="Can' t delete"
            closable

            type='error'
        /> : null}
        <ReactMarkdown>
            {body}
        </ReactMarkdown>
    </section>);
}


ArticleText.defaultProps = {

    author: {
        username: 'John Doe',
    }

}
export default withRouter(ArticleText);