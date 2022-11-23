import api from '../../services/Api/Api'


export const FETCH_ARTICLES_BEGIN = 'FETCH_ARTICLES_BEGIN';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';

export const FETCH_ARTICLE_BEGIN = 'FETCH_ARTICLE_BEGIN';
export const FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS';
export const FETCH_ARTICLE_FAILURE = 'FETCH_ARTICLE_FAILURE';

export const LOG_IN  = 'LOG_IN ';
export const LOG_OUT = 'LOG_OUT';
export const LOG_IN_FAILED = 'LOG_IN_FAILED';
export const SIGN_UP_FAILED = 'SIGN_UP_FAILED';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const EDIT_FAILED = 'EDIT_FAILED';
export const EDIT_SUCCESS = 'EDIT_SUCCESS';

export const fetchArticlesBegin = () => ({
    type: FETCH_ARTICLES_BEGIN
});

export const fetchArticlesSuccess = payload => ({
    type: FETCH_ARTICLES_SUCCESS,
    payload:  payload 
});

export const fetchArticlesFailure = error => ({
    type: FETCH_ARTICLES_FAILURE,
    payload:  error 
});



export const fetchArticleBegin = () => ({
    type: FETCH_ARTICLE_BEGIN
});

export const fetchArticleSuccess = payload => ({
    type: FETCH_ARTICLE_SUCCESS,
    payload:  payload 
});

export const fetchArticleFailure = error => ({
    type: FETCH_ARTICLE_FAILURE,
    payload:  error 
});



export const logIn = () => ({
    type: LOG_IN ,
});
export const logOut = () => ({
    type: LOG_OUT,
});
export const loginFailed = () => ({
    type: LOG_IN_FAILED,
});
export const signUpFailed = (err) => ({
    type: SIGN_UP_FAILED,
    payload:err
});
export const signUpSuccess = () => ({
    type: SIGN_UP_SUCCESS,
});
export const editFailed = (err) => ({
    type: EDIT_FAILED,
    payload:err
});
export const editSuccess = (err) => ({
    type: EDIT_SUCCESS,
});



export function fetchArticles(ofset) {
    return async dispatch => {
        dispatch(fetchArticlesBegin());
        try {
            const res = await api.getArticles(ofset)
            if (res.articles) {
                dispatch(fetchArticlesSuccess(res));
            } else throw new Error('there is no articles from server')
        } catch (error) {
            return dispatch(fetchArticlesFailure(error));
        }
    };
}


export function fetchArticle(slug) {
    return async dispatch => {
        dispatch(fetchArticleBegin());
        try {
            const res = await api.getArticle(slug)
            if (res.article) {
                dispatch(fetchArticleSuccess(res.article));
            } else throw new Error('there is no article from server')
        } catch (error) {
            return dispatch(fetchArticleFailure(error));
        }
    };
}