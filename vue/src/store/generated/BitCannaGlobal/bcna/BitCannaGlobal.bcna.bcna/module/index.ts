// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateBitcannaid } from "./types/bcna/tx";
import { MsgUpdateSupplychain } from "./types/bcna/tx";
import { MsgDeleteSupplychain } from "./types/bcna/tx";
import { MsgCreateSupplychain } from "./types/bcna/tx";
import { MsgCreateBitcannaid } from "./types/bcna/tx";
import { MsgDeleteBitcannaid } from "./types/bcna/tx";


const types = [
  ["/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid", MsgUpdateBitcannaid],
  ["/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain", MsgUpdateSupplychain],
  ["/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain", MsgDeleteSupplychain],
  ["/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain", MsgCreateSupplychain],
  ["/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid", MsgCreateBitcannaid],
  ["/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid", MsgDeleteBitcannaid],
  
];
export const MissingWalletError = new Error("wallet is required");

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgUpdateBitcannaid: (data: MsgUpdateBitcannaid): EncodeObject => ({ typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid", value: data }),
    msgUpdateSupplychain: (data: MsgUpdateSupplychain): EncodeObject => ({ typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain", value: data }),
    msgDeleteSupplychain: (data: MsgDeleteSupplychain): EncodeObject => ({ typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain", value: data }),
    msgCreateSupplychain: (data: MsgCreateSupplychain): EncodeObject => ({ typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain", value: data }),
    msgCreateBitcannaid: (data: MsgCreateBitcannaid): EncodeObject => ({ typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid", value: data }),
    msgDeleteBitcannaid: (data: MsgDeleteBitcannaid): EncodeObject => ({ typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
