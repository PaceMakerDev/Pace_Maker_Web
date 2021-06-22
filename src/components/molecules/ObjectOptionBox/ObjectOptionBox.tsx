import React, { useRef, useEffect } from 'react';
import { StyledObjectOptionBox, StyledOptionItem } from './ObjectOptionBox.styled';

interface Props {
  options?: Array<string>;
  active?: boolean;
  onItemClick?: (value: string) => void;
}

const ObjectOptionBox: React.FC<Props> = ({ options, active, onItemClick }) => {
  const objectOptionBoxRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (active) {
      objectOptionBoxRef.current?.classList.add('active');
    } else {
      objectOptionBoxRef.current?.classList.remove('active');
    }
  }, [active]);

  return (
    <StyledObjectOptionBox ref={objectOptionBoxRef}>
      {options?.map(item => (
        <StyledOptionItem key={item} onClick={onItemClick?.bind(this, item)}>
          {item}
        </StyledOptionItem>
      ))}
    </StyledObjectOptionBox>
  );
};

export default ObjectOptionBox;
