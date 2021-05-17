import React, {
  FormEventHandler,
  FunctionComponent,
  HTMLAttributes,
  useState,
} from 'react';
import { styled } from '@linaria/react';
import { EthereumNetwork } from '../generated/graphql';

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

const ProfileFormLabel = styled.label`
  display: block;
`;

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
    <form onSubmit={handleSubmit} {...props}>
      <ProfileFormLabel htmlFor="name">Name</ProfileFormLabel>
      <input
        name="name"
        value={name}
        onChange={event =>
          onChange?.({
            name: event.target.value,
            addresses,
          })
        }
      />
      <ProfileFormLabel>Addresses</ProfileFormLabel>
      <ul>
        {addresses.map(({ network, address }) => (
          <li key={`${network}-${address}`}>
            <span>
              {network} - {address}
            </span>
            <button onClick={removeAddress(network, address)}>-</button>
          </li>
        ))}
        <li>
          {addingAddress ? (
            <>
              <input
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
                <option value={EthereumNetwork.ETHEREUM}>Ethereum</option>
                <option value={EthereumNetwork.BSC}>BSC</option>
              </select>
              <button type="button" onClick={() => setAddingAddress(undefined)}>
                x
              </button>
              <button type="button" onClick={addAddress}>
                v
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() =>
                setAddingAddress({
                  address: '',
                  network: EthereumNetwork.ETHEREUM,
                })
              }
            >
              +
            </button>
          )}
        </li>
      </ul>
    </form>
  );
};

export default ProfileForm;
