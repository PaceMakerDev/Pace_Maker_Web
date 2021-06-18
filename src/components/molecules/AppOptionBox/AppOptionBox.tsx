import React, { useEffect, useMemo, useRef, useState } from 'react';
import { MajorCategory } from 'Service';
import { StyledAppOptionBox, StyledOptionBoxHeader, StyledOptionBoxContent } from './AppOptionBox.styled';

interface Props {
  options?: Array<MajorCategory>;
  active?: boolean;
  onItemClick?: (value: string) => void;
}

const AppOptionBox: React.FC<Props> = ({ active, options, onItemClick }) => {
  const [activeHeaderItem, setActiveHeaderItem] = useState(options && options[0].category);
  const majorItems = useMemo(() => {
    const filterMajorCategory = options?.find(headerItem => headerItem.category === activeHeaderItem);
    return filterMajorCategory?.majors;
  }, [activeHeaderItem, options]);

  const appOptionBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active) {
      appOptionBoxRef.current?.classList.add('active');
    } else {
      appOptionBoxRef.current?.classList.remove('active');
    }
  }, [active]);

  return (
    <StyledAppOptionBox ref={appOptionBoxRef}>
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
    </StyledAppOptionBox>
  );
};

export default AppOptionBox;
