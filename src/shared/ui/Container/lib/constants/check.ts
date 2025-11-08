import type { TAssertKeysMatch } from '@/shared/model/types/TAssertKeysMatch';

import type { IContainerStyleProps } from '../../model/interfaces';

import type { CONTAINER_STYLE_PROPS } from './props';

type TContainerStyleKeysFromI = keyof IContainerStyleProps;
type TContainerStyleKeysFromC = (typeof CONTAINER_STYLE_PROPS)[number];

const _check: TAssertKeysMatch<
  TContainerStyleKeysFromC,
  TContainerStyleKeysFromI
> = true;
