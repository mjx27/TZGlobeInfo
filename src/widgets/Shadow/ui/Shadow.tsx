import type { ImageProps } from 'next/image';
import Image from 'next/image';

import type { TShadowProps } from '../model/types';

import { StyledShadow } from './StyledShadow';

interface IProps extends TShadowProps {
  children: React.ReactNode;
  imgData: ImageProps;
}

export const Shadow = ({ children, imgData, alpha }: IProps) => {
  return (
    <StyledShadow alpha={alpha}>
      <Image {...imgData} />
      {children}
    </StyledShadow>
  );
};
