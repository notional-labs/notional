import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateBitcannaid } from "./types/bcna/tx";
import { MsgUpdateSupplychain } from "./types/bcna/tx";
import { MsgDeleteSupplychain } from "./types/bcna/tx";
import { MsgCreateSupplychain } from "./types/bcna/tx";
import { MsgCreateBitcannaid } from "./types/bcna/tx";
import { MsgDeleteBitcannaid } from "./types/bcna/tx";
export declare const MissingWalletError: Error;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgUpdateBitcannaid: (data: MsgUpdateBitcannaid) => EncodeObject;
    msgUpdateSupplychain: (data: MsgUpdateSupplychain) => EncodeObject;
    msgDeleteSupplychain: (data: MsgDeleteSupplychain) => EncodeObject;
    msgCreateSupplychain: (data: MsgCreateSupplychain) => EncodeObject;
    msgCreateBitcannaid: (data: MsgCreateBitcannaid) => EncodeObject;
    msgDeleteBitcannaid: (data: MsgDeleteBitcannaid) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
