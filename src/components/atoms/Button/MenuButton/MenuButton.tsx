import React from 'react';
import Icon from 'components/atoms/Icon/Icon';
import { StyledMenuButton, StyledSpan } from './MenuButton.styled';

interface Props {
  activeIconSrc: string;
  nonactiveIconSrc: string;
  title: string;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const MenuButton: React.FC<Props> = ({ activeIconSrc, nonactiveIconSrc, active, title, onClick }: Props) => (
  <StyledMenuButton onClick={onClick}>
    <Icon src={active ? activeIconSrc : nonactiveIconSrc} width="30px" />
    <StyledSpan active={active}>{title}</StyledSpan>
  </StyledMenuButton>
);

export default React.memo(MenuButton);
