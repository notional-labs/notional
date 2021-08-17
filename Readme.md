# Notional
This is the notional software repository. Watch our [hypnotic Hermes in action](https://hermes.notional.ventures).


## Validation
Notional is an **active set** validator on:
* [Osmosis](https://www.mintscan.io/osmosis/validators/osmovaloper1083svrca4t350mphfv9x45wq9asrs60c6rv0j5)
* [Starname](https://www.mintscan.io/starname/validators/starvaloper1pdqlmncych8uzsfdnsptv7s0wpazc0rgv7zc6h)
* [Regen](https://regen.aneka.io/validators/regenvaloper1083svrca4t350mphfv9x45wq9asrs60ct2p9a5)


Notional is a validator, but currently inactive on:
* [Gaia](https://www.mintscan.io/cosmos/validators/cosmosvaloper1083svrca4t350mphfv9x45wq9asrs60cdmrflj)
* [Akash](https://www.mintscan.io/akash/validators/akashvaloper1083svrca4t350mphfv9x45wq9asrs60c0k5a63)


## Relaying

Notional Operates an IBC Relayer using [Hermes](https://github.com/informalsystems/ibc-rs) on the following networks, using the following addresses:


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



# Products
All of Notional's products are 100% open source, though some do have unusal licenses.

* [SOS](https://github.com/faddat/sos) Lightweight operating system based on Arch Linux
* [Archlinux-Docker](https://github.com/faddat/archlinux-docker) Arm64/amd64 multiplatform docker image for Arch
* [Validatron](https://whimsical.com/validatron-PbUypC8tVMU8DxCFNLdDFu) designs and equipment for edge validation
* [ipfsync](https://github.com/faddat/ipfscync) IPFS collaborative cluster enabling syncs that saturate a 10gbps line
* [tradeberry](https://github.com/faddat/tradeberry) Raspberry pi image that allows private usage of Osmosis
* [dig](https://github.com/faddat/dig) Liquid Land


We have been working with https://pcbviet.com on open source hardware, and hope to run tradeberry on a Minimus PC sometime in 2021.

## Team
* Jacob Gadikian - Blockchain and infrastructure engineer
* Ricardo Ferreria - All things biz, testing of documentation written by Jacob and Khanh
* Khanh Nguyen - Blockchain Engineer

**Notional is hiring and training blockchain engineers.  Hours are ludicrous, and all team members earn a meaningful stake in all blockchains launched.  Notional Pays flat global wages.** 

## Technical Partnerships with other validators / relayers
* https://github.com/chandrastation

Our technical partners agree to:
* Mutual Aid Re: Uptime (eg: phone calls to one another)
* Full commitment to open source, repeatable infrastructure (we only partner with validators who document their infrastructure)
* Join a Signal chat, since it's not discord
* Share information about chain launches


# System Requirements

### Single Node
* A raspberry pi 4 with SOS should do.

### Somewhere between single and many
* Hardware between rpi and the omni configuration

### Every IBC chain
* 8+ Core intel or amd cpu (I have 12, 16 and 32 core machines in production)
* 64+ GB RAM
* 8TB+ NVMe Storage with high write cycle capacity


## Thanks

Notional would like to thank its delegagtes, who feel that sustained R&D will lead to long-term higher profits in their cryptographic assets when compared to low-fee, no-fee or no-R&D validators.

Notional would like to thank PCBViet for then assistance navigating the challenging hardware design and manufacturing space. 
