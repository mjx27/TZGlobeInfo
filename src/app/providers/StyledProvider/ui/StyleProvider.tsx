import { ThemeProvider } from '@emotion/react';

import { constTheme } from '../lib/constants';

import { GlobalStyles } from './GlobalStyles';

export const StyleProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={constTheme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};
