# Install Akash
cd ~
wget https://github.com/ovrclk/akash/releases/download/v0.12.1/akash_0.12.1_linux_amd64.zip
unzip akash_0.12.1_linux_amd64.zip
mv akash_0.12.1_linux_amd64/akash ~/go/bin
akash init notional
cd ~/.akash/data
aria2c -x5 http://135.181.60.250/akash/akashnet-2_2021-07-29.tar
tar xf akashnet-2_2021-07-29.tar
wget -O ~/.akash/config/genesis.json https://github.com/ovrclk/net/raw/master/mainnet/genesis.json
