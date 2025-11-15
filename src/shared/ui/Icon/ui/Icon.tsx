import { ICON_STYLE_ELEMENTS } from '../lib/constants/elements';
import type { IIconFabricProps } from '../model/interfaces';

export const Icon = ({ styleType, ...props }: IIconFabricProps) => {
  const Element = ICON_STYLE_ELEMENTS[styleType];
  return <Element {...props} />;
};
