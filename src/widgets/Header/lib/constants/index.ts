import { createIdentityObject } from '@/shared/lib/utils/createIdentityObject';

import type { TLinkHeaderNames } from '../../model/types';

export const LINK_HEADER_NAMES = createIdentityObject({
  HOME: 'HOME',
  FAVORITES: 'FAVORITES',
  ABOUT: 'ABOUT',
  TEST: 'TEST',
  GITHUB: 'GITHUB',
} as const);

export const LINK_HEADER_PATHS: {
  [T in TLinkHeaderNames]: string;
} = {
  HOME: '/',
  TEST: '/test',
  FAVORITES: '/favorites',
  ABOUT: '/about',
  GITHUB: 'https://github.com/mjx27',
};
