import { EthereumNetwork } from '../generated/graphql';
import { AddressBalancesConfigEntry } from '../helpers/db';
import { QueryOptions, QueryResult } from '../providers/GraphQLProvider';
import useNetworkAddressesBalances, {
  AddressBalance,
} from './useNetworkAddressesBalances';

export interface AddressBalanceWithNetwork extends AddressBalance {
  network: EthereumNetwork;
}

const addNetwork = (balances: AddressBalance[], network: EthereumNetwork) =>
  balances.map(data => ({
    ...data,
    network,
  }));

const computeCombinedData = (
  ethBalances?: AddressBalance[],
  bscBalances?: AddressBalance[],
  ethBalanceSkipped?: boolean,
  bscBalanceSkipped?: boolean,
) => {
  // If both queries are configured to be skipped, there's no data to return
  if (ethBalanceSkipped && bscBalanceSkipped) {
    return;
  }

  // If ETH query is skipped and we have the BSC data, we can just return it
  if (ethBalanceSkipped && bscBalances) {
    return addNetwork(bscBalances, EthereumNetwork.BSC);
  }

  // Same but opposite
  if (bscBalanceSkipped && ethBalances) {
    return addNetwork(ethBalances, EthereumNetwork.ETHEREUM);
  }

  // If we reach this point, none of the queries have been skipped, so we return undefined
  // if we don't have the data of one of the two queries yet.
  if (!ethBalances || !bscBalances) {
    return;
  }

  // Finally, we have all the data, so we can just combine it
  return [
    ...addNetwork(ethBalances, EthereumNetwork.ETHEREUM),
    ...addNetwork(bscBalances, EthereumNetwork.BSC),
  ];
};

const useAddressesBalances = ({
  variables: { config },
  skip,
  pollInterval,
}: QueryOptions<{
  config: AddressBalancesConfigEntry[];
}>): QueryResult<AddressBalanceWithNetwork[]> => {
  const transformedConfig = config.reduce<
    Partial<Record<EthereumNetwork, string[]>>
  >(
    (acc, { network, addresses }) => ({
      ...acc,
      [network]: [...(acc[network] || []), ...addresses],
    }),
    {},
  );

  const shouldSkipEthBalance =
    skip || (transformedConfig[EthereumNetwork.ETHEREUM] || []).length < 1;
  const shouldSkipBscBalance =
    skip || (transformedConfig[EthereumNetwork.BSC] || []).length < 1;

  const {
    loading: loadingEthAddressesBalances,
    data: ethAddressesBalances,
    error: ethAddressesBalancesError,
  } = useNetworkAddressesBalances({
    variables: {
      network: EthereumNetwork.ETHEREUM,
      addresses: transformedConfig[EthereumNetwork.ETHEREUM] || [],
    },
    skip: shouldSkipEthBalance,
    pollInterval,
  });

  const {
    loading: loadingBscAddressesBalances,
    data: bscAddressesBalances,
    error: bscAddressesBalancesError,
  } = useNetworkAddressesBalances({
    variables: {
      network: EthereumNetwork.BSC,
      addresses: transformedConfig[EthereumNetwork.BSC] || [],
    },
    skip: shouldSkipBscBalance,
    pollInterval,
  });

  return {
    loading: loadingEthAddressesBalances || loadingBscAddressesBalances,
    error: ethAddressesBalancesError || bscAddressesBalancesError || undefined,
    data: computeCombinedData(
      ethAddressesBalances,
      bscAddressesBalances,
      shouldSkipEthBalance,
      shouldSkipBscBalance,
    ),
  };
};

export default useAddressesBalances;
