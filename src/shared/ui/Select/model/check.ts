import type { TAssertKeysMatch } from '@/shared/model/types/TAssertKeysMatch';

import type { OPTION_STYLE_PROPS, SELECT_STYLE_PROPS } from '../lib/constants/props';

import type { IOptionStyleProps } from './IOption';
import type { ISelectStyleProps } from './ISelect';

type TOptionStyleKeysFromC = (typeof OPTION_STYLE_PROPS)[number];
type TOptionStyleKeysFromI = keyof IOptionStyleProps;
const _checkOption: TAssertKeysMatch<
  TOptionStyleKeysFromC,
  TOptionStyleKeysFromI
> = true;

type TSelectStyleKeysFromI = keyof ISelectStyleProps;
type TSelectStyleKeysFromC = (typeof SELECT_STYLE_PROPS)[number];
const _checkSelect: TAssertKeysMatch<
  TSelectStyleKeysFromC,
  TSelectStyleKeysFromI
> = true;
