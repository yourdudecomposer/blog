import React from 'react';
import classes from './ArticleHeader.module.scss'
import like from '../../assets/img/heart.svg';
import avatar from '../../assets/img/avatar.png';
import Tag from '../ui/Tag/Tag';
import {format} from 'date-fns'
function ArticleHeader({title,createdAt,favoritesCount, tagList,author:{username,image}}) {

    return (<header className={classes["article-header"]}>
        <div className={classes["article-header__left-side"]}>
            
            <h2 className={classes["article-header__title"]}>{title}</h2>
            <span className={classes["likes"]}>
                <img src={like} alt="like" className={classes["article-header__like-img"]} />
                <span className={classes["article-header__like-count"]}>{favoritesCount}</span>
            </span>
            <section className={classes["article-header__tag-list"]}>
                <Tag tagList={tagList}/>
            </section>
        </div>
        <section className={classes["article-header__right-side"]}>
            <h3 className={classes["article-header__author-name"]}>{username}</h3>
            <p className={classes["article-header__date"]}>{format(new Date(createdAt), 'MMMM d, Y' )}</p>
            <img src={avatar} alt="" className={classes["article-header__author-img"]}></img>
        </section>
    </header>);
}

export default ArticleHeader;