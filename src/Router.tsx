import React from 'react';
import Background from 'Background';
import MobileLayout from 'layout/MobileLayout/MobileLayout';
import Loading from 'Loading';
import Index from 'pages/Index';
import Login from 'pages/auth/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

interface Props {
  isLoading: boolean;
  isLogined: boolean;
}

interface SubProps {
  isLogined: boolean;
}

const PageRouter: React.FC<SubProps> = ({ isLogined }: SubProps) =>
  isLogined ? (
    <Switch>
      <Route exact path="/">
        <div />
      </Route>
    </Switch>
  ) : (
    <Switch>
      <Route exact path="/">
        <Index />
      </Route>
      <Route exact path="/auth/login">
        <Login />
      </Route>
    </Switch>
  );

const Router: React.FC<Props> = ({ isLoading, isLogined }: Props) => (
  <BrowserRouter>
    <Background />

    <MobileLayout>{isLoading ? <Loading /> : <PageRouter isLogined={isLogined} />}</MobileLayout>
  </BrowserRouter>
);

export default Router;
