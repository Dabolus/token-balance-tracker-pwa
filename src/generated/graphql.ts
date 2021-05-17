/* eslint-disable */
import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { gql } from 'graphql.macro';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Represents non-fractional signed whole numeric values. Since the value may exceed the size of a 32-bit integer, it's encoded as a string. */
  BigInt: any;
  /** An ISO 8601-encoded date */
  ISO8601Date: any;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
};

/** Account */
export type Account = {
  __typename?: 'Account';
  /** Account ID */
  id: Scalars['String'];
  /** Account number, the equivalent of a human-friendly public key */
  num: Scalars['Int'];
  /** Realm number  */
  realmId: Scalars['Int'];
  /** Shard number */
  shardId: Scalars['Int'];
};

/** Blockchain address */
export type Address = {
  __typename?: 'Address';
  /** String address representation */
  address: Scalars['String'];
  /** Annotations ( tags ), if exists */
  annotation?: Maybe<Scalars['String']>;
};

/** Address selector */
export type AddressSelector = {
  /** Equal to Address */
  is?: Maybe<Scalars['String']>;
  /** Not Equal to Address */
  not?: Maybe<Scalars['String']>;
  /** In the list of Addresses */
  in?: Maybe<Scalars['String']>;
  /** Not in the list of Addresses */
  notIn?: Maybe<Scalars['String']>;
};

/** Address selector */
export type AddressSelectorIn = {
  /** Equal to Address */
  is?: Maybe<Scalars['String']>;
  /** In the list of Addresses */
  in?: Maybe<Scalars['String']>;
};

/** Blockchain account with address and type */
export type AddressWithAccount = {
  __typename?: 'AddressWithAccount';
  /** Account ID */
  account: Scalars['String'];
  /** String address representation */
  address: Scalars['String'];
  /** Annotations ( tags ), if exists */
  annotation?: Maybe<Scalars['String']>;
  /** Account type */
  type: Scalars['String'];
};

/** Algorand Blockchain */
export type Algorand = {
  __typename?: 'Algorand';
  /** Basic information about address ( or smart contract ) */
  address: Array<AlgorandAddressInfo>;
  /** Arguments of Smart Contract Calls and Events */
  arguments?: Maybe<Array<AlgorandArguments>>;
  /** Blockchain Blocks */
  blocks?: Maybe<Array<AlgorandBlocks>>;
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<AlgorandCoinpath>>;
  /** Smart Contract Calls */
  smartContractCalls?: Maybe<Array<AlgorandSmartContractCalls>>;
  /** Blockchain Transactions */
  transactions?: Maybe<Array<AlgorandTransactions>>;
  /** Currency Transfers */
  transfers?: Maybe<Array<AlgorandTransfers>>;
};

/** Algorand Blockchain */
export type AlgorandAddressArgs = {
  address: Array<AlgorandAddressSelector>;
};

/** Algorand Blockchain */
export type AlgorandArgumentsArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  txType?: Maybe<TxTypeSelector>;
  txFrom?: Maybe<Array<AlgorandAddressSelector>>;
  caller?: Maybe<Array<AlgorandAddressSelector>>;
  reference?: Maybe<Array<AlgorandAddressSelector>>;
  value?: Maybe<Array<ArgumentValueSelector>>;
  argument?: Maybe<Array<ArgumentSelector>>;
  smartContractAddress?: Maybe<Array<AlgorandAddressSelector>>;
  argindex?: Maybe<ArgumentIndexSelector>;
  any?: Maybe<Array<AlgorandArgumentFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Algorand Blockchain */
export type AlgorandBlocksArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  proposer?: Maybe<Array<AlgorandAddressSelector>>;
  blockReward?: Maybe<Array<AmountSelector>>;
  nextProtocol?: Maybe<StringIdSelector>;
  currentProtocol?: Maybe<StringIdSelector>;
  any?: Maybe<Array<AlgorandBlockFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Algorand Blockchain */
export type AlgorandCoinpathArgs = {
  sender?: Maybe<AlgorandAddressSelector>;
  receiver?: Maybe<AlgorandAddressSelector>;
  currency?: Maybe<Array<AlgorandCurrencySelector>>;
  initialAddress?: Maybe<AlgorandAddressSelector>;
  initialDate?: Maybe<DateSelector>;
  initialTime?: Maybe<DateTimeSelector>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  depth?: Maybe<IntegerLimitedSelector>;
  options?: Maybe<CoinpathOptions>;
};

/** Algorand Blockchain */
export type AlgorandSmartContractCallsArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  txSender?: Maybe<Array<AlgorandAddressSelector>>;
  smartContractAddress?: Maybe<Array<AlgorandAddressSelector>>;
  txType?: Maybe<TxTypeSelector>;
  any?: Maybe<Array<AlgorandSmartContractCallFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Algorand Blockchain */
export type AlgorandTransactionsArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<AlgorandAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  txCurrency?: Maybe<Array<AlgorandCurrencySelector>>;
  txType?: Maybe<TxTypeSelector>;
  txSubtype?: Maybe<TxSubtypeSelector>;
  any?: Maybe<Array<AlgorandTransactionFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Algorand Blockchain */
export type AlgorandTransfersArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<AlgorandAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  sender?: Maybe<Array<AlgorandAddressSelector>>;
  receiver?: Maybe<Array<AlgorandAddressSelector>>;
  currency?: Maybe<Array<AlgorandCurrencySelector>>;
  amount?: Maybe<Array<AmountSelector>>;
  txType?: Maybe<TxTypeSelector>;
  transferType?: Maybe<AlgorandTransferTypeSelector>;
  any?: Maybe<Array<AlgorandTransferFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Address detailed information for Algorand network */
export type AlgorandAddressInfo = {
  __typename?: 'AlgorandAddressInfo';
  /** Address */
  address?: Maybe<Address>;
  /** Smart Contract if exists on the address */
  smartContract?: Maybe<AlgorandSmartContract>;
};

/** Algorand Address */
export type AlgorandAddressSelector = {
  /** Equal to Address */
  is?: Maybe<Scalars['String']>;
  /** Not Equal to Address */
  not?: Maybe<Scalars['String']>;
  /** In the list of Addresses */
  in?: Maybe<Array<Scalars['String']>>;
  /** Not in the list of Addresses */
  notIn?: Maybe<Array<Scalars['String']>>;
};

export type AlgorandArgumentFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  txType?: Maybe<TxTypeSelector>;
  txFrom?: Maybe<Array<AlgorandAddressSelector>>;
  caller?: Maybe<Array<AlgorandAddressSelector>>;
  reference?: Maybe<Array<AlgorandAddressSelector>>;
  value?: Maybe<Array<ArgumentValueSelector>>;
  argument?: Maybe<Array<ArgumentSelector>>;
  smartContractAddress?: Maybe<Array<AlgorandAddressSelector>>;
  argindex?: Maybe<ArgumentIndexSelector>;
};

/** Arguments of Smart Contract Calls */
export type AlgorandArguments = {
  __typename?: 'AlgorandArguments';
  any?: Maybe<Scalars['String']>;
  /** Sequential index of value in array ( multi-dimensional) */
  argindex: Scalars['Int'];
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  firstRound?: Maybe<Scalars['Int']>;
  genesisHash64?: Maybe<Scalars['String']>;
  genesisId?: Maybe<Scalars['String']>;
  lastRound?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  poolerror?: Maybe<Scalars['String']>;
  /** Smart contract being called */
  smartContract?: Maybe<AlgorandSmartContract>;
  /** Transaction where call happened */
  transaction?: Maybe<TransactionHashIndex>;
  /** Transaction sender */
  txSender?: Maybe<Address>;
  /** Transaction type in which the transfer happened */
  txType?: Maybe<AlgorandTxType>;
  /** The Value of argument */
  value?: Maybe<Scalars['String']>;
};

/** Arguments of Smart Contract Calls */
export type AlgorandArgumentsAnyArgs = {
  of: AlgorandArgumentsMeasureable;
};

/** Arguments of Smart Contract Calls */
export type AlgorandArgumentsBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Arguments of Smart Contract Calls */
export type AlgorandArgumentsCountArgs = {
  uniq?: Maybe<SmartContractCallsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  txType?: Maybe<TxTypeSelector>;
  txFrom?: Maybe<Array<AlgorandAddressSelector>>;
  caller?: Maybe<Array<AlgorandAddressSelector>>;
  reference?: Maybe<Array<AlgorandAddressSelector>>;
  value?: Maybe<Array<ArgumentValueSelector>>;
  argument?: Maybe<Array<ArgumentSelector>>;
  smartContractAddress?: Maybe<Array<AlgorandAddressSelector>>;
  argindex?: Maybe<ArgumentIndexSelector>;
};

/** Arguments of Smart Contract Calls */
export type AlgorandArgumentsMaximumArgs = {
  of: AlgorandArgumentsMeasureable;
  get?: Maybe<AlgorandArgumentsMeasureable>;
};

/** Arguments of Smart Contract Calls */
export type AlgorandArgumentsMinimumArgs = {
  of: AlgorandArgumentsMeasureable;
  get?: Maybe<AlgorandArgumentsMeasureable>;
};

/** Arguments of Smart Contract Calls */
export type AlgorandArgumentsSmartContractArgs = {
  smartContractAddress?: Maybe<Array<AlgorandAddressSelector>>;
};

/** Arguments of Smart Contract Calls */
export type AlgorandArgumentsTransactionArgs = {
  txHash?: Maybe<Array<HashSelector>>;
  txFrom?: Maybe<Array<AlgorandAddressSelector>>;
};

/** Arguments of Smart Contract Calls */
export type AlgorandArgumentsTxSenderArgs = {
  txSender?: Maybe<Array<AlgorandAddressSelector>>;
};

/** Arguments of Smart Contract Calls */
export type AlgorandArgumentsTxTypeArgs = {
  txType?: Maybe<Array<AlgorandTxType>>;
};

/** Arguments of Smart Contract Calls */
export type AlgorandArgumentsValueArgs = {
  value?: Maybe<Array<ArgumentValueSelector>>;
};

export enum AlgorandArgumentsMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Transaction hash */
  TX_HASH = 'tx_hash',
  /** Transaction type */
  TX_TYPE = 'tx_type',
  /** Transaction Sender */
  TX_SENDER = 'tx_sender',
  /** Smart Contract */
  SMART_CONTRACT = 'smart_contract',
  /** Argument value */
  ARGUMENT_VALUE = 'argument_value',
  /** Argument index */
  ARGUMENT_INDEX = 'argument_index',
}

export type AlgorandBlockFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  proposer?: Maybe<Array<AlgorandAddressSelector>>;
  blockReward?: Maybe<Array<AmountSelector>>;
  nextProtocol?: Maybe<StringIdSelector>;
  currentProtocol?: Maybe<StringIdSelector>;
};

/** Blocks in Algorand blockchain */
export type AlgorandBlocks = {
  __typename?: 'AlgorandBlocks';
  any?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  currentProtocol?: Maybe<Scalars['String']>;
  /** Calendar date */
  date?: Maybe<Date>;
  frac: Scalars['BigInt'];
  /** Block hash */
  hash: Scalars['String'];
  /** Block number (height) in blockchain */
  height: Scalars['Int'];
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  nextProtocol?: Maybe<Scalars['String']>;
  nextProtocolApprovals?: Maybe<Scalars['BigInt']>;
  nextProtocolSwitchOn?: Maybe<Scalars['BigInt']>;
  nextProtocolVoteBefore?: Maybe<Scalars['BigInt']>;
  /** Previous block hash */
  previousBlockHash: Scalars['String'];
  /** Block proposer */
  proposer?: Maybe<Address>;
  rate?: Maybe<Scalars['Float']>;
  reward?: Maybe<Scalars['Float']>;
  seed?: Maybe<Scalars['String']>;
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
  txnRoot: Scalars['String'];
  upgradeApprove?: Maybe<Scalars['Int']>;
  upgradePropose?: Maybe<Scalars['String']>;
};

/** Blocks in Algorand blockchain */
export type AlgorandBlocksAnyArgs = {
  of: AlgorandBlocksMeasureable;
};

/** Blocks in Algorand blockchain */
export type AlgorandBlocksCountArgs = {
  uniq?: Maybe<AlgorandBlocksUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  proposer?: Maybe<Array<AlgorandAddressSelector>>;
  blockReward?: Maybe<Array<AmountSelector>>;
  nextProtocol?: Maybe<StringIdSelector>;
  currentProtocol?: Maybe<StringIdSelector>;
};

/** Blocks in Algorand blockchain */
export type AlgorandBlocksHashArgs = {
  blockHash?: Maybe<Array<HashSelector>>;
};

/** Blocks in Algorand blockchain */
export type AlgorandBlocksHeightArgs = {
  height?: Maybe<BlockSelector>;
};

/** Blocks in Algorand blockchain */
export type AlgorandBlocksMaximumArgs = {
  of: AlgorandBlocksMeasureable;
  get?: Maybe<AlgorandBlocksMeasureable>;
};

/** Blocks in Algorand blockchain */
export type AlgorandBlocksMinimumArgs = {
  of: AlgorandBlocksMeasureable;
  get?: Maybe<AlgorandBlocksMeasureable>;
};

/** Blocks in Algorand blockchain */
export type AlgorandBlocksProposerArgs = {
  proposer?: Maybe<Array<AlgorandAddressSelector>>;
};

/** Blocks in Algorand blockchain */
export type AlgorandBlocksRateArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  proposer?: Maybe<Array<AlgorandAddressSelector>>;
  blockReward?: Maybe<Array<AmountSelector>>;
  nextProtocol?: Maybe<StringIdSelector>;
  currentProtocol?: Maybe<StringIdSelector>;
};

/** Blocks in Algorand blockchain */
export type AlgorandBlocksRewardArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  proposer?: Maybe<Array<AlgorandAddressSelector>>;
  blockReward?: Maybe<Array<AmountSelector>>;
  nextProtocol?: Maybe<StringIdSelector>;
  currentProtocol?: Maybe<StringIdSelector>;
};

/** Blocks in Algorand blockchain */
export type AlgorandBlocksTimestampArgs = {
  time?: Maybe<DateTimeSelector>;
};

export enum AlgorandBlocksMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Block hash */
  BLOCK_HASH = 'block_hash',
  /** Block Reward */
  BLOCK_REWARD = 'block_reward',
  /** Block Proposer */
  PROPOSER = 'proposer',
  /** Next protocol approvals */
  NEXT_PROTOCOL_APPROVALS = 'next_protocol_approvals',
}

export enum AlgorandBlocksUniq {
  /** Unique proposer count */
  PROPOSERS = 'proposers',
  /** Unique date count */
  DATES = 'dates',
}

export enum AlgorandCallsMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Transaction hash */
  TX_HASH = 'tx_hash',
  /** Transaction type */
  TX_TYPE = 'tx_type',
  /** Transaction Sender */
  TX_SENDER = 'tx_sender',
  /** Smart Contract */
  SMART_CONTRACT = 'smart_contract',
}

/** Coinpath */
export type AlgorandCoinpath = {
  __typename?: 'AlgorandCoinpath';
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Count of transfers */
  count?: Maybe<Scalars['Int']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Receiver address */
  receiver?: Maybe<Address>;
  /** Sender address */
  sender?: Maybe<Address>;
  /** Transaction of transfer happened */
  transaction?: Maybe<TransactionHashValue>;
};

/** Coinpath */
export type AlgorandCoinpathAmountArgs = {
  in?: Maybe<BaseCurrencyEnum>;
};

/** Coinpath */
export type AlgorandCoinpathAnyArgs = {
  of: CoinpathMeasureable;
};

/** Coinpath */
export type AlgorandCoinpathMaximumArgs = {
  of: CoinpathMeasureable;
  get?: Maybe<CoinpathMeasureable>;
};

/** Coinpath */
export type AlgorandCoinpathMinimumArgs = {
  of: CoinpathMeasureable;
  get?: Maybe<CoinpathMeasureable>;
};

/**
 * Currency selector in Algorand blockchain.
 *   Currency is selected by asset ID. To select ALGO use ID=0
 */
export type AlgorandCurrencySelector = {
  /** Currency is */
  is?: Maybe<Scalars['Int']>;
  /** Currency not */
  not?: Maybe<Scalars['Int']>;
  /** Currency in the list */
  in?: Maybe<Array<Scalars['Int']>>;
  /** Currency not in the list */
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export enum AlgorandNetwork {
  /** Algorand Mainnet (ALGO) */
  ALGORAND = 'algorand',
  /** Algorand Testnet */
  ALGORAND_TESTNET = 'algorand_testnet',
  /** Algorand Betanet */
  ALGORAND_BETANET = 'algorand_betanet',
}

/** Algorand smart contract */
export type AlgorandSmartContract = {
  __typename?: 'AlgorandSmartContract';
  /** Smart Contract Address */
  address: Address;
  /** Smart Contract byte code */
  bytecode?: Maybe<Scalars['String']>;
  /** Smart Contract Deassembled source code */
  source?: Maybe<Scalars['String']>;
};

export type AlgorandSmartContractCallFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  txSender?: Maybe<Array<AlgorandAddressSelector>>;
  smartContractAddress?: Maybe<Array<AlgorandAddressSelector>>;
  txType?: Maybe<TxTypeSelector>;
};

/** Smart Contract Calls */
export type AlgorandSmartContractCalls = {
  __typename?: 'AlgorandSmartContractCalls';
  any?: Maybe<Scalars['String']>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Fee used in transaction call */
  fee?: Maybe<Scalars['Float']>;
  firstRound?: Maybe<Scalars['Int']>;
  genesisHash64?: Maybe<Scalars['String']>;
  genesisId?: Maybe<Scalars['String']>;
  lastRound?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  poolerror?: Maybe<Scalars['String']>;
  /** Smart contract being called */
  smartContract?: Maybe<AlgorandSmartContract>;
  /** Transaction where call happened */
  transaction?: Maybe<TransactionHashIndex>;
  /** Transaction sender */
  txSender?: Maybe<Address>;
  /** Transaction type in which the transfer happened */
  txType?: Maybe<AlgorandTxType>;
};

/** Smart Contract Calls */
export type AlgorandSmartContractCallsAnyArgs = {
  of: AlgorandCallsMeasureable;
};

/** Smart Contract Calls */
export type AlgorandSmartContractCallsBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Smart Contract Calls */
export type AlgorandSmartContractCallsCountArgs = {
  uniq?: Maybe<SmartContractCallsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  txSender?: Maybe<Array<AlgorandAddressSelector>>;
  smartContractAddress?: Maybe<Array<AlgorandAddressSelector>>;
  txType?: Maybe<TxTypeSelector>;
};

/** Smart Contract Calls */
export type AlgorandSmartContractCallsFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  txSender?: Maybe<Array<AlgorandAddressSelector>>;
  smartContractAddress?: Maybe<Array<AlgorandAddressSelector>>;
  txType?: Maybe<TxTypeSelector>;
};

/** Smart Contract Calls */
export type AlgorandSmartContractCallsMaximumArgs = {
  of: AlgorandCallsMeasureable;
  get?: Maybe<AlgorandCallsMeasureable>;
};

/** Smart Contract Calls */
export type AlgorandSmartContractCallsMinimumArgs = {
  of: AlgorandCallsMeasureable;
  get?: Maybe<AlgorandCallsMeasureable>;
};

/** Smart Contract Calls */
export type AlgorandSmartContractCallsSmartContractArgs = {
  smartContractAddress?: Maybe<Array<AlgorandAddressSelector>>;
};

/** Smart Contract Calls */
export type AlgorandSmartContractCallsTransactionArgs = {
  txHash?: Maybe<Array<HashSelector>>;
  txFrom?: Maybe<Array<AlgorandAddressSelector>>;
};

/** Smart Contract Calls */
export type AlgorandSmartContractCallsTxSenderArgs = {
  txSender?: Maybe<Array<AlgorandAddressSelector>>;
};

/** Smart Contract Calls */
export type AlgorandSmartContractCallsTxTypeArgs = {
  txType?: Maybe<Array<AlgorandTxType>>;
};

export type AlgorandTransactionFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<AlgorandAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  txCurrency?: Maybe<Array<AlgorandCurrencySelector>>;
  txType?: Maybe<TxTypeSelector>;
  txSubtype?: Maybe<TxSubtypeSelector>;
};

/** Transactions in Algorand blockchain */
export type AlgorandTransactions = {
  __typename?: 'AlgorandTransactions';
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  count?: Maybe<Scalars['Int']>;
  /** Asset related to transaction */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  fee?: Maybe<Scalars['Float']>;
  firstRound?: Maybe<Scalars['Int']>;
  genesisHash?: Maybe<Scalars['String']>;
  genesisId?: Maybe<Scalars['String']>;
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction index in block, 0 based */
  index?: Maybe<Scalars['Int']>;
  lastRound?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  poolerror?: Maybe<Scalars['String']>;
  /** Transaction sender */
  sender?: Maybe<Address>;
  /** Transaction sub type */
  subtype?: Maybe<AlgorandTxSubType>;
  /** Transaction type */
  type?: Maybe<AlgorandTxType>;
};

/** Transactions in Algorand blockchain */
export type AlgorandTransactionsAnyArgs = {
  of: AlgorandTransactionsMeasureable;
};

/** Transactions in Algorand blockchain */
export type AlgorandTransactionsBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Transactions in Algorand blockchain */
export type AlgorandTransactionsCountArgs = {
  uniq?: Maybe<AlgorandTransactionsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<AlgorandAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  txCurrency?: Maybe<Array<AlgorandCurrencySelector>>;
  txType?: Maybe<TxTypeSelector>;
  txSubtype?: Maybe<TxSubtypeSelector>;
};

/** Transactions in Algorand blockchain */
export type AlgorandTransactionsCurrencyArgs = {
  txCurrency?: Maybe<Array<AlgorandCurrencySelector>>;
};

/** Transactions in Algorand blockchain */
export type AlgorandTransactionsFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<AlgorandAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  txCurrency?: Maybe<Array<AlgorandCurrencySelector>>;
  txType?: Maybe<TxTypeSelector>;
  txSubtype?: Maybe<TxSubtypeSelector>;
};

/** Transactions in Algorand blockchain */
export type AlgorandTransactionsHashArgs = {
  txHash?: Maybe<Array<HashSelector>>;
};

/** Transactions in Algorand blockchain */
export type AlgorandTransactionsIndexArgs = {
  txIndex?: Maybe<Array<TxIndexSelector>>;
};

/** Transactions in Algorand blockchain */
export type AlgorandTransactionsMaximumArgs = {
  of: AlgorandTransactionsMeasureable;
  get?: Maybe<AlgorandTransactionsMeasureable>;
};

/** Transactions in Algorand blockchain */
export type AlgorandTransactionsMinimumArgs = {
  of: AlgorandTransactionsMeasureable;
  get?: Maybe<AlgorandTransactionsMeasureable>;
};

/** Transactions in Algorand blockchain */
export type AlgorandTransactionsSenderArgs = {
  txSender?: Maybe<Array<AlgorandAddressSelector>>;
};

/** Transactions in Algorand blockchain */
export type AlgorandTransactionsSubtypeArgs = {
  txType?: Maybe<TxSubtypeSelector>;
};

/** Transactions in Algorand blockchain */
export type AlgorandTransactionsTypeArgs = {
  txType?: Maybe<TxTypeSelector>;
};

export enum AlgorandTransactionsMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Fee value */
  FEE = 'fee',
  /** Transaction hash */
  TX_HASH = 'tx_hash',
  /** Transaction Sender */
  TX_SENDER = 'tx_sender',
}

export enum AlgorandTransactionsUniq {
  /** Unique TX senders count */
  SENDERS = 'senders',
  /** Unique blocks */
  BLOCKS = 'blocks',
  /** Unique date count */
  DATES = 'dates',
  /** Unique currencies */
  CURRENCIES = 'currencies',
}

export type AlgorandTransferFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<AlgorandAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  sender?: Maybe<Array<AlgorandAddressSelector>>;
  receiver?: Maybe<Array<AlgorandAddressSelector>>;
  currency?: Maybe<Array<AlgorandCurrencySelector>>;
  amount?: Maybe<Array<AmountSelector>>;
  txType?: Maybe<TxTypeSelector>;
  transferType?: Maybe<AlgorandTransferTypeSelector>;
};

export enum AlgorandTransferType {
  /** Genesis Block */
  GENESIS = 'genesis',
  /** Create Asset */
  CREATE = 'create',
  /** Send */
  SEND = 'send',
  /** Close */
  CLOSE = 'close',
  /** Reward */
  REWARD = 'reward',
  /** Asset Freeze */
  FREEZE = 'freeze',
  /** Asset Unfreeze */
  UNFREEZE = 'unfreeze',
}

/** Select transfers by type */
export type AlgorandTransferTypeSelector = {
  /** Transfer Type is */
  is?: Maybe<AlgorandTransferType>;
  /** Transfer Type not */
  not?: Maybe<AlgorandTransferType>;
  /** Transfer Type in the list */
  in?: Maybe<Array<AlgorandTransferType>>;
  /** Transfer Type not in the list */
  notIn?: Maybe<Array<AlgorandTransferType>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfers = {
  __typename?: 'AlgorandTransfers';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  count?: Maybe<Scalars['Int']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  firstRound?: Maybe<Scalars['Int']>;
  lastRound?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Transfer receiver */
  receiver?: Maybe<Address>;
  /** Transfer sender */
  sender?: Maybe<Address>;
  /** Transaction where transfer happened */
  transaction?: Maybe<TransactionHashIndex>;
  /** Transfer Type */
  transferType?: Maybe<AlgorandTransferType>;
  /** Transfer transaction sender */
  txSender?: Maybe<Address>;
  /** Transaction type in which the transfer happened */
  txType?: Maybe<AlgorandTxType>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfersAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<AlgorandAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  sender?: Maybe<Array<AlgorandAddressSelector>>;
  receiver?: Maybe<Array<AlgorandAddressSelector>>;
  currency?: Maybe<Array<AlgorandCurrencySelector>>;
  amount?: Maybe<Array<AmountSelector>>;
  txType?: Maybe<TxTypeSelector>;
  transferType?: Maybe<AlgorandTransferTypeSelector>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfersAnyArgs = {
  of: AlgorandTransfersMeasureable;
};

/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfersBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfersCountArgs = {
  uniq?: Maybe<TransfersUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<AlgorandAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  sender?: Maybe<Array<AlgorandAddressSelector>>;
  receiver?: Maybe<Array<AlgorandAddressSelector>>;
  currency?: Maybe<Array<AlgorandCurrencySelector>>;
  amount?: Maybe<Array<AmountSelector>>;
  txType?: Maybe<TxTypeSelector>;
  transferType?: Maybe<AlgorandTransferTypeSelector>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfersCurrencyArgs = {
  currency?: Maybe<Array<AlgorandCurrencySelector>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfersMaximumArgs = {
  of: AlgorandTransfersMeasureable;
  get?: Maybe<AlgorandTransfersMeasureable>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfersMinimumArgs = {
  of: AlgorandTransfersMeasureable;
  get?: Maybe<AlgorandTransfersMeasureable>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfersReceiverArgs = {
  receiver?: Maybe<Array<AlgorandAddressSelector>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfersSenderArgs = {
  sender?: Maybe<Array<AlgorandAddressSelector>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfersTransactionArgs = {
  txHash?: Maybe<Array<HashSelector>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfersTransferTypeArgs = {
  transferType?: Maybe<Array<AlgorandTransferType>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfersTxSenderArgs = {
  txSender?: Maybe<Array<AlgorandAddressSelector>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfersTxTypeArgs = {
  txType?: Maybe<Array<AlgorandTxType>>;
};

export enum AlgorandTransfersMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Transaction hash */
  TX_HASH = 'tx_hash',
  /** Amount */
  AMOUNT = 'amount',
  /** TX Sender */
  TX_SENDER = 'tx_sender',
  /** Sender */
  SENDER = 'sender',
  /** Receiver */
  RECEIVER = 'receiver',
  /** Currency symbol */
  CURRENCY_SYMBOL = 'currency_symbol',
  /** Currency Asset ID */
  ASSET_ID = 'asset_id',
  /** Transaction type */
  TX_TYPE = 'tx_type',
  /** Transfer type */
  TRANSFER_TYPE = 'transfer_type',
}

export enum AlgorandTxSubType {
  /** Send */
  SEND = 'send',
  /** Close */
  CLOSE = 'close',
  /** Create */
  CREATE = 'create',
  /** Asset Configuration */
  CONFIGURE = 'configure',
  /** Asset Freeze */
  FREEZE = 'freeze',
  /** Asset Unfreeze */
  UNFREEZE = 'unfreeze',
  /** Key Reg */
  KEYREG = 'keyreg',
  /** None */
  NONE = 'none',
}

export enum AlgorandTxType {
  /** Genesis Block */
  GENESIS = 'genesis',
  /** Pay */
  PAY = 'pay',
  /** Key Reg */
  KEYREG = 'keyreg',
  /** Asset Configuration */
  ACFG = 'acfg',
  /** Asset Transfer */
  AXFER = 'axfer',
  /** Asset Freeze or Unfreeze */
  AFRZ = 'afrz',
  /** Application Call */
  APPL = 'appl',
}

export enum AmountAggregateFunction {
  /** Maximum */
  MAXIMUM = 'maximum',
  /** Minimum */
  MINIMUM = 'minimum',
  /** Sum (total) */
  SUM = 'sum',
  /** Average */
  AVERAGE = 'average',
  /** Median */
  MEDIAN = 'median',
  /** Unique estimate fast */
  UNIQUE = 'unique',
  /** Unique exact */
  UNIQUE_EXACT = 'uniqueExact',
  /** Any value */
  ANY = 'any',
  /** Last value */
  ANY_LAST = 'anyLast',
}

/** Select by amount */
export type AmountSelector = {
  /** Amount is */
  is?: Maybe<Scalars['Float']>;
  /** Amount not */
  not?: Maybe<Scalars['Float']>;
  /** Amount in the list */
  in?: Maybe<Array<Scalars['Float']>>;
  /** Amount not in the list */
  notIn?: Maybe<Array<Scalars['Float']>>;
  /** Amount greater than */
  gt?: Maybe<Scalars['Float']>;
  /** Amount less than */
  lt?: Maybe<Scalars['Float']>;
  /** Amount less or equal than */
  lteq?: Maybe<Scalars['Float']>;
  /** Amount greater or equal than */
  gteq?: Maybe<Scalars['Float']>;
  /** Amount in range */
  between?: Maybe<Array<Scalars['Float']>>;
};

/** Selector of index of argument in call */
export type ArgumentIndexSelector = {
  /** Tx index is */
  is?: Maybe<Scalars['Int']>;
  /** Tx index not */
  not?: Maybe<Scalars['Int']>;
  /** Tx index in the list */
  in?: Maybe<Array<Scalars['Int']>>;
  /** Tx index not in the list */
  notIn?: Maybe<Array<Scalars['Int']>>;
};

/** Argument of Smart contract method or event */
export type ArgumentName = {
  __typename?: 'ArgumentName';
  /** Name */
  name: Scalars['String'];
  /** Type */
  type: Scalars['String'];
};

/** Argument name and value of smart contract call or event */
export type ArgumentNameValue = {
  __typename?: 'ArgumentNameValue';
  /** Argument name */
  argument: Scalars['String'];
  /** Argument data type */
  argumentType: Scalars['String'];
  /** Sequential index of value in array ( multi-dimensional) */
  index: Scalars['String'];
  /** Value as String */
  value: Scalars['String'];
};

/** Selector of argument for smart contract method or event */
export type ArgumentSelector = {
  /** Argument is */
  is?: Maybe<Scalars['String']>;
  /** Argument not */
  not?: Maybe<Scalars['String']>;
  /** Argument in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** Argument not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
};

/** Selector of argument type for smart contract method or event */
export type ArgumentTypeSelector = {
  /** Argument type is */
  is?: Maybe<Scalars['String']>;
  /** Argument type not */
  not?: Maybe<Scalars['String']>;
  /** Argument type in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** Argument type not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
};

/** Argument value of smart contract call or event */
export type ArgumentValue = {
  __typename?: 'ArgumentValue';
  /** Value as Address */
  address?: Maybe<EthereumAddressInfo>;
  /** Value as String */
  value: Scalars['String'];
};

/** Selector of value of argument for smart contract method or event */
export type ArgumentValueSelector = {
  /** Value is */
  is?: Maybe<Scalars['String']>;
  /** Value not */
  not?: Maybe<Scalars['String']>;
  /** Value in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** Value not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
};

export enum BaseCurrencyEnum {
  /** Dollar */
  USD = 'USD',
  /** Ethereum */
  ETH = 'ETH',
  /** Tether USDT */
  USDT = 'USDT',
  /** Bitcoin */
  BTC = 'BTC',
}

/** Binance DEX */
export type Binance = {
  __typename?: 'Binance';
  /** Binance DEX Network Blocks */
  blocks?: Maybe<Array<BinanceBlock>>;
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<BinanceCoinpath>>;
  /** Binance DEX Network Exchange Orders */
  orders?: Maybe<Array<BinanceOrders>>;
  /** Binance DEX Network Trades between currencies */
  trades?: Maybe<Array<BinanceTrades>>;
  /** Binance DEX Network Transactions */
  transactions?: Maybe<Array<BinanceTransactions>>;
  /** Binance DEX Network Currency Transfers */
  transfers?: Maybe<Array<BinanceTransfers>>;
};

/** Binance DEX */
export type BinanceBlocksArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockId?: Maybe<StringIdSelector>;
  validatorMoniker?: Maybe<StringIdSelector>;
  validatorFeeAddr?: Maybe<BinanceAddressSelector>;
  validatorOperatorAddress?: Maybe<BinanceAddressSelector>;
  validatorOperahraddress?: Maybe<BinanceAddressSelector>;
  any?: Maybe<Array<BinanceBlockFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Binance DEX */
export type BinanceCoinpathArgs = {
  sender?: Maybe<BinanceAddressSelector>;
  receiver?: Maybe<BinanceAddressSelector>;
  currency?: Maybe<Array<BinanceCurrencySelector>>;
  initialAddress?: Maybe<BinanceAddressSelector>;
  initialDate?: Maybe<DateSelector>;
  initialTime?: Maybe<DateTimeSelector>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  depth?: Maybe<IntegerLimitedSelector>;
  options?: Maybe<CoinpathOptions>;
};

/** Binance DEX */
export type BinanceOrdersArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  orderOwner?: Maybe<Array<BinanceAddressSelector>>;
  orderId?: Maybe<Array<OrderIdSelector>>;
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteAmount?: Maybe<Array<AmountSelector>>;
  baseAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
  orderStatus?: Maybe<Array<OrderStatusSelector>>;
  orderType?: Maybe<Array<OrderTypeSelector>>;
  orderSide?: Maybe<Array<OrderSideSelector>>;
  orderTimeInForce?: Maybe<Array<OrderTimeInForceSelector>>;
  any?: Maybe<Array<BinanceOrderFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Binance DEX */
export type BinanceTradesArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  buyer?: Maybe<Array<BinanceAddressSelector>>;
  seller?: Maybe<Array<BinanceAddressSelector>>;
  sellOrderId?: Maybe<Array<OrderIdSelector>>;
  buyOrderId?: Maybe<Array<OrderIdSelector>>;
  tradeId?: Maybe<Array<TradeIdSelector>>;
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteAmount?: Maybe<Array<AmountSelector>>;
  baseAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
  any?: Maybe<Array<BinanceTradeFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Binance DEX */
export type BinanceTransactionsArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  transactionType?: Maybe<BinanceTransactionTypeSelector>;
  proposalId?: Maybe<StringIdSelector>;
  currency?: Maybe<Array<BinanceCurrencySelector>>;
  transactionCode?: Maybe<IntIdSelector>;
  transactionSource?: Maybe<IntIdSelector>;
  deposit?: Maybe<Array<AmountSelector>>;
  any?: Maybe<Array<BinanceTransactionFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Binance DEX */
export type BinanceTransfersArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  sender?: Maybe<Array<BinanceAddressSelector>>;
  receiver?: Maybe<Array<BinanceAddressSelector>>;
  currency?: Maybe<Array<BinanceCurrencySelector>>;
  transferType?: Maybe<Array<BinanceTransferTypeSelector>>;
  orderId?: Maybe<Array<OrderIdSelector>>;
  tradeId?: Maybe<Array<TradeIdSelector>>;
  amount?: Maybe<Array<AmountSelector>>;
  outputIndex?: Maybe<Array<OutputIndexSelector>>;
  any?: Maybe<Array<BinanceTransferFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Binance Address should start with bnb and contain 42 chars. */
export type BinanceAddressSelector = {
  /** Equal to Address */
  is?: Maybe<Scalars['String']>;
  /** Not Equal to Address */
  not?: Maybe<Scalars['String']>;
  /** In the list of Addresses */
  in?: Maybe<Scalars['String']>;
  /** Not in the list of Addresses */
  notIn?: Maybe<Scalars['String']>;
};

/** Block */
export type BinanceBlock = {
  __typename?: 'BinanceBlock';
  any?: Maybe<Scalars['String']>;
  /** Block ID */
  blockId?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Block number (height) in blockchain */
  height: Scalars['Int'];
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
  /** Validator consensus pubkey */
  validatorConsensusPubkey?: Maybe<Scalars['String']>;
  /** Validator fee address */
  validatorFeeAddr?: Maybe<Address>;
  /** Validator moniker */
  validatorMoniker?: Maybe<Scalars['String']>;
  /** Validator operator HR address */
  validatorOperaHrAddress?: Maybe<Address>;
  /** Validator operator address */
  validatorOperatorAddress?: Maybe<Address>;
};

/** Block */
export type BinanceBlockAnyArgs = {
  of: BinanceBlocksMeasureable;
};

/** Block */
export type BinanceBlockBlockIdArgs = {
  blockId?: Maybe<StringIdSelector>;
};

/** Block */
export type BinanceBlockCountArgs = {
  uniq?: Maybe<BinanceBlockUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockId?: Maybe<StringIdSelector>;
  validatorMoniker?: Maybe<StringIdSelector>;
  validatorFeeAddr?: Maybe<BinanceAddressSelector>;
  validatorOperatorAddress?: Maybe<BinanceAddressSelector>;
  validatorOperahraddress?: Maybe<BinanceAddressSelector>;
};

/** Block */
export type BinanceBlockHeightArgs = {
  height?: Maybe<BlockSelector>;
};

/** Block */
export type BinanceBlockMaximumArgs = {
  of: BinanceBlocksMeasureable;
  get?: Maybe<BinanceBlocksMeasureable>;
};

/** Block */
export type BinanceBlockMinimumArgs = {
  of: BinanceBlocksMeasureable;
  get?: Maybe<BinanceBlocksMeasureable>;
};

/** Block */
export type BinanceBlockTimestampArgs = {
  time?: Maybe<DateTimeSelector>;
};

/** Block */
export type BinanceBlockValidatorConsensusPubkeyArgs = {
  validatorConsensusPubkey?: Maybe<StringIdSelector>;
};

/** Block */
export type BinanceBlockValidatorFeeAddrArgs = {
  validatorFeeAddr?: Maybe<BinanceAddressSelector>;
};

/** Block */
export type BinanceBlockValidatorMonikerArgs = {
  validatorMoniker?: Maybe<StringIdSelector>;
};

/** Block */
export type BinanceBlockValidatorOperaHrAddressArgs = {
  validatorOperaHrAddress?: Maybe<BinanceAddressSelector>;
};

/** Block */
export type BinanceBlockValidatorOperatorAddressArgs = {
  validatorOperatorAddress?: Maybe<BinanceAddressSelector>;
};

export type BinanceBlockFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockId?: Maybe<StringIdSelector>;
  validatorMoniker?: Maybe<StringIdSelector>;
  validatorFeeAddr?: Maybe<BinanceAddressSelector>;
  validatorOperatorAddress?: Maybe<BinanceAddressSelector>;
  validatorOperahraddress?: Maybe<BinanceAddressSelector>;
};

export enum BinanceBlockUniq {
  /** Validator operators */
  VALIDATOR_OPERATOR_ADDRESSES = 'validator_operator_addresses',
  /** Validator fee addresses */
  VALIDATOR_FEE_ADDRESSES = 'validator_fee_addresses',
  /** Unique date count */
  DATES = 'dates',
}

export enum BinanceBlocksMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Block hash */
  BLOCK_HASH = 'block_hash',
  /** Validator moniker */
  VALIDATOR_MONIKER = 'validator_moniker',
}

/** Coinpath */
export type BinanceCoinpath = {
  __typename?: 'BinanceCoinpath';
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Count of transfers */
  count?: Maybe<Scalars['Int']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Receiver address */
  receiver?: Maybe<Address>;
  /** Sender address */
  sender?: Maybe<Address>;
  /** Transaction of transfer happened */
  transaction?: Maybe<TransactionHashValue>;
};

/** Coinpath */
export type BinanceCoinpathAmountArgs = {
  in?: Maybe<BaseCurrencyEnum>;
};

/** Coinpath */
export type BinanceCoinpathAnyArgs = {
  of: CoinpathMeasureable;
};

/** Coinpath */
export type BinanceCoinpathMaximumArgs = {
  of: CoinpathMeasureable;
  get?: Maybe<CoinpathMeasureable>;
};

/** Coinpath */
export type BinanceCoinpathMinimumArgs = {
  of: CoinpathMeasureable;
  get?: Maybe<CoinpathMeasureable>;
};

/**
 * Binance token selector by tokenId.
 *     Native binance token has BNB symbol.
 *     Note that most Binance symbols has two dash separated parts, for example: 'TROY-9B8_BNB'
 */
export type BinanceCurrencySelector = {
  /** Currency is */
  is?: Maybe<Scalars['String']>;
  /** Currency not */
  not?: Maybe<Scalars['String']>;
  /** Currency in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** Currency not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
};

export type BinanceOrderFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  orderOwner?: Maybe<Array<BinanceAddressSelector>>;
  orderId?: Maybe<Array<OrderIdSelector>>;
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteAmount?: Maybe<Array<AmountSelector>>;
  baseAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
  orderStatus?: Maybe<Array<OrderStatusSelector>>;
  orderType?: Maybe<Array<OrderTypeSelector>>;
  orderSide?: Maybe<Array<OrderSideSelector>>;
  orderTimeInForce?: Maybe<Array<OrderTimeInForceSelector>>;
};

export enum BinanceOrderSide {
  /** Sell Side */
  SELL = 'sell',
  /** Buy Side */
  BUY = 'buy',
}

export enum BinanceOrderStatus {
  /** Ack */
  ACK = 'Ack',
  /** Canceled */
  CANCELED = 'Canceled',
  /** Fully Fill */
  FULLY_FILL = 'FullyFill',
  /** Partial Fill */
  PARTIAL_FILL = 'PartialFill',
  /** Expired */
  EXPIRED = 'Expired',
  /** Failed Blocking */
  FAILED_BLOCKING = 'FailedBlocking',
  /** Ioc No Fill */
  IOC_NO_FILL = 'IocNoFill',
  /** Ioc Expire */
  IOC_EXPIRE = 'IocExpire',
}

export enum BinanceOrderTimeInForce {
  /** Good Till Expiry */
  GTE = 'GTE',
  /** Immediate Or Cancel */
  IOC = 'IOC',
}

export enum BinanceOrderType {
  /** Limit Order */
  LIMIT_ORDER = 'LimitOrder',
}

/** Binance DEX Order */
export type BinanceOrders = {
  __typename?: 'BinanceOrders';
  any?: Maybe<Scalars['String']>;
  baseAmount?: Maybe<Scalars['Float']>;
  baseCurrency?: Maybe<Currency>;
  /** Block where order transaction is included */
  block?: Maybe<Block>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Order ID */
  orderId?: Maybe<Scalars['String']>;
  /** Order owner address */
  orderOwner?: Maybe<Address>;
  /** Order Side */
  orderSide?: Maybe<BinanceOrderSide>;
  /** Order Status */
  orderStatus?: Maybe<BinanceOrderStatus>;
  /** Order Time In Force */
  orderTimeInForce?: Maybe<BinanceOrderTimeInForce>;
  /** Order Type */
  orderType?: Maybe<BinanceOrderType>;
  price?: Maybe<Scalars['Float']>;
  quoteAmount?: Maybe<Scalars['Float']>;
  quoteCurrency?: Maybe<Currency>;
  /** Transaction where order created */
  transaction?: Maybe<TransactionHash>;
};

/** Binance DEX Order */
export type BinanceOrdersAnyArgs = {
  of: BinanceOrdersMeasureable;
};

/** Binance DEX Order */
export type BinanceOrdersBaseAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  orderOwner?: Maybe<Array<BinanceAddressSelector>>;
  orderId?: Maybe<Array<OrderIdSelector>>;
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteAmount?: Maybe<Array<AmountSelector>>;
  baseAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
  orderStatus?: Maybe<Array<OrderStatusSelector>>;
  orderType?: Maybe<Array<OrderTypeSelector>>;
  orderSide?: Maybe<Array<OrderSideSelector>>;
  orderTimeInForce?: Maybe<Array<OrderTimeInForceSelector>>;
};

/** Binance DEX Order */
export type BinanceOrdersBaseCurrencyArgs = {
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>;
};

/** Binance DEX Order */
export type BinanceOrdersBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Binance DEX Order */
export type BinanceOrdersCountArgs = {
  uniq?: Maybe<BinanceOrdersUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  orderOwner?: Maybe<Array<BinanceAddressSelector>>;
  orderId?: Maybe<Array<OrderIdSelector>>;
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteAmount?: Maybe<Array<AmountSelector>>;
  baseAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
  orderStatus?: Maybe<Array<OrderStatusSelector>>;
  orderType?: Maybe<Array<OrderTypeSelector>>;
  orderSide?: Maybe<Array<OrderSideSelector>>;
  orderTimeInForce?: Maybe<Array<OrderTimeInForceSelector>>;
};

/** Binance DEX Order */
export type BinanceOrdersMaximumArgs = {
  of: BinanceOrdersMeasureable;
  get?: Maybe<BinanceOrdersMeasureable>;
};

/** Binance DEX Order */
export type BinanceOrdersMinimumArgs = {
  of: BinanceOrdersMeasureable;
  get?: Maybe<BinanceOrdersMeasureable>;
};

/** Binance DEX Order */
export type BinanceOrdersOrderIdArgs = {
  orderId?: Maybe<Array<OrderIdSelector>>;
};

/** Binance DEX Order */
export type BinanceOrdersOrderOwnerArgs = {
  owner?: Maybe<Array<BinanceAddressSelector>>;
};

/** Binance DEX Order */
export type BinanceOrdersOrderSideArgs = {
  orderSide?: Maybe<Array<OrderSideSelector>>;
};

/** Binance DEX Order */
export type BinanceOrdersOrderStatusArgs = {
  orderStatus?: Maybe<Array<OrderStatusSelector>>;
};

/** Binance DEX Order */
export type BinanceOrdersOrderTimeInForceArgs = {
  orderTimeInForce?: Maybe<Array<OrderTimeInForceSelector>>;
};

/** Binance DEX Order */
export type BinanceOrdersOrderTypeArgs = {
  orderType?: Maybe<Array<OrderTypeSelector>>;
};

/** Binance DEX Order */
export type BinanceOrdersQuoteAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  orderOwner?: Maybe<Array<BinanceAddressSelector>>;
  orderId?: Maybe<Array<OrderIdSelector>>;
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteAmount?: Maybe<Array<AmountSelector>>;
  baseAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
  orderStatus?: Maybe<Array<OrderStatusSelector>>;
  orderType?: Maybe<Array<OrderTypeSelector>>;
  orderSide?: Maybe<Array<OrderSideSelector>>;
  orderTimeInForce?: Maybe<Array<OrderTimeInForceSelector>>;
};

/** Binance DEX Order */
export type BinanceOrdersQuoteCurrencyArgs = {
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>;
};

/** Binance DEX Order */
export type BinanceOrdersTransactionArgs = {
  txHash?: Maybe<Array<HashSelector>>;
};

export enum BinanceOrdersMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Transaction hash */
  TX_HASH = 'tx_hash',
  /** Order owner */
  ORDER_OWNER = 'order_owner',
  /** Order status */
  ORDER_STATUS = 'order_status',
  /** Order ID */
  ORDER_ID = 'order_id',
  /** Order side */
  ORDER_SIDE = 'order_side',
  /** Base currency */
  BASE_CURRENCY = 'base_currency',
  /** Quote currency */
  QUOTE_CURRENCY = 'quote_currency',
  /** Quote Amount */
  QUOTE_AMOUNT = 'quote_amount',
  /** Base Amount */
  BASE_AMOUNT = 'base_amount',
  /** Price */
  PRICE = 'price',
}

export enum BinanceOrdersUniq {
  /** Unique Transactions */
  TXS = 'txs',
  /** Unique order owners */
  OWNERS = 'owners',
  /** Unique base currencies */
  BASE_CURRENCIES = 'base_currencies',
  /** Unique quote currencies */
  QUOTE_CURRENCIES = 'quote_currencies',
  /** Unique blocks */
  BLOCKS = 'blocks',
  /** Unique date count */
  DATES = 'dates',
  /** Unique order ID count */
  ORDERS = 'orders',
}

export type BinanceTradeFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  buyer?: Maybe<Array<BinanceAddressSelector>>;
  seller?: Maybe<Array<BinanceAddressSelector>>;
  sellOrderId?: Maybe<Array<OrderIdSelector>>;
  buyOrderId?: Maybe<Array<OrderIdSelector>>;
  tradeId?: Maybe<Array<TradeIdSelector>>;
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteAmount?: Maybe<Array<AmountSelector>>;
  baseAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
};

/** Binance DEX Trades */
export type BinanceTrades = {
  __typename?: 'BinanceTrades';
  any?: Maybe<Scalars['String']>;
  baseAmount?: Maybe<Scalars['Float']>;
  baseCurrency?: Maybe<Currency>;
  /** Block where trade transaction is included */
  block?: Maybe<Block>;
  /** Buy Order ID */
  buyOrderId?: Maybe<Scalars['String']>;
  /** Trade buyer address */
  buyer?: Maybe<Address>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  quoteAmount?: Maybe<Scalars['Float']>;
  quoteCurrency?: Maybe<Currency>;
  /** Sell Order ID */
  sellOrderId?: Maybe<Scalars['String']>;
  /** Trade seller address */
  seller?: Maybe<Address>;
  /** Trade ID */
  tradeId?: Maybe<Scalars['String']>;
  /** Transaction where trade happened */
  transaction?: Maybe<TransactionHashIndex>;
};

/** Binance DEX Trades */
export type BinanceTradesAnyArgs = {
  of: BinanceTradesMeasureable;
};

/** Binance DEX Trades */
export type BinanceTradesBaseAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  buyer?: Maybe<Array<BinanceAddressSelector>>;
  seller?: Maybe<Array<BinanceAddressSelector>>;
  sellOrderId?: Maybe<Array<OrderIdSelector>>;
  buyOrderId?: Maybe<Array<OrderIdSelector>>;
  tradeId?: Maybe<Array<TradeIdSelector>>;
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteAmount?: Maybe<Array<AmountSelector>>;
  baseAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
};

/** Binance DEX Trades */
export type BinanceTradesBaseCurrencyArgs = {
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>;
};

/** Binance DEX Trades */
export type BinanceTradesBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Binance DEX Trades */
export type BinanceTradesBuyOrderIdArgs = {
  buyOrderId?: Maybe<Array<OrderIdSelector>>;
};

/** Binance DEX Trades */
export type BinanceTradesBuyerArgs = {
  buyer?: Maybe<Array<BinanceAddressSelector>>;
};

/** Binance DEX Trades */
export type BinanceTradesCountArgs = {
  uniq?: Maybe<BinanceTradesUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  buyer?: Maybe<Array<BinanceAddressSelector>>;
  seller?: Maybe<Array<BinanceAddressSelector>>;
  sellOrderId?: Maybe<Array<OrderIdSelector>>;
  buyOrderId?: Maybe<Array<OrderIdSelector>>;
  tradeId?: Maybe<Array<TradeIdSelector>>;
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteAmount?: Maybe<Array<AmountSelector>>;
  baseAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
};

/** Binance DEX Trades */
export type BinanceTradesMaximumArgs = {
  of: BinanceTradesMeasureable;
  get?: Maybe<BinanceTradesMeasureable>;
};

/** Binance DEX Trades */
export type BinanceTradesMinimumArgs = {
  of: BinanceTradesMeasureable;
  get?: Maybe<BinanceTradesMeasureable>;
};

/** Binance DEX Trades */
export type BinanceTradesQuoteAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  buyer?: Maybe<Array<BinanceAddressSelector>>;
  seller?: Maybe<Array<BinanceAddressSelector>>;
  sellOrderId?: Maybe<Array<OrderIdSelector>>;
  buyOrderId?: Maybe<Array<OrderIdSelector>>;
  tradeId?: Maybe<Array<TradeIdSelector>>;
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteAmount?: Maybe<Array<AmountSelector>>;
  baseAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
};

/** Binance DEX Trades */
export type BinanceTradesQuoteCurrencyArgs = {
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>;
};

/** Binance DEX Trades */
export type BinanceTradesSellOrderIdArgs = {
  sellOrderId?: Maybe<Array<OrderIdSelector>>;
};

/** Binance DEX Trades */
export type BinanceTradesSellerArgs = {
  seller?: Maybe<Array<BinanceAddressSelector>>;
};

/** Binance DEX Trades */
export type BinanceTradesTradeIdArgs = {
  tradeId?: Maybe<Array<TradeIdSelector>>;
};

/** Binance DEX Trades */
export type BinanceTradesTransactionArgs = {
  txHash?: Maybe<Array<HashSelector>>;
};

export enum BinanceTradesMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Transaction hash */
  TX_HASH = 'tx_hash',
  /** Buyer */
  BUYER = 'buyer',
  /** Seller */
  SELLER = 'seller',
  /** Trade ID */
  TRADE_ID = 'trade_id',
  /** Buy Order ID */
  BUY_ORDER_ID = 'buy_order_id',
  /** Sell Order ID */
  SELL_ORDER_ID = 'sell_order_id',
  /** Base currency */
  BASE_CURRENCY = 'base_currency',
  /** Quote currency */
  QUOTE_CURRENCY = 'quote_currency',
  /** Quote Amount */
  QUOTE_AMOUNT = 'quote_amount',
  /** Base Amount */
  BASE_AMOUNT = 'base_amount',
  /** Price */
  PRICE = 'price',
}

export enum BinanceTradesUniq {
  /** Trades */
  TRADES = 'trades',
  /** Sell Orders */
  SELL_ORDERS = 'sell_orders',
  /** Buy Orders */
  BUY_ORDERS = 'buy_orders',
  /** Unique Transactions */
  TXS = 'txs',
  /** Unique buyers count */
  BUYERS = 'buyers',
  /** Unique sellers count */
  SELLERS = 'sellers',
  /** Unique base currencies */
  BASE_CURRENCIES = 'base_currencies',
  /** Unique quote currencies */
  QUOTE_CURRENCIES = 'quote_currencies',
  /** Unique blocks */
  BLOCKS = 'blocks',
  /** Unique date count */
  DATES = 'dates',
}

export type BinanceTransactionFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  transactionType?: Maybe<BinanceTransactionTypeSelector>;
  proposalId?: Maybe<StringIdSelector>;
  currency?: Maybe<Array<BinanceCurrencySelector>>;
  transactionCode?: Maybe<IntIdSelector>;
  transactionSource?: Maybe<IntIdSelector>;
  deposit?: Maybe<Array<AmountSelector>>;
};

export enum BinanceTransactionType {
  /** New Order */
  NEW_ORDER = 'NEW_ORDER',
  /** Cancel Order */
  CANCEL_ORDER = 'CANCEL_ORDER',
  /** Transfer */
  TRANSFER = 'TRANSFER',
  /** Vote */
  VOTE = 'VOTE',
  /** Unfreeze Token */
  UNFREEZE_TOKEN = 'UNFREEZE_TOKEN',
  /** Burn */
  BURN = 'BURN',
  /** Freeze Token */
  FREEZE_TOKEN = 'FREEZE_TOKEN',
  /** Submit Proposal */
  SUBMIT_PROPOSAL = 'SUBMIT_PROPOSAL',
  /** Listing */
  LISTING = 'LISTING',
  /** Issue */
  ISSUE = 'ISSUE',
  /** Deposit */
  DEPOSIT = 'DEPOSIT',
  /** Mint */
  MINT = 'MINT',
  /** Time Lock */
  TIME_LOCK = 'TimeLock',
  /** Time Unlock */
  TIME_UNLOCK = 'TimeUnlock',
  /** Time Relock */
  TIME_RELOCK = 'TimeRelock',
  /** Set Account Flag */
  SET_ACCOUNT_FLAG = 'SetAccountFlag',
  /** Hash Timer Locked Transfer */
  HTL_TRANSFER = 'HTL_TRANSFER',
  /** Hash Timer Locked Deposit */
  DEPOSIT_HTL = 'DEPOSIT_HTL',
  /** Hash Timer Locked Claim */
  CLAIM_HTL = 'CLAIM_HTL',
  /** Hash Timer Locked  Refund */
  REFUND_HTL = 'REFUND_HTL',
  /** Tiny Token Issue */
  TINY_TOKEN_ISSUE = 'TINY_TOKEN_ISSUE',
  /** Mini Token Issue */
  MINI_TOKEN_ISSUE = 'MINI_TOKEN_ISSUE',
  /** Tiny Token Listing */
  TINY_TOKEN_LIST = 'TINY_TOKEN_LIST',
  /** Mini Token Listing */
  MINI_TOKEN_LIST = 'MINI_TOKEN_LIST',
  /** Tiny Token Set URI */
  TINY_TOKEN_SET_URI = 'TINY_TOKEN_SET_URI',
  /** Mini Token Set URI */
  MINI_TOKEN_SET_URI = 'MINI_TOKEN_SET_URI',
  /** Create sidechain validator */
  CREATE_SIDECHAIN_VALIDATOR = 'CREATE_SIDECHAIN_VALIDATOR',
  /** Edit sidechain validator */
  EDIT_SIDECHAIN_VALIDATOR = 'EDIT_SIDECHAIN_VALIDATOR',
  /** Delegate for sidechain */
  SIDECHAIN_DELEGATE = 'SIDECHAIN_DELEGATE',
  /** ReDelegate for sidechain */
  SIDECHAIN_REDELEGATE = 'SIDECHAIN_REDELEGATE',
  /** Unbond from sidechain */
  SIDECHAIN_UNBOND = 'SIDECHAIN_UNBOND',
  /** Unjail from sidechain */
  SIDECHAIN_UNJAIL = 'SIDECHAIN_UNJAIL',
  /** Side chain submit poroposal */
  SIDE_SUBMIT_PROPOSAL = 'SIDE_SUBMIT_PROPOSAL',
  /** Side chain deposit */
  SIDE_DEPOSIT = 'SIDE_DEPOSIT',
  /** Side chain vote */
  SIDE_VOTE = 'SIDE_VOTE',
  /** Cross chain transfer */
  TRANSFER_OUT = 'TRANSFER_OUT',
  /** Submit evidence */
  BSC_SUBMIT_EVIDENCE = 'BSC_SUBMIT_EVIDENCE',
  /** Cross chain claim */
  CLAIM = 'CLAIM',
  /** Bind */
  BIND = 'BIND',
  /** UnBind */
  UNBIND = 'UNBIND',
}

/** Select by transaction type */
export type BinanceTransactionTypeSelector = {
  /** Transaction Type is */
  is?: Maybe<BinanceTransactionType>;
  /** Transaction Type not */
  not?: Maybe<BinanceTransactionType>;
  /** Transaction Type in the list */
  in?: Maybe<Array<BinanceTransactionType>>;
  /** Transaction Type not in the list */
  notIn?: Maybe<Array<BinanceTransactionType>>;
};

/** Transaction */
export type BinanceTransactions = {
  __typename?: 'BinanceTransactions';
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  count?: Maybe<Scalars['Int']>;
  /** Currency issued in transaction */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Deposit amount in transaction */
  deposit?: Maybe<Scalars['Float']>;
  /** Transaction Description */
  description?: Maybe<Scalars['String']>;
  /** Hash hex representation */
  hash: Scalars['String'];
  /** TX index in block, 0 based */
  index?: Maybe<Scalars['Int']>;
  /** Transaction Log */
  log?: Maybe<Scalars['String']>;
  maximum?: Maybe<Scalars['String']>;
  /** Transaction Memo */
  memo?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Proposal ID */
  proposalId?: Maybe<Scalars['Int']>;
  /** Transaction Type */
  transactionCode?: Maybe<Scalars['Int']>;
  /** Transaction Source */
  transactionSource?: Maybe<TransactionSource>;
  /** Transaction Type */
  transactionType?: Maybe<BinanceTransactionType>;
};

/** Transaction */
export type BinanceTransactionsAnyArgs = {
  of: BinanceTransactionsMeasureable;
};

/** Transaction */
export type BinanceTransactionsBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Transaction */
export type BinanceTransactionsCountArgs = {
  uniq?: Maybe<BinanceTransactionsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  transactionType?: Maybe<BinanceTransactionTypeSelector>;
  proposalId?: Maybe<StringIdSelector>;
  currency?: Maybe<Array<BinanceCurrencySelector>>;
  transactionCode?: Maybe<IntIdSelector>;
  transactionSource?: Maybe<IntIdSelector>;
  deposit?: Maybe<Array<AmountSelector>>;
};

/** Transaction */
export type BinanceTransactionsCurrencyArgs = {
  currency?: Maybe<Array<BinanceCurrencySelector>>;
};

/** Transaction */
export type BinanceTransactionsDepositArgs = {
  deposit?: Maybe<Array<AmountSelector>>;
};

/** Transaction */
export type BinanceTransactionsHashArgs = {
  txHash?: Maybe<Array<HashSelector>>;
};

/** Transaction */
export type BinanceTransactionsMaximumArgs = {
  of: BinanceTransactionsMeasureable;
  get?: Maybe<BinanceTransactionsMeasureable>;
};

/** Transaction */
export type BinanceTransactionsMinimumArgs = {
  of: BinanceTransactionsMeasureable;
  get?: Maybe<BinanceTransactionsMeasureable>;
};

/** Transaction */
export type BinanceTransactionsProposalIdArgs = {
  proposalId?: Maybe<Array<IntIdSelector>>;
};

/** Transaction */
export type BinanceTransactionsTransactionCodeArgs = {
  transactionCode?: Maybe<IntIdSelector>;
};

/** Transaction */
export type BinanceTransactionsTransactionSourceArgs = {
  transactionSource?: Maybe<IntIdSelector>;
};

/** Transaction */
export type BinanceTransactionsTransactionTypeArgs = {
  transactionType?: Maybe<Array<BinanceTransactionTypeSelector>>;
};

export enum BinanceTransactionsMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Transaction hash */
  TX_HASH = 'tx_hash',
  /** Transaction Source Name */
  TRANSACTION_SOURCE_NAME = 'transaction_source_name',
  /** Transaction Source Code */
  TRANSACTION_SOURCE_CODE = 'transaction_source_code',
  /** Transaction Code */
  TRANSACTION_CODE = 'transaction_code',
  /** Transaction Type */
  TRANSACTION_TYPE = 'transaction_type',
  /** Transaction Memo */
  TRANSACTION_MEMO = 'transaction_memo',
  /** Currency */
  CURRENCY_SYMBOL = 'currency_symbol',
}

export enum BinanceTransactionsUniq {
  /** Unique blocks */
  BLOCKS = 'blocks',
  /** Unique date count */
  DATES = 'dates',
  /** Unique transaction source count */
  TRANSACTION_SOURCES = 'transaction_sources',
}

export type BinanceTransferFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  sender?: Maybe<Array<BinanceAddressSelector>>;
  receiver?: Maybe<Array<BinanceAddressSelector>>;
  currency?: Maybe<Array<BinanceCurrencySelector>>;
  transferType?: Maybe<Array<BinanceTransferTypeSelector>>;
  orderId?: Maybe<Array<OrderIdSelector>>;
  tradeId?: Maybe<Array<TradeIdSelector>>;
  amount?: Maybe<Array<AmountSelector>>;
  outputIndex?: Maybe<Array<OutputIndexSelector>>;
};

export enum BinanceTransferType {
  /** Reward for block */
  BLOCK_REWARD = 'BLOCK_REWARD',
  /** Burning amount */
  BURN = 'BURN',
  /** Claiming Hash Timer Locked Transfer */
  CLAIM_HTL = 'CLAIM_HTL',
  /** Deposit for Hash Timer Locked Transfer */
  DEPOSIT_HTL = 'DEPOSIT_HTL',
  /** Fee for DEX orders */
  DEX_FEE = 'DEX_FEE',
  /** Genesis declaration */
  GENESIS_DELEGATION = 'GENESIS_DELEGATION',
  /** Genesis supply declaration */
  GENESIS_SUPPLY = 'GENESIS_SUPPLY',
  /** Tiny Token Issue */
  TINY_TOKEN_ISSUE = 'TINY_TOKEN_ISSUE',
  /** Mini Token Issue */
  MINI_TOKEN_ISSUE = 'MINI_TOKEN_ISSUE',
  /** Hash Timer Locked Transfer */
  HTL_TRANSFER = 'HTL_TRANSFER',
  /** Issue token */
  ISSUE = 'ISSUE',
  /** Mint token */
  MINT = 'MINT',
  /** Trade buy side */
  TRADE_BUY = 'TRADE_BUY',
  /** Trade sell side */
  TRADE_SELL = 'TRADE_SELL',
  /** Transfer */
  TRANSFER = 'TRANSFER',
  /** Transaction fee */
  TX_FEE = 'TX_FEE',
  /** Create sidechain validator */
  CREATE_SIDECHAIN_VALIDATOR = 'CREATE_SIDECHAIN_VALIDATOR',
  /** Edit sidechain validator */
  EDIT_SIDECHAIN_VALIDATOR = 'EDIT_SIDECHAIN_VALIDATOR',
  /** Delegate for sidechain */
  SIDECHAIN_DELEGATE = 'SIDECHAIN_DELEGATE',
  /** ReDelegate for sidechain */
  SIDECHAIN_REDELEGATE = 'SIDECHAIN_REDELEGATE',
  /** Unbond from sidechain */
  SIDECHAIN_UNBOND = 'SIDECHAIN_UNBOND',
  /** Side chain submit poroposal */
  SIDE_SUBMIT_PROPOSAL = 'SIDE_SUBMIT_PROPOSAL',
  /** Side chain deposit */
  SIDE_DEPOSIT = 'SIDE_DEPOSIT',
  /** Side chain vote */
  SIDE_VOTE = 'SIDE_VOTE',
  /** Cross chain transfer */
  TRANSFER_OUT = 'TRANSFER_OUT',
  /** Submit evidence */
  BSC_SUBMIT_EVIDENCE = 'BSC_SUBMIT_EVIDENCE',
  /** Cross chain claim */
  CLAIM = 'CLAIM',
  /** Bind */
  BIND = 'BIND',
  /** UnBind */
  UNBIND = 'UNBIND',
}

/** Select transfer type(s) */
export type BinanceTransferTypeSelector = {
  /** Transfer type is */
  is?: Maybe<BinanceTransferType>;
  /** Transfer type not */
  not?: Maybe<BinanceTransferType>;
  /** Transfer type in the list */
  in?: Maybe<Array<BinanceTransferType>>;
  /** Transfer type not in the list */
  notIn?: Maybe<Array<BinanceTransferType>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfers = {
  __typename?: 'BinanceTransfers';
  /** Transfer amount */
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  /** Transfer count */
  count?: Maybe<Scalars['Int']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Order Id of trade where transfer happened */
  orderId?: Maybe<Scalars['String']>;
  /** Index of the output for the transfer, 0-based */
  outputIndex?: Maybe<Scalars['Int']>;
  /** Transfer receiver */
  receiver?: Maybe<Address>;
  /** Transfer sender */
  sender?: Maybe<Address>;
  /** Id of trade where transfer happened */
  tradeId?: Maybe<Scalars['String']>;
  /** Transaction where transfer happened */
  transaction?: Maybe<TransactionHashIndex>;
  /** Transfer type */
  transferType?: Maybe<BinanceTransferType>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  sender?: Maybe<Array<BinanceAddressSelector>>;
  receiver?: Maybe<Array<BinanceAddressSelector>>;
  currency?: Maybe<Array<BinanceCurrencySelector>>;
  transferType?: Maybe<Array<BinanceTransferTypeSelector>>;
  orderId?: Maybe<Array<OrderIdSelector>>;
  tradeId?: Maybe<Array<TradeIdSelector>>;
  amount?: Maybe<Array<AmountSelector>>;
  outputIndex?: Maybe<Array<OutputIndexSelector>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersAnyArgs = {
  of: BinanceTransfersMeasureable;
};

/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersCountArgs = {
  uniq?: Maybe<TransfersUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  sender?: Maybe<Array<BinanceAddressSelector>>;
  receiver?: Maybe<Array<BinanceAddressSelector>>;
  currency?: Maybe<Array<BinanceCurrencySelector>>;
  transferType?: Maybe<Array<BinanceTransferTypeSelector>>;
  orderId?: Maybe<Array<OrderIdSelector>>;
  tradeId?: Maybe<Array<TradeIdSelector>>;
  amount?: Maybe<Array<AmountSelector>>;
  outputIndex?: Maybe<Array<OutputIndexSelector>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersCurrencyArgs = {
  currency?: Maybe<Array<BinanceCurrencySelector>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersMaximumArgs = {
  of: BinanceTransfersMeasureable;
  get?: Maybe<BinanceTransfersMeasureable>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersMinimumArgs = {
  of: BinanceTransfersMeasureable;
  get?: Maybe<BinanceTransfersMeasureable>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersOrderIdArgs = {
  orderId?: Maybe<Array<OrderIdSelector>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersOutputIndexArgs = {
  outputIndex?: Maybe<Array<OutputIndexSelector>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersReceiverArgs = {
  receiver?: Maybe<Array<BinanceAddressSelector>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersSenderArgs = {
  sender?: Maybe<Array<BinanceAddressSelector>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersTradeIdArgs = {
  tradeId?: Maybe<Array<TradeIdSelector>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersTransactionArgs = {
  txHash?: Maybe<Array<HashSelector>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersTransferTypeArgs = {
  transferType?: Maybe<Array<BinanceTransferTypeSelector>>;
};

export enum BinanceTransfersMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Transaction hash */
  TX_HASH = 'tx_hash',
  /** Amount */
  AMOUNT = 'amount',
  /** Sender */
  SENDER = 'sender',
  /** Receiver */
  RECEIVER = 'receiver',
  /** Currency symbol */
  CURRENCY_SYMBOL = 'currency_symbol',
}

/** Bitcoin and other UTXO type blockchains */
export type Bitcoin = {
  __typename?: 'Bitcoin';
  /** Blockchain Blocks */
  blocks?: Maybe<Array<BitcoinBlock>>;
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<BitcoinCoinpath>>;
  /** Blockchain Transaction Inputs */
  inputs?: Maybe<Array<BitcoinTransactionInput>>;
  /** Blockchain Transaction Outputs */
  outputs?: Maybe<Array<BitcoinTransactionOutput>>;
  /** Blockchain Transactions */
  transactions?: Maybe<Array<BitcoinTransaction>>;
};

/** Bitcoin and other UTXO type blockchains */
export type BitcoinBlocksArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<StringIdSelector>;
  blockSize?: Maybe<IntegerSelector>;
  blockWeight?: Maybe<IntegerSelector>;
  blockVersion?: Maybe<IntegerSelector>;
  transactionCount?: Maybe<IntegerSelector>;
  blockStrippedSize?: Maybe<IntegerSelector>;
  difficulty?: Maybe<FloatSelector>;
  any?: Maybe<Array<BitcoinBlockFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Bitcoin and other UTXO type blockchains */
export type BitcoinCoinpathArgs = {
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  initialAddress?: Maybe<AddressSelector>;
  initialDate?: Maybe<DateSelector>;
  initialTime?: Maybe<DateTimeSelector>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  depth?: Maybe<IntegerLimitedSelector>;
  options?: Maybe<BitcoinCoinpathOptions>;
};

/** Bitcoin and other UTXO type blockchains */
export type BitcoinInputsArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<IntegerSelector>;
  inputIndex?: Maybe<IntegerSelector>;
  inputAddress?: Maybe<AddressSelector>;
  inOutputTxId?: Maybe<HashSelector>;
  inOutputIndex?: Maybe<IntegerSelector>;
  inputScriptType?: Maybe<BitcoinInputScriptTypeSelector>;
  inputValue?: Maybe<FloatSelector>;
  any?: Maybe<Array<BitcoinInputFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Bitcoin and other UTXO type blockchains */
export type BitcoinOutputsArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<IntegerSelector>;
  outputIndex?: Maybe<IntegerSelector>;
  outputAddress?: Maybe<AddressSelector>;
  outputScriptType?: Maybe<BitcoinOutputScriptTypeSelector>;
  outputDirection?: Maybe<BitcoinOutputDirectionSelector>;
  outputValue?: Maybe<FloatSelector>;
  any?: Maybe<Array<BitcoinOutputFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Bitcoin and other UTXO type blockchains */
export type BitcoinTransactionsArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<IntegerSelector>;
  txSize?: Maybe<IntegerSelector>;
  txVsize?: Maybe<IntegerSelector>;
  txWeight?: Maybe<IntegerSelector>;
  txVersion?: Maybe<IntegerSelector>;
  txCoinbase?: Maybe<Scalars['Boolean']>;
  inputCount?: Maybe<IntegerSelector>;
  outputCount?: Maybe<IntegerSelector>;
  inputValue?: Maybe<FloatSelector>;
  outputValue?: Maybe<FloatSelector>;
  feeValue?: Maybe<FloatSelector>;
  minedValue?: Maybe<FloatSelector>;
  txLocktime?: Maybe<IntegerSelector>;
  any?: Maybe<Array<BitcoinTransactionFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Block */
export type BitcoinBlock = {
  __typename?: 'BitcoinBlock';
  any?: Maybe<Scalars['String']>;
  /** Block Hash */
  blockHash?: Maybe<Scalars['String']>;
  /** Block size */
  blockSize?: Maybe<Scalars['Int']>;
  /** Block stripped size */
  blockStrippedSize?: Maybe<Scalars['Int']>;
  /** Block version */
  blockVersion?: Maybe<Scalars['Int']>;
  /** Block weight */
  blockWeight?: Maybe<Scalars['Int']>;
  /** Block chainwork */
  chainwork?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Difficulty */
  difficulty?: Maybe<Scalars['Float']>;
  /** Block number (height) in blockchain */
  height: Scalars['Int'];
  maximum?: Maybe<Scalars['String']>;
  /** Block median timestamp */
  medianTime?: Maybe<DateTime>;
  minimum?: Maybe<Scalars['String']>;
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
  /** Transaction count in block */
  transactionCount?: Maybe<Scalars['Int']>;
};

/** Block */
export type BitcoinBlockAnyArgs = {
  of: BitcoinBlocksMeasureable;
};

/** Block */
export type BitcoinBlockBlockHashArgs = {
  blockHash?: Maybe<StringIdSelector>;
};

/** Block */
export type BitcoinBlockBlockSizeArgs = {
  blockSize?: Maybe<IntegerSelector>;
};

/** Block */
export type BitcoinBlockBlockStrippedSizeArgs = {
  blockStrippedSize?: Maybe<IntegerSelector>;
};

/** Block */
export type BitcoinBlockBlockVersionArgs = {
  blockVersion?: Maybe<IntegerSelector>;
};

/** Block */
export type BitcoinBlockBlockWeightArgs = {
  blockWeight?: Maybe<IntegerSelector>;
};

/** Block */
export type BitcoinBlockCountArgs = {
  uniq?: Maybe<BitcoinBlockUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<StringIdSelector>;
  blockSize?: Maybe<IntegerSelector>;
  blockWeight?: Maybe<IntegerSelector>;
  blockVersion?: Maybe<IntegerSelector>;
  txCount?: Maybe<IntegerSelector>;
  blockStrippedSize?: Maybe<IntegerSelector>;
  difficulty?: Maybe<FloatSelector>;
};

/** Block */
export type BitcoinBlockDifficultyArgs = {
  difficulty?: Maybe<FloatSelector>;
};

/** Block */
export type BitcoinBlockHeightArgs = {
  height?: Maybe<BlockSelector>;
};

/** Block */
export type BitcoinBlockMaximumArgs = {
  of: BitcoinBlocksMeasureable;
  get?: Maybe<BitcoinBlocksMeasureable>;
};

/** Block */
export type BitcoinBlockMinimumArgs = {
  of: BitcoinBlocksMeasureable;
  get?: Maybe<BitcoinBlocksMeasureable>;
};

/** Block */
export type BitcoinBlockTimestampArgs = {
  time?: Maybe<DateTimeSelector>;
};

/** Block */
export type BitcoinBlockTransactionCountArgs = {
  transactionCount?: Maybe<IntegerSelector>;
};

export type BitcoinBlockFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<StringIdSelector>;
  blockSize?: Maybe<IntegerSelector>;
  blockWeight?: Maybe<IntegerSelector>;
  blockVersion?: Maybe<IntegerSelector>;
  transactionCount?: Maybe<IntegerSelector>;
  blockStrippedSize?: Maybe<IntegerSelector>;
  difficulty?: Maybe<FloatSelector>;
};

export enum BitcoinBlockUniq {
  /** Unique date count */
  DATES = 'dates',
}

export enum BitcoinBlocksMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Block hash */
  BLOCK_HASH = 'block_hash',
  /** Tx Count */
  TRANSACTION_COUNT = 'transaction_count',
}

/** Coinpath */
export type BitcoinCoinpath = {
  __typename?: 'BitcoinCoinpath';
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Count of transfers */
  count?: Maybe<Scalars['Int']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Receiver address */
  receiver?: Maybe<Address>;
  /** Sender address */
  sender?: Maybe<Address>;
  /** Transaction of transfer happened */
  transaction?: Maybe<TransactionHashIndexValues>;
  /** Attributes of transaction included in Coinpath result */
  transactions?: Maybe<Array<CoinpathEntry>>;
};

/** Coinpath */
export type BitcoinCoinpathAmountArgs = {
  in?: Maybe<BaseCurrencyEnum>;
};

/** Coinpath */
export type BitcoinCoinpathAnyArgs = {
  of: CoinpathMeasureable;
};

/** Coinpath */
export type BitcoinCoinpathMaximumArgs = {
  of: CoinpathMeasureable;
  get?: Maybe<CoinpathMeasureable>;
};

/** Coinpath */
export type BitcoinCoinpathMinimumArgs = {
  of: CoinpathMeasureable;
  get?: Maybe<CoinpathMeasureable>;
};

export enum BitcoinCoinpathMethod {
  /** Tracking money flow by amounts, ignoring coins (default) */
  MONEYFLOW = 'moneyflow',
  /** Tracking coins by UTXO transactions */
  UTXO = 'utxo',
}

/** Limits, Ordering, Constraints, Coinpath Options */
export type BitcoinCoinpathOptions = {
  /** Limit number of results */
  limit?: Maybe<Scalars['Int']>;
  /** Limit number of results by specific field */
  limitBy?: Maybe<LimitByOption>;
  /** Offset of results, starting from 0 */
  offset?: Maybe<Scalars['Int']>;
  /** Ordering field(s) for ascending */
  asc?: Maybe<Array<Scalars['String']>>;
  /** Ordering field(s) for descending */
  desc?: Maybe<Array<Scalars['String']>>;
  /** Flow direction */
  direction?: Maybe<FlowDirection>;
  /** Do not include transactions below this amount */
  minimumTxAmount?: Maybe<Scalars['Float']>;
  /** Do not expand addresses having count transactions more than this */
  maximumAddressTxCount?: Maybe<Scalars['Int']>;
  /** Maximum total transaction count returned */
  maximumTotalTxCount?: Maybe<Scalars['Int']>;
  /** Raise error if complexity ( currently measured in transaction count ) is higher than this option */
  complexityLimit?: Maybe<Scalars['Int']>;
  /** Invalidating cache seed */
  seed?: Maybe<Scalars['Int']>;
  /** Method to use coinpath */
  coinpathMethod?: Maybe<BitcoinCoinpathMethod>;
};

export type BitcoinInputFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<IntegerSelector>;
  inputIndex?: Maybe<IntegerSelector>;
  inputAddress?: Maybe<AddressSelector>;
  inOutputTxId?: Maybe<HashSelector>;
  inOutputIndex?: Maybe<IntegerSelector>;
  inputScriptType?: Maybe<BitcoinInputScriptTypeSelector>;
  inputValue?: Maybe<FloatSelector>;
};

export enum BitcoinInputScriptType {
  /** Input Script Signature */
  SCRIPT_SIG = 'scriptSig',
  /** Input Script TX Witness Script */
  TXINWITNESS = 'txinwitness',
  /** Input Script Coinbase Script */
  COINBASE = 'coinbase',
}

/** Selector of input script type */
export type BitcoinInputScriptTypeSelector = {
  /** Equal to Script Type */
  is?: Maybe<BitcoinInputScriptType>;
  /** Not Equal to Script Type */
  not?: Maybe<BitcoinInputScriptType>;
  /** In the list of Script Type */
  in?: Maybe<Array<BitcoinInputScriptType>>;
  /** Not in the list of Script Type */
  notIn?: Maybe<Array<BitcoinInputScriptType>>;
};

export enum BitcoinInputUniq {
  /** Unique transactions count */
  TRANSACTIONS = 'transactions',
  /** Unique block count */
  BLOCKS = 'blocks',
  /** Unique date count */
  DATES = 'dates',
  /** Unique addresses count */
  ADDRESSES = 'addresses',
}

export enum BitcoinInputsMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Transaction hash */
  TX_HASH = 'tx_hash',
  /** Transaction index */
  TX_INDEX = 'tx_index',
  /** Amount */
  AMOUNT = 'amount',
  /** Address */
  ADDRESS = 'address',
  /** Input index */
  INPUT_INDEX = 'input_index',
}

export enum BitcoinNetwork {
  /** Bitcoin ( BTC ) */
  BITCOIN = 'bitcoin',
  /** Bitcoin Cash ( BCH ) */
  BITCASH = 'bitcash',
  /** Bitcoin SV ( BSV ) */
  BITCOINSV = 'bitcoinsv',
  /** Litecoin ( LTC ) */
  LITECOIN = 'litecoin',
  /** Dash ( DASH ) */
  DASH = 'dash',
  /** Dogecoin ( DOGE ) */
  DOGECOIN = 'dogecoin',
  /** Cardano ( ADA ) */
  CARDANO = 'cardano',
  /** ZCash ( ZCASH ) */
  ZCASH = 'zcash',
}

export enum BitcoinOutputDirection {
  /** Not defined */
  UNKNOWN = 'unknown',
  /** Not a change return */
  NOT_CHANGE = 'not_change',
  /** Change return */
  CHANGE = 'change',
  /** Likely Not a change return */
  LIKELY_NOT_CHANGE = 'likely_not_change',
  /** Likely Change return */
  LIKELY_CHANGE = 'likely_change',
  /** Mining */
  MINING = 'mining',
  /** Fee */
  FEE = 'fee',
  /** Minting */
  MINTING = 'minting',
  /** Genesis */
  GENESIS = 'genesis',
}

/** A guessed direction of output */
export type BitcoinOutputDirectionSelector = {
  /** Equal to direction */
  is?: Maybe<BitcoinOutputDirection>;
  /** Not Equal to direction */
  not?: Maybe<BitcoinOutputDirection>;
  /** In the list of direction */
  in?: Maybe<Array<BitcoinOutputDirection>>;
  /** Not in the list of direction */
  notIn?: Maybe<Array<BitcoinOutputDirection>>;
};

export type BitcoinOutputFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<IntegerSelector>;
  outputIndex?: Maybe<IntegerSelector>;
  outputAddress?: Maybe<AddressSelector>;
  outputScriptType?: Maybe<BitcoinOutputScriptTypeSelector>;
  outputDirection?: Maybe<BitcoinOutputDirectionSelector>;
  outputValue?: Maybe<FloatSelector>;
};

export enum BitcoinOutputScriptType {
  /** Output PubKey */
  PUBKEY = 'pubkey',
  /** Output PubKey Hash */
  PUBKEYHASH = 'pubkeyhash',
  /** Output Script Hash */
  SCRIPTHASH = 'scripthash',
  /** Output Witness Key Hash */
  WITNESS_V0_KEYHASH = 'witness_v0_keyhash',
  /** Output nulldata */
  NULLDATA = 'nulldata',
  /** Output Witness Script Hash */
  WITNESS_V0_SCRIPTHASH = 'witness_v0_scripthash',
  /** Non standard output script */
  NONSTANDARD = 'nonstandard',
  /** Output Multisignature Wallet */
  MULTISIG = 'multisig',
  /** Output Witness Other */
  WITNESS_UNKNOWN = 'witness_unknown',
}

/** Selector of output script type */
export type BitcoinOutputScriptTypeSelector = {
  /** Equal to Script Type */
  is?: Maybe<BitcoinOutputScriptType>;
  /** Not Equal to Script Type */
  not?: Maybe<BitcoinOutputScriptType>;
  /** In the list of Script Type */
  in?: Maybe<Array<BitcoinOutputScriptType>>;
  /** Not in the list of Script Type */
  notIn?: Maybe<Array<BitcoinOutputScriptType>>;
};

export enum BitcoinOutputUniq {
  /** Unique transactions count */
  TRANSACTIONS = 'transactions',
  /** Unique block count */
  BLOCKS = 'blocks',
  /** Unique date count */
  DATES = 'dates',
  /** Unique input addresses count */
  ADDRESSES = 'addresses',
}

export enum BitcoinOutputsMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Transaction hash */
  TX_HASH = 'tx_hash',
  /** Transaction index */
  TX_INDEX = 'tx_index',
  /** Amount */
  AMOUNT = 'amount',
  /** Address */
  ADDRESS = 'address',
  /** Output index */
  OUTPUT_INDEX = 'output_index',
}

/** Transaction */
export type BitcoinTransaction = {
  __typename?: 'BitcoinTransaction';
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Transaction  count */
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Transaction total fee value */
  feeValue?: Maybe<Scalars['Float']>;
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction index in block, 0-based */
  index: Scalars['String'];
  /** Transaction total input count */
  inputCount?: Maybe<Scalars['Int']>;
  /** Transaction total input value */
  inputValue?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  /** Transaction total mined value */
  minedValue?: Maybe<Scalars['Float']>;
  minimum?: Maybe<Scalars['String']>;
  /** Transaction total output count */
  outputCount?: Maybe<Scalars['Int']>;
  /** Transaction total output value */
  outputValue?: Maybe<Scalars['Float']>;
  /** Transaction is coinbase */
  txCoinbase?: Maybe<Scalars['Boolean']>;
  /** Transaction locktime */
  txLocktime?: Maybe<Scalars['BigInt']>;
  /** Transaction size */
  txSize?: Maybe<Scalars['Int']>;
  /** Transaction version */
  txVersion?: Maybe<Scalars['Int']>;
  /** Transaction vsize */
  txVsize?: Maybe<Scalars['Int']>;
  /** Transaction weight */
  txWeight?: Maybe<Scalars['Int']>;
};

/** Transaction */
export type BitcoinTransactionAnyArgs = {
  of: BitcoinTransactionsMeasureable;
};

/** Transaction */
export type BitcoinTransactionBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Transaction */
export type BitcoinTransactionCountArgs = {
  uniq?: Maybe<BitcoinTransactionUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<IntegerSelector>;
  txSize?: Maybe<IntegerSelector>;
  txVsize?: Maybe<IntegerSelector>;
  txWeight?: Maybe<IntegerSelector>;
  txVersion?: Maybe<IntegerSelector>;
  txCoinbase?: Maybe<Scalars['Boolean']>;
  inputCount?: Maybe<IntegerSelector>;
  outputCount?: Maybe<IntegerSelector>;
  inputValue?: Maybe<FloatSelector>;
  outputValue?: Maybe<FloatSelector>;
  feeValue?: Maybe<FloatSelector>;
  minedValue?: Maybe<FloatSelector>;
  txLocktime?: Maybe<IntegerSelector>;
};

/** Transaction */
export type BitcoinTransactionFeeValueArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<IntegerSelector>;
  txSize?: Maybe<IntegerSelector>;
  txVsize?: Maybe<IntegerSelector>;
  txWeight?: Maybe<IntegerSelector>;
  txVersion?: Maybe<IntegerSelector>;
  txCoinbase?: Maybe<Scalars['Boolean']>;
  inputCount?: Maybe<IntegerSelector>;
  outputCount?: Maybe<IntegerSelector>;
  inputValue?: Maybe<FloatSelector>;
  outputValue?: Maybe<FloatSelector>;
  feeValue?: Maybe<FloatSelector>;
  minedValue?: Maybe<FloatSelector>;
  txLocktime?: Maybe<IntegerSelector>;
};

/** Transaction */
export type BitcoinTransactionHashArgs = {
  txHash?: Maybe<StringIdSelector>;
};

/** Transaction */
export type BitcoinTransactionIndexArgs = {
  txIndex?: Maybe<IntegerSelector>;
};

/** Transaction */
export type BitcoinTransactionInputCountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<IntegerSelector>;
  txSize?: Maybe<IntegerSelector>;
  txVsize?: Maybe<IntegerSelector>;
  txWeight?: Maybe<IntegerSelector>;
  txVersion?: Maybe<IntegerSelector>;
  txCoinbase?: Maybe<Scalars['Boolean']>;
  inputCount?: Maybe<IntegerSelector>;
  outputCount?: Maybe<IntegerSelector>;
  inputValue?: Maybe<FloatSelector>;
  outputValue?: Maybe<FloatSelector>;
  feeValue?: Maybe<FloatSelector>;
  minedValue?: Maybe<FloatSelector>;
  txLocktime?: Maybe<IntegerSelector>;
};

/** Transaction */
export type BitcoinTransactionInputValueArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<IntegerSelector>;
  txSize?: Maybe<IntegerSelector>;
  txVsize?: Maybe<IntegerSelector>;
  txWeight?: Maybe<IntegerSelector>;
  txVersion?: Maybe<IntegerSelector>;
  txCoinbase?: Maybe<Scalars['Boolean']>;
  inputCount?: Maybe<IntegerSelector>;
  outputCount?: Maybe<IntegerSelector>;
  inputValue?: Maybe<FloatSelector>;
  outputValue?: Maybe<FloatSelector>;
  feeValue?: Maybe<FloatSelector>;
  minedValue?: Maybe<FloatSelector>;
  txLocktime?: Maybe<IntegerSelector>;
};

/** Transaction */
export type BitcoinTransactionMaximumArgs = {
  of: BitcoinTransactionsMeasureable;
  get?: Maybe<BitcoinTransactionsMeasureable>;
};

/** Transaction */
export type BitcoinTransactionMinedValueArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<IntegerSelector>;
  txSize?: Maybe<IntegerSelector>;
  txVsize?: Maybe<IntegerSelector>;
  txWeight?: Maybe<IntegerSelector>;
  txVersion?: Maybe<IntegerSelector>;
  txCoinbase?: Maybe<Scalars['Boolean']>;
  inputCount?: Maybe<IntegerSelector>;
  outputCount?: Maybe<IntegerSelector>;
  inputValue?: Maybe<FloatSelector>;
  outputValue?: Maybe<FloatSelector>;
  feeValue?: Maybe<FloatSelector>;
  minedValue?: Maybe<FloatSelector>;
  txLocktime?: Maybe<IntegerSelector>;
};

/** Transaction */
export type BitcoinTransactionMinimumArgs = {
  of: BitcoinTransactionsMeasureable;
  get?: Maybe<BitcoinTransactionsMeasureable>;
};

/** Transaction */
export type BitcoinTransactionOutputCountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<IntegerSelector>;
  txSize?: Maybe<IntegerSelector>;
  txVsize?: Maybe<IntegerSelector>;
  txWeight?: Maybe<IntegerSelector>;
  txVersion?: Maybe<IntegerSelector>;
  txCoinbase?: Maybe<Scalars['Boolean']>;
  inputCount?: Maybe<IntegerSelector>;
  outputCount?: Maybe<IntegerSelector>;
  inputValue?: Maybe<FloatSelector>;
  outputValue?: Maybe<FloatSelector>;
  feeValue?: Maybe<FloatSelector>;
  minedValue?: Maybe<FloatSelector>;
  txLocktime?: Maybe<IntegerSelector>;
};

/** Transaction */
export type BitcoinTransactionOutputValueArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<IntegerSelector>;
  txSize?: Maybe<IntegerSelector>;
  txVsize?: Maybe<IntegerSelector>;
  txWeight?: Maybe<IntegerSelector>;
  txVersion?: Maybe<IntegerSelector>;
  txCoinbase?: Maybe<Scalars['Boolean']>;
  inputCount?: Maybe<IntegerSelector>;
  outputCount?: Maybe<IntegerSelector>;
  inputValue?: Maybe<FloatSelector>;
  outputValue?: Maybe<FloatSelector>;
  feeValue?: Maybe<FloatSelector>;
  minedValue?: Maybe<FloatSelector>;
  txLocktime?: Maybe<IntegerSelector>;
};

/** Transaction */
export type BitcoinTransactionTxCoinbaseArgs = {
  txCoinbase?: Maybe<Scalars['Boolean']>;
};

/** Transaction */
export type BitcoinTransactionTxLocktimeArgs = {
  txLocktime?: Maybe<IntegerSelector>;
};

/** Transaction */
export type BitcoinTransactionTxSizeArgs = {
  txSize?: Maybe<IntegerSelector>;
};

/** Transaction */
export type BitcoinTransactionTxVersionArgs = {
  txVersion?: Maybe<IntegerSelector>;
};

/** Transaction */
export type BitcoinTransactionTxVsizeArgs = {
  txVsize?: Maybe<IntegerSelector>;
};

/** Transaction */
export type BitcoinTransactionTxWeightArgs = {
  txWeight?: Maybe<IntegerSelector>;
};

export type BitcoinTransactionFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<IntegerSelector>;
  txSize?: Maybe<IntegerSelector>;
  txVsize?: Maybe<IntegerSelector>;
  txWeight?: Maybe<IntegerSelector>;
  txVersion?: Maybe<IntegerSelector>;
  txCoinbase?: Maybe<Scalars['Boolean']>;
  inputCount?: Maybe<IntegerSelector>;
  outputCount?: Maybe<IntegerSelector>;
  inputValue?: Maybe<FloatSelector>;
  outputValue?: Maybe<FloatSelector>;
  feeValue?: Maybe<FloatSelector>;
  minedValue?: Maybe<FloatSelector>;
  txLocktime?: Maybe<IntegerSelector>;
};

/** Transaction Input */
export type BitcoinTransactionInput = {
  __typename?: 'BitcoinTransactionInput';
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Input count */
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Input address */
  inputAddress?: Maybe<Address>;
  /** Input index */
  inputIndex?: Maybe<Scalars['Int']>;
  /** Input script */
  inputScript?: Maybe<Scalars['String']>;
  /** Input script type and attributes */
  inputScriptType?: Maybe<InputScript>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Output Transaction for this input */
  outputTransaction?: Maybe<TransactionHashIndex>;
  /** Transaction ID Hash */
  transaction?: Maybe<TransactionHashIndex>;
  /** Input value */
  value?: Maybe<Scalars['Float']>;
};

/** Transaction Input */
export type BitcoinTransactionInputAnyArgs = {
  of: BitcoinInputsMeasureable;
};

/** Transaction Input */
export type BitcoinTransactionInputBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Transaction Input */
export type BitcoinTransactionInputInputAddressArgs = {
  inputAddress?: Maybe<AddressSelector>;
};

/** Transaction Input */
export type BitcoinTransactionInputInputIndexArgs = {
  inputIndex?: Maybe<IntegerSelector>;
};

/** Transaction Input */
export type BitcoinTransactionInputInputScriptTypeArgs = {
  inputScriptType?: Maybe<BitcoinInputScriptTypeSelector>;
};

/** Transaction Input */
export type BitcoinTransactionInputMaximumArgs = {
  of: BitcoinInputsMeasureable;
  get?: Maybe<BitcoinInputsMeasureable>;
};

/** Transaction Input */
export type BitcoinTransactionInputMinimumArgs = {
  of: BitcoinInputsMeasureable;
  get?: Maybe<BitcoinInputsMeasureable>;
};

/** Transaction Input */
export type BitcoinTransactionInputOutputTransactionArgs = {
  inOutputTxId?: Maybe<StringIdSelector>;
  inOutputIndex?: Maybe<IntegerSelector>;
};

/** Transaction Input */
export type BitcoinTransactionInputTransactionArgs = {
  txId?: Maybe<StringIdSelector>;
  txIndex?: Maybe<IntegerSelector>;
};

/** Transaction Output */
export type BitcoinTransactionOutput = {
  __typename?: 'BitcoinTransactionOutput';
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Output count */
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Output address */
  outputAddress?: Maybe<Address>;
  /** Output guessed direction */
  outputDirection?: Maybe<BitcoinOutputDirection>;
  /** Output index */
  outputIndex?: Maybe<Scalars['Int']>;
  /** Output script */
  outputScript?: Maybe<Scalars['String']>;
  /** Output script type and attributes */
  outputScriptType?: Maybe<OutputScript>;
  reqSigs?: Maybe<Scalars['Int']>;
  /** Transaction ID Hash */
  transaction?: Maybe<TransactionHashIndex>;
  /** Output value */
  value?: Maybe<Scalars['Float']>;
};

/** Transaction Output */
export type BitcoinTransactionOutputAnyArgs = {
  of: BitcoinOutputsMeasureable;
};

/** Transaction Output */
export type BitcoinTransactionOutputBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Transaction Output */
export type BitcoinTransactionOutputMaximumArgs = {
  of: BitcoinOutputsMeasureable;
  get?: Maybe<BitcoinOutputsMeasureable>;
};

/** Transaction Output */
export type BitcoinTransactionOutputMinimumArgs = {
  of: BitcoinOutputsMeasureable;
  get?: Maybe<BitcoinOutputsMeasureable>;
};

/** Transaction Output */
export type BitcoinTransactionOutputOutputAddressArgs = {
  outputAddress?: Maybe<AddressSelector>;
};

/** Transaction Output */
export type BitcoinTransactionOutputOutputDirectionArgs = {
  outputDirection?: Maybe<BitcoinOutputDirectionSelector>;
};

/** Transaction Output */
export type BitcoinTransactionOutputOutputIndexArgs = {
  outputIndex?: Maybe<IntegerSelector>;
};

/** Transaction Output */
export type BitcoinTransactionOutputOutputScriptTypeArgs = {
  inputScriptType?: Maybe<BitcoinOutputScriptTypeSelector>;
};

/** Transaction Output */
export type BitcoinTransactionOutputTransactionArgs = {
  txId?: Maybe<StringIdSelector>;
  txIndex?: Maybe<IntegerSelector>;
};

export enum BitcoinTransactionUniq {
  /** Unique block count */
  BLOCKS = 'blocks',
  /** Unique date count */
  DATES = 'dates',
}

export enum BitcoinTransactionsMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Transaction hash */
  TX_HASH = 'tx_hash',
  /** Transaction index */
  TX_INDEX = 'tx_index',
  /** Input count */
  INPUT_COUNT = 'input_count',
  /** Output count */
  OUTPUT_COUNT = 'output_count',
  /** Transaction size */
  TX_SIZE = 'tx_size',
  /** Transaction input value */
  INPUT_VALUE = 'input_value',
  /** Transaction output value */
  OUTPUT_VALUE = 'output_value',
}

/** Block */
export type Block = {
  __typename?: 'Block';
  /** Block number (height) in blockchain */
  height: Scalars['Int'];
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
};

/** BlockExtended */
export type BlockExtended = {
  __typename?: 'BlockExtended';
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Block number (height) in blockchain */
  height: Scalars['Int'];
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
};

/** ConfluxBlock */
export type BlockInfo = {
  __typename?: 'BlockInfo';
  /** Block hash */
  hash?: Maybe<Scalars['String']>;
  /** Block number (height) in blockchain */
  height: Scalars['Int'];
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
};

/** Select block by height ( sequence number) */
export type BlockSelector = {
  /** Block height is */
  is?: Maybe<Scalars['Int']>;
  /** Block height not */
  not?: Maybe<Scalars['Int']>;
  /** Block height in the list */
  in?: Maybe<Array<Scalars['Int']>>;
  /** Block height not in the list */
  notIn?: Maybe<Array<Scalars['Int']>>;
  /** Block height greater than */
  gt?: Maybe<Scalars['Int']>;
  /** Block height less than */
  lt?: Maybe<Scalars['Int']>;
  /** Block height less or equal than */
  lteq?: Maybe<Scalars['Int']>;
  /** Block height greater or equal than */
  gteq?: Maybe<Scalars['Int']>;
  /** Block height in range */
  between?: Maybe<Array<Scalars['Int']>>;
};

/** Select block by height ( sequence number) */
export type BlockSelectorRange = {
  /** Block height less or equal than */
  lteq?: Maybe<Scalars['Int']>;
  /** Block height greater or equal than */
  gteq?: Maybe<Scalars['Int']>;
  /** Block height in range */
  between?: Maybe<Array<Scalars['Int']>>;
};

/** Blockchain network */
export type BlockchainNetwork = {
  __typename?: 'BlockchainNetwork';
  /** Network name */
  network: Network;
  /** Network protocol type */
  protocol: Protocol;
};

/** Transaction attributes in coinpath */
export type CoinpathEntry = {
  __typename?: 'CoinpathEntry';
  /** Amount involved in the flow */
  amount: Scalars['Float'];
  /** Block of transaction */
  height: Scalars['Int'];
  /** Time of transaction in ISO 8601 format */
  timestamp: Scalars['ISO8601DateTime'];
  /** Hash of transaction */
  txHash: Scalars['String'];
  /** Amount transfered in transaction */
  txValue: Scalars['Float'];
};

export enum CoinpathMeasureable {
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Transaction hash */
  TX_HASH = 'tx_hash',
  /** Sender */
  SENDER = 'sender',
  /** Receiver */
  RECEIVER = 'receiver',
  /** Depth */
  DEPTH = 'depth',
}

/** Limits, Ordering, Constraints, Coinpath Options */
export type CoinpathOptions = {
  /** Limit number of results */
  limit?: Maybe<Scalars['Int']>;
  /** Limit number of results by specific field */
  limitBy?: Maybe<LimitByOption>;
  /** Offset of results, starting from 0 */
  offset?: Maybe<Scalars['Int']>;
  /** Ordering field(s) for ascending */
  asc?: Maybe<Array<Scalars['String']>>;
  /** Ordering field(s) for descending */
  desc?: Maybe<Array<Scalars['String']>>;
  /** Flow direction */
  direction?: Maybe<FlowDirection>;
  /** Do not include transactions below this amount */
  minimumTxAmount?: Maybe<Scalars['Float']>;
  /** Do not expand addresses having count transactions more than this */
  maximumAddressTxCount?: Maybe<Scalars['Int']>;
  /** Maximum total transaction count returned */
  maximumTotalTxCount?: Maybe<Scalars['Int']>;
  /** Raise error if complexity ( currently measured in transaction count ) is higher than this option */
  complexityLimit?: Maybe<Scalars['Int']>;
  /** Invalidating cache seed */
  seed?: Maybe<Scalars['Int']>;
};

/** Conflux Chain */
export type Conflux = {
  __typename?: 'Conflux';
  /** Basic information about address ( or smart contract ) */
  address: Array<EthereumAddressInfoWithBalance>;
  /** Arguments of Smart Contract Calls and Events */
  arguments?: Maybe<Array<EthereumArguments>>;
  /** Blockchain Blocks */
  blocks?: Maybe<Array<ConfluxBlocks>>;
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<EthereumCoinpath>>;
  /** Trades on Ethereum DEX Smart Contracts */
  dexTrades?: Maybe<Array<EthereumDexTrades>>;
  /** Smart Contract Calls */
  smartContractCalls?: Maybe<Array<EthereumSmartContractCalls>>;
  /** Smart Contract Events */
  smartContractEvents?: Maybe<Array<EthereumSmartContractEvent>>;
  /** Blockchain Transactions */
  transactions?: Maybe<Array<ConfluxTransactions>>;
  /** Currency Transfers */
  transfers?: Maybe<Array<EthereumTransfers>>;
};

/** Conflux Chain */
export type ConfluxAddressArgs = {
  address: Array<EthereumAddressSelectorIn>;
};

/** Conflux Chain */
export type ConfluxArgumentsArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  caller?: Maybe<Array<EthereumAddressSelector>>;
  reference?: Maybe<Array<EthereumAddressSelector>>;
  value?: Maybe<Array<ArgumentValueSelector>>;
  argument?: Maybe<Array<ArgumentSelector>>;
  argumentType?: Maybe<Array<ArgumentTypeSelector>>;
  signatureType?: Maybe<SignatureTypeSelector>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: Maybe<MethodSelector>;
  smartContractEvent?: Maybe<EventSelector>;
  external?: Maybe<Scalars['Boolean']>;
  any?: Maybe<Array<EthereumArgumentFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Conflux Chain */
export type ConfluxBlocksArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  epoch?: Maybe<BlockSelector>;
  pivot?: Maybe<Scalars['Boolean']>;
  blockHash?: Maybe<HashSelector>;
  referenceBlockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  refereeCount?: Maybe<Array<IntegerSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
  any?: Maybe<Array<ConfluxBlockFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Conflux Chain */
export type ConfluxCoinpathArgs = {
  sender?: Maybe<EthereumAddressSelector>;
  receiver?: Maybe<EthereumAddressSelector>;
  currency?: Maybe<Array<EthereumCurrencySelector>>;
  initialAddress?: Maybe<EthereumAddressSelector>;
  initialDate?: Maybe<DateSelector>;
  initialTime?: Maybe<DateTimeSelector>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  depth?: Maybe<IntegerLimitedSelector>;
  options?: Maybe<CoinpathOptions>;
};

/** Conflux Chain */
export type ConfluxDexTradesArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  protocol?: Maybe<Array<StringSelector>>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeName?: Maybe<Array<StringSelector>>;
  sellCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  buyCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  baseCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  quoteCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  maker?: Maybe<Array<EthereumAddressSelector>>;
  makerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>;
  taker?: Maybe<Array<EthereumAddressSelector>>;
  takerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>;
  makerOrTaker?: Maybe<Array<EthereumAddressSelector>>;
  tradeIndex?: Maybe<Array<StringSelector>>;
  buyAmount?: Maybe<Array<AmountSelector>>;
  sellAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
  priceAsymmetry?: Maybe<Array<FloatSelector>>;
  tradeAmountUsd?: Maybe<Array<FloatSelector>>;
  any?: Maybe<Array<EthereumDexTradeFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Conflux Chain */
export type ConfluxSmartContractCallsArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  caller?: Maybe<Array<EthereumAddressSelector>>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: Maybe<MethodSelector>;
  smartContractType?: Maybe<SmartContractTypeSelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Array<Scalars['Boolean']>>;
  any?: Maybe<Array<EthereumSmartContractCallFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Conflux Chain */
export type ConfluxSmartContractEventsArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  smartContractType?: Maybe<SmartContractTypeSelector>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractEvent?: Maybe<EventSelector>;
  any?: Maybe<Array<EthereumSmartContractEventFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Conflux Chain */
export type ConfluxTransactionsArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  txCreates?: Maybe<Array<EthereumAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  blockHash?: Maybe<HashSelector>;
  any?: Maybe<Array<ConfluxTransactionFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Conflux Chain */
export type ConfluxTransfersArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  entityId?: Maybe<EntitySelector>;
  sender?: Maybe<Array<EthereumAddressSelector>>;
  receiver?: Maybe<Array<EthereumAddressSelector>>;
  currency?: Maybe<Array<EthereumCurrencySelector>>;
  external?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  any?: Maybe<Array<EthereumTransferFilter>>;
  options?: Maybe<QueryOptions>;
};

export type ConfluxBlockFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  epoch?: Maybe<BlockSelector>;
  pivot?: Maybe<Scalars['Boolean']>;
  blockHash?: Maybe<HashSelector>;
  referenceBlockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  refereeCount?: Maybe<Array<IntegerSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
};

/** Blocks in Conflux blockchain */
export type ConfluxBlocks = {
  __typename?: 'ConfluxBlocks';
  /** Block is adaptive */
  adaptive: Scalars['Boolean'];
  any?: Maybe<Scalars['String']>;
  /** Blame */
  blame: Scalars['Int'];
  /** Block index in epoch */
  blockPosition: Scalars['Int'];
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Epoch in blockchain */
  epoch: Scalars['Int'];
  /** Block hash */
  hash: Scalars['String'];
  /** Block height in blockchain */
  height: Scalars['Int'];
  maximum?: Maybe<Scalars['String']>;
  /** Block miner */
  miner?: Maybe<EthereumAddressInfo>;
  minimum?: Maybe<Scalars['String']>;
  /** Block nonce */
  nonce: Scalars['Int'];
  /** Parent block hash */
  parentHash: Scalars['String'];
  /** Block is pivot */
  pivot: Scalars['Boolean'];
  /** Power Quality */
  powerQuality: Scalars['BigInt'];
  refereeCount?: Maybe<Scalars['Int']>;
  /** Reference Block hash */
  referenceBlockHash: Scalars['String'];
  size?: Maybe<Scalars['Int']>;
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
  totalDifficulty?: Maybe<Scalars['Float']>;
  transactionCount?: Maybe<Scalars['Int']>;
  /** Hash of Transaction included in block */
  txHash: Scalars['String'];
  uncleCount?: Maybe<Scalars['Int']>;
};

/** Blocks in Conflux blockchain */
export type ConfluxBlocksAnyArgs = {
  of: ConfluxBlocksMeasureable;
};

/** Blocks in Conflux blockchain */
export type ConfluxBlocksCountArgs = {
  uniq?: Maybe<EthereumBlocksUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  epoch?: Maybe<BlockSelector>;
  pivot?: Maybe<Scalars['Boolean']>;
  blockHash?: Maybe<HashSelector>;
  referenceBlockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  refereeCount?: Maybe<Array<IntegerSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
};

/** Blocks in Conflux blockchain */
export type ConfluxBlocksEpochArgs = {
  height?: Maybe<BlockSelector>;
};

/** Blocks in Conflux blockchain */
export type ConfluxBlocksHashArgs = {
  blockHash?: Maybe<Array<HashSelector>>;
};

/** Blocks in Conflux blockchain */
export type ConfluxBlocksHeightArgs = {
  height?: Maybe<BlockSelector>;
};

/** Blocks in Conflux blockchain */
export type ConfluxBlocksMaximumArgs = {
  of: ConfluxBlocksMeasureable;
  get?: Maybe<ConfluxBlocksMeasureable>;
};

/** Blocks in Conflux blockchain */
export type ConfluxBlocksMinerArgs = {
  miner?: Maybe<Array<EthereumAddressSelector>>;
};

/** Blocks in Conflux blockchain */
export type ConfluxBlocksMinimumArgs = {
  of: ConfluxBlocksMeasureable;
  get?: Maybe<ConfluxBlocksMeasureable>;
};

/** Blocks in Conflux blockchain */
export type ConfluxBlocksRefereeCountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  epoch?: Maybe<BlockSelector>;
  pivot?: Maybe<Scalars['Boolean']>;
  blockHash?: Maybe<HashSelector>;
  referenceBlockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  refereeCount?: Maybe<Array<IntegerSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
};

/** Blocks in Conflux blockchain */
export type ConfluxBlocksReferenceBlockHashArgs = {
  referenceBlockHash?: Maybe<Array<HashSelector>>;
};

/** Blocks in Conflux blockchain */
export type ConfluxBlocksSizeArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  epoch?: Maybe<BlockSelector>;
  pivot?: Maybe<Scalars['Boolean']>;
  blockHash?: Maybe<HashSelector>;
  referenceBlockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  refereeCount?: Maybe<Array<IntegerSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
};

/** Blocks in Conflux blockchain */
export type ConfluxBlocksTimestampArgs = {
  time?: Maybe<DateTimeSelector>;
};

/** Blocks in Conflux blockchain */
export type ConfluxBlocksTotalDifficultyArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  epoch?: Maybe<BlockSelector>;
  pivot?: Maybe<Scalars['Boolean']>;
  blockHash?: Maybe<HashSelector>;
  referenceBlockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  refereeCount?: Maybe<Array<IntegerSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
};

/** Blocks in Conflux blockchain */
export type ConfluxBlocksTransactionCountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  epoch?: Maybe<BlockSelector>;
  pivot?: Maybe<Scalars['Boolean']>;
  blockHash?: Maybe<HashSelector>;
  referenceBlockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  refereeCount?: Maybe<Array<IntegerSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
};

/** Blocks in Conflux blockchain */
export type ConfluxBlocksTxHashArgs = {
  txHash?: Maybe<Array<HashSelector>>;
};

/** Blocks in Conflux blockchain */
export type ConfluxBlocksUncleCountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  epoch?: Maybe<BlockSelector>;
  pivot?: Maybe<Scalars['Boolean']>;
  blockHash?: Maybe<HashSelector>;
  referenceBlockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  refereeCount?: Maybe<Array<IntegerSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
};

export enum ConfluxBlocksMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Block hash */
  BLOCK_HASH = 'block_hash',
  /** Block Miner */
  MINER = 'miner',
  /** Block Referee Count */
  REFEREE_COUNT = 'referee_count',
  /** Block TX Count */
  TRANSACTION_COUNT = 'transaction_count',
}

export enum ConfluxNetwork {
  /** Conflux Oceanus */
  CONFLUX_OCEANUS = 'conflux_oceanus',
  /** Conflux Tethys */
  CONFLUX_TETHYS = 'conflux_tethys',
}

export type ConfluxTransactionFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  txCreates?: Maybe<Array<EthereumAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  blockHash?: Maybe<HashSelector>;
};

/** Transactions in Conflux blockchain */
export type ConfluxTransactions = {
  __typename?: 'ConfluxTransactions';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<BlockInfo>;
  count?: Maybe<Scalars['Int']>;
  /** Created smart contract */
  creates?: Maybe<EthereumAddressInfo>;
  /** Currency of amount */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Error message if any */
  error?: Maybe<Scalars['String']>;
  gas?: Maybe<Scalars['Int']>;
  /** Currency of gas */
  gasCurrency?: Maybe<Currency>;
  /** Gas price in Gwei */
  gasPrice: Scalars['Float'];
  gasValue?: Maybe<Scalars['Float']>;
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction index in block, 0 based */
  index?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Transaction nonce */
  nonce?: Maybe<Scalars['Int']>;
  /** Transaction sender */
  sender?: Maybe<EthereumAddressInfo>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  /** Transaction receiver */
  to?: Maybe<EthereumAddressInfo>;
};

/** Transactions in Conflux blockchain */
export type ConfluxTransactionsAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  txCreates?: Maybe<Array<EthereumAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  blockHash?: Maybe<HashSelector>;
};

/** Transactions in Conflux blockchain */
export type ConfluxTransactionsAnyArgs = {
  of: ConfluxTransactionsMeasureable;
};

/** Transactions in Conflux blockchain */
export type ConfluxTransactionsBlockArgs = {
  blockHash?: Maybe<HashSelector>;
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Transactions in Conflux blockchain */
export type ConfluxTransactionsCountArgs = {
  uniq?: Maybe<EthereumTransactionsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  txCreates?: Maybe<Array<EthereumAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  blockHash?: Maybe<HashSelector>;
};

/** Transactions in Conflux blockchain */
export type ConfluxTransactionsCreatesArgs = {
  txCreates?: Maybe<Array<EthereumAddressSelector>>;
};

/** Transactions in Conflux blockchain */
export type ConfluxTransactionsGasArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  txCreates?: Maybe<Array<EthereumAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  blockHash?: Maybe<HashSelector>;
};

/** Transactions in Conflux blockchain */
export type ConfluxTransactionsGasCurrencyArgs = {
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>;
};

/** Transactions in Conflux blockchain */
export type ConfluxTransactionsGasPriceArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  txCreates?: Maybe<Array<EthereumAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  blockHash?: Maybe<HashSelector>;
};

/** Transactions in Conflux blockchain */
export type ConfluxTransactionsGasValueArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  txCreates?: Maybe<Array<EthereumAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  blockHash?: Maybe<HashSelector>;
};

/** Transactions in Conflux blockchain */
export type ConfluxTransactionsHashArgs = {
  txHash?: Maybe<Array<HashSelector>>;
};

/** Transactions in Conflux blockchain */
export type ConfluxTransactionsIndexArgs = {
  txIndex?: Maybe<Array<TxIndexSelector>>;
};

/** Transactions in Conflux blockchain */
export type ConfluxTransactionsMaximumArgs = {
  of: ConfluxTransactionsMeasureable;
  get?: Maybe<ConfluxTransactionsMeasureable>;
};

/** Transactions in Conflux blockchain */
export type ConfluxTransactionsMinimumArgs = {
  of: ConfluxTransactionsMeasureable;
  get?: Maybe<ConfluxTransactionsMeasureable>;
};

/** Transactions in Conflux blockchain */
export type ConfluxTransactionsSenderArgs = {
  txSender?: Maybe<Array<EthereumAddressSelector>>;
};

/** Transactions in Conflux blockchain */
export type ConfluxTransactionsSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>;
};

/** Transactions in Conflux blockchain */
export type ConfluxTransactionsToArgs = {
  txTo?: Maybe<Array<EthereumAddressSelector>>;
};

export enum ConfluxTransactionsMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Transaction hash */
  TX_HASH = 'tx_hash',
  /** Amount */
  AMOUNT = 'amount',
  /** Transaction Sender */
  TX_SENDER = 'tx_sender',
  /** Gas value */
  GAS_VALUE = 'gas_value',
  /** Gas price */
  GAS_PRICE = 'gas_price',
  /** Gas used */
  GAS = 'gas',
}

export enum Continent {
  /** Africa */
  AFRICA = 'Africa',
  /** Asia */
  ASIA = 'Asia',
  /** Europe */
  EUROPE = 'Europe',
  /** North America */
  NORTH_AMERICA = 'North_America',
  /** Oceania */
  OCEANIA = 'Oceania',
  /** South America */
  SOUTH_AMERICA = 'South_America',
  /** Antarctica */
  ANTARCTICA = 'Antarctica',
}

/** Continent selector */
export type ContinentSelector = {
  /** Country code is */
  is?: Maybe<Continent>;
  /** Country code not */
  not?: Maybe<Continent>;
  /** Country code in the list */
  in?: Maybe<Array<Continent>>;
  /** Country code not in the list */
  notIn?: Maybe<Array<Continent>>;
};

export enum CountryCode {
  /** Afghanistan */
  AF = 'AF',
  /** Albania */
  AL = 'AL',
  /** Algeria */
  DZ = 'DZ',
  /** American Samoa */
  AS = 'AS',
  /** Andorra */
  AD = 'AD',
  /** Angola */
  AO = 'AO',
  /** Anguilla */
  AI = 'AI',
  /** Antarctica */
  AQ = 'AQ',
  /** Antigua and Barbuda */
  AG = 'AG',
  /** Argentina */
  AR = 'AR',
  /** Armenia */
  AM = 'AM',
  /** Aruba */
  AW = 'AW',
  /** Australia */
  AU = 'AU',
  /** Austria */
  AT = 'AT',
  /** Azerbaijan */
  AZ = 'AZ',
  /** Bahamas */
  BS = 'BS',
  /** Bahrain */
  BH = 'BH',
  /** Bangladesh */
  BD = 'BD',
  /** Barbados */
  BB = 'BB',
  /** Belarus */
  BY = 'BY',
  /** Belgium */
  BE = 'BE',
  /** Belize */
  BZ = 'BZ',
  /** Benin */
  BJ = 'BJ',
  /** Bermuda */
  BM = 'BM',
  /** Bhutan */
  BT = 'BT',
  /** Bolivia */
  BO = 'BO',
  /** Bosnia and Herzegovina */
  BA = 'BA',
  /** Botswana */
  BW = 'BW',
  /** Brazil */
  BR = 'BR',
  /** British Indian Ocean Territory */
  IO = 'IO',
  /** British Virgin Islands */
  VG = 'VG',
  /** Brunei */
  BN = 'BN',
  /** Bulgaria */
  BG = 'BG',
  /** Burkina Faso */
  BF = 'BF',
  /** Burundi */
  BI = 'BI',
  /** Cambodia */
  KH = 'KH',
  /** Cameroon */
  CM = 'CM',
  /** Canada */
  CA = 'CA',
  /** Cape Verde */
  CV = 'CV',
  /** Cayman Islands */
  KY = 'KY',
  /** Central African Republic */
  CF = 'CF',
  /** Chad */
  TD = 'TD',
  /** Chile */
  CL = 'CL',
  /** China */
  CN = 'CN',
  /** Christmas Island */
  CX = 'CX',
  /** Cocos Islands */
  CC = 'CC',
  /** Colombia */
  CO = 'CO',
  /** Comoros */
  KM = 'KM',
  /** Cook Islands */
  CK = 'CK',
  /** Costa Rica */
  CR = 'CR',
  /** Croatia */
  HR = 'HR',
  /** Cuba */
  CU = 'CU',
  /** Curacao */
  CW = 'CW',
  /** Cyprus */
  CY = 'CY',
  /** Czech Republic */
  CZ = 'CZ',
  /** Democratic Republic of the Congo */
  CD = 'CD',
  /** Denmark */
  DK = 'DK',
  /** Djibouti */
  DJ = 'DJ',
  /** Dominica */
  DM = 'DM',
  /** Dominican Republic */
  DO = 'DO',
  /** East Timor */
  TL = 'TL',
  /** Ecuador */
  EC = 'EC',
  /** Egypt */
  EG = 'EG',
  /** El Salvador */
  SV = 'SV',
  /** Equatorial Guinea */
  GQ = 'GQ',
  /** Eritrea */
  ER = 'ER',
  /** Estonia */
  EE = 'EE',
  /** Ethiopia */
  ET = 'ET',
  /** Falkland Islands */
  FK = 'FK',
  /** Faroe Islands */
  FO = 'FO',
  /** Fiji */
  FJ = 'FJ',
  /** Finland */
  FI = 'FI',
  /** France */
  FR = 'FR',
  /** French Polynesia */
  PF = 'PF',
  /** Gabon */
  GA = 'GA',
  /** Gambia */
  GM = 'GM',
  /** Georgia */
  GE = 'GE',
  /** Germany */
  DE = 'DE',
  /** Ghana */
  GH = 'GH',
  /** Gibraltar */
  GI = 'GI',
  /** Greece */
  GR = 'GR',
  /** Greenland */
  GL = 'GL',
  /** Grenada */
  GD = 'GD',
  /** Guam */
  GU = 'GU',
  /** Guatemala */
  GT = 'GT',
  /** Guernsey */
  GG = 'GG',
  /** Guinea */
  GN = 'GN',
  /** Guinea-Bissau */
  GW = 'GW',
  /** Guyana */
  GY = 'GY',
  /** Haiti */
  HT = 'HT',
  /** Honduras */
  HN = 'HN',
  /** Hong Kong */
  HK = 'HK',
  /** Hungary */
  HU = 'HU',
  /** Iceland */
  IS = 'IS',
  /** India */
  IN = 'IN',
  /** Indonesia */
  ID = 'ID',
  /** Iran */
  IR = 'IR',
  /** Iraq */
  IQ = 'IQ',
  /** Ireland */
  IE = 'IE',
  /** Isle of Man */
  IM = 'IM',
  /** Israel */
  IL = 'IL',
  /** Italy */
  IT = 'IT',
  /** Ivory Coast */
  CI = 'CI',
  /** Jamaica */
  JM = 'JM',
  /** Japan */
  JP = 'JP',
  /** Jersey */
  JE = 'JE',
  /** Jordan */
  JO = 'JO',
  /** Kazakhstan */
  KZ = 'KZ',
  /** Kenya */
  KE = 'KE',
  /** Kiribati */
  KI = 'KI',
  /** Kosovo */
  XK = 'XK',
  /** Kuwait */
  KW = 'KW',
  /** Kyrgyzstan */
  KG = 'KG',
  /** Laos */
  LA = 'LA',
  /** Latvia */
  LV = 'LV',
  /** Lebanon */
  LB = 'LB',
  /** Lesotho */
  LS = 'LS',
  /** Liberia */
  LR = 'LR',
  /** Libya */
  LY = 'LY',
  /** Liechtenstein */
  LI = 'LI',
  /** Lithuania */
  LT = 'LT',
  /** Luxembourg */
  LU = 'LU',
  /** Macau */
  MO = 'MO',
  /** Macedonia */
  MK = 'MK',
  /** Madagascar */
  MG = 'MG',
  /** Malawi */
  MW = 'MW',
  /** Malaysia */
  MY = 'MY',
  /** Maldives */
  MV = 'MV',
  /** Mali */
  ML = 'ML',
  /** Malta */
  MT = 'MT',
  /** Marshall Islands */
  MH = 'MH',
  /** Mauritania */
  MR = 'MR',
  /** Mauritius */
  MU = 'MU',
  /** Mayotte */
  YT = 'YT',
  /** Mexico */
  MX = 'MX',
  /** Micronesia */
  FM = 'FM',
  /** Moldova */
  MD = 'MD',
  /** Monaco */
  MC = 'MC',
  /** Mongolia */
  MN = 'MN',
  /** Montenegro */
  ME = 'ME',
  /** Montserrat */
  MS = 'MS',
  /** Morocco */
  MA = 'MA',
  /** Mozambique */
  MZ = 'MZ',
  /** Myanmar */
  MM = 'MM',
  /** Namibia */
  NA = 'NA',
  /** Nauru */
  NR = 'NR',
  /** Nepal */
  NP = 'NP',
  /** Netherlands */
  NL = 'NL',
  /** Netherlands Antilles */
  AN = 'AN',
  /** New Caledonia */
  NC = 'NC',
  /** New Zealand */
  NZ = 'NZ',
  /** Nicaragua */
  NI = 'NI',
  /** Niger */
  NE = 'NE',
  /** Nigeria */
  NG = 'NG',
  /** Niue */
  NU = 'NU',
  /** North Korea */
  KP = 'KP',
  /** Northern Mariana Islands */
  MP = 'MP',
  /** Norway */
  NO = 'NO',
  /** Oman */
  OM = 'OM',
  /** Pakistan */
  PK = 'PK',
  /** Palau */
  PW = 'PW',
  /** Palestine */
  PS = 'PS',
  /** Panama */
  PA = 'PA',
  /** Papua New Guinea */
  PG = 'PG',
  /** Paraguay */
  PY = 'PY',
  /** Peru */
  PE = 'PE',
  /** Philippines */
  PH = 'PH',
  /** Pitcairn */
  PN = 'PN',
  /** Poland */
  PL = 'PL',
  /** Portugal */
  PT = 'PT',
  /** Puerto Rico */
  PR = 'PR',
  /** Qatar */
  QA = 'QA',
  /** Republic of the Congo */
  CG = 'CG',
  /** Reunion */
  RE = 'RE',
  /** Romania */
  RO = 'RO',
  /** Russia */
  RU = 'RU',
  /** Rwanda */
  RW = 'RW',
  /** Saint Barthelemy */
  BL = 'BL',
  /** Saint Helena */
  SH = 'SH',
  /** Saint Kitts and Nevis */
  KN = 'KN',
  /** Saint Lucia */
  LC = 'LC',
  /** Saint Martin */
  MF = 'MF',
  /** Saint Pierre and Miquelon */
  PM = 'PM',
  /** Saint Vincent and the Grenadines */
  VC = 'VC',
  /** Samoa */
  WS = 'WS',
  /** San Marino */
  SM = 'SM',
  /** Sao Tome and Principe */
  ST = 'ST',
  /** Saudi Arabia */
  SA = 'SA',
  /** Senegal */
  SN = 'SN',
  /** Serbia */
  RS = 'RS',
  /** Seychelles */
  SC = 'SC',
  /** Sierra Leone */
  SL = 'SL',
  /** Singapore */
  SG = 'SG',
  /** Sint Maarten */
  SX = 'SX',
  /** Slovakia */
  SK = 'SK',
  /** Slovenia */
  SI = 'SI',
  /** Solomon Islands */
  SB = 'SB',
  /** Somalia */
  SO = 'SO',
  /** South Africa */
  ZA = 'ZA',
  /** South Korea */
  KR = 'KR',
  /** South Sudan */
  SS = 'SS',
  /** Spain */
  ES = 'ES',
  /** Sri Lanka */
  LK = 'LK',
  /** Sudan */
  SD = 'SD',
  /** Suriname */
  SR = 'SR',
  /** Svalbard and Jan Mayen */
  SJ = 'SJ',
  /** Swaziland */
  SZ = 'SZ',
  /** Sweden */
  SE = 'SE',
  /** Switzerland */
  CH = 'CH',
  /** Syria */
  SY = 'SY',
  /** Taiwan */
  TW = 'TW',
  /** Tajikistan */
  TJ = 'TJ',
  /** Tanzania */
  TZ = 'TZ',
  /** Thailand */
  TH = 'TH',
  /** Togo */
  TG = 'TG',
  /** Tokelau */
  TK = 'TK',
  /** Tonga */
  TO = 'TO',
  /** Trinidad and Tobago */
  TT = 'TT',
  /** Tunisia */
  TN = 'TN',
  /** Turkey */
  TR = 'TR',
  /** Turkmenistan */
  TM = 'TM',
  /** Turks and Caicos Islands */
  TC = 'TC',
  /** Tuvalu */
  TV = 'TV',
  /** U.S. Virgin Islands */
  VI = 'VI',
  /** Uganda */
  UG = 'UG',
  /** Ukraine */
  UA = 'UA',
  /** United Arab Emirates */
  AE = 'AE',
  /** United Kingdom */
  GB = 'GB',
  /** United States */
  US = 'US',
  /** Uruguay */
  UY = 'UY',
  /** Uzbekistan */
  UZ = 'UZ',
  /** Vanuatu */
  VU = 'VU',
  /** Vatican */
  VA = 'VA',
  /** Venezuela */
  VE = 'VE',
  /** Vietnam */
  VN = 'VN',
  /** Wallis and Futuna */
  WF = 'WF',
  /** Western Sahara */
  EH = 'EH',
  /** Yemen */
  YE = 'YE',
  /** Zambia */
  ZM = 'ZM',
  /** Zimbabwe */
  ZW = 'ZW',
}

/** Country selector by 3 digit ISO code */
export type CountrySelector = {
  /** Country code is */
  is?: Maybe<CountryCode>;
  /** Country code not */
  not?: Maybe<CountryCode>;
  /** Country code in the list */
  in?: Maybe<Array<CountryCode>>;
  /** Country code not in the list */
  notIn?: Maybe<Array<CountryCode>>;
};

/** Country */
export type CovidCountry = {
  __typename?: 'CovidCountry';
  /** Area, km2 */
  areaKm2?: Maybe<Scalars['Float']>;
  /** Continent name */
  continent?: Maybe<Continent>;
  /** Gross Domestic Product */
  gdp?: Maybe<Scalars['Float']>;
  /** ISO 2 letter code */
  iso2?: Maybe<CountryCode>;
  /** ISO 3 letter code */
  iso3?: Maybe<Scalars['String']>;
  /** ISO numeric code */
  isoNumeric?: Maybe<Scalars['Int']>;
  /** Location latitude */
  latitude?: Maybe<Scalars['Float']>;
  /** Location longitude */
  longitude?: Maybe<Scalars['Float']>;
  /** Country name */
  name?: Maybe<Scalars['String']>;
  /** Population density in thousands per km2 */
  populationPerKm2?: Maybe<Scalars['Float']>;
  /** Population total in thousands */
  populationTotal?: Maybe<Scalars['Float']>;
};

/** Facts of Covid virus development */
export type CovidFact = {
  __typename?: 'CovidFact';
  /** Count of confirmed cases */
  confirmed?: Maybe<Scalars['Int']>;
  /** Country */
  country?: Maybe<CovidCountry>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Count of death cases */
  deaths?: Maybe<Scalars['Int']>;
  /** Location */
  location?: Maybe<CovidLocation>;
  /** Count of recovered cases */
  recovered?: Maybe<Scalars['Int']>;
};

/** Facts of Covid virus development */
export type CovidFactConfirmedArgs = {
  date?: Maybe<DateSelector>;
  country?: Maybe<CountrySelector>;
  continent?: Maybe<ContinentSelector>;
};

/** Facts of Covid virus development */
export type CovidFactCountryArgs = {
  country?: Maybe<CountrySelector>;
  continent?: Maybe<ContinentSelector>;
};

/** Facts of Covid virus development */
export type CovidFactDeathsArgs = {
  date?: Maybe<DateSelector>;
  country?: Maybe<CountrySelector>;
  continent?: Maybe<ContinentSelector>;
};

/** Facts of Covid virus development */
export type CovidFactRecoveredArgs = {
  date?: Maybe<DateSelector>;
  country?: Maybe<CountrySelector>;
  continent?: Maybe<ContinentSelector>;
};

/** Covid History */
export type CovidHistory = {
  __typename?: 'CovidHistory';
  /** COVID daily facts */
  facts?: Maybe<Array<CovidFact>>;
};

/** Covid History */
export type CovidHistoryFactsArgs = {
  date?: Maybe<DateSelector>;
  country?: Maybe<CountrySelector>;
  continent?: Maybe<ContinentSelector>;
  options?: Maybe<QueryOptions>;
};

/** Geo Location */
export type CovidLocation = {
  __typename?: 'CovidLocation';
  /** Admin center name */
  adminCenter?: Maybe<Scalars['String']>;
  /** FIPS code for USA */
  fipsCode?: Maybe<Scalars['Int']>;
  /** Location latitude */
  latitude?: Maybe<Scalars['Float']>;
  /** Location longitude */
  longitude?: Maybe<Scalars['Float']>;
  /** Location Country name */
  name?: Maybe<Scalars['String']>;
  /** Location Province / State name */
  province?: Maybe<Scalars['String']>;
};

/** Crypto currency ( token, coin, currency ) */
export type Currency = {
  __typename?: 'Currency';
  /** Token Smart Contract Address */
  address?: Maybe<Scalars['String']>;
  /** Decimals */
  decimals: Scalars['Int'];
  /** Currency name */
  name?: Maybe<Scalars['String']>;
  /** Currency symbol */
  symbol: Scalars['String'];
  /** Token ID */
  tokenId?: Maybe<Scalars['String']>;
  /** Token Type */
  tokenType?: Maybe<Scalars['String']>;
};

/** Date */
export type Date = {
  __typename?: 'Date';
  /** String date representation with default format as YYYY-MM-DD */
  date: Scalars['String'];
  /** Day of month (1-31) */
  dayOfMonth: Scalars['Int'];
  /** Day of week  (Monday is 1, and Sunday is 7) */
  dayOfWeek: Scalars['Int'];
  /** Month number (1-12) */
  month: Scalars['Int'];
  /**
   * Returns start of date interval ,
   *     date representation with default format as YYYY-MM-DD. Example is start of interval for 3 weeks each,
   *   starting on wednesdays will read as: 'startOfInterval(unit: week, interval: 3, offset: 2)'
   */
  startOfInterval: Scalars['String'];
  /** Year number */
  year: Scalars['Int'];
};

/** Date */
export type DateDateArgs = {
  format?: Maybe<Scalars['String']>;
};

/** Date */
export type DateStartOfIntervalArgs = {
  format?: Maybe<Scalars['String']>;
  interval?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  unit: DateInterval;
};

export enum DateInterval {
  /** Year */
  YEAR = 'year',
  /** Month */
  MONTH = 'month',
  /** Week */
  WEEK = 'week',
  /** Day */
  DAY = 'day',
}

/** Selecting the date in a range, list or just date */
export type DateSelector = {
  /** Since date */
  since?: Maybe<Scalars['ISO8601DateTime']>;
  /** Till date */
  till?: Maybe<Scalars['ISO8601DateTime']>;
  /** Range of dates */
  between?: Maybe<Array<Scalars['ISO8601DateTime']>>;
  /** Before date */
  before?: Maybe<Scalars['ISO8601DateTime']>;
  /** After date */
  after?: Maybe<Scalars['ISO8601DateTime']>;
  /** In dates */
  in?: Maybe<Array<Scalars['ISO8601DateTime']>>;
  /** Not in dates */
  notIn?: Maybe<Array<Scalars['ISO8601DateTime']>>;
  /** Date equals */
  is?: Maybe<Scalars['ISO8601DateTime']>;
  /** Date not equals */
  not?: Maybe<Scalars['ISO8601DateTime']>;
};

/** Date and Time */
export type DateTime = {
  __typename?: 'DateTime';
  /** Day of month (1-31) */
  dayOfMonth: Scalars['Int'];
  /** Day of week  (Monday is 1, and Sunday is 7) */
  dayOfWeek: Scalars['Int'];
  /** Hour (0-23) */
  hour: Scalars['Int'];
  /** ISO8601 date time such as '2020-03-02T13:30:41+00:00' */
  iso8601: Scalars['ISO8601DateTime'];
  /** Minute (0-59) */
  minute: Scalars['Int'];
  /** Month number (1-12) */
  month: Scalars['Int'];
  /** Second (0-59) */
  second: Scalars['Int'];
  /** String date representation with default format as YYYY-MM-DD */
  time: Scalars['String'];
  /** Unix timestamp */
  unixtime: Scalars['Int'];
  /** Year number */
  year: Scalars['Int'];
};

/** Date and Time */
export type DateTimeTimeArgs = {
  format?: Maybe<Scalars['String']>;
};

/** Selecting the time in a range, list or just time */
export type DateTimeSelector = {
  /** Since time */
  since?: Maybe<Scalars['ISO8601DateTime']>;
  /** Till time */
  till?: Maybe<Scalars['ISO8601DateTime']>;
  /** Range of time */
  between?: Maybe<Array<Scalars['ISO8601DateTime']>>;
  /** Before time */
  before?: Maybe<Scalars['ISO8601DateTime']>;
  /** After time */
  after?: Maybe<Scalars['ISO8601DateTime']>;
  /** In times */
  in?: Maybe<Array<Scalars['ISO8601DateTime']>>;
  /** Not in times */
  notIn?: Maybe<Array<Scalars['ISO8601DateTime']>>;
  /** Time equals */
  is?: Maybe<Scalars['ISO8601DateTime']>;
  /** Time not equals */
  not?: Maybe<Scalars['ISO8601DateTime']>;
};

export enum DiemNetwork {
  /** Diem Testnet */
  DIEM_TESTNET = 'diem_testnet',
  /** Libra Testnet */
  LIBRA_TESTNET = 'libra_testnet',
}

/** Entity */
export type Entity = {
  __typename?: 'Entity';
  /** Entity ID */
  id: Scalars['String'];
  /** Entity number */
  num: Scalars['Int'];
  /** Entity realm ID */
  realmId: Scalars['Int'];
  /** Entity shard ID */
  shardId: Scalars['Int'];
  /** Entity Type */
  type: Scalars['String'];
};

/** Entity */
export type EntityIdArgs = {
  entityId?: Maybe<Scalars['String']>;
};

/** Selector of entity ID for NFT  tokens */
export type EntitySelector = {
  /** EntityID is */
  is?: Maybe<Scalars['String']>;
  /** EntityID not */
  not?: Maybe<Scalars['String']>;
  /** EntityID in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** EntityID not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
};

export enum EntityTypeEnum {
  /** account */
  ACCOUNT = 'account',
  /** contract */
  CONTRACT = 'contract',
  /** file */
  FILE = 'file',
  /** topic */
  TOPIC = 'topic',
  /** token */
  TOKEN = 'token',
  /** schedule */
  SCHEDULE = 'schedule',
}

/** Select by entity type */
export type EntityTypeSelector = {
  /** Type is */
  is?: Maybe<EntityTypeEnum>;
  /** Type not */
  not?: Maybe<EntityTypeEnum>;
  /** Type in the list */
  in?: Maybe<Array<EntityTypeEnum>>;
  /** Type not in the list */
  notIn?: Maybe<Array<EntityTypeEnum>>;
};

/** EOS Chain */
export type Eos = {
  __typename?: 'Eos';
  /** Basic information about address ( or smart contract ) */
  address: Array<EosAddressInfo>;
  /** Blockchain Blocks */
  blocks?: Maybe<Array<EosBlocks>>;
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<EosCoinpath>>;
  /** Smart Contract Calls */
  smartContractCalls?: Maybe<Array<EosSmartContractCalls>>;
  /** Blockchain Transactions */
  transactions?: Maybe<Array<EosTransactions>>;
  /** Currency Transfers */
  transfers?: Maybe<Array<EosTransfers>>;
};

/** EOS Chain */
export type EosAddressArgs = {
  address: Array<AddressSelectorIn>;
};

/** EOS Chain */
export type EosBlocksArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  proposer?: Maybe<AddressSelector>;
  any?: Maybe<Array<EosBlockFilter>>;
  options?: Maybe<QueryOptions>;
};

/** EOS Chain */
export type EosCoinpathArgs = {
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<EosCurrencySelector>;
  initialAddress?: Maybe<AddressSelector>;
  initialDate?: Maybe<DateSelector>;
  initialTime?: Maybe<DateTimeSelector>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  depth?: Maybe<IntegerLimitedSelector>;
  options?: Maybe<CoinpathOptions>;
};

/** EOS Chain */
export type EosSmartContractCallsArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  smartContractAddress?: Maybe<AddressSelector>;
  smartContractMethod?: Maybe<MethodSelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
  scheduled?: Maybe<Scalars['Boolean']>;
  any?: Maybe<Array<EosSmartContractCallFilter>>;
  options?: Maybe<QueryOptions>;
};

/** EOS Chain */
export type EosTransactionsArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  scheduled?: Maybe<Scalars['Boolean']>;
  any?: Maybe<Array<EosTransactionFilter>>;
  options?: Maybe<QueryOptions>;
};

/** EOS Chain */
export type EosTransfersArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<EosCurrencySelector>;
  entityId?: Maybe<EntitySelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  any?: Maybe<Array<EosTransferFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Address detailed information for EOS network */
export type EosAddressInfo = {
  __typename?: 'EosAddressInfo';
  /** String address representation */
  address: Scalars['String'];
  /** Annotations ( tags ), if exists */
  annotation?: Maybe<Scalars['String']>;
  /** Smart Contract if exists on the address */
  smartContract?: Maybe<EosSmartContractInfo>;
};

export type EosBlockFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  proposer?: Maybe<AddressSelector>;
};

/** Blocks in EOS blockchain */
export type EosBlocks = {
  __typename?: 'EosBlocks';
  any?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Block hash */
  hash: Scalars['String'];
  /** Block number (height) in blockchain */
  height: Scalars['Int'];
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Block producer */
  producer?: Maybe<Address>;
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
};

/** Blocks in EOS blockchain */
export type EosBlocksAnyArgs = {
  of: EosBlocksMeasureable;
};

/** Blocks in EOS blockchain */
export type EosBlocksCountArgs = {
  uniq?: Maybe<EosBlocksUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  proposer?: Maybe<AddressSelector>;
};

/** Blocks in EOS blockchain */
export type EosBlocksHashArgs = {
  blockHash?: Maybe<Array<HashSelector>>;
};

/** Blocks in EOS blockchain */
export type EosBlocksHeightArgs = {
  height?: Maybe<BlockSelector>;
};

/** Blocks in EOS blockchain */
export type EosBlocksMaximumArgs = {
  of: EosBlocksMeasureable;
  get?: Maybe<EosBlocksMeasureable>;
};

/** Blocks in EOS blockchain */
export type EosBlocksMinimumArgs = {
  of: EosBlocksMeasureable;
  get?: Maybe<EosBlocksMeasureable>;
};

/** Blocks in EOS blockchain */
export type EosBlocksProducerArgs = {
  producer?: Maybe<AddressSelector>;
};

/** Blocks in EOS blockchain */
export type EosBlocksTimestampArgs = {
  time?: Maybe<DateTimeSelector>;
};

export enum EosBlocksMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Block hash */
  BLOCK_HASH = 'block_hash',
  /** Block Proposer */
  PROPOSER = 'proposer',
}

export enum EosBlocksUniq {
  /** Unique proposer count */
  PROPOSERS = 'proposers',
  /** Unique date count */
  DATES = 'dates',
}

export enum EosCallsMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Transaction hash */
  TX_HASH = 'tx_hash',
  /** Sender */
  TX_SENDER = 'tx_sender',
  /** Action From */
  TX_FROM = 'tx_from',
  /** Action To */
  TX_TO = 'tx_to',
  /** Smart Contract */
  SMART_CONTRACT = 'smart_contract',
  /** Smart Contract Method Name */
  SIGNATURE_NAME = 'signature_name',
  /** Smart Contract Method Signature */
  SIGNATURE = 'signature',
  /** Smart Contract Method Signature Hash */
  SIGNATURE_HASH = 'signature_hash',
  /** Call depth */
  CALL_DEPTH = 'call_depth',
}

/** Coinpath */
export type EosCoinpath = {
  __typename?: 'EosCoinpath';
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Count of transfers */
  count?: Maybe<Scalars['Int']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Receiver address */
  receiver?: Maybe<EosAddressInfo>;
  /** Sender address */
  sender?: Maybe<EosAddressInfo>;
  /** Transaction of transfer happened */
  transaction?: Maybe<TransactionHashValue>;
};

/** Coinpath */
export type EosCoinpathAmountArgs = {
  in?: Maybe<BaseCurrencyEnum>;
};

/** Coinpath */
export type EosCoinpathAnyArgs = {
  of: CoinpathMeasureable;
};

/** Coinpath */
export type EosCoinpathMaximumArgs = {
  of: CoinpathMeasureable;
  get?: Maybe<CoinpathMeasureable>;
};

/** Coinpath */
export type EosCoinpathMinimumArgs = {
  of: CoinpathMeasureable;
  get?: Maybe<CoinpathMeasureable>;
};

/**
 * Currency selector in EOS blockchain.
 * Token identified by address of contract ( eosio.token for main EOS token )
 */
export type EosCurrencySelector = {
  /** Currency is */
  is?: Maybe<Scalars['String']>;
  /** Currency not */
  not?: Maybe<Scalars['String']>;
  /** Currency in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** Currency not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
};

/** Eos smart contract */
export type EosSmartContract = {
  __typename?: 'EosSmartContract';
  /** Smart Contract Address */
  address: Address;
  /** Smart Contract Type */
  contractType?: Maybe<SmartContractType>;
  /** Token implemented in this smart contract */
  currency?: Maybe<Currency>;
  /** Smart Contract Protocol Type */
  protocolType?: Maybe<Scalars['String']>;
};

export type EosSmartContractCallFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  smartContractAddress?: Maybe<AddressSelector>;
  smartContractMethod?: Maybe<MethodSelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
  scheduled?: Maybe<Scalars['Boolean']>;
};

/** Smart Contract Calls */
export type EosSmartContractCalls = {
  __typename?: 'EosSmartContractCalls';
  /** Actors */
  actors?: Maybe<Scalars['String']>;
  any?: Maybe<Scalars['String']>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Depth of the call. Empty string for external call, then counted as 0...N, and the next layer is added through '-'. For example 0-3-9. */
  callDepth?: Maybe<Scalars['String']>;
  /** Console */
  console?: Maybe<Scalars['String']>;
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Error Code */
  errorCode?: Maybe<Scalars['Int']>;
  /** External call executed explicitly by tx sender. Internal calls executed by smart contracts. */
  external?: Maybe<Scalars['Boolean']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Permissions */
  permissions?: Maybe<Scalars['String']>;
  /** Receivers */
  receivers?: Maybe<Scalars['String']>;
  /** True if call scheduled */
  scheduled?: Maybe<Scalars['Boolean']>;
  /** Smart contract being called */
  smartContract?: Maybe<EosSmartContract>;
  /** Contract method invoked */
  smartContractMethod?: Maybe<Method>;
  /** True if call succeeded, false if error happened. Note, that by default only successfull calls are returned in API. */
  success?: Maybe<Scalars['Boolean']>;
  /** Action from address */
  txFrom?: Maybe<Address>;
  /** Transaction hash where transfer happened */
  txHash?: Maybe<Scalars['String']>;
  /** Action to address */
  txTo?: Maybe<Address>;
};

/** Smart Contract Calls */
export type EosSmartContractCallsAnyArgs = {
  of: EosCallsMeasureable;
};

/** Smart Contract Calls */
export type EosSmartContractCallsBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Smart Contract Calls */
export type EosSmartContractCallsCountArgs = {
  uniq?: Maybe<SmartContractCallsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  smartContractAddress?: Maybe<AddressSelector>;
  smartContractMethod?: Maybe<MethodSelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
  scheduled?: Maybe<Scalars['Boolean']>;
};

/** Smart Contract Calls */
export type EosSmartContractCallsErrorCodeArgs = {
  errorCode?: Maybe<IntIdSelector>;
};

/** Smart Contract Calls */
export type EosSmartContractCallsExternalArgs = {
  external?: Maybe<Scalars['Boolean']>;
};

/** Smart Contract Calls */
export type EosSmartContractCallsMaximumArgs = {
  of: EosCallsMeasureable;
  get?: Maybe<EosCallsMeasureable>;
};

/** Smart Contract Calls */
export type EosSmartContractCallsMinimumArgs = {
  of: EosCallsMeasureable;
  get?: Maybe<EosCallsMeasureable>;
};

/** Smart Contract Calls */
export type EosSmartContractCallsScheduledArgs = {
  scheduled?: Maybe<Array<Scalars['Boolean']>>;
};

/** Smart Contract Calls */
export type EosSmartContractCallsSmartContractArgs = {
  smartContractAddress?: Maybe<AddressSelector>;
};

/** Smart Contract Calls */
export type EosSmartContractCallsSmartContractMethodArgs = {
  smartContractMethod?: Maybe<MethodSelector>;
};

/** Smart Contract Calls */
export type EosSmartContractCallsSuccessArgs = {
  success?: Maybe<Array<Scalars['Boolean']>>;
};

/** Smart Contract Calls */
export type EosSmartContractCallsTxFromArgs = {
  txFrom?: Maybe<AddressSelector>;
};

/** Smart Contract Calls */
export type EosSmartContractCallsTxHashArgs = {
  txHash?: Maybe<HashSelector>;
};

/** Smart Contract Calls */
export type EosSmartContractCallsTxToArgs = {
  txTo?: Maybe<AddressSelector>;
};

/** Blockchain smart contract */
export type EosSmartContractInfo = {
  __typename?: 'EosSmartContractInfo';
  /** Smart Contract Type */
  contractType?: Maybe<SmartContractType>;
  /** Token implemented in this smart contract */
  currency?: Maybe<Currency>;
  /** Smart Contract Protocol Type */
  protocolType?: Maybe<Scalars['String']>;
};

export type EosTransactionFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  scheduled?: Maybe<Scalars['Boolean']>;
};

/** Transactions in EOS blockchain */
export type EosTransactions = {
  __typename?: 'EosTransactions';
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  count?: Maybe<Scalars['Int']>;
  cpuUsageUs?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction index in block, 0 based */
  index?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  netUsageWords?: Maybe<Scalars['Int']>;
  /** Success */
  scheduled?: Maybe<Scalars['Boolean']>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
};

/** Transactions in EOS blockchain */
export type EosTransactionsAnyArgs = {
  of: EosTransactionsMeasureable;
};

/** Transactions in EOS blockchain */
export type EosTransactionsBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Transactions in EOS blockchain */
export type EosTransactionsCountArgs = {
  uniq?: Maybe<EosTransactionsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  scheduled?: Maybe<Scalars['Boolean']>;
};

/** Transactions in EOS blockchain */
export type EosTransactionsCpuUsageUsArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  scheduled?: Maybe<Scalars['Boolean']>;
};

/** Transactions in EOS blockchain */
export type EosTransactionsHashArgs = {
  txHash?: Maybe<Array<HashSelector>>;
};

/** Transactions in EOS blockchain */
export type EosTransactionsIndexArgs = {
  txIndex?: Maybe<Array<TxIndexSelector>>;
};

/** Transactions in EOS blockchain */
export type EosTransactionsMaximumArgs = {
  of: EosTransactionsMeasureable;
  get?: Maybe<EosTransactionsMeasureable>;
};

/** Transactions in EOS blockchain */
export type EosTransactionsMinimumArgs = {
  of: EosTransactionsMeasureable;
  get?: Maybe<EosTransactionsMeasureable>;
};

/** Transactions in EOS blockchain */
export type EosTransactionsNetUsageWordsArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  scheduled?: Maybe<Scalars['Boolean']>;
};

/** Transactions in EOS blockchain */
export type EosTransactionsScheduledArgs = {
  scheduled?: Maybe<Scalars['Boolean']>;
};

/** Transactions in EOS blockchain */
export type EosTransactionsSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>;
};

export enum EosTransactionsMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Transaction hash */
  TX_HASH = 'tx_hash',
  /** CPU Usage */
  CPU_USAGE_US = 'cpu_usage_us',
  /** Net Usage */
  NET_USAGE_WORDS = 'net_usage_words',
}

export enum EosTransactionsUniq {
  /** Unique blocks */
  BLOCKS = 'blocks',
  /** Unique date count */
  DATES = 'dates',
}

export type EosTransferFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<EosCurrencySelector>;
  entityId?: Maybe<EntitySelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfers = {
  __typename?: 'EosTransfers';
  /** Actors */
  actors?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  count?: Maybe<Scalars['Int']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Entity identifier ( for ERC-721 NFT tokens ) */
  entityId?: Maybe<Scalars['String']>;
  /** External transfer executed explicitly by tx sender. Internal transfers executed by smart contracts. */
  external?: Maybe<Scalars['Boolean']>;
  maximum?: Maybe<Scalars['String']>;
  /** Memo */
  memo?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Transfer receiver */
  receiver?: Maybe<Address>;
  /** Transfer sender */
  sender?: Maybe<Address>;
  /** Transfer succeeded */
  success?: Maybe<Scalars['Boolean']>;
  /** Action from address */
  txFrom?: Maybe<Address>;
  /** Transaction hash where transfer happened */
  txHash?: Maybe<Scalars['String']>;
  /** Action to address */
  txTo?: Maybe<Address>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<EosCurrencySelector>;
  entityId?: Maybe<EntitySelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersAnyArgs = {
  of: EosTransfersMeasureable;
};

/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersCountArgs = {
  uniq?: Maybe<TransfersUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<EosCurrencySelector>;
  entityId?: Maybe<EntitySelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersCurrencyArgs = {
  currency?: Maybe<EosCurrencySelector>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersEntityIdArgs = {
  entityId?: Maybe<EntitySelector>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersExternalArgs = {
  external?: Maybe<Scalars['Boolean']>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersMaximumArgs = {
  of: EosTransfersMeasureable;
  get?: Maybe<EosTransfersMeasureable>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersMinimumArgs = {
  of: EosTransfersMeasureable;
  get?: Maybe<EosTransfersMeasureable>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersReceiverArgs = {
  receiver?: Maybe<AddressSelector>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersSenderArgs = {
  sender?: Maybe<AddressSelector>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersTxFromArgs = {
  txFrom?: Maybe<AddressSelector>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersTxHashArgs = {
  txHash?: Maybe<HashSelector>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersTxToArgs = {
  txTo?: Maybe<AddressSelector>;
};

export enum EosTransfersMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Transaction hash */
  TX_HASH = 'tx_hash',
  /** Amount */
  AMOUNT = 'amount',
  /** Sender */
  SENDER = 'sender',
  /** Receiver */
  RECEIVER = 'receiver',
  /** Currency symbol */
  CURRENCY_SYMBOL = 'currency_symbol',
  /** Token address */
  CURRENCY_ADDRESS = 'currency_address',
}

/** Ethereum Chain */
export type Ethereum = {
  __typename?: 'Ethereum';
  /** Basic information about address ( or smart contract ) */
  address: Array<EthereumAddressInfoWithBalance>;
  /** Arguments of Smart Contract Calls and Events */
  arguments?: Maybe<Array<EthereumArguments>>;
  /** Blockchain Blocks */
  blocks?: Maybe<Array<EthereumBlocks>>;
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<EthereumCoinpath>>;
  /** Trades on Ethereum DEX Smart Contracts */
  dexTrades?: Maybe<Array<EthereumDexTrades>>;
  /** Smart Contract Calls */
  smartContractCalls?: Maybe<Array<EthereumSmartContractCalls>>;
  /** Smart Contract Events */
  smartContractEvents?: Maybe<Array<EthereumSmartContractEvent>>;
  /** Blockchain Transactions */
  transactions?: Maybe<Array<EthereumTransactions>>;
  /** Currency Transfers */
  transfers?: Maybe<Array<EthereumTransfers>>;
};

/** Ethereum Chain */
export type EthereumAddressArgs = {
  address: Array<EthereumAddressSelectorIn>;
};

/** Ethereum Chain */
export type EthereumArgumentsArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  caller?: Maybe<Array<EthereumAddressSelector>>;
  reference?: Maybe<Array<EthereumAddressSelector>>;
  value?: Maybe<Array<ArgumentValueSelector>>;
  argument?: Maybe<Array<ArgumentSelector>>;
  argumentType?: Maybe<Array<ArgumentTypeSelector>>;
  signatureType?: Maybe<SignatureTypeSelector>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: Maybe<MethodSelector>;
  smartContractEvent?: Maybe<EventSelector>;
  external?: Maybe<Scalars['Boolean']>;
  any?: Maybe<Array<EthereumArgumentFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Ethereum Chain */
export type EthereumBlocksArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  blockReward?: Maybe<Array<AmountSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
  any?: Maybe<Array<EthereumBlockFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Ethereum Chain */
export type EthereumCoinpathArgs = {
  sender?: Maybe<EthereumAddressSelector>;
  receiver?: Maybe<EthereumAddressSelector>;
  currency?: Maybe<Array<EthereumCurrencySelector>>;
  initialAddress?: Maybe<EthereumAddressSelector>;
  initialDate?: Maybe<DateSelector>;
  initialTime?: Maybe<DateTimeSelector>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  depth?: Maybe<IntegerLimitedSelector>;
  options?: Maybe<CoinpathOptions>;
};

/** Ethereum Chain */
export type EthereumDexTradesArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  protocol?: Maybe<Array<StringSelector>>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeName?: Maybe<Array<StringSelector>>;
  sellCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  buyCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  baseCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  quoteCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  maker?: Maybe<Array<EthereumAddressSelector>>;
  makerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>;
  taker?: Maybe<Array<EthereumAddressSelector>>;
  takerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>;
  makerOrTaker?: Maybe<Array<EthereumAddressSelector>>;
  tradeIndex?: Maybe<Array<StringSelector>>;
  buyAmount?: Maybe<Array<AmountSelector>>;
  sellAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
  priceAsymmetry?: Maybe<Array<FloatSelector>>;
  tradeAmountUsd?: Maybe<Array<FloatSelector>>;
  any?: Maybe<Array<EthereumDexTradeFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Ethereum Chain */
export type EthereumSmartContractCallsArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  caller?: Maybe<Array<EthereumAddressSelector>>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: Maybe<MethodSelector>;
  smartContractType?: Maybe<SmartContractTypeSelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Array<Scalars['Boolean']>>;
  any?: Maybe<Array<EthereumSmartContractCallFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Ethereum Chain */
export type EthereumSmartContractEventsArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  smartContractType?: Maybe<SmartContractTypeSelector>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractEvent?: Maybe<EventSelector>;
  any?: Maybe<Array<EthereumSmartContractEventFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Ethereum Chain */
export type EthereumTransactionsArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  txCreates?: Maybe<Array<EthereumAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  gasValue?: Maybe<Array<AmountSelector>>;
  any?: Maybe<Array<EthereumTransactionFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Ethereum Chain */
export type EthereumTransfersArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  entityId?: Maybe<EntitySelector>;
  sender?: Maybe<Array<EthereumAddressSelector>>;
  receiver?: Maybe<Array<EthereumAddressSelector>>;
  currency?: Maybe<Array<EthereumCurrencySelector>>;
  external?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  any?: Maybe<Array<EthereumTransferFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Ethereum v 2.0 Baecon Chain */
export type Ethereum2 = {
  __typename?: 'Ethereum2';
  /** Attestations in block */
  attestations?: Maybe<Array<Ethereum2Attestation>>;
  /** Attester Slashings */
  attesterSlashings?: Maybe<Array<Ethereum2AttesterSlashing>>;
  /** Blockchain Blocks */
  blocks?: Maybe<Array<Ethereum2Blocks>>;
  /** Attestations of blocks */
  deposits?: Maybe<Array<Ethereum2Deposit>>;
  /** Proposer Slashings */
  proposerSlashings?: Maybe<Array<Ethereum2ProposerSlashing>>;
  /** Voluntary Exits */
  voluntaryExits?: Maybe<Array<Ethereum2VoluntaryExit>>;
};

/** Ethereum v 2.0 Baecon Chain */
export type Ethereum2AttestationsArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
  validatorIndex?: Maybe<Array<IntegerSelector>>;
  committeeIndex?: Maybe<Array<IntegerSelector>>;
  attestationSlot?: Maybe<Array<IntegerSelector>>;
  attestationEpoch?: Maybe<Array<IntegerSelector>>;
  any?: Maybe<Array<Ethereum2Filter>>;
  options?: Maybe<QueryOptions>;
};

/** Ethereum v 2.0 Baecon Chain */
export type Ethereum2AttesterSlashingsArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
  validatorIndex?: Maybe<Array<IntegerSelector>>;
  attestationSlot?: Maybe<Array<IntegerSelector>>;
  attestationEpoch?: Maybe<Array<IntegerSelector>>;
  any?: Maybe<Array<Ethereum2Filter>>;
  options?: Maybe<QueryOptions>;
};

/** Ethereum v 2.0 Baecon Chain */
export type Ethereum2BlocksArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
  any?: Maybe<Array<Ethereum2Filter>>;
  options?: Maybe<QueryOptions>;
};

/** Ethereum v 2.0 Baecon Chain */
export type Ethereum2DepositsArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
  validatorIndex?: Maybe<Array<IntegerSelector>>;
  any?: Maybe<Array<Ethereum2Filter>>;
  options?: Maybe<QueryOptions>;
};

/** Ethereum v 2.0 Baecon Chain */
export type Ethereum2ProposerSlashingsArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
  slashingProposerIndex?: Maybe<Array<IntegerSelector>>;
  slashingSlot?: Maybe<Array<IntegerSelector>>;
  slashingEpoch?: Maybe<Array<IntegerSelector>>;
  any?: Maybe<Array<Ethereum2Filter>>;
  options?: Maybe<QueryOptions>;
};

/** Ethereum v 2.0 Baecon Chain */
export type Ethereum2VoluntaryExitsArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
  validatorIndex?: Maybe<Array<IntegerSelector>>;
  voluntaryExitEpoch?: Maybe<Array<IntegerSelector>>;
  any?: Maybe<Array<Ethereum2Filter>>;
  options?: Maybe<QueryOptions>;
};

/** Attestations in Ethereum v2.0 blockchain */
export type Ethereum2Attestation = {
  __typename?: 'Ethereum2Attestation';
  aggregationBits: Scalars['String'];
  any?: Maybe<Scalars['String']>;
  attestation: Ethereum2AttestationInfo;
  /** Attestation Index (0 based ) in block */
  attestationIndex: Scalars['Int'];
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Block root hash */
  blockRoot: Scalars['String'];
  /** Committee index for attestation */
  committeeIndex: Scalars['Int'];
  count?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Block Eth1 information */
  eth1: Ethereum2Eth1Info;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Block parent hash */
  parentRoot: Scalars['String'];
  /** Block proposer */
  proposer?: Maybe<Ethereum2ValidatorInfo>;
  /** Block state root hash */
  stateRoot: Scalars['String'];
  /** Validator */
  validator: Ethereum2ValidatorInfo;
  /** Sequential index of validator in committee ( 0-based) */
  validatorInCommitteeIndex: Scalars['Int'];
};

/** Attestations in Ethereum v2.0 blockchain */
export type Ethereum2AttestationAnyArgs = {
  of: Ethereum2AttestationsMeasureable;
};

/** Attestations in Ethereum v2.0 blockchain */
export type Ethereum2AttestationBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Attestations in Ethereum v2.0 blockchain */
export type Ethereum2AttestationBlockRootArgs = {
  blockRootHash?: Maybe<Array<HashSelector>>;
};

/** Attestations in Ethereum v2.0 blockchain */
export type Ethereum2AttestationCountArgs = {
  uniq?: Maybe<Ethereum2AttestationsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
  validatorIndex?: Maybe<Array<IntegerSelector>>;
  committeeIndex?: Maybe<Array<IntegerSelector>>;
  attestationSlot?: Maybe<Array<IntegerSelector>>;
  attestationEpoch?: Maybe<Array<IntegerSelector>>;
};

/** Attestations in Ethereum v2.0 blockchain */
export type Ethereum2AttestationMaximumArgs = {
  of: Ethereum2AttestationsMeasureable;
  get?: Maybe<Ethereum2AttestationsMeasureable>;
};

/** Attestations in Ethereum v2.0 blockchain */
export type Ethereum2AttestationMinimumArgs = {
  of: Ethereum2AttestationsMeasureable;
  get?: Maybe<Ethereum2AttestationsMeasureable>;
};

/** Attestations in Ethereum v2.0 blockchain */
export type Ethereum2AttestationProposerArgs = {
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
};

/** AttestationFieldInfo for Ethereum v 2.0 network */
export type Ethereum2AttestationFieldInfo = {
  __typename?: 'Ethereum2AttestationFieldInfo';
  epoch: Scalars['Int'];
  /** Root Hash */
  root: Scalars['String'];
};

/** AttestationInfo for Ethereum v 2.0 network */
export type Ethereum2AttestationInfo = {
  __typename?: 'Ethereum2AttestationInfo';
  beaconBlockRoot: Scalars['String'];
  epoch: Scalars['Int'];
  signature: Scalars['String'];
  slot: Scalars['Int'];
  source: Ethereum2AttestationFieldInfo;
  target: Ethereum2AttestationFieldInfo;
};

export enum Ethereum2AttestationsMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Block hash */
  BLOCK_ROOT_HASH = 'block_root_hash',
  /** Block Proposer */
  BLOCK_PROPOSER = 'block_proposer',
  /** Committee Index */
  COMMITTEE = 'committee',
  /** Validator index */
  VALIDATOR = 'validator',
}

export enum Ethereum2AttestationsUniq {
  /** Unique blocks */
  BLOCKS = 'blocks',
  /** Unique block proposers */
  BLOCK_PROPOSERS = 'block_proposers',
  /** Unique date count */
  DATES = 'dates',
  /** Unique commitees */
  COMMITTEES = 'committees',
  /** Unique validators */
  VALIDATORS = 'validators',
  /** Unique attestations */
  ATTESTATIONS = 'attestations',
  /** Unique attestation slots */
  ATTESTATION_SLOTS = 'attestation_slots',
  /** Unique attestation epochs */
  ATTESTATION_EPOCHS = 'attestation_epochs',
}

/** Attester Slashing in Ethereum v2.0 blockchain */
export type Ethereum2AttesterSlashing = {
  __typename?: 'Ethereum2AttesterSlashing';
  any?: Maybe<Scalars['String']>;
  attestation: Ethereum2AttestationInfo;
  /** Attestation slashing sequential number */
  attestationOrder: Scalars['Int'];
  /** Attester Slashing Index (0 based ) in block */
  attesterSlashingIndex: Scalars['Int'];
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Block root hash */
  blockRoot: Scalars['String'];
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Block Eth1 information */
  eth1: Ethereum2Eth1Info;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Block parent hash */
  parentRoot: Scalars['String'];
  /** Block proposer */
  proposer?: Maybe<Ethereum2ValidatorInfo>;
  /** Block state root hash */
  stateRoot: Scalars['String'];
  /** Validator */
  validator: Ethereum2ValidatorInfo;
  /** Validator index in slashing sequential numbern */
  validatorInAttestationIndex: Scalars['Int'];
};

/** Attester Slashing in Ethereum v2.0 blockchain */
export type Ethereum2AttesterSlashingAnyArgs = {
  of: Ethereum2AttesterSlashingMeasureable;
};

/** Attester Slashing in Ethereum v2.0 blockchain */
export type Ethereum2AttesterSlashingBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Attester Slashing in Ethereum v2.0 blockchain */
export type Ethereum2AttesterSlashingBlockRootArgs = {
  blockRootHash?: Maybe<Array<HashSelector>>;
};

/** Attester Slashing in Ethereum v2.0 blockchain */
export type Ethereum2AttesterSlashingCountArgs = {
  uniq?: Maybe<Ethereum2AttesterSlashingsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
  validatorIndex?: Maybe<Array<IntegerSelector>>;
  attestationSlot?: Maybe<Array<IntegerSelector>>;
  attestationEpoch?: Maybe<Array<IntegerSelector>>;
};

/** Attester Slashing in Ethereum v2.0 blockchain */
export type Ethereum2AttesterSlashingMaximumArgs = {
  of: Ethereum2AttesterSlashingMeasureable;
  get?: Maybe<Ethereum2AttesterSlashingMeasureable>;
};

/** Attester Slashing in Ethereum v2.0 blockchain */
export type Ethereum2AttesterSlashingMinimumArgs = {
  of: Ethereum2AttesterSlashingMeasureable;
  get?: Maybe<Ethereum2AttesterSlashingMeasureable>;
};

/** Attester Slashing in Ethereum v2.0 blockchain */
export type Ethereum2AttesterSlashingProposerArgs = {
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
};

export enum Ethereum2AttesterSlashingMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Block hash */
  BLOCK_ROOT_HASH = 'block_root_hash',
  /** Block Proposer */
  BLOCK_PROPOSER = 'block_proposer',
  /** Validator index */
  VALIDATOR = 'validator',
}

export enum Ethereum2AttesterSlashingsUniq {
  /** Unique blocks */
  BLOCKS = 'blocks',
  /** Unique block proposers */
  BLOCK_PROPOSERS = 'block_proposers',
  /** Unique date count */
  DATES = 'dates',
  /** Unique validators */
  VALIDATORS = 'validators',
  /** Unique slashing slots */
  ATTESTATION_SLOTS = 'attestation_slots',
  /** Unique slashing epochs */
  ATTESTATION_EPOCHS = 'attestation_epochs',
}

/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2Blocks = {
  __typename?: 'Ethereum2Blocks';
  any?: Maybe<Scalars['String']>;
  attestationsCount?: Maybe<Scalars['Int']>;
  attesterSlashingsCount?: Maybe<Scalars['Int']>;
  /** Block root hash */
  blockRoot: Scalars['String'];
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  depositsCount?: Maybe<Scalars['Int']>;
  /** Block Eth1 information */
  eth1: Ethereum2Eth1Info;
  /** Graffiti */
  graffiti: Scalars['String'];
  /** Block number (height) in blockchain */
  height: Scalars['Int'];
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Block parent hash */
  parentRoot: Scalars['String'];
  /** Block proposer */
  proposer?: Maybe<Ethereum2ValidatorInfo>;
  proposerSlashingsCount?: Maybe<Scalars['Int']>;
  /** Randao Reveal */
  randaoReveal: Scalars['String'];
  /** Block signature */
  signature: Scalars['String'];
  /** Block state root hash */
  stateRoot: Scalars['String'];
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
  voluntaryExitsCount?: Maybe<Scalars['Int']>;
};

/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksAnyArgs = {
  of: Ethereum2BlocksMeasureable;
};

/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksAttestationsCountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
};

/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksAttesterSlashingsCountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
};

/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksBlockRootArgs = {
  blockRootHash?: Maybe<Array<HashSelector>>;
};

/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksCountArgs = {
  uniq?: Maybe<Ethereum2BlocksUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
};

/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksDepositsCountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
};

/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksHeightArgs = {
  height?: Maybe<BlockSelector>;
};

/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksMaximumArgs = {
  of: Ethereum2BlocksMeasureable;
  get?: Maybe<Ethereum2BlocksMeasureable>;
};

/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksMinimumArgs = {
  of: Ethereum2BlocksMeasureable;
  get?: Maybe<Ethereum2BlocksMeasureable>;
};

/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksProposerArgs = {
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
};

/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksProposerSlashingsCountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
};

/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksTimestampArgs = {
  time?: Maybe<DateTimeSelector>;
};

/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksVoluntaryExitsCountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
};

export enum Ethereum2BlocksMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Block hash */
  BLOCK_ROOT_HASH = 'block_root_hash',
  /** Block Miner */
  BLOCK_PROPOSER = 'block_proposer',
}

export enum Ethereum2BlocksUniq {
  /** Unique proposers */
  BLOCK_PROPOSERS = 'block_proposers',
  /** Unique date count */
  DATES = 'dates',
}

/** Deposit in Ethereum v2.0 blockchain */
export type Ethereum2Deposit = {
  __typename?: 'Ethereum2Deposit';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Block root hash */
  blockRoot: Scalars['String'];
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Deposit Index (0 based ) in block */
  depositIndex: Scalars['Int'];
  /** Block Eth1 information */
  eth1: Ethereum2Eth1Info;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Block parent hash */
  parentRoot: Scalars['String'];
  proof: Scalars['String'];
  /** Block proposer */
  proposer?: Maybe<Ethereum2ValidatorInfo>;
  signature: Scalars['String'];
  /** Block state root hash */
  stateRoot: Scalars['String'];
  /** Validator */
  validator: Ethereum2ValidatorInfo;
};

/** Deposit in Ethereum v2.0 blockchain */
export type Ethereum2DepositAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
  validatorIndex?: Maybe<Array<IntegerSelector>>;
};

/** Deposit in Ethereum v2.0 blockchain */
export type Ethereum2DepositAnyArgs = {
  of: Ethereum2DepositsMeasureable;
};

/** Deposit in Ethereum v2.0 blockchain */
export type Ethereum2DepositBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Deposit in Ethereum v2.0 blockchain */
export type Ethereum2DepositBlockRootArgs = {
  blockRootHash?: Maybe<Array<HashSelector>>;
};

/** Deposit in Ethereum v2.0 blockchain */
export type Ethereum2DepositCountArgs = {
  uniq?: Maybe<Ethereum2DepositsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
};

/** Deposit in Ethereum v2.0 blockchain */
export type Ethereum2DepositMaximumArgs = {
  of: Ethereum2DepositsMeasureable;
  get?: Maybe<Ethereum2DepositsMeasureable>;
};

/** Deposit in Ethereum v2.0 blockchain */
export type Ethereum2DepositMinimumArgs = {
  of: Ethereum2DepositsMeasureable;
  get?: Maybe<Ethereum2DepositsMeasureable>;
};

/** Deposit in Ethereum v2.0 blockchain */
export type Ethereum2DepositProposerArgs = {
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
};

export enum Ethereum2DepositsMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Block hash */
  BLOCK_ROOT_HASH = 'block_root_hash',
  /** Block Proposer */
  BLOCK_PROPOSER = 'block_proposer',
  /** Validator index */
  VALIDATOR = 'validator',
}

export enum Ethereum2DepositsUniq {
  /** Unique blocks */
  BLOCKS = 'blocks',
  /** Unique block proposers */
  BLOCK_PROPOSERS = 'block_proposers',
  /** Unique date count */
  DATES = 'dates',
  /** Unique validators */
  VALIDATORS = 'validators',
}

/** Eth1 attributes for Ethereum v 2.0 network */
export type Ethereum2Eth1Info = {
  __typename?: 'Ethereum2Eth1Info';
  /** Block Eth1 block hash */
  blockHash: Scalars['String'];
  /** Block Eth1 deposit count */
  depositCount: Scalars['Int'];
  /** Block Eth1 deposit root hash */
  depositRoot: Scalars['String'];
};

export type Ethereum2Filter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
};

export enum Ethereum2Network {
  /** Beacon Chain Ethereum 2.0 */
  ETH2 = 'eth2',
  /** Medalla Ethereum 2.0 Beacon Testnet */
  MEDALLA = 'medalla',
}

/** Proposer Slashing in Ethereum v2.0 blockchain */
export type Ethereum2ProposerSlashing = {
  __typename?: 'Ethereum2ProposerSlashing';
  any?: Maybe<Scalars['String']>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Block root hash */
  blockRoot: Scalars['String'];
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Block Eth1 information */
  eth1: Ethereum2Eth1Info;
  /** Header slashing sequential numbern */
  headerOrder: Scalars['Int'];
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Block parent hash */
  parentRoot: Scalars['String'];
  /** Block proposer */
  proposer?: Maybe<Ethereum2ValidatorInfo>;
  /** Proposer Slashing Index (0 based ) in block */
  proposerSlashingIndex: Scalars['Int'];
  slashing: Ethereum2SlashingInfo;
  /** Block state root hash */
  stateRoot: Scalars['String'];
};

/** Proposer Slashing in Ethereum v2.0 blockchain */
export type Ethereum2ProposerSlashingAnyArgs = {
  of: Ethereum2ProposerSlashingMeasureable;
};

/** Proposer Slashing in Ethereum v2.0 blockchain */
export type Ethereum2ProposerSlashingBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Proposer Slashing in Ethereum v2.0 blockchain */
export type Ethereum2ProposerSlashingBlockRootArgs = {
  blockRootHash?: Maybe<Array<HashSelector>>;
};

/** Proposer Slashing in Ethereum v2.0 blockchain */
export type Ethereum2ProposerSlashingCountArgs = {
  uniq?: Maybe<Ethereum2ProposerSlashingsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
  slashingProposerIndex?: Maybe<Array<IntegerSelector>>;
  slashingSlot?: Maybe<Array<IntegerSelector>>;
  slashingEpoch?: Maybe<Array<IntegerSelector>>;
};

/** Proposer Slashing in Ethereum v2.0 blockchain */
export type Ethereum2ProposerSlashingMaximumArgs = {
  of: Ethereum2ProposerSlashingMeasureable;
  get?: Maybe<Ethereum2ProposerSlashingMeasureable>;
};

/** Proposer Slashing in Ethereum v2.0 blockchain */
export type Ethereum2ProposerSlashingMinimumArgs = {
  of: Ethereum2ProposerSlashingMeasureable;
  get?: Maybe<Ethereum2ProposerSlashingMeasureable>;
};

/** Proposer Slashing in Ethereum v2.0 blockchain */
export type Ethereum2ProposerSlashingProposerArgs = {
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
};

export enum Ethereum2ProposerSlashingMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Block hash */
  BLOCK_ROOT_HASH = 'block_root_hash',
  /** Block Proposer */
  BLOCK_PROPOSER = 'block_proposer',
  /** Slashed Proposer */
  PROPOSER = 'proposer',
}

export enum Ethereum2ProposerSlashingsUniq {
  /** Unique blocks */
  BLOCKS = 'blocks',
  /** Unique block proposers */
  BLOCK_PROPOSERS = 'block_proposers',
  /** Unique date count */
  DATES = 'dates',
  /** Unique slashing slots */
  SLASHING_SLOTS = 'slashing_slots',
  /** Unique slashing epochs */
  SLASHING_EPOCHS = 'slashing_epochs',
  /** Unique slashing proposers */
  SLASHING_PROPOSERS = 'slashing_proposers',
}

/** SlashingInfo for Ethereum v 2.0 network */
export type Ethereum2SlashingInfo = {
  __typename?: 'Ethereum2SlashingInfo';
  /** Block body hash */
  bodyRoot: Scalars['String'];
  epoch: Scalars['Int'];
  /** Block parent hash */
  parentRoot: Scalars['String'];
  /** Block proposer */
  proposer?: Maybe<Ethereum2ValidatorInfo>;
  signature: Scalars['String'];
  slot: Scalars['Int'];
  /** Block state root hash */
  stateRoot: Scalars['String'];
};

/** Validator attributes for Ethereum v 2.0 network */
export type Ethereum2ValidatorInfo = {
  __typename?: 'Ethereum2ValidatorInfo';
  /** Validator Index as Integer */
  index: Scalars['Int'];
  /** Validator Pub Key */
  pubkey: Scalars['String'];
  /** Validator Withdrawal */
  withdrawalCredentials: Scalars['String'];
};

/** Voluntary Exit in Ethereum v2.0 blockchain */
export type Ethereum2VoluntaryExit = {
  __typename?: 'Ethereum2VoluntaryExit';
  any?: Maybe<Scalars['String']>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Block root hash */
  blockRoot: Scalars['String'];
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Block Eth1 information */
  eth1: Ethereum2Eth1Info;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Block parent hash */
  parentRoot: Scalars['String'];
  /** Block proposer */
  proposer?: Maybe<Ethereum2ValidatorInfo>;
  /** Signature */
  signature: Scalars['String'];
  /** Block state root hash */
  stateRoot: Scalars['String'];
  /** Validator */
  validator: Ethereum2ValidatorInfo;
  voluntaryExitEpoch: Scalars['Int'];
  /** Voluntary Exit Index (0 based ) in block */
  voluntaryExitIndex: Scalars['Int'];
};

/** Voluntary Exit in Ethereum v2.0 blockchain */
export type Ethereum2VoluntaryExitAnyArgs = {
  of: Ethereum2VoluntaryExitsMeasureable;
};

/** Voluntary Exit in Ethereum v2.0 blockchain */
export type Ethereum2VoluntaryExitBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Voluntary Exit in Ethereum v2.0 blockchain */
export type Ethereum2VoluntaryExitBlockRootArgs = {
  blockRootHash?: Maybe<Array<HashSelector>>;
};

/** Voluntary Exit in Ethereum v2.0 blockchain */
export type Ethereum2VoluntaryExitCountArgs = {
  uniq?: Maybe<Ethereum2VoluntaryExitsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
  validatorIndex?: Maybe<Array<IntegerSelector>>;
  voluntaryExitEpoch?: Maybe<Array<IntegerSelector>>;
};

/** Voluntary Exit in Ethereum v2.0 blockchain */
export type Ethereum2VoluntaryExitMaximumArgs = {
  of: Ethereum2VoluntaryExitsMeasureable;
  get?: Maybe<Ethereum2VoluntaryExitsMeasureable>;
};

/** Voluntary Exit in Ethereum v2.0 blockchain */
export type Ethereum2VoluntaryExitMinimumArgs = {
  of: Ethereum2VoluntaryExitsMeasureable;
  get?: Maybe<Ethereum2VoluntaryExitsMeasureable>;
};

/** Voluntary Exit in Ethereum v2.0 blockchain */
export type Ethereum2VoluntaryExitProposerArgs = {
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
};

export enum Ethereum2VoluntaryExitsMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Block hash */
  BLOCK_ROOT_HASH = 'block_root_hash',
  /** Block Proposer */
  BLOCK_PROPOSER = 'block_proposer',
  /** Validator index */
  VALIDATOR = 'validator',
}

export enum Ethereum2VoluntaryExitsUniq {
  /** Unique blocks */
  BLOCKS = 'blocks',
  /** Unique block proposers */
  BLOCK_PROPOSERS = 'block_proposers',
  /** Unique date count */
  DATES = 'dates',
  /** Unique validators */
  VALIDATORS = 'validators',
}

/** Address detailed information for Ethereum network */
export type EthereumAddressInfo = {
  __typename?: 'EthereumAddressInfo';
  /** String address representation */
  address: Scalars['String'];
  /** Annotations ( tags ), if exists */
  annotation?: Maybe<Scalars['String']>;
  /** Smart Contract if exists on the address */
  smartContract?: Maybe<EthereumSmartContractInfo>;
};

/** Blockchain address */
export type EthereumAddressInfoWithBalance = {
  __typename?: 'EthereumAddressInfoWithBalance';
  /** String address representation */
  address: Scalars['String'];
  /** Annotations ( tags ), if exists */
  annotation?: Maybe<Scalars['String']>;
  /** DEPRECATED Current address balance */
  balance?: Maybe<Scalars['Float']>;
  /** DEPRECATED Balances by currencies for the address */
  balances?: Maybe<Array<EthereumBalance>>;
  /** Smart Contract if exists on the address */
  smartContract?: Maybe<EthereumSmartContractInfoWithAttributes>;
};

/** Blockchain address */
export type EthereumAddressInfoWithBalanceBalancesArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  currency?: Maybe<EthereumCurrencySelector>;
  height?: Maybe<BlockSelectorRange>;
};

/**
 * Address should start from 0x and contain hex digits.
 *   If digits are case sensitive, address is checked against checksum according to EIP-55.
 */
export type EthereumAddressSelector = {
  /** Equal to Address */
  is?: Maybe<Scalars['String']>;
  /** Not Equal to Address */
  not?: Maybe<Scalars['String']>;
  /** In the list of Addresses */
  in?: Maybe<Array<Scalars['String']>>;
  /** Not in the list of Addresses */
  notIn?: Maybe<Array<Scalars['String']>>;
};

/**
 * Address should start from 0x and contain hex digits.
 *   If digits are case sensitive, address is checked against checksum according to EIP-55.
 */
export type EthereumAddressSelectorIn = {
  /** Equal to Address */
  is?: Maybe<Scalars['String']>;
  /** In the list of Addresses */
  in?: Maybe<Array<Scalars['String']>>;
};

export type EthereumArgumentFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  caller?: Maybe<Array<EthereumAddressSelector>>;
  reference?: Maybe<Array<EthereumAddressSelector>>;
  value?: Maybe<Array<ArgumentValueSelector>>;
  argument?: Maybe<Array<ArgumentSelector>>;
  argumentType?: Maybe<Array<ArgumentTypeSelector>>;
  signatureType?: Maybe<SignatureTypeSelector>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: Maybe<MethodSelector>;
  smartContractEvent?: Maybe<EventSelector>;
  external?: Maybe<Scalars['Boolean']>;
};

/** Arguments of Smart Contract Calls and Events */
export type EthereumArguments = {
  __typename?: 'EthereumArguments';
  any?: Maybe<Scalars['String']>;
  /** Method or event argument */
  argument?: Maybe<ArgumentName>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Depth of the call. Empty string for external call, then counted as 0...N, and the next layer is added through '-'. For example 0-3-9. */
  callDepth?: Maybe<Scalars['String']>;
  /** Caller of the method invocation ( tx sender or another smart contract ) */
  caller?: Maybe<EthereumAddressInfo>;
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** External call executed explicitly by tx sender. Internal calls executed by smart contracts. */
  external?: Maybe<Scalars['Boolean']>;
  /** Sequential index of value in array ( multi-dimensional) */
  index: Scalars['String'];
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Float']>;
  /** Address value of method or event argument */
  reference?: Maybe<EthereumAddressInfo>;
  /** Smart contract being called */
  smartContract?: Maybe<EthereumSmartContract>;
  /** Contract method or event */
  smartContractSignature?: Maybe<Signature>;
  /** True if call succeeded, false if error happened. Note, that by default only successfull calls are returned in API. */
  success?: Maybe<Scalars['Boolean']>;
  /** Transaction where call happened */
  transaction?: Maybe<EthereumTransactionInfo>;
  /** The Value of method or event argument */
  value?: Maybe<ArgumentValue>;
};

/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsAnyArgs = {
  of: EthereumArgumentsMeasureable;
  as?: Maybe<EthereumArgumentsConvertable>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  caller?: Maybe<Array<EthereumAddressSelector>>;
  reference?: Maybe<Array<EthereumAddressSelector>>;
  value?: Maybe<Array<ArgumentValueSelector>>;
  argument?: Maybe<Array<ArgumentSelector>>;
  argumentType?: Maybe<Array<ArgumentTypeSelector>>;
  signatureType?: Maybe<SignatureTypeSelector>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: Maybe<MethodSelector>;
  smartContractEvent?: Maybe<EventSelector>;
  external?: Maybe<Scalars['Boolean']>;
};

/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsArgumentArgs = {
  argument?: Maybe<Array<ArgumentSelector>>;
  argumentType?: Maybe<Scalars['String']>;
};

/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsCallerArgs = {
  caller?: Maybe<Array<EthereumAddressSelector>>;
};

/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsCountArgs = {
  uniq?: Maybe<SmartContractArgumentsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  caller?: Maybe<Array<EthereumAddressSelector>>;
  reference?: Maybe<Array<EthereumAddressSelector>>;
  value?: Maybe<Array<ArgumentValueSelector>>;
  argument?: Maybe<Array<ArgumentSelector>>;
  argumentType?: Maybe<Array<ArgumentTypeSelector>>;
  signatureType?: Maybe<SignatureTypeSelector>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: Maybe<MethodSelector>;
  smartContractEvent?: Maybe<EventSelector>;
  external?: Maybe<Scalars['Boolean']>;
};

/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsExternalArgs = {
  external?: Maybe<Scalars['Boolean']>;
};

/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsMaximumArgs = {
  of: EthereumArgumentsMeasureable;
  get?: Maybe<EthereumArgumentsMeasureable>;
  as?: Maybe<EthereumArgumentsConvertable>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  caller?: Maybe<Array<EthereumAddressSelector>>;
  reference?: Maybe<Array<EthereumAddressSelector>>;
  value?: Maybe<Array<ArgumentValueSelector>>;
  argument?: Maybe<Array<ArgumentSelector>>;
  argumentType?: Maybe<Array<ArgumentTypeSelector>>;
  signatureType?: Maybe<SignatureTypeSelector>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: Maybe<MethodSelector>;
  smartContractEvent?: Maybe<EventSelector>;
  external?: Maybe<Scalars['Boolean']>;
};

/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsMinimumArgs = {
  of: EthereumArgumentsMeasureable;
  get?: Maybe<EthereumArgumentsMeasureable>;
  as?: Maybe<EthereumArgumentsConvertable>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  caller?: Maybe<Array<EthereumAddressSelector>>;
  reference?: Maybe<Array<EthereumAddressSelector>>;
  value?: Maybe<Array<ArgumentValueSelector>>;
  argument?: Maybe<Array<ArgumentSelector>>;
  argumentType?: Maybe<Array<ArgumentTypeSelector>>;
  signatureType?: Maybe<SignatureTypeSelector>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: Maybe<MethodSelector>;
  smartContractEvent?: Maybe<EventSelector>;
  external?: Maybe<Scalars['Boolean']>;
};

/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsNumberArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  caller?: Maybe<Array<EthereumAddressSelector>>;
  reference?: Maybe<Array<EthereumAddressSelector>>;
  value?: Maybe<Array<ArgumentValueSelector>>;
  argument?: Maybe<Array<ArgumentSelector>>;
  argumentType?: Maybe<Array<ArgumentTypeSelector>>;
  signatureType?: Maybe<SignatureTypeSelector>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: Maybe<MethodSelector>;
  smartContractEvent?: Maybe<EventSelector>;
  external?: Maybe<Scalars['Boolean']>;
};

/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsReferenceArgs = {
  reference?: Maybe<Array<EthereumAddressSelector>>;
};

/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsSmartContractArgs = {
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
};

/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsSmartContractSignatureArgs = {
  smartContractMethod?: Maybe<MethodSelector>;
  smartContractEvent?: Maybe<EventSelector>;
  signatureType?: Maybe<SignatureTypeSelector>;
};

/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsSuccessArgs = {
  success?: Maybe<Array<Scalars['Boolean']>>;
};

/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsTransactionArgs = {
  txHash?: Maybe<Array<HashSelector>>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
};

/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsValueArgs = {
  value?: Maybe<Array<ArgumentValueSelector>>;
};

export enum EthereumArgumentsConvertable {
  /** Token symbol */
  TOKEN_SYMBOL = 'token_symbol',
  /** Token name */
  TOKEN_NAME = 'token_name',
}

export enum EthereumArgumentsMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Transaction hash */
  TX_HASH = 'tx_hash',
  /** Caller */
  CALLER = 'caller',
  /** Smart Contract */
  SMART_CONTRACT = 'smart_contract',
  /** Smart Contract Method Name */
  SIGNATURE_NAME = 'signature_name',
  /** Smart Contract Method Signature */
  SIGNATURE = 'signature',
  /** Smart Contract Method Signature */
  SIGNATURE_TYPE = 'signature_type',
  /** Smart Contract Method Signature Hash */
  SIGNATURE_HASH = 'signature_hash',
  /** Call depth */
  CALL_DEPTH = 'call_depth',
  /** Argument */
  ARGUMENT = 'argument',
  /** Argument type */
  ARGUMENT_TYPE = 'argument_type',
  /** Argument value */
  ARGUMENT_VALUE = 'argument_value',
  /** Argument index */
  ARGUMENT_INDEX = 'argument_index',
}

/** Balance in a currency */
export type EthereumBalance = {
  __typename?: 'EthereumBalance';
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** History of balance changes by currencies for the address */
  history?: Maybe<Array<EthereumBalanceChange>>;
  value?: Maybe<Scalars['Float']>;
};

/** Balance in a currency */
export type EthereumBalanceHistoryArgs = {
  currency?: Maybe<Array<EthereumCurrencySelector>>;
  height?: Maybe<BlockSelectorRange>;
};

/** Change of balance in a currency */
export type EthereumBalanceChange = {
  __typename?: 'EthereumBalanceChange';
  /** Block number (height) in blockchain */
  block: Scalars['Int'];
  /** Block timestamp */
  timestamp?: Maybe<Scalars['ISO8601DateTime']>;
  /** Transfer amount ( positive inbound, negative outbound) */
  transferAmount?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

export type EthereumBlockFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  blockReward?: Maybe<Array<AmountSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
};

/** Blocks in Ethereum blockchain */
export type EthereumBlocks = {
  __typename?: 'EthereumBlocks';
  any?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  difficulty?: Maybe<Scalars['Float']>;
  /** Block hash */
  hash: Scalars['String'];
  /** Block number (height) in blockchain */
  height: Scalars['Int'];
  maximum?: Maybe<Scalars['String']>;
  /** Block miner */
  miner?: Maybe<EthereumAddressInfo>;
  minimum?: Maybe<Scalars['String']>;
  /** Block nonce */
  nonce: Scalars['Int'];
  /** Parent block hash */
  parentHash: Scalars['String'];
  reward?: Maybe<Scalars['Float']>;
  /** Currency of reward */
  rewardCurrency?: Maybe<Currency>;
  size?: Maybe<Scalars['Int']>;
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
  totalDifficulty?: Maybe<Scalars['Float']>;
  transactionCount?: Maybe<Scalars['Int']>;
  uncleCount?: Maybe<Scalars['Int']>;
};

/** Blocks in Ethereum blockchain */
export type EthereumBlocksAnyArgs = {
  of: EthereumBlocksMeasureable;
};

/** Blocks in Ethereum blockchain */
export type EthereumBlocksCountArgs = {
  uniq?: Maybe<EthereumBlocksUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  blockReward?: Maybe<Array<AmountSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
};

/** Blocks in Ethereum blockchain */
export type EthereumBlocksDifficultyArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  blockReward?: Maybe<Array<AmountSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
};

/** Blocks in Ethereum blockchain */
export type EthereumBlocksHashArgs = {
  blockHash?: Maybe<Array<HashSelector>>;
};

/** Blocks in Ethereum blockchain */
export type EthereumBlocksHeightArgs = {
  height?: Maybe<BlockSelector>;
};

/** Blocks in Ethereum blockchain */
export type EthereumBlocksMaximumArgs = {
  of: EthereumBlocksMeasureable;
  get?: Maybe<EthereumBlocksMeasureable>;
};

/** Blocks in Ethereum blockchain */
export type EthereumBlocksMinerArgs = {
  miner?: Maybe<Array<EthereumAddressSelector>>;
};

/** Blocks in Ethereum blockchain */
export type EthereumBlocksMinimumArgs = {
  of: EthereumBlocksMeasureable;
  get?: Maybe<EthereumBlocksMeasureable>;
};

/** Blocks in Ethereum blockchain */
export type EthereumBlocksRewardArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  blockReward?: Maybe<Array<AmountSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
};

/** Blocks in Ethereum blockchain */
export type EthereumBlocksSizeArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  blockReward?: Maybe<Array<AmountSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
};

/** Blocks in Ethereum blockchain */
export type EthereumBlocksTimestampArgs = {
  time?: Maybe<DateTimeSelector>;
};

/** Blocks in Ethereum blockchain */
export type EthereumBlocksTotalDifficultyArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  blockReward?: Maybe<Array<AmountSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
};

/** Blocks in Ethereum blockchain */
export type EthereumBlocksTransactionCountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  blockReward?: Maybe<Array<AmountSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
};

/** Blocks in Ethereum blockchain */
export type EthereumBlocksUncleCountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  blockReward?: Maybe<Array<AmountSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
};

export enum EthereumBlocksMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Block hash */
  BLOCK_HASH = 'block_hash',
  /** Block Reward */
  BLOCK_REWARD = 'block_reward',
  /** Block Miner */
  MINER = 'miner',
}

export enum EthereumBlocksUniq {
  /** Unique miner count */
  MINERS = 'miners',
  /** Unique date count */
  DATES = 'dates',
}

export enum EthereumCallsMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Transaction hash */
  TX_HASH = 'tx_hash',
  /** Caller */
  CALLER = 'caller',
  /** Smart Contract */
  SMART_CONTRACT = 'smart_contract',
  /** Smart Contract Method Name */
  SIGNATURE_NAME = 'signature_name',
  /** Smart Contract Method Signature */
  SIGNATURE = 'signature',
  /** Smart Contract Method Signature Hash */
  SIGNATURE_HASH = 'signature_hash',
  /** Call depth */
  CALL_DEPTH = 'call_depth',
}

/** Coinpath */
export type EthereumCoinpath = {
  __typename?: 'EthereumCoinpath';
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Count of transfers */
  count?: Maybe<Scalars['Int']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Receiver address */
  receiver?: Maybe<EthereumAddressInfo>;
  /** Sender address */
  sender?: Maybe<EthereumAddressInfo>;
  /** Transaction of transfer happened */
  transaction?: Maybe<TransactionHashValue>;
  /** Attributes of transaction included in Coinpath result */
  transactions?: Maybe<Array<CoinpathEntry>>;
};

/** Coinpath */
export type EthereumCoinpathAmountArgs = {
  in?: Maybe<BaseCurrencyEnum>;
};

/** Coinpath */
export type EthereumCoinpathAnyArgs = {
  of: CoinpathMeasureable;
};

/** Coinpath */
export type EthereumCoinpathMaximumArgs = {
  of: CoinpathMeasureable;
  get?: Maybe<CoinpathMeasureable>;
};

/** Coinpath */
export type EthereumCoinpathMinimumArgs = {
  of: CoinpathMeasureable;
  get?: Maybe<CoinpathMeasureable>;
};

/**
 * Currency selector in Ethereum blockchain.
 *   Currencies supported are native ( ETH / ETC ), ERC20, ERC721 tokens.
 *   You can specify currency symbol or smart contract address. Symbols ETH/ETC are reserved for native currencies in Ethereum mainnet and classic.
 *   Ethereum Smart contract address should start from 0x and contain 40 hex digits.
 *   If digits are case sensitive, address is checked against checksum according to EIP-55.
 */
export type EthereumCurrencySelector = {
  /** Currency is */
  is?: Maybe<Scalars['String']>;
  /** Currency not */
  not?: Maybe<Scalars['String']>;
  /** Currency in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** Currency not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
};

/** Ethereum DEX attributes */
export type EthereumDex = {
  __typename?: 'EthereumDex';
  /** Address for DEX exchange identification */
  address: Address;
  /** Full name ( name for known, Protocol for unknown ) */
  fullName: Scalars['String'];
  /** Full name ( name for known, Protocol / address for unknown ) */
  fullNameWithId: Scalars['String'];
  /** Name for known exchanges */
  name?: Maybe<Scalars['String']>;
};

export type EthereumDexTradeFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  protocol?: Maybe<Array<StringSelector>>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeName?: Maybe<Array<StringSelector>>;
  sellCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  buyCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  baseCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  quoteCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  maker?: Maybe<Array<EthereumAddressSelector>>;
  makerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>;
  taker?: Maybe<Array<EthereumAddressSelector>>;
  takerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>;
  makerOrTaker?: Maybe<Array<EthereumAddressSelector>>;
  tradeIndex?: Maybe<Array<StringSelector>>;
  buyAmount?: Maybe<Array<AmountSelector>>;
  sellAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
  priceAsymmetry?: Maybe<Array<FloatSelector>>;
  tradeAmountUsd?: Maybe<Array<FloatSelector>>;
};

/** Trades on DEX smart contracts */
export type EthereumDexTrades = {
  __typename?: 'EthereumDexTrades';
  /** Trader (maker or taker) */
  address?: Maybe<EthereumAddressInfo>;
  any?: Maybe<Scalars['String']>;
  baseAmount?: Maybe<Scalars['Float']>;
  /** Base currency */
  baseCurrency?: Maybe<Currency>;
  /** Block in the blockchain */
  block?: Maybe<BlockExtended>;
  buyAmount?: Maybe<Scalars['Float']>;
  /** Maker buys this currency */
  buyCurrency?: Maybe<Currency>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Identification of admin / manager / factory of smart contract, executing trades */
  exchange?: Maybe<EthereumDex>;
  gas?: Maybe<Scalars['Float']>;
  /** Gas price in Gwei */
  gasPrice: Scalars['Float'];
  gasValue?: Maybe<Scalars['Float']>;
  /** Trade 'maker' side */
  maker?: Maybe<EthereumAddressInfo>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  /** Protocol name of the smart contract */
  protocol?: Maybe<Scalars['String']>;
  quoteAmount?: Maybe<Scalars['Float']>;
  /** Quote currency */
  quoteCurrency?: Maybe<Currency>;
  quotePrice?: Maybe<Scalars['Float']>;
  sellAmount?: Maybe<Scalars['Float']>;
  /** Maker sells this currency */
  sellCurrency?: Maybe<Currency>;
  /** Side of trade ( SELL / BUY ) */
  side?: Maybe<TradeSide>;
  /** Smart contract being called */
  smartContract?: Maybe<EthereumSmartContract>;
  /** Trade 'taker' side */
  taker?: Maybe<EthereumAddressInfo>;
  /** Time interval */
  timeInterval?: Maybe<TimeInterval>;
  tradeAmount?: Maybe<Scalars['Float']>;
  /** Index of trade in transaction, used to separate trades in transaction */
  tradeIndex?: Maybe<Scalars['String']>;
  /** Transaction of DexTrade */
  transaction?: Maybe<EthereumTransactionInfoExtended>;
};

/** Trades on DEX smart contracts */
export type EthereumDexTradesAddressArgs = {
  makerOrTaker?: Maybe<Array<EthereumAddressSelector>>;
};

/** Trades on DEX smart contracts */
export type EthereumDexTradesAnyArgs = {
  of: EthereumDexTradesMeasureable;
};

/** Trades on DEX smart contracts */
export type EthereumDexTradesBaseAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
};

/** Trades on DEX smart contracts */
export type EthereumDexTradesBaseCurrencyArgs = {
  baseCurrency?: Maybe<Array<EthereumCurrencySelector>>;
};

/** Trades on DEX smart contracts */
export type EthereumDexTradesBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Trades on DEX smart contracts */
export type EthereumDexTradesBuyAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
};

/** Trades on DEX smart contracts */
export type EthereumDexTradesBuyCurrencyArgs = {
  buyCurrency?: Maybe<Array<EthereumCurrencySelector>>;
};

/** Trades on DEX smart contracts */
export type EthereumDexTradesCountArgs = {
  uniq?: Maybe<EthereumDexTradesUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  protocol?: Maybe<Array<StringSelector>>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeName?: Maybe<Array<StringSelector>>;
  sellCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  buyCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  baseCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  quoteCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  maker?: Maybe<Array<EthereumAddressSelector>>;
  makerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>;
  taker?: Maybe<Array<EthereumAddressSelector>>;
  takerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>;
  makerOrTaker?: Maybe<Array<EthereumAddressSelector>>;
  tradeIndex?: Maybe<Array<StringSelector>>;
  buyAmount?: Maybe<Array<AmountSelector>>;
  sellAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
  priceAsymmetry?: Maybe<Array<FloatSelector>>;
  tradeAmountUsd?: Maybe<Array<FloatSelector>>;
};

/** Trades on DEX smart contracts */
export type EthereumDexTradesExchangeArgs = {
  exchangeAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeName?: Maybe<Array<StringSelector>>;
};

/** Trades on DEX smart contracts */
export type EthereumDexTradesGasArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  protocol?: Maybe<Array<StringSelector>>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeName?: Maybe<Array<StringSelector>>;
  sellCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  buyCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  baseCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  quoteCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  maker?: Maybe<Array<EthereumAddressSelector>>;
  makerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>;
  taker?: Maybe<Array<EthereumAddressSelector>>;
  takerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>;
  makerOrTaker?: Maybe<Array<EthereumAddressSelector>>;
  tradeIndex?: Maybe<Array<StringSelector>>;
  buyAmount?: Maybe<Array<AmountSelector>>;
  sellAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
  priceAsymmetry?: Maybe<Array<FloatSelector>>;
  tradeAmountUsd?: Maybe<Array<FloatSelector>>;
};

/** Trades on DEX smart contracts */
export type EthereumDexTradesGasPriceArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  protocol?: Maybe<Array<StringSelector>>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeName?: Maybe<Array<StringSelector>>;
  sellCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  buyCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  baseCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  quoteCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  maker?: Maybe<Array<EthereumAddressSelector>>;
  makerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>;
  taker?: Maybe<Array<EthereumAddressSelector>>;
  takerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>;
  makerOrTaker?: Maybe<Array<EthereumAddressSelector>>;
  tradeIndex?: Maybe<Array<StringSelector>>;
  buyAmount?: Maybe<Array<AmountSelector>>;
  sellAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
  priceAsymmetry?: Maybe<Array<FloatSelector>>;
  tradeAmountUsd?: Maybe<Array<FloatSelector>>;
};

/** Trades on DEX smart contracts */
export type EthereumDexTradesGasValueArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
};

/** Trades on DEX smart contracts */
export type EthereumDexTradesMakerArgs = {
  maker?: Maybe<Array<EthereumAddressSelector>>;
};

/** Trades on DEX smart contracts */
export type EthereumDexTradesMaximumArgs = {
  of: EthereumDexTradesMeasureable;
  get?: Maybe<EthereumDexTradesMeasureable>;
};

/** Trades on DEX smart contracts */
export type EthereumDexTradesMinimumArgs = {
  of: EthereumDexTradesMeasureable;
  get?: Maybe<EthereumDexTradesMeasureable>;
};

/** Trades on DEX smart contracts */
export type EthereumDexTradesPriceArgs = {
  calculate?: Maybe<PriceAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  protocol?: Maybe<Array<StringSelector>>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeName?: Maybe<Array<StringSelector>>;
  sellCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  buyCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  baseCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  quoteCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  maker?: Maybe<Array<EthereumAddressSelector>>;
  makerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>;
  taker?: Maybe<Array<EthereumAddressSelector>>;
  takerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>;
  makerOrTaker?: Maybe<Array<EthereumAddressSelector>>;
  tradeIndex?: Maybe<Array<StringSelector>>;
  buyAmount?: Maybe<Array<AmountSelector>>;
  sellAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
  priceAsymmetry?: Maybe<Array<FloatSelector>>;
  tradeAmountUsd?: Maybe<Array<FloatSelector>>;
};

/** Trades on DEX smart contracts */
export type EthereumDexTradesProtocolArgs = {
  protocol?: Maybe<Array<StringSelector>>;
};

/** Trades on DEX smart contracts */
export type EthereumDexTradesQuoteAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
};

/** Trades on DEX smart contracts */
export type EthereumDexTradesQuoteCurrencyArgs = {
  quoteCurrency?: Maybe<Array<EthereumCurrencySelector>>;
};

/** Trades on DEX smart contracts */
export type EthereumDexTradesQuotePriceArgs = {
  calculate?: Maybe<PriceAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  protocol?: Maybe<Array<StringSelector>>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeName?: Maybe<Array<StringSelector>>;
  sellCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  buyCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  baseCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  quoteCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  maker?: Maybe<Array<EthereumAddressSelector>>;
  makerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>;
  taker?: Maybe<Array<EthereumAddressSelector>>;
  takerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>;
  makerOrTaker?: Maybe<Array<EthereumAddressSelector>>;
  tradeIndex?: Maybe<Array<StringSelector>>;
  buyAmount?: Maybe<Array<AmountSelector>>;
  sellAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
  priceAsymmetry?: Maybe<Array<FloatSelector>>;
  tradeAmountUsd?: Maybe<Array<FloatSelector>>;
};

/** Trades on DEX smart contracts */
export type EthereumDexTradesSellAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
};

/** Trades on DEX smart contracts */
export type EthereumDexTradesSellCurrencyArgs = {
  sellCurrency?: Maybe<Array<EthereumCurrencySelector>>;
};

/** Trades on DEX smart contracts */
export type EthereumDexTradesSmartContractArgs = {
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
};

/** Trades on DEX smart contracts */
export type EthereumDexTradesTakerArgs = {
  taker?: Maybe<Array<EthereumAddressSelector>>;
};

/** Trades on DEX smart contracts */
export type EthereumDexTradesTradeAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in: BaseCurrencyEnum;
};

/** Trades on DEX smart contracts */
export type EthereumDexTradesTradeIndexArgs = {
  tradeIndex?: Maybe<Array<StringSelector>>;
};

/** Trades on DEX smart contracts */
export type EthereumDexTradesTransactionArgs = {
  txHash?: Maybe<Array<HashSelector>>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
};

export enum EthereumDexTradesMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Transaction hash */
  TX_HASH = 'tx_hash',
  /** Buy Amount */
  BUY_AMOUNT = 'buy_amount',
  /** Sell Amount */
  SELL_AMOUNT = 'sell_amount',
  /** Price */
  PRICE = 'price',
  /** Quote Price */
  QUOTE_PRICE = 'quote_price',
  /** Maker */
  MAKER = 'maker',
  /** Taker */
  TAKER = 'taker',
  /** Buy Currency symbol */
  BUY_CURRENCY_SYMBOL = 'buy_currency_symbol',
  /** Buy Token address */
  BUY_CURRENCY_ADDRESS = 'buy_currency_address',
  /** Sell Currency symbol */
  SELL_CURRENCY_SYMBOL = 'sell_currency_symbol',
  /** Sell Token address */
  SELL_CURRENCY_ADDRESS = 'sell_currency_address',
}

export enum EthereumDexTradesUniq {
  /** Unique TX senders count */
  SENDERS = 'senders',
  /** Unique makers count */
  MAKERS = 'makers',
  /** Unique makers count */
  TAKERS = 'takers',
  /** Unique makers & takers count */
  ADDRESS = 'address',
  /** Buy currencies count */
  BUY_CURRENCY = 'buy_currency',
  /** Sell currencies count */
  SELL_CURRENCY = 'sell_currency',
  /** Base currencies count */
  BASE_CURRENCY = 'base_currency',
  /** Quote currencies count */
  QUOTE_CURRENCY = 'quote_currency',
  /** Unique blocks */
  BLOCKS = 'blocks',
  /** Unique transactions count */
  TXS = 'txs',
  /** Unique date count */
  DATES = 'dates',
  /** Unique smart contract count */
  SMART_CONTRACTS = 'smart_contracts',
  /** Unique protocols count */
  PROTOCOLS = 'protocols',
}

export enum EthereumEventsMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Transaction hash */
  TX_HASH = 'tx_hash',
  /** Smart Contract */
  SMART_CONTRACT = 'smart_contract',
  /** Smart Contract Event Name */
  SIGNATURE_NAME = 'signature_name',
  /** Smart Contract Event Signature */
  SIGNATURE = 'signature',
  /** Smart Contract Event Signature Hash */
  SIGNATURE_HASH = 'signature_hash',
}

export enum EthereumNetwork {
  /** Ethereum Mainnet */
  ETHEREUM = 'ethereum',
  /** Ethereum Classic */
  ETHCLASSIC = 'ethclassic',
  /** Ethereum Classic ( no reorg from block 10904146) */
  ETHCLASSIC_REORG = 'ethclassic_reorg',
  /** Celo Alfajores Testnet */
  CELO_ALFAJORES = 'celo_alfajores',
  /** Celo Baklava Testnet */
  CELO_BAKLAVA = 'celo_baklava',
  /** Celo RC1 */
  CELO_RC1 = 'celo_rc1',
  /** Binance Smart Chain Mainnet */
  BSC = 'bsc',
  /** Binance Smart Chain Testnet */
  BSC_TESTNET = 'bsc_testnet',
  /** Goerli Ethereum Testnet */
  GOERLI = 'goerli',
}

/** Ethereum smart contract */
export type EthereumSmartContract = {
  __typename?: 'EthereumSmartContract';
  /** Smart Contract Address */
  address: Address;
  /** Smart Contract Type */
  contractType?: Maybe<SmartContractType>;
  /** Token implemented in this smart contract */
  currency?: Maybe<Currency>;
  /** Smart Contract Protocol Type */
  protocolType?: Maybe<Scalars['String']>;
};

export type EthereumSmartContractCallFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  caller?: Maybe<Array<EthereumAddressSelector>>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: Maybe<MethodSelector>;
  smartContractType?: Maybe<SmartContractTypeSelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Array<Scalars['Boolean']>>;
};

/** Smart Contract Calls */
export type EthereumSmartContractCalls = {
  __typename?: 'EthereumSmartContractCalls';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Call arguments */
  arguments?: Maybe<Array<ArgumentNameValue>>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Depth of the call. Empty string for external call, then counted as 0...N, and the next layer is added through '-'. For example 0-3-9. */
  callDepth?: Maybe<Scalars['String']>;
  /** Caller of the method invocation ( tx sender or another smart contract ) */
  caller?: Maybe<EthereumAddressInfo>;
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** External call executed explicitly by tx sender. Internal calls executed by smart contracts. */
  external?: Maybe<Scalars['Boolean']>;
  /** Gas used for transaction in external call, or by methd in internal call */
  gasValue?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Smart contract being called */
  smartContract?: Maybe<EthereumSmartContract>;
  /** Contract method invoked */
  smartContractMethod?: Maybe<Method>;
  /** True if call succeeded, false if error happened. Note, that by default only successfull calls are returned in API. */
  success?: Maybe<Scalars['Boolean']>;
  /** Transaction where call happened */
  transaction?: Maybe<EthereumTransactionInfo>;
};

/** Smart Contract Calls */
export type EthereumSmartContractCallsAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  caller?: Maybe<Array<EthereumAddressSelector>>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: Maybe<MethodSelector>;
  smartContractType?: Maybe<SmartContractTypeSelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Array<Scalars['Boolean']>>;
};

/** Smart Contract Calls */
export type EthereumSmartContractCallsAnyArgs = {
  of: EthereumCallsMeasureable;
};

/** Smart Contract Calls */
export type EthereumSmartContractCallsBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Smart Contract Calls */
export type EthereumSmartContractCallsCallerArgs = {
  caller?: Maybe<Array<EthereumAddressSelector>>;
};

/** Smart Contract Calls */
export type EthereumSmartContractCallsCountArgs = {
  uniq?: Maybe<SmartContractCallsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  caller?: Maybe<Array<EthereumAddressSelector>>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: Maybe<MethodSelector>;
  smartContractType?: Maybe<SmartContractTypeSelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Array<Scalars['Boolean']>>;
};

/** Smart Contract Calls */
export type EthereumSmartContractCallsExternalArgs = {
  external?: Maybe<Scalars['Boolean']>;
};

/** Smart Contract Calls */
export type EthereumSmartContractCallsGasValueArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  caller?: Maybe<Array<EthereumAddressSelector>>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: Maybe<MethodSelector>;
  smartContractType?: Maybe<SmartContractTypeSelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Array<Scalars['Boolean']>>;
};

/** Smart Contract Calls */
export type EthereumSmartContractCallsMaximumArgs = {
  of: EthereumCallsMeasureable;
  get?: Maybe<EthereumCallsMeasureable>;
};

/** Smart Contract Calls */
export type EthereumSmartContractCallsMinimumArgs = {
  of: EthereumCallsMeasureable;
  get?: Maybe<EthereumCallsMeasureable>;
};

/** Smart Contract Calls */
export type EthereumSmartContractCallsSmartContractArgs = {
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
};

/** Smart Contract Calls */
export type EthereumSmartContractCallsSmartContractMethodArgs = {
  smartContractMethod?: Maybe<MethodSelector>;
};

/** Smart Contract Calls */
export type EthereumSmartContractCallsSuccessArgs = {
  success?: Maybe<Array<Scalars['Boolean']>>;
};

/** Smart Contract Calls */
export type EthereumSmartContractCallsTransactionArgs = {
  txHash?: Maybe<Array<HashSelector>>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
};

/** Smart Contract Events */
export type EthereumSmartContractEvent = {
  __typename?: 'EthereumSmartContractEvent';
  any?: Maybe<Scalars['String']>;
  /** Event arguments */
  arguments?: Maybe<Array<ArgumentNameValue>>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Event index */
  eventIndex?: Maybe<Scalars['String']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Smart contract being called */
  smartContract?: Maybe<EthereumSmartContract>;
  /** Contract event logged */
  smartContractEvent?: Maybe<Event>;
  /** Transaction where event happened */
  transaction?: Maybe<EthereumTransactionInfo>;
};

/** Smart Contract Events */
export type EthereumSmartContractEventAnyArgs = {
  of: EthereumEventsMeasureable;
};

/** Smart Contract Events */
export type EthereumSmartContractEventBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Smart Contract Events */
export type EthereumSmartContractEventCountArgs = {
  uniq?: Maybe<SmartContractCallsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  smartContractType?: Maybe<SmartContractTypeSelector>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractEvent?: Maybe<EventSelector>;
};

/** Smart Contract Events */
export type EthereumSmartContractEventMaximumArgs = {
  of: EthereumEventsMeasureable;
  get?: Maybe<EthereumEventsMeasureable>;
};

/** Smart Contract Events */
export type EthereumSmartContractEventMinimumArgs = {
  of: EthereumEventsMeasureable;
  get?: Maybe<EthereumEventsMeasureable>;
};

/** Smart Contract Events */
export type EthereumSmartContractEventSmartContractArgs = {
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
};

/** Smart Contract Events */
export type EthereumSmartContractEventSmartContractEventArgs = {
  smartContractEvent?: Maybe<EventSelector>;
};

/** Smart Contract Events */
export type EthereumSmartContractEventTransactionArgs = {
  txHash?: Maybe<Array<HashSelector>>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
};

export type EthereumSmartContractEventFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  smartContractType?: Maybe<SmartContractTypeSelector>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractEvent?: Maybe<EventSelector>;
};

/** Blockchain smart contract */
export type EthereumSmartContractInfo = {
  __typename?: 'EthereumSmartContractInfo';
  /** Smart Contract Type */
  contractType?: Maybe<SmartContractType>;
  /** Token implemented in this smart contract */
  currency?: Maybe<Currency>;
  /** Smart Contract Protocol Type */
  protocolType?: Maybe<Scalars['String']>;
};

/** Blockchain smart contract */
export type EthereumSmartContractInfoWithAttributes = {
  __typename?: 'EthereumSmartContractInfoWithAttributes';
  /** Attributes from readonly methods */
  attributes?: Maybe<Array<SmartContractReadonlyAttribute>>;
  /** Smart Contract Type */
  contractType?: Maybe<SmartContractType>;
  /** Token implemented in this smart contract */
  currency?: Maybe<Currency>;
  /** Smart Contract Protocol Type */
  protocolType?: Maybe<Scalars['String']>;
};

export type EthereumTransactionFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  txCreates?: Maybe<Array<EthereumAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  gasValue?: Maybe<Array<AmountSelector>>;
};

/** Blockchain transaction info */
export type EthereumTransactionInfo = {
  __typename?: 'EthereumTransactionInfo';
  /** Gas consumed */
  gas: Scalars['Int'];
  /** Gas price in Gwei */
  gasPrice: Scalars['Float'];
  /** Gas value cost */
  gasValue: Scalars['Float'];
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction from address */
  txFrom: EthereumAddressInfo;
};

/** Blockchain Transaction Extended info */
export type EthereumTransactionInfoExtended = {
  __typename?: 'EthereumTransactionInfoExtended';
  /** Gas consumed */
  gas: Scalars['Int'];
  /** Gas price in Gwei */
  gasPrice: Scalars['Float'];
  /** Gas value cost */
  gasValue: Scalars['Float'];
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction index in block, 0 based */
  index?: Maybe<Scalars['Int']>;
  /** Transaction nonce */
  nonce?: Maybe<Scalars['Int']>;
  /** Transaction receiver */
  to?: Maybe<EthereumAddressInfo>;
  /** Transaction from address */
  txFrom: EthereumAddressInfo;
};

/** Transactions in Ethereum blockchain */
export type EthereumTransactions = {
  __typename?: 'EthereumTransactions';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  count?: Maybe<Scalars['Int']>;
  /** Created smart contract */
  creates?: Maybe<EthereumAddressInfo>;
  /** Currency of amount */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Error message if any */
  error?: Maybe<Scalars['String']>;
  gas?: Maybe<Scalars['Float']>;
  /** Currency of gas */
  gasCurrency?: Maybe<Currency>;
  /** Gas price in Gwei */
  gasPrice: Scalars['Float'];
  gasValue?: Maybe<Scalars['Float']>;
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction index in block, 0 based */
  index?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Transaction nonce */
  nonce?: Maybe<Scalars['Int']>;
  /** Transaction sender */
  sender?: Maybe<EthereumAddressInfo>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  /** Transaction receiver */
  to?: Maybe<EthereumAddressInfo>;
};

/** Transactions in Ethereum blockchain */
export type EthereumTransactionsAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  txCreates?: Maybe<Array<EthereumAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  gasValue?: Maybe<Array<AmountSelector>>;
};

/** Transactions in Ethereum blockchain */
export type EthereumTransactionsAnyArgs = {
  of: EthereumTransactionsMeasureable;
};

/** Transactions in Ethereum blockchain */
export type EthereumTransactionsBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Transactions in Ethereum blockchain */
export type EthereumTransactionsCountArgs = {
  uniq?: Maybe<EthereumTransactionsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  txCreates?: Maybe<Array<EthereumAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  gasValue?: Maybe<Array<AmountSelector>>;
};

/** Transactions in Ethereum blockchain */
export type EthereumTransactionsCreatesArgs = {
  txCreates?: Maybe<Array<EthereumAddressSelector>>;
};

/** Transactions in Ethereum blockchain */
export type EthereumTransactionsGasArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  txCreates?: Maybe<Array<EthereumAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  gasValue?: Maybe<Array<AmountSelector>>;
};

/** Transactions in Ethereum blockchain */
export type EthereumTransactionsGasCurrencyArgs = {
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>;
};

/** Transactions in Ethereum blockchain */
export type EthereumTransactionsGasPriceArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  txCreates?: Maybe<Array<EthereumAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  gasValue?: Maybe<Array<AmountSelector>>;
};

/** Transactions in Ethereum blockchain */
export type EthereumTransactionsGasValueArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  txCreates?: Maybe<Array<EthereumAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  gasValue?: Maybe<Array<AmountSelector>>;
};

/** Transactions in Ethereum blockchain */
export type EthereumTransactionsHashArgs = {
  txHash?: Maybe<Array<HashSelector>>;
};

/** Transactions in Ethereum blockchain */
export type EthereumTransactionsIndexArgs = {
  txIndex?: Maybe<Array<TxIndexSelector>>;
};

/** Transactions in Ethereum blockchain */
export type EthereumTransactionsMaximumArgs = {
  of: EthereumTransactionsMeasureable;
  get?: Maybe<EthereumTransactionsMeasureable>;
};

/** Transactions in Ethereum blockchain */
export type EthereumTransactionsMinimumArgs = {
  of: EthereumTransactionsMeasureable;
  get?: Maybe<EthereumTransactionsMeasureable>;
};

/** Transactions in Ethereum blockchain */
export type EthereumTransactionsSenderArgs = {
  txSender?: Maybe<Array<EthereumAddressSelector>>;
};

/** Transactions in Ethereum blockchain */
export type EthereumTransactionsSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>;
};

/** Transactions in Ethereum blockchain */
export type EthereumTransactionsToArgs = {
  txTo?: Maybe<Array<EthereumAddressSelector>>;
};

export enum EthereumTransactionsMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Transaction hash */
  TX_HASH = 'tx_hash',
  /** Amount */
  AMOUNT = 'amount',
  /** Transaction Sender */
  TX_SENDER = 'tx_sender',
  /** Gas value */
  GAS_VALUE = 'gas_value',
  /** Gas price */
  GAS_PRICE = 'gas_price',
  /** Gas used */
  GAS = 'gas',
}

export enum EthereumTransactionsUniq {
  /** Unique TX senders count */
  SENDERS = 'senders',
  /** Unique TX receivers count */
  RECEIVERS = 'receivers',
  /** Unique blocks */
  BLOCKS = 'blocks',
  /** Unique date count */
  DATES = 'dates',
}

export type EthereumTransferFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  entityId?: Maybe<EntitySelector>;
  sender?: Maybe<Array<EthereumAddressSelector>>;
  receiver?: Maybe<Array<EthereumAddressSelector>>;
  currency?: Maybe<Array<EthereumCurrencySelector>>;
  external?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfers = {
  __typename?: 'EthereumTransfers';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  count?: Maybe<Scalars['Int']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Entity identifier ( for ERC-721 NFT tokens ) */
  entityId?: Maybe<Scalars['String']>;
  /** External transfer executed explicitly by tx sender. Internal transfers executed by smart contracts. */
  external?: Maybe<Scalars['Boolean']>;
  gasValue?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Transfer receiver */
  receiver?: Maybe<EthereumAddressInfo>;
  /** Transfer sender */
  sender?: Maybe<EthereumAddressInfo>;
  /** Transaction where transfer happened */
  transaction?: Maybe<EthereumTransactionInfo>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  entityId?: Maybe<EntitySelector>;
  sender?: Maybe<Array<EthereumAddressSelector>>;
  receiver?: Maybe<Array<EthereumAddressSelector>>;
  currency?: Maybe<Array<EthereumCurrencySelector>>;
  external?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersAnyArgs = {
  of: EthereumTransfersMeasureable;
};

/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersCountArgs = {
  uniq?: Maybe<TransfersUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  entityId?: Maybe<EntitySelector>;
  sender?: Maybe<Array<EthereumAddressSelector>>;
  receiver?: Maybe<Array<EthereumAddressSelector>>;
  currency?: Maybe<Array<EthereumCurrencySelector>>;
  external?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersCurrencyArgs = {
  currency?: Maybe<Array<EthereumCurrencySelector>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersEntityIdArgs = {
  entityId?: Maybe<EntitySelector>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersExternalArgs = {
  external?: Maybe<Scalars['Boolean']>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersGasValueArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  entityId?: Maybe<EntitySelector>;
  sender?: Maybe<Array<EthereumAddressSelector>>;
  receiver?: Maybe<Array<EthereumAddressSelector>>;
  currency?: Maybe<Array<EthereumCurrencySelector>>;
  external?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersMaximumArgs = {
  of: EthereumTransfersMeasureable;
  get?: Maybe<EthereumTransfersMeasureable>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersMinimumArgs = {
  of: EthereumTransfersMeasureable;
  get?: Maybe<EthereumTransfersMeasureable>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersReceiverArgs = {
  receiver?: Maybe<Array<EthereumAddressSelector>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersSenderArgs = {
  sender?: Maybe<Array<EthereumAddressSelector>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersTransactionArgs = {
  txHash?: Maybe<Array<HashSelector>>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
};

export enum EthereumTransfersMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Transaction hash */
  TX_HASH = 'tx_hash',
  /** Amount */
  AMOUNT = 'amount',
  /** Sender */
  SENDER = 'sender',
  /** Receiver */
  RECEIVER = 'receiver',
  /** Currency symbol */
  CURRENCY_SYMBOL = 'currency_symbol',
  /** Token address */
  CURRENCY_ADDRESS = 'currency_address',
  /** Entity ID */
  ENTITY_ID = 'entity_id',
}

/** Smart contract event */
export type Event = {
  __typename?: 'Event';
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Signature */
  signature?: Maybe<Scalars['String']>;
  /** Signature Hash */
  signatureHash: Scalars['String'];
};

/** Smart contract event. In selector you can use the name, signature or hex hash */
export type EventSelector = {
  /** Event signature is */
  is?: Maybe<Scalars['String']>;
  /** Event signature not */
  not?: Maybe<Scalars['String']>;
  /** Event signature in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** Event signature not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
};

/** Filecoin */
export type Filecoin = {
  __typename?: 'Filecoin';
  /** Filecoin Network Blocks */
  blocks?: Maybe<Array<FilecoinBlock>>;
  /** Filecoin Network Calls */
  calls?: Maybe<Array<FilecoinCalls>>;
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<FilecoinCoinpath>>;
  /** Filecoin Network Messages ( blocks, transfers, ... ) */
  messages?: Maybe<Array<FilecoinMessages>>;
  /** Filecoin Network Currency Transfers */
  transfers?: Maybe<Array<FilecoinTransfers>>;
};

/** Filecoin */
export type FilecoinBlocksArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<AddressSelector>>;
  blockIndex?: Maybe<IntegerSelector>;
  any?: Maybe<Array<FilecoinBlockFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Filecoin */
export type FilecoinCallsArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  amount?: Maybe<AmountSelector>;
  messageMethod?: Maybe<IntegerSelector>;
  any?: Maybe<Array<FilecoinCallFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Filecoin */
export type FilecoinCoinpathArgs = {
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  initialAddress?: Maybe<AddressSelector>;
  initialDate?: Maybe<DateSelector>;
  initialTime?: Maybe<DateTimeSelector>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  depth?: Maybe<IntegerLimitedSelector>;
  options?: Maybe<CoinpathOptions>;
};

/** Filecoin */
export type FilecoinMessagesArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  index?: Maybe<IntegerSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<AmountSelector>;
  any?: Maybe<Array<FilecoinMessageFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Filecoin */
export type FilecoinTransfersArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  amount?: Maybe<AmountSelector>;
  transferType?: Maybe<TransferTypeSelector>;
  messageMethod?: Maybe<IntegerSelector>;
  any?: Maybe<Array<FilecoinTransferFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Block */
export type FilecoinBlock = {
  __typename?: 'FilecoinBlock';
  any?: Maybe<Scalars['String']>;
  blockSig?: Maybe<NameWithId>;
  blsAggregate?: Maybe<NameWithId>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  electionProof?: Maybe<Scalars['String']>;
  forkSignalling?: Maybe<Scalars['BigInt']>;
  /** Block hash */
  hash: Scalars['String'];
  /** Block round in blockchain */
  height: Scalars['Int'];
  /** Block index on height */
  index?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  messageCount?: Maybe<Scalars['Int']>;
  messages?: Maybe<Scalars['String']>;
  /** Miner */
  miner?: Maybe<Address>;
  minerTips?: Maybe<Scalars['Float']>;
  minimum?: Maybe<Scalars['String']>;
  parentMessageReceipts?: Maybe<Scalars['String']>;
  parentStateRoot?: Maybe<Scalars['String']>;
  parentWeight?: Maybe<Scalars['BigInt']>;
  reward?: Maybe<Scalars['Float']>;
  ticket?: Maybe<Scalars['String']>;
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
  totalReward?: Maybe<Scalars['Float']>;
  winCount?: Maybe<Scalars['Int']>;
  wincount?: Maybe<Scalars['Int']>;
};

/** Block */
export type FilecoinBlockAnyArgs = {
  of: FilecoinBlocksMeasureable;
};

/** Block */
export type FilecoinBlockCountArgs = {
  uniq?: Maybe<FilecoinBlockUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<AddressSelector>>;
  blockIndex?: Maybe<IntegerSelector>;
};

/** Block */
export type FilecoinBlockHashArgs = {
  blockHash?: Maybe<Array<HashSelector>>;
};

/** Block */
export type FilecoinBlockHeightArgs = {
  height?: Maybe<BlockSelector>;
};

/** Block */
export type FilecoinBlockIndexArgs = {
  blockIndex?: Maybe<IntegerSelector>;
};

/** Block */
export type FilecoinBlockMaximumArgs = {
  of: FilecoinBlocksMeasureable;
  get?: Maybe<FilecoinBlocksMeasureable>;
};

/** Block */
export type FilecoinBlockMessageCountArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<AddressSelector>>;
  blockIndex?: Maybe<IntegerSelector>;
};

/** Block */
export type FilecoinBlockMinerArgs = {
  miner?: Maybe<AddressSelector>;
};

/** Block */
export type FilecoinBlockMinerTipsArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<AddressSelector>>;
  blockIndex?: Maybe<IntegerSelector>;
};

/** Block */
export type FilecoinBlockMinimumArgs = {
  of: FilecoinBlocksMeasureable;
  get?: Maybe<FilecoinBlocksMeasureable>;
};

/** Block */
export type FilecoinBlockRewardArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<AddressSelector>>;
  blockIndex?: Maybe<IntegerSelector>;
};

/** Block */
export type FilecoinBlockTimestampArgs = {
  time?: Maybe<DateTimeSelector>;
};

/** Block */
export type FilecoinBlockTotalRewardArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<AddressSelector>>;
  blockIndex?: Maybe<IntegerSelector>;
};

/** Block */
export type FilecoinBlockWinCountArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<AddressSelector>>;
  blockIndex?: Maybe<IntegerSelector>;
};

export type FilecoinBlockFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<AddressSelector>>;
  blockIndex?: Maybe<IntegerSelector>;
};

export enum FilecoinBlockUniq {
  /** Miner */
  MINERS = 'miners',
  /** Unique date count */
  DATES = 'dates',
  /** Unique block height count */
  HEIGHTS = 'heights',
  /** Unique block count */
  BLOCKS = 'blocks',
}

export enum FilecoinBlocksMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Block hash */
  BLOCK_HASH = 'block_hash',
  /** Block Miner */
  MINER = 'miner',
}

export type FilecoinCallFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  amount?: Maybe<AmountSelector>;
  messageMethod?: Maybe<IntegerSelector>;
};

/** Calls in Filecoin blockchain */
export type FilecoinCalls = {
  __typename?: 'FilecoinCalls';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer Message is included */
  block?: Maybe<Block>;
  /** Call hash */
  callHash?: Maybe<Scalars['String']>;
  /** Call hash */
  callPath?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  exitCode?: Maybe<Scalars['BigInt']>;
  gas?: Maybe<Scalars['Int']>;
  gasFeeCap?: Maybe<Scalars['BigInt']>;
  gasLimit?: Maybe<Scalars['BigInt']>;
  gasPremium?: Maybe<Scalars['Float']>;
  /** Message hash */
  hash?: Maybe<Scalars['String']>;
  maximum?: Maybe<Scalars['String']>;
  /** Message Method */
  messageMethod?: Maybe<NameWithId>;
  /** Method */
  method?: Maybe<NameWithId>;
  minedBlock?: Maybe<FilecoinMinedBlock>;
  minimum?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['BigInt']>;
  /** Message receiver */
  receiver?: Maybe<AddressWithAccount>;
  returnValue?: Maybe<Scalars['String']>;
  /** Message sender */
  sender?: Maybe<AddressWithAccount>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
};

/** Calls in Filecoin blockchain */
export type FilecoinCallsAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  amount?: Maybe<AmountSelector>;
  messageMethod?: Maybe<IntegerSelector>;
};

/** Calls in Filecoin blockchain */
export type FilecoinCallsAnyArgs = {
  of: FilecoinCallsMeasureable;
};

/** Calls in Filecoin blockchain */
export type FilecoinCallsBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Calls in Filecoin blockchain */
export type FilecoinCallsCountArgs = {
  uniq?: Maybe<FilecoinMessagesUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  amount?: Maybe<AmountSelector>;
  messageMethod?: Maybe<IntegerSelector>;
};

/** Calls in Filecoin blockchain */
export type FilecoinCallsGasArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  index?: Maybe<IntegerSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<AmountSelector>;
};

/** Calls in Filecoin blockchain */
export type FilecoinCallsHashArgs = {
  hash?: Maybe<HashSelector>;
};

/** Calls in Filecoin blockchain */
export type FilecoinCallsMaximumArgs = {
  of: FilecoinCallsMeasureable;
  get?: Maybe<FilecoinCallsMeasureable>;
};

/** Calls in Filecoin blockchain */
export type FilecoinCallsMessageMethodArgs = {
  messageMethod?: Maybe<IntegerSelector>;
};

/** Calls in Filecoin blockchain */
export type FilecoinCallsMethodArgs = {
  method?: Maybe<IntegerSelector>;
};

/** Calls in Filecoin blockchain */
export type FilecoinCallsMinimumArgs = {
  of: FilecoinCallsMeasureable;
  get?: Maybe<FilecoinCallsMeasureable>;
};

/** Calls in Filecoin blockchain */
export type FilecoinCallsReceiverArgs = {
  receiver?: Maybe<AddressSelector>;
};

/** Calls in Filecoin blockchain */
export type FilecoinCallsSenderArgs = {
  sender?: Maybe<AddressSelector>;
};

/** Calls in Filecoin blockchain */
export type FilecoinCallsSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>;
};

export enum FilecoinCallsMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Message hash */
  MESSAGE_HASH = 'message_hash',
  /** Amount */
  AMOUNT = 'amount',
  /** Gas value */
  GAS_VALUE = 'gas_value',
  /** Gas limit */
  GAS_LIMIT = 'gas_limit',
  /** Gas used */
  GAS = 'gas',
}

/** Coinpath */
export type FilecoinCoinpath = {
  __typename?: 'FilecoinCoinpath';
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Count of transfers */
  count?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  /** Message of transfer happened */
  message?: Maybe<TransactionHashValue>;
  minimum?: Maybe<Scalars['String']>;
  /** Receiver address */
  receiver?: Maybe<Address>;
  /** Sender address */
  sender?: Maybe<Address>;
};

/** Coinpath */
export type FilecoinCoinpathAmountArgs = {
  in?: Maybe<BaseCurrencyEnum>;
};

/** Coinpath */
export type FilecoinCoinpathAnyArgs = {
  of: CoinpathMeasureable;
};

/** Coinpath */
export type FilecoinCoinpathMaximumArgs = {
  of: CoinpathMeasureable;
  get?: Maybe<CoinpathMeasureable>;
};

/** Coinpath */
export type FilecoinCoinpathMinimumArgs = {
  of: CoinpathMeasureable;
  get?: Maybe<CoinpathMeasureable>;
};

export type FilecoinMessageFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  index?: Maybe<IntegerSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<AmountSelector>;
};

/** Messages in Filecoin blockchain */
export type FilecoinMessages = {
  __typename?: 'FilecoinMessages';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  baseFeeBurn?: Maybe<Scalars['Float']>;
  /** Block where transfer Message is included */
  block?: Maybe<Block>;
  burned?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  exitCode?: Maybe<Scalars['BigInt']>;
  gas?: Maybe<Scalars['Int']>;
  gasFeeCap?: Maybe<Scalars['BigInt']>;
  gasLimit?: Maybe<Scalars['BigInt']>;
  gasPremium?: Maybe<Scalars['Float']>;
  /** Message hash */
  hash?: Maybe<Scalars['String']>;
  maximum?: Maybe<Scalars['String']>;
  /** Method */
  method?: Maybe<NameWithId>;
  minedBlock?: Maybe<FilecoinMinedBlock>;
  minerPenalty?: Maybe<Scalars['Float']>;
  minerTip?: Maybe<Scalars['Float']>;
  minimum?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['BigInt']>;
  overEstimationBurn?: Maybe<Scalars['Float']>;
  /** Message receiver */
  receiver?: Maybe<AddressWithAccount>;
  refund?: Maybe<Scalars['Float']>;
  returnValue?: Maybe<Scalars['String']>;
  /** Message sender */
  sender?: Maybe<AddressWithAccount>;
  signature?: Maybe<Scalars['String']>;
  signatureType?: Maybe<Scalars['String']>;
  /** Signed Message hash */
  signedHash?: Maybe<Scalars['String']>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  totalCost?: Maybe<Scalars['Float']>;
};

/** Messages in Filecoin blockchain */
export type FilecoinMessagesAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  index?: Maybe<IntegerSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<AmountSelector>;
};

/** Messages in Filecoin blockchain */
export type FilecoinMessagesAnyArgs = {
  of: FilecoinMessagesMeasureable;
};

/** Messages in Filecoin blockchain */
export type FilecoinMessagesBaseFeeBurnArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  index?: Maybe<IntegerSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<AmountSelector>;
};

/** Messages in Filecoin blockchain */
export type FilecoinMessagesBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Messages in Filecoin blockchain */
export type FilecoinMessagesBurnedArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  index?: Maybe<IntegerSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<AmountSelector>;
};

/** Messages in Filecoin blockchain */
export type FilecoinMessagesCountArgs = {
  uniq?: Maybe<FilecoinMessagesUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  index?: Maybe<IntegerSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<AmountSelector>;
};

/** Messages in Filecoin blockchain */
export type FilecoinMessagesGasArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  index?: Maybe<IntegerSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<AmountSelector>;
};

/** Messages in Filecoin blockchain */
export type FilecoinMessagesHashArgs = {
  hash?: Maybe<HashSelector>;
};

/** Messages in Filecoin blockchain */
export type FilecoinMessagesMaximumArgs = {
  of: FilecoinMessagesMeasureable;
  get?: Maybe<FilecoinMessagesMeasureable>;
};

/** Messages in Filecoin blockchain */
export type FilecoinMessagesMethodArgs = {
  method?: Maybe<IntegerSelector>;
};

/** Messages in Filecoin blockchain */
export type FilecoinMessagesMinerPenaltyArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  index?: Maybe<IntegerSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<AmountSelector>;
};

/** Messages in Filecoin blockchain */
export type FilecoinMessagesMinerTipArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  index?: Maybe<IntegerSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<AmountSelector>;
};

/** Messages in Filecoin blockchain */
export type FilecoinMessagesMinimumArgs = {
  of: FilecoinMessagesMeasureable;
  get?: Maybe<FilecoinMessagesMeasureable>;
};

/** Messages in Filecoin blockchain */
export type FilecoinMessagesOverEstimationBurnArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  index?: Maybe<IntegerSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<AmountSelector>;
};

/** Messages in Filecoin blockchain */
export type FilecoinMessagesReceiverArgs = {
  receiver?: Maybe<AddressSelector>;
};

/** Messages in Filecoin blockchain */
export type FilecoinMessagesRefundArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  index?: Maybe<IntegerSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<AmountSelector>;
};

/** Messages in Filecoin blockchain */
export type FilecoinMessagesSenderArgs = {
  sender?: Maybe<AddressSelector>;
};

/** Messages in Filecoin blockchain */
export type FilecoinMessagesSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>;
};

/** Messages in Filecoin blockchain */
export type FilecoinMessagesTotalCostArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  index?: Maybe<IntegerSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<AmountSelector>;
};

export enum FilecoinMessagesMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Message hash */
  MESSAGE_HASH = 'message_hash',
  /** Amount */
  AMOUNT = 'amount',
  /** Gas value */
  GAS_VALUE = 'gas_value',
  /** Gas limit */
  GAS_LIMIT = 'gas_limit',
  /** Gas used */
  GAS = 'gas',
}

export enum FilecoinMessagesUniq {
  /** Unique block heights */
  BLOCKS = 'blocks',
  /** Unique date count */
  DATES = 'dates',
  /** Unique Message senders */
  SENDERS = 'senders',
  /** Unique Message receivers */
  RECEIVERS = 'receivers',
}

/** Filecoin Mined Block */
export type FilecoinMinedBlock = {
  __typename?: 'FilecoinMinedBlock';
  /** Hash */
  hash?: Maybe<Scalars['String']>;
  /** Index on height */
  index?: Maybe<Scalars['Int']>;
  /** Miner */
  miner?: Maybe<Address>;
};

export enum FilecoinNetwork {
  /** Filecoin Mainnet */
  FILECOIN = 'filecoin',
}

export type FilecoinTransferFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  amount?: Maybe<AmountSelector>;
  transferType?: Maybe<TransferTypeSelector>;
  messageMethod?: Maybe<IntegerSelector>;
};

export enum FilecoinTransferType {
  /** Send (transfer) */
  SEND = 'send',
  /** Miner Tip */
  MINER = 'miner',
  /** Reward */
  REWARD = 'reward',
  /** Burn */
  BURN = 'burn',
  /** Rebalance */
  REBALANCE = 'rebalance',
  /** Genesis */
  GENESIS = 'genesis',
}

/** Transfers in Filecoin blockchain */
export type FilecoinTransfers = {
  __typename?: 'FilecoinTransfers';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer Transfer is included */
  block?: Maybe<BlockExtended>;
  /** Call hash */
  callHash?: Maybe<Scalars['String']>;
  /** Call hash */
  callPath?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Message hash */
  hash?: Maybe<Scalars['String']>;
  maximum?: Maybe<Scalars['String']>;
  /** Message Method */
  messageMethod?: Maybe<NameWithId>;
  /** Method */
  method?: Maybe<NameWithId>;
  minimum?: Maybe<Scalars['String']>;
  /** Transfer receiver */
  receiver?: Maybe<Address>;
  /** Transfer sender */
  sender?: Maybe<Address>;
  /** Transfer timestamp */
  timestamp?: Maybe<DateTime>;
  /** Type of transfer */
  transferType?: Maybe<FilecoinTransferType>;
};

/** Transfers in Filecoin blockchain */
export type FilecoinTransfersAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  amount?: Maybe<AmountSelector>;
  transferType?: Maybe<TransferTypeSelector>;
  messageMethod?: Maybe<IntegerSelector>;
};

/** Transfers in Filecoin blockchain */
export type FilecoinTransfersAnyArgs = {
  of: FilecoinTransfersMeasureable;
};

/** Transfers in Filecoin blockchain */
export type FilecoinTransfersBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Transfers in Filecoin blockchain */
export type FilecoinTransfersCountArgs = {
  uniq?: Maybe<FilecoinMessagesUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  amount?: Maybe<AmountSelector>;
  transferType?: Maybe<TransferTypeSelector>;
  messageMethod?: Maybe<IntegerSelector>;
};

/** Transfers in Filecoin blockchain */
export type FilecoinTransfersHashArgs = {
  hash?: Maybe<HashSelector>;
};

/** Transfers in Filecoin blockchain */
export type FilecoinTransfersMaximumArgs = {
  of: FilecoinTransfersMeasureable;
  get?: Maybe<FilecoinTransfersMeasureable>;
};

/** Transfers in Filecoin blockchain */
export type FilecoinTransfersMessageMethodArgs = {
  messageMethod?: Maybe<IntegerSelector>;
};

/** Transfers in Filecoin blockchain */
export type FilecoinTransfersMethodArgs = {
  method?: Maybe<IntegerSelector>;
};

/** Transfers in Filecoin blockchain */
export type FilecoinTransfersMinimumArgs = {
  of: FilecoinTransfersMeasureable;
  get?: Maybe<FilecoinTransfersMeasureable>;
};

/** Transfers in Filecoin blockchain */
export type FilecoinTransfersReceiverArgs = {
  receiver?: Maybe<AddressSelector>;
};

/** Transfers in Filecoin blockchain */
export type FilecoinTransfersSenderArgs = {
  sender?: Maybe<AddressSelector>;
};

/** Transfers in Filecoin blockchain */
export type FilecoinTransfersTimestampArgs = {
  time?: Maybe<DateTimeSelector>;
};

/** Transfers in Filecoin blockchain */
export type FilecoinTransfersTransferTypeArgs = {
  transferType?: Maybe<TransferTypeSelector>;
};

export enum FilecoinTransfersMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Block hash */
  BLOCK_HASH = 'block_hash',
  /** Transfer hash */
  TX_HASH = 'tx_hash',
  /** Value */
  VALUE = 'value',
  /** Gas value */
  GAS_VALUE = 'gas_value',
  /** Gas limit */
  GAS_LIMIT = 'gas_limit',
  /** Gas used */
  GAS = 'gas',
}

/** Select by number */
export type FloatSelector = {
  /** is */
  is?: Maybe<Scalars['Float']>;
  /** not */
  not?: Maybe<Scalars['Float']>;
  /** in the list */
  in?: Maybe<Array<Scalars['Float']>>;
  /** not in the list */
  notIn?: Maybe<Array<Scalars['Float']>>;
  /** greater than */
  gt?: Maybe<Scalars['Float']>;
  /** less than */
  lt?: Maybe<Scalars['Float']>;
  /** less or equal than */
  lteq?: Maybe<Scalars['Float']>;
  /** greater or equal than */
  gteq?: Maybe<Scalars['Float']>;
  /** in range */
  between?: Maybe<Array<Scalars['Float']>>;
};

export enum FlowDirection {
  /** Inbound transfers */
  INBOUND = 'inbound',
  /** Outbound transfers */
  OUTBOUND = 'outbound',
}

/** Select by hash */
export type HashSelector = {
  /** Hash is */
  is?: Maybe<Scalars['String']>;
  /** Hash not */
  not?: Maybe<Scalars['String']>;
  /** Hash in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** Hash not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
};

/** Hedera Chain */
export type Hedera = {
  __typename?: 'Hedera';
  /** Blockchain Arguments */
  arguments?: Maybe<Array<HederaArgument>>;
  /** Blockhain Calls */
  calls?: Maybe<Array<HederaCall>>;
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<HederaCoinpath>>;
  /** Blockhain Inputs */
  inputs?: Maybe<Array<HederaInput>>;
  /** Blockhain Messages */
  messages?: Maybe<Array<HederaMessage>>;
  /** Blockchain Outputs */
  outputs?: Maybe<Array<HederaOutput>>;
  /** Blockchain Transactions */
  transactions?: Maybe<Array<HederaTransaction>>;
};

/** Hedera Chain */
export type HederaArgumentsArgs = {
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  smartContractEntity?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  success?: Maybe<Scalars['Boolean']>;
  any?: Maybe<Array<HederaArgumentFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Hedera Chain */
export type HederaCallsArgs = {
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  smartContractEntity?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  callInput?: Maybe<HashSelector>;
  callResult?: Maybe<HashSelector>;
  success?: Maybe<Scalars['Boolean']>;
  any?: Maybe<Array<HederaCallFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Hedera Chain */
export type HederaCoinpathArgs = {
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  initialAddress?: Maybe<AddressSelector>;
  initialDate?: Maybe<DateSelector>;
  initialTime?: Maybe<DateTimeSelector>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  depth?: Maybe<IntegerLimitedSelector>;
  options?: Maybe<CoinpathOptions>;
};

/** Hedera Chain */
export type HederaInputsArgs = {
  date?: Maybe<DateSelector>;
  transferEntity?: Maybe<StringSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  any?: Maybe<Array<HederaInputFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Hedera Chain */
export type HederaMessagesArgs = {
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  transactionRunningHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
  any?: Maybe<Array<HederaMessageFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Hedera Chain */
export type HederaOutputsArgs = {
  date?: Maybe<DateSelector>;
  transferEntity?: Maybe<StringSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
  any?: Maybe<Array<HederaOutputFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Hedera Chain */
export type HederaTransactionsArgs = {
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
  any?: Maybe<Array<HederaTransactionFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Blockchain accounts */
export type HederaAccount = {
  __typename?: 'HederaAccount';
  /** Account */
  account: Scalars['String'];
};

/** Arguments in Hedera blockchain */
export type HederaArgument = {
  __typename?: 'HederaArgument';
  any?: Maybe<Scalars['String']>;
  /** Argument type */
  argtype?: Maybe<Scalars['String']>;
  /** Argument */
  argument?: Maybe<Scalars['String']>;
  chargedTxFee?: Maybe<Scalars['BigInt']>;
  consensusTimestamp?: Maybe<Timestamp>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Currency of transfer */
  feeCurrency?: Maybe<Currency>;
  initialBalance?: Maybe<Scalars['Float']>;
  maxFee?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /**
   * Used to reference a specific
   *       account of the node the transaction is being sent to
   */
  nodeAccount?: Maybe<Account>;
  /**
   * Used to
   *       reference a specific account in transactions
   */
  payerAccount?: Maybe<Account>;
  /** Transaction result */
  result?: Maybe<TransactionResult>;
  /** Smart contract */
  smartContractEntity?: Maybe<Account>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  transactionBytes?: Maybe<Scalars['String']>;
  transactionFee?: Maybe<Scalars['Float']>;
  /** Transaction hash where transfer happened */
  transactionHash?: Maybe<Scalars['String']>;
  transactionValidDurationInSec?: Maybe<Scalars['Int']>;
  validStart?: Maybe<Timestamp>;
  /** Value */
  value?: Maybe<Scalars['String']>;
};

/** Arguments in Hedera blockchain */
export type HederaArgumentAnyArgs = {
  of: HederaArgumentsMeasureable;
};

/** Arguments in Hedera blockchain */
export type HederaArgumentCountArgs = {
  uniq?: Maybe<HederaArgumentsUniq>;
};

/** Arguments in Hedera blockchain */
export type HederaArgumentInitialBalanceArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  smartContractEntity?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Arguments in Hedera blockchain */
export type HederaArgumentMaxFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  smartContractEntity?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Arguments in Hedera blockchain */
export type HederaArgumentMaximumArgs = {
  of: HederaArgumentsMeasureable;
  get?: Maybe<HederaArgumentsMeasureable>;
};

/** Arguments in Hedera blockchain */
export type HederaArgumentMinimumArgs = {
  of: HederaArgumentsMeasureable;
  get?: Maybe<HederaArgumentsMeasureable>;
};

/** Arguments in Hedera blockchain */
export type HederaArgumentResultArgs = {
  result?: Maybe<HashSelector>;
};

/** Arguments in Hedera blockchain */
export type HederaArgumentSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>;
};

/** Arguments in Hedera blockchain */
export type HederaArgumentTransactionFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  smartContractEntity?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Arguments in Hedera blockchain */
export type HederaArgumentTransactionHashArgs = {
  transactionHash?: Maybe<HashSelector>;
};

/** Arguments in Hedera blockchain */
export type HederaArgumentValidStartArgs = {
  time?: Maybe<DateTimeSelector>;
  nanoseconds?: Maybe<Scalars['BigInt']>;
};

export type HederaArgumentFilter = {
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  smartContractEntity?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  success?: Maybe<Scalars['Boolean']>;
};

export enum HederaArgumentsMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Valid start */
  VALID_START = 'valid_start',
  /** Valid duration */
  VALID_DURATION = 'valid_duration',
  /** Transaction Hash */
  TRANSACTION_HASH = 'transaction_hash',
  /** Max Fee */
  MAX_FEE = 'max_fee',
  /** Charged Fee */
  TRANSACTION_FEE = 'transaction_fee',
}

export enum HederaArgumentsUniq {
  /** Unique time */
  TIMES = 'times',
  /** Unique date count */
  DATES = 'dates',
  /** Unique consensus time */
  CONSENSUS_TIMES = 'consensus_times',
  /** Unique payer account */
  PAYER_ACCOUNT = 'payer_account',
  /** Unique node account */
  NODE_ACCOUNT = 'node_account',
  /** Unique node account */
  SMART_CONTRACT_ENTITY = 'smart_contract_entity',
  /** Unique initial balance */
  INITIAL_BALANCE = 'initial_balance',
}

/** Calls in Hedera blockchain */
export type HederaCall = {
  __typename?: 'HederaCall';
  any?: Maybe<Scalars['String']>;
  /** Call input */
  callInput?: Maybe<Scalars['String']>;
  /** Call input */
  callResult?: Maybe<Scalars['String']>;
  chargedTxFee?: Maybe<Scalars['BigInt']>;
  consensusTimestamp?: Maybe<Timestamp>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Currency of transfer */
  feeCurrency?: Maybe<Currency>;
  gas?: Maybe<Scalars['Int']>;
  initialBalance?: Maybe<Scalars['Float']>;
  maxFee?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /**
   * Used to reference a specific
   *       account of the node the transaction is being sent to
   */
  nodeAccount?: Maybe<Account>;
  /**
   * Used to
   *       reference a specific account in transactions
   */
  payerAccount?: Maybe<Account>;
  /** Transaction result */
  result?: Maybe<TransactionResult>;
  /** Smart contract */
  smartContractEntity?: Maybe<Account>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  transactionBytes?: Maybe<Scalars['String']>;
  transactionFee?: Maybe<Scalars['Float']>;
  /** Transaction hash where transfer happened */
  transactionHash?: Maybe<Scalars['String']>;
  transactionValidDurationInSec?: Maybe<Scalars['Int']>;
  validStart?: Maybe<Timestamp>;
};

/** Calls in Hedera blockchain */
export type HederaCallAnyArgs = {
  of: HederaCallsMeasureable;
};

/** Calls in Hedera blockchain */
export type HederaCallCallInputArgs = {
  callInput?: Maybe<HashSelector>;
};

/** Calls in Hedera blockchain */
export type HederaCallCallResultArgs = {
  callResult?: Maybe<HashSelector>;
};

/** Calls in Hedera blockchain */
export type HederaCallCountArgs = {
  uniq?: Maybe<HederaCallsUniq>;
};

/** Calls in Hedera blockchain */
export type HederaCallGasArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  smartContractEntity?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  callInput?: Maybe<HashSelector>;
  callResult?: Maybe<HashSelector>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Calls in Hedera blockchain */
export type HederaCallInitialBalanceArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  smartContractEntity?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Calls in Hedera blockchain */
export type HederaCallMaxFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  smartContractEntity?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Calls in Hedera blockchain */
export type HederaCallMaximumArgs = {
  of: HederaCallsMeasureable;
  get?: Maybe<HederaCallsMeasureable>;
};

/** Calls in Hedera blockchain */
export type HederaCallMinimumArgs = {
  of: HederaCallsMeasureable;
  get?: Maybe<HederaCallsMeasureable>;
};

/** Calls in Hedera blockchain */
export type HederaCallResultArgs = {
  result?: Maybe<HashSelector>;
};

/** Calls in Hedera blockchain */
export type HederaCallSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>;
};

/** Calls in Hedera blockchain */
export type HederaCallTransactionFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  smartContractEntity?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Calls in Hedera blockchain */
export type HederaCallTransactionHashArgs = {
  transactionHash?: Maybe<HashSelector>;
};

/** Calls in Hedera blockchain */
export type HederaCallValidStartArgs = {
  time?: Maybe<DateTimeSelector>;
  nanoseconds?: Maybe<Scalars['BigInt']>;
};

export type HederaCallFilter = {
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  smartContractEntity?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  callInput?: Maybe<HashSelector>;
  callResult?: Maybe<HashSelector>;
  success?: Maybe<Scalars['Boolean']>;
};

export enum HederaCallsMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Valid start */
  VALID_START = 'valid_start',
  /** Valid duration */
  VALID_DURATION = 'valid_duration',
  /** Transaction Hash */
  TRANSACTION_HASH = 'transaction_hash',
  /** Max Fee */
  MAX_FEE = 'max_fee',
  /** Charged Fee */
  TRANSACTION_FEE = 'transaction_fee',
}

export enum HederaCallsUniq {
  /** Unique time */
  TIMES = 'times',
  /** Unique date count */
  DATES = 'dates',
  /** Unique consensus time */
  CONSENSUS_TIMES = 'consensus_times',
  /** Unique payer account */
  PAYER_ACCOUNT = 'payer_account',
  /** Unique node account */
  NODE_ACCOUNT = 'node_account',
  /** Unique node account */
  SMART_CONTRACT_ENTITY = 'smart_contract_entity',
  /** Unique initial balance */
  INITIAL_BALANCE = 'initial_balance',
}

/** Coinpath */
export type HederaCoinpath = {
  __typename?: 'HederaCoinpath';
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Count of transfers */
  count?: Maybe<Scalars['Int']>;
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Receiver address */
  receiver?: Maybe<Address>;
  /** Sender address */
  sender?: Maybe<Address>;
  /** Attributes of transaction included in Coinpath result */
  transactions?: Maybe<Array<CoinpathEntry>>;
};

/** Coinpath */
export type HederaCoinpathAmountArgs = {
  in?: Maybe<BaseCurrencyEnum>;
};

/** Coinpath */
export type HederaCoinpathAnyArgs = {
  of: CoinpathMeasureable;
};

/** Coinpath */
export type HederaCoinpathMaximumArgs = {
  of: CoinpathMeasureable;
  get?: Maybe<CoinpathMeasureable>;
};

/** Coinpath */
export type HederaCoinpathMinimumArgs = {
  of: CoinpathMeasureable;
  get?: Maybe<CoinpathMeasureable>;
};

/** Currency selector in Hedera blockchain. */
export type HederaCurrencySelector = {
  /** Currency is */
  is?: Maybe<Scalars['String']>;
  /** Currency not */
  not?: Maybe<Scalars['String']>;
  /** Currency in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** Currency not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
};

/** Inputs in Hedera blockchain */
export type HederaInput = {
  __typename?: 'HederaInput';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  consensusTimestamp?: Maybe<Timestamp>;
  count?: Maybe<Scalars['Int']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Entity */
  entity?: Maybe<Entity>;
  /** Currency of transfer */
  feeCurrency?: Maybe<Currency>;
  initialBalance?: Maybe<Scalars['Float']>;
  maxFee?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /**
   * Used to reference a specific
   *       account of the node the transaction is being sent to
   */
  nodeAccount?: Maybe<Account>;
  /**
   * Used to
   *       reference a specific account in transactions
   */
  payerAccount?: Maybe<Account>;
  /** Transaction result */
  result?: Maybe<TransactionResult>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  /** Calendar time */
  time?: Maybe<DateTime>;
  transactionFee?: Maybe<Scalars['Float']>;
  /** Transaction hash where transfer happened */
  transactionHash?: Maybe<Scalars['String']>;
  transactionValidDurationInSec?: Maybe<Scalars['Int']>;
  /** Transfer Account */
  transferEntity?: Maybe<Account>;
  validStart?: Maybe<Timestamp>;
};

/** Inputs in Hedera blockchain */
export type HederaInputAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  transferEntity?: Maybe<StringSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
};

/** Inputs in Hedera blockchain */
export type HederaInputAnyArgs = {
  of: HederaInputMeasureable;
};

/** Inputs in Hedera blockchain */
export type HederaInputCountArgs = {
  uniq?: Maybe<HederaInputsUniq>;
};

/** Inputs in Hedera blockchain */
export type HederaInputCurrencyArgs = {
  currency?: Maybe<HederaCurrencySelector>;
};

/** Inputs in Hedera blockchain */
export type HederaInputEntityArgs = {
  entityType?: Maybe<EntityTypeSelector>;
};

/** Inputs in Hedera blockchain */
export type HederaInputInitialBalanceArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  transferEntity?: Maybe<StringSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
};

/** Inputs in Hedera blockchain */
export type HederaInputMaxFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  transferEntity?: Maybe<StringSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
};

/** Inputs in Hedera blockchain */
export type HederaInputMaximumArgs = {
  of: HederaInputMeasureable;
  get?: Maybe<HederaInputMeasureable>;
};

/** Inputs in Hedera blockchain */
export type HederaInputMinimumArgs = {
  of: HederaInputMeasureable;
  get?: Maybe<HederaInputMeasureable>;
};

/** Inputs in Hedera blockchain */
export type HederaInputResultArgs = {
  result?: Maybe<HashSelector>;
};

/** Inputs in Hedera blockchain */
export type HederaInputSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>;
};

/** Inputs in Hedera blockchain */
export type HederaInputTransactionFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  transferEntity?: Maybe<StringSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
};

/** Inputs in Hedera blockchain */
export type HederaInputTransactionHashArgs = {
  transactionHash?: Maybe<HashSelector>;
};

/** Inputs in Hedera blockchain */
export type HederaInputValidStartArgs = {
  time?: Maybe<DateTimeSelector>;
  nanoseconds?: Maybe<Scalars['BigInt']>;
};

export type HederaInputFilter = {
  date?: Maybe<DateSelector>;
  transferEntity?: Maybe<StringSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
};

export enum HederaInputMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Valid start */
  VALID_START = 'valid_start',
  /** Valid duration */
  VALID_DURATION = 'valid_duration',
  /** Transaction Hash */
  TRANSACTION_HASH = 'transaction_hash',
  /** Max Fee */
  MAX_FEE = 'max_fee',
  /** Charged Fee */
  TRANSACTION_FEE = 'transaction_fee',
  /** Amount */
  AMOUNT = 'amount',
}

export enum HederaInputsUniq {
  /** Unique time */
  TIMES = 'times',
  /** Unique date count */
  DATES = 'dates',
  /** Unique consensus time */
  CONSENSUS_TIMES = 'consensus_times',
  /** Unique payer account */
  PAYER_ACCOUNT = 'payer_account',
  /** Unique node account */
  NODE_ACCOUNT = 'node_account',
  /** Unique entity id */
  ENTITY_ID = 'entity_id',
  /** Unique entity type */
  ENTITY_TYPE = 'entity_type',
  /** Unique initial balance */
  INITIAL_BALANCE = 'initial_balance',
}

/** Messages in Hedera blockchain */
export type HederaMessage = {
  __typename?: 'HederaMessage';
  any?: Maybe<Scalars['String']>;
  consensusTimestamp?: Maybe<Timestamp>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Entity */
  entity?: Maybe<Entity>;
  /** Currency of transfer */
  feeCurrency?: Maybe<Currency>;
  initialBalance?: Maybe<Scalars['Float']>;
  maxFee?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /**
   * Used to reference a specific
   *       account of the node the transaction is being sent to
   */
  nodeAccount?: Maybe<Account>;
  /**
   * Used to
   *       reference a specific account in transactions
   */
  payerAccount?: Maybe<Account>;
  /** Transaction result */
  result?: Maybe<TransactionResult>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  /** Calendar date time */
  time?: Maybe<DateTime>;
  /** Transaction running hash */
  topicRunningHash?: Maybe<Scalars['String']>;
  /** Transaction running hash */
  topicSequenceNumber?: Maybe<Scalars['String']>;
  transactionFee?: Maybe<Scalars['Float']>;
  /** Transaction hash where transfer happened */
  transactionHash?: Maybe<Scalars['String']>;
  transactionValidDurationInSec?: Maybe<Scalars['Int']>;
  validStart?: Maybe<Timestamp>;
};

/** Messages in Hedera blockchain */
export type HederaMessageAnyArgs = {
  of: HederaMessageMeasureable;
};

/** Messages in Hedera blockchain */
export type HederaMessageCountArgs = {
  uniq?: Maybe<HederaMessagesUniq>;
};

/** Messages in Hedera blockchain */
export type HederaMessageEntityArgs = {
  entityType?: Maybe<EntityTypeSelector>;
};

/** Messages in Hedera blockchain */
export type HederaMessageInitialBalanceArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  transactionRunningHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Messages in Hedera blockchain */
export type HederaMessageMaxFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  transactionRunningHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Messages in Hedera blockchain */
export type HederaMessageMaximumArgs = {
  of: HederaMessageMeasureable;
  get?: Maybe<HederaMessageMeasureable>;
};

/** Messages in Hedera blockchain */
export type HederaMessageMinimumArgs = {
  of: HederaMessageMeasureable;
  get?: Maybe<HederaMessageMeasureable>;
};

/** Messages in Hedera blockchain */
export type HederaMessageResultArgs = {
  result?: Maybe<HashSelector>;
};

/** Messages in Hedera blockchain */
export type HederaMessageSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>;
};

/** Messages in Hedera blockchain */
export type HederaMessageTopicRunningHashArgs = {
  topicRunningHash?: Maybe<StringSelector>;
};

/** Messages in Hedera blockchain */
export type HederaMessageTopicSequenceNumberArgs = {
  topicSequenceNumber?: Maybe<HashSelector>;
};

/** Messages in Hedera blockchain */
export type HederaMessageTransactionFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  transactionRunningHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Messages in Hedera blockchain */
export type HederaMessageTransactionHashArgs = {
  transactionHash?: Maybe<HashSelector>;
};

/** Messages in Hedera blockchain */
export type HederaMessageValidStartArgs = {
  time?: Maybe<DateTimeSelector>;
  nanoseconds?: Maybe<Scalars['BigInt']>;
};

export type HederaMessageFilter = {
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  transactionRunningHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
};

export enum HederaMessageMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Valid start */
  VALID_START = 'valid_start',
  /** Valid duration */
  VALID_DURATION = 'valid_duration',
  /** Transaction Hash */
  TRANSACTION_HASH = 'transaction_hash',
  /** Max Fee */
  MAX_FEE = 'max_fee',
  /** Charged Fee */
  TRANSACTION_FEE = 'transaction_fee',
}

export enum HederaMessagesUniq {
  /** Unique time */
  TIMES = 'times',
  /** Unique date count */
  DATES = 'dates',
  /** Unique consensus time */
  CONSENSUS_TIMES = 'consensus_times',
  /** Unique payer account */
  PAYER_ACCOUNT = 'payer_account',
  /** Unique node account */
  NODE_ACCOUNT = 'node_account',
  /** Unique entity id */
  ENTITY_ID = 'entity_id',
  /** Unique entity type */
  ENTITY_TYPE = 'entity_type',
  /** Unique initial balance */
  INITIAL_BALANCE = 'initial_balance',
}

export enum HederaNetwork {
  /** The Hedera mainnet */
  HEDERA = 'hedera',
  /** The Hedera testnets */
  HEDERA_TESTNETS = 'hedera_testnets',
}

/** Outputs in Hedera blockchain */
export type HederaOutput = {
  __typename?: 'HederaOutput';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  consensusTimestamp?: Maybe<Timestamp>;
  count?: Maybe<Scalars['Int']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Entity */
  entity?: Maybe<Entity>;
  /** Currency of transfer */
  feeCurrency?: Maybe<Currency>;
  initialBalance?: Maybe<Scalars['Float']>;
  maxFee?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /**
   * Used to reference a specific
   *       account of the node the transaction is being sent to
   */
  nodeAccount?: Maybe<Account>;
  /**
   * Used to
   *       reference a specific account in transactions
   */
  payerAccount?: Maybe<Account>;
  /** Transaction result */
  result?: Maybe<TransactionResult>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  /** Calendar time */
  time?: Maybe<DateTime>;
  transactionFee?: Maybe<Scalars['Float']>;
  /** Transaction hash where transfer happened */
  transactionHash?: Maybe<Scalars['String']>;
  transactionValidDurationInSec?: Maybe<Scalars['Int']>;
  /** Transfer Account */
  transferEntity?: Maybe<Account>;
  validStart?: Maybe<Timestamp>;
};

/** Outputs in Hedera blockchain */
export type HederaOutputAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  transferEntity?: Maybe<StringSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
};

/** Outputs in Hedera blockchain */
export type HederaOutputAnyArgs = {
  of: HederaOutputMeasureable;
};

/** Outputs in Hedera blockchain */
export type HederaOutputCountArgs = {
  uniq?: Maybe<HederaOutputUniq>;
};

/** Outputs in Hedera blockchain */
export type HederaOutputCurrencyArgs = {
  currency?: Maybe<HederaCurrencySelector>;
};

/** Outputs in Hedera blockchain */
export type HederaOutputEntityArgs = {
  entityType?: Maybe<EntityTypeSelector>;
};

/** Outputs in Hedera blockchain */
export type HederaOutputInitialBalanceArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  transferEntity?: Maybe<StringSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Outputs in Hedera blockchain */
export type HederaOutputMaxFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  transferEntity?: Maybe<StringSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Outputs in Hedera blockchain */
export type HederaOutputMaximumArgs = {
  of: HederaOutputMeasureable;
  get?: Maybe<HederaOutputMeasureable>;
};

/** Outputs in Hedera blockchain */
export type HederaOutputMinimumArgs = {
  of: HederaOutputMeasureable;
  get?: Maybe<HederaOutputMeasureable>;
};

/** Outputs in Hedera blockchain */
export type HederaOutputResultArgs = {
  result?: Maybe<HashSelector>;
};

/** Outputs in Hedera blockchain */
export type HederaOutputSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>;
};

/** Outputs in Hedera blockchain */
export type HederaOutputTransactionFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  transferEntity?: Maybe<StringSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Outputs in Hedera blockchain */
export type HederaOutputTransactionHashArgs = {
  transactionHash?: Maybe<HashSelector>;
};

/** Outputs in Hedera blockchain */
export type HederaOutputValidStartArgs = {
  time?: Maybe<DateTimeSelector>;
  nanoseconds?: Maybe<Scalars['BigInt']>;
};

export type HederaOutputFilter = {
  date?: Maybe<DateSelector>;
  transferEntity?: Maybe<StringSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
};

export enum HederaOutputMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Valid start */
  VALID_START = 'valid_start',
  /** Valid duration */
  VALID_DURATION = 'valid_duration',
  /** Transaction Hash */
  TRANSACTION_HASH = 'transaction_hash',
  /** Max Fee */
  MAX_FEE = 'max_fee',
  /** Charged Fee */
  TRANSACTION_FEE = 'transaction_fee',
  /** Amount */
  AMOUNT = 'amount',
}

export enum HederaOutputUniq {
  /** Unique time */
  TIMES = 'times',
  /** Unique date count */
  DATES = 'dates',
  /** Unique consensus time */
  CONSENSUS_TIMES = 'consensus_times',
  /** Unique Transfer entity */
  TRANSFER_ENTITY = 'transfer_entity',
  /** Unique payer account */
  PAYER_ACCOUNT = 'payer_account',
  /** Unique node account */
  NODE_ACCOUNT = 'node_account',
  /** Unique entity id */
  ENTITY_ID = 'entity_id',
  /** Unique entity type */
  ENTITY_TYPE = 'entity_type',
  /** Unique initial balance */
  INITIAL_BALANCE = 'initial_balance',
}

/** Transactions in Hedera blockchain */
export type HederaTransaction = {
  __typename?: 'HederaTransaction';
  any?: Maybe<Scalars['String']>;
  consensusTimestamp?: Maybe<Timestamp>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Entity */
  entity?: Maybe<Entity>;
  /** Currency of transfer */
  feeCurrency?: Maybe<Currency>;
  initialBalance?: Maybe<Scalars['Float']>;
  maxFee?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /**
   * Used to reference a specific
   *       account of the node the transaction is being sent to
   */
  nodeAccount?: Maybe<Account>;
  /**
   * Used to
   *       reference a specific account in transactions
   */
  payerAccount?: Maybe<Account>;
  /** Transaction result */
  result?: Maybe<TransactionResult>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  /** Calendar time */
  time?: Maybe<DateTime>;
  transactionBytes?: Maybe<Scalars['String']>;
  transactionFee?: Maybe<Scalars['Float']>;
  /** Transaction hash where transfer happened */
  transactionHash?: Maybe<Scalars['String']>;
  /** Transaction Type */
  transactionType?: Maybe<Scalars['String']>;
  transactionValidDurationInSec?: Maybe<Scalars['Int']>;
  validStart?: Maybe<Timestamp>;
};

/** Transactions in Hedera blockchain */
export type HederaTransactionAnyArgs = {
  of: HederaTransactionMeasureable;
};

/** Transactions in Hedera blockchain */
export type HederaTransactionCountArgs = {
  uniq?: Maybe<HederaTransactionsUniq>;
};

/** Transactions in Hedera blockchain */
export type HederaTransactionEntityArgs = {
  entityType?: Maybe<EntityTypeSelector>;
};

/** Transactions in Hedera blockchain */
export type HederaTransactionInitialBalanceArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Transactions in Hedera blockchain */
export type HederaTransactionMaxFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Transactions in Hedera blockchain */
export type HederaTransactionMaximumArgs = {
  of: HederaTransactionMeasureable;
  get?: Maybe<HederaTransactionMeasureable>;
};

/** Transactions in Hedera blockchain */
export type HederaTransactionMinimumArgs = {
  of: HederaTransactionMeasureable;
  get?: Maybe<HederaTransactionMeasureable>;
};

/** Transactions in Hedera blockchain */
export type HederaTransactionResultArgs = {
  result?: Maybe<HashSelector>;
};

/** Transactions in Hedera blockchain */
export type HederaTransactionSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>;
};

/** Transactions in Hedera blockchain */
export type HederaTransactionTransactionFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Transactions in Hedera blockchain */
export type HederaTransactionTransactionHashArgs = {
  transactionHash?: Maybe<HashSelector>;
};

/** Transactions in Hedera blockchain */
export type HederaTransactionValidStartArgs = {
  time?: Maybe<DateTimeSelector>;
  nanoseconds?: Maybe<Scalars['BigInt']>;
};

export type HederaTransactionFilter = {
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
};

export enum HederaTransactionMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Valid start */
  VALID_START = 'valid_start',
  /** Valid duration */
  VALID_DURATION = 'valid_duration',
  /** Transaction Hash */
  TRANSACTION_HASH = 'transaction_hash',
  /** Max Fee */
  MAX_FEE = 'max_fee',
  /** Charged Fee */
  TRANSACTION_FEE = 'transaction_fee',
}

export enum HederaTransactionsUniq {
  /** Unique time */
  TIMES = 'times',
  /** Unique date count */
  DATES = 'dates',
  /** Unique consensus time */
  CONSENSUS_TIMES = 'consensus_times',
  /** Unique transaction type */
  TRANSACTION_TYPE = 'transaction_type',
  /** Unique payer account */
  PAYER_ACCOUNT = 'payer_account',
  /** Unique node account */
  NODE_ACCOUNT = 'node_account',
  /** Unique entity id */
  ENTITY_ID = 'entity_id',
  /** Unique entity type */
  ENTITY_TYPE = 'entity_type',
  /** Unique initial balance */
  INITIAL_BALANCE = 'initial_balance',
}

/** Input Script Type of UTXO transaction input */
export type InputScript = {
  __typename?: 'InputScript';
  /** Script annotation */
  annotation?: Maybe<Scalars['String']>;
  /** Long script pattern */
  pattern: Scalars['String'];
  /** Short script pattern */
  shortPattern: Scalars['String'];
  /** Simple script pattern */
  simplePattern: Scalars['String'];
  /** Script type */
  type?: Maybe<BitcoinInputScriptType>;
};

/** Select by ID */
export type IntIdSelector = {
  /** ID is */
  is?: Maybe<Scalars['Int']>;
  /** ID not */
  not?: Maybe<Scalars['Int']>;
  /** ID in the list */
  in?: Maybe<Array<Scalars['Int']>>;
  /** ID not in the list */
  notIn?: Maybe<Array<Scalars['Int']>>;
  /** ID greater than */
  gt?: Maybe<Scalars['Int']>;
  /** ID less than */
  lt?: Maybe<Scalars['Int']>;
  /** ID less or equal than */
  lteq?: Maybe<Scalars['Int']>;
  /** ID greater or equal than */
  gteq?: Maybe<Scalars['Int']>;
  /** ID in range */
  between?: Maybe<Array<Scalars['Int']>>;
};

/** Select limited upper number */
export type IntegerLimitedSelector = {
  /** is */
  is?: Maybe<Scalars['Int']>;
  /** in the list */
  in?: Maybe<Array<Scalars['Int']>>;
  /** less than */
  lt?: Maybe<Scalars['Int']>;
  /** less or equal than */
  lteq?: Maybe<Scalars['Int']>;
  /** in range */
  between?: Maybe<Array<Scalars['Int']>>;
};

/** Select by number */
export type IntegerSelector = {
  /** is */
  is?: Maybe<Scalars['Int']>;
  /** not */
  not?: Maybe<Scalars['Int']>;
  /** in the list */
  in?: Maybe<Array<Scalars['Int']>>;
  /** not in the list */
  notIn?: Maybe<Array<Scalars['Int']>>;
  /** greater than */
  gt?: Maybe<Scalars['Int']>;
  /** less than */
  lt?: Maybe<Scalars['Int']>;
  /** less or equal than */
  lteq?: Maybe<Scalars['Int']>;
  /** greater or equal than */
  gteq?: Maybe<Scalars['Int']>;
  /** in range */
  between?: Maybe<Array<Scalars['Int']>>;
};

/** Libra */
export type Libra = {
  __typename?: 'Libra';
  /** Libra Network Blocks */
  blocks?: Maybe<Array<LibraBlock>>;
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<LibraCoinpath>>;
  /** Libra Network Currency Minting */
  mints?: Maybe<Array<LibraMints>>;
  /** Libra Network Transactions */
  transactions?: Maybe<Array<LibraTransactions>>;
  /** Libra Network Currency Transfers */
  transfers?: Maybe<Array<LibraTransfers>>;
};

/** Libra */
export type LibraBlocksArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  proposer?: Maybe<Array<AddressSelector>>;
  metadata?: Maybe<StringSelector>;
  any?: Maybe<Array<LibraBlockFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Libra */
export type LibraCoinpathArgs = {
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<Array<LibraCurrencySelector>>;
  initialAddress?: Maybe<AddressSelector>;
  initialDate?: Maybe<DateSelector>;
  initialTime?: Maybe<DateTimeSelector>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  depth?: Maybe<IntegerLimitedSelector>;
  options?: Maybe<CoinpathOptions>;
};

/** Libra */
export type LibraMintsArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  block?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  minter?: Maybe<AddressSelector>;
  currency?: Maybe<Array<LibraCurrencySelector>>;
  amount?: Maybe<Array<AmountSelector>>;
  any?: Maybe<Array<LibraMintFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Libra */
export type LibraTransactionsArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  txSender?: Maybe<AddressSelector>;
  scriptType?: Maybe<ScriptTypeSelectorSelector>;
  success?: Maybe<Scalars['Boolean']>;
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>;
  scriptHash?: Maybe<StringSelector>;
  any?: Maybe<Array<LibraTransactionFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Libra */
export type LibraTransfersArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  txSender?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<Array<LibraCurrencySelector>>;
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>;
  amount?: Maybe<Array<AmountSelector>>;
  scriptType?: Maybe<ScriptTypeSelectorSelector>;
  scriptHash?: Maybe<StringSelector>;
  any?: Maybe<Array<LibraTransferFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Block */
export type LibraBlock = {
  __typename?: 'LibraBlock';
  any?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  gasUsed?: Maybe<Scalars['Float']>;
  /** Block round in blockchain */
  height: Scalars['Int'];
  /** Key */
  key?: Maybe<Scalars['String']>;
  maximum?: Maybe<Scalars['String']>;
  /** Metadata */
  metadata?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Proposer */
  proposer?: Maybe<Address>;
  /** Sequence number */
  sequenceNumber?: Maybe<Scalars['Int']>;
  /** Status Name */
  statusName?: Maybe<Scalars['String']>;
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
  /** Version of transaction for this block */
  version: Scalars['Int'];
  /** Version hash of transaction for this block */
  versionHash: Scalars['String'];
  /** VM Status */
  vmStatus?: Maybe<Scalars['Int']>;
};

/** Block */
export type LibraBlockAnyArgs = {
  of: LibraBlocksMeasureable;
};

/** Block */
export type LibraBlockCountArgs = {
  uniq?: Maybe<LibraBlockUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  proposer?: Maybe<Array<AddressSelector>>;
  metadata?: Maybe<StringSelector>;
};

/** Block */
export type LibraBlockGasUsedArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  proposer?: Maybe<Array<AddressSelector>>;
  metadata?: Maybe<StringSelector>;
};

/** Block */
export type LibraBlockHeightArgs = {
  height?: Maybe<BlockSelector>;
};

/** Block */
export type LibraBlockMaximumArgs = {
  of: LibraBlocksMeasureable;
  get?: Maybe<LibraBlocksMeasureable>;
};

/** Block */
export type LibraBlockMetadataArgs = {
  metadata?: Maybe<StringSelector>;
};

/** Block */
export type LibraBlockMinimumArgs = {
  of: LibraBlocksMeasureable;
  get?: Maybe<LibraBlocksMeasureable>;
};

/** Block */
export type LibraBlockProposerArgs = {
  proposer?: Maybe<AddressSelector>;
};

/** Block */
export type LibraBlockTimestampArgs = {
  time?: Maybe<DateTimeSelector>;
};

/** Block */
export type LibraBlockVersionArgs = {
  version?: Maybe<IntegerSelector>;
};

export type LibraBlockFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  proposer?: Maybe<Array<AddressSelector>>;
  metadata?: Maybe<StringSelector>;
};

export enum LibraBlockUniq {
  /** Proposer */
  PROPOSER = 'proposer',
  /** Unique date count */
  DATES = 'dates',
}

export enum LibraBlocksMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block round */
  BLOCK = 'block',
  /** Version */
  VERSION = 'version',
  /** Proposer */
  PROPOSER = 'proposer',
  /** Gas Used */
  GAS_USED = 'gas_used',
}

/** Coinpath */
export type LibraCoinpath = {
  __typename?: 'LibraCoinpath';
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Count of transfers */
  count?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Receiver address */
  receiver?: Maybe<Address>;
  /** Sender address */
  sender?: Maybe<Address>;
  /** Transaction of transfer happened */
  transaction?: Maybe<LibraTransactionValue>;
};

/** Coinpath */
export type LibraCoinpathAmountArgs = {
  in?: Maybe<BaseCurrencyEnum>;
};

/** Coinpath */
export type LibraCoinpathAnyArgs = {
  of: LibraCoinpathMeasureable;
};

/** Coinpath */
export type LibraCoinpathMaximumArgs = {
  of: LibraCoinpathMeasureable;
  get?: Maybe<LibraCoinpathMeasureable>;
};

/** Coinpath */
export type LibraCoinpathMinimumArgs = {
  of: LibraCoinpathMeasureable;
  get?: Maybe<LibraCoinpathMeasureable>;
};

export enum LibraCoinpathMeasureable {
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Version */
  VERSION = 'version',
  /** Sender */
  SENDER = 'sender',
  /** Receiver */
  RECEIVER = 'receiver',
  /** Depth */
  DEPTH = 'depth',
}

/**
 * Currency selector in Libra blockchain.
 * Libra has native chain currency (LBR) and a number of others ( Coin1/Coin2 ) for Testnet.
 * Use name of currency for selection
 */
export type LibraCurrencySelector = {
  /** Currency is */
  is?: Maybe<Scalars['String']>;
  /** Currency not */
  not?: Maybe<Scalars['String']>;
  /** Currency in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** Currency not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
};

export type LibraMintFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  block?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  minter?: Maybe<AddressSelector>;
  currency?: Maybe<Array<LibraCurrencySelector>>;
  amount?: Maybe<Array<AmountSelector>>;
};

/** Mints in Libra blockchain */
export type LibraMints = {
  __typename?: 'LibraMints';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  count?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Minter */
  minter?: Maybe<Address>;
  /** Sequence number */
  sequenceNumber?: Maybe<Scalars['Int']>;
  /** Status Name */
  statusName?: Maybe<Scalars['String']>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  /** Mint timestamp */
  timestamp?: Maybe<DateTime>;
  /** Version of blockchain for this transaction */
  version: Scalars['Int'];
  /** Version hash of blockchain for this transaction */
  versionHash: Scalars['String'];
  /** VM Status */
  vmStatus?: Maybe<Scalars['Int']>;
};

/** Mints in Libra blockchain */
export type LibraMintsAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  block?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  minter?: Maybe<AddressSelector>;
  currency?: Maybe<Array<LibraCurrencySelector>>;
  amount?: Maybe<Array<AmountSelector>>;
};

/** Mints in Libra blockchain */
export type LibraMintsAnyArgs = {
  of: LibraMintsMeasureable;
};

/** Mints in Libra blockchain */
export type LibraMintsBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Mints in Libra blockchain */
export type LibraMintsCountArgs = {
  uniq?: Maybe<LibraMintsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  block?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  minter?: Maybe<AddressSelector>;
  currency?: Maybe<Array<LibraCurrencySelector>>;
  amount?: Maybe<Array<AmountSelector>>;
};

/** Mints in Libra blockchain */
export type LibraMintsCurrencyArgs = {
  currency?: Maybe<Array<LibraCurrencySelector>>;
};

/** Mints in Libra blockchain */
export type LibraMintsMaximumArgs = {
  of: LibraMintsMeasureable;
  get?: Maybe<LibraMintsMeasureable>;
};

/** Mints in Libra blockchain */
export type LibraMintsMinimumArgs = {
  of: LibraMintsMeasureable;
  get?: Maybe<LibraMintsMeasureable>;
};

/** Mints in Libra blockchain */
export type LibraMintsMinterArgs = {
  sender?: Maybe<AddressSelector>;
};

/** Mints in Libra blockchain */
export type LibraMintsSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>;
};

/** Mints in Libra blockchain */
export type LibraMintsTimestampArgs = {
  time?: Maybe<DateTimeSelector>;
};

/** Mints in Libra blockchain */
export type LibraMintsVersionArgs = {
  version?: Maybe<IntegerSelector>;
};

export enum LibraMintsMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Version */
  VERSION = 'version',
  /** Mint version hash */
  VERSION_HASH = 'version_hash',
  /** Amount */
  AMOUNT = 'amount',
  /** Minter */
  MINTER = 'minter',
  /** Currency symbol */
  CURRENCY_SYMBOL = 'currency_symbol',
}

export enum LibraMintsUniq {
  /** Unique blocks */
  BLOCKS = 'blocks',
  /** Unique versions */
  VERSIONS = 'versions',
  /** Unique date count */
  DATES = 'dates',
  /** Unique minters */
  MINTERS = 'minters',
  /** Unique currencies */
  CURRENCIES = 'currencies',
}

export type LibraTransactionFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  txSender?: Maybe<AddressSelector>;
  scriptType?: Maybe<ScriptTypeSelectorSelector>;
  success?: Maybe<Scalars['Boolean']>;
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>;
  scriptHash?: Maybe<StringSelector>;
};

/** Blockchain transaction with value */
export type LibraTransactionValue = {
  __typename?: 'LibraTransactionValue';
  /** Transaction value */
  value: Scalars['Float'];
  /** Transaction version */
  version: Scalars['Int'];
};

/** Transactions in Libra blockchain */
export type LibraTransactions = {
  __typename?: 'LibraTransactions';
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  count?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Expiration Time */
  expirationTime?: Maybe<DateTime>;
  gas?: Maybe<Scalars['Int']>;
  /** Currency of gas */
  gasCurrency?: Maybe<Currency>;
  /** Gas unit price */
  gasPrice: Scalars['Float'];
  gasValue?: Maybe<Scalars['Float']>;
  /** Max gas amount */
  maxGasAmount?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Public key */
  publicKey?: Maybe<Scalars['String']>;
  /** Script Hash */
  scriptHash?: Maybe<Scalars['String']>;
  /** Script Type */
  scriptType?: Maybe<ScriptTypeSelectorSelector>;
  /** Transaction sender */
  sender?: Maybe<Address>;
  /** Sequence number */
  sequenceNumber?: Maybe<Scalars['Int']>;
  /** Signature */
  signature?: Maybe<Scalars['String']>;
  /** Signature scheme */
  signatureScheme?: Maybe<Scalars['String']>;
  /** Status Name */
  statusName?: Maybe<Scalars['String']>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  /** Transaction timestamp */
  timestamp?: Maybe<DateTime>;
  /** Version of blockchain for this transaction */
  version: Scalars['Int'];
  /** Version hash of blockchain for this transaction */
  versionHash: Scalars['String'];
  /** VM Status */
  vmStatus?: Maybe<Scalars['Int']>;
};

/** Transactions in Libra blockchain */
export type LibraTransactionsAnyArgs = {
  of: LibraTransactionsMeasureable;
};

/** Transactions in Libra blockchain */
export type LibraTransactionsBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Transactions in Libra blockchain */
export type LibraTransactionsCountArgs = {
  uniq?: Maybe<LibraTransactionsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  txSender?: Maybe<AddressSelector>;
  scriptType?: Maybe<ScriptTypeSelectorSelector>;
  success?: Maybe<Scalars['Boolean']>;
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>;
  scriptHash?: Maybe<StringSelector>;
};

/** Transactions in Libra blockchain */
export type LibraTransactionsGasArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  txSender?: Maybe<AddressSelector>;
  scriptType?: Maybe<ScriptTypeSelectorSelector>;
  success?: Maybe<Scalars['Boolean']>;
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>;
  scriptHash?: Maybe<StringSelector>;
};

/** Transactions in Libra blockchain */
export type LibraTransactionsGasCurrencyArgs = {
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>;
};

/** Transactions in Libra blockchain */
export type LibraTransactionsGasPriceArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  txSender?: Maybe<AddressSelector>;
  scriptType?: Maybe<ScriptTypeSelectorSelector>;
  success?: Maybe<Scalars['Boolean']>;
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>;
  scriptHash?: Maybe<StringSelector>;
};

/** Transactions in Libra blockchain */
export type LibraTransactionsGasValueArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  txSender?: Maybe<AddressSelector>;
  scriptType?: Maybe<ScriptTypeSelectorSelector>;
  success?: Maybe<Scalars['Boolean']>;
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>;
  scriptHash?: Maybe<StringSelector>;
};

/** Transactions in Libra blockchain */
export type LibraTransactionsMaximumArgs = {
  of: LibraTransactionsMeasureable;
  get?: Maybe<LibraTransactionsMeasureable>;
};

/** Transactions in Libra blockchain */
export type LibraTransactionsMinimumArgs = {
  of: LibraTransactionsMeasureable;
  get?: Maybe<LibraTransactionsMeasureable>;
};

/** Transactions in Libra blockchain */
export type LibraTransactionsScriptHashArgs = {
  scriptHash?: Maybe<StringSelector>;
};

/** Transactions in Libra blockchain */
export type LibraTransactionsSenderArgs = {
  txSender?: Maybe<AddressSelector>;
};

/** Transactions in Libra blockchain */
export type LibraTransactionsSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>;
};

/** Transactions in Libra blockchain */
export type LibraTransactionsTimestampArgs = {
  time?: Maybe<DateTimeSelector>;
};

/** Transactions in Libra blockchain */
export type LibraTransactionsVersionArgs = {
  version?: Maybe<IntegerSelector>;
};

export enum LibraTransactionsMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Version */
  VERSION = 'version',
  /** Transaction Sender */
  TX_SENDER = 'tx_sender',
  /** Script Hash */
  SCRIPT_HASH = 'script_hash',
  /** Gas price */
  GAS_PRICE = 'gas_price',
  /** Gas used */
  GAS = 'gas',
}

export enum LibraTransactionsUniq {
  /** Unique blocks */
  BLOCKS = 'blocks',
  /** Unique versions */
  VERSIONS = 'versions',
  /** Unique date count */
  DATES = 'dates',
  /** Unique transaction senders */
  SENDERS = 'senders',
  /** Unique transaction script hashes */
  SCRIPTS = 'scripts',
}

export type LibraTransferFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  txSender?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<Array<LibraCurrencySelector>>;
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>;
  amount?: Maybe<Array<AmountSelector>>;
  scriptType?: Maybe<ScriptTypeSelectorSelector>;
  scriptHash?: Maybe<StringSelector>;
};

/** Transfers in Libra blockchain */
export type LibraTransfers = {
  __typename?: 'LibraTransfers';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  count?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Expiration Time */
  expirationTime?: Maybe<DateTime>;
  gas?: Maybe<Scalars['Int']>;
  /** Currency of gas */
  gasCurrency?: Maybe<Currency>;
  /** Gas price */
  gasPrice: Scalars['Float'];
  gasValue?: Maybe<Scalars['Float']>;
  /** Max gas amount */
  maxGasAmount?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Public key */
  publicKey?: Maybe<Scalars['String']>;
  /** Transfer receiver */
  receiver?: Maybe<Address>;
  /** Script Hash */
  scriptHash?: Maybe<Scalars['String']>;
  /** Script Type */
  scriptType?: Maybe<ScriptTypeSelectorSelector>;
  /** Transfer sender */
  sender?: Maybe<Address>;
  /** Sequence number */
  sequenceNumber?: Maybe<Scalars['Int']>;
  /** Signature */
  signature?: Maybe<Scalars['String']>;
  /** Signature scheme */
  signatureScheme?: Maybe<Scalars['String']>;
  /** Status Name */
  statusName?: Maybe<Scalars['String']>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  /** Transfer timestamp */
  timestamp?: Maybe<DateTime>;
  /** Transaction sender */
  txSender?: Maybe<Address>;
  /** Version of blockchain for this transaction */
  version: Scalars['Int'];
  /** Version hash of blockchain for this transaction */
  versionHash: Scalars['String'];
  /** VM Status */
  vmStatus?: Maybe<Scalars['Int']>;
};

/** Transfers in Libra blockchain */
export type LibraTransfersAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  txSender?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<Array<LibraCurrencySelector>>;
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>;
  amount?: Maybe<Array<AmountSelector>>;
  scriptType?: Maybe<ScriptTypeSelectorSelector>;
  scriptHash?: Maybe<StringSelector>;
};

/** Transfers in Libra blockchain */
export type LibraTransfersAnyArgs = {
  of: LibraTransfersMeasureable;
};

/** Transfers in Libra blockchain */
export type LibraTransfersBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Transfers in Libra blockchain */
export type LibraTransfersCountArgs = {
  uniq?: Maybe<TransfersUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  txSender?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<Array<LibraCurrencySelector>>;
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>;
  amount?: Maybe<Array<AmountSelector>>;
  scriptType?: Maybe<ScriptTypeSelectorSelector>;
  scriptHash?: Maybe<StringSelector>;
};

/** Transfers in Libra blockchain */
export type LibraTransfersCurrencyArgs = {
  currency?: Maybe<Array<LibraCurrencySelector>>;
};

/** Transfers in Libra blockchain */
export type LibraTransfersGasArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  txSender?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<Array<LibraCurrencySelector>>;
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>;
  amount?: Maybe<Array<AmountSelector>>;
  scriptType?: Maybe<ScriptTypeSelectorSelector>;
  scriptHash?: Maybe<StringSelector>;
};

/** Transfers in Libra blockchain */
export type LibraTransfersGasCurrencyArgs = {
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>;
};

/** Transfers in Libra blockchain */
export type LibraTransfersGasValueArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  txSender?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<Array<LibraCurrencySelector>>;
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>;
  amount?: Maybe<Array<AmountSelector>>;
  scriptType?: Maybe<ScriptTypeSelectorSelector>;
  scriptHash?: Maybe<StringSelector>;
};

/** Transfers in Libra blockchain */
export type LibraTransfersMaximumArgs = {
  of: LibraTransfersMeasureable;
  get?: Maybe<LibraTransfersMeasureable>;
};

/** Transfers in Libra blockchain */
export type LibraTransfersMinimumArgs = {
  of: LibraTransfersMeasureable;
  get?: Maybe<LibraTransfersMeasureable>;
};

/** Transfers in Libra blockchain */
export type LibraTransfersReceiverArgs = {
  receiver?: Maybe<AddressSelector>;
};

/** Transfers in Libra blockchain */
export type LibraTransfersScriptHashArgs = {
  scriptHash?: Maybe<StringSelector>;
};

/** Transfers in Libra blockchain */
export type LibraTransfersSenderArgs = {
  sender?: Maybe<AddressSelector>;
};

/** Transfers in Libra blockchain */
export type LibraTransfersSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>;
};

/** Transfers in Libra blockchain */
export type LibraTransfersTimestampArgs = {
  time?: Maybe<DateTimeSelector>;
};

/** Transfers in Libra blockchain */
export type LibraTransfersTxSenderArgs = {
  txSender?: Maybe<AddressSelector>;
};

/** Transfers in Libra blockchain */
export type LibraTransfersVersionArgs = {
  version?: Maybe<IntegerSelector>;
};

export enum LibraTransfersMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  HEIGHT = 'height',
  /** Version */
  VERSION = 'version',
  /** Version hash */
  VERSION_HASH = 'version_hash',
  /** Amount */
  AMOUNT = 'amount',
  /** Transfer Sender */
  TX_SENDER = 'tx_sender',
  /** Sender */
  SENDER = 'sender',
  /** Receiver */
  RECEIVER = 'receiver',
  /** Script Hash */
  SCRIPT_HASH = 'script_hash',
  /** Currency symbol */
  CURRENCY_SYMBOL = 'currency_symbol',
  /** Gas value */
  GAS_VALUE = 'gas_value',
  /** Gas price */
  GAS_PRICE = 'gas_price',
  /** Gas used */
  GAS = 'gas',
}

/** Limit by definition */
export type LimitByOption = {
  /** Take limit for each combination of the field */
  each: Scalars['String'];
  /** Limit number of results */
  limit?: Maybe<Scalars['Int']>;
  /** Offset of results, starting from 0 */
  offset?: Maybe<Scalars['Int']>;
};

/** Smart contract method */
export type Method = {
  __typename?: 'Method';
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Signature */
  signature?: Maybe<Scalars['String']>;
  /** Signature Hash */
  signatureHash: Scalars['String'];
};

/** Smart contract method. In selector you can use the name, signature or hex hash */
export type MethodSelector = {
  /** Method signature is */
  is?: Maybe<Scalars['String']>;
  /** Method signature not */
  not?: Maybe<Scalars['String']>;
  /** Method signature in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** Method signature not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
};

/** Name with an identifier */
export type NameWithId = {
  __typename?: 'NameWithId';
  /** ID */
  id?: Maybe<Scalars['Int']>;
  /** Name */
  name?: Maybe<Scalars['String']>;
};

export enum Network {
  /** Ethereum Mainnet */
  ETHEREUM = 'ethereum',
  /** Ethereum Classic */
  ETHCLASSIC = 'ethclassic',
  /** Ethereum Classic ( no reorg from block 10904146) */
  ETHCLASSIC_REORG = 'ethclassic_reorg',
  /** Binance DEX */
  BINANCE = 'binance',
  /** Celo Alfajores Testnet */
  CELO_ALFAJORES = 'celo_alfajores',
  /** Celo Baklava Testnet */
  CELO_BAKLAVA = 'celo_baklava',
  /** Celo RC1 */
  CELO_RC1 = 'celo_rc1',
  /** Bitcoin ( BTC ) */
  BITCOIN = 'bitcoin',
  /** Bitcoin Cash ( BCH ) */
  BITCASH = 'bitcash',
  /** Bitcoin SV ( BSV ) */
  BITCOINSV = 'bitcoinsv',
  /** Litecoin ( LTC ) */
  LITECOIN = 'litecoin',
  /** Dash ( DASH ) */
  DASH = 'dash',
  /** Dogecoin ( DOGE ) */
  DOGECOIN = 'dogecoin',
  /** Cardano ( ADA ) */
  CARDANO = 'cardano',
  /** Zcash ( ZEC ) */
  ZCASH = 'zcash',
  /** Algorand Mainnet (ALGO) */
  ALGORAND = 'algorand',
  /** Algorand Testnet */
  ALGORAND_TESTNET = 'algorand_testnet',
  /** Algorand Betanet */
  ALGORAND_BETANET = 'algorand_betanet',
  /** Conflux Oceanus */
  CONFLUX_OCEANUS = 'conflux_oceanus',
  /** Conflux Tethys */
  CONFLUX_TETHYS = 'conflux_tethys',
  /** Libra Testnet */
  LIBRA_TESTNET = 'libra_testnet',
  /** Diem Testnet */
  DIEM_TESTNET = 'diem_testnet',
  /** EOS Mainnet */
  EOS = 'eos',
  /** Tron Mainnet */
  TRON = 'tron',
  /** Binance Smart Chain Mainnet */
  BSC = 'bsc',
  /** Binance Smart Chain Testnet */
  BSC_TESTNET = 'bsc_testnet',
  /** Goerli Ethereum Testnet */
  GOERLI = 'goerli',
  /** Beacon Chain Ethereum 2.0 */
  ETH2 = 'eth2',
  /** Medalla Ethereum 2.0 Beacon Testnet */
  MEDALLA = 'medalla',
  /** Filecoin Mainnet */
  FILECOIN = 'filecoin',
  /** Hedera Hashgraph */
  HEDERA = 'hedera',
}

/** Offchain Data */
export type Offchain = {
  __typename?: 'Offchain';
  /** Historical COVID data */
  covid?: Maybe<CovidHistory>;
};

/** Select order by ID */
export type OrderIdSelector = {
  /** Order ID is */
  is?: Maybe<Scalars['String']>;
  /** Order ID not */
  not?: Maybe<Scalars['String']>;
  /** Order ID in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** Order ID not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
};

/** Select by order side */
export type OrderSideSelector = {
  /** Order Side is */
  is?: Maybe<BinanceOrderSide>;
  /** Order Side not */
  not?: Maybe<BinanceOrderSide>;
  /** Order Side in the list */
  in?: Maybe<Array<BinanceOrderSide>>;
  /** Order Side not in the list */
  notIn?: Maybe<Array<BinanceOrderSide>>;
};

/** Select by order status */
export type OrderStatusSelector = {
  /** Order Status is */
  is?: Maybe<BinanceOrderStatus>;
  /** Order Status not */
  not?: Maybe<BinanceOrderStatus>;
  /** Order Status in the list */
  in?: Maybe<Array<BinanceOrderStatus>>;
  /** Order Status not in the list */
  notIn?: Maybe<Array<BinanceOrderStatus>>;
};

/** Select by order time in force */
export type OrderTimeInForceSelector = {
  /** Order TimeInForce is */
  is?: Maybe<BinanceOrderTimeInForce>;
  /** Order TimeInForce not */
  not?: Maybe<BinanceOrderTimeInForce>;
  /** Order TimeInForce in the list */
  in?: Maybe<Array<BinanceOrderTimeInForce>>;
  /** Order TimeInForce not in the list */
  notIn?: Maybe<Array<BinanceOrderTimeInForce>>;
};

/** Select by order type */
export type OrderTypeSelector = {
  /** Order Type is */
  is?: Maybe<BinanceOrderType>;
  /** Order Type not */
  not?: Maybe<BinanceOrderType>;
  /** Order Type in the list */
  in?: Maybe<Array<BinanceOrderType>>;
  /** Order Type not in the list */
  notIn?: Maybe<Array<BinanceOrderType>>;
};

/** Select by output index ( o based ) */
export type OutputIndexSelector = {
  /** Output index is */
  is?: Maybe<Scalars['Int']>;
  /** Output index not */
  not?: Maybe<Scalars['Int']>;
  /** Output index in the list */
  in?: Maybe<Array<Scalars['Int']>>;
  /** Output index not in the list */
  notIn?: Maybe<Array<Scalars['Int']>>;
  /** Output index greater than */
  gt?: Maybe<Scalars['Int']>;
  /** Output index less than */
  lt?: Maybe<Scalars['Int']>;
  /** Output index less or equal than */
  lteq?: Maybe<Scalars['Int']>;
  /** Output index greater or equal than */
  gteq?: Maybe<Scalars['Int']>;
  /** Output index in range */
  between?: Maybe<Array<Scalars['Int']>>;
};

/** Output Script Type of UTXO transaction output */
export type OutputScript = {
  __typename?: 'OutputScript';
  /** Script annotation */
  annotation?: Maybe<Scalars['String']>;
  /** Long script pattern */
  pattern: Scalars['String'];
  /** Short script pattern */
  short: Scalars['String'];
  /** Simple script pattern */
  simplePattern: Scalars['String'];
  /** Script type */
  type?: Maybe<BitcoinOutputScriptType>;
};

export enum PriceAggregateFunction {
  /** Maximum */
  MAXIMUM = 'maximum',
  /** Minimum */
  MINIMUM = 'minimum',
  /** Aggregated over interval */
  SUM = 'sum',
  /** Average */
  AVERAGE = 'average',
  /** Median */
  MEDIAN = 'median',
  /** Any value */
  ANY = 'any',
  /** Last value */
  ANY_LAST = 'anyLast',
}

export enum Protocol {
  /** Ethereum */
  ETHEREUM = 'ethereum',
  /** Binance DEX */
  BINANCE = 'binance',
  /** Bitcoin */
  BITCOIN = 'bitcoin',
  /** Algorand */
  ALGORAND = 'algorand',
  /** Libra */
  LIBRA = 'libra',
  /** EOS */
  EOS = 'eos',
  /** Tron */
  TRON = 'tron',
  /** Filecoin */
  FILECOIN = 'filecoin',
  /** Hedera Hashgraph */
  HEDERA = 'hedera',
}

/** Blockchain Unified GraphQL API */
export type Query = {
  __typename?: 'Query';
  /** Algorand Chains Dataset */
  algorand?: Maybe<Algorand>;
  /** Binance DEX Chain Dataset */
  binance?: Maybe<Binance>;
  /** Bitcoin and other UTXO Chains Dataset */
  bitcoin?: Maybe<Bitcoin>;
  /** Conflux Chains Dataset */
  conflux?: Maybe<Conflux>;
  /** Diem ( former Libra ) Testnet Dataset */
  diem?: Maybe<Libra>;
  /** EOS Mainnet Dataset */
  eos?: Maybe<Eos>;
  /** Ethereum Mainnet / Classic Chain Datasets */
  ethereum?: Maybe<Ethereum>;
  /** Ethereum v2.0 Beacon Chain Datasets */
  ethereum2?: Maybe<Ethereum2>;
  /** Filecoin Dataset */
  filecoin?: Maybe<Filecoin>;
  /** Hedera Dataset */
  hedera?: Maybe<Hedera>;
  /** Offchain data */
  offchain?: Maybe<Offchain>;
  /** Search by query string */
  search?: Maybe<Array<Result>>;
  /** Tron Mainnet Dataset */
  tron?: Maybe<Tron>;
};

/** Blockchain Unified GraphQL API */
export type QueryAlgorandArgs = {
  network?: Maybe<AlgorandNetwork>;
};

/** Blockchain Unified GraphQL API */
export type QueryBitcoinArgs = {
  network?: Maybe<BitcoinNetwork>;
};

/** Blockchain Unified GraphQL API */
export type QueryConfluxArgs = {
  network?: Maybe<ConfluxNetwork>;
};

/** Blockchain Unified GraphQL API */
export type QueryDiemArgs = {
  network?: Maybe<DiemNetwork>;
};

/** Blockchain Unified GraphQL API */
export type QueryEthereumArgs = {
  network?: Maybe<EthereumNetwork>;
};

/** Blockchain Unified GraphQL API */
export type QueryEthereum2Args = {
  network?: Maybe<Ethereum2Network>;
};

/** Blockchain Unified GraphQL API */
export type QueryFilecoinArgs = {
  network?: Maybe<FilecoinNetwork>;
};

/** Blockchain Unified GraphQL API */
export type QueryHederaArgs = {
  network?: Maybe<HederaNetwork>;
};

/** Blockchain Unified GraphQL API */
export type QuerySearchArgs = {
  string: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  network?: Maybe<Network>;
};

/** Limits, Ordering, Constraints */
export type QueryOptions = {
  /** Limit number of results */
  limit?: Maybe<Scalars['Int']>;
  /** Limit number of results by specific field */
  limitBy?: Maybe<LimitByOption>;
  /** Offset of results, starting from 0 */
  offset?: Maybe<Scalars['Int']>;
  /** Ordering field(s) for ascending */
  asc?: Maybe<Array<Scalars['String']>>;
  /** Ordering field(s) for descending */
  desc?: Maybe<Array<Scalars['String']>>;
};

/** Search result item */
export type Result = {
  __typename?: 'Result';
  /** Blockchain where result is found */
  network: BlockchainNetwork;
  /** Subject in blockchain */
  subject: Subject;
};

export enum ScriptTypeSelectorSelector {
  /** Unknown Transaction */
  UNKNOWN_TRANSACTION = 'unknown_transaction',
  /** Peer-to-peer */
  PEER_TO_PEER_TRANSACTION = 'peer_to_peer_transaction',
}

/** Smart contract method or event */
export type Signature = Event | Method;

export enum SignatureTypeSelector {
  /** Smart contract method */
  FUNCTION = 'Function',
  /** Smart contract event */
  EVENT = 'Event',
}

/** Blockchain smart contract */
export type SmartContract = {
  __typename?: 'SmartContract';
  /** String address representation */
  address: Scalars['String'];
  /** Annotations ( tags ), if exists */
  annotation?: Maybe<Scalars['String']>;
  /** Smart Contract Type */
  contractType: SmartContractType;
  /** Smart Contract Protocol Type */
  protocol?: Maybe<Scalars['String']>;
};

export enum SmartContractArgumentsUniq {
  /** Unique signatures count */
  SIGNATURES = 'signatures',
  /** Unique values */
  VALUES = 'values',
  /** Calls or events */
  CALLS = 'calls',
  /** Unique transactions count */
  TXS = 'txs',
  /** Unique transaction senders */
  SENDERS = 'senders',
  /** Unique callers count */
  CALLERS = 'callers',
  /** Unique smart contracts count */
  SMART_CONTRACTS = 'smart_contracts',
  /** Unique blocks */
  BLOCKS = 'blocks',
  /** Unique date count */
  DATES = 'dates',
}

export enum SmartContractCallsUniq {
  /** Calls */
  CALLS = 'calls',
  /** Unique transactions count */
  TXS = 'txs',
  /** Unique transaction senders */
  SENDERS = 'senders',
  /** Unique callers count */
  CALLERS = 'callers',
  /** Unique smart contracts count */
  SMART_CONTRACTS = 'smart_contracts',
  /** Unique smart contract methods count */
  SMART_CONTRACT_METHODS = 'smart_contract_methods',
  /** Unique blocks */
  BLOCKS = 'blocks',
  /** Unique date count */
  DATES = 'dates',
}

export type SmartContractReadonlyAttribute = {
  __typename?: 'SmartContractReadonlyAttribute';
  /** Value as address if applicable */
  address?: Maybe<EthereumAddressInfo>;
  /** Method name */
  name: Scalars['String'];
  /** Method return type */
  type: Scalars['String'];
  /** Method return value */
  value: Scalars['String'];
};

export enum SmartContractType {
  /** Not A Smart contract */
  NONE = 'None',
  /** General Purpose Smart contract */
  GENERIC = 'Generic',
  /** Smart contract for token derivatives */
  MARGIN_POSITION_TOKEN = 'MarginPositionToken',
  /** Multi signature wallet */
  MULTISIG = 'Multisig',
  /** Token */
  TOKEN = 'Token',
  /** Token Sale */
  TOKEN_SALE = 'TokenSale',
  /** Decentralized exchange */
  DEX = 'DEX',
  /** Transaction Execution Approval Language */
  TEAL = 'TEAL',
}

/** Selector of smart contract type */
export type SmartContractTypeSelector = {
  /** Smart Contract type is */
  is?: Maybe<SmartContractType>;
  /** Smart Contract type not */
  not?: Maybe<SmartContractType>;
  /** Smart Contract type in the list */
  in?: Maybe<Array<SmartContractType>>;
  /** Smart Contract type not in the list */
  notIn?: Maybe<Array<SmartContractType>>;
};

/** Select by ID */
export type StringIdSelector = {
  /** ID is */
  is?: Maybe<Scalars['String']>;
  /** ID not */
  not?: Maybe<Scalars['String']>;
  /** ID in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** ID not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
};

/** Select by string */
export type StringSelector = {
  /** String is */
  is?: Maybe<Scalars['String']>;
  /** String not */
  not?: Maybe<Scalars['String']>;
  /** String in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** String not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
};

/** Search result subject */
export type Subject =
  | Address
  | Currency
  | HederaAccount
  | SmartContract
  | TransactionHash;

/** Time Interval */
export type TimeInterval = {
  __typename?: 'TimeInterval';
  day: Scalars['String'];
  hour: Scalars['String'];
  minute: Scalars['String'];
  month: Scalars['String'];
  second: Scalars['String'];
  year: Scalars['String'];
};

/** Time Interval */
export type TimeIntervalDayArgs = {
  count?: Maybe<Scalars['Int']>;
  format?: Maybe<Scalars['String']>;
};

/** Time Interval */
export type TimeIntervalHourArgs = {
  count?: Maybe<Scalars['Int']>;
  format?: Maybe<Scalars['String']>;
};

/** Time Interval */
export type TimeIntervalMinuteArgs = {
  count?: Maybe<Scalars['Int']>;
  format?: Maybe<Scalars['String']>;
};

/** Time Interval */
export type TimeIntervalMonthArgs = {
  count?: Maybe<Scalars['Int']>;
  format?: Maybe<Scalars['String']>;
};

/** Time Interval */
export type TimeIntervalSecondArgs = {
  count?: Maybe<Scalars['Int']>;
  format?: Maybe<Scalars['String']>;
};

/** Time Interval */
export type TimeIntervalYearArgs = {
  count?: Maybe<Scalars['Int']>;
  format?: Maybe<Scalars['String']>;
};

/** Timestamp */
export type Timestamp = {
  __typename?: 'Timestamp';
  /** Nanoseconds */
  nanoseconds: Scalars['BigInt'];
  time: Scalars['ISO8601Date'];
};

/** Select trade by ID */
export type TradeIdSelector = {
  /** Trade ID is */
  is?: Maybe<Scalars['String']>;
  /** Trade ID not */
  not?: Maybe<Scalars['String']>;
  /** Trade ID in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** Trade ID not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
};

export enum TradeSide {
  /** Buy side */
  BUY = 'BUY',
  /** Sell side */
  SELL = 'SELL',
}

/** Blockchain transaction */
export type TransactionHash = {
  __typename?: 'TransactionHash';
  /** Hash hex representation */
  hash: Scalars['String'];
};

/** Blockchain transaction */
export type TransactionHashIndex = {
  __typename?: 'TransactionHashIndex';
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction index in block, 0-based */
  index: Scalars['String'];
};

/** Blockchain transaction */
export type TransactionHashIndexValues = {
  __typename?: 'TransactionHashIndexValues';
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction index in block, 0-based */
  index: Scalars['String'];
  /** Transaction value in input */
  valueIn: Scalars['Float'];
  /** Transaction value in output */
  valueOut: Scalars['Float'];
};

/** Blockchain transaction with value */
export type TransactionHashValue = {
  __typename?: 'TransactionHashValue';
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction value */
  value: Scalars['Float'];
};

/** Transaction result */
export type TransactionResult = {
  __typename?: 'TransactionResult';
  /** Result ID */
  id: Scalars['Int'];
  /** Result name */
  name: Scalars['String'];
};

/** Identification of transaction source as client application */
export type TransactionSource = {
  __typename?: 'TransactionSource';
  /** ID numeric */
  code: Scalars['Int'];
  /** Name */
  name: Scalars['String'];
};

/** Select by type of transfer */
export type TransferTypeSelector = {
  /** Transfer Type is */
  is?: Maybe<FilecoinTransferType>;
  /** Transfer Type not */
  not?: Maybe<FilecoinTransferType>;
  /** Transfer Type in the list */
  in?: Maybe<Array<FilecoinTransferType>>;
  /** Transfer Type not in the list */
  notIn?: Maybe<Array<FilecoinTransferType>>;
};

export enum TransfersUniq {
  /** Transfers */
  TRANSFERS = 'transfers',
  /** Unique transactions count */
  TXS = 'txs',
  /** Unique senders count */
  SENDERS = 'senders',
  /** Unique receivers count */
  RECEIVERS = 'receivers',
  /** Unique blocks */
  BLOCKS = 'blocks',
  /** Unique date count */
  DATES = 'dates',
  /** Unique currencies */
  CURRENCIES = 'currencies',
}

/** Tron Chain */
export type Tron = {
  __typename?: 'Tron';
  /** Basic information about address ( or smart contract ) */
  address: Array<TronAddressInfo>;
  /** Blockchain Blocks */
  blocks?: Maybe<Array<TronBlocks>>;
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<TronCoinpath>>;
  /** Blockchain Embedded Contracts */
  contracts?: Maybe<Array<TronSmartContracts>>;
  /** Smart Contract Calls */
  smartContractCalls?: Maybe<Array<TronSmartContractCalls>>;
  /** Smart Contract Events */
  smartContractEvents?: Maybe<Array<TronSmartContractEvents>>;
  /** Blockchain Embedded Contracts */
  trades?: Maybe<Array<TronTrades>>;
  /** Blockchain Transactions */
  transactions?: Maybe<Array<TronTransactions>>;
  /** Currency Transfers */
  transfers?: Maybe<Array<TronTransfers>>;
};

/** Tron Chain */
export type TronAddressArgs = {
  address: Array<AddressSelectorIn>;
};

/** Tron Chain */
export type TronBlocksArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  witness?: Maybe<AddressSelector>;
  version?: Maybe<IntegerSelector>;
  parentBlockHash?: Maybe<Array<HashSelector>>;
  any?: Maybe<Array<TronBlockFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Tron Chain */
export type TronCoinpathArgs = {
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<TronCurrencySelector>;
  initialAddress?: Maybe<AddressSelector>;
  initialDate?: Maybe<DateSelector>;
  initialTime?: Maybe<DateTimeSelector>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  depth?: Maybe<IntegerLimitedSelector>;
  options?: Maybe<CoinpathOptions>;
};

/** Tron Chain */
export type TronContractsArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txOwner?: Maybe<AddressSelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  currency?: Maybe<TronCurrencySelector>;
  success?: Maybe<Scalars['Boolean']>;
  any?: Maybe<Array<TronContractFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Tron Chain */
export type TronSmartContractCallsArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  smartContractAddress?: Maybe<AddressSelector>;
  smartContractMethod?: Maybe<MethodSelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
  any?: Maybe<Array<TronSmartContractCallFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Tron Chain */
export type TronSmartContractEventsArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  smartContractAddress?: Maybe<AddressSelector>;
  smartContractEvent?: Maybe<EventSelector>;
  any?: Maybe<Array<TronSmartContractEventFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Tron Chain */
export type TronTradesArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  buyer?: Maybe<AddressSelector>;
  seller?: Maybe<AddressSelector>;
  buyCurrency?: Maybe<TronCurrencySelector>;
  sellCurrency?: Maybe<TronCurrencySelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  amountSell?: Maybe<Array<AmountSelector>>;
  amountBuy?: Maybe<Array<AmountSelector>>;
  exchangeId?: Maybe<IntIdSelector>;
  success?: Maybe<Scalars['Boolean']>;
  any?: Maybe<Array<TronTradeFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Tron Chain */
export type TronTransactionsArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  refBlockHash?: Maybe<Array<HashSelector>>;
  contractAddress?: Maybe<AddressSelector>;
  any?: Maybe<Array<TronTransactionFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Tron Chain */
export type TronTransfersArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<TronCurrencySelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  entityId?: Maybe<EntitySelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  any?: Maybe<Array<TronTransferFilter>>;
  options?: Maybe<QueryOptions>;
};

/** Address detailed information for Tron network */
export type TronAddressInfo = {
  __typename?: 'TronAddressInfo';
  /** String address representation */
  address: Scalars['String'];
  /** Annotations ( tags ), if exists */
  annotation?: Maybe<Scalars['String']>;
  /** Smart Contract if exists on the address */
  smartContract?: Maybe<TronSmartContractInfo>;
};

export type TronBlockFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  witness?: Maybe<AddressSelector>;
  version?: Maybe<IntegerSelector>;
  parentBlockHash?: Maybe<Array<HashSelector>>;
};

/** Blocks in Tron blockchain */
export type TronBlocks = {
  __typename?: 'TronBlocks';
  any?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Block hash */
  hash: Scalars['String'];
  /** Block number (height) in blockchain */
  height: Scalars['Int'];
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Parent block hash */
  parentBlockHash: Scalars['String'];
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
  /** TX Trie Root Hash */
  txTrieRoot: Scalars['String'];
  /** Block version */
  version?: Maybe<Scalars['Int']>;
  /** Block witness */
  witness?: Maybe<Address>;
  /** Witness signature */
  witnessSignature: Scalars['String'];
};

/** Blocks in Tron blockchain */
export type TronBlocksAnyArgs = {
  of: TronBlocksMeasureable;
};

/** Blocks in Tron blockchain */
export type TronBlocksCountArgs = {
  uniq?: Maybe<TronBlocksUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  witness?: Maybe<AddressSelector>;
  version?: Maybe<IntegerSelector>;
  parentBlockHash?: Maybe<Array<HashSelector>>;
};

/** Blocks in Tron blockchain */
export type TronBlocksHashArgs = {
  blockHash?: Maybe<Array<HashSelector>>;
};

/** Blocks in Tron blockchain */
export type TronBlocksHeightArgs = {
  height?: Maybe<BlockSelector>;
};

/** Blocks in Tron blockchain */
export type TronBlocksMaximumArgs = {
  of: TronBlocksMeasureable;
  get?: Maybe<TronBlocksMeasureable>;
};

/** Blocks in Tron blockchain */
export type TronBlocksMinimumArgs = {
  of: TronBlocksMeasureable;
  get?: Maybe<TronBlocksMeasureable>;
};

/** Blocks in Tron blockchain */
export type TronBlocksParentBlockHashArgs = {
  parentBlockHash?: Maybe<Array<HashSelector>>;
};

/** Blocks in Tron blockchain */
export type TronBlocksTimestampArgs = {
  time?: Maybe<DateTimeSelector>;
};

/** Blocks in Tron blockchain */
export type TronBlocksVersionArgs = {
  version?: Maybe<IntegerSelector>;
};

/** Blocks in Tron blockchain */
export type TronBlocksWitnessArgs = {
  witness?: Maybe<AddressSelector>;
};

export enum TronBlocksMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Block hash */
  BLOCK_HASH = 'block_hash',
  /** Block Witness address */
  WITNESS = 'witness',
  /** Block Version */
  VERSION = 'version',
}

export enum TronBlocksUniq {
  /** Unique witness count */
  WITNESSES = 'witnesses',
  /** Unique date count */
  DATES = 'dates',
}

export enum TronCallsMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Transaction hash */
  TX_HASH = 'tx_hash',
  /** Action From */
  TX_FROM = 'tx_from',
  /** Action To */
  TX_TO = 'tx_to',
  /** Smart Contract */
  SMART_CONTRACT = 'smart_contract',
  /** Smart Contract Method Name */
  SIGNATURE_NAME = 'signature_name',
  /** Smart Contract Method Signature */
  SIGNATURE = 'signature',
  /** Smart Contract Method Signature Hash */
  SIGNATURE_HASH = 'signature_hash',
  /** Call depth */
  CALL_DEPTH = 'call_depth',
}

/** Coinpath */
export type TronCoinpath = {
  __typename?: 'TronCoinpath';
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Count of transfers */
  count?: Maybe<Scalars['Int']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Receiver address */
  receiver?: Maybe<TronAddressInfo>;
  /** Sender address */
  sender?: Maybe<TronAddressInfo>;
  /** Transaction of transfer happened */
  transaction?: Maybe<TransactionHashValue>;
};

/** Coinpath */
export type TronCoinpathAmountArgs = {
  in?: Maybe<BaseCurrencyEnum>;
};

/** Coinpath */
export type TronCoinpathAnyArgs = {
  of: CoinpathMeasureable;
};

/** Coinpath */
export type TronCoinpathMaximumArgs = {
  of: CoinpathMeasureable;
  get?: Maybe<CoinpathMeasureable>;
};

/** Coinpath */
export type TronCoinpathMinimumArgs = {
  of: CoinpathMeasureable;
  get?: Maybe<CoinpathMeasureable>;
};

export type TronContractFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txOwner?: Maybe<AddressSelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  currency?: Maybe<TronCurrencySelector>;
  success?: Maybe<Scalars['Boolean']>;
};

export enum TronContractType {
  /** Account Create */
  ACCOUNT_CREATE = 'AccountCreate',
  /** Account Permission Update */
  ACCOUNT_PERMISSION_UPDATE = 'AccountPermissionUpdate',
  /** Account Update */
  ACCOUNT_UPDATE = 'AccountUpdate',
  /** Asset Issue */
  ASSET_ISSUE = 'AssetIssue',
  /** Clear ABI */
  CLEAR_ABI = 'ClearABI',
  /** Create Smart */
  CREATE_SMART = 'CreateSmart',
  /** Exchange Create */
  EXCHANGE_CREATE = 'ExchangeCreate',
  /** Exchange Inject */
  EXCHANGE_INJECT = 'ExchangeInject',
  /** Exchange Transaction */
  EXCHANGE_TRANSACTION = 'ExchangeTransaction',
  /** Exchange Withdraw */
  EXCHANGE_WITHDRAW = 'ExchangeWithdraw',
  /** Freeze Balance */
  FREEZE_BALANCE = 'FreezeBalance',
  /** Participate Asset Issue */
  PARTICIPATE_ASSET_ISSUE = 'ParticipateAssetIssue',
  /** Proposal Approve */
  PROPOSAL_APPROVE = 'ProposalApprove',
  /** Proposal Create */
  PROPOSAL_CREATE = 'ProposalCreate',
  /** Proposal Delete */
  PROPOSAL_DELETE = 'ProposalDelete',
  /** Set Account Id */
  SET_ACCOUNT_ID = 'SetAccountId',
  /** Transfer */
  TRANSFER = 'Transfer',
  /** Transfer Asset */
  TRANSFER_ASSET = 'TransferAsset',
  /** Trigger Smart */
  TRIGGER_SMART = 'TriggerSmart',
  /** Unfreeze Asset */
  UNFREEZE_ASSET = 'UnfreezeAsset',
  /** Unfreeze Balance */
  UNFREEZE_BALANCE = 'UnfreezeBalance',
  /** Update Asset */
  UPDATE_ASSET = 'UpdateAsset',
  /** Update Brokerage */
  UPDATE_BROKERAGE = 'UpdateBrokerage',
  /** Update Energy Limit */
  UPDATE_ENERGY_LIMIT = 'UpdateEnergyLimit',
  /** Update Setting */
  UPDATE_SETTING = 'UpdateSetting',
  /** Vote Witness */
  VOTE_WITNESS = 'VoteWitness',
  /** Withdraw Balance */
  WITHDRAW_BALANCE = 'WithdrawBalance',
  /** Witness Create */
  WITNESS_CREATE = 'WitnessCreate',
  /** Witness Update */
  WITNESS_UPDATE = 'WitnessUpdate',
}

/** Select contract type(s) */
export type TronContractTypeSelector = {
  /** Contract type is */
  is?: Maybe<TronContractType>;
  /** Contract type not */
  not?: Maybe<TronContractType>;
  /** Contract type in the list */
  in?: Maybe<Array<TronContractType>>;
  /** Contract type not in the list */
  notIn?: Maybe<Array<TronContractType>>;
};

export enum TronContractsMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Transaction hash */
  TX_HASH = 'tx_hash',
  /** Transaction owner */
  TX_OWNER = 'tx_owner',
  /** Contract */
  CONTRACT_TYPE = 'contract_type',
}

/**
 * Currency selector in Tron blockchain.
 * Token identified by address of contract for TRC20 tokens and token name (or numeric token ID )  for TRC10
 */
export type TronCurrencySelector = {
  /** Currency is */
  is?: Maybe<Scalars['String']>;
  /** Currency not */
  not?: Maybe<Scalars['String']>;
  /** Currency in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** Currency not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
};

export enum TronEventsMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Transaction hash */
  TX_HASH = 'tx_hash',
  /** Action From */
  TX_FROM = 'tx_from',
  /** Action To */
  TX_TO = 'tx_to',
  /** Smart Contract */
  SMART_CONTRACT = 'smart_contract',
  /** Smart Contract Method Name */
  SIGNATURE_NAME = 'signature_name',
  /** Smart Contract Method Signature */
  SIGNATURE = 'signature',
  /** Smart Contract Method Signature Hash */
  SIGNATURE_HASH = 'signature_hash',
}

/** Tron smart contract */
export type TronSmartContract = {
  __typename?: 'TronSmartContract';
  /** Smart Contract Address */
  address: Address;
  /** Smart Contract Type */
  contractType?: Maybe<SmartContractType>;
  /** Token implemented in this smart contract */
  currency?: Maybe<Currency>;
  /** Smart Contract Protocol Type */
  protocolType?: Maybe<Scalars['String']>;
};

export type TronSmartContractCallFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  smartContractAddress?: Maybe<AddressSelector>;
  smartContractMethod?: Maybe<MethodSelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Smart Contract Calls */
export type TronSmartContractCalls = {
  __typename?: 'TronSmartContractCalls';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Depth of the call. Empty string for external call, then counted as 0...N, and the next layer is added through '-'. For example 0-3-9. */
  callDepth?: Maybe<Scalars['String']>;
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  energyUsageTotal?: Maybe<Scalars['Float']>;
  /** External call executed explicitly by caller. Internal calls executed by smart contracts. */
  external?: Maybe<Scalars['Boolean']>;
  fee?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  netUsage?: Maybe<Scalars['Float']>;
  /** Smart contract being called */
  smartContract?: Maybe<TronSmartContract>;
  /** Contract method invoked */
  smartContractMethod?: Maybe<Method>;
  /** True if call succeeded, false if error happened. Note, that by default only successfull calls are returned in API. */
  success?: Maybe<Scalars['Boolean']>;
  /** Action from address */
  txFrom?: Maybe<Address>;
  /** Transaction hash where transfer happened */
  txHash?: Maybe<Scalars['String']>;
  /** Action to address */
  txTo?: Maybe<Address>;
};

/** Smart Contract Calls */
export type TronSmartContractCallsAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  smartContractAddress?: Maybe<AddressSelector>;
  smartContractMethod?: Maybe<MethodSelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Smart Contract Calls */
export type TronSmartContractCallsAnyArgs = {
  of: TronCallsMeasureable;
};

/** Smart Contract Calls */
export type TronSmartContractCallsBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Smart Contract Calls */
export type TronSmartContractCallsCountArgs = {
  uniq?: Maybe<SmartContractCallsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  smartContractAddress?: Maybe<AddressSelector>;
  smartContractMethod?: Maybe<MethodSelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Smart Contract Calls */
export type TronSmartContractCallsEnergyUsageTotalArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  smartContractAddress?: Maybe<AddressSelector>;
  smartContractMethod?: Maybe<MethodSelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Smart Contract Calls */
export type TronSmartContractCallsExternalArgs = {
  external?: Maybe<Scalars['Boolean']>;
};

/** Smart Contract Calls */
export type TronSmartContractCallsFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  smartContractAddress?: Maybe<AddressSelector>;
  smartContractMethod?: Maybe<MethodSelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Smart Contract Calls */
export type TronSmartContractCallsMaximumArgs = {
  of: TronCallsMeasureable;
  get?: Maybe<TronCallsMeasureable>;
};

/** Smart Contract Calls */
export type TronSmartContractCallsMinimumArgs = {
  of: TronCallsMeasureable;
  get?: Maybe<TronCallsMeasureable>;
};

/** Smart Contract Calls */
export type TronSmartContractCallsNetUsageArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  smartContractAddress?: Maybe<AddressSelector>;
  smartContractMethod?: Maybe<MethodSelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Smart Contract Calls */
export type TronSmartContractCallsSmartContractArgs = {
  smartContractAddress?: Maybe<AddressSelector>;
};

/** Smart Contract Calls */
export type TronSmartContractCallsSmartContractMethodArgs = {
  smartContractMethod?: Maybe<MethodSelector>;
};

/** Smart Contract Calls */
export type TronSmartContractCallsSuccessArgs = {
  success?: Maybe<Array<Scalars['Boolean']>>;
};

/** Smart Contract Calls */
export type TronSmartContractCallsTxFromArgs = {
  txFrom?: Maybe<AddressSelector>;
};

/** Smart Contract Calls */
export type TronSmartContractCallsTxHashArgs = {
  txHash?: Maybe<HashSelector>;
};

/** Smart Contract Calls */
export type TronSmartContractCallsTxToArgs = {
  txTo?: Maybe<AddressSelector>;
};

export type TronSmartContractEventFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  smartContractAddress?: Maybe<AddressSelector>;
  smartContractEvent?: Maybe<EventSelector>;
};

/** Smart Contract Events */
export type TronSmartContractEvents = {
  __typename?: 'TronSmartContractEvents';
  any?: Maybe<Scalars['String']>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Smart contract being Evented */
  smartContract?: Maybe<TronSmartContract>;
  /** Contract method invoked */
  smartContractEvent?: Maybe<Event>;
  /** Action from address */
  txFrom?: Maybe<Address>;
  /** Transaction hash where transfer happened */
  txHash?: Maybe<Scalars['String']>;
  /** Action to address */
  txTo?: Maybe<Address>;
};

/** Smart Contract Events */
export type TronSmartContractEventsAnyArgs = {
  of: TronEventsMeasureable;
};

/** Smart Contract Events */
export type TronSmartContractEventsBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Smart Contract Events */
export type TronSmartContractEventsCountArgs = {
  uniq?: Maybe<SmartContractCallsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  smartContractAddress?: Maybe<AddressSelector>;
  smartContractEvent?: Maybe<EventSelector>;
};

/** Smart Contract Events */
export type TronSmartContractEventsMaximumArgs = {
  of: TronEventsMeasureable;
  get?: Maybe<TronEventsMeasureable>;
};

/** Smart Contract Events */
export type TronSmartContractEventsMinimumArgs = {
  of: TronEventsMeasureable;
  get?: Maybe<TronEventsMeasureable>;
};

/** Smart Contract Events */
export type TronSmartContractEventsSmartContractArgs = {
  smartContractAddress?: Maybe<AddressSelector>;
};

/** Smart Contract Events */
export type TronSmartContractEventsSmartContractEventArgs = {
  smartContractEvent?: Maybe<EventSelector>;
};

/** Smart Contract Events */
export type TronSmartContractEventsTxFromArgs = {
  txFrom?: Maybe<AddressSelector>;
};

/** Smart Contract Events */
export type TronSmartContractEventsTxHashArgs = {
  txHash?: Maybe<HashSelector>;
};

/** Smart Contract Events */
export type TronSmartContractEventsTxToArgs = {
  txTo?: Maybe<AddressSelector>;
};

/** Blockchain smart contract */
export type TronSmartContractInfo = {
  __typename?: 'TronSmartContractInfo';
  /** Smart Contract Type */
  contractType?: Maybe<SmartContractType>;
  /** Token implemented in this smart contract */
  currency?: Maybe<Currency>;
  /** Smart Contract Protocol Type */
  protocolType?: Maybe<Scalars['String']>;
};

/** Contracts */
export type TronSmartContracts = {
  __typename?: 'TronSmartContracts';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Contract type */
  contractType?: Maybe<TronContractType>;
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  energyUsageTotal?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  netUsage?: Maybe<Scalars['Float']>;
  /** True if call succeeded, false if error happened. Note, that by default only successfull calls are returned in API. */
  success?: Maybe<Scalars['Boolean']>;
  /** Transaction hash where transfer happened */
  txHash?: Maybe<Scalars['String']>;
  /** Transactio owner from address */
  txOwner?: Maybe<Address>;
};

/** Contracts */
export type TronSmartContractsAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txOwner?: Maybe<AddressSelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  currency?: Maybe<TronCurrencySelector>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Contracts */
export type TronSmartContractsAnyArgs = {
  of: TronContractsMeasureable;
};

/** Contracts */
export type TronSmartContractsBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Contracts */
export type TronSmartContractsContractTypeArgs = {
  contractType?: Maybe<TronContractTypeSelector>;
};

/** Contracts */
export type TronSmartContractsCountArgs = {
  uniq?: Maybe<SmartContractCallsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txOwner?: Maybe<AddressSelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  currency?: Maybe<TronCurrencySelector>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Contracts */
export type TronSmartContractsCurrencyArgs = {
  currency?: Maybe<TronCurrencySelector>;
};

/** Contracts */
export type TronSmartContractsEnergyUsageTotalArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txOwner?: Maybe<AddressSelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  currency?: Maybe<TronCurrencySelector>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Contracts */
export type TronSmartContractsFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txOwner?: Maybe<AddressSelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  currency?: Maybe<TronCurrencySelector>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Contracts */
export type TronSmartContractsMaximumArgs = {
  of: TronContractsMeasureable;
  get?: Maybe<TronContractsMeasureable>;
};

/** Contracts */
export type TronSmartContractsMinimumArgs = {
  of: TronContractsMeasureable;
  get?: Maybe<TronContractsMeasureable>;
};

/** Contracts */
export type TronSmartContractsNetUsageArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txOwner?: Maybe<AddressSelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  currency?: Maybe<TronCurrencySelector>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Contracts */
export type TronSmartContractsSuccessArgs = {
  success?: Maybe<Array<Scalars['Boolean']>>;
};

/** Contracts */
export type TronSmartContractsTxHashArgs = {
  txHash?: Maybe<HashSelector>;
};

/** Contracts */
export type TronSmartContractsTxOwnerArgs = {
  txOwner?: Maybe<AddressSelector>;
};

export type TronTradeFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  buyer?: Maybe<AddressSelector>;
  seller?: Maybe<AddressSelector>;
  buyCurrency?: Maybe<TronCurrencySelector>;
  sellCurrency?: Maybe<TronCurrencySelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  amountSell?: Maybe<Array<AmountSelector>>;
  amountBuy?: Maybe<Array<AmountSelector>>;
  exchangeId?: Maybe<IntIdSelector>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Currency Trades from/to addresses in crypto currencies */
export type TronTrades = {
  __typename?: 'TronTrades';
  amountBuy?: Maybe<Scalars['Float']>;
  amountSell?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where Trade transaction is included */
  block?: Maybe<Block>;
  /** Buy Currency of Trade */
  buyCurrency?: Maybe<Currency>;
  /** Trade buyer */
  buyer?: Maybe<Address>;
  /** Contract type */
  contractType?: Maybe<TronContractType>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  energyUsageTotal?: Maybe<Scalars['Float']>;
  /** exchange_id */
  exchangeId?: Maybe<Scalars['Int']>;
  fee?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  netUsage?: Maybe<Scalars['Float']>;
  /** Sell Currency of Trade */
  sellCurrency?: Maybe<Currency>;
  /** Trade seller */
  seller?: Maybe<Address>;
  /** Transfer succeeded */
  success?: Maybe<Scalars['Boolean']>;
  /** Transaction hash where Trade happened */
  txHash?: Maybe<Scalars['String']>;
};

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesAmountBuyArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  buyer?: Maybe<AddressSelector>;
  seller?: Maybe<AddressSelector>;
  buyCurrency?: Maybe<TronCurrencySelector>;
  sellCurrency?: Maybe<TronCurrencySelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  amountSell?: Maybe<Array<AmountSelector>>;
  amountBuy?: Maybe<Array<AmountSelector>>;
  exchangeId?: Maybe<IntIdSelector>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesAmountSellArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  buyer?: Maybe<AddressSelector>;
  seller?: Maybe<AddressSelector>;
  buyCurrency?: Maybe<TronCurrencySelector>;
  sellCurrency?: Maybe<TronCurrencySelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  amountSell?: Maybe<Array<AmountSelector>>;
  amountBuy?: Maybe<Array<AmountSelector>>;
  exchangeId?: Maybe<IntIdSelector>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesAnyArgs = {
  of: TronTradesMeasureable;
};

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesBuyCurrencyArgs = {
  buyCurrency?: Maybe<TronCurrencySelector>;
};

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesBuyerArgs = {
  buyer?: Maybe<AddressSelector>;
};

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesContractTypeArgs = {
  contractType?: Maybe<TronContractTypeSelector>;
};

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesCountArgs = {
  uniq?: Maybe<TronTradesUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  buyer?: Maybe<AddressSelector>;
  seller?: Maybe<AddressSelector>;
  buyCurrency?: Maybe<TronCurrencySelector>;
  sellCurrency?: Maybe<TronCurrencySelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  amountSell?: Maybe<Array<AmountSelector>>;
  amountBuy?: Maybe<Array<AmountSelector>>;
  exchangeId?: Maybe<IntIdSelector>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesEnergyUsageTotalArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  buyer?: Maybe<AddressSelector>;
  seller?: Maybe<AddressSelector>;
  buyCurrency?: Maybe<TronCurrencySelector>;
  sellCurrency?: Maybe<TronCurrencySelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  amountSell?: Maybe<Array<AmountSelector>>;
  amountBuy?: Maybe<Array<AmountSelector>>;
  exchangeId?: Maybe<IntIdSelector>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesExchangeIdArgs = {
  exchangeId?: Maybe<IntIdSelector>;
};

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  buyer?: Maybe<AddressSelector>;
  seller?: Maybe<AddressSelector>;
  buyCurrency?: Maybe<TronCurrencySelector>;
  sellCurrency?: Maybe<TronCurrencySelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  amountSell?: Maybe<Array<AmountSelector>>;
  amountBuy?: Maybe<Array<AmountSelector>>;
  exchangeId?: Maybe<IntIdSelector>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesMaximumArgs = {
  of: TronTradesMeasureable;
  get?: Maybe<TronTradesMeasureable>;
};

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesMinimumArgs = {
  of: TronTradesMeasureable;
  get?: Maybe<TronTradesMeasureable>;
};

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesNetUsageArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  buyer?: Maybe<AddressSelector>;
  seller?: Maybe<AddressSelector>;
  buyCurrency?: Maybe<TronCurrencySelector>;
  sellCurrency?: Maybe<TronCurrencySelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  amountSell?: Maybe<Array<AmountSelector>>;
  amountBuy?: Maybe<Array<AmountSelector>>;
  exchangeId?: Maybe<IntIdSelector>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesSellCurrencyArgs = {
  sellCurrency?: Maybe<TronCurrencySelector>;
};

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesSellerArgs = {
  seller?: Maybe<AddressSelector>;
};

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>;
};

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesTxHashArgs = {
  txHash?: Maybe<HashSelector>;
};

export enum TronTradesMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Transaction hash */
  TX_HASH = 'tx_hash',
  /** Amount Sell */
  AMOUNT_SELL = 'amount_sell',
  /** Amount Sell */
  AMOUNT_BUY = 'amount_buy',
  /** Buyer */
  BUYER = 'buyer',
  /** Seller */
  SELLER = 'seller',
  /** Buy Currency symbol */
  BUY_CURRENCY_SYMBOL = 'buy_currency_symbol',
  /** Buy Currency name */
  BUY_CURRENCY_NAME = 'buy_currency_name',
  /** Buy Token address */
  BUY_CURRENCY_ADDRESS = 'buy_currency_address',
  /** Buy Token address */
  BUY_TOKEN_ID = 'buy_token_id',
  /** Buy Token type */
  BUY_TOKEN_TYPE = 'buy_token_type',
  /** Buy Currency symbol */
  SELL_CURRENCY_SYMBOL = 'sell_currency_symbol',
  /** Buy Currency name */
  SELL_CURRENCY_NAME = 'sell_currency_name',
  /** Buy Token address */
  SELL_CURRENCY_ADDRESS = 'sell_currency_address',
  /** Buy Token address */
  SELL_TOKEN_ID = 'sell_token_id',
  /** Buy Token type */
  SELL_TOKEN_TYPE = 'sell_token_type',
  /** Exchange ID */
  EXCHANGE_ID = 'exchange_id',
  /** Contract Type */
  CONTRACT_TYPE = 'contract_type',
}

export enum TronTradesUniq {
  /** Unique blocks */
  BLOCKS = 'blocks',
  /** Unique date count */
  DATES = 'dates',
  /** Sellers count */
  SELLERS = 'sellers',
  /** Buyers count */
  BUYERS = 'buyers',
  /** Buy currencies */
  BUY_CURRENCIES = 'buy_currencies',
  /** Sell currencies */
  SELL_CURRENCIES = 'sell_currencies',
  /** Exchange IDs */
  EXCHANGES = 'exchanges',
}

export type TronTransactionFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  refBlockHash?: Maybe<Array<HashSelector>>;
  contractAddress?: Maybe<AddressSelector>;
};

/** Transactions in Tron blockchain */
export type TronTransactions = {
  __typename?: 'TronTransactions';
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  /** Contract Address */
  contractAddress?: Maybe<Address>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  energyFee?: Maybe<Scalars['Float']>;
  energyUsageTotal?: Maybe<Scalars['Float']>;
  /** Expiration */
  expiration: Scalars['Int'];
  fee?: Maybe<Scalars['Float']>;
  /** Fee Limit */
  feeLimit: Scalars['Int'];
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction index in block, 0 based */
  index?: Maybe<Scalars['Int']>;
  internalTransactionsCount?: Maybe<Scalars['Int']>;
  logsCount?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  netFee?: Maybe<Scalars['Float']>;
  netUsage?: Maybe<Scalars['Float']>;
  /** Ref block Hash hex representation */
  refBlockHash: Scalars['String'];
  /** Result message */
  result?: Maybe<Scalars['String']>;
  /** Signatures */
  signatures: Scalars['String'];
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
};

/** Transactions in Tron blockchain */
export type TronTransactionsAnyArgs = {
  of: TronTransactionsMeasureable;
};

/** Transactions in Tron blockchain */
export type TronTransactionsBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Transactions in Tron blockchain */
export type TronTransactionsContractAddressArgs = {
  contractAddress?: Maybe<AddressSelector>;
};

/** Transactions in Tron blockchain */
export type TronTransactionsCountArgs = {
  uniq?: Maybe<TronTransactionsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  refBlockHash?: Maybe<Array<HashSelector>>;
  contractAddress?: Maybe<AddressSelector>;
};

/** Transactions in Tron blockchain */
export type TronTransactionsEnergyFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  refBlockHash?: Maybe<Array<HashSelector>>;
  contractAddress?: Maybe<AddressSelector>;
};

/** Transactions in Tron blockchain */
export type TronTransactionsEnergyUsageTotalArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  refBlockHash?: Maybe<Array<HashSelector>>;
  contractAddress?: Maybe<AddressSelector>;
};

/** Transactions in Tron blockchain */
export type TronTransactionsFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  refBlockHash?: Maybe<Array<HashSelector>>;
  contractAddress?: Maybe<AddressSelector>;
};

/** Transactions in Tron blockchain */
export type TronTransactionsHashArgs = {
  txHash?: Maybe<Array<HashSelector>>;
};

/** Transactions in Tron blockchain */
export type TronTransactionsIndexArgs = {
  txIndex?: Maybe<Array<TxIndexSelector>>;
};

/** Transactions in Tron blockchain */
export type TronTransactionsInternalTransactionsCountArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  refBlockHash?: Maybe<Array<HashSelector>>;
  contractAddress?: Maybe<AddressSelector>;
};

/** Transactions in Tron blockchain */
export type TronTransactionsLogsCountArgs = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  refBlockHash?: Maybe<Array<HashSelector>>;
  contractAddress?: Maybe<AddressSelector>;
};

/** Transactions in Tron blockchain */
export type TronTransactionsMaximumArgs = {
  of: TronTransactionsMeasureable;
  get?: Maybe<TronTransactionsMeasureable>;
};

/** Transactions in Tron blockchain */
export type TronTransactionsMinimumArgs = {
  of: TronTransactionsMeasureable;
  get?: Maybe<TronTransactionsMeasureable>;
};

/** Transactions in Tron blockchain */
export type TronTransactionsNetFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  refBlockHash?: Maybe<Array<HashSelector>>;
  contractAddress?: Maybe<AddressSelector>;
};

/** Transactions in Tron blockchain */
export type TronTransactionsNetUsageArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  refBlockHash?: Maybe<Array<HashSelector>>;
  contractAddress?: Maybe<AddressSelector>;
};

/** Transactions in Tron blockchain */
export type TronTransactionsRefBlockHashArgs = {
  refBlockHash?: Maybe<Array<HashSelector>>;
};

/** Transactions in Tron blockchain */
export type TronTransactionsSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>;
};

export enum TronTransactionsMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Transaction hash */
  TX_HASH = 'tx_hash',
  /** Fee */
  FEE = 'fee',
  /** Fee Limit */
  FEE_LIMIT = 'fee_limit',
  /** Energy Fee */
  ENERGY_FEE = 'energy_fee',
  /** Net usage */
  NET_USAGE = 'net_usage',
  /** Internal transactions count */
  INTERNAL_TRANSACTIONS_COUNT = 'internal_transactions_count',
}

export enum TronTransactionsUniq {
  /** Unique blocks */
  BLOCKS = 'blocks',
  /** Unique date count */
  DATES = 'dates',
}

export type TronTransferFilter = {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<TronCurrencySelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  entityId?: Maybe<EntitySelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfers = {
  __typename?: 'TronTransfers';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  /** Contract type */
  contractType?: Maybe<TronContractType>;
  count?: Maybe<Scalars['Int']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  energyUsageTotal?: Maybe<Scalars['Float']>;
  /** Entity identifier ( for ERC-721 NFT tokens ) */
  entityId?: Maybe<Scalars['String']>;
  /** External transfer executed explicitly by tx sender. Internal transfers executed by smart contracts. */
  external?: Maybe<Scalars['Boolean']>;
  fee?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  netUsage?: Maybe<Scalars['Float']>;
  /** Transfer receiver */
  receiver?: Maybe<Address>;
  /** Transfer sender */
  sender?: Maybe<Address>;
  /** Transfer succeeded */
  success?: Maybe<Scalars['Boolean']>;
  /** Action from address */
  txFrom?: Maybe<Address>;
  /** Transaction hash where transfer happened */
  txHash?: Maybe<Scalars['String']>;
  /** Action to address */
  txTo?: Maybe<Address>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<TronCurrencySelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  entityId?: Maybe<EntitySelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersAnyArgs = {
  of: TronTransfersMeasureable;
};

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersBlockArgs = {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersContractTypeArgs = {
  contractType?: Maybe<TronContractTypeSelector>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersCountArgs = {
  uniq?: Maybe<TransfersUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<TronCurrencySelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  entityId?: Maybe<EntitySelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersCurrencyArgs = {
  currency?: Maybe<TronCurrencySelector>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersEnergyUsageTotalArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<TronCurrencySelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  entityId?: Maybe<EntitySelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersEntityIdArgs = {
  entityId?: Maybe<EntitySelector>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersExternalArgs = {
  external?: Maybe<Scalars['Boolean']>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<TronCurrencySelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  entityId?: Maybe<EntitySelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersMaximumArgs = {
  of: TronTransfersMeasureable;
  get?: Maybe<TronTransfersMeasureable>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersMinimumArgs = {
  of: TronTransfersMeasureable;
  get?: Maybe<TronTransfersMeasureable>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersNetUsageArgs = {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<TronCurrencySelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  entityId?: Maybe<EntitySelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersReceiverArgs = {
  receiver?: Maybe<AddressSelector>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersSenderArgs = {
  sender?: Maybe<AddressSelector>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersTxFromArgs = {
  txFrom?: Maybe<AddressSelector>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersTxHashArgs = {
  txHash?: Maybe<HashSelector>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersTxToArgs = {
  txTo?: Maybe<AddressSelector>;
};

export enum TronTransfersMeasureable {
  /** Date */
  DATE = 'date',
  /** Time */
  TIME = 'time',
  /** Block */
  BLOCK = 'block',
  /** Transaction hash */
  TX_HASH = 'tx_hash',
  /** Amount */
  AMOUNT = 'amount',
  /** Sender */
  SENDER = 'sender',
  /** Receiver */
  RECEIVER = 'receiver',
  /** Currency symbol */
  CURRENCY_SYMBOL = 'currency_symbol',
  /** Token address */
  CURRENCY_ADDRESS = 'currency_address',
  /** Token ID */
  TOKEN_ID = 'token_id',
  /** Token type */
  TOKEN_TYPE = 'token_type',
}

/** Selector of index of transaction in block */
export type TxIndexSelector = {
  /** Tx index is */
  is?: Maybe<Scalars['Int']>;
  /** Tx index not */
  not?: Maybe<Scalars['Int']>;
  /** Tx index in the list */
  in?: Maybe<Array<Scalars['Int']>>;
  /** Tx index not in the list */
  notIn?: Maybe<Array<Scalars['Int']>>;
};

/** Select transactions by subtype */
export type TxSubtypeSelector = {
  /** Transaction SubType is */
  is?: Maybe<AlgorandTxSubType>;
  /** Transaction SubType not */
  not?: Maybe<AlgorandTxSubType>;
  /** Transaction SubType in the list */
  in?: Maybe<Array<AlgorandTxSubType>>;
  /** Transaction SubType not in the list */
  notIn?: Maybe<Array<AlgorandTxSubType>>;
};

/** Select transactions by type */
export type TxTypeSelector = {
  /** Transaction Type is */
  is?: Maybe<AlgorandTxType>;
  /** Transaction Type not */
  not?: Maybe<AlgorandTxType>;
  /** Transaction Type in the list */
  in?: Maybe<Array<AlgorandTxType>>;
  /** Transaction Type not in the list */
  notIn?: Maybe<Array<AlgorandTxType>>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Account: ResolverTypeWrapper<Account>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Address: ResolverTypeWrapper<Address>;
  AddressSelector: AddressSelector;
  AddressSelectorIn: AddressSelectorIn;
  AddressWithAccount: ResolverTypeWrapper<AddressWithAccount>;
  Algorand: ResolverTypeWrapper<Algorand>;
  AlgorandAddressInfo: ResolverTypeWrapper<AlgorandAddressInfo>;
  AlgorandAddressSelector: AlgorandAddressSelector;
  AlgorandArgumentFilter: AlgorandArgumentFilter;
  AlgorandArguments: ResolverTypeWrapper<AlgorandArguments>;
  AlgorandArgumentsMeasureable: AlgorandArgumentsMeasureable;
  AlgorandBlockFilter: AlgorandBlockFilter;
  AlgorandBlocks: ResolverTypeWrapper<AlgorandBlocks>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  AlgorandBlocksMeasureable: AlgorandBlocksMeasureable;
  AlgorandBlocksUniq: AlgorandBlocksUniq;
  AlgorandCallsMeasureable: AlgorandCallsMeasureable;
  AlgorandCoinpath: ResolverTypeWrapper<AlgorandCoinpath>;
  AlgorandCurrencySelector: AlgorandCurrencySelector;
  AlgorandNetwork: AlgorandNetwork;
  AlgorandSmartContract: ResolverTypeWrapper<AlgorandSmartContract>;
  AlgorandSmartContractCallFilter: AlgorandSmartContractCallFilter;
  AlgorandSmartContractCalls: ResolverTypeWrapper<AlgorandSmartContractCalls>;
  AlgorandTransactionFilter: AlgorandTransactionFilter;
  AlgorandTransactions: ResolverTypeWrapper<AlgorandTransactions>;
  AlgorandTransactionsMeasureable: AlgorandTransactionsMeasureable;
  AlgorandTransactionsUniq: AlgorandTransactionsUniq;
  AlgorandTransferFilter: AlgorandTransferFilter;
  AlgorandTransferType: AlgorandTransferType;
  AlgorandTransferTypeSelector: AlgorandTransferTypeSelector;
  AlgorandTransfers: ResolverTypeWrapper<AlgorandTransfers>;
  AlgorandTransfersMeasureable: AlgorandTransfersMeasureable;
  AlgorandTxSubType: AlgorandTxSubType;
  AlgorandTxType: AlgorandTxType;
  AmountAggregateFunction: AmountAggregateFunction;
  AmountSelector: AmountSelector;
  ArgumentIndexSelector: ArgumentIndexSelector;
  ArgumentName: ResolverTypeWrapper<ArgumentName>;
  ArgumentNameValue: ResolverTypeWrapper<ArgumentNameValue>;
  ArgumentSelector: ArgumentSelector;
  ArgumentTypeSelector: ArgumentTypeSelector;
  ArgumentValue: ResolverTypeWrapper<ArgumentValue>;
  ArgumentValueSelector: ArgumentValueSelector;
  BaseCurrencyEnum: BaseCurrencyEnum;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Binance: ResolverTypeWrapper<Binance>;
  BinanceAddressSelector: BinanceAddressSelector;
  BinanceBlock: ResolverTypeWrapper<BinanceBlock>;
  BinanceBlockFilter: BinanceBlockFilter;
  BinanceBlockUniq: BinanceBlockUniq;
  BinanceBlocksMeasureable: BinanceBlocksMeasureable;
  BinanceCoinpath: ResolverTypeWrapper<BinanceCoinpath>;
  BinanceCurrencySelector: BinanceCurrencySelector;
  BinanceOrderFilter: BinanceOrderFilter;
  BinanceOrderSide: BinanceOrderSide;
  BinanceOrderStatus: BinanceOrderStatus;
  BinanceOrderTimeInForce: BinanceOrderTimeInForce;
  BinanceOrderType: BinanceOrderType;
  BinanceOrders: ResolverTypeWrapper<BinanceOrders>;
  BinanceOrdersMeasureable: BinanceOrdersMeasureable;
  BinanceOrdersUniq: BinanceOrdersUniq;
  BinanceTradeFilter: BinanceTradeFilter;
  BinanceTrades: ResolverTypeWrapper<BinanceTrades>;
  BinanceTradesMeasureable: BinanceTradesMeasureable;
  BinanceTradesUniq: BinanceTradesUniq;
  BinanceTransactionFilter: BinanceTransactionFilter;
  BinanceTransactionType: BinanceTransactionType;
  BinanceTransactionTypeSelector: BinanceTransactionTypeSelector;
  BinanceTransactions: ResolverTypeWrapper<BinanceTransactions>;
  BinanceTransactionsMeasureable: BinanceTransactionsMeasureable;
  BinanceTransactionsUniq: BinanceTransactionsUniq;
  BinanceTransferFilter: BinanceTransferFilter;
  BinanceTransferType: BinanceTransferType;
  BinanceTransferTypeSelector: BinanceTransferTypeSelector;
  BinanceTransfers: ResolverTypeWrapper<BinanceTransfers>;
  BinanceTransfersMeasureable: BinanceTransfersMeasureable;
  Bitcoin: ResolverTypeWrapper<Bitcoin>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BitcoinBlock: ResolverTypeWrapper<BitcoinBlock>;
  BitcoinBlockFilter: BitcoinBlockFilter;
  BitcoinBlockUniq: BitcoinBlockUniq;
  BitcoinBlocksMeasureable: BitcoinBlocksMeasureable;
  BitcoinCoinpath: ResolverTypeWrapper<BitcoinCoinpath>;
  BitcoinCoinpathMethod: BitcoinCoinpathMethod;
  BitcoinCoinpathOptions: BitcoinCoinpathOptions;
  BitcoinInputFilter: BitcoinInputFilter;
  BitcoinInputScriptType: BitcoinInputScriptType;
  BitcoinInputScriptTypeSelector: BitcoinInputScriptTypeSelector;
  BitcoinInputUniq: BitcoinInputUniq;
  BitcoinInputsMeasureable: BitcoinInputsMeasureable;
  BitcoinNetwork: BitcoinNetwork;
  BitcoinOutputDirection: BitcoinOutputDirection;
  BitcoinOutputDirectionSelector: BitcoinOutputDirectionSelector;
  BitcoinOutputFilter: BitcoinOutputFilter;
  BitcoinOutputScriptType: BitcoinOutputScriptType;
  BitcoinOutputScriptTypeSelector: BitcoinOutputScriptTypeSelector;
  BitcoinOutputUniq: BitcoinOutputUniq;
  BitcoinOutputsMeasureable: BitcoinOutputsMeasureable;
  BitcoinTransaction: ResolverTypeWrapper<BitcoinTransaction>;
  BitcoinTransactionFilter: BitcoinTransactionFilter;
  BitcoinTransactionInput: ResolverTypeWrapper<BitcoinTransactionInput>;
  BitcoinTransactionOutput: ResolverTypeWrapper<BitcoinTransactionOutput>;
  BitcoinTransactionUniq: BitcoinTransactionUniq;
  BitcoinTransactionsMeasureable: BitcoinTransactionsMeasureable;
  Block: ResolverTypeWrapper<Block>;
  BlockExtended: ResolverTypeWrapper<BlockExtended>;
  BlockInfo: ResolverTypeWrapper<BlockInfo>;
  BlockSelector: BlockSelector;
  BlockSelectorRange: BlockSelectorRange;
  BlockchainNetwork: ResolverTypeWrapper<BlockchainNetwork>;
  CoinpathEntry: ResolverTypeWrapper<CoinpathEntry>;
  CoinpathMeasureable: CoinpathMeasureable;
  CoinpathOptions: CoinpathOptions;
  Conflux: ResolverTypeWrapper<Conflux>;
  ConfluxBlockFilter: ConfluxBlockFilter;
  ConfluxBlocks: ResolverTypeWrapper<ConfluxBlocks>;
  ConfluxBlocksMeasureable: ConfluxBlocksMeasureable;
  ConfluxNetwork: ConfluxNetwork;
  ConfluxTransactionFilter: ConfluxTransactionFilter;
  ConfluxTransactions: ResolverTypeWrapper<ConfluxTransactions>;
  ConfluxTransactionsMeasureable: ConfluxTransactionsMeasureable;
  Continent: Continent;
  ContinentSelector: ContinentSelector;
  CountryCode: CountryCode;
  CountrySelector: CountrySelector;
  CovidCountry: ResolverTypeWrapper<CovidCountry>;
  CovidFact: ResolverTypeWrapper<CovidFact>;
  CovidHistory: ResolverTypeWrapper<CovidHistory>;
  CovidLocation: ResolverTypeWrapper<CovidLocation>;
  Currency: ResolverTypeWrapper<Currency>;
  Date: ResolverTypeWrapper<Date>;
  DateInterval: DateInterval;
  DateSelector: DateSelector;
  DateTime: ResolverTypeWrapper<DateTime>;
  DateTimeSelector: DateTimeSelector;
  DiemNetwork: DiemNetwork;
  Entity: ResolverTypeWrapper<Entity>;
  EntitySelector: EntitySelector;
  EntityTypeEnum: EntityTypeEnum;
  EntityTypeSelector: EntityTypeSelector;
  Eos: ResolverTypeWrapper<Eos>;
  EosAddressInfo: ResolverTypeWrapper<EosAddressInfo>;
  EosBlockFilter: EosBlockFilter;
  EosBlocks: ResolverTypeWrapper<EosBlocks>;
  EosBlocksMeasureable: EosBlocksMeasureable;
  EosBlocksUniq: EosBlocksUniq;
  EosCallsMeasureable: EosCallsMeasureable;
  EosCoinpath: ResolverTypeWrapper<EosCoinpath>;
  EosCurrencySelector: EosCurrencySelector;
  EosSmartContract: ResolverTypeWrapper<EosSmartContract>;
  EosSmartContractCallFilter: EosSmartContractCallFilter;
  EosSmartContractCalls: ResolverTypeWrapper<EosSmartContractCalls>;
  EosSmartContractInfo: ResolverTypeWrapper<EosSmartContractInfo>;
  EosTransactionFilter: EosTransactionFilter;
  EosTransactions: ResolverTypeWrapper<EosTransactions>;
  EosTransactionsMeasureable: EosTransactionsMeasureable;
  EosTransactionsUniq: EosTransactionsUniq;
  EosTransferFilter: EosTransferFilter;
  EosTransfers: ResolverTypeWrapper<EosTransfers>;
  EosTransfersMeasureable: EosTransfersMeasureable;
  Ethereum: ResolverTypeWrapper<Ethereum>;
  Ethereum2: ResolverTypeWrapper<Ethereum2>;
  Ethereum2Attestation: ResolverTypeWrapper<Ethereum2Attestation>;
  Ethereum2AttestationFieldInfo: ResolverTypeWrapper<Ethereum2AttestationFieldInfo>;
  Ethereum2AttestationInfo: ResolverTypeWrapper<Ethereum2AttestationInfo>;
  Ethereum2AttestationsMeasureable: Ethereum2AttestationsMeasureable;
  Ethereum2AttestationsUniq: Ethereum2AttestationsUniq;
  Ethereum2AttesterSlashing: ResolverTypeWrapper<Ethereum2AttesterSlashing>;
  Ethereum2AttesterSlashingMeasureable: Ethereum2AttesterSlashingMeasureable;
  Ethereum2AttesterSlashingsUniq: Ethereum2AttesterSlashingsUniq;
  Ethereum2Blocks: ResolverTypeWrapper<Ethereum2Blocks>;
  Ethereum2BlocksMeasureable: Ethereum2BlocksMeasureable;
  Ethereum2BlocksUniq: Ethereum2BlocksUniq;
  Ethereum2Deposit: ResolverTypeWrapper<Ethereum2Deposit>;
  Ethereum2DepositsMeasureable: Ethereum2DepositsMeasureable;
  Ethereum2DepositsUniq: Ethereum2DepositsUniq;
  Ethereum2Eth1Info: ResolverTypeWrapper<Ethereum2Eth1Info>;
  Ethereum2Filter: Ethereum2Filter;
  Ethereum2Network: Ethereum2Network;
  Ethereum2ProposerSlashing: ResolverTypeWrapper<Ethereum2ProposerSlashing>;
  Ethereum2ProposerSlashingMeasureable: Ethereum2ProposerSlashingMeasureable;
  Ethereum2ProposerSlashingsUniq: Ethereum2ProposerSlashingsUniq;
  Ethereum2SlashingInfo: ResolverTypeWrapper<Ethereum2SlashingInfo>;
  Ethereum2ValidatorInfo: ResolverTypeWrapper<Ethereum2ValidatorInfo>;
  Ethereum2VoluntaryExit: ResolverTypeWrapper<Ethereum2VoluntaryExit>;
  Ethereum2VoluntaryExitsMeasureable: Ethereum2VoluntaryExitsMeasureable;
  Ethereum2VoluntaryExitsUniq: Ethereum2VoluntaryExitsUniq;
  EthereumAddressInfo: ResolverTypeWrapper<EthereumAddressInfo>;
  EthereumAddressInfoWithBalance: ResolverTypeWrapper<EthereumAddressInfoWithBalance>;
  EthereumAddressSelector: EthereumAddressSelector;
  EthereumAddressSelectorIn: EthereumAddressSelectorIn;
  EthereumArgumentFilter: EthereumArgumentFilter;
  EthereumArguments: ResolverTypeWrapper<
    Omit<EthereumArguments, 'smartContractSignature'> & {
      smartContractSignature?: Maybe<ResolversTypes['Signature']>;
    }
  >;
  EthereumArgumentsConvertable: EthereumArgumentsConvertable;
  EthereumArgumentsMeasureable: EthereumArgumentsMeasureable;
  EthereumBalance: ResolverTypeWrapper<EthereumBalance>;
  EthereumBalanceChange: ResolverTypeWrapper<EthereumBalanceChange>;
  EthereumBlockFilter: EthereumBlockFilter;
  EthereumBlocks: ResolverTypeWrapper<EthereumBlocks>;
  EthereumBlocksMeasureable: EthereumBlocksMeasureable;
  EthereumBlocksUniq: EthereumBlocksUniq;
  EthereumCallsMeasureable: EthereumCallsMeasureable;
  EthereumCoinpath: ResolverTypeWrapper<EthereumCoinpath>;
  EthereumCurrencySelector: EthereumCurrencySelector;
  EthereumDex: ResolverTypeWrapper<EthereumDex>;
  EthereumDexTradeFilter: EthereumDexTradeFilter;
  EthereumDexTrades: ResolverTypeWrapper<EthereumDexTrades>;
  EthereumDexTradesMeasureable: EthereumDexTradesMeasureable;
  EthereumDexTradesUniq: EthereumDexTradesUniq;
  EthereumEventsMeasureable: EthereumEventsMeasureable;
  EthereumNetwork: EthereumNetwork;
  EthereumSmartContract: ResolverTypeWrapper<EthereumSmartContract>;
  EthereumSmartContractCallFilter: EthereumSmartContractCallFilter;
  EthereumSmartContractCalls: ResolverTypeWrapper<EthereumSmartContractCalls>;
  EthereumSmartContractEvent: ResolverTypeWrapper<EthereumSmartContractEvent>;
  EthereumSmartContractEventFilter: EthereumSmartContractEventFilter;
  EthereumSmartContractInfo: ResolverTypeWrapper<EthereumSmartContractInfo>;
  EthereumSmartContractInfoWithAttributes: ResolverTypeWrapper<EthereumSmartContractInfoWithAttributes>;
  EthereumTransactionFilter: EthereumTransactionFilter;
  EthereumTransactionInfo: ResolverTypeWrapper<EthereumTransactionInfo>;
  EthereumTransactionInfoExtended: ResolverTypeWrapper<EthereumTransactionInfoExtended>;
  EthereumTransactions: ResolverTypeWrapper<EthereumTransactions>;
  EthereumTransactionsMeasureable: EthereumTransactionsMeasureable;
  EthereumTransactionsUniq: EthereumTransactionsUniq;
  EthereumTransferFilter: EthereumTransferFilter;
  EthereumTransfers: ResolverTypeWrapper<EthereumTransfers>;
  EthereumTransfersMeasureable: EthereumTransfersMeasureable;
  Event: ResolverTypeWrapper<Event>;
  EventSelector: EventSelector;
  Filecoin: ResolverTypeWrapper<Filecoin>;
  FilecoinBlock: ResolverTypeWrapper<FilecoinBlock>;
  FilecoinBlockFilter: FilecoinBlockFilter;
  FilecoinBlockUniq: FilecoinBlockUniq;
  FilecoinBlocksMeasureable: FilecoinBlocksMeasureable;
  FilecoinCallFilter: FilecoinCallFilter;
  FilecoinCalls: ResolverTypeWrapper<FilecoinCalls>;
  FilecoinCallsMeasureable: FilecoinCallsMeasureable;
  FilecoinCoinpath: ResolverTypeWrapper<FilecoinCoinpath>;
  FilecoinMessageFilter: FilecoinMessageFilter;
  FilecoinMessages: ResolverTypeWrapper<FilecoinMessages>;
  FilecoinMessagesMeasureable: FilecoinMessagesMeasureable;
  FilecoinMessagesUniq: FilecoinMessagesUniq;
  FilecoinMinedBlock: ResolverTypeWrapper<FilecoinMinedBlock>;
  FilecoinNetwork: FilecoinNetwork;
  FilecoinTransferFilter: FilecoinTransferFilter;
  FilecoinTransferType: FilecoinTransferType;
  FilecoinTransfers: ResolverTypeWrapper<FilecoinTransfers>;
  FilecoinTransfersMeasureable: FilecoinTransfersMeasureable;
  FloatSelector: FloatSelector;
  FlowDirection: FlowDirection;
  HashSelector: HashSelector;
  Hedera: ResolverTypeWrapper<Hedera>;
  HederaAccount: ResolverTypeWrapper<HederaAccount>;
  HederaArgument: ResolverTypeWrapper<HederaArgument>;
  HederaArgumentFilter: HederaArgumentFilter;
  HederaArgumentsMeasureable: HederaArgumentsMeasureable;
  HederaArgumentsUniq: HederaArgumentsUniq;
  HederaCall: ResolverTypeWrapper<HederaCall>;
  HederaCallFilter: HederaCallFilter;
  HederaCallsMeasureable: HederaCallsMeasureable;
  HederaCallsUniq: HederaCallsUniq;
  HederaCoinpath: ResolverTypeWrapper<HederaCoinpath>;
  HederaCurrencySelector: HederaCurrencySelector;
  HederaInput: ResolverTypeWrapper<HederaInput>;
  HederaInputFilter: HederaInputFilter;
  HederaInputMeasureable: HederaInputMeasureable;
  HederaInputsUniq: HederaInputsUniq;
  HederaMessage: ResolverTypeWrapper<HederaMessage>;
  HederaMessageFilter: HederaMessageFilter;
  HederaMessageMeasureable: HederaMessageMeasureable;
  HederaMessagesUniq: HederaMessagesUniq;
  HederaNetwork: HederaNetwork;
  HederaOutput: ResolverTypeWrapper<HederaOutput>;
  HederaOutputFilter: HederaOutputFilter;
  HederaOutputMeasureable: HederaOutputMeasureable;
  HederaOutputUniq: HederaOutputUniq;
  HederaTransaction: ResolverTypeWrapper<HederaTransaction>;
  HederaTransactionFilter: HederaTransactionFilter;
  HederaTransactionMeasureable: HederaTransactionMeasureable;
  HederaTransactionsUniq: HederaTransactionsUniq;
  ISO8601Date: ResolverTypeWrapper<Scalars['ISO8601Date']>;
  ISO8601DateTime: ResolverTypeWrapper<Scalars['ISO8601DateTime']>;
  InputScript: ResolverTypeWrapper<InputScript>;
  IntIdSelector: IntIdSelector;
  IntegerLimitedSelector: IntegerLimitedSelector;
  IntegerSelector: IntegerSelector;
  Libra: ResolverTypeWrapper<Libra>;
  LibraBlock: ResolverTypeWrapper<LibraBlock>;
  LibraBlockFilter: LibraBlockFilter;
  LibraBlockUniq: LibraBlockUniq;
  LibraBlocksMeasureable: LibraBlocksMeasureable;
  LibraCoinpath: ResolverTypeWrapper<LibraCoinpath>;
  LibraCoinpathMeasureable: LibraCoinpathMeasureable;
  LibraCurrencySelector: LibraCurrencySelector;
  LibraMintFilter: LibraMintFilter;
  LibraMints: ResolverTypeWrapper<LibraMints>;
  LibraMintsMeasureable: LibraMintsMeasureable;
  LibraMintsUniq: LibraMintsUniq;
  LibraTransactionFilter: LibraTransactionFilter;
  LibraTransactionValue: ResolverTypeWrapper<LibraTransactionValue>;
  LibraTransactions: ResolverTypeWrapper<LibraTransactions>;
  LibraTransactionsMeasureable: LibraTransactionsMeasureable;
  LibraTransactionsUniq: LibraTransactionsUniq;
  LibraTransferFilter: LibraTransferFilter;
  LibraTransfers: ResolverTypeWrapper<LibraTransfers>;
  LibraTransfersMeasureable: LibraTransfersMeasureable;
  LimitByOption: LimitByOption;
  Method: ResolverTypeWrapper<Method>;
  MethodSelector: MethodSelector;
  NameWithId: ResolverTypeWrapper<NameWithId>;
  Network: Network;
  Offchain: ResolverTypeWrapper<Offchain>;
  OrderIdSelector: OrderIdSelector;
  OrderSideSelector: OrderSideSelector;
  OrderStatusSelector: OrderStatusSelector;
  OrderTimeInForceSelector: OrderTimeInForceSelector;
  OrderTypeSelector: OrderTypeSelector;
  OutputIndexSelector: OutputIndexSelector;
  OutputScript: ResolverTypeWrapper<OutputScript>;
  PriceAggregateFunction: PriceAggregateFunction;
  Protocol: Protocol;
  Query: ResolverTypeWrapper<{}>;
  QueryOptions: QueryOptions;
  Result: ResolverTypeWrapper<
    Omit<Result, 'subject'> & { subject: ResolversTypes['Subject'] }
  >;
  ScriptTypeSelectorSelector: ScriptTypeSelectorSelector;
  Signature: ResolversTypes['Event'] | ResolversTypes['Method'];
  SignatureTypeSelector: SignatureTypeSelector;
  SmartContract: ResolverTypeWrapper<SmartContract>;
  SmartContractArgumentsUniq: SmartContractArgumentsUniq;
  SmartContractCallsUniq: SmartContractCallsUniq;
  SmartContractReadonlyAttribute: ResolverTypeWrapper<SmartContractReadonlyAttribute>;
  SmartContractType: SmartContractType;
  SmartContractTypeSelector: SmartContractTypeSelector;
  StringIdSelector: StringIdSelector;
  StringSelector: StringSelector;
  Subject:
    | ResolversTypes['Address']
    | ResolversTypes['Currency']
    | ResolversTypes['HederaAccount']
    | ResolversTypes['SmartContract']
    | ResolversTypes['TransactionHash'];
  TimeInterval: ResolverTypeWrapper<TimeInterval>;
  Timestamp: ResolverTypeWrapper<Timestamp>;
  TradeIdSelector: TradeIdSelector;
  TradeSide: TradeSide;
  TransactionHash: ResolverTypeWrapper<TransactionHash>;
  TransactionHashIndex: ResolverTypeWrapper<TransactionHashIndex>;
  TransactionHashIndexValues: ResolverTypeWrapper<TransactionHashIndexValues>;
  TransactionHashValue: ResolverTypeWrapper<TransactionHashValue>;
  TransactionResult: ResolverTypeWrapper<TransactionResult>;
  TransactionSource: ResolverTypeWrapper<TransactionSource>;
  TransferTypeSelector: TransferTypeSelector;
  TransfersUniq: TransfersUniq;
  Tron: ResolverTypeWrapper<Tron>;
  TronAddressInfo: ResolverTypeWrapper<TronAddressInfo>;
  TronBlockFilter: TronBlockFilter;
  TronBlocks: ResolverTypeWrapper<TronBlocks>;
  TronBlocksMeasureable: TronBlocksMeasureable;
  TronBlocksUniq: TronBlocksUniq;
  TronCallsMeasureable: TronCallsMeasureable;
  TronCoinpath: ResolverTypeWrapper<TronCoinpath>;
  TronContractFilter: TronContractFilter;
  TronContractType: TronContractType;
  TronContractTypeSelector: TronContractTypeSelector;
  TronContractsMeasureable: TronContractsMeasureable;
  TronCurrencySelector: TronCurrencySelector;
  TronEventsMeasureable: TronEventsMeasureable;
  TronSmartContract: ResolverTypeWrapper<TronSmartContract>;
  TronSmartContractCallFilter: TronSmartContractCallFilter;
  TronSmartContractCalls: ResolverTypeWrapper<TronSmartContractCalls>;
  TronSmartContractEventFilter: TronSmartContractEventFilter;
  TronSmartContractEvents: ResolverTypeWrapper<TronSmartContractEvents>;
  TronSmartContractInfo: ResolverTypeWrapper<TronSmartContractInfo>;
  TronSmartContracts: ResolverTypeWrapper<TronSmartContracts>;
  TronTradeFilter: TronTradeFilter;
  TronTrades: ResolverTypeWrapper<TronTrades>;
  TronTradesMeasureable: TronTradesMeasureable;
  TronTradesUniq: TronTradesUniq;
  TronTransactionFilter: TronTransactionFilter;
  TronTransactions: ResolverTypeWrapper<TronTransactions>;
  TronTransactionsMeasureable: TronTransactionsMeasureable;
  TronTransactionsUniq: TronTransactionsUniq;
  TronTransferFilter: TronTransferFilter;
  TronTransfers: ResolverTypeWrapper<TronTransfers>;
  TronTransfersMeasureable: TronTransfersMeasureable;
  TxIndexSelector: TxIndexSelector;
  TxSubtypeSelector: TxSubtypeSelector;
  TxTypeSelector: TxTypeSelector;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Account: Account;
  String: Scalars['String'];
  Int: Scalars['Int'];
  Address: Address;
  AddressSelector: AddressSelector;
  AddressSelectorIn: AddressSelectorIn;
  AddressWithAccount: AddressWithAccount;
  Algorand: Algorand;
  AlgorandAddressInfo: AlgorandAddressInfo;
  AlgorandAddressSelector: AlgorandAddressSelector;
  AlgorandArgumentFilter: AlgorandArgumentFilter;
  AlgorandArguments: AlgorandArguments;
  AlgorandBlockFilter: AlgorandBlockFilter;
  AlgorandBlocks: AlgorandBlocks;
  Float: Scalars['Float'];
  AlgorandCoinpath: AlgorandCoinpath;
  AlgorandCurrencySelector: AlgorandCurrencySelector;
  AlgorandSmartContract: AlgorandSmartContract;
  AlgorandSmartContractCallFilter: AlgorandSmartContractCallFilter;
  AlgorandSmartContractCalls: AlgorandSmartContractCalls;
  AlgorandTransactionFilter: AlgorandTransactionFilter;
  AlgorandTransactions: AlgorandTransactions;
  AlgorandTransferFilter: AlgorandTransferFilter;
  AlgorandTransferTypeSelector: AlgorandTransferTypeSelector;
  AlgorandTransfers: AlgorandTransfers;
  AmountSelector: AmountSelector;
  ArgumentIndexSelector: ArgumentIndexSelector;
  ArgumentName: ArgumentName;
  ArgumentNameValue: ArgumentNameValue;
  ArgumentSelector: ArgumentSelector;
  ArgumentTypeSelector: ArgumentTypeSelector;
  ArgumentValue: ArgumentValue;
  ArgumentValueSelector: ArgumentValueSelector;
  BigInt: Scalars['BigInt'];
  Binance: Binance;
  BinanceAddressSelector: BinanceAddressSelector;
  BinanceBlock: BinanceBlock;
  BinanceBlockFilter: BinanceBlockFilter;
  BinanceCoinpath: BinanceCoinpath;
  BinanceCurrencySelector: BinanceCurrencySelector;
  BinanceOrderFilter: BinanceOrderFilter;
  BinanceOrders: BinanceOrders;
  BinanceTradeFilter: BinanceTradeFilter;
  BinanceTrades: BinanceTrades;
  BinanceTransactionFilter: BinanceTransactionFilter;
  BinanceTransactionTypeSelector: BinanceTransactionTypeSelector;
  BinanceTransactions: BinanceTransactions;
  BinanceTransferFilter: BinanceTransferFilter;
  BinanceTransferTypeSelector: BinanceTransferTypeSelector;
  BinanceTransfers: BinanceTransfers;
  Bitcoin: Bitcoin;
  Boolean: Scalars['Boolean'];
  BitcoinBlock: BitcoinBlock;
  BitcoinBlockFilter: BitcoinBlockFilter;
  BitcoinCoinpath: BitcoinCoinpath;
  BitcoinCoinpathOptions: BitcoinCoinpathOptions;
  BitcoinInputFilter: BitcoinInputFilter;
  BitcoinInputScriptTypeSelector: BitcoinInputScriptTypeSelector;
  BitcoinOutputDirectionSelector: BitcoinOutputDirectionSelector;
  BitcoinOutputFilter: BitcoinOutputFilter;
  BitcoinOutputScriptTypeSelector: BitcoinOutputScriptTypeSelector;
  BitcoinTransaction: BitcoinTransaction;
  BitcoinTransactionFilter: BitcoinTransactionFilter;
  BitcoinTransactionInput: BitcoinTransactionInput;
  BitcoinTransactionOutput: BitcoinTransactionOutput;
  Block: Block;
  BlockExtended: BlockExtended;
  BlockInfo: BlockInfo;
  BlockSelector: BlockSelector;
  BlockSelectorRange: BlockSelectorRange;
  BlockchainNetwork: BlockchainNetwork;
  CoinpathEntry: CoinpathEntry;
  CoinpathOptions: CoinpathOptions;
  Conflux: Conflux;
  ConfluxBlockFilter: ConfluxBlockFilter;
  ConfluxBlocks: ConfluxBlocks;
  ConfluxTransactionFilter: ConfluxTransactionFilter;
  ConfluxTransactions: ConfluxTransactions;
  ContinentSelector: ContinentSelector;
  CountrySelector: CountrySelector;
  CovidCountry: CovidCountry;
  CovidFact: CovidFact;
  CovidHistory: CovidHistory;
  CovidLocation: CovidLocation;
  Currency: Currency;
  Date: Date;
  DateSelector: DateSelector;
  DateTime: DateTime;
  DateTimeSelector: DateTimeSelector;
  Entity: Entity;
  EntitySelector: EntitySelector;
  EntityTypeSelector: EntityTypeSelector;
  Eos: Eos;
  EosAddressInfo: EosAddressInfo;
  EosBlockFilter: EosBlockFilter;
  EosBlocks: EosBlocks;
  EosCoinpath: EosCoinpath;
  EosCurrencySelector: EosCurrencySelector;
  EosSmartContract: EosSmartContract;
  EosSmartContractCallFilter: EosSmartContractCallFilter;
  EosSmartContractCalls: EosSmartContractCalls;
  EosSmartContractInfo: EosSmartContractInfo;
  EosTransactionFilter: EosTransactionFilter;
  EosTransactions: EosTransactions;
  EosTransferFilter: EosTransferFilter;
  EosTransfers: EosTransfers;
  Ethereum: Ethereum;
  Ethereum2: Ethereum2;
  Ethereum2Attestation: Ethereum2Attestation;
  Ethereum2AttestationFieldInfo: Ethereum2AttestationFieldInfo;
  Ethereum2AttestationInfo: Ethereum2AttestationInfo;
  Ethereum2AttesterSlashing: Ethereum2AttesterSlashing;
  Ethereum2Blocks: Ethereum2Blocks;
  Ethereum2Deposit: Ethereum2Deposit;
  Ethereum2Eth1Info: Ethereum2Eth1Info;
  Ethereum2Filter: Ethereum2Filter;
  Ethereum2ProposerSlashing: Ethereum2ProposerSlashing;
  Ethereum2SlashingInfo: Ethereum2SlashingInfo;
  Ethereum2ValidatorInfo: Ethereum2ValidatorInfo;
  Ethereum2VoluntaryExit: Ethereum2VoluntaryExit;
  EthereumAddressInfo: EthereumAddressInfo;
  EthereumAddressInfoWithBalance: EthereumAddressInfoWithBalance;
  EthereumAddressSelector: EthereumAddressSelector;
  EthereumAddressSelectorIn: EthereumAddressSelectorIn;
  EthereumArgumentFilter: EthereumArgumentFilter;
  EthereumArguments: Omit<EthereumArguments, 'smartContractSignature'> & {
    smartContractSignature?: Maybe<ResolversParentTypes['Signature']>;
  };
  EthereumBalance: EthereumBalance;
  EthereumBalanceChange: EthereumBalanceChange;
  EthereumBlockFilter: EthereumBlockFilter;
  EthereumBlocks: EthereumBlocks;
  EthereumCoinpath: EthereumCoinpath;
  EthereumCurrencySelector: EthereumCurrencySelector;
  EthereumDex: EthereumDex;
  EthereumDexTradeFilter: EthereumDexTradeFilter;
  EthereumDexTrades: EthereumDexTrades;
  EthereumSmartContract: EthereumSmartContract;
  EthereumSmartContractCallFilter: EthereumSmartContractCallFilter;
  EthereumSmartContractCalls: EthereumSmartContractCalls;
  EthereumSmartContractEvent: EthereumSmartContractEvent;
  EthereumSmartContractEventFilter: EthereumSmartContractEventFilter;
  EthereumSmartContractInfo: EthereumSmartContractInfo;
  EthereumSmartContractInfoWithAttributes: EthereumSmartContractInfoWithAttributes;
  EthereumTransactionFilter: EthereumTransactionFilter;
  EthereumTransactionInfo: EthereumTransactionInfo;
  EthereumTransactionInfoExtended: EthereumTransactionInfoExtended;
  EthereumTransactions: EthereumTransactions;
  EthereumTransferFilter: EthereumTransferFilter;
  EthereumTransfers: EthereumTransfers;
  Event: Event;
  EventSelector: EventSelector;
  Filecoin: Filecoin;
  FilecoinBlock: FilecoinBlock;
  FilecoinBlockFilter: FilecoinBlockFilter;
  FilecoinCallFilter: FilecoinCallFilter;
  FilecoinCalls: FilecoinCalls;
  FilecoinCoinpath: FilecoinCoinpath;
  FilecoinMessageFilter: FilecoinMessageFilter;
  FilecoinMessages: FilecoinMessages;
  FilecoinMinedBlock: FilecoinMinedBlock;
  FilecoinTransferFilter: FilecoinTransferFilter;
  FilecoinTransfers: FilecoinTransfers;
  FloatSelector: FloatSelector;
  HashSelector: HashSelector;
  Hedera: Hedera;
  HederaAccount: HederaAccount;
  HederaArgument: HederaArgument;
  HederaArgumentFilter: HederaArgumentFilter;
  HederaCall: HederaCall;
  HederaCallFilter: HederaCallFilter;
  HederaCoinpath: HederaCoinpath;
  HederaCurrencySelector: HederaCurrencySelector;
  HederaInput: HederaInput;
  HederaInputFilter: HederaInputFilter;
  HederaMessage: HederaMessage;
  HederaMessageFilter: HederaMessageFilter;
  HederaOutput: HederaOutput;
  HederaOutputFilter: HederaOutputFilter;
  HederaTransaction: HederaTransaction;
  HederaTransactionFilter: HederaTransactionFilter;
  ISO8601Date: Scalars['ISO8601Date'];
  ISO8601DateTime: Scalars['ISO8601DateTime'];
  InputScript: InputScript;
  IntIdSelector: IntIdSelector;
  IntegerLimitedSelector: IntegerLimitedSelector;
  IntegerSelector: IntegerSelector;
  Libra: Libra;
  LibraBlock: LibraBlock;
  LibraBlockFilter: LibraBlockFilter;
  LibraCoinpath: LibraCoinpath;
  LibraCurrencySelector: LibraCurrencySelector;
  LibraMintFilter: LibraMintFilter;
  LibraMints: LibraMints;
  LibraTransactionFilter: LibraTransactionFilter;
  LibraTransactionValue: LibraTransactionValue;
  LibraTransactions: LibraTransactions;
  LibraTransferFilter: LibraTransferFilter;
  LibraTransfers: LibraTransfers;
  LimitByOption: LimitByOption;
  Method: Method;
  MethodSelector: MethodSelector;
  NameWithId: NameWithId;
  Offchain: Offchain;
  OrderIdSelector: OrderIdSelector;
  OrderSideSelector: OrderSideSelector;
  OrderStatusSelector: OrderStatusSelector;
  OrderTimeInForceSelector: OrderTimeInForceSelector;
  OrderTypeSelector: OrderTypeSelector;
  OutputIndexSelector: OutputIndexSelector;
  OutputScript: OutputScript;
  Query: {};
  QueryOptions: QueryOptions;
  Result: Omit<Result, 'subject'> & {
    subject: ResolversParentTypes['Subject'];
  };
  Signature: ResolversParentTypes['Event'] | ResolversParentTypes['Method'];
  SmartContract: SmartContract;
  SmartContractReadonlyAttribute: SmartContractReadonlyAttribute;
  SmartContractTypeSelector: SmartContractTypeSelector;
  StringIdSelector: StringIdSelector;
  StringSelector: StringSelector;
  Subject:
    | ResolversParentTypes['Address']
    | ResolversParentTypes['Currency']
    | ResolversParentTypes['HederaAccount']
    | ResolversParentTypes['SmartContract']
    | ResolversParentTypes['TransactionHash'];
  TimeInterval: TimeInterval;
  Timestamp: Timestamp;
  TradeIdSelector: TradeIdSelector;
  TransactionHash: TransactionHash;
  TransactionHashIndex: TransactionHashIndex;
  TransactionHashIndexValues: TransactionHashIndexValues;
  TransactionHashValue: TransactionHashValue;
  TransactionResult: TransactionResult;
  TransactionSource: TransactionSource;
  TransferTypeSelector: TransferTypeSelector;
  Tron: Tron;
  TronAddressInfo: TronAddressInfo;
  TronBlockFilter: TronBlockFilter;
  TronBlocks: TronBlocks;
  TronCoinpath: TronCoinpath;
  TronContractFilter: TronContractFilter;
  TronContractTypeSelector: TronContractTypeSelector;
  TronCurrencySelector: TronCurrencySelector;
  TronSmartContract: TronSmartContract;
  TronSmartContractCallFilter: TronSmartContractCallFilter;
  TronSmartContractCalls: TronSmartContractCalls;
  TronSmartContractEventFilter: TronSmartContractEventFilter;
  TronSmartContractEvents: TronSmartContractEvents;
  TronSmartContractInfo: TronSmartContractInfo;
  TronSmartContracts: TronSmartContracts;
  TronTradeFilter: TronTradeFilter;
  TronTrades: TronTrades;
  TronTransactionFilter: TronTransactionFilter;
  TronTransactions: TronTransactions;
  TronTransferFilter: TronTransferFilter;
  TronTransfers: TronTransfers;
  TxIndexSelector: TxIndexSelector;
  TxSubtypeSelector: TxSubtypeSelector;
  TxTypeSelector: TxTypeSelector;
};

export type AccountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account'],
> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  num?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  realmId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  shardId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddressResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address'],
> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  annotation?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddressWithAccountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AddressWithAccount'] = ResolversParentTypes['AddressWithAccount'],
> = {
  account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  annotation?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AlgorandResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Algorand'] = ResolversParentTypes['Algorand'],
> = {
  address?: Resolver<
    Array<ResolversTypes['AlgorandAddressInfo']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandAddressArgs, 'address'>
  >;
  arguments?: Resolver<
    Maybe<Array<ResolversTypes['AlgorandArguments']>>,
    ParentType,
    ContextType,
    RequireFields<AlgorandArgumentsArgs, never>
  >;
  blocks?: Resolver<
    Maybe<Array<ResolversTypes['AlgorandBlocks']>>,
    ParentType,
    ContextType,
    RequireFields<AlgorandBlocksArgs, never>
  >;
  coinpath?: Resolver<
    Maybe<Array<ResolversTypes['AlgorandCoinpath']>>,
    ParentType,
    ContextType,
    RequireFields<AlgorandCoinpathArgs, never>
  >;
  smartContractCalls?: Resolver<
    Maybe<Array<ResolversTypes['AlgorandSmartContractCalls']>>,
    ParentType,
    ContextType,
    RequireFields<AlgorandSmartContractCallsArgs, never>
  >;
  transactions?: Resolver<
    Maybe<Array<ResolversTypes['AlgorandTransactions']>>,
    ParentType,
    ContextType,
    RequireFields<AlgorandTransactionsArgs, never>
  >;
  transfers?: Resolver<
    Maybe<Array<ResolversTypes['AlgorandTransfers']>>,
    ParentType,
    ContextType,
    RequireFields<AlgorandTransfersArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AlgorandAddressInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AlgorandAddressInfo'] = ResolversParentTypes['AlgorandAddressInfo'],
> = {
  address?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  smartContract?: Resolver<
    Maybe<ResolversTypes['AlgorandSmartContract']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AlgorandArgumentsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AlgorandArguments'] = ResolversParentTypes['AlgorandArguments'],
> = {
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandArgumentsAnyArgs, 'of'>
  >;
  argindex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandArgumentsBlockArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandArgumentsCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  firstRound?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  genesisHash64?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  genesisId?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  lastRound?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandArgumentsMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandArgumentsMinimumArgs, 'of'>
  >;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  poolerror?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  smartContract?: Resolver<
    Maybe<ResolversTypes['AlgorandSmartContract']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandArgumentsSmartContractArgs, never>
  >;
  transaction?: Resolver<
    Maybe<ResolversTypes['TransactionHashIndex']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandArgumentsTransactionArgs, never>
  >;
  txSender?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandArgumentsTxSenderArgs, never>
  >;
  txType?: Resolver<
    Maybe<ResolversTypes['AlgorandTxType']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandArgumentsTxTypeArgs, never>
  >;
  value?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandArgumentsValueArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AlgorandBlocksResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AlgorandBlocks'] = ResolversParentTypes['AlgorandBlocks'],
> = {
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandBlocksAnyArgs, 'of'>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandBlocksCountArgs, never>
  >;
  currentProtocol?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  frac?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  hash?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<AlgorandBlocksHashArgs, never>
  >;
  height?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<AlgorandBlocksHeightArgs, never>
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandBlocksMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandBlocksMinimumArgs, 'of'>
  >;
  nextProtocol?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  nextProtocolApprovals?: Resolver<
    Maybe<ResolversTypes['BigInt']>,
    ParentType,
    ContextType
  >;
  nextProtocolSwitchOn?: Resolver<
    Maybe<ResolversTypes['BigInt']>,
    ParentType,
    ContextType
  >;
  nextProtocolVoteBefore?: Resolver<
    Maybe<ResolversTypes['BigInt']>,
    ParentType,
    ContextType
  >;
  previousBlockHash?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  proposer?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandBlocksProposerArgs, never>
  >;
  rate?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandBlocksRateArgs, never>
  >;
  reward?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandBlocksRewardArgs, never>
  >;
  seed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandBlocksTimestampArgs, never>
  >;
  txnRoot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  upgradeApprove?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  upgradePropose?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AlgorandCoinpathResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AlgorandCoinpath'] = ResolversParentTypes['AlgorandCoinpath'],
> = {
  amount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandCoinpathAmountArgs, never>
  >;
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandCoinpathAnyArgs, 'of'>
  >;
  block?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  currency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType
  >;
  depth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandCoinpathMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandCoinpathMinimumArgs, 'of'>
  >;
  receiver?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType
  >;
  sender?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  transaction?: Resolver<
    Maybe<ResolversTypes['TransactionHashValue']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AlgorandSmartContractResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AlgorandSmartContract'] = ResolversParentTypes['AlgorandSmartContract'],
> = {
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  bytecode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AlgorandSmartContractCallsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AlgorandSmartContractCalls'] = ResolversParentTypes['AlgorandSmartContractCalls'],
> = {
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandSmartContractCallsAnyArgs, 'of'>
  >;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandSmartContractCallsBlockArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandSmartContractCallsCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  fee?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandSmartContractCallsFeeArgs, never>
  >;
  firstRound?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  genesisHash64?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  genesisId?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  lastRound?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandSmartContractCallsMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandSmartContractCallsMinimumArgs, 'of'>
  >;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  poolerror?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  smartContract?: Resolver<
    Maybe<ResolversTypes['AlgorandSmartContract']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandSmartContractCallsSmartContractArgs, never>
  >;
  transaction?: Resolver<
    Maybe<ResolversTypes['TransactionHashIndex']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandSmartContractCallsTransactionArgs, never>
  >;
  txSender?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandSmartContractCallsTxSenderArgs, never>
  >;
  txType?: Resolver<
    Maybe<ResolversTypes['AlgorandTxType']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandSmartContractCallsTxTypeArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AlgorandTransactionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AlgorandTransactions'] = ResolversParentTypes['AlgorandTransactions'],
> = {
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandTransactionsAnyArgs, 'of'>
  >;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandTransactionsBlockArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandTransactionsCountArgs, never>
  >;
  currency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandTransactionsCurrencyArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  fee?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandTransactionsFeeArgs, never>
  >;
  firstRound?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  genesisHash?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  genesisId?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  hash?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<AlgorandTransactionsHashArgs, never>
  >;
  index?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandTransactionsIndexArgs, never>
  >;
  lastRound?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandTransactionsMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandTransactionsMinimumArgs, 'of'>
  >;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  poolerror?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  sender?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandTransactionsSenderArgs, never>
  >;
  subtype?: Resolver<
    Maybe<ResolversTypes['AlgorandTxSubType']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandTransactionsSubtypeArgs, never>
  >;
  type?: Resolver<
    Maybe<ResolversTypes['AlgorandTxType']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandTransactionsTypeArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AlgorandTransfersResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AlgorandTransfers'] = ResolversParentTypes['AlgorandTransfers'],
> = {
  amount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandTransfersAmountArgs, never>
  >;
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandTransfersAnyArgs, 'of'>
  >;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandTransfersBlockArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandTransfersCountArgs, never>
  >;
  currency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandTransfersCurrencyArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  firstRound?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lastRound?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandTransfersMaximumArgs, 'of'>
  >;
  memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandTransfersMinimumArgs, 'of'>
  >;
  receiver?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandTransfersReceiverArgs, never>
  >;
  sender?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandTransfersSenderArgs, never>
  >;
  transaction?: Resolver<
    Maybe<ResolversTypes['TransactionHashIndex']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandTransfersTransactionArgs, never>
  >;
  transferType?: Resolver<
    Maybe<ResolversTypes['AlgorandTransferType']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandTransfersTransferTypeArgs, never>
  >;
  txSender?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandTransfersTxSenderArgs, never>
  >;
  txType?: Resolver<
    Maybe<ResolversTypes['AlgorandTxType']>,
    ParentType,
    ContextType,
    RequireFields<AlgorandTransfersTxTypeArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArgumentNameResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ArgumentName'] = ResolversParentTypes['ArgumentName'],
> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArgumentNameValueResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ArgumentNameValue'] = ResolversParentTypes['ArgumentNameValue'],
> = {
  argument?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  argumentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArgumentValueResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ArgumentValue'] = ResolversParentTypes['ArgumentValue'],
> = {
  address?: Resolver<
    Maybe<ResolversTypes['EthereumAddressInfo']>,
    ParentType,
    ContextType
  >;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BigIntScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type BinanceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Binance'] = ResolversParentTypes['Binance'],
> = {
  blocks?: Resolver<
    Maybe<Array<ResolversTypes['BinanceBlock']>>,
    ParentType,
    ContextType,
    RequireFields<BinanceBlocksArgs, never>
  >;
  coinpath?: Resolver<
    Maybe<Array<ResolversTypes['BinanceCoinpath']>>,
    ParentType,
    ContextType,
    RequireFields<BinanceCoinpathArgs, never>
  >;
  orders?: Resolver<
    Maybe<Array<ResolversTypes['BinanceOrders']>>,
    ParentType,
    ContextType,
    RequireFields<BinanceOrdersArgs, never>
  >;
  trades?: Resolver<
    Maybe<Array<ResolversTypes['BinanceTrades']>>,
    ParentType,
    ContextType,
    RequireFields<BinanceTradesArgs, never>
  >;
  transactions?: Resolver<
    Maybe<Array<ResolversTypes['BinanceTransactions']>>,
    ParentType,
    ContextType,
    RequireFields<BinanceTransactionsArgs, never>
  >;
  transfers?: Resolver<
    Maybe<Array<ResolversTypes['BinanceTransfers']>>,
    ParentType,
    ContextType,
    RequireFields<BinanceTransfersArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BinanceBlockResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BinanceBlock'] = ResolversParentTypes['BinanceBlock'],
> = {
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BinanceBlockAnyArgs, 'of'>
  >;
  blockId?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BinanceBlockBlockIdArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<BinanceBlockCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  height?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<BinanceBlockHeightArgs, never>
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BinanceBlockMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BinanceBlockMinimumArgs, 'of'>
  >;
  timestamp?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType,
    RequireFields<BinanceBlockTimestampArgs, never>
  >;
  validatorConsensusPubkey?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BinanceBlockValidatorConsensusPubkeyArgs, never>
  >;
  validatorFeeAddr?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<BinanceBlockValidatorFeeAddrArgs, never>
  >;
  validatorMoniker?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BinanceBlockValidatorMonikerArgs, never>
  >;
  validatorOperaHrAddress?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<BinanceBlockValidatorOperaHrAddressArgs, never>
  >;
  validatorOperatorAddress?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<BinanceBlockValidatorOperatorAddressArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BinanceCoinpathResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BinanceCoinpath'] = ResolversParentTypes['BinanceCoinpath'],
> = {
  amount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<BinanceCoinpathAmountArgs, never>
  >;
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BinanceCoinpathAnyArgs, 'of'>
  >;
  block?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  currency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType
  >;
  depth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BinanceCoinpathMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BinanceCoinpathMinimumArgs, 'of'>
  >;
  receiver?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType
  >;
  sender?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  transaction?: Resolver<
    Maybe<ResolversTypes['TransactionHashValue']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BinanceOrdersResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BinanceOrders'] = ResolversParentTypes['BinanceOrders'],
> = {
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BinanceOrdersAnyArgs, 'of'>
  >;
  baseAmount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<BinanceOrdersBaseAmountArgs, never>
  >;
  baseCurrency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType,
    RequireFields<BinanceOrdersBaseCurrencyArgs, never>
  >;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<BinanceOrdersBlockArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<BinanceOrdersCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BinanceOrdersMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BinanceOrdersMinimumArgs, 'of'>
  >;
  orderId?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BinanceOrdersOrderIdArgs, never>
  >;
  orderOwner?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<BinanceOrdersOrderOwnerArgs, never>
  >;
  orderSide?: Resolver<
    Maybe<ResolversTypes['BinanceOrderSide']>,
    ParentType,
    ContextType,
    RequireFields<BinanceOrdersOrderSideArgs, never>
  >;
  orderStatus?: Resolver<
    Maybe<ResolversTypes['BinanceOrderStatus']>,
    ParentType,
    ContextType,
    RequireFields<BinanceOrdersOrderStatusArgs, never>
  >;
  orderTimeInForce?: Resolver<
    Maybe<ResolversTypes['BinanceOrderTimeInForce']>,
    ParentType,
    ContextType,
    RequireFields<BinanceOrdersOrderTimeInForceArgs, never>
  >;
  orderType?: Resolver<
    Maybe<ResolversTypes['BinanceOrderType']>,
    ParentType,
    ContextType,
    RequireFields<BinanceOrdersOrderTypeArgs, never>
  >;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quoteAmount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<BinanceOrdersQuoteAmountArgs, never>
  >;
  quoteCurrency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType,
    RequireFields<BinanceOrdersQuoteCurrencyArgs, never>
  >;
  transaction?: Resolver<
    Maybe<ResolversTypes['TransactionHash']>,
    ParentType,
    ContextType,
    RequireFields<BinanceOrdersTransactionArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BinanceTradesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BinanceTrades'] = ResolversParentTypes['BinanceTrades'],
> = {
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTradesAnyArgs, 'of'>
  >;
  baseAmount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTradesBaseAmountArgs, never>
  >;
  baseCurrency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTradesBaseCurrencyArgs, never>
  >;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTradesBlockArgs, never>
  >;
  buyOrderId?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTradesBuyOrderIdArgs, never>
  >;
  buyer?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTradesBuyerArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTradesCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTradesMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTradesMinimumArgs, 'of'>
  >;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quoteAmount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTradesQuoteAmountArgs, never>
  >;
  quoteCurrency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTradesQuoteCurrencyArgs, never>
  >;
  sellOrderId?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTradesSellOrderIdArgs, never>
  >;
  seller?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTradesSellerArgs, never>
  >;
  tradeId?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTradesTradeIdArgs, never>
  >;
  transaction?: Resolver<
    Maybe<ResolversTypes['TransactionHashIndex']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTradesTransactionArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BinanceTransactionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BinanceTransactions'] = ResolversParentTypes['BinanceTransactions'],
> = {
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTransactionsAnyArgs, 'of'>
  >;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTransactionsBlockArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTransactionsCountArgs, never>
  >;
  currency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTransactionsCurrencyArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  deposit?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTransactionsDepositArgs, never>
  >;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  hash?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<BinanceTransactionsHashArgs, never>
  >;
  index?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  log?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTransactionsMaximumArgs, 'of'>
  >;
  memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTransactionsMinimumArgs, 'of'>
  >;
  proposalId?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTransactionsProposalIdArgs, never>
  >;
  transactionCode?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTransactionsTransactionCodeArgs, never>
  >;
  transactionSource?: Resolver<
    Maybe<ResolversTypes['TransactionSource']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTransactionsTransactionSourceArgs, never>
  >;
  transactionType?: Resolver<
    Maybe<ResolversTypes['BinanceTransactionType']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTransactionsTransactionTypeArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BinanceTransfersResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BinanceTransfers'] = ResolversParentTypes['BinanceTransfers'],
> = {
  amount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTransfersAmountArgs, never>
  >;
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTransfersAnyArgs, 'of'>
  >;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTransfersBlockArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTransfersCountArgs, never>
  >;
  currency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTransfersCurrencyArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTransfersMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTransfersMinimumArgs, 'of'>
  >;
  orderId?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTransfersOrderIdArgs, never>
  >;
  outputIndex?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTransfersOutputIndexArgs, never>
  >;
  receiver?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTransfersReceiverArgs, never>
  >;
  sender?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTransfersSenderArgs, never>
  >;
  tradeId?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTransfersTradeIdArgs, never>
  >;
  transaction?: Resolver<
    Maybe<ResolversTypes['TransactionHashIndex']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTransfersTransactionArgs, never>
  >;
  transferType?: Resolver<
    Maybe<ResolversTypes['BinanceTransferType']>,
    ParentType,
    ContextType,
    RequireFields<BinanceTransfersTransferTypeArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BitcoinResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Bitcoin'] = ResolversParentTypes['Bitcoin'],
> = {
  blocks?: Resolver<
    Maybe<Array<ResolversTypes['BitcoinBlock']>>,
    ParentType,
    ContextType,
    RequireFields<BitcoinBlocksArgs, never>
  >;
  coinpath?: Resolver<
    Maybe<Array<ResolversTypes['BitcoinCoinpath']>>,
    ParentType,
    ContextType,
    RequireFields<BitcoinCoinpathArgs, never>
  >;
  inputs?: Resolver<
    Maybe<Array<ResolversTypes['BitcoinTransactionInput']>>,
    ParentType,
    ContextType,
    RequireFields<BitcoinInputsArgs, never>
  >;
  outputs?: Resolver<
    Maybe<Array<ResolversTypes['BitcoinTransactionOutput']>>,
    ParentType,
    ContextType,
    RequireFields<BitcoinOutputsArgs, never>
  >;
  transactions?: Resolver<
    Maybe<Array<ResolversTypes['BitcoinTransaction']>>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionsArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BitcoinBlockResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BitcoinBlock'] = ResolversParentTypes['BitcoinBlock'],
> = {
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinBlockAnyArgs, 'of'>
  >;
  blockHash?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinBlockBlockHashArgs, never>
  >;
  blockSize?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinBlockBlockSizeArgs, never>
  >;
  blockStrippedSize?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinBlockBlockStrippedSizeArgs, never>
  >;
  blockVersion?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinBlockBlockVersionArgs, never>
  >;
  blockWeight?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinBlockBlockWeightArgs, never>
  >;
  chainwork?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinBlockCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  difficulty?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinBlockDifficultyArgs, never>
  >;
  height?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<BitcoinBlockHeightArgs, never>
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinBlockMaximumArgs, 'of'>
  >;
  medianTime?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinBlockMinimumArgs, 'of'>
  >;
  timestamp?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinBlockTimestampArgs, never>
  >;
  transactionCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinBlockTransactionCountArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BitcoinCoinpathResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BitcoinCoinpath'] = ResolversParentTypes['BitcoinCoinpath'],
> = {
  amount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinCoinpathAmountArgs, never>
  >;
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinCoinpathAnyArgs, 'of'>
  >;
  block?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  currency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType
  >;
  depth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinCoinpathMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinCoinpathMinimumArgs, 'of'>
  >;
  receiver?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType
  >;
  sender?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  transaction?: Resolver<
    Maybe<ResolversTypes['TransactionHashIndexValues']>,
    ParentType,
    ContextType
  >;
  transactions?: Resolver<
    Maybe<Array<ResolversTypes['CoinpathEntry']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BitcoinTransactionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BitcoinTransaction'] = ResolversParentTypes['BitcoinTransaction'],
> = {
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionAnyArgs, 'of'>
  >;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionBlockArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  feeValue?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionFeeValueArgs, never>
  >;
  hash?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionHashArgs, never>
  >;
  index?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionIndexArgs, never>
  >;
  inputCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionInputCountArgs, never>
  >;
  inputValue?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionInputValueArgs, never>
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionMaximumArgs, 'of'>
  >;
  minedValue?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionMinedValueArgs, never>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionMinimumArgs, 'of'>
  >;
  outputCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionOutputCountArgs, never>
  >;
  outputValue?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionOutputValueArgs, never>
  >;
  txCoinbase?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionTxCoinbaseArgs, never>
  >;
  txLocktime?: Resolver<
    Maybe<ResolversTypes['BigInt']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionTxLocktimeArgs, never>
  >;
  txSize?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionTxSizeArgs, never>
  >;
  txVersion?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionTxVersionArgs, never>
  >;
  txVsize?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionTxVsizeArgs, never>
  >;
  txWeight?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionTxWeightArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BitcoinTransactionInputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BitcoinTransactionInput'] = ResolversParentTypes['BitcoinTransactionInput'],
> = {
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionInputAnyArgs, 'of'>
  >;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionInputBlockArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionInputCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  inputAddress?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionInputInputAddressArgs, never>
  >;
  inputIndex?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionInputInputIndexArgs, never>
  >;
  inputScript?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  inputScriptType?: Resolver<
    Maybe<ResolversTypes['InputScript']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionInputInputScriptTypeArgs, never>
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionInputMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionInputMinimumArgs, 'of'>
  >;
  outputTransaction?: Resolver<
    Maybe<ResolversTypes['TransactionHashIndex']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionInputOutputTransactionArgs, never>
  >;
  transaction?: Resolver<
    Maybe<ResolversTypes['TransactionHashIndex']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionInputTransactionArgs, never>
  >;
  value?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionInputValueArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BitcoinTransactionOutputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BitcoinTransactionOutput'] = ResolversParentTypes['BitcoinTransactionOutput'],
> = {
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionOutputAnyArgs, 'of'>
  >;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionOutputBlockArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionOutputCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionOutputMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionOutputMinimumArgs, 'of'>
  >;
  outputAddress?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionOutputOutputAddressArgs, never>
  >;
  outputDirection?: Resolver<
    Maybe<ResolversTypes['BitcoinOutputDirection']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionOutputOutputDirectionArgs, never>
  >;
  outputIndex?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionOutputOutputIndexArgs, never>
  >;
  outputScript?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  outputScriptType?: Resolver<
    Maybe<ResolversTypes['OutputScript']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionOutputOutputScriptTypeArgs, never>
  >;
  reqSigs?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  transaction?: Resolver<
    Maybe<ResolversTypes['TransactionHashIndex']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionOutputTransactionArgs, never>
  >;
  value?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<BitcoinTransactionOutputValueArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Block'] = ResolversParentTypes['Block'],
> = {
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockExtendedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BlockExtended'] = ResolversParentTypes['BlockExtended'],
> = {
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BlockInfo'] = ResolversParentTypes['BlockInfo'],
> = {
  hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockchainNetworkResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BlockchainNetwork'] = ResolversParentTypes['BlockchainNetwork'],
> = {
  network?: Resolver<ResolversTypes['Network'], ParentType, ContextType>;
  protocol?: Resolver<ResolversTypes['Protocol'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CoinpathEntryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CoinpathEntry'] = ResolversParentTypes['CoinpathEntry'],
> = {
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<
    ResolversTypes['ISO8601DateTime'],
    ParentType,
    ContextType
  >;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  txValue?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfluxResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Conflux'] = ResolversParentTypes['Conflux'],
> = {
  address?: Resolver<
    Array<ResolversTypes['EthereumAddressInfoWithBalance']>,
    ParentType,
    ContextType,
    RequireFields<ConfluxAddressArgs, 'address'>
  >;
  arguments?: Resolver<
    Maybe<Array<ResolversTypes['EthereumArguments']>>,
    ParentType,
    ContextType,
    RequireFields<ConfluxArgumentsArgs, never>
  >;
  blocks?: Resolver<
    Maybe<Array<ResolversTypes['ConfluxBlocks']>>,
    ParentType,
    ContextType,
    RequireFields<ConfluxBlocksArgs, never>
  >;
  coinpath?: Resolver<
    Maybe<Array<ResolversTypes['EthereumCoinpath']>>,
    ParentType,
    ContextType,
    RequireFields<ConfluxCoinpathArgs, never>
  >;
  dexTrades?: Resolver<
    Maybe<Array<ResolversTypes['EthereumDexTrades']>>,
    ParentType,
    ContextType,
    RequireFields<ConfluxDexTradesArgs, never>
  >;
  smartContractCalls?: Resolver<
    Maybe<Array<ResolversTypes['EthereumSmartContractCalls']>>,
    ParentType,
    ContextType,
    RequireFields<ConfluxSmartContractCallsArgs, never>
  >;
  smartContractEvents?: Resolver<
    Maybe<Array<ResolversTypes['EthereumSmartContractEvent']>>,
    ParentType,
    ContextType,
    RequireFields<ConfluxSmartContractEventsArgs, never>
  >;
  transactions?: Resolver<
    Maybe<Array<ResolversTypes['ConfluxTransactions']>>,
    ParentType,
    ContextType,
    RequireFields<ConfluxTransactionsArgs, never>
  >;
  transfers?: Resolver<
    Maybe<Array<ResolversTypes['EthereumTransfers']>>,
    ParentType,
    ContextType,
    RequireFields<ConfluxTransfersArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfluxBlocksResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ConfluxBlocks'] = ResolversParentTypes['ConfluxBlocks'],
> = {
  adaptive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<ConfluxBlocksAnyArgs, 'of'>
  >;
  blame?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockPosition?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<ConfluxBlocksCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  epoch?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<ConfluxBlocksEpochArgs, never>
  >;
  hash?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<ConfluxBlocksHashArgs, never>
  >;
  height?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<ConfluxBlocksHeightArgs, never>
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<ConfluxBlocksMaximumArgs, 'of'>
  >;
  miner?: Resolver<
    Maybe<ResolversTypes['EthereumAddressInfo']>,
    ParentType,
    ContextType,
    RequireFields<ConfluxBlocksMinerArgs, never>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<ConfluxBlocksMinimumArgs, 'of'>
  >;
  nonce?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  parentHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pivot?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  powerQuality?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  refereeCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<ConfluxBlocksRefereeCountArgs, never>
  >;
  referenceBlockHash?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<ConfluxBlocksReferenceBlockHashArgs, never>
  >;
  size?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<ConfluxBlocksSizeArgs, never>
  >;
  timestamp?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType,
    RequireFields<ConfluxBlocksTimestampArgs, never>
  >;
  totalDifficulty?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<ConfluxBlocksTotalDifficultyArgs, never>
  >;
  transactionCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<ConfluxBlocksTransactionCountArgs, never>
  >;
  txHash?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<ConfluxBlocksTxHashArgs, never>
  >;
  uncleCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<ConfluxBlocksUncleCountArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfluxTransactionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ConfluxTransactions'] = ResolversParentTypes['ConfluxTransactions'],
> = {
  amount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<ConfluxTransactionsAmountArgs, never>
  >;
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<ConfluxTransactionsAnyArgs, 'of'>
  >;
  block?: Resolver<
    Maybe<ResolversTypes['BlockInfo']>,
    ParentType,
    ContextType,
    RequireFields<ConfluxTransactionsBlockArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<ConfluxTransactionsCountArgs, never>
  >;
  creates?: Resolver<
    Maybe<ResolversTypes['EthereumAddressInfo']>,
    ParentType,
    ContextType,
    RequireFields<ConfluxTransactionsCreatesArgs, never>
  >;
  currency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gas?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<ConfluxTransactionsGasArgs, never>
  >;
  gasCurrency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType,
    RequireFields<ConfluxTransactionsGasCurrencyArgs, never>
  >;
  gasPrice?: Resolver<
    ResolversTypes['Float'],
    ParentType,
    ContextType,
    RequireFields<ConfluxTransactionsGasPriceArgs, never>
  >;
  gasValue?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<ConfluxTransactionsGasValueArgs, never>
  >;
  hash?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<ConfluxTransactionsHashArgs, never>
  >;
  index?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<ConfluxTransactionsIndexArgs, never>
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<ConfluxTransactionsMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<ConfluxTransactionsMinimumArgs, 'of'>
  >;
  nonce?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sender?: Resolver<
    Maybe<ResolversTypes['EthereumAddressInfo']>,
    ParentType,
    ContextType,
    RequireFields<ConfluxTransactionsSenderArgs, never>
  >;
  success?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<ConfluxTransactionsSuccessArgs, never>
  >;
  to?: Resolver<
    Maybe<ResolversTypes['EthereumAddressInfo']>,
    ParentType,
    ContextType,
    RequireFields<ConfluxTransactionsToArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CovidCountryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CovidCountry'] = ResolversParentTypes['CovidCountry'],
> = {
  areaKm2?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  continent?: Resolver<
    Maybe<ResolversTypes['Continent']>,
    ParentType,
    ContextType
  >;
  gdp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  iso2?: Resolver<
    Maybe<ResolversTypes['CountryCode']>,
    ParentType,
    ContextType
  >;
  iso3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isoNumeric?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  populationPerKm2?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  populationTotal?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CovidFactResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CovidFact'] = ResolversParentTypes['CovidFact'],
> = {
  confirmed?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<CovidFactConfirmedArgs, never>
  >;
  country?: Resolver<
    Maybe<ResolversTypes['CovidCountry']>,
    ParentType,
    ContextType,
    RequireFields<CovidFactCountryArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  deaths?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<CovidFactDeathsArgs, never>
  >;
  location?: Resolver<
    Maybe<ResolversTypes['CovidLocation']>,
    ParentType,
    ContextType
  >;
  recovered?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<CovidFactRecoveredArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CovidHistoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CovidHistory'] = ResolversParentTypes['CovidHistory'],
> = {
  facts?: Resolver<
    Maybe<Array<ResolversTypes['CovidFact']>>,
    ParentType,
    ContextType,
    RequireFields<CovidHistoryFactsArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CovidLocationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CovidLocation'] = ResolversParentTypes['CovidLocation'],
> = {
  adminCenter?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  fipsCode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  province?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrencyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Currency'] = ResolversParentTypes['Currency'],
> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  decimals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokenId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tokenType?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Date'] = ResolversParentTypes['Date'],
> = {
  date?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<DateDateArgs, never>
  >;
  dayOfMonth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dayOfWeek?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  month?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  startOfInterval?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<DateStartOfIntervalArgs, 'unit'>
  >;
  year?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DateTimeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DateTime'] = ResolversParentTypes['DateTime'],
> = {
  dayOfMonth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dayOfWeek?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hour?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  iso8601?: Resolver<
    ResolversTypes['ISO8601DateTime'],
    ParentType,
    ContextType
  >;
  minute?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  month?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  second?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  time?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<DateTimeTimeArgs, never>
  >;
  unixtime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  year?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Entity'] = ResolversParentTypes['Entity'],
> = {
  id?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<EntityIdArgs, never>
  >;
  num?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  realmId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  shardId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EosResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Eos'] = ResolversParentTypes['Eos'],
> = {
  address?: Resolver<
    Array<ResolversTypes['EosAddressInfo']>,
    ParentType,
    ContextType,
    RequireFields<EosAddressArgs, 'address'>
  >;
  blocks?: Resolver<
    Maybe<Array<ResolversTypes['EosBlocks']>>,
    ParentType,
    ContextType,
    RequireFields<EosBlocksArgs, never>
  >;
  coinpath?: Resolver<
    Maybe<Array<ResolversTypes['EosCoinpath']>>,
    ParentType,
    ContextType,
    RequireFields<EosCoinpathArgs, never>
  >;
  smartContractCalls?: Resolver<
    Maybe<Array<ResolversTypes['EosSmartContractCalls']>>,
    ParentType,
    ContextType,
    RequireFields<EosSmartContractCallsArgs, never>
  >;
  transactions?: Resolver<
    Maybe<Array<ResolversTypes['EosTransactions']>>,
    ParentType,
    ContextType,
    RequireFields<EosTransactionsArgs, never>
  >;
  transfers?: Resolver<
    Maybe<Array<ResolversTypes['EosTransfers']>>,
    ParentType,
    ContextType,
    RequireFields<EosTransfersArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EosAddressInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EosAddressInfo'] = ResolversParentTypes['EosAddressInfo'],
> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  annotation?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  smartContract?: Resolver<
    Maybe<ResolversTypes['EosSmartContractInfo']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EosBlocksResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EosBlocks'] = ResolversParentTypes['EosBlocks'],
> = {
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EosBlocksAnyArgs, 'of'>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<EosBlocksCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  hash?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<EosBlocksHashArgs, never>
  >;
  height?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<EosBlocksHeightArgs, never>
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EosBlocksMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EosBlocksMinimumArgs, 'of'>
  >;
  producer?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<EosBlocksProducerArgs, never>
  >;
  timestamp?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType,
    RequireFields<EosBlocksTimestampArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EosCoinpathResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EosCoinpath'] = ResolversParentTypes['EosCoinpath'],
> = {
  amount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<EosCoinpathAmountArgs, never>
  >;
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EosCoinpathAnyArgs, 'of'>
  >;
  block?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  currency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType
  >;
  depth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EosCoinpathMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EosCoinpathMinimumArgs, 'of'>
  >;
  receiver?: Resolver<
    Maybe<ResolversTypes['EosAddressInfo']>,
    ParentType,
    ContextType
  >;
  sender?: Resolver<
    Maybe<ResolversTypes['EosAddressInfo']>,
    ParentType,
    ContextType
  >;
  transaction?: Resolver<
    Maybe<ResolversTypes['TransactionHashValue']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EosSmartContractResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EosSmartContract'] = ResolversParentTypes['EosSmartContract'],
> = {
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  contractType?: Resolver<
    Maybe<ResolversTypes['SmartContractType']>,
    ParentType,
    ContextType
  >;
  currency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType
  >;
  protocolType?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EosSmartContractCallsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EosSmartContractCalls'] = ResolversParentTypes['EosSmartContractCalls'],
> = {
  actors?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EosSmartContractCallsAnyArgs, 'of'>
  >;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<EosSmartContractCallsBlockArgs, never>
  >;
  callDepth?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  console?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<EosSmartContractCallsCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  errorCode?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<EosSmartContractCallsErrorCodeArgs, never>
  >;
  external?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<EosSmartContractCallsExternalArgs, never>
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EosSmartContractCallsMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EosSmartContractCallsMinimumArgs, 'of'>
  >;
  permissions?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  receivers?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  scheduled?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<EosSmartContractCallsScheduledArgs, never>
  >;
  smartContract?: Resolver<
    Maybe<ResolversTypes['EosSmartContract']>,
    ParentType,
    ContextType,
    RequireFields<EosSmartContractCallsSmartContractArgs, never>
  >;
  smartContractMethod?: Resolver<
    Maybe<ResolversTypes['Method']>,
    ParentType,
    ContextType,
    RequireFields<EosSmartContractCallsSmartContractMethodArgs, never>
  >;
  success?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<EosSmartContractCallsSuccessArgs, never>
  >;
  txFrom?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<EosSmartContractCallsTxFromArgs, never>
  >;
  txHash?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EosSmartContractCallsTxHashArgs, never>
  >;
  txTo?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<EosSmartContractCallsTxToArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EosSmartContractInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EosSmartContractInfo'] = ResolversParentTypes['EosSmartContractInfo'],
> = {
  contractType?: Resolver<
    Maybe<ResolversTypes['SmartContractType']>,
    ParentType,
    ContextType
  >;
  currency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType
  >;
  protocolType?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EosTransactionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EosTransactions'] = ResolversParentTypes['EosTransactions'],
> = {
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EosTransactionsAnyArgs, 'of'>
  >;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<EosTransactionsBlockArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<EosTransactionsCountArgs, never>
  >;
  cpuUsageUs?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<EosTransactionsCpuUsageUsArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  hash?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<EosTransactionsHashArgs, never>
  >;
  index?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<EosTransactionsIndexArgs, never>
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EosTransactionsMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EosTransactionsMinimumArgs, 'of'>
  >;
  netUsageWords?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<EosTransactionsNetUsageWordsArgs, never>
  >;
  scheduled?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<EosTransactionsScheduledArgs, never>
  >;
  success?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<EosTransactionsSuccessArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EosTransfersResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EosTransfers'] = ResolversParentTypes['EosTransfers'],
> = {
  actors?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  amount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<EosTransfersAmountArgs, never>
  >;
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EosTransfersAnyArgs, 'of'>
  >;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<EosTransfersBlockArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<EosTransfersCountArgs, never>
  >;
  currency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType,
    RequireFields<EosTransfersCurrencyArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  entityId?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EosTransfersEntityIdArgs, never>
  >;
  external?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<EosTransfersExternalArgs, never>
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EosTransfersMaximumArgs, 'of'>
  >;
  memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EosTransfersMinimumArgs, 'of'>
  >;
  receiver?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<EosTransfersReceiverArgs, never>
  >;
  sender?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<EosTransfersSenderArgs, never>
  >;
  success?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<EosTransfersSuccessArgs, never>
  >;
  txFrom?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<EosTransfersTxFromArgs, never>
  >;
  txHash?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EosTransfersTxHashArgs, never>
  >;
  txTo?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<EosTransfersTxToArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EthereumResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Ethereum'] = ResolversParentTypes['Ethereum'],
> = {
  address?: Resolver<
    Array<ResolversTypes['EthereumAddressInfoWithBalance']>,
    ParentType,
    ContextType,
    RequireFields<EthereumAddressArgs, 'address'>
  >;
  arguments?: Resolver<
    Maybe<Array<ResolversTypes['EthereumArguments']>>,
    ParentType,
    ContextType,
    RequireFields<EthereumArgumentsArgs, never>
  >;
  blocks?: Resolver<
    Maybe<Array<ResolversTypes['EthereumBlocks']>>,
    ParentType,
    ContextType,
    RequireFields<EthereumBlocksArgs, never>
  >;
  coinpath?: Resolver<
    Maybe<Array<ResolversTypes['EthereumCoinpath']>>,
    ParentType,
    ContextType,
    RequireFields<EthereumCoinpathArgs, never>
  >;
  dexTrades?: Resolver<
    Maybe<Array<ResolversTypes['EthereumDexTrades']>>,
    ParentType,
    ContextType,
    RequireFields<EthereumDexTradesArgs, never>
  >;
  smartContractCalls?: Resolver<
    Maybe<Array<ResolversTypes['EthereumSmartContractCalls']>>,
    ParentType,
    ContextType,
    RequireFields<EthereumSmartContractCallsArgs, never>
  >;
  smartContractEvents?: Resolver<
    Maybe<Array<ResolversTypes['EthereumSmartContractEvent']>>,
    ParentType,
    ContextType,
    RequireFields<EthereumSmartContractEventsArgs, never>
  >;
  transactions?: Resolver<
    Maybe<Array<ResolversTypes['EthereumTransactions']>>,
    ParentType,
    ContextType,
    RequireFields<EthereumTransactionsArgs, never>
  >;
  transfers?: Resolver<
    Maybe<Array<ResolversTypes['EthereumTransfers']>>,
    ParentType,
    ContextType,
    RequireFields<EthereumTransfersArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Ethereum2Resolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Ethereum2'] = ResolversParentTypes['Ethereum2'],
> = {
  attestations?: Resolver<
    Maybe<Array<ResolversTypes['Ethereum2Attestation']>>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2AttestationsArgs, never>
  >;
  attesterSlashings?: Resolver<
    Maybe<Array<ResolversTypes['Ethereum2AttesterSlashing']>>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2AttesterSlashingsArgs, never>
  >;
  blocks?: Resolver<
    Maybe<Array<ResolversTypes['Ethereum2Blocks']>>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2BlocksArgs, never>
  >;
  deposits?: Resolver<
    Maybe<Array<ResolversTypes['Ethereum2Deposit']>>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2DepositsArgs, never>
  >;
  proposerSlashings?: Resolver<
    Maybe<Array<ResolversTypes['Ethereum2ProposerSlashing']>>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2ProposerSlashingsArgs, never>
  >;
  voluntaryExits?: Resolver<
    Maybe<Array<ResolversTypes['Ethereum2VoluntaryExit']>>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2VoluntaryExitsArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Ethereum2AttestationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Ethereum2Attestation'] = ResolversParentTypes['Ethereum2Attestation'],
> = {
  aggregationBits?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2AttestationAnyArgs, 'of'>
  >;
  attestation?: Resolver<
    ResolversTypes['Ethereum2AttestationInfo'],
    ParentType,
    ContextType
  >;
  attestationIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2AttestationBlockArgs, never>
  >;
  blockRoot?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<Ethereum2AttestationBlockRootArgs, never>
  >;
  committeeIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  count?: Resolver<
    Maybe<ResolversTypes['BigInt']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2AttestationCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  eth1?: Resolver<ResolversTypes['Ethereum2Eth1Info'], ParentType, ContextType>;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2AttestationMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2AttestationMinimumArgs, 'of'>
  >;
  parentRoot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proposer?: Resolver<
    Maybe<ResolversTypes['Ethereum2ValidatorInfo']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2AttestationProposerArgs, never>
  >;
  stateRoot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  validator?: Resolver<
    ResolversTypes['Ethereum2ValidatorInfo'],
    ParentType,
    ContextType
  >;
  validatorInCommitteeIndex?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Ethereum2AttestationFieldInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Ethereum2AttestationFieldInfo'] = ResolversParentTypes['Ethereum2AttestationFieldInfo'],
> = {
  epoch?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  root?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Ethereum2AttestationInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Ethereum2AttestationInfo'] = ResolversParentTypes['Ethereum2AttestationInfo'],
> = {
  beaconBlockRoot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  epoch?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  signature?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slot?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  source?: Resolver<
    ResolversTypes['Ethereum2AttestationFieldInfo'],
    ParentType,
    ContextType
  >;
  target?: Resolver<
    ResolversTypes['Ethereum2AttestationFieldInfo'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Ethereum2AttesterSlashingResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Ethereum2AttesterSlashing'] = ResolversParentTypes['Ethereum2AttesterSlashing'],
> = {
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2AttesterSlashingAnyArgs, 'of'>
  >;
  attestation?: Resolver<
    ResolversTypes['Ethereum2AttestationInfo'],
    ParentType,
    ContextType
  >;
  attestationOrder?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  attesterSlashingIndex?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType
  >;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2AttesterSlashingBlockArgs, never>
  >;
  blockRoot?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<Ethereum2AttesterSlashingBlockRootArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2AttesterSlashingCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  eth1?: Resolver<ResolversTypes['Ethereum2Eth1Info'], ParentType, ContextType>;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2AttesterSlashingMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2AttesterSlashingMinimumArgs, 'of'>
  >;
  parentRoot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proposer?: Resolver<
    Maybe<ResolversTypes['Ethereum2ValidatorInfo']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2AttesterSlashingProposerArgs, never>
  >;
  stateRoot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  validator?: Resolver<
    ResolversTypes['Ethereum2ValidatorInfo'],
    ParentType,
    ContextType
  >;
  validatorInAttestationIndex?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Ethereum2BlocksResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Ethereum2Blocks'] = ResolversParentTypes['Ethereum2Blocks'],
> = {
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2BlocksAnyArgs, 'of'>
  >;
  attestationsCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2BlocksAttestationsCountArgs, never>
  >;
  attesterSlashingsCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2BlocksAttesterSlashingsCountArgs, never>
  >;
  blockRoot?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<Ethereum2BlocksBlockRootArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2BlocksCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  depositsCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2BlocksDepositsCountArgs, never>
  >;
  eth1?: Resolver<ResolversTypes['Ethereum2Eth1Info'], ParentType, ContextType>;
  graffiti?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  height?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<Ethereum2BlocksHeightArgs, never>
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2BlocksMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2BlocksMinimumArgs, 'of'>
  >;
  parentRoot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proposer?: Resolver<
    Maybe<ResolversTypes['Ethereum2ValidatorInfo']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2BlocksProposerArgs, never>
  >;
  proposerSlashingsCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2BlocksProposerSlashingsCountArgs, never>
  >;
  randaoReveal?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  signature?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stateRoot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2BlocksTimestampArgs, never>
  >;
  voluntaryExitsCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2BlocksVoluntaryExitsCountArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Ethereum2DepositResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Ethereum2Deposit'] = ResolversParentTypes['Ethereum2Deposit'],
> = {
  amount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2DepositAmountArgs, never>
  >;
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2DepositAnyArgs, 'of'>
  >;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2DepositBlockArgs, never>
  >;
  blockRoot?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<Ethereum2DepositBlockRootArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2DepositCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  depositIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  eth1?: Resolver<ResolversTypes['Ethereum2Eth1Info'], ParentType, ContextType>;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2DepositMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2DepositMinimumArgs, 'of'>
  >;
  parentRoot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proof?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proposer?: Resolver<
    Maybe<ResolversTypes['Ethereum2ValidatorInfo']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2DepositProposerArgs, never>
  >;
  signature?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stateRoot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  validator?: Resolver<
    ResolversTypes['Ethereum2ValidatorInfo'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Ethereum2Eth1InfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Ethereum2Eth1Info'] = ResolversParentTypes['Ethereum2Eth1Info'],
> = {
  blockHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  depositCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  depositRoot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Ethereum2ProposerSlashingResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Ethereum2ProposerSlashing'] = ResolversParentTypes['Ethereum2ProposerSlashing'],
> = {
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2ProposerSlashingAnyArgs, 'of'>
  >;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2ProposerSlashingBlockArgs, never>
  >;
  blockRoot?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<Ethereum2ProposerSlashingBlockRootArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2ProposerSlashingCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  eth1?: Resolver<ResolversTypes['Ethereum2Eth1Info'], ParentType, ContextType>;
  headerOrder?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2ProposerSlashingMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2ProposerSlashingMinimumArgs, 'of'>
  >;
  parentRoot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proposer?: Resolver<
    Maybe<ResolversTypes['Ethereum2ValidatorInfo']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2ProposerSlashingProposerArgs, never>
  >;
  proposerSlashingIndex?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType
  >;
  slashing?: Resolver<
    ResolversTypes['Ethereum2SlashingInfo'],
    ParentType,
    ContextType
  >;
  stateRoot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Ethereum2SlashingInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Ethereum2SlashingInfo'] = ResolversParentTypes['Ethereum2SlashingInfo'],
> = {
  bodyRoot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  epoch?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  parentRoot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proposer?: Resolver<
    Maybe<ResolversTypes['Ethereum2ValidatorInfo']>,
    ParentType,
    ContextType
  >;
  signature?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slot?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stateRoot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Ethereum2ValidatorInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Ethereum2ValidatorInfo'] = ResolversParentTypes['Ethereum2ValidatorInfo'],
> = {
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pubkey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  withdrawalCredentials?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Ethereum2VoluntaryExitResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Ethereum2VoluntaryExit'] = ResolversParentTypes['Ethereum2VoluntaryExit'],
> = {
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2VoluntaryExitAnyArgs, 'of'>
  >;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2VoluntaryExitBlockArgs, never>
  >;
  blockRoot?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<Ethereum2VoluntaryExitBlockRootArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2VoluntaryExitCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  eth1?: Resolver<ResolversTypes['Ethereum2Eth1Info'], ParentType, ContextType>;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2VoluntaryExitMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2VoluntaryExitMinimumArgs, 'of'>
  >;
  parentRoot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proposer?: Resolver<
    Maybe<ResolversTypes['Ethereum2ValidatorInfo']>,
    ParentType,
    ContextType,
    RequireFields<Ethereum2VoluntaryExitProposerArgs, never>
  >;
  signature?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stateRoot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  validator?: Resolver<
    ResolversTypes['Ethereum2ValidatorInfo'],
    ParentType,
    ContextType
  >;
  voluntaryExitEpoch?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  voluntaryExitIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EthereumAddressInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EthereumAddressInfo'] = ResolversParentTypes['EthereumAddressInfo'],
> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  annotation?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  smartContract?: Resolver<
    Maybe<ResolversTypes['EthereumSmartContractInfo']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EthereumAddressInfoWithBalanceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EthereumAddressInfoWithBalance'] = ResolversParentTypes['EthereumAddressInfoWithBalance'],
> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  annotation?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  balances?: Resolver<
    Maybe<Array<ResolversTypes['EthereumBalance']>>,
    ParentType,
    ContextType,
    RequireFields<EthereumAddressInfoWithBalanceBalancesArgs, never>
  >;
  smartContract?: Resolver<
    Maybe<ResolversTypes['EthereumSmartContractInfoWithAttributes']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EthereumArgumentsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EthereumArguments'] = ResolversParentTypes['EthereumArguments'],
> = {
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EthereumArgumentsAnyArgs, 'of'>
  >;
  argument?: Resolver<
    Maybe<ResolversTypes['ArgumentName']>,
    ParentType,
    ContextType,
    RequireFields<EthereumArgumentsArgumentArgs, never>
  >;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<EthereumArgumentsBlockArgs, never>
  >;
  callDepth?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  caller?: Resolver<
    Maybe<ResolversTypes['EthereumAddressInfo']>,
    ParentType,
    ContextType,
    RequireFields<EthereumArgumentsCallerArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<EthereumArgumentsCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  external?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<EthereumArgumentsExternalArgs, never>
  >;
  index?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EthereumArgumentsMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EthereumArgumentsMinimumArgs, 'of'>
  >;
  number?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<EthereumArgumentsNumberArgs, never>
  >;
  reference?: Resolver<
    Maybe<ResolversTypes['EthereumAddressInfo']>,
    ParentType,
    ContextType,
    RequireFields<EthereumArgumentsReferenceArgs, never>
  >;
  smartContract?: Resolver<
    Maybe<ResolversTypes['EthereumSmartContract']>,
    ParentType,
    ContextType,
    RequireFields<EthereumArgumentsSmartContractArgs, never>
  >;
  smartContractSignature?: Resolver<
    Maybe<ResolversTypes['Signature']>,
    ParentType,
    ContextType,
    RequireFields<EthereumArgumentsSmartContractSignatureArgs, never>
  >;
  success?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<EthereumArgumentsSuccessArgs, never>
  >;
  transaction?: Resolver<
    Maybe<ResolversTypes['EthereumTransactionInfo']>,
    ParentType,
    ContextType,
    RequireFields<EthereumArgumentsTransactionArgs, never>
  >;
  value?: Resolver<
    Maybe<ResolversTypes['ArgumentValue']>,
    ParentType,
    ContextType,
    RequireFields<EthereumArgumentsValueArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EthereumBalanceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EthereumBalance'] = ResolversParentTypes['EthereumBalance'],
> = {
  currency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType
  >;
  history?: Resolver<
    Maybe<Array<ResolversTypes['EthereumBalanceChange']>>,
    ParentType,
    ContextType,
    RequireFields<EthereumBalanceHistoryArgs, never>
  >;
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EthereumBalanceChangeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EthereumBalanceChange'] = ResolversParentTypes['EthereumBalanceChange'],
> = {
  block?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<
    Maybe<ResolversTypes['ISO8601DateTime']>,
    ParentType,
    ContextType
  >;
  transferAmount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EthereumBlocksResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EthereumBlocks'] = ResolversParentTypes['EthereumBlocks'],
> = {
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EthereumBlocksAnyArgs, 'of'>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<EthereumBlocksCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  difficulty?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<EthereumBlocksDifficultyArgs, never>
  >;
  hash?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<EthereumBlocksHashArgs, never>
  >;
  height?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<EthereumBlocksHeightArgs, never>
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EthereumBlocksMaximumArgs, 'of'>
  >;
  miner?: Resolver<
    Maybe<ResolversTypes['EthereumAddressInfo']>,
    ParentType,
    ContextType,
    RequireFields<EthereumBlocksMinerArgs, never>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EthereumBlocksMinimumArgs, 'of'>
  >;
  nonce?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  parentHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reward?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<EthereumBlocksRewardArgs, never>
  >;
  rewardCurrency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType
  >;
  size?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<EthereumBlocksSizeArgs, never>
  >;
  timestamp?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType,
    RequireFields<EthereumBlocksTimestampArgs, never>
  >;
  totalDifficulty?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<EthereumBlocksTotalDifficultyArgs, never>
  >;
  transactionCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<EthereumBlocksTransactionCountArgs, never>
  >;
  uncleCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<EthereumBlocksUncleCountArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EthereumCoinpathResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EthereumCoinpath'] = ResolversParentTypes['EthereumCoinpath'],
> = {
  amount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<EthereumCoinpathAmountArgs, never>
  >;
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EthereumCoinpathAnyArgs, 'of'>
  >;
  block?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  currency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType
  >;
  depth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EthereumCoinpathMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EthereumCoinpathMinimumArgs, 'of'>
  >;
  receiver?: Resolver<
    Maybe<ResolversTypes['EthereumAddressInfo']>,
    ParentType,
    ContextType
  >;
  sender?: Resolver<
    Maybe<ResolversTypes['EthereumAddressInfo']>,
    ParentType,
    ContextType
  >;
  transaction?: Resolver<
    Maybe<ResolversTypes['TransactionHashValue']>,
    ParentType,
    ContextType
  >;
  transactions?: Resolver<
    Maybe<Array<ResolversTypes['CoinpathEntry']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EthereumDexResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EthereumDex'] = ResolversParentTypes['EthereumDex'],
> = {
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  fullName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fullNameWithId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EthereumDexTradesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EthereumDexTrades'] = ResolversParentTypes['EthereumDexTrades'],
> = {
  address?: Resolver<
    Maybe<ResolversTypes['EthereumAddressInfo']>,
    ParentType,
    ContextType,
    RequireFields<EthereumDexTradesAddressArgs, never>
  >;
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EthereumDexTradesAnyArgs, 'of'>
  >;
  baseAmount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<EthereumDexTradesBaseAmountArgs, never>
  >;
  baseCurrency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType,
    RequireFields<EthereumDexTradesBaseCurrencyArgs, never>
  >;
  block?: Resolver<
    Maybe<ResolversTypes['BlockExtended']>,
    ParentType,
    ContextType,
    RequireFields<EthereumDexTradesBlockArgs, never>
  >;
  buyAmount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<EthereumDexTradesBuyAmountArgs, never>
  >;
  buyCurrency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType,
    RequireFields<EthereumDexTradesBuyCurrencyArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<EthereumDexTradesCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  exchange?: Resolver<
    Maybe<ResolversTypes['EthereumDex']>,
    ParentType,
    ContextType,
    RequireFields<EthereumDexTradesExchangeArgs, never>
  >;
  gas?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<EthereumDexTradesGasArgs, never>
  >;
  gasPrice?: Resolver<
    ResolversTypes['Float'],
    ParentType,
    ContextType,
    RequireFields<EthereumDexTradesGasPriceArgs, never>
  >;
  gasValue?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<EthereumDexTradesGasValueArgs, never>
  >;
  maker?: Resolver<
    Maybe<ResolversTypes['EthereumAddressInfo']>,
    ParentType,
    ContextType,
    RequireFields<EthereumDexTradesMakerArgs, never>
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EthereumDexTradesMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EthereumDexTradesMinimumArgs, 'of'>
  >;
  price?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<EthereumDexTradesPriceArgs, never>
  >;
  protocol?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EthereumDexTradesProtocolArgs, never>
  >;
  quoteAmount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<EthereumDexTradesQuoteAmountArgs, never>
  >;
  quoteCurrency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType,
    RequireFields<EthereumDexTradesQuoteCurrencyArgs, never>
  >;
  quotePrice?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<EthereumDexTradesQuotePriceArgs, never>
  >;
  sellAmount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<EthereumDexTradesSellAmountArgs, never>
  >;
  sellCurrency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType,
    RequireFields<EthereumDexTradesSellCurrencyArgs, never>
  >;
  side?: Resolver<Maybe<ResolversTypes['TradeSide']>, ParentType, ContextType>;
  smartContract?: Resolver<
    Maybe<ResolversTypes['EthereumSmartContract']>,
    ParentType,
    ContextType,
    RequireFields<EthereumDexTradesSmartContractArgs, never>
  >;
  taker?: Resolver<
    Maybe<ResolversTypes['EthereumAddressInfo']>,
    ParentType,
    ContextType,
    RequireFields<EthereumDexTradesTakerArgs, never>
  >;
  timeInterval?: Resolver<
    Maybe<ResolversTypes['TimeInterval']>,
    ParentType,
    ContextType
  >;
  tradeAmount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<EthereumDexTradesTradeAmountArgs, 'in'>
  >;
  tradeIndex?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EthereumDexTradesTradeIndexArgs, never>
  >;
  transaction?: Resolver<
    Maybe<ResolversTypes['EthereumTransactionInfoExtended']>,
    ParentType,
    ContextType,
    RequireFields<EthereumDexTradesTransactionArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EthereumSmartContractResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EthereumSmartContract'] = ResolversParentTypes['EthereumSmartContract'],
> = {
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  contractType?: Resolver<
    Maybe<ResolversTypes['SmartContractType']>,
    ParentType,
    ContextType
  >;
  currency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType
  >;
  protocolType?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EthereumSmartContractCallsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EthereumSmartContractCalls'] = ResolversParentTypes['EthereumSmartContractCalls'],
> = {
  amount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<EthereumSmartContractCallsAmountArgs, never>
  >;
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EthereumSmartContractCallsAnyArgs, 'of'>
  >;
  arguments?: Resolver<
    Maybe<Array<ResolversTypes['ArgumentNameValue']>>,
    ParentType,
    ContextType
  >;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<EthereumSmartContractCallsBlockArgs, never>
  >;
  callDepth?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  caller?: Resolver<
    Maybe<ResolversTypes['EthereumAddressInfo']>,
    ParentType,
    ContextType,
    RequireFields<EthereumSmartContractCallsCallerArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<EthereumSmartContractCallsCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  external?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<EthereumSmartContractCallsExternalArgs, never>
  >;
  gasValue?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<EthereumSmartContractCallsGasValueArgs, never>
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EthereumSmartContractCallsMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EthereumSmartContractCallsMinimumArgs, 'of'>
  >;
  smartContract?: Resolver<
    Maybe<ResolversTypes['EthereumSmartContract']>,
    ParentType,
    ContextType,
    RequireFields<EthereumSmartContractCallsSmartContractArgs, never>
  >;
  smartContractMethod?: Resolver<
    Maybe<ResolversTypes['Method']>,
    ParentType,
    ContextType,
    RequireFields<EthereumSmartContractCallsSmartContractMethodArgs, never>
  >;
  success?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<EthereumSmartContractCallsSuccessArgs, never>
  >;
  transaction?: Resolver<
    Maybe<ResolversTypes['EthereumTransactionInfo']>,
    ParentType,
    ContextType,
    RequireFields<EthereumSmartContractCallsTransactionArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EthereumSmartContractEventResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EthereumSmartContractEvent'] = ResolversParentTypes['EthereumSmartContractEvent'],
> = {
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EthereumSmartContractEventAnyArgs, 'of'>
  >;
  arguments?: Resolver<
    Maybe<Array<ResolversTypes['ArgumentNameValue']>>,
    ParentType,
    ContextType
  >;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<EthereumSmartContractEventBlockArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<EthereumSmartContractEventCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  eventIndex?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EthereumSmartContractEventMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EthereumSmartContractEventMinimumArgs, 'of'>
  >;
  smartContract?: Resolver<
    Maybe<ResolversTypes['EthereumSmartContract']>,
    ParentType,
    ContextType,
    RequireFields<EthereumSmartContractEventSmartContractArgs, never>
  >;
  smartContractEvent?: Resolver<
    Maybe<ResolversTypes['Event']>,
    ParentType,
    ContextType,
    RequireFields<EthereumSmartContractEventSmartContractEventArgs, never>
  >;
  transaction?: Resolver<
    Maybe<ResolversTypes['EthereumTransactionInfo']>,
    ParentType,
    ContextType,
    RequireFields<EthereumSmartContractEventTransactionArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EthereumSmartContractInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EthereumSmartContractInfo'] = ResolversParentTypes['EthereumSmartContractInfo'],
> = {
  contractType?: Resolver<
    Maybe<ResolversTypes['SmartContractType']>,
    ParentType,
    ContextType
  >;
  currency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType
  >;
  protocolType?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EthereumSmartContractInfoWithAttributesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EthereumSmartContractInfoWithAttributes'] = ResolversParentTypes['EthereumSmartContractInfoWithAttributes'],
> = {
  attributes?: Resolver<
    Maybe<Array<ResolversTypes['SmartContractReadonlyAttribute']>>,
    ParentType,
    ContextType
  >;
  contractType?: Resolver<
    Maybe<ResolversTypes['SmartContractType']>,
    ParentType,
    ContextType
  >;
  currency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType
  >;
  protocolType?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EthereumTransactionInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EthereumTransactionInfo'] = ResolversParentTypes['EthereumTransactionInfo'],
> = {
  gas?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gasValue?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  txFrom?: Resolver<
    ResolversTypes['EthereumAddressInfo'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EthereumTransactionInfoExtendedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EthereumTransactionInfoExtended'] = ResolversParentTypes['EthereumTransactionInfoExtended'],
> = {
  gas?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gasValue?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  index?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nonce?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  to?: Resolver<
    Maybe<ResolversTypes['EthereumAddressInfo']>,
    ParentType,
    ContextType
  >;
  txFrom?: Resolver<
    ResolversTypes['EthereumAddressInfo'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EthereumTransactionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EthereumTransactions'] = ResolversParentTypes['EthereumTransactions'],
> = {
  amount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<EthereumTransactionsAmountArgs, never>
  >;
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EthereumTransactionsAnyArgs, 'of'>
  >;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<EthereumTransactionsBlockArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<EthereumTransactionsCountArgs, never>
  >;
  creates?: Resolver<
    Maybe<ResolversTypes['EthereumAddressInfo']>,
    ParentType,
    ContextType,
    RequireFields<EthereumTransactionsCreatesArgs, never>
  >;
  currency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gas?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<EthereumTransactionsGasArgs, never>
  >;
  gasCurrency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType,
    RequireFields<EthereumTransactionsGasCurrencyArgs, never>
  >;
  gasPrice?: Resolver<
    ResolversTypes['Float'],
    ParentType,
    ContextType,
    RequireFields<EthereumTransactionsGasPriceArgs, never>
  >;
  gasValue?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<EthereumTransactionsGasValueArgs, never>
  >;
  hash?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<EthereumTransactionsHashArgs, never>
  >;
  index?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<EthereumTransactionsIndexArgs, never>
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EthereumTransactionsMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EthereumTransactionsMinimumArgs, 'of'>
  >;
  nonce?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sender?: Resolver<
    Maybe<ResolversTypes['EthereumAddressInfo']>,
    ParentType,
    ContextType,
    RequireFields<EthereumTransactionsSenderArgs, never>
  >;
  success?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<EthereumTransactionsSuccessArgs, never>
  >;
  to?: Resolver<
    Maybe<ResolversTypes['EthereumAddressInfo']>,
    ParentType,
    ContextType,
    RequireFields<EthereumTransactionsToArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EthereumTransfersResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EthereumTransfers'] = ResolversParentTypes['EthereumTransfers'],
> = {
  amount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<EthereumTransfersAmountArgs, never>
  >;
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EthereumTransfersAnyArgs, 'of'>
  >;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<EthereumTransfersBlockArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<EthereumTransfersCountArgs, never>
  >;
  currency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType,
    RequireFields<EthereumTransfersCurrencyArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  entityId?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EthereumTransfersEntityIdArgs, never>
  >;
  external?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<EthereumTransfersExternalArgs, never>
  >;
  gasValue?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<EthereumTransfersGasValueArgs, never>
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EthereumTransfersMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<EthereumTransfersMinimumArgs, 'of'>
  >;
  receiver?: Resolver<
    Maybe<ResolversTypes['EthereumAddressInfo']>,
    ParentType,
    ContextType,
    RequireFields<EthereumTransfersReceiverArgs, never>
  >;
  sender?: Resolver<
    Maybe<ResolversTypes['EthereumAddressInfo']>,
    ParentType,
    ContextType,
    RequireFields<EthereumTransfersSenderArgs, never>
  >;
  transaction?: Resolver<
    Maybe<ResolversTypes['EthereumTransactionInfo']>,
    ParentType,
    ContextType,
    RequireFields<EthereumTransfersTransactionArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event'],
> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  signature?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  signatureHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilecoinResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Filecoin'] = ResolversParentTypes['Filecoin'],
> = {
  blocks?: Resolver<
    Maybe<Array<ResolversTypes['FilecoinBlock']>>,
    ParentType,
    ContextType,
    RequireFields<FilecoinBlocksArgs, never>
  >;
  calls?: Resolver<
    Maybe<Array<ResolversTypes['FilecoinCalls']>>,
    ParentType,
    ContextType,
    RequireFields<FilecoinCallsArgs, never>
  >;
  coinpath?: Resolver<
    Maybe<Array<ResolversTypes['FilecoinCoinpath']>>,
    ParentType,
    ContextType,
    RequireFields<FilecoinCoinpathArgs, never>
  >;
  messages?: Resolver<
    Maybe<Array<ResolversTypes['FilecoinMessages']>>,
    ParentType,
    ContextType,
    RequireFields<FilecoinMessagesArgs, never>
  >;
  transfers?: Resolver<
    Maybe<Array<ResolversTypes['FilecoinTransfers']>>,
    ParentType,
    ContextType,
    RequireFields<FilecoinTransfersArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilecoinBlockResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FilecoinBlock'] = ResolversParentTypes['FilecoinBlock'],
> = {
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinBlockAnyArgs, 'of'>
  >;
  blockSig?: Resolver<
    Maybe<ResolversTypes['NameWithId']>,
    ParentType,
    ContextType
  >;
  blsAggregate?: Resolver<
    Maybe<ResolversTypes['NameWithId']>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinBlockCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  electionProof?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  forkSignalling?: Resolver<
    Maybe<ResolversTypes['BigInt']>,
    ParentType,
    ContextType
  >;
  hash?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<FilecoinBlockHashArgs, never>
  >;
  height?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<FilecoinBlockHeightArgs, never>
  >;
  index?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinBlockIndexArgs, never>
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinBlockMaximumArgs, 'of'>
  >;
  messageCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinBlockMessageCountArgs, never>
  >;
  messages?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  miner?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinBlockMinerArgs, never>
  >;
  minerTips?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinBlockMinerTipsArgs, never>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinBlockMinimumArgs, 'of'>
  >;
  parentMessageReceipts?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  parentStateRoot?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  parentWeight?: Resolver<
    Maybe<ResolversTypes['BigInt']>,
    ParentType,
    ContextType
  >;
  reward?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinBlockRewardArgs, never>
  >;
  ticket?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinBlockTimestampArgs, never>
  >;
  totalReward?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinBlockTotalRewardArgs, never>
  >;
  winCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinBlockWinCountArgs, never>
  >;
  wincount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilecoinCallsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FilecoinCalls'] = ResolversParentTypes['FilecoinCalls'],
> = {
  amount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinCallsAmountArgs, never>
  >;
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinCallsAnyArgs, 'of'>
  >;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinCallsBlockArgs, never>
  >;
  callHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  callPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinCallsCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  exitCode?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  gas?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinCallsGasArgs, never>
  >;
  gasFeeCap?: Resolver<
    Maybe<ResolversTypes['BigInt']>,
    ParentType,
    ContextType
  >;
  gasLimit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  gasPremium?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  hash?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinCallsHashArgs, never>
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinCallsMaximumArgs, 'of'>
  >;
  messageMethod?: Resolver<
    Maybe<ResolversTypes['NameWithId']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinCallsMessageMethodArgs, never>
  >;
  method?: Resolver<
    Maybe<ResolversTypes['NameWithId']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinCallsMethodArgs, never>
  >;
  minedBlock?: Resolver<
    Maybe<ResolversTypes['FilecoinMinedBlock']>,
    ParentType,
    ContextType
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinCallsMinimumArgs, 'of'>
  >;
  nonce?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  receiver?: Resolver<
    Maybe<ResolversTypes['AddressWithAccount']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinCallsReceiverArgs, never>
  >;
  returnValue?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  sender?: Resolver<
    Maybe<ResolversTypes['AddressWithAccount']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinCallsSenderArgs, never>
  >;
  success?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinCallsSuccessArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilecoinCoinpathResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FilecoinCoinpath'] = ResolversParentTypes['FilecoinCoinpath'],
> = {
  amount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinCoinpathAmountArgs, never>
  >;
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinCoinpathAnyArgs, 'of'>
  >;
  block?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  currency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType
  >;
  depth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinCoinpathMaximumArgs, 'of'>
  >;
  message?: Resolver<
    Maybe<ResolversTypes['TransactionHashValue']>,
    ParentType,
    ContextType
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinCoinpathMinimumArgs, 'of'>
  >;
  receiver?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType
  >;
  sender?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilecoinMessagesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FilecoinMessages'] = ResolversParentTypes['FilecoinMessages'],
> = {
  amount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinMessagesAmountArgs, never>
  >;
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinMessagesAnyArgs, 'of'>
  >;
  baseFeeBurn?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinMessagesBaseFeeBurnArgs, never>
  >;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinMessagesBlockArgs, never>
  >;
  burned?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinMessagesBurnedArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinMessagesCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  exitCode?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  gas?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinMessagesGasArgs, never>
  >;
  gasFeeCap?: Resolver<
    Maybe<ResolversTypes['BigInt']>,
    ParentType,
    ContextType
  >;
  gasLimit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  gasPremium?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  hash?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinMessagesHashArgs, never>
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinMessagesMaximumArgs, 'of'>
  >;
  method?: Resolver<
    Maybe<ResolversTypes['NameWithId']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinMessagesMethodArgs, never>
  >;
  minedBlock?: Resolver<
    Maybe<ResolversTypes['FilecoinMinedBlock']>,
    ParentType,
    ContextType
  >;
  minerPenalty?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinMessagesMinerPenaltyArgs, never>
  >;
  minerTip?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinMessagesMinerTipArgs, never>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinMessagesMinimumArgs, 'of'>
  >;
  nonce?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  overEstimationBurn?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinMessagesOverEstimationBurnArgs, never>
  >;
  receiver?: Resolver<
    Maybe<ResolversTypes['AddressWithAccount']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinMessagesReceiverArgs, never>
  >;
  refund?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinMessagesRefundArgs, never>
  >;
  returnValue?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  sender?: Resolver<
    Maybe<ResolversTypes['AddressWithAccount']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinMessagesSenderArgs, never>
  >;
  signature?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  signatureType?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  signedHash?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  success?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinMessagesSuccessArgs, never>
  >;
  totalCost?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinMessagesTotalCostArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilecoinMinedBlockResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FilecoinMinedBlock'] = ResolversParentTypes['FilecoinMinedBlock'],
> = {
  hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  index?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  miner?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilecoinTransfersResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FilecoinTransfers'] = ResolversParentTypes['FilecoinTransfers'],
> = {
  amount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinTransfersAmountArgs, never>
  >;
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinTransfersAnyArgs, 'of'>
  >;
  block?: Resolver<
    Maybe<ResolversTypes['BlockExtended']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinTransfersBlockArgs, never>
  >;
  callHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  callPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinTransfersCountArgs, never>
  >;
  currency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  hash?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinTransfersHashArgs, never>
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinTransfersMaximumArgs, 'of'>
  >;
  messageMethod?: Resolver<
    Maybe<ResolversTypes['NameWithId']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinTransfersMessageMethodArgs, never>
  >;
  method?: Resolver<
    Maybe<ResolversTypes['NameWithId']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinTransfersMethodArgs, never>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinTransfersMinimumArgs, 'of'>
  >;
  receiver?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinTransfersReceiverArgs, never>
  >;
  sender?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinTransfersSenderArgs, never>
  >;
  timestamp?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinTransfersTimestampArgs, never>
  >;
  transferType?: Resolver<
    Maybe<ResolversTypes['FilecoinTransferType']>,
    ParentType,
    ContextType,
    RequireFields<FilecoinTransfersTransferTypeArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HederaResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Hedera'] = ResolversParentTypes['Hedera'],
> = {
  arguments?: Resolver<
    Maybe<Array<ResolversTypes['HederaArgument']>>,
    ParentType,
    ContextType,
    RequireFields<HederaArgumentsArgs, never>
  >;
  calls?: Resolver<
    Maybe<Array<ResolversTypes['HederaCall']>>,
    ParentType,
    ContextType,
    RequireFields<HederaCallsArgs, never>
  >;
  coinpath?: Resolver<
    Maybe<Array<ResolversTypes['HederaCoinpath']>>,
    ParentType,
    ContextType,
    RequireFields<HederaCoinpathArgs, never>
  >;
  inputs?: Resolver<
    Maybe<Array<ResolversTypes['HederaInput']>>,
    ParentType,
    ContextType,
    RequireFields<HederaInputsArgs, never>
  >;
  messages?: Resolver<
    Maybe<Array<ResolversTypes['HederaMessage']>>,
    ParentType,
    ContextType,
    RequireFields<HederaMessagesArgs, never>
  >;
  outputs?: Resolver<
    Maybe<Array<ResolversTypes['HederaOutput']>>,
    ParentType,
    ContextType,
    RequireFields<HederaOutputsArgs, never>
  >;
  transactions?: Resolver<
    Maybe<Array<ResolversTypes['HederaTransaction']>>,
    ParentType,
    ContextType,
    RequireFields<HederaTransactionsArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HederaAccountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HederaAccount'] = ResolversParentTypes['HederaAccount'],
> = {
  account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HederaArgumentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HederaArgument'] = ResolversParentTypes['HederaArgument'],
> = {
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<HederaArgumentAnyArgs, 'of'>
  >;
  argtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  argument?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  chargedTxFee?: Resolver<
    Maybe<ResolversTypes['BigInt']>,
    ParentType,
    ContextType
  >;
  consensusTimestamp?: Resolver<
    Maybe<ResolversTypes['Timestamp']>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<HederaArgumentCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  feeCurrency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType
  >;
  initialBalance?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<HederaArgumentInitialBalanceArgs, never>
  >;
  maxFee?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<HederaArgumentMaxFeeArgs, never>
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<HederaArgumentMaximumArgs, 'of'>
  >;
  memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<HederaArgumentMinimumArgs, 'of'>
  >;
  nodeAccount?: Resolver<
    Maybe<ResolversTypes['Account']>,
    ParentType,
    ContextType
  >;
  payerAccount?: Resolver<
    Maybe<ResolversTypes['Account']>,
    ParentType,
    ContextType
  >;
  result?: Resolver<
    Maybe<ResolversTypes['TransactionResult']>,
    ParentType,
    ContextType,
    RequireFields<HederaArgumentResultArgs, never>
  >;
  smartContractEntity?: Resolver<
    Maybe<ResolversTypes['Account']>,
    ParentType,
    ContextType
  >;
  success?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<HederaArgumentSuccessArgs, never>
  >;
  transactionBytes?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  transactionFee?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<HederaArgumentTransactionFeeArgs, never>
  >;
  transactionHash?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<HederaArgumentTransactionHashArgs, never>
  >;
  transactionValidDurationInSec?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  validStart?: Resolver<
    Maybe<ResolversTypes['Timestamp']>,
    ParentType,
    ContextType,
    RequireFields<HederaArgumentValidStartArgs, never>
  >;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HederaCallResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HederaCall'] = ResolversParentTypes['HederaCall'],
> = {
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<HederaCallAnyArgs, 'of'>
  >;
  callInput?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<HederaCallCallInputArgs, never>
  >;
  callResult?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<HederaCallCallResultArgs, never>
  >;
  chargedTxFee?: Resolver<
    Maybe<ResolversTypes['BigInt']>,
    ParentType,
    ContextType
  >;
  consensusTimestamp?: Resolver<
    Maybe<ResolversTypes['Timestamp']>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<HederaCallCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  feeCurrency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType
  >;
  gas?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<HederaCallGasArgs, never>
  >;
  initialBalance?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<HederaCallInitialBalanceArgs, never>
  >;
  maxFee?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<HederaCallMaxFeeArgs, never>
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<HederaCallMaximumArgs, 'of'>
  >;
  memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<HederaCallMinimumArgs, 'of'>
  >;
  nodeAccount?: Resolver<
    Maybe<ResolversTypes['Account']>,
    ParentType,
    ContextType
  >;
  payerAccount?: Resolver<
    Maybe<ResolversTypes['Account']>,
    ParentType,
    ContextType
  >;
  result?: Resolver<
    Maybe<ResolversTypes['TransactionResult']>,
    ParentType,
    ContextType,
    RequireFields<HederaCallResultArgs, never>
  >;
  smartContractEntity?: Resolver<
    Maybe<ResolversTypes['Account']>,
    ParentType,
    ContextType
  >;
  success?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<HederaCallSuccessArgs, never>
  >;
  transactionBytes?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  transactionFee?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<HederaCallTransactionFeeArgs, never>
  >;
  transactionHash?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<HederaCallTransactionHashArgs, never>
  >;
  transactionValidDurationInSec?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  validStart?: Resolver<
    Maybe<ResolversTypes['Timestamp']>,
    ParentType,
    ContextType,
    RequireFields<HederaCallValidStartArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HederaCoinpathResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HederaCoinpath'] = ResolversParentTypes['HederaCoinpath'],
> = {
  amount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<HederaCoinpathAmountArgs, never>
  >;
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<HederaCoinpathAnyArgs, 'of'>
  >;
  block?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  depth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<HederaCoinpathMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<HederaCoinpathMinimumArgs, 'of'>
  >;
  receiver?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType
  >;
  sender?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  transactions?: Resolver<
    Maybe<Array<ResolversTypes['CoinpathEntry']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HederaInputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HederaInput'] = ResolversParentTypes['HederaInput'],
> = {
  amount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<HederaInputAmountArgs, never>
  >;
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<HederaInputAnyArgs, 'of'>
  >;
  consensusTimestamp?: Resolver<
    Maybe<ResolversTypes['Timestamp']>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<HederaInputCountArgs, never>
  >;
  currency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType,
    RequireFields<HederaInputCurrencyArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  entity?: Resolver<
    Maybe<ResolversTypes['Entity']>,
    ParentType,
    ContextType,
    RequireFields<HederaInputEntityArgs, never>
  >;
  feeCurrency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType
  >;
  initialBalance?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<HederaInputInitialBalanceArgs, never>
  >;
  maxFee?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<HederaInputMaxFeeArgs, never>
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<HederaInputMaximumArgs, 'of'>
  >;
  memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<HederaInputMinimumArgs, 'of'>
  >;
  nodeAccount?: Resolver<
    Maybe<ResolversTypes['Account']>,
    ParentType,
    ContextType
  >;
  payerAccount?: Resolver<
    Maybe<ResolversTypes['Account']>,
    ParentType,
    ContextType
  >;
  result?: Resolver<
    Maybe<ResolversTypes['TransactionResult']>,
    ParentType,
    ContextType,
    RequireFields<HederaInputResultArgs, never>
  >;
  success?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<HederaInputSuccessArgs, never>
  >;
  time?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  transactionFee?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<HederaInputTransactionFeeArgs, never>
  >;
  transactionHash?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<HederaInputTransactionHashArgs, never>
  >;
  transactionValidDurationInSec?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  transferEntity?: Resolver<
    Maybe<ResolversTypes['Account']>,
    ParentType,
    ContextType
  >;
  validStart?: Resolver<
    Maybe<ResolversTypes['Timestamp']>,
    ParentType,
    ContextType,
    RequireFields<HederaInputValidStartArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HederaMessageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HederaMessage'] = ResolversParentTypes['HederaMessage'],
> = {
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<HederaMessageAnyArgs, 'of'>
  >;
  consensusTimestamp?: Resolver<
    Maybe<ResolversTypes['Timestamp']>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<HederaMessageCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  entity?: Resolver<
    Maybe<ResolversTypes['Entity']>,
    ParentType,
    ContextType,
    RequireFields<HederaMessageEntityArgs, never>
  >;
  feeCurrency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType
  >;
  initialBalance?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<HederaMessageInitialBalanceArgs, never>
  >;
  maxFee?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<HederaMessageMaxFeeArgs, never>
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<HederaMessageMaximumArgs, 'of'>
  >;
  memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<HederaMessageMinimumArgs, 'of'>
  >;
  nodeAccount?: Resolver<
    Maybe<ResolversTypes['Account']>,
    ParentType,
    ContextType
  >;
  payerAccount?: Resolver<
    Maybe<ResolversTypes['Account']>,
    ParentType,
    ContextType
  >;
  result?: Resolver<
    Maybe<ResolversTypes['TransactionResult']>,
    ParentType,
    ContextType,
    RequireFields<HederaMessageResultArgs, never>
  >;
  success?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<HederaMessageSuccessArgs, never>
  >;
  time?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  topicRunningHash?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<HederaMessageTopicRunningHashArgs, never>
  >;
  topicSequenceNumber?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<HederaMessageTopicSequenceNumberArgs, never>
  >;
  transactionFee?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<HederaMessageTransactionFeeArgs, never>
  >;
  transactionHash?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<HederaMessageTransactionHashArgs, never>
  >;
  transactionValidDurationInSec?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  validStart?: Resolver<
    Maybe<ResolversTypes['Timestamp']>,
    ParentType,
    ContextType,
    RequireFields<HederaMessageValidStartArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HederaOutputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HederaOutput'] = ResolversParentTypes['HederaOutput'],
> = {
  amount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<HederaOutputAmountArgs, never>
  >;
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<HederaOutputAnyArgs, 'of'>
  >;
  consensusTimestamp?: Resolver<
    Maybe<ResolversTypes['Timestamp']>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<HederaOutputCountArgs, never>
  >;
  currency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType,
    RequireFields<HederaOutputCurrencyArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  entity?: Resolver<
    Maybe<ResolversTypes['Entity']>,
    ParentType,
    ContextType,
    RequireFields<HederaOutputEntityArgs, never>
  >;
  feeCurrency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType
  >;
  initialBalance?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<HederaOutputInitialBalanceArgs, never>
  >;
  maxFee?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<HederaOutputMaxFeeArgs, never>
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<HederaOutputMaximumArgs, 'of'>
  >;
  memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<HederaOutputMinimumArgs, 'of'>
  >;
  nodeAccount?: Resolver<
    Maybe<ResolversTypes['Account']>,
    ParentType,
    ContextType
  >;
  payerAccount?: Resolver<
    Maybe<ResolversTypes['Account']>,
    ParentType,
    ContextType
  >;
  result?: Resolver<
    Maybe<ResolversTypes['TransactionResult']>,
    ParentType,
    ContextType,
    RequireFields<HederaOutputResultArgs, never>
  >;
  success?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<HederaOutputSuccessArgs, never>
  >;
  time?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  transactionFee?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<HederaOutputTransactionFeeArgs, never>
  >;
  transactionHash?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<HederaOutputTransactionHashArgs, never>
  >;
  transactionValidDurationInSec?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  transferEntity?: Resolver<
    Maybe<ResolversTypes['Account']>,
    ParentType,
    ContextType
  >;
  validStart?: Resolver<
    Maybe<ResolversTypes['Timestamp']>,
    ParentType,
    ContextType,
    RequireFields<HederaOutputValidStartArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HederaTransactionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HederaTransaction'] = ResolversParentTypes['HederaTransaction'],
> = {
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<HederaTransactionAnyArgs, 'of'>
  >;
  consensusTimestamp?: Resolver<
    Maybe<ResolversTypes['Timestamp']>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<HederaTransactionCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  entity?: Resolver<
    Maybe<ResolversTypes['Entity']>,
    ParentType,
    ContextType,
    RequireFields<HederaTransactionEntityArgs, never>
  >;
  feeCurrency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType
  >;
  initialBalance?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<HederaTransactionInitialBalanceArgs, never>
  >;
  maxFee?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<HederaTransactionMaxFeeArgs, never>
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<HederaTransactionMaximumArgs, 'of'>
  >;
  memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<HederaTransactionMinimumArgs, 'of'>
  >;
  nodeAccount?: Resolver<
    Maybe<ResolversTypes['Account']>,
    ParentType,
    ContextType
  >;
  payerAccount?: Resolver<
    Maybe<ResolversTypes['Account']>,
    ParentType,
    ContextType
  >;
  result?: Resolver<
    Maybe<ResolversTypes['TransactionResult']>,
    ParentType,
    ContextType,
    RequireFields<HederaTransactionResultArgs, never>
  >;
  success?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<HederaTransactionSuccessArgs, never>
  >;
  time?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  transactionBytes?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  transactionFee?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<HederaTransactionTransactionFeeArgs, never>
  >;
  transactionHash?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<HederaTransactionTransactionHashArgs, never>
  >;
  transactionType?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  transactionValidDurationInSec?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  validStart?: Resolver<
    Maybe<ResolversTypes['Timestamp']>,
    ParentType,
    ContextType,
    RequireFields<HederaTransactionValidStartArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface Iso8601DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['ISO8601Date'], any> {
  name: 'ISO8601Date';
}

export interface Iso8601DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['ISO8601DateTime'], any> {
  name: 'ISO8601DateTime';
}

export type InputScriptResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['InputScript'] = ResolversParentTypes['InputScript'],
> = {
  annotation?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  pattern?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shortPattern?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  simplePattern?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes['BitcoinInputScriptType']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LibraResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Libra'] = ResolversParentTypes['Libra'],
> = {
  blocks?: Resolver<
    Maybe<Array<ResolversTypes['LibraBlock']>>,
    ParentType,
    ContextType,
    RequireFields<LibraBlocksArgs, never>
  >;
  coinpath?: Resolver<
    Maybe<Array<ResolversTypes['LibraCoinpath']>>,
    ParentType,
    ContextType,
    RequireFields<LibraCoinpathArgs, never>
  >;
  mints?: Resolver<
    Maybe<Array<ResolversTypes['LibraMints']>>,
    ParentType,
    ContextType,
    RequireFields<LibraMintsArgs, never>
  >;
  transactions?: Resolver<
    Maybe<Array<ResolversTypes['LibraTransactions']>>,
    ParentType,
    ContextType,
    RequireFields<LibraTransactionsArgs, never>
  >;
  transfers?: Resolver<
    Maybe<Array<ResolversTypes['LibraTransfers']>>,
    ParentType,
    ContextType,
    RequireFields<LibraTransfersArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LibraBlockResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LibraBlock'] = ResolversParentTypes['LibraBlock'],
> = {
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<LibraBlockAnyArgs, 'of'>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['BigInt']>,
    ParentType,
    ContextType,
    RequireFields<LibraBlockCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  gasUsed?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<LibraBlockGasUsedArgs, never>
  >;
  height?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<LibraBlockHeightArgs, never>
  >;
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<LibraBlockMaximumArgs, 'of'>
  >;
  metadata?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<LibraBlockMetadataArgs, never>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<LibraBlockMinimumArgs, 'of'>
  >;
  proposer?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<LibraBlockProposerArgs, never>
  >;
  sequenceNumber?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  statusName?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  timestamp?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType,
    RequireFields<LibraBlockTimestampArgs, never>
  >;
  version?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<LibraBlockVersionArgs, never>
  >;
  versionHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vmStatus?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LibraCoinpathResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LibraCoinpath'] = ResolversParentTypes['LibraCoinpath'],
> = {
  amount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<LibraCoinpathAmountArgs, never>
  >;
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<LibraCoinpathAnyArgs, 'of'>
  >;
  block?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  currency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType
  >;
  depth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<LibraCoinpathMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<LibraCoinpathMinimumArgs, 'of'>
  >;
  receiver?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType
  >;
  sender?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  transaction?: Resolver<
    Maybe<ResolversTypes['LibraTransactionValue']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LibraMintsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LibraMints'] = ResolversParentTypes['LibraMints'],
> = {
  amount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<LibraMintsAmountArgs, never>
  >;
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<LibraMintsAnyArgs, 'of'>
  >;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<LibraMintsBlockArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['BigInt']>,
    ParentType,
    ContextType,
    RequireFields<LibraMintsCountArgs, never>
  >;
  currency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType,
    RequireFields<LibraMintsCurrencyArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<LibraMintsMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<LibraMintsMinimumArgs, 'of'>
  >;
  minter?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<LibraMintsMinterArgs, never>
  >;
  sequenceNumber?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  statusName?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  success?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<LibraMintsSuccessArgs, never>
  >;
  timestamp?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType,
    RequireFields<LibraMintsTimestampArgs, never>
  >;
  version?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<LibraMintsVersionArgs, never>
  >;
  versionHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vmStatus?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LibraTransactionValueResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LibraTransactionValue'] = ResolversParentTypes['LibraTransactionValue'],
> = {
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LibraTransactionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LibraTransactions'] = ResolversParentTypes['LibraTransactions'],
> = {
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<LibraTransactionsAnyArgs, 'of'>
  >;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<LibraTransactionsBlockArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['BigInt']>,
    ParentType,
    ContextType,
    RequireFields<LibraTransactionsCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  expirationTime?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  gas?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<LibraTransactionsGasArgs, never>
  >;
  gasCurrency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType,
    RequireFields<LibraTransactionsGasCurrencyArgs, never>
  >;
  gasPrice?: Resolver<
    ResolversTypes['Float'],
    ParentType,
    ContextType,
    RequireFields<LibraTransactionsGasPriceArgs, never>
  >;
  gasValue?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<LibraTransactionsGasValueArgs, never>
  >;
  maxGasAmount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<LibraTransactionsMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<LibraTransactionsMinimumArgs, 'of'>
  >;
  publicKey?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  scriptHash?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<LibraTransactionsScriptHashArgs, never>
  >;
  scriptType?: Resolver<
    Maybe<ResolversTypes['ScriptTypeSelectorSelector']>,
    ParentType,
    ContextType
  >;
  sender?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<LibraTransactionsSenderArgs, never>
  >;
  sequenceNumber?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  signature?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  signatureScheme?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  statusName?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  success?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<LibraTransactionsSuccessArgs, never>
  >;
  timestamp?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType,
    RequireFields<LibraTransactionsTimestampArgs, never>
  >;
  version?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<LibraTransactionsVersionArgs, never>
  >;
  versionHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vmStatus?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LibraTransfersResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LibraTransfers'] = ResolversParentTypes['LibraTransfers'],
> = {
  amount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<LibraTransfersAmountArgs, never>
  >;
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<LibraTransfersAnyArgs, 'of'>
  >;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<LibraTransfersBlockArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['BigInt']>,
    ParentType,
    ContextType,
    RequireFields<LibraTransfersCountArgs, never>
  >;
  currency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType,
    RequireFields<LibraTransfersCurrencyArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  expirationTime?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  gas?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<LibraTransfersGasArgs, never>
  >;
  gasCurrency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType,
    RequireFields<LibraTransfersGasCurrencyArgs, never>
  >;
  gasPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gasValue?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<LibraTransfersGasValueArgs, never>
  >;
  maxGasAmount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<LibraTransfersMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<LibraTransfersMinimumArgs, 'of'>
  >;
  publicKey?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  receiver?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<LibraTransfersReceiverArgs, never>
  >;
  scriptHash?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<LibraTransfersScriptHashArgs, never>
  >;
  scriptType?: Resolver<
    Maybe<ResolversTypes['ScriptTypeSelectorSelector']>,
    ParentType,
    ContextType
  >;
  sender?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<LibraTransfersSenderArgs, never>
  >;
  sequenceNumber?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  signature?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  signatureScheme?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  statusName?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  success?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<LibraTransfersSuccessArgs, never>
  >;
  timestamp?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType,
    RequireFields<LibraTransfersTimestampArgs, never>
  >;
  txSender?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<LibraTransfersTxSenderArgs, never>
  >;
  version?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<LibraTransfersVersionArgs, never>
  >;
  versionHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vmStatus?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MethodResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Method'] = ResolversParentTypes['Method'],
> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  signature?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  signatureHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NameWithIdResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['NameWithId'] = ResolversParentTypes['NameWithId'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OffchainResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Offchain'] = ResolversParentTypes['Offchain'],
> = {
  covid?: Resolver<
    Maybe<ResolversTypes['CovidHistory']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OutputScriptResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['OutputScript'] = ResolversParentTypes['OutputScript'],
> = {
  annotation?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  pattern?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  short?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  simplePattern?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes['BitcoinOutputScriptType']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  algorand?: Resolver<
    Maybe<ResolversTypes['Algorand']>,
    ParentType,
    ContextType,
    RequireFields<QueryAlgorandArgs, never>
  >;
  binance?: Resolver<Maybe<ResolversTypes['Binance']>, ParentType, ContextType>;
  bitcoin?: Resolver<
    Maybe<ResolversTypes['Bitcoin']>,
    ParentType,
    ContextType,
    RequireFields<QueryBitcoinArgs, never>
  >;
  conflux?: Resolver<
    Maybe<ResolversTypes['Conflux']>,
    ParentType,
    ContextType,
    RequireFields<QueryConfluxArgs, never>
  >;
  diem?: Resolver<
    Maybe<ResolversTypes['Libra']>,
    ParentType,
    ContextType,
    RequireFields<QueryDiemArgs, never>
  >;
  eos?: Resolver<Maybe<ResolversTypes['Eos']>, ParentType, ContextType>;
  ethereum?: Resolver<
    Maybe<ResolversTypes['Ethereum']>,
    ParentType,
    ContextType,
    RequireFields<QueryEthereumArgs, never>
  >;
  ethereum2?: Resolver<
    Maybe<ResolversTypes['Ethereum2']>,
    ParentType,
    ContextType,
    RequireFields<QueryEthereum2Args, never>
  >;
  filecoin?: Resolver<
    Maybe<ResolversTypes['Filecoin']>,
    ParentType,
    ContextType,
    RequireFields<QueryFilecoinArgs, never>
  >;
  hedera?: Resolver<
    Maybe<ResolversTypes['Hedera']>,
    ParentType,
    ContextType,
    RequireFields<QueryHederaArgs, never>
  >;
  offchain?: Resolver<
    Maybe<ResolversTypes['Offchain']>,
    ParentType,
    ContextType
  >;
  search?: Resolver<
    Maybe<Array<ResolversTypes['Result']>>,
    ParentType,
    ContextType,
    RequireFields<QuerySearchArgs, 'string'>
  >;
  tron?: Resolver<Maybe<ResolversTypes['Tron']>, ParentType, ContextType>;
};

export type ResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Result'] = ResolversParentTypes['Result'],
> = {
  network?: Resolver<
    ResolversTypes['BlockchainNetwork'],
    ParentType,
    ContextType
  >;
  subject?: Resolver<ResolversTypes['Subject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SignatureResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Signature'] = ResolversParentTypes['Signature'],
> = {
  __resolveType: TypeResolveFn<'Event' | 'Method', ParentType, ContextType>;
};

export type SmartContractResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SmartContract'] = ResolversParentTypes['SmartContract'],
> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  annotation?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  contractType?: Resolver<
    ResolversTypes['SmartContractType'],
    ParentType,
    ContextType
  >;
  protocol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SmartContractReadonlyAttributeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SmartContractReadonlyAttribute'] = ResolversParentTypes['SmartContractReadonlyAttribute'],
> = {
  address?: Resolver<
    Maybe<ResolversTypes['EthereumAddressInfo']>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubjectResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Subject'] = ResolversParentTypes['Subject'],
> = {
  __resolveType: TypeResolveFn<
    | 'Address'
    | 'Currency'
    | 'HederaAccount'
    | 'SmartContract'
    | 'TransactionHash',
    ParentType,
    ContextType
  >;
};

export type TimeIntervalResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TimeInterval'] = ResolversParentTypes['TimeInterval'],
> = {
  day?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<TimeIntervalDayArgs, never>
  >;
  hour?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<TimeIntervalHourArgs, never>
  >;
  minute?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<TimeIntervalMinuteArgs, never>
  >;
  month?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<TimeIntervalMonthArgs, never>
  >;
  second?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<TimeIntervalSecondArgs, never>
  >;
  year?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<TimeIntervalYearArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TimestampResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Timestamp'] = ResolversParentTypes['Timestamp'],
> = {
  nanoseconds?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['ISO8601Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransactionHashResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TransactionHash'] = ResolversParentTypes['TransactionHash'],
> = {
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransactionHashIndexResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TransactionHashIndex'] = ResolversParentTypes['TransactionHashIndex'],
> = {
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransactionHashIndexValuesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TransactionHashIndexValues'] = ResolversParentTypes['TransactionHashIndexValues'],
> = {
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  valueIn?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  valueOut?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransactionHashValueResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TransactionHashValue'] = ResolversParentTypes['TransactionHashValue'],
> = {
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransactionResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TransactionResult'] = ResolversParentTypes['TransactionResult'],
> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransactionSourceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TransactionSource'] = ResolversParentTypes['TransactionSource'],
> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TronResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Tron'] = ResolversParentTypes['Tron'],
> = {
  address?: Resolver<
    Array<ResolversTypes['TronAddressInfo']>,
    ParentType,
    ContextType,
    RequireFields<TronAddressArgs, 'address'>
  >;
  blocks?: Resolver<
    Maybe<Array<ResolversTypes['TronBlocks']>>,
    ParentType,
    ContextType,
    RequireFields<TronBlocksArgs, never>
  >;
  coinpath?: Resolver<
    Maybe<Array<ResolversTypes['TronCoinpath']>>,
    ParentType,
    ContextType,
    RequireFields<TronCoinpathArgs, never>
  >;
  contracts?: Resolver<
    Maybe<Array<ResolversTypes['TronSmartContracts']>>,
    ParentType,
    ContextType,
    RequireFields<TronContractsArgs, never>
  >;
  smartContractCalls?: Resolver<
    Maybe<Array<ResolversTypes['TronSmartContractCalls']>>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractCallsArgs, never>
  >;
  smartContractEvents?: Resolver<
    Maybe<Array<ResolversTypes['TronSmartContractEvents']>>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractEventsArgs, never>
  >;
  trades?: Resolver<
    Maybe<Array<ResolversTypes['TronTrades']>>,
    ParentType,
    ContextType,
    RequireFields<TronTradesArgs, never>
  >;
  transactions?: Resolver<
    Maybe<Array<ResolversTypes['TronTransactions']>>,
    ParentType,
    ContextType,
    RequireFields<TronTransactionsArgs, never>
  >;
  transfers?: Resolver<
    Maybe<Array<ResolversTypes['TronTransfers']>>,
    ParentType,
    ContextType,
    RequireFields<TronTransfersArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TronAddressInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TronAddressInfo'] = ResolversParentTypes['TronAddressInfo'],
> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  annotation?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  smartContract?: Resolver<
    Maybe<ResolversTypes['TronSmartContractInfo']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TronBlocksResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TronBlocks'] = ResolversParentTypes['TronBlocks'],
> = {
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<TronBlocksAnyArgs, 'of'>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<TronBlocksCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  hash?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<TronBlocksHashArgs, never>
  >;
  height?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<TronBlocksHeightArgs, never>
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<TronBlocksMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<TronBlocksMinimumArgs, 'of'>
  >;
  parentBlockHash?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<TronBlocksParentBlockHashArgs, never>
  >;
  timestamp?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType,
    RequireFields<TronBlocksTimestampArgs, never>
  >;
  txTrieRoot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<TronBlocksVersionArgs, never>
  >;
  witness?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<TronBlocksWitnessArgs, never>
  >;
  witnessSignature?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TronCoinpathResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TronCoinpath'] = ResolversParentTypes['TronCoinpath'],
> = {
  amount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<TronCoinpathAmountArgs, never>
  >;
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<TronCoinpathAnyArgs, 'of'>
  >;
  block?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  currency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType
  >;
  depth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<TronCoinpathMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<TronCoinpathMinimumArgs, 'of'>
  >;
  receiver?: Resolver<
    Maybe<ResolversTypes['TronAddressInfo']>,
    ParentType,
    ContextType
  >;
  sender?: Resolver<
    Maybe<ResolversTypes['TronAddressInfo']>,
    ParentType,
    ContextType
  >;
  transaction?: Resolver<
    Maybe<ResolversTypes['TransactionHashValue']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TronSmartContractResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TronSmartContract'] = ResolversParentTypes['TronSmartContract'],
> = {
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  contractType?: Resolver<
    Maybe<ResolversTypes['SmartContractType']>,
    ParentType,
    ContextType
  >;
  currency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType
  >;
  protocolType?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TronSmartContractCallsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TronSmartContractCalls'] = ResolversParentTypes['TronSmartContractCalls'],
> = {
  amount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractCallsAmountArgs, never>
  >;
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractCallsAnyArgs, 'of'>
  >;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractCallsBlockArgs, never>
  >;
  callDepth?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractCallsCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  energyUsageTotal?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractCallsEnergyUsageTotalArgs, never>
  >;
  external?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractCallsExternalArgs, never>
  >;
  fee?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractCallsFeeArgs, never>
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractCallsMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractCallsMinimumArgs, 'of'>
  >;
  netUsage?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractCallsNetUsageArgs, never>
  >;
  smartContract?: Resolver<
    Maybe<ResolversTypes['TronSmartContract']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractCallsSmartContractArgs, never>
  >;
  smartContractMethod?: Resolver<
    Maybe<ResolversTypes['Method']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractCallsSmartContractMethodArgs, never>
  >;
  success?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractCallsSuccessArgs, never>
  >;
  txFrom?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractCallsTxFromArgs, never>
  >;
  txHash?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractCallsTxHashArgs, never>
  >;
  txTo?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractCallsTxToArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TronSmartContractEventsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TronSmartContractEvents'] = ResolversParentTypes['TronSmartContractEvents'],
> = {
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractEventsAnyArgs, 'of'>
  >;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractEventsBlockArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractEventsCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractEventsMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractEventsMinimumArgs, 'of'>
  >;
  smartContract?: Resolver<
    Maybe<ResolversTypes['TronSmartContract']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractEventsSmartContractArgs, never>
  >;
  smartContractEvent?: Resolver<
    Maybe<ResolversTypes['Event']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractEventsSmartContractEventArgs, never>
  >;
  txFrom?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractEventsTxFromArgs, never>
  >;
  txHash?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractEventsTxHashArgs, never>
  >;
  txTo?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractEventsTxToArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TronSmartContractInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TronSmartContractInfo'] = ResolversParentTypes['TronSmartContractInfo'],
> = {
  contractType?: Resolver<
    Maybe<ResolversTypes['SmartContractType']>,
    ParentType,
    ContextType
  >;
  currency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType
  >;
  protocolType?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TronSmartContractsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TronSmartContracts'] = ResolversParentTypes['TronSmartContracts'],
> = {
  amount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractsAmountArgs, never>
  >;
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractsAnyArgs, 'of'>
  >;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractsBlockArgs, never>
  >;
  contractType?: Resolver<
    Maybe<ResolversTypes['TronContractType']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractsContractTypeArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractsCountArgs, never>
  >;
  currency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractsCurrencyArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  energyUsageTotal?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractsEnergyUsageTotalArgs, never>
  >;
  fee?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractsFeeArgs, never>
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractsMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractsMinimumArgs, 'of'>
  >;
  netUsage?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractsNetUsageArgs, never>
  >;
  success?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractsSuccessArgs, never>
  >;
  txHash?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractsTxHashArgs, never>
  >;
  txOwner?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<TronSmartContractsTxOwnerArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TronTradesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TronTrades'] = ResolversParentTypes['TronTrades'],
> = {
  amountBuy?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<TronTradesAmountBuyArgs, never>
  >;
  amountSell?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<TronTradesAmountSellArgs, never>
  >;
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<TronTradesAnyArgs, 'of'>
  >;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<TronTradesBlockArgs, never>
  >;
  buyCurrency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType,
    RequireFields<TronTradesBuyCurrencyArgs, never>
  >;
  buyer?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<TronTradesBuyerArgs, never>
  >;
  contractType?: Resolver<
    Maybe<ResolversTypes['TronContractType']>,
    ParentType,
    ContextType,
    RequireFields<TronTradesContractTypeArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<TronTradesCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  energyUsageTotal?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<TronTradesEnergyUsageTotalArgs, never>
  >;
  exchangeId?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<TronTradesExchangeIdArgs, never>
  >;
  fee?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<TronTradesFeeArgs, never>
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<TronTradesMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<TronTradesMinimumArgs, 'of'>
  >;
  netUsage?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<TronTradesNetUsageArgs, never>
  >;
  sellCurrency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType,
    RequireFields<TronTradesSellCurrencyArgs, never>
  >;
  seller?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<TronTradesSellerArgs, never>
  >;
  success?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<TronTradesSuccessArgs, never>
  >;
  txHash?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<TronTradesTxHashArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TronTransactionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TronTransactions'] = ResolversParentTypes['TronTransactions'],
> = {
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<TronTransactionsAnyArgs, 'of'>
  >;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<TronTransactionsBlockArgs, never>
  >;
  contractAddress?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<TronTransactionsContractAddressArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<TronTransactionsCountArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  energyFee?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<TronTransactionsEnergyFeeArgs, never>
  >;
  energyUsageTotal?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<TronTransactionsEnergyUsageTotalArgs, never>
  >;
  expiration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  fee?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<TronTransactionsFeeArgs, never>
  >;
  feeLimit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hash?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<TronTransactionsHashArgs, never>
  >;
  index?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<TronTransactionsIndexArgs, never>
  >;
  internalTransactionsCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<TronTransactionsInternalTransactionsCountArgs, never>
  >;
  logsCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<TronTransactionsLogsCountArgs, never>
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<TronTransactionsMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<TronTransactionsMinimumArgs, 'of'>
  >;
  netFee?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<TronTransactionsNetFeeArgs, never>
  >;
  netUsage?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<TronTransactionsNetUsageArgs, never>
  >;
  refBlockHash?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<TronTransactionsRefBlockHashArgs, never>
  >;
  result?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  signatures?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<TronTransactionsSuccessArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TronTransfersResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TronTransfers'] = ResolversParentTypes['TronTransfers'],
> = {
  amount?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<TronTransfersAmountArgs, never>
  >;
  any?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<TronTransfersAnyArgs, 'of'>
  >;
  block?: Resolver<
    Maybe<ResolversTypes['Block']>,
    ParentType,
    ContextType,
    RequireFields<TronTransfersBlockArgs, never>
  >;
  contractType?: Resolver<
    Maybe<ResolversTypes['TronContractType']>,
    ParentType,
    ContextType,
    RequireFields<TronTransfersContractTypeArgs, never>
  >;
  count?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<TronTransfersCountArgs, never>
  >;
  currency?: Resolver<
    Maybe<ResolversTypes['Currency']>,
    ParentType,
    ContextType,
    RequireFields<TronTransfersCurrencyArgs, never>
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  energyUsageTotal?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<TronTransfersEnergyUsageTotalArgs, never>
  >;
  entityId?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<TronTransfersEntityIdArgs, never>
  >;
  external?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<TronTransfersExternalArgs, never>
  >;
  fee?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<TronTransfersFeeArgs, never>
  >;
  maximum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<TronTransfersMaximumArgs, 'of'>
  >;
  minimum?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<TronTransfersMinimumArgs, 'of'>
  >;
  netUsage?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<TronTransfersNetUsageArgs, never>
  >;
  receiver?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<TronTransfersReceiverArgs, never>
  >;
  sender?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<TronTransfersSenderArgs, never>
  >;
  success?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<TronTransfersSuccessArgs, never>
  >;
  txFrom?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<TronTransfersTxFromArgs, never>
  >;
  txHash?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<TronTransfersTxHashArgs, never>
  >;
  txTo?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<TronTransfersTxToArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Account?: AccountResolvers<ContextType>;
  Address?: AddressResolvers<ContextType>;
  AddressWithAccount?: AddressWithAccountResolvers<ContextType>;
  Algorand?: AlgorandResolvers<ContextType>;
  AlgorandAddressInfo?: AlgorandAddressInfoResolvers<ContextType>;
  AlgorandArguments?: AlgorandArgumentsResolvers<ContextType>;
  AlgorandBlocks?: AlgorandBlocksResolvers<ContextType>;
  AlgorandCoinpath?: AlgorandCoinpathResolvers<ContextType>;
  AlgorandSmartContract?: AlgorandSmartContractResolvers<ContextType>;
  AlgorandSmartContractCalls?: AlgorandSmartContractCallsResolvers<ContextType>;
  AlgorandTransactions?: AlgorandTransactionsResolvers<ContextType>;
  AlgorandTransfers?: AlgorandTransfersResolvers<ContextType>;
  ArgumentName?: ArgumentNameResolvers<ContextType>;
  ArgumentNameValue?: ArgumentNameValueResolvers<ContextType>;
  ArgumentValue?: ArgumentValueResolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  Binance?: BinanceResolvers<ContextType>;
  BinanceBlock?: BinanceBlockResolvers<ContextType>;
  BinanceCoinpath?: BinanceCoinpathResolvers<ContextType>;
  BinanceOrders?: BinanceOrdersResolvers<ContextType>;
  BinanceTrades?: BinanceTradesResolvers<ContextType>;
  BinanceTransactions?: BinanceTransactionsResolvers<ContextType>;
  BinanceTransfers?: BinanceTransfersResolvers<ContextType>;
  Bitcoin?: BitcoinResolvers<ContextType>;
  BitcoinBlock?: BitcoinBlockResolvers<ContextType>;
  BitcoinCoinpath?: BitcoinCoinpathResolvers<ContextType>;
  BitcoinTransaction?: BitcoinTransactionResolvers<ContextType>;
  BitcoinTransactionInput?: BitcoinTransactionInputResolvers<ContextType>;
  BitcoinTransactionOutput?: BitcoinTransactionOutputResolvers<ContextType>;
  Block?: BlockResolvers<ContextType>;
  BlockExtended?: BlockExtendedResolvers<ContextType>;
  BlockInfo?: BlockInfoResolvers<ContextType>;
  BlockchainNetwork?: BlockchainNetworkResolvers<ContextType>;
  CoinpathEntry?: CoinpathEntryResolvers<ContextType>;
  Conflux?: ConfluxResolvers<ContextType>;
  ConfluxBlocks?: ConfluxBlocksResolvers<ContextType>;
  ConfluxTransactions?: ConfluxTransactionsResolvers<ContextType>;
  CovidCountry?: CovidCountryResolvers<ContextType>;
  CovidFact?: CovidFactResolvers<ContextType>;
  CovidHistory?: CovidHistoryResolvers<ContextType>;
  CovidLocation?: CovidLocationResolvers<ContextType>;
  Currency?: CurrencyResolvers<ContextType>;
  Date?: DateResolvers<ContextType>;
  DateTime?: DateTimeResolvers<ContextType>;
  Entity?: EntityResolvers<ContextType>;
  Eos?: EosResolvers<ContextType>;
  EosAddressInfo?: EosAddressInfoResolvers<ContextType>;
  EosBlocks?: EosBlocksResolvers<ContextType>;
  EosCoinpath?: EosCoinpathResolvers<ContextType>;
  EosSmartContract?: EosSmartContractResolvers<ContextType>;
  EosSmartContractCalls?: EosSmartContractCallsResolvers<ContextType>;
  EosSmartContractInfo?: EosSmartContractInfoResolvers<ContextType>;
  EosTransactions?: EosTransactionsResolvers<ContextType>;
  EosTransfers?: EosTransfersResolvers<ContextType>;
  Ethereum?: EthereumResolvers<ContextType>;
  Ethereum2?: Ethereum2Resolvers<ContextType>;
  Ethereum2Attestation?: Ethereum2AttestationResolvers<ContextType>;
  Ethereum2AttestationFieldInfo?: Ethereum2AttestationFieldInfoResolvers<ContextType>;
  Ethereum2AttestationInfo?: Ethereum2AttestationInfoResolvers<ContextType>;
  Ethereum2AttesterSlashing?: Ethereum2AttesterSlashingResolvers<ContextType>;
  Ethereum2Blocks?: Ethereum2BlocksResolvers<ContextType>;
  Ethereum2Deposit?: Ethereum2DepositResolvers<ContextType>;
  Ethereum2Eth1Info?: Ethereum2Eth1InfoResolvers<ContextType>;
  Ethereum2ProposerSlashing?: Ethereum2ProposerSlashingResolvers<ContextType>;
  Ethereum2SlashingInfo?: Ethereum2SlashingInfoResolvers<ContextType>;
  Ethereum2ValidatorInfo?: Ethereum2ValidatorInfoResolvers<ContextType>;
  Ethereum2VoluntaryExit?: Ethereum2VoluntaryExitResolvers<ContextType>;
  EthereumAddressInfo?: EthereumAddressInfoResolvers<ContextType>;
  EthereumAddressInfoWithBalance?: EthereumAddressInfoWithBalanceResolvers<ContextType>;
  EthereumArguments?: EthereumArgumentsResolvers<ContextType>;
  EthereumBalance?: EthereumBalanceResolvers<ContextType>;
  EthereumBalanceChange?: EthereumBalanceChangeResolvers<ContextType>;
  EthereumBlocks?: EthereumBlocksResolvers<ContextType>;
  EthereumCoinpath?: EthereumCoinpathResolvers<ContextType>;
  EthereumDex?: EthereumDexResolvers<ContextType>;
  EthereumDexTrades?: EthereumDexTradesResolvers<ContextType>;
  EthereumSmartContract?: EthereumSmartContractResolvers<ContextType>;
  EthereumSmartContractCalls?: EthereumSmartContractCallsResolvers<ContextType>;
  EthereumSmartContractEvent?: EthereumSmartContractEventResolvers<ContextType>;
  EthereumSmartContractInfo?: EthereumSmartContractInfoResolvers<ContextType>;
  EthereumSmartContractInfoWithAttributes?: EthereumSmartContractInfoWithAttributesResolvers<ContextType>;
  EthereumTransactionInfo?: EthereumTransactionInfoResolvers<ContextType>;
  EthereumTransactionInfoExtended?: EthereumTransactionInfoExtendedResolvers<ContextType>;
  EthereumTransactions?: EthereumTransactionsResolvers<ContextType>;
  EthereumTransfers?: EthereumTransfersResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  Filecoin?: FilecoinResolvers<ContextType>;
  FilecoinBlock?: FilecoinBlockResolvers<ContextType>;
  FilecoinCalls?: FilecoinCallsResolvers<ContextType>;
  FilecoinCoinpath?: FilecoinCoinpathResolvers<ContextType>;
  FilecoinMessages?: FilecoinMessagesResolvers<ContextType>;
  FilecoinMinedBlock?: FilecoinMinedBlockResolvers<ContextType>;
  FilecoinTransfers?: FilecoinTransfersResolvers<ContextType>;
  Hedera?: HederaResolvers<ContextType>;
  HederaAccount?: HederaAccountResolvers<ContextType>;
  HederaArgument?: HederaArgumentResolvers<ContextType>;
  HederaCall?: HederaCallResolvers<ContextType>;
  HederaCoinpath?: HederaCoinpathResolvers<ContextType>;
  HederaInput?: HederaInputResolvers<ContextType>;
  HederaMessage?: HederaMessageResolvers<ContextType>;
  HederaOutput?: HederaOutputResolvers<ContextType>;
  HederaTransaction?: HederaTransactionResolvers<ContextType>;
  ISO8601Date?: GraphQLScalarType;
  ISO8601DateTime?: GraphQLScalarType;
  InputScript?: InputScriptResolvers<ContextType>;
  Libra?: LibraResolvers<ContextType>;
  LibraBlock?: LibraBlockResolvers<ContextType>;
  LibraCoinpath?: LibraCoinpathResolvers<ContextType>;
  LibraMints?: LibraMintsResolvers<ContextType>;
  LibraTransactionValue?: LibraTransactionValueResolvers<ContextType>;
  LibraTransactions?: LibraTransactionsResolvers<ContextType>;
  LibraTransfers?: LibraTransfersResolvers<ContextType>;
  Method?: MethodResolvers<ContextType>;
  NameWithId?: NameWithIdResolvers<ContextType>;
  Offchain?: OffchainResolvers<ContextType>;
  OutputScript?: OutputScriptResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Result?: ResultResolvers<ContextType>;
  Signature?: SignatureResolvers<ContextType>;
  SmartContract?: SmartContractResolvers<ContextType>;
  SmartContractReadonlyAttribute?: SmartContractReadonlyAttributeResolvers<ContextType>;
  Subject?: SubjectResolvers<ContextType>;
  TimeInterval?: TimeIntervalResolvers<ContextType>;
  Timestamp?: TimestampResolvers<ContextType>;
  TransactionHash?: TransactionHashResolvers<ContextType>;
  TransactionHashIndex?: TransactionHashIndexResolvers<ContextType>;
  TransactionHashIndexValues?: TransactionHashIndexValuesResolvers<ContextType>;
  TransactionHashValue?: TransactionHashValueResolvers<ContextType>;
  TransactionResult?: TransactionResultResolvers<ContextType>;
  TransactionSource?: TransactionSourceResolvers<ContextType>;
  Tron?: TronResolvers<ContextType>;
  TronAddressInfo?: TronAddressInfoResolvers<ContextType>;
  TronBlocks?: TronBlocksResolvers<ContextType>;
  TronCoinpath?: TronCoinpathResolvers<ContextType>;
  TronSmartContract?: TronSmartContractResolvers<ContextType>;
  TronSmartContractCalls?: TronSmartContractCallsResolvers<ContextType>;
  TronSmartContractEvents?: TronSmartContractEventsResolvers<ContextType>;
  TronSmartContractInfo?: TronSmartContractInfoResolvers<ContextType>;
  TronSmartContracts?: TronSmartContractsResolvers<ContextType>;
  TronTrades?: TronTradesResolvers<ContextType>;
  TronTransactions?: TronTransactionsResolvers<ContextType>;
  TronTransfers?: TronTransfersResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

export type GetAddressesBalancesQueryVariables = Exact<{
  network: EthereumNetwork;
  addresses: Array<Scalars['String']> | Scalars['String'];
}>;

export type GetAddressesBalancesQuery = { __typename?: 'Query' } & {
  ethereum?: Maybe<
    { __typename?: 'Ethereum' } & {
      address: Array<
        { __typename?: 'EthereumAddressInfoWithBalance' } & {
          balances?: Maybe<
            Array<
              { __typename?: 'EthereumBalance' } & Pick<
                EthereumBalance,
                'value'
              > & {
                  currency?: Maybe<
                    { __typename?: 'Currency' } & Pick<
                      Currency,
                      'address' | 'symbol' | 'name'
                    >
                  >;
                }
            >
          >;
        }
      >;
    }
  >;
};

export type GetTokenValueQueryVariables = Exact<{
  network: EthereumNetwork;
  inputToken: Scalars['String'];
  outputToken: Scalars['String'];
}>;

export type GetTokenValueQuery = { __typename?: 'Query' } & {
  ethereum?: Maybe<
    { __typename?: 'Ethereum' } & {
      dexTrades?: Maybe<
        Array<
          { __typename?: 'EthereumDexTrades' } & Pick<
            EthereumDexTrades,
            'quotePrice'
          > & {
              block?: Maybe<
                { __typename?: 'BlockExtended' } & Pick<BlockExtended, 'height'>
              >;
              transaction?: Maybe<
                { __typename?: 'EthereumTransactionInfoExtended' } & Pick<
                  EthereumTransactionInfoExtended,
                  'index'
                >
              >;
            }
        >
      >;
    }
  >;
};

export const GetAddressesBalancesDocument = gql`
  query getAddressesBalances(
    $network: EthereumNetwork!
    $addresses: [String!]!
  ) {
    ethereum(network: $network) {
      address(address: { in: $addresses }) {
        balances {
          currency {
            address
            symbol
            name
          }
          value
        }
      }
    }
  }
`;
export const GetTokenValueDocument = gql`
  query getTokenValue(
    $network: EthereumNetwork!
    $inputToken: String!
    $outputToken: String!
  ) {
    ethereum(network: $network) {
      dexTrades(
        options: { limit: 1, desc: ["block.height", "transaction.index"] }
        baseCurrency: { is: $inputToken }
        quoteCurrency: { is: $outputToken }
      ) {
        block {
          height
        }
        transaction {
          index
        }
        quotePrice
      }
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    getAddressesBalances(
      variables: GetAddressesBalancesQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetAddressesBalancesQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<GetAddressesBalancesQuery>(
            GetAddressesBalancesDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getAddressesBalances',
      );
    },
    getTokenValue(
      variables: GetTokenValueQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetTokenValueQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<GetTokenValueQuery>(GetTokenValueDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getTokenValue',
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
