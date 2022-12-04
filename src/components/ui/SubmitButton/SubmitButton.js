import React from 'react';

import classes from './SubmitButton.module.scss'

function SubmitButton({label}) {
    return ( 
        <button className={classes.button} type="submit" >{label}</button>

     );
}

export default SubmitButton;