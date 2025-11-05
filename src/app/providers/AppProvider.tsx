'use client';
import { EmotionProvider } from './EmotionProvider';
import { GraphQLProvider } from './GraphQLProvider';
import { StyleProvider } from './StyledProvider';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <EmotionProvider>
      <StyleProvider>
        <GraphQLProvider>{children}</GraphQLProvider>
      </StyleProvider>
    </EmotionProvider>
  );
};
