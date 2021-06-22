import styled from 'styled-components';

export const StyledInputBox = styled.div`
  margin-bottom: 2.5rem;

  .input-label {
    margin-bottom: 0.8rem;
  }
`;

export const StyledRadioWrapper = styled.div`
  margin-top: 1.5rem;

  .academic-status {
    margin-right: 1.4rem;
  }
`;

export const StyledBirthdayWrapper = styled.div`
  width: 40%;
  position: relative;
  display: inline-flex;
  align-items: center;

  span {
    margin: 0 0.4rem;
    font-weight: bold;
    font-size: 0.875rem;
  }

  &.year {
    width: 40%;
  }

  &.month, &.day {
    width: 30%;
  }
`;

export const StyledBirthdayInputWrapper = styled.div`
  width: 80%;
`;

export const StyledAgreeWrapper = styled.div`
  margin: 1.2rem 0;
  display: flex;
  align-items: center;

  .check-name {
    margin-right: auto;
    font-weight: bold;
    font-size: 0.875rem;
  }
`;