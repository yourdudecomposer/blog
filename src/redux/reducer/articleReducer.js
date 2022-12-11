import {
  FETCH_ARTICLE_BEGIN,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAILURE,
} from "../redux-tupes";

const initalState = {
  article: {},
  loading: false,
  error: null,
};
// eslint-disable-next-line
export default function articleReducer(state = initalState, action) {
  switch (action.type) {
    case FETCH_ARTICLE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        article: action.payload,
      };
    case FETCH_ARTICLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
