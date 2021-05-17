import React from 'react';
import Background from 'Background';
import MobileLayout from 'layout/MobileLayout/MobileLayout';
import Loading from 'Loading';
import Index from 'pages/Index';
import Login from 'pages/auth/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useAppSelector } from 'common/reduxhooks';

interface Props {
  isLoading: boolean;
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

const Router: React.FC<Props> = ({ isLoading }: Props) => {
  const authStore = useAppSelector(state => state.authReducer);

  return (
    <BrowserRouter>
      <Background />

      <MobileLayout>{isLoading ? <Loading /> : <PageRouter isLogined={authStore.isLogined} />}</MobileLayout>
    </BrowserRouter>
  );
};

export default Router;
