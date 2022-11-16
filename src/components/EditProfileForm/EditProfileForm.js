import React from 'react';

import { useForm } from "react-hook-form";
import FormHeader from '../ui/FormHeader/FormHeader';
import SubmitButton from '../ui/SubmitButton/SubmitButton';
import classes from './EditProfileForm.module.scss';
import { errorStyle } from '../../assets/errorStyle';
export default function EditProfileForm() {

    const { register, handleSubmit, formState: { errors }, control, watch } = useForm();


    const onSubmit = data => console.log(data);
    return (
        <form className={classes['form']} onSubmit={handleSubmit(onSubmit)}>
            <FormHeader title='Edit Profile'/>
            <label htmlFor="username">Username</label>
            <input id="username"
             style={errors.username && errorStyle}
            {...register("username", {
                required: "Username is required"
            })} placeholder='Username' />
            <p className={classes['error-message']}>{errors.username?.message}</p>

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
            <label htmlFor="password">New password</label>

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
                })} placeholder='New password' />
            <p className={classes['error-message']}>{errors.password?.message}</p>
            <label htmlFor="avatar_image">Avatar image (url)</label>
            <input
            style={errors.avatar_image && errorStyle}
                id="avatar_image"
                {...register("avatar_image",
                    {
                        
                 pattern:{
                    value:/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
                    message: "Url is not correct"
                 }

                    })} placeholder='Avatar image' />
            <p className={classes['error-message']}>{errors.avatar_image?.message}</p>
           
            <SubmitButton label='Save' />
        </form>
    );
}