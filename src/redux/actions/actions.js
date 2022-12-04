import api from "../../services/Api/Api";

export const FETCH_ARTICLES_BEGIN = "FETCH_ARTICLES_BEGIN";
export const FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS";
export const FETCH_ARTICLES_FAILURE = "FETCH_ARTICLES_FAILURE";

export const FETCH_ARTICLE_BEGIN = "FETCH_ARTICLE_BEGIN";
export const FETCH_ARTICLE_SUCCESS = "FETCH_ARTICLE_SUCCESS";
export const FETCH_ARTICLE_FAILURE = "FETCH_ARTICLE_FAILURE";

export const LOG_IN = "LOG_IN ";
export const LOG_OUT = "LOG_OUT";
export const LOG_IN_FAILED = "LOG_IN_FAILED";
export const SIGN_UP_FAILED = "SIGN_UP_FAILED";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const EDIT_FAILED = "EDIT_FAILED";
export const EDIT_SUCCESS = "EDIT_SUCCESS";

export const CREATE_ARTICLE_BEGIN = "CREATE_ARTICLE_BEGIN";
export const CREATE_ARTICLE_SUCCESS = "CREATE_ARTICLE_SUCCESS";
export const CREATE_ARTICLE_FAILURE = "CREATE_ARTICLE_FAILURE";

export const EDIT_ARTICLE_BEGIN = "EDIT_ARTICLE_BEGIN";
export const EDIT_ARTICLE_SUCCESS = "EDIT_ARTICLE_SUCCESS";
export const EDIT_ARTICLE_FAILURE = "EDIT_ARTICLE_FAILURE";

export const fetchArticlesBegin = () => ({
  type: FETCH_ARTICLES_BEGIN,
});

export const fetchArticlesSuccess = (payload) => ({
  type: FETCH_ARTICLES_SUCCESS,
  payload,
});

export const fetchArticlesFailure = (error) => ({
  type: FETCH_ARTICLES_FAILURE,
  payload: error,
});

export const fetchArticleBegin = () => ({
  type: FETCH_ARTICLE_BEGIN,
});

export const fetchArticleSuccess = (payload) => ({
  type: FETCH_ARTICLE_SUCCESS,
  payload,
});

export const fetchArticleFailure = (error) => ({
  type: FETCH_ARTICLE_FAILURE,
  payload: error,
});

export const logIn = () => ({
  type: LOG_IN,
});
export const logOut = () => ({
  type: LOG_OUT,
});
export const loginFailed = () => ({
  type: LOG_IN_FAILED,
});
export const signUpFailed = (err) => ({
  type: SIGN_UP_FAILED,
  payload: err,
});
export const signUpSuccess = () => ({
  type: SIGN_UP_SUCCESS,
});
export const editFailed = (err) => ({
  type: EDIT_FAILED,
  payload: err,
});
export const editSuccess = () => ({
  type: EDIT_SUCCESS,
});

export const startCreateArticle = () => ({
  type: CREATE_ARTICLE_BEGIN,
});

export const successCreateArticle = () => ({
  type: CREATE_ARTICLE_SUCCESS,
});

export const failtureCreateArticle = (err) => ({
  type: CREATE_ARTICLE_FAILURE,
  payload: err,
});

export const startEditArticle = () => ({
  type: EDIT_ARTICLE_BEGIN,
});

export const successEditArticle = () => ({
  type: EDIT_ARTICLE_SUCCESS,
});

export const failtureEditArticle = (err) => ({
  type: EDIT_ARTICLE_FAILURE,
  payload: err,
});
/* eslint-disable consistent-return */
export function fetchArticles(ofset) {
  return async (dispatch) => {
    dispatch(fetchArticlesBegin());
    try {
      const res = await api.getArticles(ofset);
      if (res.articles) {
        dispatch(fetchArticlesSuccess(res));
        window.scrollTo(0, 0);
      } else throw new Error("there is no articles from server");
    } catch (error) {
      return dispatch(fetchArticlesFailure(error));
    }
  };
}

export function fetchArticle(slug) {
  return async (dispatch) => {
    dispatch(fetchArticleBegin());
    try {
      const res = await api.getArticle(slug);
      if (res.article) {
        dispatch(fetchArticleSuccess(res.article));
      } else throw new Error("there is no article from server");
    } catch (error) {
      return dispatch(fetchArticleFailure(error));
    }
  };
}

export function createArticle(data, history) {
  return async (dispatch) => {
    dispatch(startCreateArticle());
    try {
      const res = await api.createArticle(data);
      if (res.article) {
        await dispatch(successCreateArticle());
        history.push("/");
      } else throw new Error("Something go wrong");
    } catch (error) {
      return dispatch(failtureCreateArticle(error));
    }
  };
}

export function editArticle(data, history, slug) {
  return async (dispatch) => {
    dispatch(startEditArticle());
    try {
      const res = await api.editArticle(data, slug);
      if (res.article) {
        await dispatch(successEditArticle());
        history.push("/");
      } else throw new Error("Something go wrong with Article Edit");
    } catch (error) {
      return dispatch(failtureEditArticle(error));
    }
  };
}

export const makeData = (data) => {
  const tagList = Object.entries(data)
    .filter(([key, value]) => key.slice(0, 3).includes("tag") && value !== "")
    .map((el) => el[1]);

  const { title, description, body } = data;

  return {
    article: {
      title,
      description,
      body,
      tagList,
    },
  };
};

/* eslint-enable consistent-return */
