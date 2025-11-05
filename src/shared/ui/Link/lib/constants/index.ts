import { createIdentityObject } from '@/shared/lib/utils/createIdentityObject';

import type { ILinkProps } from '../../model/interfaces';
import type { TLinkStylesNames } from '../../model/types';
import { StyledLinkLined } from '../../ui/StyledLink';

export const LINK_STYLES_NAMES = createIdentityObject({
  LINED: 'LINED',
} as const);

export const LINK_STYLES_ELEMENTS: {
  [K in TLinkStylesNames]: React.ComponentType<ILinkProps>;
} = {
  LINED: StyledLinkLined,
};
