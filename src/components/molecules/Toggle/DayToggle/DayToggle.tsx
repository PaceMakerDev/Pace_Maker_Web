import React from 'react';
import { FiCheck } from 'react-icons/fi';
import { StyledDayToggle, StyledDay, StyledCheckBox } from './DayToggle.styled';

/* global DayCode, DayToggleClickEventHandler */

interface Props {
  dayCode: DayCode;
  active?: boolean;
  children: React.ReactNode;
  onClickToggle: DayToggleClickEventHandler<HTMLButtonElement>;
}

const DayToggle: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & Props> = ({
  dayCode,
  active,
  children,
  onClickToggle,
  ...props
}) => {
  const handleActive: React.MouseEventHandler<HTMLButtonElement> = event => onClickToggle(event, dayCode);

  return (
    <StyledDayToggle type="button" active={active} onClick={handleActive} {...props}>
      <StyledDay active={active}>{children}</StyledDay>
      <StyledCheckBox active={active}>{active && <FiCheck />}</StyledCheckBox>
    </StyledDayToggle>
  );
};

export default React.memo(DayToggle);
