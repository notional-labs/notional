#!/bin/bash
set -uxe

# set environment variables
export GOPATH=~/go
export PATH=$PATH:~/go/bin

# MAKE HOME FOLDER AND GET GENESIS
# secretd init test

INTERVAL=1000

# GET TRUST HASH AND TRUST HEIGHT

LATEST_HEIGHT=$(curl -s https://rpc.cosmos.directory:443/secretnetwork/block | jq -r .result.block.header.height);
BLOCK_HEIGHT=$(($LATEST_HEIGHT-$INTERVAL)) 
TRUST_HASH=$(curl -s "https://rpc.cosmos.directory:443/secretnetwork/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)

# GET TRUST HASH AND TRUST HEIGHT

LATEST_HEIGHT=$(curl -s https://rpc.cosmos.directory:443/secretnetwork/block | jq -r .result.block.header.height);
BLOCK_HEIGHT=$(($LATEST_HEIGHT-$INTERVAL)) 
TRUST_HASH=$(curl -s "https://rpc.cosmos.directory:443/secretnetwork/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)

# If the default RPC fails pls replace all with http://secret.rpc.consensus.one:443 (Thank you John!)

# TELL USER WHAT WE ARE DOING
echo "TRUST HEIGHT: $BLOCK_HEIGHT"
echo "TRUST HASH: $TRUST_HASH"


# export tate sync vars
export SECRETD_STATESYNC_ENABLE=true
export SECRETD_P2P_MAX_NUM_OUTBOUND_PEERS=200
export SECRETD_STATESYNC_RPC_SERVERS="https://rpc.cosmos.directory:443/secretnetwork,http://secret.rpc.consensus.one:443"
export SECRETD_STATESYNC_TRUST_HEIGHT=$BLOCK_HEIGHT
export SECRETD_STATESYNC_TRUST_HASH=$TRUST_HASH
export SECRETD_P2P_SEEDS="6fb7169f7630da9468bf7cc0bcbbed1eb9ed0d7b@scrt-seed-01.scrtlabs.com:26656,ab6394e953e0b570bb1deeb5a8b387aa0dc6188a@scrt-seed-02.scrtlabs.com:26656,9cdaa5856e0245ecd73bd464308fb990fbc53b57@scrt-seed-03.scrtlabs.com:26656"

secretd start --x-crisis-skip-assert-invariants
