#!/bin/bash
# microtick and bitcanna contributed significantly here.
# Pebbledb state sync script.
set -uxe

# Set Golang environment variables.
export GOPATH=~/go
export PATH=$PATH:~/go/bin

# Get "trust_hash" and "trust_height".
INTERVAL=1000
LATEST_HEIGHT=$(curl -s https://rpc.cheqd.net/block | jq -r .result.block.header.height)
BLOCK_HEIGHT=$(($LATEST_HEIGHT-$INTERVAL)) 
TRUST_HASH=$(curl -s "https://rpc.cheqd.net/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)

# Print out block and transaction hash from which to sync state.
echo "trust_height: $BLOCK_HEIGHT"
echo "trust_hash: $TRUST_HASH"

# Export state sync variables.
export CHEQD_NODED_STATESYNC_ENABLE=true
export CHEQD_NODED_P2P_MAX_NUM_INBOUND_PEERS=200
export CHEQD_NODED_P2P_MAX_NUM_OUTBOUND_PEERS=200
export CHEQD_NODED_STATESYNC_RPC_SERVERS="https://rpc.cheqd.net:443,https://rpc.cheqd.net:443"
export CHEQD_NODED_STATESYNC_TRUST_HEIGHT=$BLOCK_HEIGHT
export CHEQD_NODED_STATESYNC_TRUST_HASH=$TRUST_HASH

# Fetch and set list of seeds from chain registry.
export CHEQD_NODED_P2P_SEEDS=$(curl -s https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/chain.json | jq -r '[foreach .peers.seeds[] as $item (""; "\($item.id)@\($item.address)")] | join(",")')

cheqd-noded start --x-crisis-skip-assert-invariants 
