# Install sif
wget https://github.com/Sifchain/sifnode/releases/download/mainnet-0.9.0/sifnoded-mainnet-0.9.0-linux-amd64.zip
unzip sifnoded-mainnet-0.9.0-linux-amd64.zip
mv sifnoded /usr/bin
sifnoded init notional
wget https://github.com/Sifchain/networks/raw/master/mainnet/sifchain-1/genesis.json.gz
gunzip -k genesis.json.gz
mv genesis.json ~/.sifnoded/config