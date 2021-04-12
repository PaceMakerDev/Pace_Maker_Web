import styled from 'styled-components';

export const StyledHomeTemplate = styled.div`
  height: 100vh;
  padding: 3rem 0;
  position: relative;

  @media (max-width: 769px) {
    margin: 0 10vw;
  }
`;

export const StyledLogoSection = styled.section`
  margin-top: 1rem;
`;

export const StyledAuthSection = styled.section`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 30px;

  button {
    margin-bottom: 0.5rem;
  }
`;