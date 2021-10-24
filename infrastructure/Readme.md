# Infrastructure

## Products
All of Notional's products are 100% open source, though some do have unusal licenses.

* [SOS](https://github.com/notional-labs/sos) Lightweight operating system based on Arch Linux
* [Archlinux-Docker](https://github.com/faddat/archlinux-docker) Arm64/amd64 multiplatform docker image for Arch
* [Validatron](https://whimsical.com/validatron-PbUypC8tVMU8DxCFNLdDFu) designs and equipment for edge validation
* [ipfsync](https://github.com/notional-labs/ipfscync) IPFS collaborative cluster enabling syncs that saturate a 10gbps line
* [tradeberry](https://github.com/notional-labs/tradeberry) Raspberry pi image that allows private usage of Osmosis


We have been working with https://pcbviet.com on open source hardware, and hope to run tradeberry on a Minimus PC sometime in 2021.


## Tenderseeds

We operate Tenderseed instances for every #ibcgang blockchain on Akash.

You can connect to them here:



## Archive Nodes
Notional maintains archive nodes for BSC, Ethereum, Bitcoin, and every IBC-enabled Cosmos-SDK blockchain.  Documentation is kept in node-setup/archive and takes the approach that archive nodes are best setup slowly, even if that takes days or requires swapping out the binary during sync.  They're intended to be full, proper archives.  Time and expense are not spared in getting them into operation.  We run our archive nodes in three places:

* Hetzner.de (rented hardware)
* Notional HQ (own hardware)

Our archive nodes feed into our IPFS snapshot distribution system.

## Multi-chain Port Standard


Each chain has 10 ports it can use.  WIP.


| Network      | Port Range | 
| ----------- | ----------- | 
| Osmosis   | 2000-2009   | 
| Gaia      | 2010-2019   | 
| Akash     | 2020-2029   | 
| Sentinel  | 2030-2039   | 
| Crypto.org | 2040-2049  | 
| Regen      | 2060-2069  | 
| Omniflix  | 2070-2079 |
| Juno       | 2050-2059 |
| Starname   | 2130-2139   | 
| Iris       | 2120-2129   | 
| Persistence| 2080-2089  | 
| dig        | 2090-2099 |

| Service      | Port  | 
| ----------- | ----------- | 
| p2p   | xxx0  |
| rpc   | xxx1  |
| grpc  | xxx2 |
| api   | xxx3 |
| grpc-web | xxx4 |
| load balanced rpc | xxx9 |





