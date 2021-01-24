import styled from 'styled-components';
import { HEADER_HEIGHT } from 'common/constants/style';

export const StyledHeader = styled.header`
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  padding: 0 1.85rem;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.12);
  background-color: #fff;

  img.logo {
    width: 150px;
  }
`;

export const StyledMenuWrapper = styled.div`
  width: 100%;
  text-align: right;

  svg {
    margin-left: 2.5rem;
    font-size: 1.3rem;
    color: #333;
  }
`;

export const StyledMenu = styled.a`
  margin-left: 1.85rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  color: #0ebeaf;
`;
