import styled from '@emotion/styled';

import { TECHCARD_COLORS } from '../lib/constants';
import type { TDifficulty } from '../model/types';
interface IProps {
  difficulty: TDifficulty;
}

export const StyledTechCard = styled.article<IProps>`
  padding: ${(props) => props.theme.paddings.paddingMedium2};
  position: relative;
  height: 400px;
  width: 300px;
  border: 2px solid ${(props) => props.theme.colors.colorMainDarker};
  display: grid;
  grid-template-rows: 40% 1fr 40px;
  border-radius: ${(props) => props.theme.borderRadiuses.borderRadiusMedium};
  box-shadow: 0 0 10px 8px ${(props) => props.theme.colors.colorMainDarker};
  overflow: hidden;
  gap: ${(props) => props.theme.gaps.gapMedium1};

  > div:first-child {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    color: ${(props) => props.theme.colors.colorAdd1};
    opacity: 0.1;
    transform: translateX(-50%) translateY(-50%);
    letter-spacing: 4px;
    font-size: 4rem;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.colorMainLighter};
  }

  svg {
    z-index: 2;
  }

  cite {
    color: ${(props) => TECHCARD_COLORS[`${props.difficulty}`]}60;
  }
`;
