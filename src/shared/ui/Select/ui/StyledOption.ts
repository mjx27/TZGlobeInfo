import styled from '@emotion/styled';

import { OPTION_STYLE_PROPS } from '../lib/constants/props';
import type { IOptionStyleProps } from '../model/IOption';

export const StyledOption = styled('button', {
  shouldForwardProp: (prop) =>
    !OPTION_STYLE_PROPS.includes(prop as keyof IOptionStyleProps),
})<IOptionStyleProps>`
  pointer-events: ${(props) => (props.isActive ? 'none' : 'auto')};
  color: ${(props) =>
    props.isActive
      ? props.theme.colors.colorAdd1
      : props.theme.colors.colorTextMain};
  background-color: ${(props) => props.theme.colors.colorMainDarker};
  transition:
    background-color ${(props) => props.theme.transitions.transitionEaseSlow},
    color ${(props) => props.theme.transitions.transitionEaseFast};

  &:hover {
    background-color: transparent;
  }
`;
