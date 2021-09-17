# Notional guide to Hermes

## Quickstart

```bash
git clone https://github.com/informalsystems/ibc-rs
cd ibc-rs/relayer-cli
cargo install --path .
hermes init
```

## Operating Guidelines

Hermes is a long-running process that reads all channels by default over each node's websocket.  





### Snippets


```bash
hermes query packet commitments osmosis-1 transfer channel-0
hermes tx raw packet-recv cosmoshub-4 osmosis-1 transfer channel-0
```
