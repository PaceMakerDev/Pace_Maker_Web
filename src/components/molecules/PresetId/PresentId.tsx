import React from 'react';
import { StyledPresetId, StyledLabel, StyledSpan } from './PresentId.styled';

interface Props {
  userId: string;
}

const PresentId: React.FC<Props> = ({ userId }: Props) => (
  <StyledPresetId>
    <StyledLabel>아이디</StyledLabel>
    <StyledSpan>{userId}</StyledSpan>
  </StyledPresetId>
);

export default React.memo(PresentId);
