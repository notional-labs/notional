# Notional Relaying Guide

At Notional, we've focused on the operational aspects of relaying, while also making a few contributions to the go relayer and hermes.  We are also working on [shared security](https://github.com/notional-labs/interchain-security). 


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


## Recommended Hardware & OS Configuration

You will want a 16 core or greater CPU if you are attempting to relay the #ibcgang.  For larger chains, the chain itself should map to 4 PCIe lanes on the CPU.  The best disks for running relayers are Intel Optane P5800x and Western Digital Black 850/950.


**Hetzner**

We've found over and over that Hetzner is the best option for hosting bare metal servers, and if you're relaying, you're really going to want to run on metal. 

* Intel or AMD 16 core CPU
* 128GB or more RAM
* 6x SAMSUNG MZQL23T8HCLS-00A07 drives
    * If building yourself, this drive has caught my eye: https://www.gigabyte.com/Solid-State-Drive/AORUS-Gen4-AIC-SSD-8TB/sp#sp
* Arch Linux
  * You can use whichever distribution you'd like but our scripts and systems assume arch linux.  

**DIY**
* CPU with high single thread performance and **many** PCIe lanes
* 128gb RAM
* Intel Optane or WD Black 850/950 (we are using 1 such disk per chain)

### Software
You need:

* Archive [nodes](../node-setup) for every chain you want to relay
* [Hermes](./hermes)
* [Go Relayer](./rly)
