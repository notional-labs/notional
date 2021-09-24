/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { Bitcannaid } from '../bcna/bitcannaid'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { Supplychain } from '../bcna/supplychain'

export const protobufPackage = 'BitCannaGlobal.bcna.bcna'

export interface QueryGetBitcannaidRequest {
  id: number
}

export interface QueryGetBitcannaidResponse {
  Bitcannaid: Bitcannaid | undefined
}

export interface QueryAllBitcannaidRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllBitcannaidResponse {
  Bitcannaid: Bitcannaid[]
  pagination: PageResponse | undefined
}

export interface QueryGetSupplychainRequest {
  id: number
}

export interface QueryGetSupplychainResponse {
  Supplychain: Supplychain | undefined
}

export interface QueryAllSupplychainRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllSupplychainResponse {
  Supplychain: Supplychain[]
  pagination: PageResponse | undefined
}

const baseQueryGetBitcannaidRequest: object = { id: 0 }

export const QueryGetBitcannaidRequest = {
  encode(message: QueryGetBitcannaidRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBitcannaidRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetBitcannaidRequest } as QueryGetBitcannaidRequest
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

  fromJSON(object: any): QueryGetBitcannaidRequest {
    const message = { ...baseQueryGetBitcannaidRequest } as QueryGetBitcannaidRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetBitcannaidRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetBitcannaidRequest>): QueryGetBitcannaidRequest {
    const message = { ...baseQueryGetBitcannaidRequest } as QueryGetBitcannaidRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetBitcannaidResponse: object = {}

export const QueryGetBitcannaidResponse = {
  encode(message: QueryGetBitcannaidResponse, writer: Writer = Writer.create()): Writer {
    if (message.Bitcannaid !== undefined) {
      Bitcannaid.encode(message.Bitcannaid, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBitcannaidResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetBitcannaidResponse } as QueryGetBitcannaidResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Bitcannaid = Bitcannaid.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetBitcannaidResponse {
    const message = { ...baseQueryGetBitcannaidResponse } as QueryGetBitcannaidResponse
    if (object.Bitcannaid !== undefined && object.Bitcannaid !== null) {
      message.Bitcannaid = Bitcannaid.fromJSON(object.Bitcannaid)
    } else {
      message.Bitcannaid = undefined
    }
    return message
  },

  toJSON(message: QueryGetBitcannaidResponse): unknown {
    const obj: any = {}
    message.Bitcannaid !== undefined && (obj.Bitcannaid = message.Bitcannaid ? Bitcannaid.toJSON(message.Bitcannaid) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetBitcannaidResponse>): QueryGetBitcannaidResponse {
    const message = { ...baseQueryGetBitcannaidResponse } as QueryGetBitcannaidResponse
    if (object.Bitcannaid !== undefined && object.Bitcannaid !== null) {
      message.Bitcannaid = Bitcannaid.fromPartial(object.Bitcannaid)
    } else {
      message.Bitcannaid = undefined
    }
    return message
  }
}

const baseQueryAllBitcannaidRequest: object = {}

export const QueryAllBitcannaidRequest = {
  encode(message: QueryAllBitcannaidRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBitcannaidRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllBitcannaidRequest } as QueryAllBitcannaidRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllBitcannaidRequest {
    const message = { ...baseQueryAllBitcannaidRequest } as QueryAllBitcannaidRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllBitcannaidRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllBitcannaidRequest>): QueryAllBitcannaidRequest {
    const message = { ...baseQueryAllBitcannaidRequest } as QueryAllBitcannaidRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllBitcannaidResponse: object = {}

export const QueryAllBitcannaidResponse = {
  encode(message: QueryAllBitcannaidResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Bitcannaid) {
      Bitcannaid.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBitcannaidResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllBitcannaidResponse } as QueryAllBitcannaidResponse
    message.Bitcannaid = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Bitcannaid.push(Bitcannaid.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllBitcannaidResponse {
    const message = { ...baseQueryAllBitcannaidResponse } as QueryAllBitcannaidResponse
    message.Bitcannaid = []
    if (object.Bitcannaid !== undefined && object.Bitcannaid !== null) {
      for (const e of object.Bitcannaid) {
        message.Bitcannaid.push(Bitcannaid.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllBitcannaidResponse): unknown {
    const obj: any = {}
    if (message.Bitcannaid) {
      obj.Bitcannaid = message.Bitcannaid.map((e) => (e ? Bitcannaid.toJSON(e) : undefined))
    } else {
      obj.Bitcannaid = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllBitcannaidResponse>): QueryAllBitcannaidResponse {
    const message = { ...baseQueryAllBitcannaidResponse } as QueryAllBitcannaidResponse
    message.Bitcannaid = []
    if (object.Bitcannaid !== undefined && object.Bitcannaid !== null) {
      for (const e of object.Bitcannaid) {
        message.Bitcannaid.push(Bitcannaid.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetSupplychainRequest: object = { id: 0 }

export const QueryGetSupplychainRequest = {
  encode(message: QueryGetSupplychainRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSupplychainRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetSupplychainRequest } as QueryGetSupplychainRequest
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

  fromJSON(object: any): QueryGetSupplychainRequest {
    const message = { ...baseQueryGetSupplychainRequest } as QueryGetSupplychainRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetSupplychainRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetSupplychainRequest>): QueryGetSupplychainRequest {
    const message = { ...baseQueryGetSupplychainRequest } as QueryGetSupplychainRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetSupplychainResponse: object = {}

export const QueryGetSupplychainResponse = {
  encode(message: QueryGetSupplychainResponse, writer: Writer = Writer.create()): Writer {
    if (message.Supplychain !== undefined) {
      Supplychain.encode(message.Supplychain, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSupplychainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetSupplychainResponse } as QueryGetSupplychainResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Supplychain = Supplychain.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetSupplychainResponse {
    const message = { ...baseQueryGetSupplychainResponse } as QueryGetSupplychainResponse
    if (object.Supplychain !== undefined && object.Supplychain !== null) {
      message.Supplychain = Supplychain.fromJSON(object.Supplychain)
    } else {
      message.Supplychain = undefined
    }
    return message
  },

  toJSON(message: QueryGetSupplychainResponse): unknown {
    const obj: any = {}
    message.Supplychain !== undefined && (obj.Supplychain = message.Supplychain ? Supplychain.toJSON(message.Supplychain) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetSupplychainResponse>): QueryGetSupplychainResponse {
    const message = { ...baseQueryGetSupplychainResponse } as QueryGetSupplychainResponse
    if (object.Supplychain !== undefined && object.Supplychain !== null) {
      message.Supplychain = Supplychain.fromPartial(object.Supplychain)
    } else {
      message.Supplychain = undefined
    }
    return message
  }
}

const baseQueryAllSupplychainRequest: object = {}

export const QueryAllSupplychainRequest = {
  encode(message: QueryAllSupplychainRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSupplychainRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllSupplychainRequest } as QueryAllSupplychainRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllSupplychainRequest {
    const message = { ...baseQueryAllSupplychainRequest } as QueryAllSupplychainRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllSupplychainRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllSupplychainRequest>): QueryAllSupplychainRequest {
    const message = { ...baseQueryAllSupplychainRequest } as QueryAllSupplychainRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllSupplychainResponse: object = {}

export const QueryAllSupplychainResponse = {
  encode(message: QueryAllSupplychainResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Supplychain) {
      Supplychain.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSupplychainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllSupplychainResponse } as QueryAllSupplychainResponse
    message.Supplychain = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Supplychain.push(Supplychain.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllSupplychainResponse {
    const message = { ...baseQueryAllSupplychainResponse } as QueryAllSupplychainResponse
    message.Supplychain = []
    if (object.Supplychain !== undefined && object.Supplychain !== null) {
      for (const e of object.Supplychain) {
        message.Supplychain.push(Supplychain.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllSupplychainResponse): unknown {
    const obj: any = {}
    if (message.Supplychain) {
      obj.Supplychain = message.Supplychain.map((e) => (e ? Supplychain.toJSON(e) : undefined))
    } else {
      obj.Supplychain = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllSupplychainResponse>): QueryAllSupplychainResponse {
    const message = { ...baseQueryAllSupplychainResponse } as QueryAllSupplychainResponse
    message.Supplychain = []
    if (object.Supplychain !== undefined && object.Supplychain !== null) {
      for (const e of object.Supplychain) {
        message.Supplychain.push(Supplychain.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a bitcannaid by id. */
  Bitcannaid(request: QueryGetBitcannaidRequest): Promise<QueryGetBitcannaidResponse>
  /** Queries a list of bitcannaid items. */
  BitcannaidAll(request: QueryAllBitcannaidRequest): Promise<QueryAllBitcannaidResponse>
  /** Queries a supplychain by id. */
  Supplychain(request: QueryGetSupplychainRequest): Promise<QueryGetSupplychainResponse>
  /** Queries a list of supplychain items. */
  SupplychainAll(request: QueryAllSupplychainRequest): Promise<QueryAllSupplychainResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Bitcannaid(request: QueryGetBitcannaidRequest): Promise<QueryGetBitcannaidResponse> {
    const data = QueryGetBitcannaidRequest.encode(request).finish()
    const promise = this.rpc.request('BitCannaGlobal.bcna.bcna.Query', 'Bitcannaid', data)
    return promise.then((data) => QueryGetBitcannaidResponse.decode(new Reader(data)))
  }

  BitcannaidAll(request: QueryAllBitcannaidRequest): Promise<QueryAllBitcannaidResponse> {
    const data = QueryAllBitcannaidRequest.encode(request).finish()
    const promise = this.rpc.request('BitCannaGlobal.bcna.bcna.Query', 'BitcannaidAll', data)
    return promise.then((data) => QueryAllBitcannaidResponse.decode(new Reader(data)))
  }

  Supplychain(request: QueryGetSupplychainRequest): Promise<QueryGetSupplychainResponse> {
    const data = QueryGetSupplychainRequest.encode(request).finish()
    const promise = this.rpc.request('BitCannaGlobal.bcna.bcna.Query', 'Supplychain', data)
    return promise.then((data) => QueryGetSupplychainResponse.decode(new Reader(data)))
  }

  SupplychainAll(request: QueryAllSupplychainRequest): Promise<QueryAllSupplychainResponse> {
    const data = QueryAllSupplychainRequest.encode(request).finish()
    const promise = this.rpc.request('BitCannaGlobal.bcna.bcna.Query', 'SupplychainAll', data)
    return promise.then((data) => QueryAllSupplychainResponse.decode(new Reader(data)))
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
