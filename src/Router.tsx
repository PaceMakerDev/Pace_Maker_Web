import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MobileLayout from 'layout/MobileLayout/MobileLayout';
import Background from 'Background';
import LoadingPaper from 'LoadingPaper';
import Index from 'pages/Index';
import Login from 'pages/auth/Login';
import Join from 'pages/auth/Join';
import EmailVerification from 'pages/auth/EmailVerification';
import FindEmail from 'pages/auth/FindEmail';
import FindPassword from 'pages/auth/FindPassword';
import MyStudy from 'pages/MyStudy';
import StudyLeague from 'pages/StudyLeague';
import FindStudy from 'pages/FindStudy/index';
import StudySearch from 'pages/FindStudy/StudySearch';
import MyPage from 'pages/MyPage/index';
import EditPassword from 'pages/MyPage/EditPassword';
import { useAppSelector } from 'common/hooks/reduxhooks';
import Test from 'pages/Test';

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
      <Route path="/findstudy/search">
        <StudySearch />
      </Route>
      <Route path="/findstudy">
        <FindStudy />
      </Route>
      <Route path="/mypage/editpassword">
        <EditPassword />
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
      <Route exact path="/auth/join/email-verification">
        <EmailVerification />
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
      <Route exact path="/test">
        <Test />
      </Route>
      <Redirect to="/" />
    </Switch>
  );

const Router: React.FC<Props> = ({ isLoading }) => {
  const authStore = useAppSelector(state => state.authReducer);

  return (
    <BrowserRouter>
      <Background />

      <MobileLayout>{isLoading ? <LoadingPaper /> : <PageRouter isLogined={authStore.isLogined} />}</MobileLayout>
    </BrowserRouter>
  );
};

export default Router;
