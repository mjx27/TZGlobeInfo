import type { ITheme } from '@/app/providers/StyledProvider/models/interfaces';
import '@emotion/react';

declare module '@emotion/react' {
  export type Theme = ITheme;
}
