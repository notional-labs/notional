# BitCanna peers, seed & services
For the **Chain Registry** from Cosmos [GitHub](https://github.com/cosmos/chain-registry/) we'd like to gather some endpoints and persistent peers from our most valuable users.

We'd like to ask you to provide us your ***endpoints*** and/or ***persistent_peers*** that we can use. It is greatly appreciated!

# Persistent_peers

## EZStaking
bee230fb347722d7f87d22414f57bf9cbe37a410@95.217.226.95:26039
90ee680b1738344354c48c23ba1e1fd68e071d80@65.108.128.241:26696

## StakeLab
7b2d10d188926ea25eb209f037fe4e67e16e06b6@92.222.25.18:26656 
5eb75c20a77ccf960df396b187b86d6324b40123@51.68.226.61:26656
6bd989f063b89be680fb3c55c4cf1720a892b12c@161.97.96.253:26656 


## Stakely
3cdfe02efd4432280707d2949e064a9d8db412b3@178.62.98.158:26656 
d806bb39349751c142627a547c23c586a787ef26@138.68.78.210:26656


## Blockscope
ddb620e7c7a6b5a8a53352037cde927681012ab4@65.21.229.209:37656

## BloClick
be87c9abf1c54e1cc2f37e68d21fcd61679abb4c@65.21.196.90:46656 

## BitCanna
7c00beb4956bc40cd33ced6e2c2ffe07d4fa32e7@95.216.242.82:36656
21484408a7bcf0134689ddf52a7d9c8299cb65b5@65.108.103.215:36656
a4c1e46441164c350f721cf142d52c136215e05c@135.181.176.55:36656

## Paranormal Brothers
df99de6cec9152c517990317b340b8b9a307493c@193.34.144.156:26656

## Tuzem
ec283da64f69f8c0dee4671021edc419bbeb4034@157.90.179.34:56656

## Polkachu
282fe52546750ca86e92e3f567cbdb2897694b5b@207.244.225.205:26656

## NodeJumper ⭐️| nodejumper.io
45589e6147e36dda9e429668484d7614fb25b142@rpc1.nodejumper.io:27656
add5f91ecb28b785e8c6b51b0a4b17974196a035@rpc2.nodejumper.io:27656

# Seeds
## BitCanna (reseted everyday)
d6aa4c9f3ccecb0cc52109a95962b4618d69dd3f@seed1.bitcanna.io:26656
23671067d0fd40aec523290585c7d8e91034a771@seed2.bitcanna.io:26656

# StateSync Servers and instructions:
## BitCanna oficial:
  * https://github.com/BitCannaGlobal/bcna/blob/main/2.1.statesync.md
## Polkachu
  * https://polkachu.com/state_sync/bitcanna

# Info, doc and other services from BitCanna validators & partners (feel free to make a PR)
### BitCanna Docs
* https://docs.bitcanna.io

### Stakely Faucet
* https://stakely.io/faucet/bitcanna-bcna

### Paranormal Brothers: snapshot service info 
* https://bitcana.paranorm.pro/

### Polkachu: snapshot service info
* https://polkachu.com/tendermint_snapshots/bitcanna

### NodeJumper ⭐️| nodejumper.io: snapshot and state sync services, isntallation scripts (manual/automation), price statics and more
* https://nodejumper.io/bitcanna

### DappLocker: Stats service
* https://dapplooker.com/dapp/bitcanna-mainnet-120038



# RPCs, LCD, GRPC and other endpoints/services 
```
  "peers": {
    "seeds": [
      {
        "id": "d6aa4c9f3ccecb0cc52109a95962b4618d69dd3f",
        "address": "seed1.bitcanna.io: 26656",
        "provider": "bitcanna"
      },
      {
        "id": "23671067d0fd40aec523290585c7d8e91034a771",
        "address": "seed2.bitcanna.io: 26656",
        "provider": "bitcanna"
      }
    ],
    "persistent_peers": [
      {
        "id": "bee230fb347722d7f87d22414f57bf9cbe37a410",
        "address": "95.217.226.95:26039",
        "provider": "EZStaking.io"
      },
      {
        "id": "90ee680b1738344354c48c23ba1e1fd68e071d80",
        "address": "65.108.128.241:26696",
        "provider": "EZStaking.io"
      },
      {
        "id": "7b2d10d188926ea25eb209f037fe4e67e16e06b6",
        "address": "92.222.25.18:26656",
        "provider": "StakeLab"
      },
      {
        "id": "5eb75c20a77ccf960df396b187b86d6324b40123",
        "address": "51.68.226.61:26656",
        "provider": "StakeLab"
      },
      {
        "id": "6bd989f063b89be680fb3c55c4cf1720a892b12c",
        "address": "161.97.96.253:26656",
        "provider": "StakeLab"
      },
      {
        "id": "3cdfe02efd4432280707d2949e064a9d8db412b3",
        "address": "178.62.98.158:26656",
        "provider": "Stakely"
      },
      {
        "id": "d806bb39349751c142627a547c23c586a787ef26",
        "address": "138.68.78.210:26656",
        "provider": "Stakely"
      },
      {
        "id": "ddb620e7c7a6b5a8a53352037cde927681012ab4",
        "address": "65.21.229.209:37656",
        "provider": "Blockscope"
      },
      {
        "id": "df99de6cec9152c517990317b340b8b9a307493c",
        "address": "193.34.144.156:26656",
        "provider": "ParanormalBrothers"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc.bitcanna.io/",
        "provider": "bitcanna"
      },
      {
        "address": "http://bitcana.paranorm.pro:26657/",
        "provider": "ParanormalBrothers"
      },
      {
        "address": "https://rpc.bitcanna.ezstaking.io/",
        "provider": "ezstaking.io"
      },
      {
        "address": "https://rpc-bitcanna.itastakers.com/",
        "provider": "itastakers"
      }
    ],
    "grpc": [
      {
        "address": "https://grpc.bitcanna.io",
        "provider": "bitcanna"
      }
    ],
    "rest": [
      {
        "address": "https://lcd.bitcanna.io",
        "provider": "bitcanna"
      },
      {
        "address": "https://lcd.bitcanna.ezstaking.io/",
        "provider": "ezstaking.io"
      },
      {
        "address": "https://lcd-bitcanna.itastakers.com/",
        "provider": "itastaker"
      },
      {
        "address": "http://bitcanna.stakelab.fr/",
        "provider": "stakelab"
      }
    ]
  }
  ```
