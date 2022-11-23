import { Alert } from "antd";
import React from "react";
import { connect } from "react-redux";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import classes from './SignUp.module.scss';

function SignUp({ isSignUpFailed }) {
    return (
        <div className={classes["form-container"]}>
            {isSignUpFailed && <Alert
                style={{
                    position: 'absolute',
                    width: '384px',
                    height: '40px'
                }}
                message={isSignUpFailed.slice(1, -1)}
                type="error" />}
            <SignUpForm />
        </div>
    )
}



function mstp(s) {
    return { isSignUpFailed: s.auth.isSignUpFailed }
}


export default connect(mstp)(SignUp);