import React from 'react';
import RadiusInput from 'components/atoms/Input/RadiusInput/RadiusInput';
import Icon from 'components/atoms/Icon/Icon';
import SearchIcon from 'assets/icons/search_icon.png';
import { StyledSearchInput } from './SearchInput.styled';

interface Props {
  id?: string;
  name?: string;
  value?: string | number | readonly string[];
  className?: string;
  type?: string;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  disabled?: boolean;
  _ref?: React.RefObject<HTMLInputElement> | null;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
}

const SearchInput: React.FC<Props> = ({ ...props}) => (
  <StyledSearchInput>
    <RadiusInput className="search-input" {...props} />
    <Icon width="20px" className='search-icon' src={SearchIcon} />
  </StyledSearchInput>
);

export default SearchInput;
