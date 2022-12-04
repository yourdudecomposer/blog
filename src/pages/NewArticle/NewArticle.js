import React from 'react';
import { connect } from 'react-redux';
import NewArticleForm from '../../components/NewArticleForm/NewArticleForm';
import classes from './NewArticle.module.scss'
import { Alert, Spin } from 'antd';
import { withRouter } from 'react-router-dom';
import { createArticle, makeData } from '../../redux/actions/actions';

function NewArticle({ dispatch, history, loading, error }) {


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

    if (error) {
        return (
            <Alert
                style={{
                    position: 'absolute',
                    width: '100%',
                    top: '100px'
                }}
                message={error.message}
                type="error"
                showIcon />

        )
    }

    const onSubmit = data => {
        dispatch(createArticle(makeData(data), history));
    };

    return (<div className={classes["form-container"]}>
        <NewArticleForm onSubmit={onSubmit} label='Create new article' />
    </div>);
}

function mstp(s) {
    return {
        loading: s.create.loading,
        error: s.create.error,
        crated: s.create.crated
    }
}
export default withRouter(connect(mstp)(NewArticle));