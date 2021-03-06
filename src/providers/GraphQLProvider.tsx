import React, { FunctionComponent, createContext, useContext } from 'react';
import { Sdk } from '../generated/graphql';

export interface GraphQLProviderProps {
  sdk: Sdk;
}

export interface QueryOptions<TVariables> {
  variables: TVariables;
  skip?: boolean;
  pollInterval?: number;
}
export interface QueryResult<TData> {
  data?: TData;
  loading?: boolean;
  error?: Error;
}

export const GraphQLContext =
  createContext<GraphQLProviderProps | undefined>(undefined);

export const GraphQLProvider: FunctionComponent<GraphQLProviderProps> = ({
  sdk,
  children,
}) => (
  <GraphQLContext.Provider value={{ sdk }}>{children}</GraphQLContext.Provider>
);

export const useGraphQL = () => {
  const context = useContext(GraphQLContext);

  if (!context) {
    throw new Error('useGraphQL must be used within a GraphQLProvider');
  }

  return context;
};

export default GraphQLProvider;
