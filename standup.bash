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
