/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'BitCannaGlobal.bcna.bcna'

export interface MsgCreateBitcannaid {
  creator: string
  bcnaid: string
  address: string
}

export interface MsgCreateBitcannaidResponse {
  id: number
}

export interface MsgUpdateBitcannaid {
  creator: string
  id: number
  bcnaid: string
  address: string
}

export interface MsgUpdateBitcannaidResponse {}

export interface MsgDeleteBitcannaid {
  creator: string
  id: number
}

export interface MsgDeleteBitcannaidResponse {}

export interface MsgCreateSupplychain {
  creator: string
  product: string
  info: string
  supplyinfo: string
}

export interface MsgCreateSupplychainResponse {
  id: number
}

export interface MsgUpdateSupplychain {
  creator: string
  id: number
  product: string
  info: string
  supplyinfo: string
}

export interface MsgUpdateSupplychainResponse {}

export interface MsgDeleteSupplychain {
  creator: string
  id: number
}

export interface MsgDeleteSupplychainResponse {}

const baseMsgCreateBitcannaid: object = { creator: '', bcnaid: '', address: '' }

export const MsgCreateBitcannaid = {
  encode(message: MsgCreateBitcannaid, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.bcnaid !== '') {
      writer.uint32(18).string(message.bcnaid)
    }
    if (message.address !== '') {
      writer.uint32(26).string(message.address)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBitcannaid {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateBitcannaid } as MsgCreateBitcannaid
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.bcnaid = reader.string()
          break
        case 3:
          message.address = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateBitcannaid {
    const message = { ...baseMsgCreateBitcannaid } as MsgCreateBitcannaid
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.bcnaid !== undefined && object.bcnaid !== null) {
      message.bcnaid = String(object.bcnaid)
    } else {
      message.bcnaid = ''
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    return message
  },

  toJSON(message: MsgCreateBitcannaid): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.bcnaid !== undefined && (obj.bcnaid = message.bcnaid)
    message.address !== undefined && (obj.address = message.address)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateBitcannaid>): MsgCreateBitcannaid {
    const message = { ...baseMsgCreateBitcannaid } as MsgCreateBitcannaid
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.bcnaid !== undefined && object.bcnaid !== null) {
      message.bcnaid = object.bcnaid
    } else {
      message.bcnaid = ''
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    return message
  }
}

const baseMsgCreateBitcannaidResponse: object = { id: 0 }

