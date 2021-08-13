# Hardware Requirements
Here are the minimal hardware configs required for running a validator/sentry node

* 8GB RAM
* 4vCPUs
* 200GB Disk space

# Software Requirements
Install deps
``` 
sudo apt-get install build-essential jq
```

# Compile instructions: install GoLang

Install Go 1.16.x 
The official instructions can be found here: https://golang.org/doc/install

First remove any existing old Go installation as root
```
sudo rm -rf /usr/local/go
``` 

Download the software:
```
curl https://dl.google.com/go/go1.16.6.linux-amd64.tar.gz | sudo tar -C/usr/local -zxvf -
```
Update environment variables to include go (copy everything and paste)
```
cat <<'EOF' >>$HOME/.profile
export GOROOT=/usr/local/go
export GOPATH=$HOME/go
export GO111MODULE=on
export GOBIN=$HOME/go/bin
export PATH=$PATH:/usr/local/go/bin:$GOBIN
EOF
source $HOME/.profile
```
To verify that Go is installed:
``` 
go version
```
Should return go version go1.16.6 linux/amd64

# Compile BCNAD source code by yourself
## Download source code and compile
```
git clone https://github.com/BitCannaGlobal/bcna.git
cd bcna
git checkout v0.2-beta
make build   #it build the binary in build/ folder
```
To know the version:
```
build/bcnad version
```
The output must be `0.2-beta`

Is the versión match, now you have two options
* Move the binary to the /usr/local/bin path with: `sudo mv build/bcnad /usr/local/bin/`
* Compile and install the binary in the $GOPATH path:  `make install`
* If you are using Cosmovisor you need to perform extra steps to move the binary to the proper Cosmovisor folder.

# Cosmosvisor Quick Start
Cosmovisor is a small process manager for Cosmos SDK binaries that monitors the governance module via stdout for incoming chain upgrade proposals. If it sees a proposal that gets approved, it can be run manually or automatically to download the new binary, stop the current binary, run the migration script, replace the old node binary with the new one, and finally restart the node with the new genesis file.

## Installation
To install cosmovisor, run the following command (it takes some minutes):
```
go get github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor
```
* [more info about Cosmovisor](https://github.com/cosmos/cosmos-sdk/tree/master/cosmovisor#readme)
* [how BitCanna implements Cosmovisor](https://github.com/BitCannaGlobal/testnet-bcna-cosmos/blob/main/instructions/invitational-testnet/stage4/task4.4.md)
