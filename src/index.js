import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from "react-router-dom";
import './index.css';
import LandingPage from './LandingPage';
import aboutTeamPage from './aboutTeamPage';
import signInPage from './signInPage';
import signUpPage from './signUpPage';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route exact path ='/' component={LandingPage} />
        <Route exact path ='/AboutUs' component={aboutTeamPage} />
        {/* <Route exact path ='/signInPage' component={signInPage} />
        <Route exact path ='/signUpPage' component={signUpPage} /> */}
        {/* <signInPage /> */}
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
