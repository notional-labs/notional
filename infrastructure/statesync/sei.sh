#!/bin/bash
set -uxe

# set environment variables
export GOPATH=~/go
export PATH=$PATH:~/go/bin

# MAKE HOME FOLDER AND GET GENESIS


INTERVAL=1000

# GET TRUST HASH AND TRUST HEIGHT

LATEST_HEIGHT=$(curl -s http://statesync-sei.rhinostake.com:11957/block | jq -r .result.block.header.height);
BLOCK_HEIGHT=$(($LATEST_HEIGHT-$INTERVAL)) 
TRUST_HASH=$(curl -s "http://statesync-sei.rhinostake.com:11957/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)

# TELL USER WHAT WE ARE DOING
echo "TRUST HEIGHT: $BLOCK_HEIGHT"
echo "TRUST HASH: $TRUST_HASH"


# export state sync vars
export SEID_STATESYNC_ENABLE=true
export SEID_P2P_MAX_NUM_OUTBOUND_PEERS=200
export SEID_STATESYNC_RPC_SERVERS="http://statesync-sei.rhinostake.com:11957,http://statesync-sei.rhinostake.com:11957"
export SEID_STATESYNC_TRUST_HEIGHT=$BLOCK_HEIGHT
export SEID_STATESYNC_TRUST_HASH=$TRUST_HASH
export SEID_P2P_SEEDS="42f5eaf8e43b17c2e5c72c3ba8c0aea9e3e114fb@statesync-sei.rhinostake.com:11956"

seid start --x-crisis-skip-assert-invariants --p2p.laddr tcp://0.0.0.0:2420 --rpc.laddr tcp://127.0.0.1:2421 --grpc.address 127.0.0.1:2422 --grpc-web.address 127.0.0.1:2423 
