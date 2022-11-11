import api from '../../services/Api/Api'


export const FETCH_ARTICLES_BEGIN = 'FETCH_ARTICLES_BEGIN';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';


export const fetchArticlesBegin = () => ({
    type: FETCH_ARTICLES_BEGIN
});

export const fetchArticlesSuccess = articles => ({
    type: FETCH_ARTICLES_SUCCESS,
    payload:  articles 
});

export const fetchArticlesFailure = error => ({
    type: FETCH_ARTICLES_FAILURE,
    payload:  error 
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