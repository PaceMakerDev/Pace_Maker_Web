import styled from 'styled-components';

export const StyledErrorMessage = styled.p<{ visible?: boolean; shake?: boolean; center?: boolean }>`
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  text-align: ${props => props.center && 'center'};
  font-size: 0.75rem;
  color: #ff1010;
  animation: ${props => props.shake && 'shake-animation 0.2s ease infinite'};

  @keyframes shake-animation {
    0% {
      transform: translate(0, 0);
    }
    12.5% {
      transform: translate(2px, 0);
    }
    25% {
      transform: translate(4px, 0);
    }
    37.5% {
      transform: translate(2px, 0);
    }
    50% {
      transform: translate(0, 0);
    }
    62.5% {
      transform: translate(-2px, 0);
    }
    75% {
      transform: translate(-4px, 0);
    }
    87.5% {
      transform: translate(-2px, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;
