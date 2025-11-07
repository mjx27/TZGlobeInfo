import React from 'react';

import type { TContainerStyleProps } from '../model/types';

import { StyledContainer } from './StyledContainer';

type ContainerProps = TContainerStyleProps & {
  as?: React.ElementType;
  children: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};
