import { ApolloClient, InMemoryCache } from '@apollo/client';

import { API_URL_COUNTRIES } from '../constants';

export const CustomApolloClient = new ApolloClient({
  uri: API_URL_COUNTRIES,
  cache: new InMemoryCache(),
});
