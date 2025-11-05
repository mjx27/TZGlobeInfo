'use client';

import { ApolloProvider } from '@apollo/client';

import { CustomApolloClient } from '../lib/utils/ApolloClient';

export const GraphQLProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ApolloProvider client={CustomApolloClient}>{children}</ApolloProvider>
  );
};
