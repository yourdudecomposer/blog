import React from 'react';
import classes from './Header.module.scss';
import {Link,
} from "react-router-dom";
function Header() {
    return (<header className={classes['header']}>
       
       <Link to='/'>
        <h1>Realworld Blog</h1>
        </Link>
        <div className={classes["header-right-side"]}>

            <Link to='/sign-in'>
            <button className={classes['sign-in']}>Sign-in</button>
            </Link>
           
            <button className={classes['sign-up']}>Sign-up</button>
        </div>
    </header>);
}

export default Header;