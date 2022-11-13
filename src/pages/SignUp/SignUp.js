import React from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import classes from './SignUp.module.scss';
function SignUp() {
    return (
        <div className={classes["form-container"]}>
         <SignUpForm/>
        </div>
    )
}






export default SignUp;