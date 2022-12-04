import {
  CREATE_ARTICLE_BEGIN,
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_FAILURE,
} from "../actions/actions";

const initalState = {
  loading: false,
  error: null,
};
// eslint-disable-next-line
export default function createArticleReducer(state = initalState, action) {
  switch (action.type) {
    case CREATE_ARTICLE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case CREATE_ARTICLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
