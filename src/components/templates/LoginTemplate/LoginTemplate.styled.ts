import styled from 'styled-components';

export const StyledLoginTemplate = styled.div`
  height: 100vh;
  padding: 2.5rem 0;
  position: relative;
`;

export const StyledHeaderSection = styled.header`
  margin-bottom: 2.5rem;
`;

export const StyledLoginFormSection = styled.section`
  margin: 0 5rem;

  @media (max-width: 769px) {
    margin: 0 10vw;
  }
`;

export const StyledForgotSection = styled.section`
  width: 100%;
  position: absolute;
  bottom: 30px;
  text-align: center;
`;