export const MsgCreateBitcannaidResponse = {
  encode(message: MsgCreateBitcannaidResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBitcannaidResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateBitcannaidResponse } as MsgCreateBitcannaidResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateBitcannaidResponse {
    const message = { ...baseMsgCreateBitcannaidResponse } as MsgCreateBitcannaidResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateBitcannaidResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateBitcannaidResponse>): MsgCreateBitcannaidResponse {
    const message = { ...baseMsgCreateBitcannaidResponse } as MsgCreateBitcannaidResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateBitcannaid: object = { creator: '', id: 0, bcnaid: '', address: '' }

export const MsgUpdateBitcannaid = {
  encode(message: MsgUpdateBitcannaid, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.bcnaid !== '') {
      writer.uint32(26).string(message.bcnaid)
    }
    if (message.address !== '') {
      writer.uint32(34).string(message.address)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBitcannaid {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateBitcannaid } as MsgUpdateBitcannaid
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.bcnaid = reader.string()
          break
        case 4:
          message.address = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateBitcannaid {
    const message = { ...baseMsgUpdateBitcannaid } as MsgUpdateBitcannaid
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.bcnaid !== undefined && object.bcnaid !== null) {
      message.bcnaid = String(object.bcnaid)
    } else {
      message.bcnaid = ''
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    return message
  },

  toJSON(message: MsgUpdateBitcannaid): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.bcnaid !== undefined && (obj.bcnaid = message.bcnaid)
    message.address !== undefined && (obj.address = message.address)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateBitcannaid>): MsgUpdateBitcannaid {
    const message = { ...baseMsgUpdateBitcannaid } as MsgUpdateBitcannaid
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.bcnaid !== undefined && object.bcnaid !== null) {
      message.bcnaid = object.bcnaid
    } else {
      message.bcnaid = ''
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    return message
  }
}

const baseMsgUpdateBitcannaidResponse: object = {}

export const MsgUpdateBitcannaidResponse = {
  encode(_: MsgUpdateBitcannaidResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBitcannaidResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateBitcannaidResponse } as MsgUpdateBitcannaidResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateBitcannaidResponse {
    const message = { ...baseMsgUpdateBitcannaidResponse } as MsgUpdateBitcannaidResponse
    return message
  },

  toJSON(_: MsgUpdateBitcannaidResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateBitcannaidResponse>): MsgUpdateBitcannaidResponse {
    const message = { ...baseMsgUpdateBitcannaidResponse } as MsgUpdateBitcannaidResponse
    return message
  }
}

const baseMsgDeleteBitcannaid: object = { creator: '', id: 0 }

export const MsgDeleteBitcannaid = {
  encode(message: MsgDeleteBitcannaid, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteBitcannaid {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteBitcannaid } as MsgDeleteBitcannaid
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteBitcannaid {
    const message = { ...baseMsgDeleteBitcannaid } as MsgDeleteBitcannaid
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgDeleteBitcannaid): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteBitcannaid>): MsgDeleteBitcannaid {
    const message = { ...baseMsgDeleteBitcannaid } as MsgDeleteBitcannaid
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgDeleteBitcannaidResponse: object = {}

export const MsgDeleteBitcannaidResponse = {
  encode(_: MsgDeleteBitcannaidResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteBitcannaidResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteBitcannaidResponse } as MsgDeleteBitcannaidResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteBitcannaidResponse {
    const message = { ...baseMsgDeleteBitcannaidResponse } as MsgDeleteBitcannaidResponse
    return message
  },

  toJSON(_: MsgDeleteBitcannaidResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteBitcannaidResponse>): MsgDeleteBitcannaidResponse {
    const message = { ...baseMsgDeleteBitcannaidResponse } as MsgDeleteBitcannaidResponse
    return message
  }
}

const baseMsgCreateSupplychain: object = { creator: '', product: '', info: '', supplyinfo: '' }

export const MsgCreateSupplychain = {
  encode(message: MsgCreateSupplychain, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.product !== '') {
      writer.uint32(18).string(message.product)
    }
    if (message.info !== '') {
      writer.uint32(26).string(message.info)
    }
    if (message.supplyinfo !== '') {
      writer.uint32(34).string(message.supplyinfo)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateSupplychain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateSupplychain } as MsgCreateSupplychain
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.product = reader.string()
          break
        case 3:
          message.info = reader.string()
          break
        case 4:
          message.supplyinfo = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateSupplychain {
    const message = { ...baseMsgCreateSupplychain } as MsgCreateSupplychain
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.product !== undefined && object.product !== null) {
      message.product = String(object.product)
    } else {
      message.product = ''
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = String(object.info)
    } else {
      message.info = ''
    }
    if (object.supplyinfo !== undefined && object.supplyinfo !== null) {
      message.supplyinfo = String(object.supplyinfo)
    } else {
      message.supplyinfo = ''
    }
    return message
  },

  toJSON(message: MsgCreateSupplychain): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.product !== undefined && (obj.product = message.product)
    message.info !== undefined && (obj.info = message.info)
    message.supplyinfo !== undefined && (obj.supplyinfo = message.supplyinfo)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateSupplychain>): MsgCreateSupplychain {
    const message = { ...baseMsgCreateSupplychain } as MsgCreateSupplychain
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.product !== undefined && object.product !== null) {
      message.product = object.product
    } else {
      message.product = ''
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = object.info
    } else {
      message.info = ''
    }
    if (object.supplyinfo !== undefined && object.supplyinfo !== null) {
      message.supplyinfo = object.supplyinfo
    } else {
      message.supplyinfo = ''
    }
    return message
  }
}

const baseMsgCreateSupplychainResponse: object = { id: 0 }

export const MsgCreateSupplychainResponse = {
  encode(message: MsgCreateSupplychainResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateSupplychainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateSupplychainResponse } as MsgCreateSupplychainResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateSupplychainResponse {
    const message = { ...baseMsgCreateSupplychainResponse } as MsgCreateSupplychainResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateSupplychainResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateSupplychainResponse>): MsgCreateSupplychainResponse {
    const message = { ...baseMsgCreateSupplychainResponse } as MsgCreateSupplychainResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateSupplychain: object = { creator: '', id: 0, product: '', info: '', supplyinfo: '' }

export const MsgUpdateSupplychain = {
  encode(message: MsgUpdateSupplychain, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.product !== '') {
      writer.uint32(26).string(message.product)
    }
    if (message.info !== '') {
      writer.uint32(34).string(message.info)
    }
    if (message.supplyinfo !== '') {
      writer.uint32(42).string(message.supplyinfo)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateSupplychain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateSupplychain } as MsgUpdateSupplychain
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.product = reader.string()
          break
        case 4:
          message.info = reader.string()
          break
        case 5:
          message.supplyinfo = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateSupplychain {
    const message = { ...baseMsgUpdateSupplychain } as MsgUpdateSupplychain
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.product !== undefined && object.product !== null) {
      message.product = String(object.product)
    } else {
      message.product = ''
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = String(object.info)
    } else {
      message.info = ''
    }
    if (object.supplyinfo !== undefined && object.supplyinfo !== null) {
      message.supplyinfo = String(object.supplyinfo)
    } else {
      message.supplyinfo = ''
    }
    return message
  },

  toJSON(message: MsgUpdateSupplychain): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.product !== undefined && (obj.product = message.product)
    message.info !== undefined && (obj.info = message.info)
    message.supplyinfo !== undefined && (obj.supplyinfo = message.supplyinfo)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateSupplychain>): MsgUpdateSupplychain {
    const message = { ...baseMsgUpdateSupplychain } as MsgUpdateSupplychain
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.product !== undefined && object.product !== null) {
      message.product = object.product
    } else {
      message.product = ''
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = object.info
    } else {
      message.info = ''
    }
    if (object.supplyinfo !== undefined && object.supplyinfo !== null) {
      message.supplyinfo = object.supplyinfo
    } else {
      message.supplyinfo = ''
    }
    return message
  }
}

