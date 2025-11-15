'use client';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ICON_STYLE_PROPS } from '../lib/constants/props';
import type { IIconStyleProps } from '../model/interfaces';

export const StyledIcon = styled(FontAwesomeIcon, {
  shouldForwardProp: (prop) =>
    !ICON_STYLE_PROPS.includes(prop as keyof IIconStyleProps),
})<IIconStyleProps>`
  height: ${(props) => props.iconSize};
  width: ${(props) => props.iconSize};
  cursor: pointer;

  path {
    cursor: pointer;
  }
`;

export const StyledIconColored = styled(StyledIcon)`
  &:hover {
    path {
      color: ${(props) => props.theme.colors.colorAdd1};
      transition: color
        ${(props) => props.theme.transitions.transitionLinearFast};
    }
  }
`;
