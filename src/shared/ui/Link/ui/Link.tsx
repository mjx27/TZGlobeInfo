import { LINK_STYLES_ELEMENTS } from '../lib/constants';
import type { ILinkFabricProps } from '../model/interfaces';

export const Link = ({ styleType, ...props }: ILinkFabricProps) => {
  const Element = LINK_STYLES_ELEMENTS[styleType];
  return <Element {...props} />;
};
