# Cosmovisor setup guide for bitcanna-1

`Cosmovisor` is a small process manager for Cosmos SDK application binaries that monitors the governance module for incoming chain upgrade proposals. If it sees a proposal that gets approved, it stops the current binary, switch from the old binary to the new one, and finally restarts the node with the new binary.

This guide will explain how to install Cosmovisor and prepare for a future chain update. A full guide about Cosmovisor can be found [here](https://github.com/cosmos/cosmos-sdk/tree/master/cosmovisor).
 

## Step 1. Download Cosmovisor
You can build Cosmovisor from the source or download it from our GitHub repository. Detailed instruction to understand how it works [here](https://github.com/cosmos/cosmos-sdk/tree/master/cosmovisor#cosmosvisor).

### A) Download Cosmovisor

To download Cosmovisor without having to compile it yourself, run the following command:
```
cd ~
wget https://github.com/cosmos/cosmos-sdk/releases/download/cosmovisor%2Fv1.1.0/cosmovisor-v1.1.0-linux-amd64.tar.gz
```
Check sha256 sum
```
sha256sum cosmovisor-v1.1.0-linux-amd64.tar.gz
```
It must return: `9a6eb658404f28a3607a3d531821ca4a6501749aa483698847155f362e66859d`

Unzip the file, give it the correct permissions and move it to  your machine's PATH
```
tar -xf cosmovisor-v1.1.0-linux-amd64.tar.gz
rm cosmovisor-v1.1.0-linux-amd64.tar.gz
chmod +x cosmovisor
sudo mv cosmovisor /usr/local/bin
```
### B) Build from source 

To compile Cosmovisor from the source, you need to have `go` installed on your system. A full guide to install `go` can be found [here](https://golangdocs.com/install-go-linux).

Try this to install Cosmovisor from the source by pulling the cosmos-sdk repository, switch to the correct version and build as follows:
```
git clone https://github.com/cosmos/cosmos-sdk.git
cd cosmos-sdk
git checkout cosmovisor/v1.1.0
make cosmovisor
```
The previous action builds Cosmovisor in the `/cosmovisor` directory, now let's move it to the system's PATH:
```
sudo mv cosmovisor/cosmovisor /usr/local/bin
```
## Step 2. Setup Cosmovisor

1) Create new directories
```
mkdir -p ${HOME}/.bcna/cosmovisor/genesis/bin
mkdir -p ${HOME}/.bcna/cosmovisor/upgrades/ruderalis/bin
```
2) Copy the current BitCanna `v1.2`  binary to Cosmovisor's genesis folder.
```
#copy and paste literally, do not change anything!
cp $(which bcnad) ${HOME}/.bcna/cosmovisor/genesis/bin/
```

3) Setup the current version link for Cosmovisor.
```
ln -s -T ${HOME}/.bcna/cosmovisor/genesis ${HOME}/.bcna/cosmovisor/current
```

4) To check if everything is OK, run:
```
ls .bcna/cosmovisor/ -lh
```
The output should look like this:
```
total 8.0K
lrwxrwxrwx 1 user user   35 Jan 14 20:16 current -> /home/user/.bcna/cosmovisor/genesis
drwxrwxr-x 3 user user 4.0K Jan 14 20:09 genesis
drwxrwxr-x 4 user user 4.0K Jan 14 20:15 upgrades
```

5) Create a systemd service for Cosmovisor. Simply copy and paste everything to create the service unit.
```
echo "[Unit]
Description=Cosmovisor BitCanna Service
After=network-online.target
[Service]
User=${USER}
Environment=DAEMON_NAME=bcnad
Environment=DAEMON_RESTART_AFTER_UPGRADE=true
Environment=DAEMON_HOME=${HOME}/.bcna
# Optional: Environment=UNSAFE_SKIP_BACKUP=true
ExecStart=$(which cosmovisor) run start
Restart=always
RestartSec=3
LimitNOFILE=4096
[Install]
WantedBy=multi-user.target
" >cosmovisor.service
```

6) Change **bcnad** service for `cosmovisor` service.
```
sudo mv cosmovisor.service /lib/systemd/system/
sudo systemctl daemon-reload
sudo systemctl stop bcnad.service && sudo systemctl disable bcnad.service 
sudo systemctl enable cosmovisor.service && sudo systemctl start cosmovisor.service
```

7) Check the logs to see if everything is OK. (ctrl + C to stop).
```
sudo journalctl -u cosmovisor -f
```

## Step 3. Finish the installation
If everything is OK, you can delete the old binary from the PATH and let Cosmovisor take control of the binaries. Instead of **bcnad** you must use `cosmosvisor run` in your commands, for example: `cosmovisor run status`
To do this, make the following changes:

1) Add variables to the end of the **.profile** file.
```
nano $HOME/.profile
```
Add to the end of the file:
```
export DAEMON_NAME=bcnad
export DAEMON_RESTART_AFTER_UPGRADE=true
export DAEMON_HOME=${HOME}/.bcna

#add this to continue to use bcnad for commands, this is optional
PATH="${HOME}/.bcna/cosmovisor/current/bin:$PATH" 
```

Optionally you can add a different folder to make the backup during the upgrade, setting this param:
```
export DAEMON_DATA_BACKUP_DIR=${HOME}/your_chain_backup
```

2) Reload the config of the **.profile** file.
```
source .profile
```
3) Now let's try Cosmovisor.

* Show Cosmovisor version: `cosmovisor run version`  Will be v.1.3.1 after the upgrade
```
 cosmovisor run version
12:14PM INF running app args=["version"] module=cosmovisor path=/home/testnet/.bcna/cosmovisor/genesis/bin/bcnad
12:14PM ERR failed to read error="lstat /home/testnet/.bcna/cosmovisor/current/upgrade-info.json: no such file or directory" filename=/home/testnet/.bcna/cosmovisor/current/upgrade-info.json module=cosmovisor
1.2
```
* Show BitCanna version: `bcnad version` Must show the same version as above
* Show Cosmovisor sync info: `cosmovisor run status`  Must show sync info

4) If the previous test was OK, you can delete the old binary.
```
sudo rm /usr/local/bin/bcnad  #or wherever you have it
```

## Step 4. Prepare for a future chain update
This guide shows how to download the binary. If you want to build the binary from the source, detailed instructions can be found in the [README](https://github.com/BitCannaGlobal/bcna/blob/main/README.md) of our GitHub.

1) Download the binary.
```
cd ~
rm -rf bcnad
wget -nc https://github.com/BitCannaGlobal/bcna/releases/download/v.1.3.1/bcnad
```
2) Check the sha256sum.
```
sha256sum ./bcnad
```
It must return: `ad6784e945135454efc436d22a7661db36bc6a396e7d9cdb7572c4d8d5ccef3f`

3) Verify that the version is:`.1.3.1`
```
chmod +x bcnad
./bcnad version
```
4) Move the newly built binary to the upgrades directory.
```
mv ./bcnad ${HOME}/.bcna/cosmovisor/upgrades/ruderalis/bin/
```
> If you build the binary from the code source move it to the same folder


## Reminder
In the future, you must use the `cosmovisor` command instead of the **bcnad** command if you want to perform service related commands.
For example: 

* Start the service: `sudo service cosmovisor start`

* Stop the service: `sudo service cosmovisor stop`

* Restart the service: `sudo service cosmovisor restart`

* Check the logs: `sudo journalctl -u cosmovisor -f`
