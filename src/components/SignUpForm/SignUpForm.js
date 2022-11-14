import React, { useRef } from 'react';

import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import Checkbox from "../ui/Checkbox/Checkbox";
import classes from './SignUpForm.module.scss'
export default function App() {



    const { register, handleSubmit, formState: { errors }, control, watch } = useForm();

    let currentPassword = watch("password", "");

    const onSubmit = data => console.log(data);
    return (
        <form className={classes['form']} onSubmit={handleSubmit(onSubmit)}>
            <h2>Create new account</h2>
            <label htmlFor="username">Username</label>
            <input id="username" {...register("username", {
                required: "Username is required",
                minLength: {
                    value: 3,
                    message: 'Min length is 3'
                },
                maxLength: {
                    value: 12,
                    message: "Max length is 12"
                }
            })} placeholder='Username' />
            <p className={classes['error-message']}>{errors.username?.message}</p>

            <label htmlFor="mail">Email address</label>
            <input
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

                {...register("password", {
                    required: "Password is required",
                    minLength: {
                        value: 6,
                        message: 'Your password needs to be at least 6 characters.'
                    },
                    maxLength: {
                        value: 12,
                        message: "Max length is 12"
                    }
                })} placeholder='Password' />
            <p className={classes['error-message']}>{errors.password?.message}</p>
            <label htmlFor="password_repeat">Repeat Password</label>
            <input
                id="password_repeat"
                {...register("password_repeat",
                    {
                        required: "Repeat Password is required",
                        pattern: {
                            value: new RegExp(`^${currentPassword}$`),
                            message: 'Passwords must match'
                        },

                    })} placeholder='Password' />
            <p className={classes['error-message']}>{errors.password_repeat?.message}</p>
            <hr />
            <Controller
                name="checkbox"
                control={control}
                rules={{ required: 'You need check it' }}
                render={({ field: { onChange } }) => {
                    return <Checkbox
                        onChange={onChange}
                        className={classes['checkbox']}
                        label={'I agree to the processing of my personal information'}
                    />
                }}
            />
            <p className={classes['error-message']}>{errors.checkbox?.message}</p>
            <button type="submit" >Create</button>
            <p className={classes['sign-in-text']}>Already have an account? <Link to='/sign-in'>Sign In</Link>.</p>
        </form>
    );
}