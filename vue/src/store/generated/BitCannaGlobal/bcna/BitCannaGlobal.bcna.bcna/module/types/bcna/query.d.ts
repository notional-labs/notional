import { Reader, Writer } from 'protobufjs/minimal';
import { Bitcannaid } from '../bcna/bitcannaid';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Supplychain } from '../bcna/supplychain';
export declare const protobufPackage = "BitCannaGlobal.bcna.bcna";
export interface QueryGetBitcannaidRequest {
    id: number;
}
export interface QueryGetBitcannaidResponse {
    Bitcannaid: Bitcannaid | undefined;
}
export interface QueryAllBitcannaidRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllBitcannaidResponse {
    Bitcannaid: Bitcannaid[];
    pagination: PageResponse | undefined;
}
export interface QueryGetSupplychainRequest {
    id: number;
}
export interface QueryGetSupplychainResponse {
    Supplychain: Supplychain | undefined;
}
export interface QueryAllSupplychainRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllSupplychainResponse {
    Supplychain: Supplychain[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetBitcannaidRequest: {
    encode(message: QueryGetBitcannaidRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBitcannaidRequest;
    fromJSON(object: any): QueryGetBitcannaidRequest;
    toJSON(message: QueryGetBitcannaidRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetBitcannaidRequest>): QueryGetBitcannaidRequest;
};
export declare const QueryGetBitcannaidResponse: {
    encode(message: QueryGetBitcannaidResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBitcannaidResponse;
    fromJSON(object: any): QueryGetBitcannaidResponse;
    toJSON(message: QueryGetBitcannaidResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetBitcannaidResponse>): QueryGetBitcannaidResponse;
};
export declare const QueryAllBitcannaidRequest: {
    encode(message: QueryAllBitcannaidRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBitcannaidRequest;
    fromJSON(object: any): QueryAllBitcannaidRequest;
    toJSON(message: QueryAllBitcannaidRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllBitcannaidRequest>): QueryAllBitcannaidRequest;
};
export declare const QueryAllBitcannaidResponse: {
    encode(message: QueryAllBitcannaidResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBitcannaidResponse;
    fromJSON(object: any): QueryAllBitcannaidResponse;
    toJSON(message: QueryAllBitcannaidResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllBitcannaidResponse>): QueryAllBitcannaidResponse;
};
export declare const QueryGetSupplychainRequest: {
    encode(message: QueryGetSupplychainRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSupplychainRequest;
    fromJSON(object: any): QueryGetSupplychainRequest;
    toJSON(message: QueryGetSupplychainRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetSupplychainRequest>): QueryGetSupplychainRequest;
};
export declare const QueryGetSupplychainResponse: {
    encode(message: QueryGetSupplychainResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSupplychainResponse;
    fromJSON(object: any): QueryGetSupplychainResponse;
    toJSON(message: QueryGetSupplychainResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetSupplychainResponse>): QueryGetSupplychainResponse;
};
export declare const QueryAllSupplychainRequest: {
    encode(message: QueryAllSupplychainRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSupplychainRequest;
    fromJSON(object: any): QueryAllSupplychainRequest;
    toJSON(message: QueryAllSupplychainRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllSupplychainRequest>): QueryAllSupplychainRequest;
};
export declare const QueryAllSupplychainResponse: {
    encode(message: QueryAllSupplychainResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSupplychainResponse;
    fromJSON(object: any): QueryAllSupplychainResponse;
    toJSON(message: QueryAllSupplychainResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllSupplychainResponse>): QueryAllSupplychainResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a bitcannaid by id. */
    Bitcannaid(request: QueryGetBitcannaidRequest): Promise<QueryGetBitcannaidResponse>;
    /** Queries a list of bitcannaid items. */
    BitcannaidAll(request: QueryAllBitcannaidRequest): Promise<QueryAllBitcannaidResponse>;
    /** Queries a supplychain by id. */
    Supplychain(request: QueryGetSupplychainRequest): Promise<QueryGetSupplychainResponse>;
    /** Queries a list of supplychain items. */
    SupplychainAll(request: QueryAllSupplychainRequest): Promise<QueryAllSupplychainResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Bitcannaid(request: QueryGetBitcannaidRequest): Promise<QueryGetBitcannaidResponse>;
    BitcannaidAll(request: QueryAllBitcannaidRequest): Promise<QueryAllBitcannaidResponse>;
    Supplychain(request: QueryGetSupplychainRequest): Promise<QueryGetSupplychainResponse>;
    SupplychainAll(request: QueryAllSupplychainRequest): Promise<QueryAllSupplychainResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
