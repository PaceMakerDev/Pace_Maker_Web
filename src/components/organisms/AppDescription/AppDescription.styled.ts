import styled from 'styled-components';

export const StyledAppDescription = styled.div`
  padding: 0 1rem;
  padding-top: 4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .image-wrapper img {
    width: 450px;
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
