import React, {
  FormEventHandler,
  FunctionComponent,
  HTMLAttributes,
  useState,
} from 'react';
import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { EthereumNetwork } from '../generated/graphql';
import Button from './Button';

export interface ProfileFormAddress {
  network: EthereumNetwork;
  address: string;
}

export interface ProfileFormValue {
  name: string;
  addresses: ProfileFormAddress[];
}

export interface ProfileFormProps
  extends Omit<HTMLAttributes<HTMLFormElement>, 'onChange' | 'onSubmit'> {
  value?: Partial<ProfileFormValue>;
  onChange?(value: ProfileFormValue): void;
  onSubmit?(value: ProfileFormValue): void;
}

const fullWidth = css`
  width: 100%;
  flex: 1 1 auto;
`;

const Address = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const AddressRow = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Actions = styled.div`
  display: flex;
  gap: 2px;
  flex: 0 0 auto;
`;

const ActionButton = styled(Button)`
  padding: 0;
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
`;

const networkToLabelMap: Partial<Record<EthereumNetwork, string>> = {
  [EthereumNetwork.ETHEREUM]: 'Ethereum',
  [EthereumNetwork.BSC]: 'BSC',
};

const ProfileForm: FunctionComponent<ProfileFormProps> = ({
  value: { name = '', addresses = [] } = {},
  onChange,
  onSubmit,
  ...props
}) => {
  const [addingAddress, setAddingAddress] =
    useState<ProfileFormAddress | undefined>();

  const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();

    onSubmit?.({
      name,
      addresses,
    });
  };

  const addAddress = () => {
    if (!addingAddress) {
      return;
    }

    onChange?.({
      name,
      addresses: [...addresses, addingAddress],
    });

    setAddingAddress(undefined);
  };

  const removeAddress = (network: EthereumNetwork, address: string) => () => {
    const addressIndex = addresses.findIndex(
      val => val.network === network && val.address === address,
    );

    onChange?.({
      name,
      addresses: [
        ...addresses.slice(0, addressIndex),
        ...addresses.slice(addressIndex + 1),
      ],
    });
  };

  return (
    <form onSubmit={handleSubmit} className={fullWidth} {...props}>
      <label className={fullWidth} htmlFor="name">
        Name
      </label>
      <input
        className={fullWidth}
        name="name"
        value={name}
        onChange={event =>
          onChange?.({
            name: event.target.value,
            addresses,
          })
        }
      />
      <label className={fullWidth}>Addresses</label>
      <ul>
        {addresses.map(({ network, address }) => (
          <AddressRow key={`${network}-${address}`}>
            <span>{networkToLabelMap[network]}</span>
            <Address>{address}</Address>
            <ActionButton onClick={removeAddress(network, address)}>
              －
            </ActionButton>
          </AddressRow>
        ))}
        <AddressRow>
          {addingAddress ? (
            <>
              <select
                value={addingAddress.network}
                onChange={event =>
                  setAddingAddress(previousAddingAddress =>
                    previousAddingAddress
                      ? {
                          ...previousAddingAddress,
                          network: event.target.value as EthereumNetwork,
                        }
                      : undefined,
                  )
                }
              >
                <option value={EthereumNetwork.ETHEREUM}>
                  {networkToLabelMap[EthereumNetwork.ETHEREUM]}
                </option>
                <option value={EthereumNetwork.BSC}>
                  {networkToLabelMap[EthereumNetwork.BSC]}
                </option>
              </select>
              <input
                className={fullWidth}
                name="new-address"
                placeholder="Address"
                value={addingAddress.address}
                onChange={event =>
                  setAddingAddress(previousAddingAddress =>
                    previousAddingAddress
                      ? {
                          ...previousAddingAddress,
                          address: event.target.value,
                        }
                      : undefined,
                  )
                }
              />
              <Actions>
                <ActionButton
                  type="button"
                  onClick={() => setAddingAddress(undefined)}
                >
                  ✘
                </ActionButton>
                <ActionButton
                  type="button"
                  onClick={addAddress}
                  disabled={!/^0x[a-fA-F0-9]{40}$/.test(addingAddress.address)}
                >
                  ✔
                </ActionButton>
              </Actions>
            </>
          ) : (
            <ActionButton
              type="button"
              onClick={() =>
                setAddingAddress({
                  address: '',
                  network: EthereumNetwork.ETHEREUM,
                })
              }
            >
              ＋
            </ActionButton>
          )}
        </AddressRow>
      </ul>
    </form>
  );
};

export default ProfileForm;
