import AppRouter from 'Router';
import axios from 'axios';
import { AXIOS_DEFAULT_URL } from 'common/constants/config';

const App: React.FC = () => {
  // Global axios default setting
  axios.defaults.baseURL = AXIOS_DEFAULT_URL;
  axios.defaults.timeout = 5000;
  axios.defaults.headers = { 'Content-Type': 'application/json' };
  return <AppRouter />
};

export default App;
