'use client';
import styled from '@emotion/styled';
import Link from 'next/link';

import { LINK_STYLE_PROPS } from '../lib/constants/props';
import type { ILinkStyleProps } from '../model/interfaces';

export const StyledLink = styled(Link, {
  shouldForwardProp: (prop) =>
    !LINK_STYLE_PROPS.includes(prop as keyof ILinkStyleProps),
})`
  padding: ${(props) =>
    `${props.theme.paddings.paddingLittle1} ${props.theme.paddings.paddingMedium1}`};
  position: relative;
  height: fit-content;
  transition: color ${(props) => props.theme.transitions.transitionLinearFast};
  text-decoration: none;
  cursor: pointer;
`;

export const StyledLinkLined = styled(StyledLink)<ILinkStyleProps>`
  color: ${(props) => props.isActive && props.theme.colors.colorAdd1};

  &::before,
  &::after {
    content: ' ';
    position: absolute;
    height: 2.5px;
    width: ${(props) => (props.isActive ? '75%' : '0%')};
    background-color: ${(props) => props.theme.colors.colorAdd1};
    transition: width ${(props) => props.theme.transitions.transitionEaseSlow};
  }

  &::before {
    top: 0;
    left: 0;
  }

  &::after {
    right: 0;
    bottom: 0;
  }

  ${(props) =>
    !props.isActive &&
    `
   &:hover{
    color: ${props.theme.colors.colorAdd1};
    &::before, &::after{
        width: 75%;
    }
 }
 `}
`;
