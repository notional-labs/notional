# Go-relayer operational notes

## Vs Hermes
* When using Hermes, you relay all of the channels that you do not filter. When using the go relayer, you relay only the channels that you specifically specify.
* Hermes takes a minute or two to get running, especially if you are relaying many chains. The go relayer starts almost instantly.
* I found the go relayer to be a little more difficult to configure for the first time than hermes, specifically because I needed to carefully specify:
  * channels
  * connections
  * clients
* Hermes get s a bit upset when it sees a packet on a chain you're not running.  The solution is filtering, and you end up anti-specifying channels, instead of specifying them.
* It is still too early to make comparisons on fee calculations or tx latency


## Status

Notional is currently using rly to relay:

* cosmos hub <-------> osmosis


## Setup
As with hermes, we recommend that you create a single seed phrase, and use that to create all of the wallets that you'll need for relaying.  For rly, we just moved over our cosmos hub and osmosis wallets.


