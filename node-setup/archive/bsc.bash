   wget https://github.com/binance-chain/bsc/releases/download/v1.1.2/geth_linux
   mv geth_linux /usr/bin/bsc
   chmod +x /usr/bin/bsc
   wget https://github.com/binance-chain/bsc/releases/download/v1.1.2/mainnet.zip
   unzip mainnet.zip
   bsc init genesis.json
   bsc --verbosity 3 --config config.toml --syncmode snap --gcmode archive --nousb --cache=40000 --maxpeers=4000 --http --http.addr 0.0.0.0 --http.port 8545 --http.corsdomain "*" --http.vhosts "*" --http.api "rpc, debug, admin, eth, net, web3, personal, txpool" --ws --ws.addr 0.0.0.0 --ws.port 8546 --ws.origins "*" --ws.api "rpc, debug, admin, eth, net, web3, personal, txpool"