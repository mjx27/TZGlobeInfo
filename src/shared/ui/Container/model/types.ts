import type { CONTAINER_STYLE_KEYS } from '../lib/constants';

import type { IStyleKeys } from './interfaces';

type StyleKeysFromValues = keyof IStyleKeys;
export type TContainerStyleProps = Partial<IStyleKeys>;
export type TContainerStyleKeys = (typeof CONTAINER_STYLE_KEYS)[number];

type AssertKeysMatch = TContainerStyleKeys extends StyleKeysFromValues
  ? StyleKeysFromValues extends TContainerStyleKeys
    ? true
    : never
  : never;

const _assertKeysMatch: AssertKeysMatch = true;
