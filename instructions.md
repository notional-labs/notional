# MAINNET: Setup up your validator and join *bitcanna-1*
> IMPORTANT NOTE: If you participated in the previous BitCanna Testnets, you must go to the end of the document to find specific instructions to join.

**bcnad** is a blockchain application built using Cosmos SDK v.0.44.0 and Tendermint v.0.34.13.


You can run the validator software using the binary or compiling it by yourself, you can choose between _Step 0a_ or _Step 0b_ and continue at _Step 1_.

* Before you start, you might want to ensure your system is up to date. Besides, you can install a utility named `jq` to read and navigate in JSON files and outputs.

    ```
    sudo apt-get update
    sudo apt-get upgrade -y
    sudo apt-get install -y build-essential curl wget jq
    ```
* Increasing the default open files limit.
If we don't raise this value, nodes will crash once the network grows large enough.
    ```
    sudo su -c "echo 'fs.file-max = 65536' >> /etc/sysctl.conf"
    sudo sysctl -p
    ```

## Step 0A - Run a fullnode / validator using the binaries
By downloading the binary we avoid compiling the source code.
* Download the latest version (v1.0) from Github:
    ```
    cd $HOME
    wget https://github.com/BitCannaGlobal/bcna/releases/download/v1.0/bcnad
    chmod +x bcnad
    sudo mv bcnad /usr/local/bin/
    ```
* Check for the right version (1.0): 
    ```
    bcnad version
       >>> response: 1.0
    ```
**NOTE:** If you have downloaded the binary avoid _Step 0B_ and go to _Step_ 1
## Step 0B - Run a fullnode / validator by compiling source code (not recommended for new users)

