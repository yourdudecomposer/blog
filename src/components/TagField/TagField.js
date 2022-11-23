import React from 'react';
import classes from './TagField.module.scss'
function TagField() {
    function addTag(tag) {
        console.log('tag')
    }

    return (
        <section className={classes['tag-field']}>
            <h3>Tags</h3>
            <button onClick={addTag} type='button' className={classes['add-tag-btn']}>Add tag</button>
        </section>
    );
}




export default TagField;