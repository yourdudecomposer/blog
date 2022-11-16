import api from '../../services/Api/Api'


export const FETCH_ARTICLES_BEGIN = 'FETCH_ARTICLES_BEGIN';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';

export const FETCH_ARTICLE_BEGIN = 'FETCH_ARTICLE_BEGIN';
export const FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS';
export const FETCH_ARTICLE_FAILURE = 'FETCH_ARTICLE_FAILURE';

export const SAVE_TOKEN = 'SAVE_TOKEN';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';

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



export const saveToken = token => ({
    type: SAVE_TOKEN,
    payload:  token 
});
export const removeToken = token => ({
    type: REMOVE_TOKEN,
});



export function fetchArticles(ofset) {
    return async dispatch => {
        dispatch(fetchArticlesBegin());
        try {
            const res = await api.getArticles(ofset)
            if (res.articles) {
                dispatch(fetchArticlesSuccess(res));
            } else throw new Error('there is no article from server')
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