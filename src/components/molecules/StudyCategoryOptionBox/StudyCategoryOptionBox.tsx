import React from 'react';
import { useAppDispatch } from 'common/hooks/reduxhooks';
import { toggleModal } from 'actions/modal';
import { StyledStudyCategoryOptionBox, StyledCategoryItem } from './StudyCategoryOptionBox.styled';

/* global OptionBoxChangeEventHandler */

interface Props {
  options: Array<string>;
  onItemClick: OptionBoxChangeEventHandler<HTMLLIElement>;
}

const StudyCategoryOptionBox: React.FC<React.HTMLAttributes<HTMLUListElement> & Props> = ({
  options,
  onItemClick,
  ...props
}) => {
  const dispatch = useAppDispatch();

  const handleItemClick: React.MouseEventHandler<HTMLLIElement> = event => {
    const { innerText } = event.currentTarget;
    onItemClick(event, innerText);
    dispatch(toggleModal('bottom-select'));
  };

  return (
    <StyledStudyCategoryOptionBox {...props}>
      {options.map(item => (
        <StyledCategoryItem key={item} onClick={handleItemClick}>
          {item}
        </StyledCategoryItem>
      ))}
    </StyledStudyCategoryOptionBox>
  );
};

export default StudyCategoryOptionBox;
