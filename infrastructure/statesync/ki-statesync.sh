#!/bin/bash
set -uxe

# set environment variables
export GOPATH=~/go
export PATH=$PATH:~/go/bin

# MAKE HOME FOLDER AND GET GENESIS
kid init test
wget -O ~/.kid/config/genesis.json https://raw.githubusercontent.com/KiFoundation/ki-networks/v0.1/Mainnet/kichain-2/genesis.json

INTERVAL=1000

# GET TRUST HASH AND TRUST HEIGHT

LATEST_HEIGHT=$(curl -s http://185.217.125.101:26657/block | jq -r .result.block.header.height);
BLOCK_HEIGHT=$(($LATEST_HEIGHT-$INTERVAL)) 
TRUST_HASH=$(curl -s "http://185.217.125.101:26657/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)


# TELL USER WHAT WE ARE DOING
echo "TRUST HEIGHT: $BLOCK_HEIGHT"
echo "TRUST HASH: $TRUST_HASH"


# export state sync vars
export KID_STATESYNC_ENABLE=true
export KID_P2P_MAX_NUM_OUTBOUND_PEERS=200
export KID_STATESYNC_RPC_SERVERS="http://185.217.125.101:26657,http://185.217.125.101:26657"
export KID_STATESYNC_TRUST_HEIGHT=$BLOCK_HEIGHT
export KID_STATESYNC_TRUST_HASH=$TRUST_HASH
export KID_P2P_SEEDS="f24b14146f34575e254603fe71fc438dbd1b3d0f@185.217.125.101:26656,24cbccfa8813accd0ebdb09e7cdb54cff2e8fcd9@51.89.166.197:26656"

kid start --x-crisis-skip-assert-invariants --p2p.laddr tcp://0.0.0.0:2101 --rpc.laddr tcp://127.0.0.1:2102 --grpc.address 0.0.0.0:2103 
