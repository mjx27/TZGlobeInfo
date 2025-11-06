'use client';
import styled from '@emotion/styled';

import { containerStyleKeys } from '../lib/constants';
import type { StyleTypeMap, TContainerStyleProps } from '../model/types';

export const StyledContainer = styled('div', {
  shouldForwardProp: (prop) =>
    prop !== 'as' && !containerStyleKeys.includes(prop as keyof StyleTypeMap),
})<TContainerStyleProps>`
  padding: ${({ padding = '0' }) => padding};
  height: ${({ height = 'auto' }) => height};
  width: ${({ width = '100%' }) => width};
  display: ${({ display = 'flex' }) => display};
  place-items: ${({ alignItems = 'center' }) => alignItems} ${({ justifyItems }) => justifyItems};
  place-content: ${({ alignContent }) => alignContent} ${({ justifyContent = 'center' }) => justifyContent};
  gap: ${({ gap = '0' }) => gap};
  box-sizing: border-box;
`;
