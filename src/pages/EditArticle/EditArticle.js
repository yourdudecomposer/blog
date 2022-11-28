import React from 'react';
import { connect } from 'react-redux';
import NewArticleForm from '../../components/NewArticleForm/NewArticleForm';
import classes from './EditArticle.module.scss'
import { Alert, Spin } from 'antd';


function EditArticle({ loading, error }) {


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

    return (<div className={classes["form-container"]}>
        <NewArticleForm label='Edit article' />
    </div>);
}

function mstp(s) {
    return {
        loading: s.create.loading,
        error: s.create.error,
        crated: s.create.crated
    }
}
export default connect(mstp)(EditArticle);