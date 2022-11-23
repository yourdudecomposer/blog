import React from 'react';
import { Alert } from 'antd';

import { connect } from 'react-redux';
import EditProfileForm from '../../components/EditProfileForm/EditProfileForm';
import classes from './Profile.module.scss'

function Profile({ isEditFailed }) {
    console.log(isEditFailed)
    return (<div className={classes["form-container"]}>
        {isEditFailed && <Alert
            style={{
                position: 'absolute',
                width: '384px',
                height: '40px'
            }}
            message={isEditFailed}
            type="error" />}
        <EditProfileForm />
    </div>);
}

function mstp(s) {
    return {
        isEditFailed: s.auth.isEditFailed
    }
}
export default connect(mstp)(Profile);