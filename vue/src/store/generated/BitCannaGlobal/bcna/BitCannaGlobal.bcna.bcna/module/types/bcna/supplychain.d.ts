import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "BitCannaGlobal.bcna.bcna";
export interface Supplychain {
    id: number;
    product: string;
    info: string;
    supplyinfo: string;
    creator: string;
}
export declare const Supplychain: {
    encode(message: Supplychain, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Supplychain;
    fromJSON(object: any): Supplychain;
    toJSON(message: Supplychain): unknown;
    fromPartial(object: DeepPartial<Supplychain>): Supplychain;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
