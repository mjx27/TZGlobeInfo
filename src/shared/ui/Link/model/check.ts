import type { TAssertKeysMatch } from '@/shared/model/types/TAssertKeysMatch';

import type { LINK_STYLE_PROPS } from '../lib/constants/props';

import type { ILinkStyleProps } from './interfaces';

type TContainerStyleKeys = (typeof LINK_STYLE_PROPS)[number];
type StyleKeysFromValues = keyof ILinkStyleProps;
const _check: TAssertKeysMatch<TContainerStyleKeys, StyleKeysFromValues> = true;
