import React from 'react';
import { connect } from 'react-redux';
import NewArticleForm from '../../components/NewArticleForm/NewArticleForm';
import classes from './NewArticle.module.scss'
import { Spin } from 'antd';

function NewArticle({ loading, error, created }) {

    console.log(loading)

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
    return (<div className={classes["form-container"]}>
        <NewArticleForm />
    </div>);
}

function mstp(s) {
    return {
        loading: s.create.loading,
        error: s.create.error,
        crated: s.create.crated
    }
}
export default connect(mstp)(NewArticle);