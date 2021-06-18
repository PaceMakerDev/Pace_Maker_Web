import React, { useState, useRef } from 'react';
import BlackWrapper from 'components/atoms/BlackWrapper/BlackWrapper';
import RadiusInput from 'components/atoms/Input/RadiusInput/RadiusInput';
import AppOptionBox from 'components/molecules/AppOptionBox/AppOptionBox';
import { MajorCategory } from 'Service';
import { StyledRadiusSelect } from './RadiusSelect.styled';

interface Props {
  id?: string;
  name?: string;
  value?: string;
  required?: boolean;
  placeholder?: string;
  options?: Array<MajorCategory>;
  onChange?: React.ChangeEventHandler;
}

const RadiusSelect: React.FC<Props> = ({ name, options, onChange, ...props }) => {
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
    <>
      <StyledRadiusSelect onClick={handleActive}>
        <RadiusInput readOnly name={name} {...props} />
        <input type="text" name={name} hidden ref={hiddenInputRef} onChange={onChange} />
      </StyledRadiusSelect>

      {isActive && <BlackWrapper onClick={handleActive} />}
      <AppOptionBox active={isActive} options={options} onItemClick={handleItemClick} />
    </>
  );
};

export default React.memo(RadiusSelect);
