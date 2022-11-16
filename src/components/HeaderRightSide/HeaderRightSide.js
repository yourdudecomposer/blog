import React from 'react';
import classes from './HeaderRightSide.module.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {removeToken}from '../../redux/actions/actions';

function HeaderRightSide({ dispatch,token }) {

    function logOut() {

        dispatch(removeToken())

    }

    return !token ?
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
            <Link to='/'>
                <button onClick={logOut} className={classes['log-out']}>Log Out</button>
            </Link>
        </div>

}

function mstp(s) {
    return {
        token:s.auth.token
    }
}

export default connect(mstp)(HeaderRightSide);