import React, { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logOut } from '../../redux/actions/actions';
import img from '../../assets/img/avatar.svg';

import classes from './HeaderRightSide.module.scss';

function HeaderRightSide({ dispatch, isLoggedIn }) {

    function exit() {
        localStorage.removeItem("user")
        dispatch(logOut())
    }

    async function getImg(url) {

        try {
            const res = await fetch(url);
            const blob = await res.blob()
            const blobUrl = URL.createObjectURL(blob);
            setAvatar(blobUrl);
        } catch (error) {
            setAvatar(img)
        }
    }

    const [avatar, setAvatar] = useState();
    const imgFromLocalStorage = JSON.parse(localStorage.getItem('user'))?.image;
    useEffect(() => {
        !imgFromLocalStorage ? setAvatar(img) : getImg(imgFromLocalStorage)
    }, [imgFromLocalStorage])
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

            <Link to='/new-article'>
                <button className={classes['create-article']}>Create article</button>
            </Link>
            <Link to='/profile'>
                <div className={classes.user}>
                    <span className={classes["user-name"]}>
                        {JSON.parse(localStorage.getItem('user')).username}
                    </span>
                    <img src={avatar} alt="" className={classes["user-avatar"]} />
                </div>
            </Link>
            <Link to='/'>
                <button onClick={exit} className={classes['log-out']}>Log Out</button>
            </Link>
        </div>

}

function mstp(s) {
    return {
        isLoggedIn: s.auth.isLoggedIn
    }
}

export default connect(mstp)(HeaderRightSide);

