'use client';
import { EmotionProvider } from './EmotionProvider';
import { StyleProvider } from './StyledProvider';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <EmotionProvider>
      <StyleProvider>{children}</StyleProvider>
    </EmotionProvider>
  );
};
