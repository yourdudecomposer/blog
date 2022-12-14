import {
  EDIT_ARTICLE_BEGIN,
  EDIT_ARTICLE_SUCCESS,
  EDIT_ARTICLE_FAILURE,
} from "../redux-tupes";

const initalState = {
  loading: false,
  error: null,
};
// eslint-disable-next-line
export default function editArticleReducer(state = initalState, action) {
  switch (action.type) {
    case EDIT_ARTICLE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case EDIT_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case EDIT_ARTICLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
