import React from 'react';
import EditProfileForm from '../../components/EditProfileForm/EditProfileForm';
import classes from './Profile.module.scss'

function Profile() {
    return ( <div className={classes["form-container"]}>
        <EditProfileForm/>
    </div> );
}

export default Profile;