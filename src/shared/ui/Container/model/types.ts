import type { TPartialWithUndefined } from '@/shared/model/types/TPartialWithUndefined';

import type { CONTAINER_STYLE_NAMES } from '../lib/constants/names';

import type { IContainerStyleProps } from './interfaces';

export type TContainerStyleNames = keyof typeof CONTAINER_STYLE_NAMES;
export type TContainerStyleProps = TPartialWithUndefined<IContainerStyleProps>;
