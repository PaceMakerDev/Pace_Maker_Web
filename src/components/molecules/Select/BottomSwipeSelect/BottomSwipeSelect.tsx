import React, { useRef } from 'react';
import { useAppDispatch, useAppSelector } from 'common/hooks/reduxhooks';
import RadiusInput from 'components/atoms/Input/RadiusInput/RadiusInput';
import BlackWrapper from 'components/atoms/BlackWrapper/BlackWrapper';
import { toggleModal } from 'actions/modal';
import { StyledSelectWrapper, StyledInputArrow, StyledBottomOpionBox } from './BottomSwipeSelect.styled';

interface Props {
  bottomComponent: React.ReactNode;
}

const BottomSwipeSelect: React.FC<React.InputHTMLAttributes<HTMLInputElement> & Props> = ({
  bottomComponent,
  ...props
}) => {
  const modalStore = useAppSelector(state => state.modalReducer);
  const inputRef = useRef<HTMLInputElement>(null);
  const isShow = modalStore.isShow && modalStore.name === 'bottom-select';

  const dispatch = useAppDispatch();

  const toggleBottomShow = (): void => {
    dispatch(toggleModal('bottom-select'));
  };

  return (
    <>
      <StyledSelectWrapper>
        <RadiusInput _ref={inputRef} readOnly {...props} onClick={toggleBottomShow} />
        <StyledInputArrow onClick={toggleBottomShow}>&#9660;</StyledInputArrow>
      </StyledSelectWrapper>

      {isShow && <BlackWrapper onClick={toggleBottomShow} />}
      <StyledBottomOpionBox isShow={isShow}>{bottomComponent}</StyledBottomOpionBox>
    </>
  );
};

export default React.memo(BottomSwipeSelect);
