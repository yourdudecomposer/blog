import { combineReducers } from "redux";
import articles from "./articlesReducer";
import article from "./articleReducer";
import auth from "./authReducer";
import create from "./createArticleReducer";

export default combineReducers({
    articles,
    article,
    auth,
    create
});