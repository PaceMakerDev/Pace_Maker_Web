import styled, { css } from 'styled-components';

const fillPrimary = css`
  border: 2px solid #0ebeaf;
  background-color: #0ebeaf;
  color: #fff;
`;

const emptyPrimary = css`
  border: 2px solid #0ebeaf;
  color: #0ebeaf;

  &:hover {
    background-color: #0ebeaf;
    color: #fff;
  }
`;

const StyledSmallButton = styled.button`
  width: 100%;
  max-width: 60px;
  height: 30px;
  font-size: 0.8rem;
  transition: all 0.2s ease;
  cursor: pointer;
`;

const StyledMiddleButton = styled.button`
  width: 100%;
  max-width: 200px;
  height: 50px;
  font-size: 1rem;
  transition: all 0.2s ease;
  cursor: pointer;
`;

const StyledLargeButton = styled.button`
  width: 100%;
  max-width: 360px;
  height: 50px;
  font-size: 1.1rem;
  transition: all 0.2s ease;
  cursor: pointer;
`;

const StyledFullButton = styled.button`
  width: 100%;
  height: 50px;
  font-size: 1.1rem;
  transition: all 0.2s ease;
  cursor: pointer;
`;

const fill = css`
  border: 2px solid #fff;
  border-radius: 10px;
  background-color: #fff;
  color: #0ebeaf;

  &:hover {
    transform: translateZ(0) scale(0.98);
  }
`;

const empty = css`
  border: 2px solid #fff;
  border-radius: 10px;
  background-color: transparent;
  color: #fff;

  &:hover {
    background-color: #fff;
    color: #0ebeaf;
  }
`;

export const StyledSmallFillButton = styled(StyledSmallButton)<{ primary?: boolean }>`
  ${fill}
  ${props => props.primary && fillPrimary}
`;

export const StyledSmallEmptyButton = styled(StyledSmallButton)<{ primary?: boolean }>`
  ${empty}
  ${props => props.primary && emptyPrimary}
`;

export const StyledMiddleFillButton = styled(StyledMiddleButton)<{ primary?: boolean }>`
  ${fill}
  ${props => props.primary && fillPrimary}
`;

export const StyledMiddleEmptyButton = styled(StyledMiddleButton)<{ primary?: boolean }>`
  ${empty}
  ${props => props.primary && emptyPrimary}
`;

export const StyledLargeFillButton = styled(StyledLargeButton)<{ primary?: boolean }>`
  ${fill}
  ${props => props.primary && fillPrimary}
`;

export const StyledLargeEmptyButton = styled(StyledLargeButton)<{ primary?: boolean }>`
  ${empty}
  ${props => props.primary && emptyPrimary}
`;

export const StyledFullFillButton = styled(StyledFullButton)<{ primary?: boolean}>`
  ${fill}
  ${props => props.primary && fillPrimary}
`;

export const StyledFullEmptyButton = styled(StyledFullButton)<{ primary?: boolean}>`
  ${empty}
  ${props => props.primary && emptyPrimary}
`;