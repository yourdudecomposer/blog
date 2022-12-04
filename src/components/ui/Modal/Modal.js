import React from 'react';

import icon from "../../../assets/img/icon.svg";

import classes from './Modal.module.scss'

function Modal({ style, closeModal, sendDeleteRequest }) {


    return (
        <div style={style} className={classes.container}>
            <img src={icon} alt="" />
            <p>Are you sure to delete this article?</p>

            <div className={classes["button-container"]}>

                <button onClick={closeModal} className={classes.no}>No</button>
                <button onClick={sendDeleteRequest} className={classes.yes}>Yes</button>
            </div>
        </div>);
}

export default Modal;