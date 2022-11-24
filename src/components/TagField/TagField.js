import React from 'react';
import classes from './TagField.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

function TagField({ register, unregister }) {

    const [tagList, setTagList] = useState([])



    function deleteTag(id) {
        let index = tagList.indexOf(id);
        unregister(`tag${id}`);
        setTagList([...tagList.slice(0, index), ...tagList.slice(index + 1)])
    }

    function addTag() {
        setTagList([...tagList, uuidv4()])
    }


    return (
        <section className={classes['tag-field']}>
            <h3>Tags</h3>

            {tagList.map(id => {
                return <TagItem
                    key={id}
                    id={id}
                    register={register}
                    deleteTag={deleteTag}
                />
            })}

            <button onClick={addTag} type='button' className={classes['add-tag-btn']}>Add tag</button>
        </section>
    );
}

function TagItem({ register, deleteTag, id }) {


    return (
        <span  >
            <input

                {...register(`tag${id}`)} />
            <button
                type='button'
                onClick={() => deleteTag(id)}
                className={classes['delete-tag-btn']}>Delete</button>
        </span>
    )
}


export default TagField;