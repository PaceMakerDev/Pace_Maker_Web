import React, { useState, useRef } from 'react';
import BlackWrapper from 'components/atoms/BlackWrapper/BlackWrapper';
import RadiusInput from 'components/atoms/Input/RadiusInput/RadiusInput';
import AccordionOptionBox from 'components/molecules/AccordionOptionBox/AccordionOptionBox';
import BottomOptionBox from 'components/molecules/BottomOptionBox/BottomOptionBox';
import { StyledRadiusSelect, StyledInputArrow } from './RadiusSelect.styled';

/* global College */

interface Props {
  id?: string;
  name?: string;
  value?: string;
  className?: string;
  required?: boolean;
  placeholder?: string;
  bottomOptions?: Array<College>;
  accordionOptions?: Array<string>;
  optionType: 'BOTTOM' | 'ACCORDION';
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const RadiusSelect: React.FC<Props> = ({ name, bottomOptions, accordionOptions, optionType, onChange, ...props }) => {
  const [isActive, setIsActive] = useState(false);
  const hiddenInputRef = useRef<HTMLInputElement>(null);

  const handleActive = () => {
    setIsActive(prev => !prev);
  };

  const handleItemClick = (value: string) => {
    setIsActive(prev => !prev);

    if (hiddenInputRef.current) {
      hiddenInputRef.current.setAttribute('value', value);
      hiddenInputRef.current.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

  return (
    <StyledRadiusSelect>
      <RadiusInput readOnly name={name} {...props} onClick={handleActive} />
      <StyledInputArrow onClick={handleActive}>&#9660;</StyledInputArrow>
      <input type="text" name={name} hidden ref={hiddenInputRef} onChange={onChange} />

      {optionType === 'ACCORDION' && (
        <AccordionOptionBox active={isActive} options={accordionOptions} onItemClick={handleItemClick} />
      )}
      {optionType === 'BOTTOM' && (
        <BottomOptionBox active={isActive} options={bottomOptions} onItemClick={handleItemClick} />
      )}

      {isActive && <BlackWrapper onClick={handleActive} />}
    </StyledRadiusSelect>
  );
};

export default React.memo(RadiusSelect);
