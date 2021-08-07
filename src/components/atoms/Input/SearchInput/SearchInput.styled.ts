import styled from 'styled-components';

export const StyledSearchInput = styled.div`
  position: relative;

  .search-input {
    padding-right: 40px;
  }

  .search-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    cursor: pointer;
  }
`;