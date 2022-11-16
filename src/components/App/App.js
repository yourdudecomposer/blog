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


function App({token}) {



  return (
    <Router>
      <div className={module["wrapper"]}>
        <Header />
        <main className={module["main"]}>
          <Switch>
            <Route exact path={'/'}>
              <MainPage />
            </Route>
            <Route path={'/sign-in'}>
              {token ? <Redirect to="/articles" /> : <SignIn />}
            </Route>
            <Route path={'/sign-up'}>
              <SignUp />
            </Route>
            <Route path={'/profile'}>
              <Profile />
            </Route>
            <Route exact path={'/articles'}>
              <MainPage />
            </Route>
            <Route path={`/articles/:slug`}>
              <Article />
            </Route>


          </Switch>


        </main>


      </div>
    </Router>
  );
}

function mstp(s) {
 return{
  token:s.auth.token
 } 
}
export default connect(mstp) (App);
