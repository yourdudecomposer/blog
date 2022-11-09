import React from 'react';
import classes from './Tag.module.scss';
import { v4 as uuidv4 } from 'uuid';

function Tag({ tagList}) {


    return (
        tagList.map(el => el ? <span key={uuidv4()} className={classes["article-header__tag-item"]}>{el}</span> : null

        )

    );
}

export default Tag;