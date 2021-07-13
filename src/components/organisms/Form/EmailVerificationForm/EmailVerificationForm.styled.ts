import styled from 'styled-components';

export const StyledEmailVerificationForm = styled.form`
  .email-message {
    margin: 3.5rem 0;
  }
`;

export const StyledAnnouncement = styled.p`
  margin: 1.5rem 0;
  line-height: 1.5;
  font-weight: 700;
  font-size: 0.875rem;
`;

export const StyledInputBox = styled.div`
  margin-bottom: 2.5rem;

  .input-label {
    margin-bottom: 0.8rem;
  }

  .error-message {
    margin-top: 0.7rem;
  }
`;

export const StyledEmailInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin-left: 0.5rem;
    font-weight: 700;
    font-size: 0.875rem;
  }
`;

export const StyledSubmitButtonWrapper = styled.div`
  margin-bottom: 5rem;
  text-align: center;
`;