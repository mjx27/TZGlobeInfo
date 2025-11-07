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
  place-items: ${({ alignItems = 'center' }) => alignItems}
    ${({ justifyItems }) => justifyItems};
  place-content: ${({ alignContent }) => alignContent}
    ${({ justifyContent = 'center' }) => justifyContent};
  gap: ${({ gap = '0' }) => gap};
`;
