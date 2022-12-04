import React from 'react';
import { connect } from 'react-redux';
import NewArticleForm from '../../components/NewArticleForm/NewArticleForm';
import classes from './EditArticle.module.scss'
import { Alert, Spin } from 'antd';
import { withRouter } from 'react-router-dom';
import { editArticle, makeData } from '../../redux/actions/actions';

function EditArticle({ history, dispatch, loading,article, article: { slug, tagList, title, description, body } }) {
    console.log(article)
    if (loading) {
        return (
            <Spin
                size="large"
                style={{

                    width: '100%',
                    margin: '20px auto'
                }} />
        )
    }
    const onSubmit = data => {
        console.log(data)
        dispatch(editArticle(makeData(data), history, slug));
    };

    return (<div className={classes["form-container"]}>
        <NewArticleForm
            tagList={tagList}
            title={title}
            description={description}
            body={body}
            onSubmit={onSubmit}
            label='Edit article' />
    </div>);
}

function mstp(s) {
    return {
        article: s.article.article,
        loading: s.edit.loading,
    }
}
export default withRouter(connect(mstp)(EditArticle));