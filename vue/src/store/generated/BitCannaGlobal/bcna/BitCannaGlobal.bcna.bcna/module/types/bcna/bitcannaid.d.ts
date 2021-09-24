import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "BitCannaGlobal.bcna.bcna";
export interface Bitcannaid {
    id: number;
    bcnaid: string;
    address: string;
    creator: string;
}
export declare const Bitcannaid: {
    encode(message: Bitcannaid, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Bitcannaid;
    fromJSON(object: any): Bitcannaid;
    toJSON(message: Bitcannaid): unknown;
    fromPartial(object: DeepPartial<Bitcannaid>): Bitcannaid;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