The updated instructions are always in our GitHub Readme page, click on this [link](https://github.com/BitCannaGlobal/bcna) to go there. 

## Step 1 - Setting up the connection
Instructions for setting up the connection with the BitCanna Public Testnet Blockchain
1. **Set the chain-id parameter** 
```
    bcnad config chain-id bitcanna-1
```
2.  **Create a wallet**:
You may create a wallet with one or more keys (addresses) using `bcnad`; you can choose a name of your own liking (we strongly advice you use one word)
```
    bcnad keys add MyFirstAddress

      name: MyFirstAddress
      type: local
      address: bcna14shzreglay98us0hep44hhhuy7dm43snv38plr
      pubkey: bcnapub1addwnpepqvtpzyugupvcu773rzdcvhele6e22txy2zr235dn7uf8t2mlqcarcyx2gg9
      mnemonic: ""
      threshold: 0
      pubkeys: []


     Important write this mnemonic phrase in a safe place.
    It is the only way to recover your account if you ever forget your password.

    deposit daring slim glide spend dolphin expire shadow cluster vivid orphan work pond section client friend yellow west hamster torch settle island opinion gloom
```
   


Your address will look something similar like this: `bcna14shzreglay98us0hep44hhhuy7dm43snv38plr`


3. **Initialize the folders:** change **_Moniker_** by your validator name (use quotes for two or more separated words *"Royal Queen Seeds"*)
    ```
    bcnad init Moniker --chain-id bitcanna-1
    ```
    This will create a `$HOME/.bcna` folder
4. **Download the Genesis** `genesis.json` file
    ```
    cd $HOME
    curl -s https://raw.githubusercontent.com/BitCannaGlobal/bcna/main/genesis.json > ~/.bcna/config/genesis.json
    ```
   Ensure you have the correct file. Run the SHA256SUM test:
    ```
     sha256sum $HOME/.bcna/config/genesis.json
     <output> cd7449a199e71c400778f894abb00874badda572ac5443b7ec48bb0aad052f29
    ```
5. **Add to _config.toml_ file: server SEEDs:**

    ```
    sed -E -i 's/seeds = \".*\"/seeds = \"d6aa4c9f3ccecb0cc52109a95962b4618d69dd3f@seed1.bitcanna.io:26656,23671067d0fd40aec523290585c7d8e91034a771@seed2.bitcanna.io:26656\"/' $HOME/.bcna/config/config.toml
    ```
6. You can **set the minimum gas prices** for transactions to be accepted into your node’s mempool. This sets a lower bound on gas prices, preventing spam.
    ``` 
    sed -E -i 's/minimum-gas-prices = \".*\"/minimum-gas-prices = \"0.001ubcna\"/' $HOME/.bcna/config/app.toml
    ```

7. **Open the P2P port (26656 by default)**

    ```sudo ufw allow 26656```

8. Test the connection (**CTRL + C to stop**)

    `bcnad start --log_level info`
    ```
    3:31PM INF Committed state appHash=77D16BED3F109A4A05A971C92602029569E049DFC1DC128CFF5CCAE3158F4B1B height=3886 module=state txs=0
    3:31PM INF Indexed block height=3886 module=txindex
    3:31PM INF minted coins from module account amount=1034628bcna from=mint module=x/bank
    3:31PM INF Executed block height=3887 invalidTxs=0 module=state validTxs=0
    3:31PM INF commit synced commit=436F6D6D697449447B5B38332031333820373720313731203135362032333220313431203435203137332037372031352031363020373120393720393520352031393020313836203733203131342034322031313620313230203536203338203230203337203437203231392032353220343920385D3A4632467D
    3:31PM INF Committed state appHash=538A4DAB9CE88D2DAD4D0FA047615F05BEBA49722A7478382614252FDBFC3108 height=3887 module=state txs=0
    ```

9. **Service creation**
**Ensure that you stopped** the previous test with CTRL+C.
With all configurations ready, you can start your blockchain node with a single command (`bcnad start`). In this tutorial, however, you will find a simple way to set up `systemd` to run the node daemon with auto-restart.

Setup `bcnad` systemd service (copy and paste all to create the file service):
```
    cd $HOME
    echo "[Unit]
    Description=BitCanna Node
    After=network-online.target
    [Service]
    User=${USER}
    ExecStart=$(which bcnad) start
    Restart=always
    RestartSec=3
    LimitNOFILE=4096
    [Install]
    WantedBy=multi-user.target
    " >bcnad.service
```
    
Enable and activate the BCNAD service.

```
    sudo mv bcnad.service /lib/systemd/system/
    sudo systemctl enable bcnad.service && sudo systemctl start bcnad.service
```
Check the logs to see if it is working:
    ```
    sudo journalctl -u bcnad -f
    ``` 
    
11. **Check the synchronisation:** If `catching_up = true` the node is syncing. Also you can compare your current block with the last synced block of another node, or at our [Explorer](https://cosmos-explorer.bitcanna.io):
    ```
    curl -s localhost:26657/status  | jq .result.sync_info.catching_up
    #true output is syncing - false is synced

    curl -s localhost:26657/status | jq .result.sync_info.latest_block_height
    #this output is your last block synced

    curl -s "http://seed1.bitcanna.io:26657/status?"  | jq .result.sync_info.latest_block_height
    #this output the public node last block synced
    ```

## Step 2 - Become a validator
To become a validator you need to perform additional steps. 
Your node must be fully synced in order to send the TX of validator creation and start to validate the network. You can check if your node has fully synced by comparing your logs and the latest block in the explorer (https://cosmos-explorer.bitcanna.io/)

1. **You will need coins:**
Send coins to your new address, you will need roughly 2 BCNA to run the validator (1 BCNA for self-delegation and a bit more for transactions). Reach out in Discord to receive the 2 BCNA if you don't have any.

2. **Send the _Create validator_ TX:**

> We recommend to read the FAQ manual to understand all parameters:
> https://hackmd.io/_R2KtQzAS02QXdwpJdqmnw?view

When you have your node synced and your wallet funded with coins, send the TX to become _validator_ (change _wallet_name_ and _moniker_):
> You can use quotes to include spaces and more than two words
`--from "Royal Queen Seeds"`

```
bcnad tx staking create-validator \
    --amount 1000000ubcna \
    --commission-max-change-rate 0.10 \
    --commission-max-rate 0.2 \
    --commission-rate 0.1 \
    --from WALLET_NAME \
    --min-self-delegation 1 \
    --moniker YOUR_MONIKER \
    --pubkey $(bcnad tendermint show-validator) \
    --chain-id bitcanna-1 \
    --gas auto \
    --gas-adjustment 1.5 \
    --gas-prices 0.001ubcna
```
# Instructions for users who participated in previous BitCanna testnets.
## 1. Stop your validator (if is running).
1. If you are running `cosmovisor` service: 
```
sudo service cosmovisor stop
```
2. If you are running `bcnad` service without `cosmovisor`:
```
sudo service bcnad stop
```

## 2. Update the software.
New versions (bcnad & cosmovisor) for the Public Testnet are here (you can check the sha256sum there):
https://github.com/BitCannaGlobal/bcna/releases/tag/v1.0
> Perform only A or B of step 1 depending on your service type (cosmovisor or bcnad directly)
1. **A**  Update for Cosmovisor users
```
cd $HOME
rm -f bcnad  #deletes if exist
wget -nc https://github.com/BitCannaGlobal/bcna/releases/download/v1.0/bcnad
chmod +x bcnad

sha256sum bcnad 
  <output> 5f0041c623b2ac65711584b12e9caecec51c12afd4121efea3087b8c8014e645  bcnad

rm -rf .bcna/cosmovisor/upgrades/indica/
ln -s -f  -T ${HOME}/.bcna/cosmovisor/genesis ${HOME}/.bcna/cosmovisor/current
mv ./bcnad $HOME/.bcna/cosmovisor/current/bin/

rm -f cosmovisor  #deletes if exist
wget -nc https://github.com/BitCannaGlobal/bcna/releases/download/v1.0/cosmovisor
chmod +x cosmovisor

sha256sum cosmovisor 
  <output> 622e1f60a94bb93a3810bb7820b9e42c7822086d4996455342b76e1087576d0f  cosmovisor

sudo mv ./cosmovisor $(which cosmovisor) #overwrite the current
```
1. **B** Update for BCNAD service (not Cosmovisor)
If you are running the validator without Cosmovisor:
```
cd $HOME
rm -f bcnad #deletes if exist
wget -nc https://github.com/BitCannaGlobal/bcna/releases/download/v1.0/bcnad
chmod +x bcnad
sudo mv ./bcnad $(which bcnad)
bcnad version
   <output> 1.0
```

Anyway  Review your config.toml file and ensure that `persistent_peers` is empty by now, and `seeds` have the following value: 
```
seeds = "d6aa4c9f3ccecb0cc52109a95962b4618d69dd3f@seed1.bitcanna.io:26656,23671067d0fd40aec523290585c7d8e91034a771@seed2.bitcanna.io:26656"
```
## 3. Fetch new genesis.json into bcna’s config directory, it will automatically overwrite the previous if exist.
```
cd $HOME
curl -s https://raw.githubusercontent.com/BitCannaGlobal/bcna/main/genesis.json > ~/.bcna/config/genesis.json
```
Ensure you have the correct file. Run the SHA256SUM test:
```
sha256sum $HOME/.bcna/config/genesis.json
   <output> cd7449a199e71c400778f894abb00874badda572ac5443b7ec48bb0aad052f29
```
## 4. Reset the state and sync the new chain.
 
```
bcnad unsafe-reset-all
bcnad config chain-id bitcanna-1
```
Start the service, you must run `cosmovisor` or `bcnad` service:
```
sudo service cosmovisor start
```
or
```
sudo service bcnad start
```

## 5. Create your validator
Back above to Step 2: Become a validator ;)
