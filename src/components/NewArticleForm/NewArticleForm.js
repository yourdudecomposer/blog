import React from 'react';
import { useForm } from "react-hook-form";
import TagField from '../TagField/TagField';
import FormHeader from '../ui/FormHeader/FormHeader';
import SubmitButton from '../ui/SubmitButton/SubmitButton';
import classes from './NewArticleForm.module.scss'
import api from '../../services/Api/Api';
import { createArticle } from '../../redux/actions/actions';
import { connect } from 'react-redux';

function NewArticleForm({ dispatch }) {

    const { register, unregister, handleSubmit, watch, formState: { errors } } = useForm();

    function makeData(data) {
        let tagList =
            Object.entries(data)
                .filter(([key, value]) => key.slice(0, 3).includes('tag') && value !== '')
                .map(el => el[1])

        let {
            title,
            description,
            body
        } = data;

        return {
            article: {
                title,
                description,
                body,
                tagList
            }
        }
    }


    const onSubmit = data => {
        dispatch(createArticle(makeData(data)))
    };



    return (
        <form className={classes['form']} onSubmit={handleSubmit(onSubmit)}>
            <FormHeader title='Create new article' />
            <label htmlFor="title">Title</label>

            <input id='title' placeholder="Title"  {...register("title", { required: true })} />
            {errors.title && <span className={classes['error-message']}>Title is required</span>}
            <label htmlFor="description">Short description</label>
            <input id='description' placeholder="Title"  {...register("description", { required: true })} />
            {errors.description && <span className={classes['error-message']}>Title is required</span>}
            <label htmlFor="body">Text</label>
            <textarea id='body' placeholder="Text"  {...register("body", { required: true })}></textarea>
            {errors.body && <span className={classes['error-message']}>Text is required</span>}

            <TagField unregister={unregister} register={register} />
            <SubmitButton label='Send' />
        </form>
    );
}

export default connect()(NewArticleForm);