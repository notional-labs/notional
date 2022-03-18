# FAQs Chain's BitCanna Cosmos
### Technical requirements/specs
* For users/delegators
    * Using command line:
        * Linux system (desktop or server)
        * MacOS system
    * Using web/HW wallets:
        * Web Browser
        * Ledger USB (optional)
        * Mobile app

* For validators
    Here are the minimal hardware configs required for running a validator/sentry node:

    * 8GB RAM 
    * 4vCPUs (8vCPUs is recommened)
    * 200GB - 300GB SSD Disk space per year (NVMe disks are recommended)
    * 400 Mbit/s bandwith

> Please avoid cheap VPS providers as main validator (we suggest to use it as a cheap backup). We advise to use a shared dedicated server or a high-end NVMe VPS.

### Why amounts (at coins) are too big? 
Because it includes the 6 decimal digits in the amount without dots (integer), in example:
* 1 BCNA is 1000000ubcna (u=micro)
* 10,11 BCNAs is 10110000ubcna
When you see the `denom` in capital letters means the 'natural' mode.
When you see the `denom` in lowercase means that decimals are implicit. 


## What is a full node? What a is validator node?
* Full Node is a machine that runs with the chain 100% synced.
* Validator is a Full Node that autodelegate 1 coin and start to participate in the fight for sign the next block
* Delegator is the person who stak (delegate) part of his/her coins on a validator

## How staking works? Why staking is now 'social'?
Because you fight in the network to sign the next block with your own stake and with the amount that other users have stacked on your validator node.
Then, if you engage community and make a 'social involvement' you can drastically increase your rewards

## Can I run my own validator with 100 BCNAs? there is a minimum amount to start validating?
You can start to validate with 1 BCNA but your POWER is directly proportional to your total delegations.

## What about balances? rewards? commissions? 

**Total balance:** the sum of delegated + no delegated + unbonding
**Amount delegated:** the sum of coins delegated to a one or more validators
```
bcnad query staking delegations bcna1gt9wqj0x4m4fyazsazc0zqph5gjfqpkpjxs2v6 --count-total 
delegation_responses:
- balance:
    amount: "100001000000"     <-----------
    denom: ubcna
  delegation:
    delegator_address: bcna1gt9wqj0x4m4fyazsazc0zqph5gjfqpkpjxs2v6
    shares: "100001000000.000000000000000000"
    validator_address: bcnavaloper1gt9wqj0x4m4fyazsazc0zqph5gjfqpkptmp2kw
pagination:
  next_key: null
  total: "1"

```
**Amount Spendable:** the coins no delegated
```bcnad query bank balances bcna1km88duvfjhq4cda36cf75kgfrv89k8mcxs6sdu
balances:
- amount: "3760210852"
  denom: ubcna
```
**Unbonding:** coins locked that are unlocking
```
bcnad query staking unbonding-delegations bcna1km88duvfjhq4cda36cf75kgfrv89k8mcxs6sdu
pagination:
  next_key: null
  total: "0"
``` 
**Rewards:** while you don't claim it doesn't move to your wallet, when it does, it sums to Spendable: to cast votes, to send coins to your friend LC, to buy at Zamnesia...
If you want you can delegate to your own validator or delegate to another validator, so, not an automate action, ...even no delegate
```
bcnad query distribution rewards bcna1gt9wqj0x4m4fyazsazc0zqph5gjfqpkpjxs2v6 
rewards:
- reward:
  - amount: "11008291043.088859392466000000"
    denom: ubcna
  validator_address: bcnavaloper1gt9wqj0x4m4fyazsazc0zqph5gjfqpkptmp2kw
total:
- amount: "11008291043.088859392466000000"
  denom: ubcna

```
**Commissions:** only apply to validators. Extra rewards gotten from FEES, and block reward.
```
bcnad query distribution commission bcnavaloper1gt9wqj0x4m4fyazsazc0zqph5gjfqpkptmp2kw 
commission:
- amount: "2871807750.517102299055725178"
  denom: ubcna

```

## What about the fees and gas?
Transactions on the Cosmos Hub network need to include a transaction fee in order to be processed. This fee pays for the gas required to run the transaction. The formula is the following:

```
fees = convert_to_integer(gas * gasPrices)
```
* The gas is dependent on the transaction. 
* Different transaction require different amount of gas. Providing a gas limit which is too low causes the transaction to fail.
* The gas amount for a transaction is calculated as it is being processed, but there is a way to estimate it beforehand by using the `auto` value for the `--gas` flag. Of course, this only gives an estimate. 
* You can adjust this estimate with the flag `--gas-adjustment` (default 1.0) if you want to be sure you provide enough gas for the transaction. We advice to use a `--gas-adjustment` of 1.5.
* The `gasPrice` is the price of each unit of gas. Each validator sets a `min-gas-price` value (at `app.toml` file), and will only include transactions that have a gasPrice greater than their min-gas-price. 

### Let's see some examples: 
#### NO INDICATION OF GAS PRICE
`bcnad tx distribution withdraw-all-rewards --from resources    --gas auto  --chain-id bitcanna-testnet-3`
 * insufficient --> `insufficient fees; got:  required: 3733ubcna: insufficient fee","logs":[],"info":"","gas_wanted":"149302","gas_used":"0"` 

#### INDICATING PRICE 
`bcnad tx distribution withdraw-all-rewards --from resources --gas auto --gas-prices 0.025ubcna  --chain-id bitcanna-3`
 * out of gas--> `"out of gas in location: ReadFlat; gasWanted: 149412, gasUsed: 149814: out of gas","logs":[],"info":"","gas_wanted":"149412","gas_used":"149814"`
 * very adjusted gas: `149412","gas_used":"149814 `
 
#### MUTIPLIYING THE GAS FACTOR AND INDICATING PRICE
`bcnad tx distribution withdraw-all-rewards --from resources --gas auto --gas-adjustment 1.5  --gas-prices 0.025ubcna  --chain-id bitcanna-1`
  * more gas than wanted, **TX OK** --> `gas_wanted":"473386","gas_used":"325369" ` 

## What are the params to run a validator:
```
bcnad tx staking create-validator \
    --amount 1000000ubcna \
    --commission-max-change-rate 0.01 \
    --commission-max-rate 0.2 \
    --commission-rate 0.1 \
    --from <YOUR-WALLET-NAME> \
    --min-self-delegation 1 \
    --moniker <YOUR-MONIKER> \
    --pubkey $(bcnad tendermint show-validator) \
    --chain-id bitcanna-1 --gas auto --gas-adjustment 1.5 --gas-prices 0.001ubcna
```
> For more info always put the flag --help
* **commission-rate 0.1**: The initial percentage (10% ) that the validator subtracts from the rewards for its maintenance. This value can be changed after creating the validator, but only once per 24 hours.
**This params couldn't be changed after run the validator:**
* **commission-max-change-rate 0.01** :  The maximum commission change rate percentage 1% (per day). For example from 10% to 11%.
* **commission-max-rate 0.2**:           The maximum commission rate percentage (20% at this example)


## Concepts and terminology 

https://docs.bitcanna.io/concepts-and-terminology/validators-and-delegators

###### tags: `doc` `github`
