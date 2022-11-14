import React from "react";
import EditProfileForm from "../../components/EditProfileForm/EditProfileForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import classes from './SignUp.module.scss';
function SignUp() {
    return (
        <div className={classes["form-container"]}>
         <SignUpForm/>
         <EditProfileForm/>
        </div>
    )
}






export default SignUp;