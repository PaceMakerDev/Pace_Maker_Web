import React from 'react';

const style: React.CSSProperties = {
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  backgroundColor: '#040F13',
  zIndex: -1,
};

const Background: React.FC = () => <div style={style} />;

export default Background;
