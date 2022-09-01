#!/bin/bash

# make sure go is on path cause we will compile some go
export GOPATH=~/go
export PATH=$PATH:~/go/bin
export PATH="$HOME/.cargo/bin:$PATH"

# Add go and rust stuff to bash profile
echo 'GOPATH=~/go' >> ~/.bash_profile
echo 'PATH=$PATH:~/go/bin' >> ~/.bash_profile
echo 'PATH=$PATH:~/.cargo/bin' >> ~/.bash_profile

# scroll up when using screen
echo 'termcapinfo xterm* ti@:te@' > ~/.screenrc



# Keys for arch packages
pacman -Syyu archlinux-keyring


# Utilities needed for smooth nodes
pacman -Syyu aria2 atop autoconf automake base binutils bison bmon btrfs-progs btop clang cronie cryptsetup docker dstat fakeroot flex gcc git go gptfdisk groff grub haveged htop iftop iptraf-ng jq llvm lvm2 m4 make mdadm neovim net-tools nethogs openssh patch pkgconf python rsync rustup screen sudo texinfo unzip vi vim vnstat wget which xfsprogs hddtemp python-setuptools npm python-bottle python-docker python-matplotlib python-netifaces python-zeroconf python-pystache time nload nmon glances gtop bwm-ng bpytop duf go-ipfs fish pigz zerotier-one sysstat github-cli pm2 iotop nano git-lfs



# IPFS cluster tooling
# pigz -r --fast data  #pigz parallel compression
# IPFS only needs to use the server profile at hetzner.
sysctl -w net.core.rmem_max=2500000



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





