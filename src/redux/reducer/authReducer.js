import {
  LOG_IN,
  LOG_OUT,
  LOG_IN_FAILED,
  SIGN_UP_FAILED,
  EDIT_FAILED,
  SIGN_UP_SUCCESS,
  EDIT_SUCCESS,
} from "../actions/actions";

const initalState = {
  isLoggedIn: false,
  isLogInFailed: false,
  isSignUpFailed: null,
  isEditFailed: null,
};
// eslint-disable-next-line
export default function authReducer(state = initalState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
        isLogInFailed: false,
      };
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOG_IN_FAILED:
      return {
        ...state,
        isLogInFailed: true,
      };
    case SIGN_UP_FAILED:
      return {
        ...state,
        isSignUpFailed: action.payload.message,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isSignUpFailed: null,
      };
    case EDIT_FAILED:
      return {
        ...state,
        isEditFailed: action.payload.message,
      };
    case EDIT_SUCCESS:
      return {
        ...state,
        isEditFailed: null,
      };

    default:
      return state;
  }
}
