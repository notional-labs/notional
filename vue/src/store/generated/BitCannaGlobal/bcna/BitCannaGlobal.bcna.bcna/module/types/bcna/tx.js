/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
export const protobufPackage = 'BitCannaGlobal.bcna.bcna';
const baseMsgCreateBitcannaid = { creator: '', bcnaid: '', address: '' };
export const MsgCreateBitcannaid = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.bcnaid !== '') {
            writer.uint32(18).string(message.bcnaid);
        }
        if (message.address !== '') {
            writer.uint32(26).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateBitcannaid };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.bcnaid = reader.string();
                    break;
                case 3:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateBitcannaid };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.bcnaid !== undefined && object.bcnaid !== null) {
            message.bcnaid = String(object.bcnaid);
        }
        else {
            message.bcnaid = '';
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.bcnaid !== undefined && (obj.bcnaid = message.bcnaid);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateBitcannaid };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.bcnaid !== undefined && object.bcnaid !== null) {
            message.bcnaid = object.bcnaid;
        }
        else {
            message.bcnaid = '';
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = '';
        }
        return message;
    }
};
const baseMsgCreateBitcannaidResponse = { id: 0 };
export const MsgCreateBitcannaidResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateBitcannaidResponse };
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
        const message = { ...baseMsgCreateBitcannaidResponse };
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
        const message = { ...baseMsgCreateBitcannaidResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgUpdateBitcannaid = { creator: '', id: 0, bcnaid: '', address: '' };
export const MsgUpdateBitcannaid = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.bcnaid !== '') {
            writer.uint32(26).string(message.bcnaid);
        }
        if (message.address !== '') {
            writer.uint32(34).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateBitcannaid };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.bcnaid = reader.string();
                    break;
                case 4:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateBitcannaid };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.bcnaid !== undefined && object.bcnaid !== null) {
            message.bcnaid = String(object.bcnaid);
        }
        else {
            message.bcnaid = '';
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.bcnaid !== undefined && (obj.bcnaid = message.bcnaid);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateBitcannaid };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.bcnaid !== undefined && object.bcnaid !== null) {
            message.bcnaid = object.bcnaid;
        }
        else {
            message.bcnaid = '';
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = '';
        }
        return message;
    }
};
const baseMsgUpdateBitcannaidResponse = {};
export const MsgUpdateBitcannaidResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateBitcannaidResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateBitcannaidResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateBitcannaidResponse };
        return message;
    }
};
const baseMsgDeleteBitcannaid = { creator: '', id: 0 };
export const MsgDeleteBitcannaid = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteBitcannaid };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgDeleteBitcannaid };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteBitcannaid };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgDeleteBitcannaidResponse = {};
export const MsgDeleteBitcannaidResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteBitcannaidResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteBitcannaidResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteBitcannaidResponse };
        return message;
    }
};
const baseMsgCreateSupplychain = { creator: '', product: '', info: '', supplyinfo: '' };
export const MsgCreateSupplychain = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateSupplychain };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateSupplychain };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.product !== undefined && (obj.product = message.product);
        message.info !== undefined && (obj.info = message.info);
        message.supplyinfo !== undefined && (obj.supplyinfo = message.supplyinfo);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateSupplychain };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
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
        return message;
    }
};
const baseMsgCreateSupplychainResponse = { id: 0 };
export const MsgCreateSupplychainResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateSupplychainResponse };
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
        const message = { ...baseMsgCreateSupplychainResponse };
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
        const message = { ...baseMsgCreateSupplychainResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgUpdateSupplychain = { creator: '', id: 0, product: '', info: '', supplyinfo: '' };
export const MsgUpdateSupplychain = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.product !== '') {
            writer.uint32(26).string(message.product);
        }
        if (message.info !== '') {
            writer.uint32(34).string(message.info);
        }
        if (message.supplyinfo !== '') {
            writer.uint32(42).string(message.supplyinfo);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateSupplychain };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.product = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.supplyinfo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateSupplychain };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.product !== undefined && (obj.product = message.product);
        message.info !== undefined && (obj.info = message.info);
        message.supplyinfo !== undefined && (obj.supplyinfo = message.supplyinfo);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateSupplychain };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
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
        return message;
    }
};
const baseMsgUpdateSupplychainResponse = {};
export const MsgUpdateSupplychainResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateSupplychainResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateSupplychainResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateSupplychainResponse };
        return message;
    }
};
const baseMsgDeleteSupplychain = { creator: '', id: 0 };
export const MsgDeleteSupplychain = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteSupplychain };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgDeleteSupplychain };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteSupplychain };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgDeleteSupplychainResponse = {};
export const MsgDeleteSupplychainResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteSupplychainResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteSupplychainResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteSupplychainResponse };
        return message;
    }
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateBitcannaid(request) {
        const data = MsgCreateBitcannaid.encode(request).finish();
        const promise = this.rpc.request('BitCannaGlobal.bcna.bcna.Msg', 'CreateBitcannaid', data);
        return promise.then((data) => MsgCreateBitcannaidResponse.decode(new Reader(data)));
    }
    UpdateBitcannaid(request) {
        const data = MsgUpdateBitcannaid.encode(request).finish();
        const promise = this.rpc.request('BitCannaGlobal.bcna.bcna.Msg', 'UpdateBitcannaid', data);
        return promise.then((data) => MsgUpdateBitcannaidResponse.decode(new Reader(data)));
    }
    DeleteBitcannaid(request) {
        const data = MsgDeleteBitcannaid.encode(request).finish();
        const promise = this.rpc.request('BitCannaGlobal.bcna.bcna.Msg', 'DeleteBitcannaid', data);
        return promise.then((data) => MsgDeleteBitcannaidResponse.decode(new Reader(data)));
    }
    CreateSupplychain(request) {
        const data = MsgCreateSupplychain.encode(request).finish();
        const promise = this.rpc.request('BitCannaGlobal.bcna.bcna.Msg', 'CreateSupplychain', data);
        return promise.then((data) => MsgCreateSupplychainResponse.decode(new Reader(data)));
    }
    UpdateSupplychain(request) {
        const data = MsgUpdateSupplychain.encode(request).finish();
        const promise = this.rpc.request('BitCannaGlobal.bcna.bcna.Msg', 'UpdateSupplychain', data);
        return promise.then((data) => MsgUpdateSupplychainResponse.decode(new Reader(data)));
    }
    DeleteSupplychain(request) {
        const data = MsgDeleteSupplychain.encode(request).finish();
        const promise = this.rpc.request('BitCannaGlobal.bcna.bcna.Msg', 'DeleteSupplychain', data);
        return promise.then((data) => MsgDeleteSupplychainResponse.decode(new Reader(data)));
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
