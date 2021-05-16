import { QueryOptions } from '@apollo/client';
import {
  GetAddressesBalancesDocument,
  GetAddressesBalancesQuery,
  GetAddressesBalancesQueryVariables,
} from '../../generated/graphql';
import useAsyncQuery from './useAsyncQuery';

const useGetAddressesBalancesAsyncQuery = (
  options?: QueryOptions<
    GetAddressesBalancesQueryVariables,
    GetAddressesBalancesQuery
  >,
) =>
  useAsyncQuery<GetAddressesBalancesQuery, GetAddressesBalancesQueryVariables>(
    GetAddressesBalancesDocument,
    options,
  );

export default useGetAddressesBalancesAsyncQuery;
