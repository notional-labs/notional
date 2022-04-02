
#!/bin/bash
set -uxe

# set environment variables
export GOPATH=~/go
export PATH=$PATH:~/go/bin

# MAKE HOME FOLDER AND GET GENESIS
# USE VERSION V1.1.1
chihuahuad init test 
wget -O ~/.chihuahua/config/genesis.json https://raw.githubusercontent.com/ChihuahuaChain/mainnet/main/genesis.json

INTERVAL=1000

# GET TRUST HASH AND TRUST HEIGHT

LATEST_HEIGHT=$(curl -s http://65.21.129.121:2241/block | jq -r .result.block.header.height);
BLOCK_HEIGHT=$(($LATEST_HEIGHT-$INTERVAL)) 
TRUST_HASH=$(curl -s "http://65.21.129.121:2241/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)


# TELL USER WHAT WE ARE DOING
echo "TRUST HEIGHT: $BLOCK_HEIGHT"
echo "TRUST HASH: $TRUST_HASH"


# export state sync vars
export CHIHUAHUAD_STATESYNC_ENABLE=true
export CHIHUAHUAD_P2P_MAX_NUM_OUTBOUND_PEERS=200
export CHIHUAHUAD_STATESYNC_RPC_SERVERS="http://65.21.129.121:2241,http://65.21.129.121:2241/"
export CHIHUAHUAD_STATESYNC_TRUST_HEIGHT=$BLOCK_HEIGHT
export CHIHUAHUAD_STATESYNC_TRUST_HASH=$TRUST_HASH
export CHIHUAHUAD_P2P_SEEDS="4936e377b4d4f17048f8961838a5035a4d21240c@chihuahua-seed-01.mercury-nodes.net:29540"

chihuahuad start --x-crisis-skip-assert-invariants --pruning custom --pruning-keep-recent 100 --pruning-keep-every 0 --pruning-interval 10 --p2p.laddr tcp://0.0.0.0:2240 --rpc.laddr tcp://127.0.0.1:2241 --grpc.address 127.0.0.1:2242 --grpc-web.address 127.0.0.1:2243
