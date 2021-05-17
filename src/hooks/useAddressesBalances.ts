import { NetworkStatus } from '@apollo/client';
import { EthereumNetwork } from '../generated/graphql';
import { AsyncQueryResult } from './data/useAsyncQuery';
import useNetworkAddressesBalances, {
  AddressBalance,
} from './useNetworkAddressesBalances';

export interface AddressBalanceWithNetwork extends AddressBalance {
  network: EthereumNetwork;
}

export interface AddressBalancesConfigEntry {
  network: EthereumNetwork;
  addresses: string[];
}

const computeCombinedNetworkStatus = (
  status1: NetworkStatus,
  status2: NetworkStatus,
): NetworkStatus => {
  if (status1 === NetworkStatus.loading || status2 === NetworkStatus.loading) {
    return NetworkStatus.loading;
  }
  if (status1 === NetworkStatus.error || status2 === NetworkStatus.error) {
    return NetworkStatus.error;
  }

  return NetworkStatus.ready;
};

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
}): AsyncQueryResult<AddressBalanceWithNetwork[]> => {
  const transformedConfig = config.reduce<
    Partial<Record<EthereumNetwork, string[]>>
  >(
    (acc, { network, addresses }) => ({
      ...acc,
      [network]: [...(acc[network] || []), ...addresses],
    }),
    {},
  );

  // const [result, setResult] = useState<
  //   AsyncQueryResult<AddressBalanceWithNetwork[]>
  // >({
  //   loading: true,
  //   networkStatus: NetworkStatus.loading,
  // });

  const {
    loading: loadingEthAddressesBalances,
    networkStatus: ethAddressesBalancesNetworkStatus,
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
    networkStatus: bscAddressesBalancesNetworkStatus,
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
    networkStatus: computeCombinedNetworkStatus(
      ethAddressesBalancesNetworkStatus,
      bscAddressesBalancesNetworkStatus,
    ),
    error: ethAddressesBalancesError || bscAddressesBalancesError || undefined,
    data: computeCombinedData(ethAddressesBalances, bscAddressesBalances),
  };
};

export default useAddressesBalances;
