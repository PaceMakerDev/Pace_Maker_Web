import styled from 'styled-components';

export const StyledAppDescription = styled.div`
  padding: 0 2rem;
  padding-top: 4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1025px) {
    flex-direction: column;
  }

  .image-wrapper img {
    width: 450px;

    @media (max-width: 769px) {
      width: 100%;
    }
  }

  .description {
    p {
      line-height: 2;
      font-weight: 600;
      font-size: 2.4rem;
      color: #333;
    }

    span {
      color: #0ebeaf;
    }
  }
`;
