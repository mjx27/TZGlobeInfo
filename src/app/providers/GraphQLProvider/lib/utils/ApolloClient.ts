import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

import { API_URL_COUNTRIES } from '../constants';

const httpLink = new HttpLink({
  uri: API_URL_COUNTRIES,
});

export const CustomApolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
