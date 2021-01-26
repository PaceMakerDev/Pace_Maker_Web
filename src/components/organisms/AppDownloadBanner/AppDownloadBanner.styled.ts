import styled from 'styled-components';

export const StyledAppDownloadBanner = styled.div`
  width: 650px;
  margin: 2.5rem 0;
  padding: 0 3rem;

  @media (max-width: 1025px) {
    width: 80%;
    margin-top: 4rem;
  }
`;

export const StyledMentWrapper = styled.div`
  margin-bottom: 5rem;

  h1 {
    margin-bottom: 1.8rem;
    line-height: 1.2;
    font-weight: bold;
    font-size: 2.8rem;
    color: #fff;
  }
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  button {
    position: relative;
    margin-bottom: 1rem;

    svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 5%;
      margin-right: 0.8rem;
      font-size: 1.4em;
    }
  }
`;
