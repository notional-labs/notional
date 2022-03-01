
#!/bin/bash
set -uxe

# set environment variables
export GOPATH=~/go
export PATH=$PATH:~/go/bin

#Test successful with version v1.2
# MAKE HOME FOLDER AND GET GENESIS
bcnad init test 
wget -O ~/.bcna/config/genesis.json https://raw.githubusercontent.com/BitCannaGlobal/bcna/main/genesis.json

INTERVAL=1000

# GET TRUST HASH AND TRUST HEIGHT

LATEST_HEIGHT=$(curl -s http://95.217.121.243:421/block | jq -r .result.block.header.height);
BLOCK_HEIGHT=$(($LATEST_HEIGHT-$INTERVAL)) 
TRUST_HASH=$(curl -s "http://95.217.121.243:421/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)


# TELL USER WHAT WE ARE DOING
echo "TRUST HEIGHT: $BLOCK_HEIGHT"
echo "TRUST HASH: $TRUST_HASH"


# export state sync vars
export BCNAD_STATESYNC_ENABLE=true
export BCNAD_P2P_MAX_NUM_OUTBOUND_PEERS=200
export BCNAD_STATESYNC_RPC_SERVERS="http://95.217.121.243:421,https://rpc.bitcanna.io:443"
export BCNAD_STATESYNC_TRUST_HEIGHT=$BLOCK_HEIGHT
export BCNAD_STATESYNC_TRUST_HASH=$TRUST_HASH
export BCNAD_P2P_SEEDS="d6aa4c9f3ccecb0cc52109a95962b4618d69dd3f@seed1.bitcanna.io:26656,23671067d0fd40aec523290585c7d8e91034a771@seed2.bitcanna.io:26656"

bcnad start --x-crisis-skip-assert-invariants --p2p.laddr tcp://0.0.0.0:420 --rpc.laddr tcp://127.0.0.1:421 --grpc.address 127.0.0.1:422 --grpc-web.address 127.0.0.1:423
