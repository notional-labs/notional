/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import { Bitcannaid } from '../bcna/bitcannaid';
import { Supplychain } from '../bcna/supplychain';
export const protobufPackage = 'BitCannaGlobal.bcna.bcna';
const baseGenesisState = { bitcannaidCount: 0, supplychainCount: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.bitcannaidList) {
            Bitcannaid.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.bitcannaidCount !== 0) {
            writer.uint32(16).uint64(message.bitcannaidCount);
        }
        for (const v of message.supplychainList) {
            Supplychain.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.supplychainCount !== 0) {
            writer.uint32(32).uint64(message.supplychainCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.bitcannaidList = [];
        message.supplychainList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bitcannaidList.push(Bitcannaid.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.bitcannaidCount = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.supplychainList.push(Supplychain.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.supplychainCount = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.bitcannaidList = [];
        message.supplychainList = [];
        if (object.bitcannaidList !== undefined && object.bitcannaidList !== null) {
            for (const e of object.bitcannaidList) {
                message.bitcannaidList.push(Bitcannaid.fromJSON(e));
            }
        }
        if (object.bitcannaidCount !== undefined && object.bitcannaidCount !== null) {
            message.bitcannaidCount = Number(object.bitcannaidCount);
        }
        else {
            message.bitcannaidCount = 0;
        }
        if (object.supplychainList !== undefined && object.supplychainList !== null) {
            for (const e of object.supplychainList) {
                message.supplychainList.push(Supplychain.fromJSON(e));
            }
        }
        if (object.supplychainCount !== undefined && object.supplychainCount !== null) {
            message.supplychainCount = Number(object.supplychainCount);
        }
        else {
            message.supplychainCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.bitcannaidList) {
            obj.bitcannaidList = message.bitcannaidList.map((e) => (e ? Bitcannaid.toJSON(e) : undefined));
        }
        else {
            obj.bitcannaidList = [];
        }
        message.bitcannaidCount !== undefined && (obj.bitcannaidCount = message.bitcannaidCount);
        if (message.supplychainList) {
            obj.supplychainList = message.supplychainList.map((e) => (e ? Supplychain.toJSON(e) : undefined));
        }
        else {
            obj.supplychainList = [];
        }
        message.supplychainCount !== undefined && (obj.supplychainCount = message.supplychainCount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.bitcannaidList = [];
        message.supplychainList = [];
        if (object.bitcannaidList !== undefined && object.bitcannaidList !== null) {
            for (const e of object.bitcannaidList) {
                message.bitcannaidList.push(Bitcannaid.fromPartial(e));
            }
        }
        if (object.bitcannaidCount !== undefined && object.bitcannaidCount !== null) {
            message.bitcannaidCount = object.bitcannaidCount;
        }
        else {
            message.bitcannaidCount = 0;
        }
        if (object.supplychainList !== undefined && object.supplychainList !== null) {
            for (const e of object.supplychainList) {
                message.supplychainList.push(Supplychain.fromPartial(e));
            }
        }
        if (object.supplychainCount !== undefined && object.supplychainCount !== null) {
            message.supplychainCount = object.supplychainCount;
        }
        else {
            message.supplychainCount = 0;
        }
        return message;
    }
};
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
