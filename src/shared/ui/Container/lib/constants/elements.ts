import type { TContainerStyleNames, TContainerStyleProps } from '../../model/types';
import { SCFlexColumn, SCFlexRow, SCGrid } from '../../ui/StyledContainer';

export const CONTAINER_STYLE_ELEMENTS: {
  [T in TContainerStyleNames]: React.ComponentType<TContainerStyleProps>;
} = {
  FLEX_COLUMN: SCFlexColumn,
  FLEX_ROW: SCFlexRow,
  GRID: SCGrid,
};
