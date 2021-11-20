# Notional Relaying Guide

At Notional, we've focused on the operational aspects of relaying, while also making a few contributions to the go relayer and hermes.  We are also working on [shared security](https://github.com/notional-labs/interchain-security). 


## Recommended Hardware & OS Configuration

You will want a 16 core or greater CPU if you are attempting to relay the #ibcgang.  For larger chains, the chain itself should map to 4 PCIe lanes on the CPU.


**Hetzner**

We've found over and over that Hetzner is the best option for hosting bare metal servers, and if you're relaying, you're really going to want to run on metal. 

* Intel or AMD 16 core CPU
* 128GB or more RAM
* 6x SAMSUNG MZQL23T8HCLS-00A07 drives
* Arch Linux
  * You can use whichever distribution you'd like but our scripts and systems assume arch linux.  

**DIY**
* CPU with high single thread performance and **many** PCIe lanes-- threadripper 32 core CPUs have 88 lanes and Threadripper Pro provides 128.
* 128gb RAM
* PCIe Gen4x4 lanes storage (No RAID!)
  * Samsung 980 Pro <- recommended for reliablity
  * WD SN850 Black <- Very fast
  * Optane <- fastest and most expensive
  * Seagate Firecuda 530 <- Supposedly fastest but untested.  Comes in a 4gb model.

### Software
You need:

* Archive [nodes](../node-setup) for every chain you want to relay
* [Hermes](./hermes)
* [Go Relayer](./rly)
