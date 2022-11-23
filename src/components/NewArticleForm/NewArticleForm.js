import React from 'react';
import { useForm } from "react-hook-form";
import TagField from '../TagField/TagField';
import FormHeader from '../ui/FormHeader/FormHeader';
import SubmitButton from '../ui/SubmitButton/SubmitButton';
import classes from './NewArticleForm.module.scss'

function NewArticleForm() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form className={classes['form']} onSubmit={handleSubmit(onSubmit)}>
            <FormHeader title='Create new article' />
            <label htmlFor="title">Title</label>

            <input id='title' placeholder="Title"  {...register("title", { required: true })} />
            {errors.title && <span className={classes['error-message']}>Title is required</span>}
            <label htmlFor="description">Short description</label>
            <input id='description' placeholder="Title"  {...register("description", { required: true })} />
            {errors.description && <span className={classes['error-message']}>Title is required</span>}
            <label htmlFor="text">Text</label>
            <textarea id='text' placeholder="Text"  {...register("text", { required: true })}></textarea>
            {errors.text && <span className={classes['error-message']}>Title is required</span>}

            <TagField register={register} />
            <SubmitButton label='Send' />
        </form>
    );
}

export default NewArticleForm;