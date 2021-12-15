# Go-relayer operational notes

## Relaying

Notional Operates an omni-network [Go Relayer] On-Premesis in Hanoi.  Addresses are:

| Network      | Current Relayer Address | Former Relayer Address
| ----------- | ----------- | ------------ | 
| Regen      | regen1yeac5tgm4mqwl4fyrqp34s0gq5fy8ugx8s4x6u | regen1083svrca4t350mphfv9x45wq9asrs60chduq99|
| Osmosis   | osmo1yeac5tgm4mqwl4fyrqp34s0gq5fy8ugxsfd262   | osmo1083svrca4t350mphfv9x45wq9asrs60cq5yv9n |
| Gaia      | cosmos1yeac5tgm4mqwl4fyrqp34s0gq5fy8ugxcj76vc | cosmos1083svrca4t350mphfv9x45wq9asrs60cg0hunp |
| Akash     | akash1yeac5tgm4mqwl4fyrqp34s0gq5fy8ugx4fna4z  | akash1083svrca4t350mphfv9x45wq9asrs60c956m2m |
| Sentinel  | sent1yeac5tgm4mqwl4fyrqp34s0gq5fy8ugxrfgrgh   | sent1083svrca4t350mphfv9x45wq9asrs60cn5p9hw      |
| Sifchain   | sif1yeac5tgm4mqwl4fyrqp34s0gq5fy8ugxa03vrn   | sif1083svrca4t350mphfv9x45wq9asrs60cdjc2u2  |
| Starname   | star1t090jl87cnu9p3nlc6n20falgal2m8lujafd6u  | star1pdqlmncych8uzsfdnsptv7s0wpazc0rgf4xgk7 |
| Iris       | iaa1yeac5tgm4mqwl4fyrqp34s0gq5fy8ugxds7twf   | iaa1083svrca4t350mphfv9x45wq9asrs60cadhd3s  |
| Crypto.org | cro1qxd33n5ncsx4rdalmgy7hfufqpfcwysudqntax   | cro1mjdxgm2ndu9a4zmr9t3kq88fww30ms7q60e03h  |
| Persistence| persistence1xht3mqp946k7vm2j50yxywfg86pauhm9c2tmgt | persistence1r50r8cx09ege6206k70509a3cgk7npn3plg7r8 |


## Vs Hermes
* When using Hermes, you relay all of the channels that you do not filter. When using the go relayer, you relay only the channels that you specifically specify.
* Hermes takes a minute or two to get running, especially if you are relaying many chains. The go relayer starts almost instantly.
* I found the go relayer to be a little more difficult to configure for the first time than hermes, specifically because I needed to carefully specify:
  * channels
  * connections
  * clients
* Hermes get s a bit upset when it sees a packet on a chain you're not running.  The solution is filtering, and you end up anti-specifying channels, instead of specifying them.
* It is still too early to make comparisons on fee calculations or tx latency


## Making Channels

You can use rly tx link, so first in config.yaml you want like: (the paths you want, without the clients, channels, and connections defined)

```yaml

osmocheqd:
    src:
      chain-id: osmosis-1
      port-id: transfer
      order: UNORDERED
      version: ics20-1
    dst:
      chain-id: cheqd-mainnet-1
      port-id: transfer
      order: UNORDERED
      version: ics20-1
    strategy:
      type: naive

cheqdosmo:
    src:
      chain-id: cheqd-mainnet-1
      port-id: transfer
      order: UNORDERED
      version: ics20-1
   dst:
      chain-id: osmosis-1
      port-id: transfer
      order: UNORDERED
      version: ics20-1
    strategy:
      type: naive 
      
```

then if you `rly tx link cheqdosmo` it will fill in the client, connection, and channel for you, after making them.  Make your osmo fees high.

```yaml
osmocheqd:
    src:
      chain-id: osmosis-1
      client-id: 07-tendermint-1615
      connection-id: connection-1268
      channel-id: channel-108
      port-id: transfer
      order: UNORDERED
      version: ics20-1
    dst:
      chain-id: cheqd-mainnet-1
      client-id: 07-tendermint-0
      connection-id: connection-0
      channel-id: channel-0
      port-id: transfer
      order: UNORDERED
      version: ics20-1
    strategy:
      type: naive


cheqdosmo:
    src:
      chain-id: cheqd-mainnet-1
      client-id: 07-tendermint-0
      connection-id: connection-0
      channel-id: channel-0
      port-id: transfer
      order: UNORDERED
      version: ics20-1
   dst:
      chain-id: osmosis-1
      client-id: 07-tendermint-1615
      connection-id: connection-1268
      channel-id: channel-108
      port-id: transfer
      order: UNORDERED
      version: ics20-1
    strategy:
      type: naive 
      
```




## Setup
As with hermes, we recommend that you create a single seed phrase, and use that to create all of the wallets that you'll need for relaying.  For rly, we just moved over our cosmos hub and osmosis wallets.

PS: Notional urges the use of go 1.17 because it creates vastly clearer go.mod files and you can install it like:

```bash
wget -q -O - https://git.io/vQhTU | bash -s -- --version 1.17
````


**quickstart**

You'll need a synced Osmosis Archive node and a synced Gaia Archive node.  You can use pruning settings, but archive nodes provide certainty.  You will almost certainly need to adjust the rpc endpoints found in the config.yaml file-- unless you're just on localhost.


**Setup for quickstart:**
```bash
git clone https://github.com/strangelove-ventures/relayer
make install
rly init
wget -O ~/.relayer/config/config.yaml https://raw.githubusercontent.com/notional-labs/notional/master/rly/config.yaml
rly keys recover cosmoshub-4 cosmos "24 or 12 magic words invoked like a spell"
rly keys recover osmosis-1 osmosis "24 or 12 magic words invoked like a spell"
rly keys recover dig-1 dig "24 or 12 magic words invoked like a spell"
rly keys recover sentinelhub-2 sentinel "24 or 12 magic words invoked like a spell"
rly keys recover regen-1 regen "24 or 12 magic words invoked like a spell"
rly keys recover akashnet-2 akash "24 or 12 magic words invoked like a spell"
rly keys recover iov-mainnet-ibc iov "24 or 12 magic words invoked like a spell"
rly keys recover microtick-1 mtm "24 or 12 magic words invoked like a spell"
```

**relay hub to osmosis as a long-running daemon:**
```bash
rly start hubosmo
```

```bash
rly start osmohub
```

**relay osmo<->hub (0 and 141) in a crazy bash loop:**
```bash
bash osmoandhub.bash
```








