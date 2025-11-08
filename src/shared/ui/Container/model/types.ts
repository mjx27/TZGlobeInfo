import type { TAssertKeysMatch } from '@/shared/model/types/TAssertKeysMatch';

import type { CONTAINER_STYLE_KEYS } from '../lib/constants/keys';
import type { CONTAINER_STYLE_NAMES } from '../lib/constants/names';

import type { IStyleKeys } from './interfaces';

export type TContainerStyleNames = keyof typeof CONTAINER_STYLE_NAMES;
type StyleKeysFromValues = keyof IStyleKeys;
export type TContainerStyleProps = Partial<IStyleKeys>;
export type TContainerStyleKeys = (typeof CONTAINER_STYLE_KEYS)[number];

const _check: TAssertKeysMatch<TContainerStyleKeys, StyleKeysFromValues> = true;
