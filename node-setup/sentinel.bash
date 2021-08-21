# Install Sentinel
git clone https://github.com/sentinel-official/hub
cd hub
make install
wget https://github.com/sentinel-official/networks/raw/main/sentinelhub-2/genesis.zip
unzip genesis.zip
mv genesis.json ~/.sentinelhub/config/
cd ~/.sentinelhub/data/
aria2c -x5 http://135.181.60.250:8083/sentinel/sentinelhub-2_2021-08-01.tar
tar xf sentinelhub-2_2021-08-01.tar