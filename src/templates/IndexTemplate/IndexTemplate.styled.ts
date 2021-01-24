import styled from 'styled-components';

export const MainSection = styled.div`
  width: 100%;
  padding: 5rem 0;
  display: flex;
  background-color: #0ebeaf;

  @media (max-width: 1025px) {
    flex-direction: column-reverse;
  }
`;

export const AppSection = styled.section`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1025px) {
    width: 100%;
  }
`;

export const LoginSection = styled.section`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1025px) {
    width: 100%;
  }
`;

export const DescriptionSection = styled.section`
  width: 100%;
`;
