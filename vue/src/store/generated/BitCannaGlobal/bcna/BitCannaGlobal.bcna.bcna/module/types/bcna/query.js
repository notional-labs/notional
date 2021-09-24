/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { Bitcannaid } from '../bcna/bitcannaid';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Supplychain } from '../bcna/supplychain';
export const protobufPackage = 'BitCannaGlobal.bcna.bcna';
const baseQueryGetBitcannaidRequest = { id: 0 };
export const QueryGetBitcannaidRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetBitcannaidRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetBitcannaidRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetBitcannaidRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetBitcannaidResponse = {};
export const QueryGetBitcannaidResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Bitcannaid !== undefined) {
            Bitcannaid.encode(message.Bitcannaid, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetBitcannaidResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Bitcannaid = Bitcannaid.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetBitcannaidResponse };
        if (object.Bitcannaid !== undefined && object.Bitcannaid !== null) {
            message.Bitcannaid = Bitcannaid.fromJSON(object.Bitcannaid);
        }
        else {
            message.Bitcannaid = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Bitcannaid !== undefined && (obj.Bitcannaid = message.Bitcannaid ? Bitcannaid.toJSON(message.Bitcannaid) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetBitcannaidResponse };
        if (object.Bitcannaid !== undefined && object.Bitcannaid !== null) {
            message.Bitcannaid = Bitcannaid.fromPartial(object.Bitcannaid);
        }
        else {
            message.Bitcannaid = undefined;
        }
        return message;
    }
};
const baseQueryAllBitcannaidRequest = {};
export const QueryAllBitcannaidRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllBitcannaidRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllBitcannaidRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllBitcannaidRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllBitcannaidResponse = {};
export const QueryAllBitcannaidResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Bitcannaid) {
            Bitcannaid.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllBitcannaidResponse };
        message.Bitcannaid = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Bitcannaid.push(Bitcannaid.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllBitcannaidResponse };
        message.Bitcannaid = [];
        if (object.Bitcannaid !== undefined && object.Bitcannaid !== null) {
            for (const e of object.Bitcannaid) {
                message.Bitcannaid.push(Bitcannaid.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Bitcannaid) {
            obj.Bitcannaid = message.Bitcannaid.map((e) => (e ? Bitcannaid.toJSON(e) : undefined));
        }
        else {
            obj.Bitcannaid = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllBitcannaidResponse };
        message.Bitcannaid = [];
        if (object.Bitcannaid !== undefined && object.Bitcannaid !== null) {
            for (const e of object.Bitcannaid) {
                message.Bitcannaid.push(Bitcannaid.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetSupplychainRequest = { id: 0 };
export const QueryGetSupplychainRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetSupplychainRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetSupplychainRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetSupplychainRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetSupplychainResponse = {};
export const QueryGetSupplychainResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Supplychain !== undefined) {
            Supplychain.encode(message.Supplychain, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetSupplychainResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Supplychain = Supplychain.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetSupplychainResponse };
        if (object.Supplychain !== undefined && object.Supplychain !== null) {
            message.Supplychain = Supplychain.fromJSON(object.Supplychain);
        }
        else {
            message.Supplychain = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Supplychain !== undefined && (obj.Supplychain = message.Supplychain ? Supplychain.toJSON(message.Supplychain) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetSupplychainResponse };
        if (object.Supplychain !== undefined && object.Supplychain !== null) {
            message.Supplychain = Supplychain.fromPartial(object.Supplychain);
        }
        else {
            message.Supplychain = undefined;
        }
        return message;
    }
};
const baseQueryAllSupplychainRequest = {};
export const QueryAllSupplychainRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllSupplychainRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllSupplychainRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllSupplychainRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllSupplychainResponse = {};
export const QueryAllSupplychainResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Supplychain) {
            Supplychain.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllSupplychainResponse };
        message.Supplychain = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Supplychain.push(Supplychain.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllSupplychainResponse };
        message.Supplychain = [];
        if (object.Supplychain !== undefined && object.Supplychain !== null) {
            for (const e of object.Supplychain) {
                message.Supplychain.push(Supplychain.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Supplychain) {
            obj.Supplychain = message.Supplychain.map((e) => (e ? Supplychain.toJSON(e) : undefined));
        }
        else {
            obj.Supplychain = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllSupplychainResponse };
        message.Supplychain = [];
        if (object.Supplychain !== undefined && object.Supplychain !== null) {
            for (const e of object.Supplychain) {
                message.Supplychain.push(Supplychain.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Bitcannaid(request) {
        const data = QueryGetBitcannaidRequest.encode(request).finish();
        const promise = this.rpc.request('BitCannaGlobal.bcna.bcna.Query', 'Bitcannaid', data);
        return promise.then((data) => QueryGetBitcannaidResponse.decode(new Reader(data)));
    }
    BitcannaidAll(request) {
        const data = QueryAllBitcannaidRequest.encode(request).finish();
        const promise = this.rpc.request('BitCannaGlobal.bcna.bcna.Query', 'BitcannaidAll', data);
        return promise.then((data) => QueryAllBitcannaidResponse.decode(new Reader(data)));
    }
    Supplychain(request) {
        const data = QueryGetSupplychainRequest.encode(request).finish();
        const promise = this.rpc.request('BitCannaGlobal.bcna.bcna.Query', 'Supplychain', data);
        return promise.then((data) => QueryGetSupplychainResponse.decode(new Reader(data)));
    }
    SupplychainAll(request) {
        const data = QueryAllSupplychainRequest.encode(request).finish();
        const promise = this.rpc.request('BitCannaGlobal.bcna.bcna.Query', 'SupplychainAll', data);
        return promise.then((data) => QueryAllSupplychainResponse.decode(new Reader(data)));
    }
}
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
