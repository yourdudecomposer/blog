import React from 'react';
import SignInForm from '../../components/SignInForm/SignInForm';
import classes from './SignIn.module.scss'

function SignIn() {
    return ( <div className={classes["form-container"]}>
        <SignInForm/>
    </div> );
}

export default SignIn;