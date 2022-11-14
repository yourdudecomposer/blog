import React from 'react';
import classes from './Header.module.scss';
import {
    Link,
} from "react-router-dom";
function Header() {
    return (<header className={classes['header']}>

        <Link to='/'>
            <h1>Realworld Blog</h1>
        </Link>
        <Link to='/profile'>
            <h1>меня тут нету</h1>
        </Link>
        <div className={classes["header-right-side"]}>

            <Link to='/sign-in'>
                <button className={classes['sign-in']}>Sign-in</button>
            </Link>
            <Link to='/sign-up'>
                <button className={classes['sign-up']}>Sign-up</button>
            </Link>
        </div>
    </header>);
}

export default Header;