import type { AppProps } from 'next/app';
import 'common/styles/reset.css';
import 'common/styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
