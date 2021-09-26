# Notional Incident Reports



## September 2021
September 26, 2021
* Notional validators suffered downtime due to an unplanned reboot.  Our osmosis validator experienced apphash corruption because of operator error.  Specifically, it had been upgraded with cosmovisor, which downloaded a new binary.  Jacob re-started the osmosis validator with "osmosisd start" instead of "cosmovisor start", and this caused the chain to run with the old binary, leading to an apphash error and state corruption.    Jury is still out as to weather we will continue to use CV.
  * Key Symptom: Osmosis validator downtime
  * Resolution Status: resolved @ 15:22 ICT, Sept 26 2021


Early Sept, 2021
* Sifchain created thousands of connections to foriegn chains for no apparent reason causing issues operating hermes.  We have resolved this by disconnecting from Sifchain and filtering all Sif channels.  
  * Symptom: inability to sync
  * Resolution Status: Sifchain engineers confirm. Sifchain management denies.  Unlikely to ever be resolved.  Recommend unplugging sif.  
