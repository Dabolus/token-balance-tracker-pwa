import { QueryOptions } from '@apollo/client';
import {
  GetTokenValueDocument,
  GetTokenValueQuery,
  GetTokenValueQueryVariables,
} from '../../generated/graphql';
import useAsyncQuery from './useAsyncQuery';

const useGetTokenValueAsyncQuery = (
  options?: QueryOptions<GetTokenValueQueryVariables, GetTokenValueQuery>,
) =>
  useAsyncQuery<GetTokenValueQuery, GetTokenValueQueryVariables>(
    GetTokenValueDocument,
    options,
  );

export default useGetTokenValueAsyncQuery;
