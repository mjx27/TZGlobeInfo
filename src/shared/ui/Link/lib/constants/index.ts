import { createIdentityObject } from '@/shared/lib/utils/createIdentityObject';

import type { ILinkProps } from '../../model/interfaces';
import type { TLinkStyleNames } from '../../model/types';
import { StyledLinkLined } from '../../ui/StyledLink';

export const LINK_STYLE_NAMES = createIdentityObject({
  LINED: 'LINED',
} as const);

export const LINK_STYLES_ELEMENTS: {
  [K in TLinkStyleNames]: React.ComponentType<ILinkProps>;
} = {
  LINED: StyledLinkLined,
};
