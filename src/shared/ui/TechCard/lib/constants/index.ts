import { constTheme } from '@/app/providers/StyledProvider/lib/constants';

import type { ITechCardColors } from '../../model/interfaces';

export const TECHCARD_COLORS: ITechCardColors = {
  hard: constTheme.colors.colorAddRed,
  easy: constTheme.colors.colorAdd1,
  medium: constTheme.colors.colorAddYellow,
} as const;
