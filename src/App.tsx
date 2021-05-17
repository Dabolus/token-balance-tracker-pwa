import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import React, { VoidFunctionComponent } from 'react';
import { Router as RouterProvider } from 'wouter';
import I18nProvider from './providers/I18nProvider';
import Router from './containers/Router';

const apolloClient = new ApolloClient({
  uri: 'https://graphql.bitquery.io',
  headers: {
    'x-api-key': import.meta.env.VITE_BITQUERY_API_KEY,
  },
  cache: new InMemoryCache(),
});

const App: VoidFunctionComponent = () => (
  <I18nProvider>
    <ApolloProvider client={apolloClient}>
      <RouterProvider>
        <Router />
      </RouterProvider>
    </ApolloProvider>
  </I18nProvider>
);

export default App;
