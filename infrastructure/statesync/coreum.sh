#!/bin/bash
set -uxe

# set environment variables
export GOPATH=~/go
export PATH=$PATH:~/go/bin

INTERVAL=1000

# GET TRUST HASH AND TRUST HEIGHT

LATEST_HEIGHT=$(curl -s https://full-node-californium.mainnet-1.coreum.dev:26657/block | jq -r .result.block.header.height);
BLOCK_HEIGHT=$(($LATEST_HEIGHT-$INTERVAL)) 
TRUST_HASH=$(curl -s "https://full-node-californium.mainnet-1.coreum.dev:26657/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)

# GET TRUST HASH AND TRUST HEIGHT

LATEST_HEIGHT=$(curl -s https://full-node-californium.mainnet-1.coreum.dev:26657/block | jq -r .result.block.header.height);
BLOCK_HEIGHT=$(($LATEST_HEIGHT-$INTERVAL)) 
TRUST_HASH=$(curl -s "https://full-node-californium.mainnet-1.coreum.dev:26657/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)


# TELL USER WHAT WE ARE DOING
echo "TRUST HEIGHT: $BLOCK_HEIGHT"
echo "TRUST HASH: $TRUST_HASH"


# export state sync vars
export CORED_STATESYNC_ENABLE=true
export CORED_P2P_MAX_NUM_OUTBOUND_PEERS=200
export CORED_STATESYNC_RPC_SERVERS="https://full-node-californium.mainnet-1.coreum.dev:26657,https://full-node-californium.mainnet-1.coreum.dev:26657"
export CORED_STATESYNC_TRUST_HEIGHT=$BLOCK_HEIGHT
export CORED_STATESYNC_TRUST_HASH=$TRUST_HASH

cored start --x-crisis-skip-assert-invariants --p2p.laddr tcp://0.0.0.0:2680 --rpc.laddr tcp://127.0.0.1:2681 --grpc.address 127.0.0.1:2682 --grpc-web.address 127.0.0.1:2683 --p2p.persistent_peers 24434238f20ec017ae429bbbd85a36ccf68640a4@15.237.41.232:26656,b212d5740b2e11e54f56b072dc13b6134650cfb5@169.155.44.100:26656,efa2043a4b1ba75f095f54d3ca6c5c9e02d94f51@34.72.188.14:26656
