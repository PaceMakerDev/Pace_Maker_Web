import React from 'react';
import { FiCheck } from 'react-icons/fi';
import { StyledDayToggle, StyledDay, StyledCheckBox } from './DayToggle.styled';

/* global DayCode */

interface Props {
  dayCode: DayCode;
  active?: boolean;
  children: React.ReactNode;
  toggleDays: (dayCode: DayCode) => void;
}

const DayToggle: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & Props> = ({
  dayCode,
  active,
  children,
  toggleDays,
  ...props
}) => {
  const handleActive: React.MouseEventHandler<HTMLButtonElement> = () => toggleDays(dayCode);

  return (
    <StyledDayToggle type="button" active={active} onClick={handleActive} {...props}>
      <StyledDay active={active}>{children}</StyledDay>
      <StyledCheckBox active={active}>{active && <FiCheck />}</StyledCheckBox>
    </StyledDayToggle>
  );
};

export default React.memo(DayToggle);
