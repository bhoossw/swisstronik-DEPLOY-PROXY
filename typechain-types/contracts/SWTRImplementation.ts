/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export declare namespace ISWTRProxy {
  export type IssuerStruct = {
    name: string;
    version: BigNumberish;
    issuerAddress: AddressLike;
  };

  export type IssuerStructOutput = [
    name: string,
    version: bigint,
    issuerAddress: string
  ] & { name: string; version: bigint; issuerAddress: string };

  export type VerificationDataStruct = {
    verificationType: BigNumberish;
    verificationId: BytesLike;
    issuerAddress: AddressLike;
    originChain: string;
    issuanceTimestamp: BigNumberish;
    expirationTimestamp: BigNumberish;
    originalData: BytesLike;
    schema: string;
    issuerVerificationId: string;
    version: BigNumberish;
  };

  export type VerificationDataStructOutput = [
    verificationType: bigint,
    verificationId: string,
    issuerAddress: string,
    originChain: string,
    issuanceTimestamp: bigint,
    expirationTimestamp: bigint,
    originalData: string,
    schema: string,
    issuerVerificationId: string,
    version: bigint
  ] & {
    verificationType: bigint;
    verificationId: string;
    issuerAddress: string;
    originChain: string;
    issuanceTimestamp: bigint;
    expirationTimestamp: bigint;
    originalData: string;
    schema: string;
    issuerVerificationId: string;
    version: bigint;
  };
}

