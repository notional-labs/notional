#!/bin/bash

export GOPATH=/root/go
export PATH=$PATH:/root/go/bin

# Add go and rust stuff to bash profile
echo 'GOPATH=/root/go' >> ~/.bash_profile
echo 'GOPATH=/root/go' >> ~/.bashrc
echo 'PATH=$PATH:/root/go/bin' >> ~/.bash_profile
echo 'PATH=$PATH:/root/go/bin' >> ~/.bashrc
echo 'GOROOT_BOOTSTRAP=$GOROOT' >> ~/.bashrc

bash < <(curl -s -S -L https://raw.githubusercontent.com/moovweb/gvm/master/binscripts/gvm-installer)
source ~/.bashrc
gvm install go1.4 -B
gvm use go1.4
gvm install go1.17.13
gvm use go1.17.13
gvm install go1.21
gvm use go1.21
gvm uninstall go1.17.13 
gvm uninstall go1.4

echo `gvm use go1.21` >> ~/.bashrc

source ~/.bash_profile
# Utilities needed for smooth nodes
pacman -Syyu aria2 atop autoconf tree neofetch automake base binutils bison bmon btrfs-progs btop clang cronie cryptsetup docker dstat fakeroot flex gcc git gptfdisk groff grub haveged htop iftop iptraf-ng jq llvm lvm2 m4 make mdadm neovim net-tools nethogs openssh patch pkgconf python rsync rustup screen sudo texinfo unzip vi vim vnstat wget which xfsprogs hddtemp python-setuptools npm python-bottle python-docker python-matplotlib python-netifaces python-zeroconf python-pystache time nload nmon glances gtop bwm-ng bpytop duf go-ipfs fish pigz zerotier-one sysstat github-cli pm2 iotop nano git-lfs
