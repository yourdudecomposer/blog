import { combineReducers } from "redux";
import articles from "./articlesReducer";
import article from "./articleReducer";
import auth from "./authReducer";

export default combineReducers({
    articles,
    article,
    auth
});