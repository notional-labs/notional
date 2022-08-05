#  MAINNET `bitcanna-1` Upgrade
## v.1.4.1 codename `strangeBuddheads`

We've developed a new version with some updates (regarding SDK, Tendermint & IBC/go) called `strangeBuddheads` to improve the security and stability in our chain.
* Cosmos SDK v.0.45.7 
* Tendermint v.0.34.20
* IBC/go v.3.1.1
* IAVL v.0.19.1

> Note: When using Cosmos SDK 0.45.7, the restart of the binary **could take up to 15 minutes** in order to build the fast cache of IAVL. The fast cache will provide a performance improvement over 0.45.6.

Additionally, we are including the SDK `authz` module which introduces the "Restake" functionality and some other on-chain functionality such as "Grants". 

Also we have fixed the `bcna` module & we have added a new extra field for "Supply Chain" tracking. 

We will upgrade to `strangeBuddheads` version by governance by forking the current chain. 


## Governance proposal: halt-height `XXXXXXXX`

https://explorer.bitcanna.io/proposals/4

## Attended (manually) upgrade.

This section of the guide shows how to perform a **manual** update of the binaries after the governance proposal has been approved for the chain update. 


1. Stop your bcnad service **after you see this** in your logs `ERR UPGRADE "strangeBuddheads" NEEDED at height: XXXXXXXX`
```
sudo service bcnad stop
```
2. Download the binary (2.1) or compile it from the source (2.2).

    2.1. If you want to build the binary from the source, detailed instructions can be found in this [DOC](https://github.com/BitCannaGlobal/bcna/blob/main/1.install-compile.md) of our GitHub:
    ```
    git clone https://github.com/BitCannaGlobal/bcna.git
    cd bcna && git checkout  v1.4.1
    make build
    ```
    This will produce a `bcnad` file in the `build` folder. Move to the current binary path:
    ```
    sudo mv build/bcnad $(which bcnad)   #copy&paste don't replace anything
    ```
   *You can jump to step 3.*
    
    2.2 If you want to downoad the compiled binary:
    ```
    cd ~
    bcna_linux_amd64.tar.gz #delete old file if exist
    wget -nc https://github.com/BitCannaGlobal/bcna/releases/download/v1.4.1/bcna_linux_amd64.tar.gz
    ```
    2.2.1. Check the sha256sum for the downloaded file. 
    ```
    sha256sum bcna_linux_amd64.tar.gz
    ```
    It must return: `305ff854cc892e5bd4de6f2b3d8bd745525878244f78478be6c579d56316fe9d`

    2.2.2. Verify that the version is `1.4.1`
    ```
    rm -f ./bcnad #delete old file if exist
    tar zxvf  bcna_linux_amd64.tar.gz
    rm bcna_linux_amd64.tar.gz
    chmod +x bcnad
    ./bcnad version
    ```
    2.2.3. Move the new binary to your machine's PATH and overwrite the previous version
    ```
    sudo mv bcnad $(which bcnad)   #copy&paste don't replace anything
    ```
    If you know the exact destination you could also run: 
    ```
    sudo mv bcnad /usr/local/bin/ #or wherever you have it
    ```
3. Start the bcnad service
    ```
    sudo service bcnad start
    ```
4. Ensure that everything is OK by checking the logs 
    ```
    sudo journalctl -u bcnad -f
    ```

## Unattended (Cosmovisor) upgrade. Recommended.
Cosmovisor is an hypervisor that check the logs and replaces binaries when the upgrades happens. 
It run as service and replaces the `bcnad` service. A complete guide to config Cosmovisor with BitCanna chain is [here](https://github.com/BitCannaGlobal/bcna/blob/main/2.3.cosmovisor.md)

### Step 1. Setup Cosmovisor folder
> Attention! There  is a new official release of Cosmovisor ([check here v.1.2](https://github.com/cosmos/cosmos-sdk/releases/tag/cosmovisor%2Fv1.2.0))
> If you need instructions to upgrade check this [doc](https://github.com/BitCannaGlobal/bcna/blob/main/2.3.cosmovisor.md). 

1. Create a new directory to store the new binary:
```
mkdir -p ${HOME}/.bcna/cosmovisor/upgrades/strangeBuddheads/bin
```

2. Download the binary (2.1) or compile it from the source (2.2).

    2.1. If you want to build the binary from the source, detailed instructions can be found in this [DOC](https://github.com/BitCannaGlobal/bcna/blob/main/1.install-compile.md) of our GitHub:
    ```
    git clone https://github.com/BitCannaGlobal/bcna.git
    cd bcna && git checkout  v1.4.1
    make build
    ```
    This will produce a `bcnad` file in the `build` folder. Move to the NEW binary path:
    ```
    sudo mv build/bcnad ${HOME}/.bcna/cosmovisor/upgrades/strangeBuddheads/bin   #copy&paste don't replace anything
    ```
   *You can jump to step 3.*
    
    2.2. If you want to dowload the compiled binary (instead of compiling by yourself):
    ```
    cd ~
    bcna_linux_amd64.tar.gz #delete old file if exist
    wget -nc https://github.com/BitCannaGlobal/bcna/releases/download/v1.4.1/bcna_linux_amd64.tar.gz
    ```
    2.2.1 Check the sha256sum for the downloaded file. 
    ```
    sha256sum bcna_linux_amd64.tar.gz
    ```
    It must return: `305ff854cc892e5bd4de6f2b3d8bd745525878244f78478be6c579d56316fe9d`

    2.2.2 Verify that the version is `1.4.1`
    ```
    rm -f ./bcnad #delete old file if exist
    tar zxvf  bcna_linux_amd64.tar.gz
    rm bcna_linux_amd64.tar.gz
    chmod +x bcnad
    ./bcnad version
    ```
    2.2.3 Move the newly downloaded/built binary to the upgrades directory.
    ```
    mv ./bcnad ${HOME}/.bcna/cosmovisor/upgrades/strangeBuddheads/bin/
    ```
3. If you want to be sure that the proper binary is in the proper folder:
```
${HOME}/.bcna/cosmovisor/upgrades/strangeBuddheads/bin/bcnad version
    --> should reply: 1.4.1
```


## EXTRA OPTIONAL STEP 1: <br>Install Cosmovisor v1.2
If you want to update Cosmovisor from v1.1 to v1.2 follow the next instructions, for a new installation and setup of BCNA params check this [doc](https://github.com/BitCannaGlobal/bcna/blob/main/2.3.cosmovisor.md).

```
wget https://github.com/cosmos/cosmos-sdk/releases/download/cosmovisor%2Fv1.2.0/cosmovisor-v1.2.0-linux-amd64.tar.gz
tar zxvf cosmovisor-v1.2.0-linux-amd64.tar.gz 
rm *.md && rm cosmovisor-v1.2.0-linux-amd64.tar.gz
sudo mv cosmovisor $(which cosmovisor)
```



## EXTRA OPTIONAL STEP 2: <br>Review the service file if you are running Cosmovisor v1.2 

Cosmovisor v1.2 introduces several changes and improvements. 

* It's mandatory to execute all the commands with `run` prefixe (`cosmovisor run status`)
    That implies that you need to modify the service file if it doesn't include the `run` command in the Daemon Start command.
* Cosmovisor v1.2 includes a new option (env: ` `to delay the start of the new binary and make the automated backup. It prevents to start again without kill the previous daemon and make a bad automated backup (if is set), so we should configure this new feature to introduce 30 seconds of delay.

**Let's review this two tips:**


* With Cosmovisor service 

    1. Edit the file
    ```
    sudo nano /lib/systemd/system/cosmovisor.service
    ```
    Replace `cosmovisor start` by `cosmovisor run start` line and save it:
    ```
    ExecStart=/usr/local/bin/cosmovisor run start
    ```
    Add this options if you want an automated backup of chain before the upgrade takes action.
    ```
    Environment=UNSAFE_SKIP_BACKUP=false
    Environment=DAEMON_RESTART_DELAY=30s
    ```
    2. Reload service file and start Cosmovisor
    ```
    sudo systemctl daemon-reload
    sudo service cosmovisor restart 
    sudo journalctl -fu cosmovisor
    ```

## Simple test with Cosmovisor after the upgrade

If you want to know if Cosmovisor handles the right binary file exec:
* `sudo service cosmovisor status`
* `cosmovisor versin`

And check the path of the binary file.    

###### tags: "bitcanna", "mainnet", "upgrade"
