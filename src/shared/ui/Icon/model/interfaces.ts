import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import type { TIconStyleNames } from './types';

export interface IIconStyleProps {
  iconSize: string;
}

export interface IIconProps extends IIconStyleProps, FontAwesomeIconProps {}
export interface IIconFabricProps extends IIconProps {
  styleType: TIconStyleNames;
}
