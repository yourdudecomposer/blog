import React from 'react';
import classes from './TagField.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

function TagField({ register }) {

    const [tagList, setTagList] = useState([])

    function deleteTag(params) {
        console.log('deleteTag')
    }

    function addTag(tag) {
        setTagList([...tagList, <span key={uuidv4()} ><input {...register("example1")} /><button type='button' onClick={deleteTag} className={classes['delete-tag-btn']}>Delete</button></span>])
    }

    return (
        <section className={classes['tag-field']}>
            <h3>Tags</h3>

            {tagList}

            <button onClick={addTag} type='button' className={classes['add-tag-btn']}>Add tag</button>
        </section>
    );
}




export default TagField;