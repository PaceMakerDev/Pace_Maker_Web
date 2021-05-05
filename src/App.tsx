import React, { useEffect, useState } from 'react';
import Router from 'Router';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // fetch user info

    setTimeout(() => setIsLoading(false), 500);
  }, []);
  return <Router isLoading={isLoading} isLogined={false} />;
};

export default App;
