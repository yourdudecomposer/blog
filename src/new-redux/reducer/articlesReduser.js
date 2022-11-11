import { FETCH_ARTICLES_BEGIN, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE } from '../actions/actions'

const initalState = {
    articles: [],
    loading: false,
    articlesCount: null,
    error: null,
}


export default function articlesReducer(state = initalState, action) {
    switch (action.type) {
        case FETCH_ARTICLES_BEGIN:
            console.log('FETCH_ARTICLES_BEGIN')
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_ARTICLES_SUCCESS:
            console.log('FETCH_ARTICLES_SUCCESS')
            return {
                ...state,
                loading: false,
                articles: action.payload.articles,
                articlesCount: action.payload.articlesCount
            };
        case FETCH_ARTICLES_FAILURE:
            console.log('FETCH_ARTICLES_FAILURE')
            return {
                ...state,
                loading: false,
                error: action.payload,
                items: []
            };

        default:
            return state;
    }

}