import React, { useRef } from 'react';
import { useAppDispatch, useAppSelector } from 'common/hooks/reduxhooks';
import { toggleModal } from 'actions/modal';
import BlackWrapper from 'components/atoms/BlackWrapper/BlackWrapper';
import RadiusInput from 'components/atoms/Input/RadiusInput/RadiusInput';
import AccordionOptionBox from 'components/molecules/AccordionOptionBox/AccordionOptionBox';
import { StyledAccordionSelect, StyledInputArrow } from './AccordionSelect.styled';

/* global OptionBoxChangeEventHandler */

interface Props {
  accordionId: string;
  options: Array<string>;
  onItemClick: OptionBoxChangeEventHandler<HTMLLIElement>;
}

const AccordionSelect: React.FC<React.InputHTMLAttributes<HTMLInputElement> & Props> = ({
  accordionId,
  options,
  onItemClick,
  ...props
}) => {
  const modalStore = useAppSelector(state => state.modalReducer);
  const inputRef = useRef<HTMLInputElement>(null);
  const isShow = modalStore.isShow && modalStore.name === `accordion-select-${accordionId}`;

  const dispatch = useAppDispatch();

  const toggleShow = () => {
    dispatch(toggleModal(`accordion-select-${accordionId}`));
  };

  return (
    <StyledAccordionSelect>
      <RadiusInput readOnly _ref={inputRef} onClick={toggleShow} {...props} />
      <StyledInputArrow onClick={toggleShow}>&#9660;</StyledInputArrow>
      {/* <input type="text" hidden ref={hiddenInputRef} onChange={onChange} /> */}

      {isShow && <BlackWrapper onClick={toggleShow} />}
      <AccordionOptionBox isShow={isShow} options={options} onItemClick={onItemClick} />
    </StyledAccordionSelect>
  );
};

export default React.memo(AccordionSelect);
