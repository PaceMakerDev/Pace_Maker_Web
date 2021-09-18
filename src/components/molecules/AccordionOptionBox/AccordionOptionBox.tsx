import React, { useRef, useEffect } from 'react';
import { StyledAccordionOptionBox, StyledOptionItem } from './AccordionOptionBox.styled';

interface Props {
  options?: Array<string>;
  active?: boolean;
  onItemClick?: (value: string) => void;
}

const AccordionOptionBox: React.FC<Props> = ({ options, active, onItemClick }) => {
  const accordionOptionBoxRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (active) {
      accordionOptionBoxRef.current?.classList.add('active');
    } else {
      accordionOptionBoxRef.current?.classList.remove('active');
    }
  }, [active]);

  return (
    <StyledAccordionOptionBox ref={accordionOptionBoxRef}>
      {options?.map(item => (
        <StyledOptionItem key={item} onClick={onItemClick?.bind(this, item)}>
          {item}
        </StyledOptionItem>
      ))}
    </StyledAccordionOptionBox>
  );
};

export default AccordionOptionBox;
