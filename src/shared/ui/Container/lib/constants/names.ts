import { createIdentityObject } from '@/shared/lib/utils/createIdentityObject';

export const CONTAINER_STYLE_NAMES = createIdentityObject({
  FLEX_ROW: 'FLEX_ROW',
  FLEX_COLUMN: 'FLEX_COLUMN',
  GRID: 'GRID',
} as const);
