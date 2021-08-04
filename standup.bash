#!/bin/bash

pacman -Syyu aria2 atop autoconf automake base binutils bison bmon btrfs-progs clang cronie cryptsetup docker dstat fakeroot flex gcc git go gptfdisk groff grub haveged htop iftop iptraf-ng jq llvm lvm2 m4 make mdadm neovim net-tools nethogs openssh patch pkgconf python rsync rustup screen sudo texinfo unzip vi vim vnstat wget which xfsprogs

echo "root hard nofile 150000" >> /etc/security/limits.conf
echo "root soft nofile 150000" >> /etc/security/limits.conf
echo "* hard nofile  150000" >> /etc/security/limits.conf
echo "* soft nofile 150000" >> /etc/security/limits.conf

git clone https://github.com/faddat/notional
cd notional
cp .bash_profile ~/
source ~/.bash_profile
bash standup.bash


# Install Osmosis
git clone https://github.com/osmosis-labs/osmosis
cd osmosis
git checkout v1.0.2
make install
osmosisd init notional
wget -O ~/.osmosisd/config/genesis.json https://github.com/osmosis-labs/networks/raw/main/osmosis-1/genesis.json


# Install sif
wget https://github.com/Sifchain/sifnode/releases/download/mainnet-0.9.0/sifnoded-mainnet-0.9.0-linux-amd64.zip
unzip sifnoded-mainnet-0.9.0-linux-amd64.zip
mv sifnoded /usr/bin
sifnoded init notional
wget https://github.com/Sifchain/networks/raw/master/mainnet/sifchain-1/genesis.json.gz
gunzip -k genesis.json.gz
mv genesis.json ~/.sifnoded/config

# Install Akash
wget https://github.com/ovrclk/akash/releases/download/v0.12.1/akash_0.12.1_linux_amd64.zip
unzip akash_0.12.1_linux_amd64.zip
mv akash_0.12.1_linux_amd64/akash ~/go/bin
akash init notional
cd ~/.akash/data
aria2c -x5 http://135.181.60.250/akash/akashnet-2_2021-07-29.tar
tar xf akashnet-2_2021-07-29.tar
wget -O ~/.akash/config/genesis.json https://github.com/ovrclk/net/raw/master/mainnet/genesis.json

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


# Install Regen
git clone https://github.com/regen-network/regen-ledger
cd regen-ledger
git checkout v1.0.0
make install
regen init notional --chain-id regen-1
curl http://104.131.169.70:26657/genesis | jq .result.genesis > ~/.regen/config/genesis.json





