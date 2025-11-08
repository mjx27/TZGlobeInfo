import { LINK_STYLE_ELEMENTS } from '../lib/constants/elements';
import type { ILinkFabricProps } from '../model/interfaces';

export const Link = ({ styleType, children, ...props }: ILinkFabricProps) => {
  const Element = LINK_STYLE_ELEMENTS[styleType];
  return <Element {...props}>{children}</Element>;
};
