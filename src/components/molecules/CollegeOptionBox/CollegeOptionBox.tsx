import React, { useState } from 'react';
import { useAppDispatch } from 'common/hooks/reduxhooks';
import { toggleModal } from 'actions/modal';
import {
  StyledCollegeOptionBox,
  StyledOptionBoxHeader,
  StyledHeaderItem,
  StyledHeaderSpan,
  StyledOptionBoxContent,
} from './CollegeOptionBox.styled';

/* global College, OptionBoxChangeEventHandler */

interface Props {
  options: Array<College>;
  onMajorClick: OptionBoxChangeEventHandler<HTMLButtonElement>;
}

const CollegeOptionBox: React.FC<Props> = ({ options, onMajorClick }) => {
  const [focusCollege, setActiveHeaderItem] = useState(options[0].category);

  const dispatch = useAppDispatch();

  const majors = options.find(college => college.category === focusCollege)?.majors;

  const handleMajorClick: React.MouseEventHandler<HTMLButtonElement> = event => {
    const { id } = event.currentTarget;
    onMajorClick(event, id);
    dispatch(toggleModal('bottom-select'));
  };

  return (
    <StyledCollegeOptionBox>
      <StyledOptionBoxHeader>
        {options?.map(college => (
          <StyledHeaderItem key={college.category}>
            <StyledHeaderSpan
              isActive={focusCollege === college.category}
              onClick={() => setActiveHeaderItem(college.category)}
            >
              {college.category}
            </StyledHeaderSpan>
          </StyledHeaderItem>
        ))}
      </StyledOptionBoxHeader>

      <StyledOptionBoxContent>
        {majors?.map(major => (
          <li key={major}>
            <button type="button" id={major} onClick={handleMajorClick}>
              {major}
            </button>
          </li>
        ))}
      </StyledOptionBoxContent>
    </StyledCollegeOptionBox>
  );
};

export default CollegeOptionBox;