const baseMsgUpdateSupplychainResponse: object = {}

export const MsgUpdateSupplychainResponse = {
  encode(_: MsgUpdateSupplychainResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateSupplychainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateSupplychainResponse } as MsgUpdateSupplychainResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateSupplychainResponse {
    const message = { ...baseMsgUpdateSupplychainResponse } as MsgUpdateSupplychainResponse
    return message
  },

  toJSON(_: MsgUpdateSupplychainResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateSupplychainResponse>): MsgUpdateSupplychainResponse {
    const message = { ...baseMsgUpdateSupplychainResponse } as MsgUpdateSupplychainResponse
    return message
  }
}

const baseMsgDeleteSupplychain: object = { creator: '', id: 0 }

export const MsgDeleteSupplychain = {
  encode(message: MsgDeleteSupplychain, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteSupplychain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteSupplychain } as MsgDeleteSupplychain
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteSupplychain {
    const message = { ...baseMsgDeleteSupplychain } as MsgDeleteSupplychain
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgDeleteSupplychain): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteSupplychain>): MsgDeleteSupplychain {
    const message = { ...baseMsgDeleteSupplychain } as MsgDeleteSupplychain
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgDeleteSupplychainResponse: object = {}

export const MsgDeleteSupplychainResponse = {
  encode(_: MsgDeleteSupplychainResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteSupplychainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteSupplychainResponse } as MsgDeleteSupplychainResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteSupplychainResponse {
    const message = { ...baseMsgDeleteSupplychainResponse } as MsgDeleteSupplychainResponse
    return message
  },

  toJSON(_: MsgDeleteSupplychainResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteSupplychainResponse>): MsgDeleteSupplychainResponse {
    const message = { ...baseMsgDeleteSupplychainResponse } as MsgDeleteSupplychainResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  CreateBitcannaid(request: MsgCreateBitcannaid): Promise<MsgCreateBitcannaidResponse>
  UpdateBitcannaid(request: MsgUpdateBitcannaid): Promise<MsgUpdateBitcannaidResponse>
  DeleteBitcannaid(request: MsgDeleteBitcannaid): Promise<MsgDeleteBitcannaidResponse>
  CreateSupplychain(request: MsgCreateSupplychain): Promise<MsgCreateSupplychainResponse>
  UpdateSupplychain(request: MsgUpdateSupplychain): Promise<MsgUpdateSupplychainResponse>
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteSupplychain(request: MsgDeleteSupplychain): Promise<MsgDeleteSupplychainResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateBitcannaid(request: MsgCreateBitcannaid): Promise<MsgCreateBitcannaidResponse> {
    const data = MsgCreateBitcannaid.encode(request).finish()
    const promise = this.rpc.request('BitCannaGlobal.bcna.bcna.Msg', 'CreateBitcannaid', data)
    return promise.then((data) => MsgCreateBitcannaidResponse.decode(new Reader(data)))
  }

  UpdateBitcannaid(request: MsgUpdateBitcannaid): Promise<MsgUpdateBitcannaidResponse> {
    const data = MsgUpdateBitcannaid.encode(request).finish()
    const promise = this.rpc.request('BitCannaGlobal.bcna.bcna.Msg', 'UpdateBitcannaid', data)
    return promise.then((data) => MsgUpdateBitcannaidResponse.decode(new Reader(data)))
  }

  DeleteBitcannaid(request: MsgDeleteBitcannaid): Promise<MsgDeleteBitcannaidResponse> {
    const data = MsgDeleteBitcannaid.encode(request).finish()
    const promise = this.rpc.request('BitCannaGlobal.bcna.bcna.Msg', 'DeleteBitcannaid', data)
    return promise.then((data) => MsgDeleteBitcannaidResponse.decode(new Reader(data)))
  }

  CreateSupplychain(request: MsgCreateSupplychain): Promise<MsgCreateSupplychainResponse> {
    const data = MsgCreateSupplychain.encode(request).finish()
    const promise = this.rpc.request('BitCannaGlobal.bcna.bcna.Msg', 'CreateSupplychain', data)
    return promise.then((data) => MsgCreateSupplychainResponse.decode(new Reader(data)))
  }

  UpdateSupplychain(request: MsgUpdateSupplychain): Promise<MsgUpdateSupplychainResponse> {
    const data = MsgUpdateSupplychain.encode(request).finish()
    const promise = this.rpc.request('BitCannaGlobal.bcna.bcna.Msg', 'UpdateSupplychain', data)
    return promise.then((data) => MsgUpdateSupplychainResponse.decode(new Reader(data)))
  }

  DeleteSupplychain(request: MsgDeleteSupplychain): Promise<MsgDeleteSupplychainResponse> {
    const data = MsgDeleteSupplychain.encode(request).finish()
    const promise = this.rpc.request('BitCannaGlobal.bcna.bcna.Msg', 'DeleteSupplychain', data)
    return promise.then((data) => MsgDeleteSupplychainResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