export interface SWTRImplementationInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addIssuersRecord"
      | "decodeQuadrataPassportV1OriginalData"
      | "decodeWorldcoinV1OriginalData"
      | "getIssuerAddressesByNameAndVersions"
      | "getIssuerRecordByAddress"
      | "getVerificationCountry"
      | "getVerificationDataById"
      | "initialize"
      | "isUserHuman"
      | "isUserVerified"
      | "isUserVerifiedBy"
      | "issuerAddressByNameAndVersion"
      | "issuerByAddress"
      | "issuerRecordCount"
      | "issuers"
      | "listIssuersRecord"
      | "listVerificationData"
      | "owner"
      | "passedVerificationType"
      | "removeIssuerRecord"
      | "renounceOwnership"
      | "transferOwnership"
      | "walletPassedAML"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "Initialized" | "OwnershipTransferred"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addIssuersRecord",
    values: [string[], BigNumberish[], AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "decodeQuadrataPassportV1OriginalData",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "decodeWorldcoinV1OriginalData",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getIssuerAddressesByNameAndVersions",
    values: [string, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getIssuerRecordByAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getVerificationCountry",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getVerificationDataById",
    values: [AddressLike, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isUserHuman",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isUserVerified",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isUserVerifiedBy",
    values: [AddressLike, BigNumberish, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "issuerAddressByNameAndVersion",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "issuerByAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "issuerRecordCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "issuers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "listIssuersRecord",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "listVerificationData",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "passedVerificationType",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeIssuerRecord",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "walletPassedAML",
    values: [AddressLike, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "addIssuersRecord",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decodeQuadrataPassportV1OriginalData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decodeWorldcoinV1OriginalData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIssuerAddressesByNameAndVersions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIssuerRecordByAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVerificationCountry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVerificationDataById",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isUserHuman",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isUserVerified",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isUserVerifiedBy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "issuerAddressByNameAndVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "issuerByAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "issuerRecordCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "issuers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "listIssuersRecord",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "listVerificationData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "passedVerificationType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeIssuerRecord",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "walletPassedAML",
    data: BytesLike
  ): Result;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface SWTRImplementation extends BaseContract {
  connect(runner?: ContractRunner | null): SWTRImplementation;
  waitForDeployment(): Promise<this>;

  interface: SWTRImplementationInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addIssuersRecord: TypedContractMethod<
    [name: string[], version: BigNumberish[], issuerAddress: AddressLike[]],
    [void],
    "nonpayable"
  >;

  decodeQuadrataPassportV1OriginalData: TypedContractMethod<
    [originalData: BytesLike],
    [
      [bigint, string, string, boolean, boolean] & {
        aml: bigint;
        country: string;
        did: string;
        isBusiness: boolean;
        investorStatus: boolean;
      }
    ],
    "view"
  >;

  decodeWorldcoinV1OriginalData: TypedContractMethod<
    [originalData: BytesLike],
    [
      [string, string, string, string] & {
        merkle_root: string;
        nullifier_hash: string;
        proof: string;
        verification_level: string;
      }
    ],
    "view"
  >;

  getIssuerAddressesByNameAndVersions: TypedContractMethod<
    [name: string, version: BigNumberish[]],
    [string[]],
    "view"
  >;

  getIssuerRecordByAddress: TypedContractMethod<
    [issuerAddress: AddressLike],
    [ISWTRProxy.IssuerStructOutput],
    "view"
  >;

  getVerificationCountry: TypedContractMethod<
    [
      userAddress: AddressLike,
      issuerAddress: AddressLike,
      verificationType: BigNumberish
    ],
    [string],
    "view"
  >;

  getVerificationDataById: TypedContractMethod<
    [
      userAddress: AddressLike,
      issuerAddress: AddressLike,
      verificationId: BytesLike
    ],
    [ISWTRProxy.VerificationDataStructOutput],
    "view"
  >;

  initialize: TypedContractMethod<
    [_initialOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  isUserHuman: TypedContractMethod<
    [userAddress: AddressLike, issuerAddress: AddressLike],
    [boolean],
    "view"
  >;

  isUserVerified: TypedContractMethod<
    [userAddress: AddressLike, verificationType: BigNumberish],
    [boolean],
    "view"
  >;

  isUserVerifiedBy: TypedContractMethod<
    [
      userAddress: AddressLike,
      verificationType: BigNumberish,
      allowedIssuers: AddressLike[]
    ],
    [boolean],
    "view"
  >;

  issuerAddressByNameAndVersion: TypedContractMethod<
    [name: string, version: BigNumberish],
    [string],
    "view"
  >;

  issuerByAddress: TypedContractMethod<
    [arg0: AddressLike],
    [
      [string, bigint, string] & {
        name: string;
        version: bigint;
        issuerAddress: string;
      }
    ],
    "view"
  >;

  issuerRecordCount: TypedContractMethod<[], [bigint], "view">;

  issuers: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, string] & {
        name: string;
        version: bigint;
        issuerAddress: string;
      }
    ],
    "view"
  >;

  listIssuersRecord: TypedContractMethod<
    [start: BigNumberish, end: BigNumberish],
    [ISWTRProxy.IssuerStructOutput[]],
    "view"
  >;

  listVerificationData: TypedContractMethod<
    [userAddress: AddressLike, issuerAddress: AddressLike],
    [ISWTRProxy.VerificationDataStructOutput[]],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  passedVerificationType: TypedContractMethod<
    [
      userAddress: AddressLike,
      issuerAddress: AddressLike,
      verificationType: BigNumberish
    ],
    [boolean],
    "view"
  >;

  removeIssuerRecord: TypedContractMethod<
    [name: string, version: BigNumberish],
    [void],
    "nonpayable"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  walletPassedAML: TypedContractMethod<
    [userAddress: AddressLike, issuerAddress: AddressLike],
    [boolean],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addIssuersRecord"
  ): TypedContractMethod<
    [name: string[], version: BigNumberish[], issuerAddress: AddressLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "decodeQuadrataPassportV1OriginalData"
  ): TypedContractMethod<
    [originalData: BytesLike],
    [
      [bigint, string, string, boolean, boolean] & {
        aml: bigint;
        country: string;
        did: string;
        isBusiness: boolean;
        investorStatus: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "decodeWorldcoinV1OriginalData"
  ): TypedContractMethod<
    [originalData: BytesLike],
    [
      [string, string, string, string] & {
        merkle_root: string;
        nullifier_hash: string;
        proof: string;
        verification_level: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getIssuerAddressesByNameAndVersions"
  ): TypedContractMethod<
    [name: string, version: BigNumberish[]],
    [string[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getIssuerRecordByAddress"
  ): TypedContractMethod<
    [issuerAddress: AddressLike],
    [ISWTRProxy.IssuerStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getVerificationCountry"
  ): TypedContractMethod<
    [
      userAddress: AddressLike,
      issuerAddress: AddressLike,
      verificationType: BigNumberish
    ],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "getVerificationDataById"
  ): TypedContractMethod<
    [
      userAddress: AddressLike,
      issuerAddress: AddressLike,
      verificationId: BytesLike
    ],
    [ISWTRProxy.VerificationDataStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<[_initialOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "isUserHuman"
  ): TypedContractMethod<
    [userAddress: AddressLike, issuerAddress: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "isUserVerified"
  ): TypedContractMethod<
    [userAddress: AddressLike, verificationType: BigNumberish],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "isUserVerifiedBy"
  ): TypedContractMethod<
    [
      userAddress: AddressLike,
      verificationType: BigNumberish,
      allowedIssuers: AddressLike[]
    ],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "issuerAddressByNameAndVersion"
  ): TypedContractMethod<
    [name: string, version: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "issuerByAddress"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [
      [string, bigint, string] & {
        name: string;
        version: bigint;
        issuerAddress: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "issuerRecordCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "issuers"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, string] & {
        name: string;
        version: bigint;
        issuerAddress: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "listIssuersRecord"
  ): TypedContractMethod<
    [start: BigNumberish, end: BigNumberish],
    [ISWTRProxy.IssuerStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "listVerificationData"
  ): TypedContractMethod<
    [userAddress: AddressLike, issuerAddress: AddressLike],
    [ISWTRProxy.VerificationDataStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "passedVerificationType"
  ): TypedContractMethod<
    [
      userAddress: AddressLike,
      issuerAddress: AddressLike,
      verificationType: BigNumberish
    ],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "removeIssuerRecord"
  ): TypedContractMethod<
    [name: string, version: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "walletPassedAML"
  ): TypedContractMethod<
    [userAddress: AddressLike, issuerAddress: AddressLike],
    [boolean],
    "view"
  >;

  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;

  filters: {
    "Initialized(uint64)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
  };
}