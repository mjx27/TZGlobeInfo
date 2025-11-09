import { createIdentityObject } from '@/shared/lib/utils/createIdentityObject';

export const LINK_STYLE_NAMES = createIdentityObject({
  LINED: 'LINED',
  FILLED: 'FILLED',
} as const);
