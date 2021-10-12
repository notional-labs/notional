# Notional Incident Reports

## October 2021

October 12, 2021
* We missed at least several hours worth of blocks during a sifchain upgrade.  
- [ ] Ensure that we have a process in place to monitor Sifchain and other upgrades via governance. 


October 11, 2021
* The heremes relayer was rebooted.  Because services and volume mounts on it were not made permanent yet, it took several hours to get back up and running.  
- [ ] Make volume mounts permanent for the relayer machine using /etc/fstab
- [ ] Make archive node services on the relayer machine come up automatically using systemd units


## September 2021
September 28, 2021
**Relayer Outage**

Due to a lack of human and technical capacity, relayers have been taken offline for software and hardware upgrades.

The realyers will be operational again ASAP, with dramatically improved performance.  We'll operate relay clusters in Europe, the United States, and Hanoi, Vietnam.  The re-launching of Notional relaying will bring with it significant improvements to automation, as well as the creation of services that distribute snapshots over IPFS.    




September 26, 2021
* Notional validators suffered downtime due to an unplanned reboot.  Our osmosis validator experienced apphash corruption because of operator error.  Specifically, it had been upgraded with cosmovisor, which downloaded a new binary.  Jacob re-started the osmosis validator with "osmosisd start" instead of "cosmovisor start", and this caused the chain to run with the old binary, leading to an apphash error and state corruption.    Jury is still out as to weather we will continue to use CV.
  * Key Symptom: Osmosis validator downtime
  * Resolution Status: resolved @ 15:22 ICT, Sept 26 2021


Early Sept, 2021
* Sifchain created thousands of connections to foreign chains for no apparent reason causing issues operating hermes.  We have resolved this by disconnecting from Sifchain and filtering all Sif channels.  
  * Symptom: Hermes fails to relay.
  * Resolution Status: Sifchain engineers confirm. Sifchain management denies.  Unlikely to ever be resolved.  Recommend unplugging sif.  



