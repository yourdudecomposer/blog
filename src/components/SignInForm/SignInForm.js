import React from 'react';

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import FormHeader from '../ui/FormHeader/FormHeader';
import SubmitButton from '../ui/SubmitButton/SubmitButton';
import classes from './SignInForm.module.scss';
import { errorStyle } from '../../assets/errorStyle';
export default function SignInForm() {

    const { register, handleSubmit, formState: { errors },  } = useForm();


    const onSubmit = data => console.log(data);
    return (
        <form className={classes['form']} onSubmit={handleSubmit(onSubmit)}>
            <FormHeader title='Sign In' />

            <label htmlFor="mail">Email address</label>
            <input
                style={errors.mail && errorStyle}

                id="mail"
                {...register("mail", {
                    required: "Email Address is required",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Email Address is not correct'
                    },
                })}
                placeholder='Email address'
            />
            <p className={classes['error-message']} >{errors.mail?.message}</p>
            <label htmlFor="password">Password</label>

            <input
                id="password"
                style={errors.password && errorStyle}
                {...register("password", {
                    required: "Password is required",

                })} placeholder='Password' />
            <p className={classes['error-message']}>{errors.password?.message}</p>


            <SubmitButton label='Login' />
            <p className={classes['sign-in-text']}>Don’t have an account? <Link to='/sign-in'>Sign Up</Link>.</p>
        </form>
    );
}