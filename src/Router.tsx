import React from 'react';
import Background from 'Background';
import Login from 'pages/auth/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Router: React.FC = () => (
  <BrowserRouter>
    <Background />
    <Switch>
      <Route path="/auth/login">
        <Login />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
