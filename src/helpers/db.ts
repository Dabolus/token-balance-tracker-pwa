import { openDB, DBSchema } from 'idb';
import { EthereumNetwork } from '../generated/graphql';

export interface AddressBalancesConfigEntry {
  network: EthereumNetwork;
  addresses: string[];
}

export interface Profile {
  id: string;
  name: string;
  config: AddressBalancesConfigEntry[];
}

export interface TokenBalanceTrackerDataDBSchema extends DBSchema {
  settings: {
    key: string;
    value: unknown;
  };
  profiles: {
    key: Profile['id'];
    value: Profile;
    indexes: {
      byLanguage: 'language';
      byCategory: 'category';
      byNumber: 'number';
      byLanguageAndCategory: ['language', 'category'];
      byLanguageAndNumber: ['language', 'number'];
      byCategoryAndNumber: ['category', 'number'];
      byLanguageCategoryAndNumber: ['language', 'category', 'number'];
    };
  };
}

const dbPromise = openDB<TokenBalanceTrackerDataDBSchema>(
  'token-balance-tracker-db',
  1,
  {
    upgrade(db) {
      db.createObjectStore('settings');
      db.createObjectStore('profiles', {
        keyPath: 'id',
      });
    },
  },
);

export default dbPromise;
