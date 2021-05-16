import { useCallback, useState } from 'react';
import {
  ApolloQueryResult,
  DocumentNode,
  NetworkStatus,
  OperationVariables,
  QueryOptions,
  TypedDocumentNode,
  useApolloClient,
} from '@apollo/client';

export interface AsyncQueryResult<TData>
  extends Omit<ApolloQueryResult<TData>, 'data'> {
  data?: TData;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AsyncQueryTuple<TData = any, TVariables = OperationVariables> = [
  (options?: Omit<QueryOptions<TVariables, TData>, 'query'>) => Promise<TData>,
  AsyncQueryResult<TData> | undefined,
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useAsyncQuery = <TData = any, TVariables = OperationVariables>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: QueryOptions<TVariables, TData>,
): AsyncQueryTuple<TData, TVariables> => {
  const client = useApolloClient();

  // TODO: initialize with real data instead of undefined
  const [result, setResult] = useState<AsyncQueryResult<TData>>({
    loading: true,
    networkStatus: NetworkStatus.loading,
  });

  const runQuery = useCallback<AsyncQueryTuple<TData, TVariables>[0]>(
    async queryOptions => {
      const queryResult = await client.query<TData, TVariables>({
        query,
        ...options,
        ...queryOptions,
      });

      setResult(queryResult);

      return queryResult.data;
    },
    [client, options, query],
  );

  return [runQuery, result];
};

export default useAsyncQuery;
