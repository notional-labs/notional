#!/bin/bash
set -uxe

# set environment variables
#export GOPATH=~/go
#export PATH=$PATH:~/go/bin

# MAKE HOME FOLDER AND GET GENESIS
bitsongd init test 
wget -O ~/.bitsongd/config/genesis.json https://raw.githubusercontent.com/bitsongofficial/networks/master/bitsong-2b/genesis.json

INTERVAL=1000

# GET TRUST HASH AND TRUST HEIGHT

LATEST_HEIGHT=$(curl -s https://bitsong.stakesystems.io:2053/block | jq -r .result.block.header.height);
BLOCK_HEIGHT=$(($LATEST_HEIGHT-$INTERVAL)) 
TRUST_HASH=$(curl -s "https://bitsong.stakesystems.io:2053/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)


# TELL USER WHAT WE ARE DOING
echo "TRUST HEIGHT: $BLOCK_HEIGHT"
echo "TRUST HASH: $TRUST_HASH"


# export state sync vars
export BITSONGD_STATESYNC_ENABLE=true
export BITSONGD_P2P_MAX_NUM_OUTBOUND_PEERS=200
export BITSONGD_STATESYNC_RPC_SERVERS="https://bitsong.stakesystems.io:2053,https://bitsong.stakesystems.io:2053"
export BITSONGD_STATESYNC_TRUST_HEIGHT=$BLOCK_HEIGHT
export BITSONGD_STATESYNC_TRUST_HASH=$TRUST_HASH
export BITSONGD_P2P_SEEDS="ffa27441ca78a5d41a36f6d505b67a145fd54d8a@95.217.156.228:26656,efd52c1e56b460b1f37d73c8d2bd5f860b41d2ba@65.21.62.83:26656"

bitsongd start --x-crisis-skip-assert-invariants --p2p.laddr tcp://0.0.0.0:2320 --rpc.laddr tcp://127.0.0.1:2321 --grpc.address 127.0.0.1:2322 --grpc-web.address 127.0.0.1:2323 
