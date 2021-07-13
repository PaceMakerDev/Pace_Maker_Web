import React from 'react';
import Loading from 'components/atoms/Loading/Loading';

const style: React.CSSProperties = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const LoadingPaper: React.FC = () => (
  <div style={style}>
    <Loading />    
  </div>
);

export default LoadingPaper;
