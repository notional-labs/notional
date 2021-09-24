import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "BitCannaGlobal.bcna.bcna";
export interface MsgCreateBitcannaid {
    creator: string;
    bcnaid: string;
    address: string;
}
export interface MsgCreateBitcannaidResponse {
    id: number;
}
export interface MsgUpdateBitcannaid {
    creator: string;
    id: number;
    bcnaid: string;
    address: string;
}
export interface MsgUpdateBitcannaidResponse {
}
export interface MsgDeleteBitcannaid {
    creator: string;
    id: number;
}
export interface MsgDeleteBitcannaidResponse {
}
export interface MsgCreateSupplychain {
    creator: string;
    product: string;
    info: string;
    supplyinfo: string;
}
export interface MsgCreateSupplychainResponse {
    id: number;
}
export interface MsgUpdateSupplychain {
    creator: string;
    id: number;
    product: string;
    info: string;
    supplyinfo: string;
}
export interface MsgUpdateSupplychainResponse {
}
export interface MsgDeleteSupplychain {
    creator: string;
    id: number;
}
export interface MsgDeleteSupplychainResponse {
}
export declare const MsgCreateBitcannaid: {
    encode(message: MsgCreateBitcannaid, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateBitcannaid;
    fromJSON(object: any): MsgCreateBitcannaid;
    toJSON(message: MsgCreateBitcannaid): unknown;
    fromPartial(object: DeepPartial<MsgCreateBitcannaid>): MsgCreateBitcannaid;
};
export declare const MsgCreateBitcannaidResponse: {
    encode(message: MsgCreateBitcannaidResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateBitcannaidResponse;
    fromJSON(object: any): MsgCreateBitcannaidResponse;
    toJSON(message: MsgCreateBitcannaidResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateBitcannaidResponse>): MsgCreateBitcannaidResponse;
};
export declare const MsgUpdateBitcannaid: {
    encode(message: MsgUpdateBitcannaid, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateBitcannaid;
    fromJSON(object: any): MsgUpdateBitcannaid;
    toJSON(message: MsgUpdateBitcannaid): unknown;
    fromPartial(object: DeepPartial<MsgUpdateBitcannaid>): MsgUpdateBitcannaid;
};
export declare const MsgUpdateBitcannaidResponse: {
    encode(_: MsgUpdateBitcannaidResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateBitcannaidResponse;
    fromJSON(_: any): MsgUpdateBitcannaidResponse;
    toJSON(_: MsgUpdateBitcannaidResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateBitcannaidResponse>): MsgUpdateBitcannaidResponse;
};
export declare const MsgDeleteBitcannaid: {
    encode(message: MsgDeleteBitcannaid, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteBitcannaid;
    fromJSON(object: any): MsgDeleteBitcannaid;
    toJSON(message: MsgDeleteBitcannaid): unknown;
    fromPartial(object: DeepPartial<MsgDeleteBitcannaid>): MsgDeleteBitcannaid;
};
export declare const MsgDeleteBitcannaidResponse: {
    encode(_: MsgDeleteBitcannaidResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteBitcannaidResponse;
    fromJSON(_: any): MsgDeleteBitcannaidResponse;
    toJSON(_: MsgDeleteBitcannaidResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteBitcannaidResponse>): MsgDeleteBitcannaidResponse;
};
export declare const MsgCreateSupplychain: {
    encode(message: MsgCreateSupplychain, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSupplychain;
    fromJSON(object: any): MsgCreateSupplychain;
    toJSON(message: MsgCreateSupplychain): unknown;
    fromPartial(object: DeepPartial<MsgCreateSupplychain>): MsgCreateSupplychain;
};
export declare const MsgCreateSupplychainResponse: {
    encode(message: MsgCreateSupplychainResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSupplychainResponse;
    fromJSON(object: any): MsgCreateSupplychainResponse;
    toJSON(message: MsgCreateSupplychainResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateSupplychainResponse>): MsgCreateSupplychainResponse;
};
export declare const MsgUpdateSupplychain: {
    encode(message: MsgUpdateSupplychain, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSupplychain;
    fromJSON(object: any): MsgUpdateSupplychain;
    toJSON(message: MsgUpdateSupplychain): unknown;
    fromPartial(object: DeepPartial<MsgUpdateSupplychain>): MsgUpdateSupplychain;
};
export declare const MsgUpdateSupplychainResponse: {
    encode(_: MsgUpdateSupplychainResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSupplychainResponse;
    fromJSON(_: any): MsgUpdateSupplychainResponse;
    toJSON(_: MsgUpdateSupplychainResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateSupplychainResponse>): MsgUpdateSupplychainResponse;
};
export declare const MsgDeleteSupplychain: {
    encode(message: MsgDeleteSupplychain, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteSupplychain;
    fromJSON(object: any): MsgDeleteSupplychain;
    toJSON(message: MsgDeleteSupplychain): unknown;
    fromPartial(object: DeepPartial<MsgDeleteSupplychain>): MsgDeleteSupplychain;
};
export declare const MsgDeleteSupplychainResponse: {
    encode(_: MsgDeleteSupplychainResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteSupplychainResponse;
    fromJSON(_: any): MsgDeleteSupplychainResponse;
    toJSON(_: MsgDeleteSupplychainResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteSupplychainResponse>): MsgDeleteSupplychainResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateBitcannaid(request: MsgCreateBitcannaid): Promise<MsgCreateBitcannaidResponse>;
    UpdateBitcannaid(request: MsgUpdateBitcannaid): Promise<MsgUpdateBitcannaidResponse>;
    DeleteBitcannaid(request: MsgDeleteBitcannaid): Promise<MsgDeleteBitcannaidResponse>;
    CreateSupplychain(request: MsgCreateSupplychain): Promise<MsgCreateSupplychainResponse>;
    UpdateSupplychain(request: MsgUpdateSupplychain): Promise<MsgUpdateSupplychainResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    DeleteSupplychain(request: MsgDeleteSupplychain): Promise<MsgDeleteSupplychainResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateBitcannaid(request: MsgCreateBitcannaid): Promise<MsgCreateBitcannaidResponse>;
    UpdateBitcannaid(request: MsgUpdateBitcannaid): Promise<MsgUpdateBitcannaidResponse>;
    DeleteBitcannaid(request: MsgDeleteBitcannaid): Promise<MsgDeleteBitcannaidResponse>;
    CreateSupplychain(request: MsgCreateSupplychain): Promise<MsgCreateSupplychainResponse>;
    UpdateSupplychain(request: MsgUpdateSupplychain): Promise<MsgUpdateSupplychainResponse>;
    DeleteSupplychain(request: MsgDeleteSupplychain): Promise<MsgDeleteSupplychainResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
