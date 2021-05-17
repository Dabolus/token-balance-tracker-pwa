import React, {
  FunctionComponent,
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  Dispatch,
} from 'react';
import { nanoid } from 'nanoid';
import dbPromise, { Profile } from '../helpers/db';

export type ProfileData = Omit<Profile, 'id'>;

export interface ProfilesContextValue {
  profiles?: Record<Profile['id'], ProfileData>;
  selectedProfile?: string | null;
  setSelectedProfile: Dispatch<string>;
  addProfile(newProfileData: ProfileData): Profile['id'];
}

export const ProfilesContext =
  createContext<ProfilesContextValue | undefined>(undefined);

export const ProfilesProvider: FunctionComponent = ({ children }) => {
  const [selectedProfile, setCachedSelectedProfile] =
    useState<string | null | undefined>();

  const [profiles, setProfiles] =
    useState<Record<Profile['id'], ProfileData> | undefined>();

  useEffect(() => {
    const getIDBData = async () => {
      const db = await dbPromise;
      const [idbProfiles, idbSelectedProfile] = await Promise.all([
        db.getAll('profiles'),
        db.get('settings', 'selectedProfile'),
      ]);

      setProfiles(
        Object.fromEntries(idbProfiles.map(({ id, ...data }) => [id, data])),
      );
      setCachedSelectedProfile((idbSelectedProfile ?? null) as string | null);
    };

    getIDBData();
  }, []);

  const setSelectedProfile = useCallback<
    ProfilesContextValue['setSelectedProfile']
  >(id => {
    setCachedSelectedProfile(id);

    dbPromise.then(db => db.put('settings', id, 'selectedProfile'));
  }, []);

  const addProfile = useCallback<ProfilesContextValue['addProfile']>(
    newProfileData => {
      const id = nanoid();

      setProfiles(previousProfiles => ({
        ...previousProfiles,
        [id]: newProfileData,
      }));

      dbPromise.then(db =>
        db.add('profiles', {
          id,
          ...newProfileData,
        }),
      );

      return id;
    },
    [],
  );

  return (
    <ProfilesContext.Provider
      value={{ profiles, selectedProfile, setSelectedProfile, addProfile }}
    >
      {children}
    </ProfilesContext.Provider>
  );
};

export const useProfiles = () => {
  const context = useContext(ProfilesContext);

  if (!context) {
    throw new Error('useProfiles must be used within a ProfilesProvider');
  }

  return context;
};

export default ProfilesProvider;
