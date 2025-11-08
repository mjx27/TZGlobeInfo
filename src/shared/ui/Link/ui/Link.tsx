import { LINK_STYLE_ELEMENTS } from '../lib/constants';
import type { ILinkFabricProps } from '../model/interfaces';

export const Link = ({ styleType, ...props }: ILinkFabricProps) => {
  const Element = LINK_STYLE_ELEMENTS[styleType];
  return <Element {...props} />;
};
