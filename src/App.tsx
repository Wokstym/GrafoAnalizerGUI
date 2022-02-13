import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import TwitterGraph from './features/page/twitter-graph/TwitterGraph';
import LoginTwitter from './features/page/login/LoginTwitter';
import PrivateRoute from './features/utils/PrivateRoute';
import Logout from './features/page/logout/Logout';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/graph">
          <PrivateRoute>
            <TwitterGraph />
          </PrivateRoute>
        </Route>
        <Route path="/login">
          <LoginTwitter />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Redirect from="*" to="/graph" />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
