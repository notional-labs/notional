set -uxe

# set environment variables
export GOPATH=~/go
export PATH=$PATH:~/go/bin

# MAKE HOME FOLDER AND GET GENESIS
sifnoded init test
wget -O ~/.sifnoded/config/genesis.json https://github.com/Sifchain/networks/blob/master/betanet/sifchain-1/genesis.json?raw=true

INTERVAL=1000

# GET TRUST HASH AND TRUST HEIGHT

LATEST_HEIGHT=$(curl -s https://rpc.sifchain.finance/block | jq -r .result.block.header.height);
BLOCK_HEIGHT=$(($LATEST_HEIGHT-$INTERVAL))
TRUST_HASH=$(curl -s "https://rpc.sifchain.finance/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)


# TELL USER WHAT WE ARE DOING
echo "TRUST HEIGHT: $BLOCK_HEIGHT"
echo "TRUST HASH: $TRUST_HASH"


# exort state sync vars
export SIFNODED_STATESYNC_ENABLE=true
export SIFNODED_P2P_MAX_NUM_OUTBOUND_PEERS=200
export SIFNODED_STATESYNC_RPC_SERVERS="https://rpc.sifchain.finance:443,https://rpc.sifchain.finance:443"
export SIFNODED_STATESYNC_TRUST_HEIGHT=$BLOCK_HEIGHT
export SIFNODED_STATESYNC_TRUST_HASH=$TRUST_HASH
export SIFNODED_P2P_PERSISTENT_PEERS="71667eb24e7ad01925d9c75689e0b3e802faeca2@3.250.251.12:26656"
export SIFNODED_GRPC_WEB_ADDRESS=127.0.0.1:2113

sifnoded start --x-crisis-skip-assert-invariants --p2p.laddr tcp://0.0.0.0:2110 --rpc.laddr tcp://127.0.0.1:2111 --grpc.address 127.0.0.1:2112 
