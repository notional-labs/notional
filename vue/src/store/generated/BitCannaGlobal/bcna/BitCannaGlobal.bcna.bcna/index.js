import { txClient, queryClient, MissingWalletError } from './module';
// @ts-ignore
import { SpVuexError } from '@starport/vuex';
import { Bitcannaid } from "./module/types/bcna/bitcannaid";
import { Supplychain } from "./module/types/bcna/supplychain";
export { Bitcannaid, Supplychain };
async function initTxClient(vuexGetters) {
    return await txClient(vuexGetters['common/wallet/signer'], {
        addr: vuexGetters['common/env/apiTendermint']
    });
}
async function initQueryClient(vuexGetters) {
    return await queryClient({
        addr: vuexGetters['common/env/apiCosmos']
    });
}
function mergeResults(value, next_values) {
    for (let prop of Object.keys(next_values)) {
        if (Array.isArray(next_values[prop])) {
            value[prop] = [...value[prop], ...next_values[prop]];
        }
        else {
            value[prop] = next_values[prop];
        }
    }
    return value;
}
function getStructure(template) {
    let structure = { fields: [] };
    for (const [key, value] of Object.entries(template)) {
        let field = {};
        field.name = key;
        field.type = typeof value;
        structure.fields.push(field);
    }
    return structure;
}
const getDefaultState = () => {
    return {
        Bitcannaid: {},
        BitcannaidAll: {},
        Supplychain: {},
        SupplychainAll: {},
        _Structure: {
            Bitcannaid: getStructure(Bitcannaid.fromPartial({})),
            Supplychain: getStructure(Supplychain.fromPartial({})),
        },
        _Subscriptions: new Set(),
    };
};
// initial state
const state = getDefaultState();
export default {
    namespaced: true,
    state,
    mutations: {
        RESET_STATE(state) {
            Object.assign(state, getDefaultState());
        },
        QUERY(state, { query, key, value }) {
            state[query][JSON.stringify(key)] = value;
        },
        SUBSCRIBE(state, subscription) {
            state._Subscriptions.add(subscription);
        },
        UNSUBSCRIBE(state, subscription) {
            state._Subscriptions.delete(subscription);
        }
    },
    getters: {
        getBitcannaid: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Bitcannaid[JSON.stringify(params)] ?? {};
        },
        getBitcannaidAll: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.BitcannaidAll[JSON.stringify(params)] ?? {};
        },
        getSupplychain: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Supplychain[JSON.stringify(params)] ?? {};
        },
        getSupplychainAll: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.SupplychainAll[JSON.stringify(params)] ?? {};
        },
        getTypeStructure: (state) => (type) => {
            return state._Structure[type].fields;
        }
    },
    actions: {
        init({ dispatch, rootGetters }) {
            console.log('Vuex module: BitCannaGlobal.bcna.bcna initialized!');
            if (rootGetters['common/env/client']) {
                rootGetters['common/env/client'].on('newblock', () => {
                    dispatch('StoreUpdate');
                });
            }
        },
        resetState({ commit }) {
            commit('RESET_STATE');
        },
        unsubscribe({ commit }, subscription) {
            commit('UNSUBSCRIBE', subscription);
        },
        async StoreUpdate({ state, dispatch }) {
            state._Subscriptions.forEach(async (subscription) => {
                try {
                    await dispatch(subscription.action, subscription.payload);
                }
                catch (e) {
                    throw new SpVuexError('Subscriptions: ' + e.message);
                }
            });
        },
        async QueryBitcannaid({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params: { ...key }, query = null }) {
            try {
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryBitcannaid(key.id)).data;
                commit('QUERY', { query: 'Bitcannaid', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryBitcannaid', payload: { options: { all }, params: { ...key }, query } });
                return getters['getBitcannaid']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryBitcannaid', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryBitcannaidAll({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params: { ...key }, query = null }) {
            try {
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryBitcannaidAll(query)).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await queryClient.queryBitcannaidAll({ ...query, 'pagination.key': value.pagination.nextKey })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'BitcannaidAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryBitcannaidAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getBitcannaidAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryBitcannaidAll', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QuerySupplychain({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params: { ...key }, query = null }) {
            try {
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.querySupplychain(key.id)).data;
                commit('QUERY', { query: 'Supplychain', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QuerySupplychain', payload: { options: { all }, params: { ...key }, query } });
                return getters['getSupplychain']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QuerySupplychain', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QuerySupplychainAll({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params: { ...key }, query = null }) {
            try {
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.querySupplychainAll(query)).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await queryClient.querySupplychainAll({ ...query, 'pagination.key': value.pagination.nextKey })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'SupplychainAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QuerySupplychainAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getSupplychainAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QuerySupplychainAll', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async sendMsgCreateSupplychain({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateSupplychain(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateSupplychain:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateSupplychain:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgUpdateSupplychain({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUpdateSupplychain(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgUpdateSupplychain:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateSupplychain:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgCreateBitcannaid({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateBitcannaid(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateBitcannaid:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateBitcannaid:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgDeleteSupplychain({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgDeleteSupplychain(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgDeleteSupplychain:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteSupplychain:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgDeleteBitcannaid({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgDeleteBitcannaid(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgDeleteBitcannaid:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteBitcannaid:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgUpdateBitcannaid({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUpdateBitcannaid(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgUpdateBitcannaid:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateBitcannaid:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async MsgCreateSupplychain({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateSupplychain(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateSupplychain:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateSupplychain:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgUpdateSupplychain({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUpdateSupplychain(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgUpdateSupplychain:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateSupplychain:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgCreateBitcannaid({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateBitcannaid(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateBitcannaid:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateBitcannaid:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgDeleteSupplychain({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgDeleteSupplychain(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgDeleteSupplychain:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteSupplychain:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgDeleteBitcannaid({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgDeleteBitcannaid(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgDeleteBitcannaid:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteBitcannaid:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgUpdateBitcannaid({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUpdateBitcannaid(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgUpdateBitcannaid:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateBitcannaid:Create', 'Could not create message: ' + e.message);
                }
            }
        },
    }
};
