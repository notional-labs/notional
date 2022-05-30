set -uxe

# set environment variables
export GOPATH=~/go
export PATH=$PATH:~/go/bin

#Test successful with version v1.2
# MAKE HOME FOLDER AND GET GENESIS
quicksilverd init test 
wget -O ~/.quicksilverd/config/genesis.json https://raw.githubusercontent.com/ingenuity-build/testnets/main/rhapsody/genesis.json #testnet

INTERVAL=1000

# GET TRUST HASH AND TRUST HEIGHT

LATEST_HEIGHT=$(curl -s https://q-silver.theamsolutions.info:443/block | jq -r .result.block.header.height);
BLOCK_HEIGHT=$(($LATEST_HEIGHT-$INTERVAL)) 
TRUST_HASH=$(curl -s "https://q-silver.theamsolutions.info:443/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)


# TELL USER WHAT WE ARE DOING
echo "TRUST HEIGHT: $BLOCK_HEIGHT"
echo "TRUST HASH: $TRUST_HASH"


# export state sync vars
export BCNAD_STATESYNC_ENABLE=true
export BCNAD_P2P_MAX_NUM_OUTBOUND_PEERS=200
export BCNAD_STATESYNC_RPC_SERVERS="https://q-silver.theamsolutions.info:443,https://q-silver.theamsolutions.info:443"
export BCNAD_STATESYNC_TRUST_HEIGHT=$BLOCK_HEIGHT
export BCNAD_STATESYNC_TRUST_HASH=$TRUST_HASH
export BCNAD_P2P_SEEDS="1908031d18336ed61728ccb12d4a8cb54342eee1@161.97.82.203:26256"

quicksilverd start --x-crisis-skip-assert-invariants --p2p.laddr tcp://0.0.0.0:2390 --rpc.laddr tcp://127.0.0.1:2391 --grpc.address 127.0.0.1:2392 --grpc-web.address 127.0.0.1:2393
