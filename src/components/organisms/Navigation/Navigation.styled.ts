import styled from 'styled-components';
import { HEADER_HEIGHT, NAVIGATION_WIDTH } from 'common/constants/style';

export const StyledNavigation = styled.nav`
  width: ${NAVIGATION_WIDTH}px;
  height: calc(100vh - ${HEADER_HEIGHT}px);
  padding: 0 2rem;
  position: fixed;
  left: 0;
  background-color: #0ebeaf;

  ul {
    margin-top: 3rem;

    li {
      margin: 1.25rem 0;

      a {
        text-decoration: none;
        font-weight: 500;
        font-size: 1.25rem;
        color: #fff;
        cursor: pointer;
      }

      a.logout {
        color: #de4f4f;
      }
    }
  }
`;
