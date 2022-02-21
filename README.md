# Hardware Requirements
Here are the minimal hardware configs required for running a validator/sentry node

* 8GB RAM
* 4vCPUs
* 200GB - 300GB Disk space per year

# Software Requirements
Install deps
``` 
sudo apt-get install build-essential jq
```

# Looking for easy instructions on how to deploy a node/validator?
https://github.com/BitCannaGlobal/bcna/blob/main/instructions.md


# Compile instructions: install GoLang

Install Go 1.17.x 
The official instructions can be found here: https://golang.org/doc/install

First remove any existing old Go installation as root
```
sudo rm -rf /usr/local/go
``` 

Download the software:
```
curl https://dl.google.com/go/go1.17.7.linux-amd64.tar.gz | sudo tar -C/usr/local -zxvf -
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
Should return go version go1.17.7 linux/amd64

# Compile BCNAD source code by yourself
## Download source code and compile
```
git clone https://github.com/BitCannaGlobal/bcna.git
cd bcna
git checkout v1.3.1
make build   #it build the binary in build/ folder
```
To know the version:
```
build/bcnad version
```
The output must be `1.3.1`

Is the versión match, now you have two options
* Move the binary to the /usr/local/bin path with: `sudo mv build/bcnad /usr/local/bin/`
* Compile and install the binary in the $GOPATH path:  `make install`
* If you are using Cosmovisor you need to perform extra steps to move the binary to the proper Cosmovisor folder.

# Upgrade proposal: RUDERALIS upgrade.
## Upgrade software to v1.3.1 on Feb 24th around 15:00h UTC.  **Halt-height: xxxxxxx**

If BitCanna Community agrees with the governance proposal to approve an upgrade of the `bcnad` software from version `v.1.2` to `v.1.3.1` on 02/24/2022 at block **height: xxxxxxx** (~15:00 UTC) chain will be halted and the new binary will replace the old.

This upgrade, called "Ruderalis" will bump:
- Cosmos SDK from `v.0.44.2` to `v.0.45.1`
- Tendermint from `v.0.34.13` to `v.0.34.15` 
- ibc/go from `v.1.2.0` to `v.2.0.3`

This includes the latest features and security patches. See the full changelog [here](https://github.com/BitCannaGlobal/bcna/releases/tag/v.1.3.1)

### There are two methods to upgrade to the newest software version.

You can upgrade manually by stopping the current `bcnad`service and replace it with the new version when the approved halt-height is reached and the chain stops, or you can automate it with Cosmovisor. 
* Detailed instructions for a **manual update** can be found in [this guide](https://github.com/BitCannaGlobal/bcna/blob/main/manual_update.md)

* Detailed instructions for setting up **Cosmovisor** can be found in [this guide](https://github.com/BitCannaGlobal/bcna/blob/main/cosmovisor_config.md)
