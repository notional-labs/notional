#!/bin/bash

pacman -Syyu aria2 atop autoconf automake base binutils bison bmon btrfs-progs clang cronie cryptsetup docker dstat fakeroot flex gcc git go gptfdisk groff grub haveged htop iftop iptraf-ng jq llvm lvm2 m4 make mdadm neovim net-tools nethogs openssh patch pkgconf python rsync rustup screen sudo texinfo unzip vi vim vnstat wget which xfsprogs

echo "root hard nofile 150000" >> /etc/security/limits.conf
echo "root soft nofile 150000" >> /etc/security/limits.conf
echo "* hard nofile  150000" >> /etc/security/limits.conf
echo "* soft nofile 150000" >> /etc/security/limits.conf

cd ~
#u can't just straight up delete their bash_profile and replace it with yours -khanh
# yes you can.  it is designed to run on a blank server that runs arch linux, and to produce a deterministic result -jacob
cp .bash_profile ~/
source ~/.bash_profile
# this will create loop
# bash standup.bash
# great point about the loop though.  It happened to Josepha from Chandra.





