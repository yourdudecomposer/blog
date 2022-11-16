import React from 'react';
import classes from './Header.module.scss';
import {
    Link,
} from "react-router-dom";
import { connect } from 'react-redux';
import HeaderRightSide from '../HeaderRightSide/HeaderRightSide';
function Header({token}) {
    console.log(token)
    return (<header className={classes['header']}>

        <Link to='/'>
            <h1>Realworld Blog</h1>
        </Link>
        <Link to='/profile'>
            <h1>меня тут нету</h1>
        </Link>


<HeaderRightSide/>
    </header>);
}


function mstp(state) {
    return {
        token: state.auth.token
    }
}
export default connect(mstp)( Header);