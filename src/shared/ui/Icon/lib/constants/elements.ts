import type { IIconProps } from '../../model/interfaces';
import type { TIconStyleNames } from '../../model/types';
import { StyledIconColored } from '../../ui/StyledIcon';

export const ICON_STYLE_ELEMENTS: Record<
  TIconStyleNames,
  React.ComponentType<IIconProps>
> = {
  COLORED: StyledIconColored,
};
