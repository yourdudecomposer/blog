import React from 'react';
import classes from './Header.module.scss';
function Header() {
    return (<header className={classes['header']}>
        <h1>Realworld Blog</h1>
        <div className={classes["header-right-side"]}>
            <button className={classes['sign-in']}>Sign-in</button>
            <button className={classes['sign-up']}>Sign-up</button>
        </div>
    </header>);
}

export default Header;