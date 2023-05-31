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

Go to [Node](#Nodes) section to get the seed of chains.

## State Sync Note
To enable state sync on some chains like Osmosis, Gaia, ... follow these instructions (Osmosis Example):
```bash
cd /$HOME/.osmosid/config
# Enable State Sync
sed -i 's/enable = false/enable = true/' config.toml
# Add RPC
sed -i 's/rpc_servers = ""/rpc_servers = "https:\/\/osmosis.validator.network:443,https:\/\/osmosis-1.technofractal.com:443,https:\/\/rpc-osmosis.blockapsis.com:443"/' config.toml
# Get latest trusted height and trusted hash
curl -s https://osmosis.validator.network/commit | jq "{height: .result.signed_header.header.height, hash: .result.signed_header.commit.block_id.hash}"
# Add trusted height and trusted hash
sed -i 's/trust_height = 0/trust_height = <BLOCK_HEIGHT>/' config.toml
sed -i 's/trust_hash = ""/trust_hash = "<BLOCK_HASH>"/' config.toml
```

## Archive Nodes
Notional maintains archive nodes for BSC, Ethereum, Bitcoin, and every IBC-enabled Cosmos-SDK blockchain.  Documentation is kept in node-setup/archive and takes the approach that archive nodes are best setup slowly, even if that takes days or requires swapping out the binary during sync.  They're intended to be full, proper archives.  Time and expense are not spared in getting them into operation.  We run our archive nodes in three places:

* Hetzner.de (rented hardware)
* Notional HQ (own hardware)

Our archive nodes feed into our IPFS snapshot distribution system.

## Multi-chain Port Standard
### Ports

Each chain has 10 ports it can use.  WIP.


   Chain         | Port Range | Network
-----------------|------------|-------------
 Bitcanna        | 420-429    | bitcanna-1
 Osmosis         | 2000-2009  | osmosis-1
 Gaia            | 2010-2019  | cosmoshub-4
 Akash           | 2020-2029  | akashnet-2
 Sentinel        | 2030-2039  | sentinelhub-2
 Crypto.org      | 2040-2049  | crypto-org-chain-mainnet-1
 Cyber           | 2050-2059  | bostrom
 Regen           | 2060-2069  | regen-1 
 Juno            | 2070-2079  | juno-1
 PersistenceCore | 2080-2089  | core-1
 Desmos          | 2090-2099  | desmos-mainnet
 Kichain         | 2100-2109  | kichain-2
 Sifchain        | 2110-2119  | sifchain-1
 Iris            | 2120-2129  | irishub-1
 Ixo             | 2130-2139  | impacthub-3
 E-money         | 2140-2149  | emoney-3
 Microtick       | 2150-2159  | microtick-1
 Terra           | 2160-2169  | columbus-5
 Starname        | 2170-2179  | iov-mainnet-ibc
 Likecoin        | 2180-2189  | likecoin-mainnet-2
 Stargaze        | 2190-2199  | stargaze-1
 Kava            | 2200-2209  | kava-10
 Band            | 2210-2219  | laozi-mainnet
 Dig             | 2220-2229  | dig-1
 Evmos           | 2230-2239  | evmos_9001-1
 Chihuahua       | 2240-2249  | chihuahua-1
 Cheqd           | 2250-2259  | cheqd-mainnet-1
 Axelar          | 2260-2269  | axelar-dojo-1
 Comdex          | 2270-2279  | comdex-1
 Okp4            | 2280-2289  | ...
 Konstellation   | 2290-2299  | darchub
 Omniflix        | 2300-2309  | omniflixhub-1
 SecretNetwork   | 2310-2319  | secret-4
 Gravity-Bridge  | 2320-2329  | gravity-bridge-3
 Bitsong         | 2330-2339  | bitsong-2b
 Vidulum         | 2340-2349  | vidulum-1
 Provenance      | 2350-2359  | pio-mainnet-1
 Cerberus        | 2360-2369  | cerberus-chain-1
 AssetMantle     | 2370-2379  | mantle-1
 fetchai         | 2380-2389  | fetchhub-4
 Quicksilver     | 2390-2399  | quicksilver-1
 Nomic           | 2400-2409  | stakenet-2
 Umee            | 2410-2419  | umee-1
 Sei             | 2420-2429  | atlantic-1
 Stride          | 2430-2439  | stride-1
 Injective       | 2440-2449  | injective-1
 Passage3D       | 2450-2459  | passage-1
 Hypersign       | 2460-2469  | jagrat
 Jackal          | 2470-2479  | jackal-1
 Neutron         | 2480-2489  | neutron-1
 Quasar          | 2490-2499  | qsr-questnet-03/04
 Mars            | 2500-2509  | mars-1
 GenesisL1       | 2510-2519  | genesis_29-2
 Namada          | 2520-2529  | namada testnet
 Terra2          | 2530-2539  | phoenix-1
 Canto           | 2540-2549  | canto_7700-1
 Migaloo         | 2550-2559  | migaloo-1
 Kyve            | 2560-2569  | kaon-1
 Babylon         | 2570-2579  | bbn-test1
 Dymension       | 2580-2589  | 35-C
 Noble           | 2590-2599  | grand-1
 Celestia        | 2600-2609  | blockspacerace-0
 Agoric          | 2610-2619  | 
 Sommelier       | 2620-2629  |
 Composable      | 2630-2639  |
 Nolus           | 2640-2649  |
 Gitopia         | 2650-2659  |
 UnUnify         | 2660-2669  |

   Service         | Port  
-------------------|------ 
 p2p               | xxx0 
 rpc               | xxx1 
 grpc              | xxx2 
 grpc-web          | xxx3 
 api               | xxx4 
 TinySeed          | xxx5
 load balanced rpc | xxx9 
