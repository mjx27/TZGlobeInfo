import { createIdentityObject } from '@/shared/lib/utils/createIdentityObject';

import type { TLinkHeaderNames } from '../../model/types';

export const LINK_HEADER_NAMES = createIdentityObject({
  HOME: 'HOME',
  FAVORITES: 'FAVORITES',
  ABOUT: 'ABOUT',
  GITHUB: 'GITHUB',
} as const);

export const LINK_HEADER_PATHS: {
  [T in TLinkHeaderNames]: string;
} = {
  HOME: '/',
  ABOUT: '/about',
  FAVORITES: '/favorites',
  GITHUB: 'https://github.com/mjx27',
};
