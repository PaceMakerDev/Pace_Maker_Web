import styled from 'styled-components';

export const StyledLoginBox = styled.section`
  width: 540px;
  margin: 1.85rem auto;
  padding: 3.75rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  background-color: #fff;

  @media (max-width: 1025px) {
    width: 80%;
  }

  img {
    width: 120px;
  }

  h1 {
    margin-bottom: 1.85rem;
    font-weight: 700;
    font-size: 3rem;
    color: #0ebeaf;
  }

  h2 {
    margin-bottom: 2.5rem;
    font-weight: 600;
    font-size: 2.5rem;
    color: #0ebeaf;
  }
`;

export const StyledForgotPassword = styled.a`
  margin-top: 1.25rem;
  text-decoration: underline;
  font-size: 0.8rem;
  color: #ccc;
`;
