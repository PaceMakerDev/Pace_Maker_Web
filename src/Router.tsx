import React from 'react';
import Background from 'Background';
import MobileLayout from 'layout/MobileLayout/MobileLayout';
import Index from 'pages/Index';
import Login from 'pages/auth/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Router: React.FC = () => (
  <BrowserRouter>
    <Background />

    <MobileLayout>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route exact path="/auth/login">
          <Login />
        </Route>
      </Switch>
    </MobileLayout>
  </BrowserRouter>
);

export default Router;
