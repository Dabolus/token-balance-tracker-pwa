import { EthereumNetwork } from '../generated/graphql';
import { AddressBalancesConfigEntry } from '../helpers/db';
import { QueryResult } from '../providers/GraphQLProvider';
import useNetworkAddressesBalances, {
  AddressBalance,
} from './useNetworkAddressesBalances';

export interface AddressBalanceWithNetwork extends AddressBalance {
  network: EthereumNetwork;
}

const computeCombinedData = (
  ethBalances?: AddressBalance[],
  bscBalances?: AddressBalance[],
) => {
  if (!ethBalances || !bscBalances) {
    return;
  }

  return [
    ...ethBalances.map(data => ({
      ...data,
      network: EthereumNetwork.ETHEREUM,
    })),
    ...bscBalances.map(data => ({
      ...data,
      network: EthereumNetwork.BSC,
    })),
  ];
};

const useAddressesBalances = ({
  variables: { config },
  skip,
}: {
  variables: {
    config: AddressBalancesConfigEntry[];
  };
  skip?: boolean;
}): QueryResult<AddressBalanceWithNetwork[]> => {
  const transformedConfig = config.reduce<
    Partial<Record<EthereumNetwork, string[]>>
  >(
    (acc, { network, addresses }) => ({
      ...acc,
      [network]: [...(acc[network] || []), ...addresses],
    }),
    {},
  );

  const {
    loading: loadingEthAddressesBalances,
    data: ethAddressesBalances,
    error: ethAddressesBalancesError,
  } = useNetworkAddressesBalances({
    variables: {
      network: EthereumNetwork.ETHEREUM,
      addresses: transformedConfig[EthereumNetwork.ETHEREUM] || [],
    },
    skip:
      skip || (transformedConfig[EthereumNetwork.ETHEREUM] || []).length < 1,
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
    skip: skip || (transformedConfig[EthereumNetwork.BSC] || []).length < 1,
  });

  return {
    loading: loadingEthAddressesBalances || loadingBscAddressesBalances,
    error: ethAddressesBalancesError || bscAddressesBalancesError || undefined,
    data: computeCombinedData(ethAddressesBalances, bscAddressesBalances),
  };
};

export default useAddressesBalances;
