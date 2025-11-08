'use client';
import styled from '@emotion/styled';

import { CONTAINER_STYLE_KEYS } from '../lib/constants';
import type { IStyleKeys } from '../model/interfaces';
import type { TContainerStyleProps } from '../model/types';

export const StyledContainer = styled('div', {
  shouldForwardProp: (prop) =>
    prop !== 'as' && !CONTAINER_STYLE_KEYS.includes(prop as keyof IStyleKeys),
})<TContainerStyleProps>`
  padding: ${({ padding = '0' }) => padding};
  height: ${({ height = 'auto' }) => height};
  width: ${({ width = '100%' }) => width};
  display: ${({ display = 'flex' }) => display};
  flex-direction: ${({ flexDirection = 'flex' }) => flexDirection};
  place-items: ${({ alignItems = 'center', justifyItems = 'center' }) =>
    `${alignItems} ${justifyItems}`};
  place-content: ${({ alignContent = 'center', justifyContent = 'center' }) =>
    `${alignContent} ${justifyContent}`};
  gap: ${({ gap = '0' }) => gap};
`;
