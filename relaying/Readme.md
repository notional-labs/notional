# Notional Relaying Guide

At Notional, we've focused on the operational aspects of relaying, while also making a few contributions to the go relayer and hermes.  We are also working on [shared security](https://github.com/notional-labs/interchain-security). 


## IBC Expressways
NB: The design consideration behind IBC expressways is rpc pressure on node software that uses the cosmos-sdk and tendermint, resulting in subpar IBC performance. 

NB: need better graphs

**0-141 Bypass**

![untitled](https://user-images.githubusercontent.com/7142025/151144908-7f1239d8-85b6-47ed-9104-bbdfa4d2ce02.png)

We relay osmosis-1 channel-0 to cosmoshub-4 channel-141 using both hermes and the go relayer.  For each, the setup is configured so that Osmosis and Gaia have their own NVMe hard drive.   Hermes and the go relayer run locally. This ensures that our other deployments don't need to deal with this one high traffic channel.

**Cosmos Inner Loop**

![Screen Shot 2022-01-26 at 5 24 02 PM](https://user-images.githubusercontent.com/7142025/151146290-c17340bd-8119-4711-8f96-9f4836beecd2.png)

* Juno
* Terra
* Cosmoshub
* Osmosis
* Sif

Other than 0-141 there's an emerging high traffic pattern between Juno, Gaia, Osmosis, Sif and Terra.  This system handles all of the traffic between these five chains, and excludes traffic on 0-141.

**Cosmos Outer Loop**

The cosmos outer loop attempts to service all IBC traffic other than what is described above.  








## Recommended Hardware & OS Configuration
We're documenting our exact configuration.  For the relayer software, we run that on small, light computers and in the case of hetzner, that means virtual machines:

https://madflex.de/install-archlinux-on-hetzner-cloud/

We always use arch linux. 



### Hetzner

We've found over and over that Hetzner is the best option for hosting bare metal servers, and if you're relaying, you're really going to want to run on metal. 

**We started with big machines:**
* Intel or AMD 16 core CPU
* 128GB or more RAM
* 6x SAMSUNG MZQL23T8HCLS-00A07 drives
* Arch Linux
  * You can use whichever distribution you'd like but our scripts and systems assume arch linux.  

**But now we are building bypasses on smaller ones
* AX61-nvme
* AX51-nvme
* AX41-nvme



**DIY**
* CPU with high single thread performance and **many** PCIe lanes-- threadripper 32 core CPUs have 88 lanes and Threadripper Pro provides 128.
* 128gb RAM
* PCIe Gen4x4 lanes storage (No RAID!)
  * [Teamgroup a440](https://www.guru3d.com/articles-pages/teamgroup-a440-pro-ps5-4tb-pcie-4-m-2-nvme-review,2.html)
  * Samsung 980 Pro <- recommended for reliablity and availability.  we use these on-site.
  * WD SN850 Black <- Very fast
  * Optane P5800x <- fastest and most expensive
  * Seagate Firecuda 530 <- Supposedly fastest but untested.  Comes in a 4gb model.

### Software
You need:

* Archive [nodes](../node-setup) for every chain you want to relay
* [Hermes](./hermes)
* [Go Relayer](./rly)
