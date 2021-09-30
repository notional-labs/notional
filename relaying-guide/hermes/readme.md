# Notional guide to Hermes

## Omni-chain Hermes Quickstart

```bash
git clone https://github.com/informalsystems/ibc-rs
cd ibc-rs/relayer-cli
cargo install --path .
mkdir ~/.hermes
cp config.toml ~/.hermes
```

**In config.toml, make sure that you comment out any chain that you do not wish to relay, or "deny" its channels.**


```bash
hermes keys restore cosmoshub-4 -m "12 or 24 magic words"
hermes keys restore akashnet-2 -m "12 or 24 magic words"
hermes keys restore regen-1 -m "12 or 24 magic words"
hermes keys restore osmosis-1 -m "12 or 24 magic words"
hermes keys restore irishub-1 -m "12 or 24 magic words"
hermes keys restore crypto-org-chain-mainnet-1 -m "12 or 24 magic words" -p "44'/394'/0'/0/0"
```

xprt, 


## Operating Guidelines

Hermes is a long-running process that reads all channels by default over each node's websocket.  





### Snippets


```bash
hermes query packet commitments osmosis-1 transfer channel-0
hermes tx raw packet-recv cosmoshub-4 osmosis-1 transfer channel-0
```
