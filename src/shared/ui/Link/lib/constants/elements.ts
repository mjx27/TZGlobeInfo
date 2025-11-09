import type { ILinkProps } from '../../model/interfaces';
import type { TLinkStyleNames } from '../../model/types';
import { StyledLinkFilled, StyledLinkLined } from '../../ui/StyledLink';

export const LINK_STYLE_ELEMENTS: Record<
  TLinkStyleNames,
  React.ComponentType<ILinkProps>
> = {
  LINED: StyledLinkLined,
  FILLED: StyledLinkFilled,
};
