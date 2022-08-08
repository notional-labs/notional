# BitCanna Blockchain

BitCanna provides a decentralized payment network, supply chain and trust network for the legal cannabis industry by utilizing the BCNA coin.

Last version (v1.4.1 strangeBuddheads) of our development uses Cosmos SDK v0.45.7 & Tendermint v0.34.20 & IBC-go v3.1.1

These docs at Github are chain related. For more information about our coin, partners and roadmap visit:
* Our website: https://www.bitcanna.io
* Our docs platform: https://docs.bitcanna.io

## Hardware Requirements
Here are the minimal hardware configs required for running a validator/sentry node:

* 8GB RAM 
* 4vCPUs (8vCPUs is recommended)
* 200GB - 300GB SSD Disk space per year (NVMe disks are recommended)
* 400 Mbit/s bandwidth

## Software Requirements
* Linux server (Ubuntu 20/22 server recommended)
* go version go1.18.5

> Please avoid cheap VPS providers as a main validator (we suggest using it as a cheap backup). We advise to use a shared dedicated server or a high-end NVMe VPS.

# How to join `bitcanna-1` chain
> Tip: At the end of this doc, you will find links with important info

The necessary steps to join to `bitcanna-1` chain are:

## 1. Install / Compile last binary
Check this [link](https://github.com/BitCannaGlobal/bcna/blob/main/1.install-compile.md) to find instructions to install or compile our latest release.

##   2. Sync the chain
You can sync the chain in your server to run a validator or a simple node/peer.
**Select one method of the below:**
###   2.1. Sync using a StateSync snapshot server.
This is the recommended option for new nodes/validators.

By downloading the StateSync script, you will sync the last blocks of the chain from two BitCanna StateSync servers. 

The script will setup your folder and config if you start a fresh install. If your node/validator exist will make a backup, syncing and restoring the backup at the end of the script. Choose the best that fits you!
* https://github.com/BitCannaGlobal/bcna/blob/main/2.1.statesync.md

###   2.2. Sync using a snapshot file
This is an alternative way to get synced without having to download the entire chain block by block. Recommended for advanced users in Cosmos chains.
* https://github.com/BitCannaGlobal/bcna/blob/main/2.2.snapshot.md
###   2.3. Sync the whole chain using cosmovisor
Start to sync from block 1. Automate the upgrades with Cosmovisor by putting the right binaries in the appropriate folder.
* https://github.com/BitCannaGlobal/bcna/blob/main/2.3.cosmovisor.md



##   3. Create a validator
Your node must be fully synced in order to send the TX of validator creation and start to validate the network. You can check if your node has fully synced by comparing your logs and the latest block in the explorer (https://explorer.bitcanna.io/)

**You will need coins:**
Send coins to your new address, you will need roughly 2 BCNA to run the validator (1 BCNA for self-delegation and a bit more for transactions).
* https://app.osmosis.zone/
* https://app.rango.exchange/
* https://coindeal.com/
* https://coinmerce.io/



1. **Set the chain-id parameter** 
```
    bcnad config chain-id bitcanna-1
```
2.  **Create a wallet**:
You may create a wallet with one or more keys (addresses) using `bcnad`; you can choose a name of your own liking (we strongly advice you use one word)
```
    bcnad keys add MyFirstAddress
```
```
      name: MyFirstAddress
      type: local
      address: bcna14shzreglay98us0hep44hhhuy7dm43snv38plr
      pubkey: bcnapub1addwnpepqvtpzyugupvcu773rzdcvhele6e22txy2zr235dn7uf8t2mlqcarcyx2gg9
      mnemonic: ""
      threshold: 0
      pubkeys: []

    deposit daring slim glide hello dolphin expire stoner cluster vivid orphan work pond section client friend yellow west hamster torch settle island opinion gloom
```
> It is very important to write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget/lose your password.
```
    deposit daring slim glide hello dolphin expire stoner cluster vivid orphan work pond section client friend yellow west hamster torch settle island opinion gloom
```

3. **Send the _Create validator_ TX:**

> We recommend you read the [FAQ Chain's guide](https://github.com/BitCannaGlobal/bcna/blob/main/faq_chain.md) to understand all parameters - be aware that some values are permanent and cannot be changed at a later date.

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

You can check the list of validators (also in [Explorer](https://explorer.bitcanna.io/validators)):

```
bcnad query staking validators --output json| jq
```

##   4. Backup the keys and config
Making a backup of the Validator private keys and node keys is very important. Store them encrypted also.
1. Backup your Validator_priv_key:

```
tar -czvf validator_key.tar.gz .bcna/config/*_key.json 
gpg -o validator_key.tar.gz.gpg -ca validator_key.tar.gz
rm validator_key.tar.gz
```
This will create a GPG encrypted file with both key files.
You can download the `validator_key.tar.gz.gpg`  file to your computer.

2. Export the wallet key (if you have backup the seeds keys is enough)
```
bcnad keys export MyFisrstAddress
```
```
Enter passphrase to encrypt the exported key: passwordForCryptThisKey
Enter keyring passphrase: TheWalletPassword 
-----BEGIN TENDERMINT PRIVATE KEY-----
salt: BEC519DA3C1A3BDFC74D799FE983CA6C
type: secp256k1
kdf: bcrypt

tfguD11614drcOrdnmujAm+c+FbPbAFkYbsHv/qbQ8O9nQjdQCPuXTOZsYLkYopK
FYgEgITfk980jjUfDTE25BPfJR22csjJM/qzx0Y=
=vchm
-----END TENDERMINT PRIVATE KEY-----
```
You can copy&paste the entire text above in a text file. 

# Links to important info

## How to upgrade to v.1.4.1 (`strangeBuddheads` codename)
* [How to perform an upgrade from v.1.3.1 to v.1.4.1](https://github.com/BitCannaGlobal/bcna/blob/main/last_upgrade.md)
## Explorers:
* [BitCanna based on Forbole](https://explorer.bitcanna.io)
* [MintScan based on Cosmostation](https://www.mintscan.io/bitcanna)
* [Ping-Pub explorer](https://ping.pub/bitcanna/uptime)
* [Old chain explorer](https://old-explorer.bitcanna.io)

## Wallets
* [BitCanna web wallet](https://wallet.bitcanna.io)
* [Ping-Pub web wallet](https://ping.pub/wallet/accounts)
* [Cosmostation iOS](https://apps.apple.com/kr/app/cosmostation/id1459830339)
* [Cosmostation Android](https://play.google.com/store/apps/details?id=wannabit.io.cosmostaion)

## Genesis file
* [bitcanna-1](https://raw.githubusercontent.com/BitCannaGlobal/bcna/main/genesis.json)

## Peer, seeds and public service providers
* [BitCanna service providers](https://github.com/BitCannaGlobal/bcna/blob/main/peers_seeds_and_services.md)
* [Cosmos Chain Registry](https://github.com/cosmos/chain-registry/tree/master/bitcanna)

## Archived Guides, FAQs & docs
* [BitCanna Docs](https://docs.bitcanna.io)
* [GitHub Testnet & DevNet archive](https://github.com/BitCannaGlobal/testnet-bcna-cosmos/tree/main/instructions)
* [Current DevNet](https://github.com/BitCannaGlobal/testnet-bcna-cosmos/tree/main/instructions/bitcanna-dev-4)
* [Old Instructions guide](https://github.com/BitCannaGlobal/bcna/blob/main/archived_guides/instructions.md)
* [How to perform a manual upgrade](https://github.com/BitCannaGlobal/bcna/blob/main/archived_guides/manual_update.md)
* [How to perform an upgrade with Cosmovisor (v.1.1)](https://github.com/BitCannaGlobal/bcna/blob/main/archived_guides/cosmovisor_config.md)

###### tags: `doc` `github`
