import type { AppProps } from 'next/app';
import axios from 'axios';
import { AXIOS_DEFAULT_URL } from 'common/constants/config';
import 'common/styles/reset.css';
import 'common/styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  // Global axios default setting
  axios.defaults.baseURL = AXIOS_DEFAULT_URL;
  axios.defaults.timeout = 5000;
  axios.defaults.headers = { 'Content-Type': 'application/json' };
  
  return <Component {...pageProps} />;
};

export default MyApp;
