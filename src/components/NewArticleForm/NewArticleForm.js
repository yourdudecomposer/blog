import React from 'react';
import { useForm } from "react-hook-form";
import TagField from '../TagField/TagField';
import FormHeader from '../ui/FormHeader/FormHeader';
import SubmitButton from '../ui/SubmitButton/SubmitButton';
import classes from './NewArticleForm.module.scss'
import { createArticle, makeData } from '../../redux/actions/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useEffect } from 'react';


function NewArticleForm({
    onSubmit: onS,
    dispatch,
    history,
    label,
    tagList,
    title,
    description,
    body }) {
    console.log(tagList,
        title,
        description,)
    const { register, unregister, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => onS(data)


    return (
        <form className={classes['form']} onSubmit={handleSubmit(onSubmit)}>
            <FormHeader title={label} />
            <label htmlFor="title">Title</label>

            <input
                defaultValue={title}
                id='title'
                placeholder="Title"
                {...register("title", { required: true })} />
            {errors.title && <span className={classes['error-message']}>Title is required</span>}
            <label htmlFor="description">Short description</label>
            <input
                defaultValue={description}
                id='description'
                placeholder="Title"
                {...register("description", { required: true })} />
            {errors.description && <span className={classes['error-message']}>Title is required</span>}
            <label htmlFor="body">Text</label>
            <textarea
                defaultValue={body}
                id='body'
                placeholder="Text"
                {...register("body", { required: true })}></textarea>
            {errors.body && <span className={classes['error-message']}>Text is required</span>}

            <TagField
                tagList={tagList}
                unregister={unregister}
                register={register} />
            <SubmitButton label='Send' />
        </form>
    );
}

function mstp(s) {
    return {
        created: s.create.created
    }
}

export default connect(mstp)(NewArticleForm);