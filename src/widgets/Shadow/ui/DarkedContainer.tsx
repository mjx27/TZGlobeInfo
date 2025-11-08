import type { ImageProps } from 'next/image';
import Image from 'next/image';

import { SHADOW_STYLE_DEFAULT } from '../lib/constants';
import type { TShadowStyleProps } from '../model/types';

import { StyledShadow } from './StyledDarkedContainer';

interface IProps extends TShadowStyleProps {
  children: React.ReactNode;
  imgData: ImageProps;
}

export const Shadow = ({
  children,
  imgData,
  alpha = SHADOW_STYLE_DEFAULT.ALPHA,
}: IProps) => {
  return (
    <StyledShadow alpha={alpha}>
      <Image {...imgData} />
      {children}
    </StyledShadow>
  );
};
