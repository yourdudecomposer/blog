import Header from '../Header/Header';
import module from './App.module.scss';
import MainPage from '../../pages/MainPage/MainPage';
import SignIn from '../../pages/SignIn/SignIn';
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Article from '../../pages/Article/Article';
import SignUp from "../../pages/SignUp/SignUp";
import Profile from '../../pages/Profile/Profile';
import { connect } from 'react-redux';
import { logIn } from '../../redux/actions/actions';
import NewArticle from '../../pages/NewArticle/NewArticle';
import EditArticle from '../../pages/EditArticle/EditArticle';


function App({ dispatch, isLoggedIn, isEditFailed }) {

  useEffect(() => {
    localStorage.getItem('user') && dispatch(logIn())
  }, [])

  return (

    <Router >
      <div className={module["wrapper"]}>
        <Header />
        <main className={module["main"]}>
  
          <Switch>
            <Route exact path={'/'}>
              <MainPage />
            </Route>
            <Route path={'/sign-in'}>
              {isLoggedIn ? <Redirect to="/articles" /> : <SignIn />}
            </Route>
    
            <Route path={'/sign-up'}>
              {isLoggedIn ? <Redirect to="/articles" /> : <SignUp />}

            </Route>
            <Route path={'/profile'}>
              <Profile />
            </Route>
            <Route exact path={'/articles'}>
              <MainPage />
            </Route>
            <Route exact path={`/articles/:slug`}>
              <Article />
            </Route>
            <Route path={`/articles/:slug/edit`}>
              <EditArticle/>
            </Route>
            <Route path={'/new-article'}>
              {!isLoggedIn ? <Redirect to="/sign-in" /> : <NewArticle />}
            </Route>
          </Switch>


        </main>


      </div>
    </Router>
  );
}

function mstp(s) {
  return {
    isLoggedIn: s.auth.isLoggedIn
  }
}
export default connect(mstp)(App);
