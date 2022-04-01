set -uxe

# set environment variables

export GOPATH=~/go
export PATH=$PATH:~/go/bin
export RPC=https://rpc-iris.keplr.app:443
export RPCN=https://rpc-iris.keplr.app:443,https://rpc-iris.keplr.app:443
export APPNAME=IRIS

# MAKE HOME FOLDER AND GET GENESIS
iris init test
wget -O ~/.iris/config/genesis.json https://raw.githubusercontent.com/irisnet/mainnet/master/config/genesis.json

INTERVAL=1000

# GET TRUST HASH AND TRUST HEIGHT

LATEST_HEIGHT=$(curl -s $RPC/block | jq -r .result.block.header.height);
BLOCK_HEIGHT=$(($LATEST_HEIGHT-INTERVAL))
TRUST_HASH=$(curl -s "$RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)


# TELL USER WHAT WE ARE DOING
echo "TRUST HEIGHT: $BLOCK_HEIGHT"
echo "TRUST HASH: $TRUST_HASH"


# export state sync vars
export $(echo $APPNAME)_STATESYNC_ENABLE=true
export $(echo $APPNAME)_P2P_MAX_NUM_OUTBOUND_PEERS=500
export $(echo $APPNAME)_STATESYNC_RPC_SERVERS="$RPC,$RPCN"
export $(echo $APPNAME)_STATESYNC_TRUST_HEIGHT=$BLOCK_HEIGHT
export $(echo $APPNAME)_STATESYNC_TRUST_HASH=$TRUST_HASH
export $(echo $APPNAME)_P2P_SEEDS="6a6de770deaa4b8c061dffd82e9c7f4d40c2165d@seed-1.mainnet.irisnet.org:26656,a17d7923293203c64ba75723db4d5f28e642f469@seed-2.mainnet.irisnet.org:26656"



iris start --x-crisis-skip-assert-invariants --p2p.laddr tcp://0.0.0.0:2120 --rpc.laddr tcp://127.0.0.1:2121 --grpc.address 0.0.0.0:2122 --grpc-web.address  0.0.0.0:2123 --p2p.persistent_peers fdc0406afdd3acc63f74f5439e09104f663a7c1f@44.241.177.178:26656,090bcbe5302e6104821a96c4899912870db04cb9@52.11.128.123:26656,83b3f989f3ce089afdf733f8aa06e792d7e00c08@3.34.6.30:26656,87f18756b93d835c59fe5ce2a8da51858837eb5b@3.34.6.30:26656,92fadc989ed29aee0d46afce3226f8565d1f36cb@144.91.116.17:46656,84cc32adca3986b35953886ad075431d318a98b5@52.214.130.28:46656
