import styled from 'styled-components';

export const StyledCreateStudyRoomForm = styled.form``;

export const StyledInputBox = styled.div`
  margin-bottom: 3rem;
  position: relative;

  .input-label {
    margin-bottom: 0.8rem;
  }

  .error-message {
    margin-top: 0.7rem;
  }

  .hash-tag-msg {
    position: absolute;
    top: 5px;
    right: 0;
  }

  .thin-msg {
    font-weight: 300;
  }
`;

export const StyledUserName = styled.h3`
  margin: 1.5rem 0;
  text-align: right;
  font-weight: 700;
  font-size: 1.2rem;
`;

export const StyledFlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-wrapper {
    flex: 5;
  }

  .right-wrapper {
    flex: 3;
  }
`;

export const StyledStudyCapacity = styled.div`
  display: flex;
  align-items: center;

  span {
    margin: 0 0.5rem;
    word-break: keep-all;
  }
`;