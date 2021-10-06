# Notional Relaying Guide

At Notional, we've focused on the operational aspects of relaying, while also making a few contributions to the go relayer.  


## Recommended Hardware & OS Configuration
You will want a 16 core or greater CPU if you are attempting to relay the #ibcgang.  For larger chains, the chain itself should map to 4 PCIe lanes on the CPU.  The best disks for running relayers are Intel Optane P5800x and Western Digital Black 850/950.


**Hetzner**
* Intel or AMD 16 core CPU
* 128GB or more RAM
* 6x SAMSUNG MZQL23T8HCLS-00A07 drives, or more performant NVMe drives (hetzner maximum)
    * If building yourself, this drive has caught my eye: https://www.gigabyte.com/Solid-State-Drive/AORUS-Gen4-AIC-SSD-8TB/sp#sp
* Arch Linux
  * You can use whichever distribution you'd like but our scripts and systems assume arch linux.  

**DIY**
* High single thread performance cpu
   * Intel 11000k or Xeon if whole ibcgang
   * AMD 5950x or Threadripper / Epyc if whole ibcgang
* 128gb RAM
* Intel Optane or WD Black 850/950


### Software
You need:

* Archive [nodes](../node-setup) for every chain you want to relay
* [Hermes](./hermes)
* [Go Relayer](./rly)
