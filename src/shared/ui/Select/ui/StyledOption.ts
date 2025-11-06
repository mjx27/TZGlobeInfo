import styled from '@emotion/styled';

import type { IOption } from '../model/IOption';

export const StyledOption = styled('button', {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<IOption>((props) => ({
  pointerEvents: props.isActive ? 'none' : 'auto',
  color: props.isActive
    ? props.theme.colors.colorAdd1
    : props.theme.colors.colorTextMain,
  backgroundColor: props.theme.colors.colorMainDarker,
  transition: `
    background-color ${props.theme.transitions.transitionEaseSlow},
    color ${props.theme.transitions.transitionEaseFast}
    `,

  '&:hover': {
    backgroundColor: 'transparent',
  },
}));
