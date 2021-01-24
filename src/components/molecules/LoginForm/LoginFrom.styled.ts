import styled from 'styled-components';

export const StyledLoginForm = styled.form`
  width: 330px;

  @media (max-width: 769px) {
    width: 70%;
  }

  .inputbox {
    width: 100%;
    margin-bottom: 1.85rem;
  }

  label {
    margin-bottom: 0.6rem;
    color: #0ebeaf;
  }
`;
