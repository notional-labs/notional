# Notional Labs Position Paper on "LUNC"

December 20, 2022

Jacob Gadikian

Funded by Delegations to Notional Validators in Cosmos

## History

This is a followup to our earlier paper titled "wtf happened to terra", which you can find here:

https://github.com/notional-labs/notional/raw/master/incidents/WTF%20HAPPENED%20TO%20TERRA.pdf

Just before writing that paper, I hosted a twitter space titled "euthanize terra".  I argued that it was a Zombie chain, and its continued existence is dangerous.  

...but apparently I was wrong, though not entirely.  That's good, too, because euthanasia sis a very grim perspective indeed.  

## Present state and concise recommendations

### We need a new name

I was calling it the rebels chain, but apparently the rebels didn't manage to stay unified / rebellious and some are afraid that it is a cash grab from the community pool.  That may be true, so I propose that the working title for the chain be "dawn", due to the optimistic nature of that word, and my own personal history with it, eg: https://github.com/dawn-network/dawn.  It's always darkest before the dawn, anyhow.

### Defend chain sovereignty at all costs

Sovereignty is precious for a blockchain, and is the source of any and all financial value that it may have.  Therefore, Dawn shouldn't have a single, official github repository.  Instead, validators should be choosing the correct version of software using git commit hashes.  The shouldn't be a canonical repository anymore, and the chain should be capable of hosting its own code (long-term goal).  In this way, no one can control Dawn.  Not the rebels, not Notional, not Do Kwon -- nobody.  Personally I'm quite sure that Do would want it that way, anyhow.  

The moves to protect the sovereignty of Dawn are expensive in the short term, and make the chain much cheaper and easier to operate in the long run.

### Merge is death (as opposed to "merge or die")

Independence means exactly independence.  So our official stance is that Dawn should not merge to Luna.  We're changing our name, because Do's daughter is named Luna, and we're respecting his massive initial contributions to the chain. 

### IBC is primary

As a high priority, we should move to ensure a best in class IBC experience.  This will mean collaborating actively with teams like:

* Osmosis
* Juno
* Mars
* Stride
* Quicksilver
* Cosmos Hub
* Akash
* Sentinel
* Secret

Where LUNC was isolationist, Dawn will reach out to other communities and actively collaborate with them to improve the state of networks generally. 

### State is sacred

Moves that would compromise contract history should be rejected because the tokens created by contracts -- weather maintained or not -- belong to users in the community.  Their property rights should be respected.  This extends to the notion of social slashing, which we should organzie a constitution to reject.

### Immediate technical objectives

In this order, we should:

* move to pebbledb
* discontinue support for goleveldb, rocksdb, and others
* use iavl fast node via iavl 0.19.4
* implement mev-tendermint as default on the network and be prepared to slash validators running non-canonical code for the purpose of mev searching (I don't consider this to be social slashing, but instead vital security operations -- there was a MEV component to the DDoS that happened in May, 2022.)


### Short term technical objectives

The moves above will enhance the safety of Dawn by making its state easier to work with. 

After that, we should simulate a chain upgrade from the current SDK v0.44.5-patch codebase to SDK v0.45.11+, or even to SDK v0.47.0, depending on timeline.  In this upgrade, we should not upgrade the WASM contract engine.  In a second, separatge upgrade, we should upgrade to the latest WASM by augmenting the current WASM virtual machine.  Since the Secret Network team has done this in the past, we should collaborate with Assaf from secret network on the exact way to implement the dual VM setup while keeping the network secure.

### Technical Vision

Dawn will be a chain focused on its own sovereignty, a place to run experiments -- even dangerous ones.  

That means that from a technical perspective, we've got to focus on stability and security.  The immediate and short term technical objectives will buttress the chain.

### Notional's Role

We would like to support the community from a technical perspective, and implement the wishes of the community as expressed by governance.  Our governance team lead is @litbit86 (twitter), and it is likely that we'll consult with other community members on objectives.
Please view us as a facilitator, rather than a leader.  We'll only make moves that have the consent of the community through governance.

### Pricing of our work

Upon delivery of the immediate technical objectives and demonstration of their viability, we will submit a governance proposal requesting about $100,000 of LUNC.  This isn't final, and we're going to do the work without payment at this time.  We're open to suggestions from the community on how to proceed with this.  Notably, that capital won't be exchanged to get liquid, but instead acquire a position for us.  We will stake it on our validator.  Ed offered some hourly funding, and we'll discuss that with him, as well.  We will keep these matters transparent, to ward off tinfoil hat syndrome. 

We're not interested in capturing Dawn, but instead facilitating what the community wants to see happen with it.


### No Promises

Both I (Jacob) and Notional make no promises of anything, at any time, for any reason, other than to work diligently to support the communities that we serve in our capacity as validator. There are risks to all of the technical moves I've described here, up to and including the death of this chain.  We will at all times work diligently to support Dawn and its community.
