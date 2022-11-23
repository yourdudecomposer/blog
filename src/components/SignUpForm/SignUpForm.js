import React from 'react';

import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import Checkbox from "../ui/Checkbox/Checkbox";
import FormHeader from '../ui/FormHeader/FormHeader';
import SubmitButton from '../ui/SubmitButton/SubmitButton';
import classes from './SignUpForm.module.scss';
import { errorStyle } from '../../assets/errorStyle';
import api from '../../services/Api/Api';
import { logIn, signUpFailed, signUpSuccess } from '../../redux/actions/actions';
import { connect } from 'react-redux';
function App({ dispatch }) {



    const { register, handleSubmit, formState: { errors }, control, watch } = useForm();

    let currentPassword = watch("password", "");


    const onSubmit = data => {
        const dataForSend = {
            user: {
                username: data.username,
                email: data.mail,
                password: data.password
            }
        }
        api.registerUser(dataForSend)
            .then(res => localStorage
                .setItem('user', JSON.stringify(res.user)))
            .then(() => {
                dispatch(logIn())
            })
            .then(() => {
                dispatch(signUpSuccess())
            })
            .catch((err) => dispatch(signUpFailed(err)))
    }


    return (
        <form className={classes['form']} onSubmit={handleSubmit(onSubmit)}>
            <FormHeader title='Create new account' />
            <label htmlFor="username">Username</label>
            <input id="username"
                style={errors.username && errorStyle}
                {...register("username", {
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
                style={errors.mail && errorStyle}
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
                    minLength: {
                        value: 6,
                        message: 'Your password needs to be at least 6 characters.'
                    },
                    maxLength: {
                        value: 40,
                        message: "Max length is 40"
                    }
                })} placeholder='Password' />
            <p className={classes['error-message']}>{errors.password?.message}</p>
            <label htmlFor="password_repeat">Repeat Password</label>
            <input
                id="password_repeat"
                style={errors.password_repeat && errorStyle}

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
            <SubmitButton label='Create' />
            <p className={classes['sign-in-text']}>Already have an account? <Link to='/sign-in'>Sign In</Link>.</p>
        </form>
    );
}

export default connect()(App)