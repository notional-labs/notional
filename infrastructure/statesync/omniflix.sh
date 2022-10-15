set -uxe

# Set Golang environment variables.
export GOPATH=~/go
export PATH=$PATH:~/go/bin

# NOTE: you must get the correct mainnet binary version 

omniflixhubd init test --chain-id omniflixhub-1

# Get Genesis
wget https://snapshot.notional.ventures/omniflixhub/genesis.json -O ~/.omniflixhubd/config/genesis.json

wget -O ~/.omniflixhubd/config/adrbook.json https://snapshot.notional.ventures/omniflixhub/addrbook.json

# Get "trust_hash" and "trust_height".
INTERVAL=1000
LATEST_HEIGHT=$(curl -s https://rpc-omniflixhub-ia.cosmosia.notional.ventures/block | jq -r .result.block.header.height)
BLOCK_HEIGHT=$(($LATEST_HEIGHT-$INTERVAL)) 
TRUST_HASH=$(curl -s "https://rpc-omniflixhub-ia.cosmosia.notional.ventures/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)

# Print out block and transaction hash from which to sync state.
echo "trust_height: $BLOCK_HEIGHT"
echo "trust_hash: $TRUST_HASH"

# Export state sync variables.
export OMNIFLIXHUBD_STATESYNC_ENABLE=true
export OMNIFLIXHUBD_P2P_MAX_NUM_INBOUND_PEERS=200
export OMNIFLIXHUBD_P2P_MAX_NUM_OUTBOUND_PEERS=50
export OMNIFLIXHUBD_STATESYNC_RPC_SERVERS="https://rpc-omniflixhub-ia.cosmosia.notional.ventures:443,https://rpc-omniflixhub-ia.cosmosia.notional.ventures:443"
export OMNIFLIXHUBD_STATESYNC_TRUST_HEIGHT=$BLOCK_HEIGHT
export OMNIFLIXHUBD_STATESYNC_TRUST_HASH=$TRUST_HASH

# Fetch and set list of seeds from chain registry.
export OMNIFLIXHUBD_P2P_SEEDS=$(curl -s https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/chain.json | jq -r '[foreach .peers.seeds[] as $item (""; "\($item.id)@\($item.address)")] | join(",")')

# Start chain.
# Add the flag --db_backend=pebbledb if you want to use pebble.

omniflixhubd start --x-crisis-skip-assert-invariants
