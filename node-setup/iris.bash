# Install Iris
git clone https://github.com/irisnet/irishub
cd irishub
make install
iris init notional
curl -o ~/.iris/config/genesis.json https://raw.githubusercontent.com/irisnet/mainnet/master/config/genesis.json
curl -o ~/.iris/config/config.toml https://raw.githubusercontent.com/irisnet/mainnet/master/config/config.toml
cd ~/.iris
aria2c -x5 https://data.bitcat365.com/irisnet/data.tar.lz4
lz4 -d  data.tar.lz4  | tar xzf -       