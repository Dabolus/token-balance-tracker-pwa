import React, { FunctionComponent, HTMLAttributes, useState } from 'react';
import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { AddressBalanceWithNetwork } from '../hooks/useAddressesBalances';
import { useI18n } from '../providers/I18nProvider';
import ChevronDown from './icons/ChevronDown';
import ChevronUp from './icons/ChevronUp';
import Skeleton from './Skeleton';

export interface TokensBalancesProps {
  balances?: AddressBalanceWithNetwork[];
}

const spaceBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;

  > :first-child {
    text-align: left;
  }

  > :last-child {
    text-align: right;
  }
`;

export interface InfoBoxProps extends HTMLAttributes<HTMLDivElement> {
  small?: boolean;
}

const InfoBox = styled.div<InfoBoxProps>`
  display: flex;
  flex-direction: column;
  font-size: ${({ small }) => (small ? '0.8em' : '1em')};

  > strong {
    font-size: 1.25em;
  }

  > span {
    font-size: 1em;
  }
`;

const ExpansionPanelContainer = styled.ul`
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

const ExpansionPanel = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  cursor: pointer;
`;

interface ExpansionPanelContentProps extends HTMLAttributes<HTMLUListElement> {
  open?: boolean;
}

const ExpansionPanelContent = styled.ul<ExpansionPanelContentProps>`
  height: ${({ open }) => (open ? '100%' : 0)};
  transform: ${({ open }) => `scaleY(${open ? 1 : 0})`};
  transform-origin: top left;
  transition: 0.2s transform ease-in-out, 0.2s height ease-in-out;
  will-change: transform, height;
`;

const TokensBalances: FunctionComponent<TokensBalancesProps> = ({
  balances,
}) => {
  const { locale } = useI18n();

  const [openPanels, setOpenPanels] = useState<Record<string, boolean>>({});

  return (
    <ul>
      {balances
        ? balances.map(({ network, address, balance }) => {
            const balanceId = `${network}-${address}`;

            return (
              <ExpansionPanelContainer key={balanceId}>
                <ExpansionPanel
                  className={spaceBetween}
                  onClick={() =>
                    setOpenPanels(previousOpenPanels => ({
                      ...previousOpenPanels,
                      [balanceId]: !previousOpenPanels[balanceId],
                    }))
                  }
                >
                  <InfoBox>
                    <strong title={address}>{`0x…${address.slice(-5)}`}</strong>
                    <span>{network.toUpperCase()}</span>
                  </InfoBox>
                  {openPanels[balanceId] ? (
                    <ChevronUp size={32} />
                  ) : (
                    <ChevronDown size={32} />
                  )}
                </ExpansionPanel>
                <ExpansionPanelContent open={openPanels[balanceId]}>
                  {balance.map(
                    ({ name, symbol, balance: tokenBalance, value }) => (
                      <li
                        key={`${balanceId}-${symbol}`}
                        className={spaceBetween}
                      >
                        <InfoBox small>
                          <strong>{name}</strong>
                        </InfoBox>
                        <InfoBox small>
                          <strong>
                            {tokenBalance.toLocaleString(locale)}{' '}
                            {symbol.toUpperCase()}
                          </strong>
                          <span>
                            {value.toLocaleString(locale, {
                              style: 'currency',
                              currency: 'USD',
                            })}
                          </span>
                        </InfoBox>
                      </li>
                    ),
                  )}
                </ExpansionPanelContent>
              </ExpansionPanelContainer>
            );
          })
        : Array.from({ length: 5 }, (_, index) => (
            <ExpansionPanelContainer key={index}>
              <ExpansionPanel className={spaceBetween}>
                <InfoBox>
                  <strong>
                    <Skeleton width="4em" />
                  </strong>
                  <span>
                    <Skeleton width="4em" />
                  </span>
                </InfoBox>
                <Skeleton circle width={24} height={24} />
              </ExpansionPanel>
            </ExpansionPanelContainer>
          ))}
    </ul>
  );
};

export default TokensBalances;
