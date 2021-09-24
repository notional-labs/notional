/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'BitCannaGlobal.bcna.bcna'

export interface Bitcannaid {
  id: number
  bcnaid: string
  address: string
  creator: string
}

const baseBitcannaid: object = { id: 0, bcnaid: '', address: '', creator: '' }

export const Bitcannaid = {
  encode(message: Bitcannaid, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    if (message.bcnaid !== '') {
      writer.uint32(18).string(message.bcnaid)
    }
    if (message.address !== '') {
      writer.uint32(26).string(message.address)
    }
    if (message.creator !== '') {
      writer.uint32(34).string(message.creator)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Bitcannaid {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseBitcannaid } as Bitcannaid
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.bcnaid = reader.string()
          break
        case 3:
          message.address = reader.string()
          break
        case 4:
          message.creator = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Bitcannaid {
    const message = { ...baseBitcannaid } as Bitcannaid
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    return message
  },

  toJSON(message: Bitcannaid): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    message.bcnaid !== undefined && (obj.bcnaid = message.bcnaid)
    message.address !== undefined && (obj.address = message.address)
    message.creator !== undefined && (obj.creator = message.creator)
    return obj
  },

  fromPartial(object: DeepPartial<Bitcannaid>): Bitcannaid {
    const message = { ...baseBitcannaid } as Bitcannaid
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
