import React from 'react';

import classes from './FormHeader.module.scss'

function FormHeader({title}) {
    return (             <h2 className={classes.title}>{title}</h2>
    );
}

export default FormHeader;