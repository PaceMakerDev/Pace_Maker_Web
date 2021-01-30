import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Index from 'pages/Index';
import Mystudy from 'pages/Mystudy';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/mystudy">
          <Mystudy />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;