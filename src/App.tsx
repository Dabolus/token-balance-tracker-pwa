import React, { VoidFunctionComponent } from 'react';
import { GraphQLClient } from 'graphql-request';
import { Router as RouterProvider } from 'wouter';
import I18nProvider from './providers/I18nProvider';
import GraphQLProvider from './providers/GraphQLProvider';
import ProfilesProvider from './providers/ProfilesProvider';
import Router from './containers/Router';
import { getSdk } from './generated/graphql';

const client = new GraphQLClient('https://graphql.bitquery.io', {
  headers: {
    'x-api-key': import.meta.env.VITE_BITQUERY_API_KEY,
  },
});
const sdk = getSdk(client);

const App: VoidFunctionComponent = () => (
  <I18nProvider>
    <GraphQLProvider sdk={sdk}>
      <ProfilesProvider>
        <RouterProvider>
          <Router />
        </RouterProvider>
      </ProfilesProvider>
    </GraphQLProvider>
  </I18nProvider>
);

export default App;
