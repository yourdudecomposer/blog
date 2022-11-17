import React from 'react';
import classes from './HeaderRightSide.module.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {logOut}from '../../redux/actions/actions';

function HeaderRightSide({ dispatch,isLoggedIn }) {

    function exit() {
        localStorage.removeItem("user")
        dispatch(logOut())
    }

    return !isLoggedIn ?
        <div className={classes["header-right-side"]}>

            <Link to='/sign-in'>
                <button className={classes['sign-in']}>Sign-in</button>
            </Link>
            <Link to='/sign-up'>
                <button className={classes['sign-up']}>Sign-up</button>
            </Link>
        </div>
        :
        <div className={classes["header-right-side"]}>

            <Link to='/create'>
                <button className={classes['create-article']}>Create article</button>
            </Link>
            <Link to='/profile'>
            <div  className={classes["user"]}>
                <span className={classes["user-name"]}>
                {JSON.parse(localStorage.getItem('user')).username}
                </span>
                <img src={JSON.parse(localStorage.getItem('user')).image} alt="" className={classes["user-avatar" ]}/>
            </div>
            </Link>
            <Link to='/'>
                <button onClick={exit} className={classes['log-out']}>Log Out</button>
            </Link>
        </div>

}

function mstp(s) {
    return {
        isLoggedIn:s.auth.isLoggedIn
    }
}

export default connect(mstp)(HeaderRightSide);

