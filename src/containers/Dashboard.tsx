import React, { FunctionComponent } from 'react';
import Avatar from '../components/Avatar';
import CenteredLoader from '../components/CenteredLoader';
import List from '../components/List';
import TopBar from '../components/TopBar';
import TotalBalance from '../components/TotalBalance';
import TokensBalances from '../components/TokensBalances';
import useAddressesBalances from '../hooks/useAddressesBalances';
import { useProfiles } from '../providers/ProfilesProvider';

const Dashboard: FunctionComponent = () => {
  const { selectedProfile, profiles } = useProfiles();

  const { data } = useAddressesBalances({
    variables: {
      config:
        profiles && selectedProfile ? profiles[selectedProfile].config : [],
    },
    skip: !profiles || !selectedProfile,
    pollInterval: 5000,
  });

  return profiles && selectedProfile ? (
    <>
      <TopBar>
        <Avatar selectedProfile={selectedProfile} profiles={profiles} />
      </TopBar>
      <List>
        <TotalBalance balances={data} />
        <TokensBalances balances={data} />
      </List>
    </>
  ) : (
    <CenteredLoader />
  );
};

export default Dashboard;
