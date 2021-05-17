import { NetworkStatus } from '@apollo/client';
import { useState } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { EthereumNetwork } from '../generated/graphql';
import { AsyncQueryResult } from './data/useAsyncQuery';
import useGetAddressesBalancesAsyncQuery from './data/useGetAddressesBalancesAsyncQuery';
import useGetTokenValueAsyncQuery from './data/useGetTokenValueAsyncQuery';

const ETH_WETH_ADDRESS = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
const ETH_USDT_ADDRESS = '0xdac17f958d2ee523a2206206994597c13d831ec7';
const BSC_WBNB_ADDRESS = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
const BSC_USDT_ADDRESS = '0x55d398326f99059ff775485246999027b3197955';

export interface TokenBalance {
  name: string;
  symbol: string;
  balance: number;
  value: number;
}

export interface AddressBalance {
  address: string;
  balance: TokenBalance[];
}

export interface NetworkAddresses {
  main: string;
  usd: string;
}

const networksAddresses: Partial<Record<EthereumNetwork, NetworkAddresses>> = {
  [EthereumNetwork.ETHEREUM]: {
    main: ETH_WETH_ADDRESS,
    usd: ETH_USDT_ADDRESS,
  },
  [EthereumNetwork.BSC]: {
    main: BSC_WBNB_ADDRESS,
    usd: BSC_USDT_ADDRESS,
  },
};

const useNetworkAddressesBalances = ({
  variables: { network, addresses },
  skip,
}: {
  variables: {
    network: EthereumNetwork;
    addresses: string[];
  };
  skip?: boolean;
}): AsyncQueryResult<AddressBalance[]> => {
  const [result, setResult] = useState<AsyncQueryResult<AddressBalance[]>>({
    loading: !skip,
    networkStatus: skip ? NetworkStatus.ready : NetworkStatus.loading,
  });

  const [getAddressesBalances] = useGetAddressesBalancesAsyncQuery();
  const [getTokenValue] = useGetTokenValueAsyncQuery();

  useDeepCompareEffect(() => {
    const queryAddressesBalances = async () => {
      if (skip) {
        return;
      }

      try {
        const balances = await getAddressesBalances({
          variables: {
            network,
            addresses,
          },
        });

        const tokens = Array.from(
          new Set(
            balances.ethereum?.address.flatMap(
              ({ balances }) =>
                balances
                  ?.filter(
                    ({ currency }) =>
                      currency?.address && currency?.address !== '-',
                  )
                  .map(({ currency }) => currency!.address!) || [],
            ) || [],
          ),
        );

        const [mainTokenValue, ...tokensEntries] = (await Promise.all([
          getTokenValue({
            variables: {
              network,
              inputToken: networksAddresses[network]!.main,
              outputToken: networksAddresses[network]!.usd,
            },
          }).then(result => result.ethereum?.dexTrades?.[0].quotePrice),
          ...tokens.map(inputToken =>
            getTokenValue({
              variables: {
                network,
                inputToken,
                outputToken: networksAddresses[network]!.main,
              },
            }).then(result => [
              inputToken,
              result.ethereum?.dexTrades?.[0].quotePrice,
            ]),
          ),
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ] as any)) as [
          number | null | undefined,
          ...[string, number | null | undefined][]
        ];

        if (!mainTokenValue) {
          throw new Error("Couldn't retrieve main token value");
        }

        const tokensValue = Object.fromEntries(tokensEntries);

        const data =
          balances.ethereum?.address.map(({ balances }, index) => ({
            address: addresses[index],
            balance:
              balances
                ?.filter(
                  ({ currency = null, value = null }) =>
                    currency !== null &&
                    value !== null &&
                    (tokensValue[currency.address!] ?? null) !== null,
                )
                .map(({ currency, value }) => ({
                  name: currency!.name!,
                  symbol: currency!.symbol,
                  balance: value!,
                  value:
                    value! * tokensValue[currency!.address!]! * mainTokenValue,
                })) || [],
          })) || [];

        setResult({
          loading: false,
          networkStatus: NetworkStatus.ready,
          data,
        });
      } catch (error) {
        setResult({
          loading: false,
          networkStatus: NetworkStatus.error,
          error,
        });
      }
    };

    queryAddressesBalances();
  }, [addresses, getAddressesBalances, getTokenValue, network, skip]);

  return result;
};

export default useNetworkAddressesBalances;
