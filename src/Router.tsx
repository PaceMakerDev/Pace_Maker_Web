import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Index from 'pages/Index';
import Mystudy from 'pages/Mystudy';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

const AppRouter: React.FC = () => {
  const account = useSelector((state: RootState) => state.account);
  const { isLogin } = account;
  return (
    <Router>
      <Switch>
        {isLogin ? (
          <>
            <Route path="/mystudy">
              <Mystudy />
            </Route>
            <Redirect to="/mystudy" />
          </>
        ) : (
          <>
            <Route exact path="/">
              <Index />
            </Route>
            <Redirect to="/" />
          </>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
