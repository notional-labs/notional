# Notional Relaying Guide

At Notional, we've focused on the operational aspects of relaying, while also making a few contributions to the go relayer.  


## Recommended Hardware & OS Configuration
This recommendation will put you in a good position to relay on all IBC networks, with some room to grow.  We've noticed that it is disk IO bandwidth, more than anything, which determines the performance of IBC relaying systems.  Additionally, we've noticed that relaying does not tolerate latency well.  Over 50ms will cause missed packets, so in our production systems we've entirely eliminated latency by running all of the blockchain nodes on the same large server.  Crucial to this design is a BTRFS RAID 0 setup that ensures that chains do not fall behind when RPC queries are being made by relayers. 

### The system
This can be built yourself, or rented as the Hetzner.de AX101-NVMe or Hetzner.de 

* Intel or AMD 16 core CPU
* 128GB or more RAM
* 8x SAMSUNG MZQL23T8HCLS-00A07 drives, or more performant NVMe drives
    * If building yourself, this drive has caught my eye: https://www.gigabyte.com/Solid-State-Drive/AORUS-Gen4-AIC-SSD-8TB/sp#sp
* Arch Linux
  * You can use whichever distribution you'd like but our scripts and systems assume arch linux.  


### Software
You need:

* Archive [nodes](../node-setup) for every chain you want to relay
* [Hermes](./hermes)
* [Go Relayer](./rly)