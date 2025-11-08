import styled from '@emotion/styled';

import { SELECT_STYLE_PROPS } from '../lib/constants/props';
import { type ISelectStyleProps } from '../model/ISelect';

export const StyledSelect = styled('div', {
  shouldForwardProp: (prop) =>
    !SELECT_STYLE_PROPS.includes(prop as keyof ISelectStyleProps),
})<ISelectStyleProps>`
  height: ${(props) => (props.isActive ? '200px' : '40px')};
  width: 300px;
  display: flex;
  transition: all 0.4s;
  flex-direction: column;
  overflow: hidden;

  button {
    height: 40px;
    flex: 0 0 auto;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;
