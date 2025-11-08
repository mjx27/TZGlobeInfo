'use client';
import styled from '@emotion/styled';

import type { TShadowProps } from '../model/types';

export const StyledShadow = styled.section<TShadowProps>`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.gaps.gapMedium1};
  flex-direction: column;

  &::before {
    inset: 0;
    position: absolute;
    content: '';
    background-color: ${(props) => props.theme.colors.colorMainDarker};
    z-index: 2;
    opacity: ${(props) => props.alpha ?? '0.5'};
  }

  * {
    position: relative;
    z-index: 3;
  }

  img {
    inset: 0;
    position: absolute;
    z-index: 1;
  }

  p {
    width: max(50%, 500px);
    font-size: 1.124rem;
  }
`;
