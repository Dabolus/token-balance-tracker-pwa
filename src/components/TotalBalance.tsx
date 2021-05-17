import React, { FunctionComponent } from 'react';
import { styled } from '@linaria/react';
import Skeleton from 'react-loading-skeleton';
import { AddressBalance } from '../hooks/useNetworkAddressesBalances';
import { useI18n } from '../providers/I18nProvider';

export interface TotalBalanceProps {
  balances?: AddressBalance[];
}

const TotalBalanceSection = styled.section`
  width: fit-content;
  margin: 0 auto;
`;

const TotalBalanceContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const TotalBalanceLabel = styled.h2`
  display: inline;
  font-size: 1.5rem;
`;

const TotalBalanceValue = styled.h2`
  display: inline;
  font-size: 3rem;
`;

const TotalBalance: FunctionComponent<TotalBalanceProps> = ({ balances }) => {
  const { locale } = useI18n();

  const total = balances?.reduce(
    (sum, { balance }) =>
      sum + balance.reduce((tokenSum, { value }) => tokenSum + value, 0),
    0,
  );

  return (
    <TotalBalanceSection>
      <TotalBalanceContainer>
        <TotalBalanceLabel>Total</TotalBalanceLabel>
        <TotalBalanceValue>
          {total?.toLocaleString(locale, {
            style: 'currency',
            currency: 'USD',
          }) ?? <Skeleton width="6em" />}
        </TotalBalanceValue>
      </TotalBalanceContainer>
    </TotalBalanceSection>
  );
};

export default TotalBalance;
