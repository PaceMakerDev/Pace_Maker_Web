import React, { useState, useRef, useEffect } from 'react';
import {
  StyledSmallSelect,
  StyledCurrentValue,
  StyledOptionsWrapper,
  StyledOptions,
  StyledOptionItem,
} from './SmallSelect.styled';

interface Props {
  id?: string;
  name?: string;
  className?: string;
  options: Array<string>;
  align: 'left' | 'right';
  onItemClick?: (item: string) => void;
}

const SmallSelect: React.FC<Props> = ({ options, align, onItemClick, ...props }) => {
  const [value, setValue] = useState(options[0]);
  const [isActive, setIsActive] = useState(false);

  const optionsWrapperRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLUListElement>(null);

  const handleItemClick: React.MouseEventHandler<HTMLLIElement> = event => {
    const {
      currentTarget: {
        dataset: { item },
      },
    } = event;

    if (item) {
      setValue(item);
      onItemClick?.call(this, item);
    }
  };

  useEffect(() => {
    if (!optionsRef.current || !optionsWrapperRef.current) {
      return;
    }

    if (isActive) {
      optionsRef.current.classList.add('active');
      optionsWrapperRef.current.style.height = `${optionsRef.current?.clientHeight}px`;
    } else {
      optionsRef.current.classList.remove('active');
      optionsWrapperRef.current.style.height = '0';
    }
  }, [isActive]);

  return (
    <StyledSmallSelect {...props} onClick={() => setIsActive(prev => !prev)}>
      <StyledCurrentValue>{value}&#8744;</StyledCurrentValue>

      <StyledOptionsWrapper align={align} ref={optionsWrapperRef} visible={isActive}>
        <StyledOptions ref={optionsRef}>
          {options.map(item => (
            <StyledOptionItem key={item} align={align} data-item={item} onClick={handleItemClick}>
              {item}
            </StyledOptionItem>
          ))}
        </StyledOptions>
      </StyledOptionsWrapper>
    </StyledSmallSelect>
  );
};

export default React.memo(SmallSelect);
