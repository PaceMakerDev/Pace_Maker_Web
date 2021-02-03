import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Index from 'pages/Index';
import Mystudy from 'pages/Mystudy/Mystudy';
import ClassList from 'pages/Mystudy/ClassList';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

const AppRouter: React.FC = () => {
  const account = useSelector((state: RootState) => state.account);
  const { isLogin } = account;
  return (
    <Router>
      {isLogin ? (
        <Switch>
          <Route path="/mystudy/classlist">
            <ClassList />
          </Route>
          <Route path="/mystudy">
            <Mystudy />
          </Route>
          <Redirect to="/mystudy" />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Redirect to="/" />
        </Switch>
      )}
    </Router>
  );
};

export default AppRouter;
