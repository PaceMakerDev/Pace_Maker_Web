import React from 'react';
import styled from 'styled-components';

const style: React.CSSProperties = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const StyledLoading = styled.div`
  display: inline-block;
  width: 70px;
  height: 70px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #30d4d3;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
    }
  }
`;

const Loading: React.FC = () => (
  <div style={style}>
    <StyledLoading />
  </div>
);

export default Loading;
