# Notional Incident Reports



## September 2021
September 26, 2021
* Notional validators suffered downtime due to an unplanned reboot.  Our osmosis validator experienced apphash corruption because of operator error.  Specifically, it had been upgraded with cosmovisor, which downloaded a new binary.  Jacob re-started the osmosis validator with "osmosisd start" instead of "cosmovisor start". Jury is still out as to weather we will continue to use CV.
Early September, 2021
* Sifchain created thousands of connections to foriegn chains for no apparent reason causing issues operating hermes.  We have resolved this by disconnecting from Sifchain and filtering all Sif channels.  
