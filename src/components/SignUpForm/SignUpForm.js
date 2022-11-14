import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import Checkbox from "../ui/Checkbox/Checkbox";
import classes from './SignUpForm.module.scss'
export default function App() {



    const { register, handleSubmit, formState: { errors }, control } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form className={classes['form']} onSubmit={handleSubmit(onSubmit)}>
            <h2>Create new account</h2>
            <input {...register("username", {
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
            <p >{errors.username?.message}</p>
            <input
                type="email"
                {...register("mail", { required: "Email Address is required" })}
                placeholder='Email address'
            />
            <p >{errors.mail?.message}</p>
            <input {...register("password", {
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
            <p >{errors.password?.message}</p>
            <input {...register("passwordConfirm", {
                required: "Username is required",
                minLength: {
                    value: 3,
                    message: 'Min length is 3'
                },
                maxLength: {
                    value: 12,
                    message: "Max length is 12"
                }
            })} placeholder='Password' />
            <p >{errors.passwordConfirm?.message}</p>
            <hr />
            <Controller
                name="checkbox"
                control={control}
                rules={{ required: 'You need check it' }}
                render={({ field: { onChange, value, ref } }) => {
                    return <Checkbox
                        className={classes['checkbox']}
                        value={value}
                        onChange={onChange} // send value to hook form
                        inputRef={ref}
                        label={'I agree to the processing of my personal information'}
                    />
                }}
            />
            <p >{errors.checkbox?.message}</p>
            <button type="submit" >Create</button>
            <p className={classes['sign-in-text']}>Already have an account? <Link to='/sign-in'>Sign In</Link>.</p>
        </form>
    );
}