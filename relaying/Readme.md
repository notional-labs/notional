# Notional Relaying Guide

At Notional, we've focused on the operational aspects of relaying, while also making a few contributions to the go relayer.  


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
