/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'BitCannaGlobal.bcna.bcna';
const baseSupplychain = { id: 0, product: '', info: '', supplyinfo: '', creator: '' };
export const Supplychain = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.product !== '') {
            writer.uint32(18).string(message.product);
        }
        if (message.info !== '') {
            writer.uint32(26).string(message.info);
        }
        if (message.supplyinfo !== '') {
            writer.uint32(34).string(message.supplyinfo);
        }
        if (message.creator !== '') {
            writer.uint32(42).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSupplychain };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.product = reader.string();
                    break;
                case 3:
                    message.info = reader.string();
                    break;
                case 4:
                    message.supplyinfo = reader.string();
                    break;
                case 5:
                    message.creator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSupplychain };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.product !== undefined && object.product !== null) {
            message.product = String(object.product);
        }
        else {
            message.product = '';
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = String(object.info);
        }
        else {
            message.info = '';
        }
        if (object.supplyinfo !== undefined && object.supplyinfo !== null) {
            message.supplyinfo = String(object.supplyinfo);
        }
        else {
            message.supplyinfo = '';
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.product !== undefined && (obj.product = message.product);
        message.info !== undefined && (obj.info = message.info);
        message.supplyinfo !== undefined && (obj.supplyinfo = message.supplyinfo);
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSupplychain };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.product !== undefined && object.product !== null) {
            message.product = object.product;
        }
        else {
            message.product = '';
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = object.info;
        }
        else {
            message.info = '';
        }
        if (object.supplyinfo !== undefined && object.supplyinfo !== null) {
            message.supplyinfo = object.supplyinfo;
        }
        else {
            message.supplyinfo = '';
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
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
