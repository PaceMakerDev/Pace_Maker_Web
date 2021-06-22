import React, { useEffect, useMemo, useRef, useState } from 'react';
import { MajorCategory } from 'Service';
import { StyledBottomOptionBox, StyledOptionBoxHeader, StyledOptionBoxContent } from './BottomOptionBox.styled';

interface Props {
  options?: Array<MajorCategory>;
  active?: boolean;
  onItemClick?: (value: string) => void;
}

const BottomOptionBox: React.FC<Props> = ({ active, options, onItemClick }) => {
  const [activeHeaderItem, setActiveHeaderItem] = useState(options && options[0].category);
  const majorItems = useMemo(() => {
    const filterMajorCategory = options?.find(headerItem => headerItem.category === activeHeaderItem);
    return filterMajorCategory?.majors;
  }, [activeHeaderItem, options]);

  const bottomOptionBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active) {
      bottomOptionBoxRef.current?.classList.add('active');
    } else {
      bottomOptionBoxRef.current?.classList.remove('active');
    }
  }, [active]);

  return (
    <StyledBottomOptionBox ref={bottomOptionBoxRef}>
      <StyledOptionBoxHeader>
        {options?.map(headerItem => (
          <div key={headerItem.category} className="header-item">
            <span
              className={activeHeaderItem === headerItem.category ? 'active' : undefined}
              onClick={() => setActiveHeaderItem(headerItem.category)}
            >
              {headerItem.category}
            </span>
          </div>
        ))}
      </StyledOptionBoxHeader>
      
      <StyledOptionBoxContent>
        {majorItems?.map(majorItem => (
          <li key={majorItem}>
            <button type="button" onClick={onItemClick?.bind(this, majorItem)}>
              {majorItem}
            </button>
          </li>
        ))}
      </StyledOptionBoxContent>
    </StyledBottomOptionBox>
  );
};

export default BottomOptionBox;
