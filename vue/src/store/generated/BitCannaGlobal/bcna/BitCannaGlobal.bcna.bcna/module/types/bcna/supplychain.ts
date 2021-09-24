/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'BitCannaGlobal.bcna.bcna'

export interface Supplychain {
  id: number
  product: string
  info: string
  supplyinfo: string
  creator: string
}

const baseSupplychain: object = { id: 0, product: '', info: '', supplyinfo: '', creator: '' }

export const Supplychain = {
  encode(message: Supplychain, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
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
    if (message.creator !== '') {
      writer.uint32(42).string(message.creator)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Supplychain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseSupplychain } as Supplychain
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
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
        case 5:
          message.creator = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Supplychain {
    const message = { ...baseSupplychain } as Supplychain
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    return message
  },

  toJSON(message: Supplychain): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    message.product !== undefined && (obj.product = message.product)
    message.info !== undefined && (obj.info = message.info)
    message.supplyinfo !== undefined && (obj.supplyinfo = message.supplyinfo)
    message.creator !== undefined && (obj.creator = message.creator)
    return obj
  },

  fromPartial(object: DeepPartial<Supplychain>): Supplychain {
    const message = { ...baseSupplychain } as Supplychain
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    return message
  }
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
