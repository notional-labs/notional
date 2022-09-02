# BitCanna peers, seed & services
For the **Chain Registry** from Cosmos [GitHub](https://github.com/cosmos/chain-registry/) we'd like to gather some endpoints and persistent peers from our most valuable users.

We'd like to ask you to provide us your ***endpoints*** and/or ***persistent_peers*** that we can use. It is greatly appreciated!

# Persistent_peers

## EZStaking
bee230fb347722d7f87d22414f57bf9cbe37a410@sentry-1.bcna.ezstaking.io:26039
90ee680b1738344354c48c23ba1e1fd68e071d80@sentry-2.bcna.ezstaking.io:26696

## StakeLab
5eb75c20a77ccf960df396b187b86d6324b40123@51.68.226.61:26656
11612d58955e5f073a6e70ce83129d63b8f5c654@65.108.139.109:26666


## Stakely
3cdfe02efd4432280707d2949e064a9d8db412b3@178.62.98.158:26656 
d806bb39349751c142627a547c23c586a787ef26@138.68.78.210:26656


## Blockscope
ddb620e7c7a6b5a8a53352037cde927681012ab4@65.21.229.209:37656

## BloClick
be87c9abf1c54e1cc2f37e68d21fcd61679abb4c@65.21.196.90:46656 

## BitCanna
7c00beb4956bc40cd33ced6e2c2ffe07d4fa32e7@95.216.242.82:36656
21484408a7bcf0134689ddf52a7d9c8299cb65b5@176.9.139.74:36656

## Paranormal Brothers
df99de6cec9152c517990317b340b8b9a307493c@193.34.144.156:26656

## Tuzem
ec283da64f69f8c0dee4671021edc419bbeb4034@157.90.179.34:56656

## Polkachu
282fe52546750ca86e92e3f567cbdb2897694b5b@207.244.225.205:26656

## NodeJumper ⭐️| nodejumper.io
45589e6147e36dda9e429668484d7614fb25b142@bitcanna.nodejumper.io:27656

## 3Tekos
ec12bf44fd3c64db457f45f7d0111735c559a37d@185.218.126.71:26657
79d9c3aa19f61e06c33c54d80d0cda4fa535b28a@161.97.156.216:26657

# Seeds
## BitCanna (reseted everyday)
d6aa4c9f3ccecb0cc52109a95962b4618d69dd3f@seed1.bitcanna.io:26656
23671067d0fd40aec523290585c7d8e91034a771@seed2.bitcanna.io:26656

# StateSync Servers and instructions:
## BitCanna oficial:
  * https://github.com/BitCannaGlobal/bcna/blob/main/2.1.statesync.md
## Polkachu
  * https://polkachu.com/state_sync/bitcanna
## 3Tekos StateSync Server
  * https://bcna-rpc.3tekos.fr:443
## Panthea EU StateSync Server
  * https://bitcannarpc.panthea.eu:443

# Info, doc and other services from BitCanna validators & partners (feel free to make a PR)
### BitCanna Docs
* https://docs.bitcanna.io

### Stakely Faucet
* https://stakely.io/faucet/bitcanna-bcna

### Paranormal Brothers: current snapshot, RPC, seed, peer service, validators monitoring and alerting tool. 
* https://bc.paranorm.pro/

### Polkachu: snapshot service info
* https://polkachu.com/tendermint_snapshots/bitcanna

### NodeJumper ⭐️| nodejumper.io: snapshot and state sync services, installation scripts (manual/automation), cheat sheet and more
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
        "address": "sentry-1.bcna.ezstaking.io:26039",
        "provider": "EZStaking.io"
      },
      {
        "id": "90ee680b1738344354c48c23ba1e1fd68e071d80",
        "address": "sentry-2.bcna.ezstaking.io:26696",
        "provider": "EZStaking.io"
      },
      {
        "id": "21484408a7bcf0134689ddf52a7d9c8299cb65b5",
        "address": "176.9.139.74:36656",
        "provider": "BitCanna"
      },
      {
        "id": "a4c1e46441164c350f721cf142d52c136215e05c",
        "address": "135.181.176.55:36656",
        "provider": "BitCanna"
      },
      {
        "id": "5eb75c20a77ccf960df396b187b86d6324b40123",
        "address": "51.68.226.61:26656",
        "provider": "StakeLab"
      },
      {
        "id": "11612d58955e5f073a6e70ce83129d63b8f5c654",
        "address": "65.108.139.109:26666",
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
        "address": "http://bcna.paranorm.pro/",
        "provider": "ParanormalBrothers"
      },
      {
        "address": "https://rpc.bitcanna.ezstaking.io/",
        "provider": "ezstaking.io"
      },
      {
        "address": "https://bcna-rpc.3tekos.fr:443/",
        "provider": "3Tekos"
      },      
      {
        "address": "https://rpc-bitcanna.itastakers.com/",
        "provider": "itastakers"
      },
      {
        "address": "https://bitcannarpc.panthea.eu",
        "provider": "Panthea EU"
      }
      {
        "address": "https://rpc.bitcanna.sgtstake.com/",
        "provider": "SGTstake"
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
      },
      {
        "address": "https://bitcannaapi.panthea.eu",
        "provider": "Panthea EU"
      }
      {
        "address": "https://api.bitcanna.sgtstake.com/",
        "provider": "SGTstake"
      }
    ]
  }
  ```
