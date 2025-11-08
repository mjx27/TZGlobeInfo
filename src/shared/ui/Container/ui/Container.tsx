import React from 'react';

import { CONTAINER_STYLE_ELEMENTS } from '../lib/constants/elements';
import { CONTAINER_STYLE_NAMES } from '../lib/constants/names';
import type {
  TContainerStyleNames,
  TContainerStyleProps,
} from '../model/types';


type ContainerProps = TContainerStyleProps & {
  as?: React.ElementType;
  children: React.ReactNode;
  styleType?: TContainerStyleNames;
};

export const Container: React.FC<ContainerProps> = ({
  children,
  styleType = CONTAINER_STYLE_NAMES.FLEX_ROW,
  ...props
}) => {
  const Element = CONTAINER_STYLE_ELEMENTS[styleType];
  return <Element {...props}>{children}</Element>;
};
