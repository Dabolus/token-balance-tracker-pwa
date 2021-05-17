import { styled } from '@linaria/react';
import React, { FunctionComponent, useState } from 'react';
import ProfileForm, {
  ProfileFormProps,
  ProfileFormValue,
} from '../components/ProfileForm';
import { AddressBalancesConfigEntry } from '../helpers/db';
import { useProfiles } from '../providers/ProfilesProvider';

const WizardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Wizard: FunctionComponent = () => {
  const [profile, setProfile] = useState<ProfileFormValue | undefined>();

  const { addProfile, setSelectedProfile } = useProfiles();

  const handleNewProfileAddition: ProfileFormProps['onSubmit'] = ({
    name,
    addresses,
  }) => {
    const config = addresses.reduce<AddressBalancesConfigEntry[]>(
      (acc, { network, address }) => {
        const networkIndex = acc.findIndex(prev => prev.network === network);

        if (networkIndex < 0) {
          return [
            ...acc,
            {
              network,
              addresses: [address],
            },
          ];
        }

        return [
          ...acc.slice(0, networkIndex),
          {
            network,
            addresses: [...acc[networkIndex].addresses, address],
          },
          ...acc.slice(networkIndex + 1),
        ];
      },
      [],
    );

    const id = addProfile({
      name,
      config,
    });
    setSelectedProfile(id);
  };

  return (
    <WizardContainer>
      <h1>Welcome!</h1>
      <h2>First of all, create a profile</h2>
      <ProfileForm
        id="profile-form"
        value={profile}
        onChange={setProfile}
        onSubmit={handleNewProfileAddition}
      />
      <button
        type="submit"
        form="profile-form"
        disabled={!profile || !profile.name || profile.addresses.length < 1}
      >
        Create
      </button>
    </WizardContainer>
  );
};

export default Wizard;
