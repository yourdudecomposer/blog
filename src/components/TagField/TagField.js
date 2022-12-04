import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import classes from './TagField.module.scss';

function TagField({
    tagList: tagListFromServer,
    register,
    unregister }) {

    const [tagList, setTagList] = useState(tagListFromServer.map(el => [el, uuidv4()]))


    function deleteTag(id) {
        let index;
        tagList.forEach((el, ind) => {
            if (el[1] === id) {
                index = ind
            }
        })
        unregister(`tag${id}`);
        setTagList([...tagList.slice(0, index), ...tagList.slice(index + 1)])
    }

    function addTag() {
        setTagList([...tagList, ['', uuidv4()]])
    }

    return (
        <section className={classes['tag-field']}>
            <h3>Tags</h3>

            {tagList.map(([el, id]) => <TagItem
                    value={el}
                    key={id}
                    // id={id}
                    register={register}
                    deleteTag={deleteTag}
                />)}

            <button onClick={addTag} type='button' className={classes['add-tag-btn']}>Add tag</button>
        </section>
    );
}

function TagItem({ register, deleteTag, id, value }) {

    return (
        <span  >
            <input
                defaultValue={value || ''}
                {...register(`tag${id}`)} />
            <button
                type='button'
                onClick={() => deleteTag(id)}
                className={classes['delete-tag-btn']}>Delete</button>
        </span>
    )
}

TagField.defaultProps = {
    tagList: []
}
export default TagField;