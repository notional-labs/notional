# Notional Incident Reports

## October 2021
October 19, 2021
- Injective is unstable, keeps crashing with panic errors.
```
panic: Failed to process committed block (2045753:A63C57B2649076F59838F628BC17924470144FE3B07FB4CAFE21D502D20B9F31): wrong Block.Header.AppHash.  Expected A46CCBDCE9A5540A9A1FCA02718532A81CEC0071E6D58109F03A2E5D35423201, got CFE969288E344C6C9EAD071561A5C6A033D098CADF43B4317521AA421C00D10B
```
- [ ] There are no other working versions. The current version is [` Mainnet-10001-rc5-1627871816`](https://github.com/InjectiveLabs/injective-chain-releases/releases/tag/v1.0.1-1627871816).

October 18, 2021
- Likecoin is unhealthy with refused connection:
```
Oct 18 12:55:42.018 ERROR ThreadId(01) [likecoin-mainnet-2] chain is unhealthy: 
   0: health check failed for endpoint tendermint::ServiceClient on the gRPC interface of chain likecoin-mainnet-2:http://65.21.202.37:3101/
   1: transport error: error trying to connect: tcp connect error: Connection refused (os error 111)
```
- [x] Change RPC variable to `0.0.0.0`. `127.0.0.1` is a loopback address and for local use only.
```
LIKED_RPC_LADDR=tcp://127.0.0.1:3101
```

October 17. 2021
- Juno is unhealthy with the conflict SDK version.
```
Reason: Hermes health check failed while verifying the application compatibility for chain juno-1:http://127.0.0.1:2072/; caused by: SDK module at version '0.44.2' does not meet compatibility requirements >=0.41.3, <=0.44.1 for application junod:v1.0.0-7-g38d7b6f-38d7b6fa20f1ab5e935da40769aebbc26c931c70
```
- In line 26, `relayer/src/chain/cosmos/compatibility.rs`:
```
const SDK_MODULE_VERSION_REQ: &str = ">=0.41.3, <=0.44.1";
```
- [x] Change the requirement. *See pull request here.*

October 17, 2021
- Gaia was unable to connect to peers node and kept missing about 100 blocks before being identified and fixed.
- In the default setting of gaiad, there aren't enough peers nodes for it to connect and sync.

October 14, 2021
- Gaia missed some blocks and take too much RAM usage. The Pi became unresponding after a while.
- [x] We tried to replace the Pi with Raspberry Pi 8GB, and currently tracking for performance.

October 9-12, 2021
* Crypto.org relaying is down due to a lengthy sync process. 
- [ ] Complete a sync for crypto.org chain
- [ ] Create a distribution process for the full archive node state of crypto.org chain

October 12, 2021
* We missed at least several hours worth of blocks during a sifchain upgrade.  
* Due to the same sifchain upgrade, our Sif relay system went down for at least several hours, too. 
- [x] Sif relay service restored
- [x] Sif validator service restored 
- [ ] Ensure that we have a process in place to monitor Sifchain and other upgrades via governance. 


October 11, 2021
* The heremes relayer was rebooted.  Because services and volume mounts on it were not made permanent yet, it took several hours to get back up and running.  
- [x] Relayer service restored on all 16 IBC-based blockchains 
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



