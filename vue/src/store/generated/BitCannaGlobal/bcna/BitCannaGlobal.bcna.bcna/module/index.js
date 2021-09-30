// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateSupplychain } from "./types/bcna/tx";
import { MsgUpdateSupplychain } from "./types/bcna/tx";
import { MsgCreateBitcannaid } from "./types/bcna/tx";
import { MsgDeleteSupplychain } from "./types/bcna/tx";
import { MsgDeleteBitcannaid } from "./types/bcna/tx";
import { MsgUpdateBitcannaid } from "./types/bcna/tx";
const types = [
    ["/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain", MsgCreateSupplychain],
    ["/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain", MsgUpdateSupplychain],
    ["/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid", MsgCreateBitcannaid],
    ["/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain", MsgDeleteSupplychain],
    ["/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid", MsgDeleteBitcannaid],
    ["/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid", MsgUpdateBitcannaid],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgCreateSupplychain: (data) => ({ typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain", value: data }),
        msgUpdateSupplychain: (data) => ({ typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain", value: data }),
        msgCreateBitcannaid: (data) => ({ typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid", value: data }),
        msgDeleteSupplychain: (data) => ({ typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain", value: data }),
        msgDeleteBitcannaid: (data) => ({ typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid", value: data }),
        msgUpdateBitcannaid: (data) => ({ typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
