import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Background from 'Background';
import MobileLayout from 'layout/MobileLayout/MobileLayout';
import Loading from 'Loading';
import Index from 'pages/Index';
import Login from 'pages/auth/Login';
import Join from 'pages/auth/Join';
import MyStudy from 'pages/MyStudy';
import StudyLeague from 'pages/StudyLeague';
import FindStudy from 'pages/FindStudy';
import MyPage from 'pages/MyPage';
import FindEmail from 'pages/auth/FindEmail';
import FindPassword from 'pages/auth/FindPassword';
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
      <Route path="/mystudy">
        <MyStudy />
      </Route>
      <Route path="/studyleague">
        <StudyLeague />
      </Route>
      <Route path="/findstudy">
        <FindStudy />
      </Route>
      <Route path="/mypage">
        <MyPage />
      </Route>
      <Redirect to="/mystudy" />
    </Switch>
  ) : (
    <Switch>
      <Route exact path="/">
        <Index />
      </Route>
      <Route exact path="/auth/login">
        <Login />
      </Route>
      <Route exact path="/auth/join">
        <Join />
      </Route>
      <Route exact path="/auth/findemail">
        <FindEmail />
      </Route>
      <Route exact path="/auth/findpassword">
        <FindPassword />
      </Route>
      <Redirect to="/" />
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
