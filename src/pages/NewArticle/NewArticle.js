import React from 'react';
import NewArticleForm from '../../components/NewArticleForm/NewArticleForm';
import classes from './NewArticle.module.scss'
function NewArticle() {
    return (<div className={classes["form-container"]}>
        <NewArticleForm />
    </div>);
}

export default NewArticle;