import { styled } from '@linaria/react';
import React, { FunctionComponent, useState } from 'react';
import Button from '../components/Button';
import List from '../components/List';
import ProfileForm, {
  ProfileFormProps,
  ProfileFormValue,
} from '../components/ProfileForm';
import { AddressBalancesConfigEntry } from '../helpers/db';
import { useProfiles } from '../providers/ProfilesProvider';

const WizardContainer = styled(List)`
  align-items: flex-start;
  max-width: 480px;
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
      <p>
        A profile allows you to group together multiple addresses from different
        networks and label them with a human-readable name.
      </p>
      <ProfileForm
        id="profile-form"
        value={profile}
        onChange={setProfile}
        onSubmit={handleNewProfileAddition}
      />
      <Button
        type="submit"
        form="profile-form"
        disabled={!profile || !profile.name || profile.addresses.length < 1}
      >
        Create
      </Button>
    </WizardContainer>
  );
};

export default Wizard;
