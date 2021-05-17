import React, { FunctionComponent } from 'react';
import { styled } from '@linaria/react';
import { Profile } from '../helpers/db';
import { ProfileData } from '../providers/ProfilesProvider';
import BlockiesIdenticon from './BlockiesIdenticon';

export interface AvatarProps {
  selectedProfile: Profile['id'];
  onProfileChange?(newProfile: Profile['id']): void;
  profiles: Record<Profile['id'], ProfileData>;
}

const AvatarContainer = styled.div`
  position: relative;
  width: 36px;
  height: 36px;
`;

const AvatarImage = styled(BlockiesIdenticon)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  image-rendering: pixelated;
`;

const AvatarSelect = styled.select`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const Avatar: FunctionComponent<AvatarProps> = ({
  selectedProfile,
  onProfileChange,
  profiles,
}) => (
  <AvatarContainer>
    <AvatarImage seed={selectedProfile} />
    <AvatarSelect
      value={selectedProfile}
      onChange={event => onProfileChange?.(event.target.value)}
    >
      {Object.entries(profiles).map(([id, { name }]) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </AvatarSelect>
  </AvatarContainer>
);

export default Avatar;
