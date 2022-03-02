
#!/bin/bash
set -uxe

# set environment variables
#export GOPATH=~/go
#export PATH=$PATH:~/go/bin

# MAKE HOME FOLDER AND GET GENESIS
regen init test 
wget -O ~/.regen/config/genesis.json https://raw.githubusercontent.com/regen-network/mainnet/main/regen-1/genesis.json

INTERVAL=1000

# GET TRUST HASH AND TRUST HEIGHT

LATEST_HEIGHT=$(curl -s https://regen.stakesystems.io:2053/block | jq -r .result.block.header.height);
BLOCK_HEIGHT=$(($LATEST_HEIGHT-$INTERVAL)) 
TRUST_HASH=$(curl -s "https://regen.stakesystems.io:2053/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)


# TELL USER WHAT WE ARE DOING
echo "TRUST HEIGHT: $BLOCK_HEIGHT"
echo "TRUST HASH: $TRUST_HASH"


# export state sync vars
export REGEN_STATESYNC_ENABLE=true
export REGEN_P2P_MAX_NUM_OUTBOUND_PEERS=200
export REGEN_STATESYNC_RPC_SERVERS="https://regen.stakesystems.io:2053,https://regen.stakesystems.io:2053"
export REGEN_STATESYNC_TRUST_HEIGHT=$BLOCK_HEIGHT
export REGEN_STATESYNC_TRUST_HASH=$TRUST_HASH
export REGEN_P2P_SEEDS="aebb8431609cb126a977592446f5de252d8b7fa1@104.236.201.138:26656,69975e7afdf731a165e40449fcffc75167a084fc@104.131.169.70:26656"

regen start --x-crisis-skip-assert-invariants --p2p.laddr tcp://0.0.0.0:2060 --rpc.laddr tcp://127.0.0.1:2061 --grpc.address 127.0.0.1:2062 --grpc-web.address 127.0.0.1:2063 
