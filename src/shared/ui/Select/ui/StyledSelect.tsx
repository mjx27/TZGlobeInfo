import styled from '@emotion/styled';

import { type ISelectStyleProps } from '../model/ISelect';

export const StyledSelect = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isActive',
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
