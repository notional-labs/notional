#!/bin/bash

# make sure go is on path cause we will compile some go
export GOPATH=/root/go
export PATH=$PATH:/root/go/bin

# Add go and rust stuff to bash profile
echo 'GOPATH=/root/go' >> /root/.bash_profile
echo 'GOPATH=/root/go' >> /root/.bashrc
echo 'PATH=$PATH:/root/go/bin' >> /root/.bash_profile
echo 'PATH=$PATH:/root/go/bin' >> /root/.bashrc


# Utilities needed for smooth nodes
pacman -Syyu aria2 atop autoconf automake base binutils bison bmon btrfs-progs btop clang cronie cryptsetup docker dstat fakeroot flex gcc git go gptfdisk groff grub haveged htop iftop iptraf-ng jq llvm lvm2 m4 make mdadm neovim net-tools nethogs openssh patch pkgconf python rsync rustup screen sudo texinfo unzip vi vim vnstat wget which xfsprogs hddtemp python-setuptools npm python-bottle python-docker python-matplotlib python-netifaces python-zeroconf python-pystache time nload nmon glances gtop bwm-ng bpytop duf go-ipfs fish pigz zerotier-one sysstat github-cli pm2 iotop nano git-lfs

# SystemD Units
systemctl enable systemd-resolved
systemctl start systemd-resolved
systemctl enable systemd-timesyncd
systemctl start systemd-timesyncd
systemctl enable vnstat
systemctl start vnstat


# Open File Limits
echo "root hard nofile 150000" >> /etc/security/limits.conf
echo "root soft nofile 150000" >> /etc/security/limits.conf
echo "* hard nofile  150000" >> /etc/security/limits.conf
echo "* soft nofile 150000" >> /etc/security/limits.conf
