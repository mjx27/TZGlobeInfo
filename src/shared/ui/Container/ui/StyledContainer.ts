'use client';
import styled from '@emotion/styled';

import { CONTAINER_STYLE_PROPS } from '../lib/constants/props';
import type { TContainerStyleProps } from '../model/types';

export const StyledContainer = styled('div', {
  shouldForwardProp: (prop) =>
    prop !== 'as' &&
    !CONTAINER_STYLE_PROPS.includes(prop as keyof TContainerStyleProps),
})<TContainerStyleProps>`
  padding: ${({ padding = '0' }) => padding};
  height: ${({ height = 'auto' }) => height};
  width: ${({ width = '100%' }) => width};
  place-items: ${({ alignItems = 'center', justifyItems = 'center' }) =>
    `${alignItems} ${justifyItems}`};
  place-content: ${({ alignContent = 'center', justifyContent = 'center' }) =>
    `${alignContent} ${justifyContent}`};
  gap: ${({ gap = '0' }) => gap};
`;

export const SCFlexRow = styled(StyledContainer)`
  display: flex;
  flex-wrap: wrap;
`;

export const SCFlexColumn = styled(StyledContainer)`
  display: flex;
  flex-flow: column wrap;
`;

export const SCGrid = styled(StyledContainer)`
  display: grid;
`;
