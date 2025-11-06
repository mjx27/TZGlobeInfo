import type { LinkProps } from 'next/link';

import type { TLinkStyleNames } from './types';

export interface ILinkStyleProps {
  isActive: boolean;
}

export interface ILinkProps extends LinkProps, ILinkStyleProps {
  children?: React.ReactNode;
}

export interface ILinkFabricProps extends ILinkProps {
  styleType: TLinkStyleNames;
}
