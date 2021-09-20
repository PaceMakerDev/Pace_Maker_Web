import React from 'react';
import { useAppDispatch } from 'common/hooks/reduxhooks';
import { toggleModal } from 'actions/modal';
import { StyledAccordionOptionBox, StyledOptionItem } from './AccordionOptionBox.styled';

/* global OptionBoxChangeEventHandler */

interface Props {
  options?: Array<string>;
  isShow?: boolean;
  onItemClick: OptionBoxChangeEventHandler<HTMLLIElement>;
}

const AccordionOptionBox: React.FC<Props> = ({ options, isShow, onItemClick }) => {
  const dispatch = useAppDispatch();

  const handleItemClick: React.MouseEventHandler<HTMLLIElement> = event => {
    const { id } = event.currentTarget;
    onItemClick(event, id);
    dispatch(toggleModal('accordion-select'));
  };

  return (
    <StyledAccordionOptionBox isShow={isShow}>
      {options?.map(item => (
        <StyledOptionItem key={item} id={item} onClick={handleItemClick}>
          {item}
        </StyledOptionItem>
      ))}
    </StyledAccordionOptionBox>
  );
};

export default AccordionOptionBox;
