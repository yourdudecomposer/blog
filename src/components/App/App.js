import PropTypes from "prop-types";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";

import MainPage from "../../pages/MainPage/MainPage";
import SignIn from "../../pages/SignIn/SignIn";
import Article from "../../pages/Article/Article";
import SignUp from "../../pages/SignUp/SignUp";
import Profile from "../../pages/Profile/Profile";
import Header from "../Header/Header";
import { logIn } from "../../redux/actions/actions";
import NewArticle from "../../pages/NewArticle/NewArticle";
import EditArticle from "../../pages/EditArticle/EditArticle";

import classes from "./App.module.scss";

function App({ dispatch, isLoggedIn }) {
  useEffect(() => {
    if (localStorage.getItem("user")) dispatch(logIn());
  }, []);

  return (
    <Router>
      <div className={classes.wrapper}>
        <Header />
        <main className={classes.main}>
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route path="/sign-in">
              {isLoggedIn ? <Redirect to="/articles" /> : <SignIn />}
            </Route>

            <Route path="/sign-up">
              {isLoggedIn ? <Redirect to="/articles" /> : <SignUp />}
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route exact path="/articles">
              <MainPage />
            </Route>
            <Route exact path="/articles/:slug">
              <Article />
            </Route>
            <Route path="/articles/:slug/edit">
              <EditArticle />
            </Route>
            <Route path="/new-article">
              {!isLoggedIn ? <Redirect to="/sign-in" /> : <NewArticle />}
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

App.propTypes = {
  dispatch: PropTypes.func,
  isLoggedIn: PropTypes.bool,
};
App.defaultProps = {
  dispatch: () => {},
  isLoggedIn: true,
};

function mstp(s) {
  return {
    isLoggedIn: s.auth.isLoggedIn,
  };
}
export default connect(mstp)(App);
