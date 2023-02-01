# Notional Validation

## Index
1. [What chains does Notional validate?](#what-chains-does-notional-validate)
1. [The role of a validator](#the-role-of-a-validator)
1. [Our validator policy](#our-validator-policy)
1. [Where we want to validate](#where-we-want-to-validate)
1. [How we validate](#how-we-validate)
1. [Validators and relayers partnerships](#validators-and-relayers-partnerships)

## What chains does Notional validate?
Notional is an **active set** validator on:
1) [Osmosis](https://www.mintscan.io/osmosis/validators/osmovaloper1083svrca4t350mphfv9x45wq9asrs60c6rv0j5)
2) [Cosmoshub](https://www.mintscan.io/cosmos/validators/cosmosvaloper1083svrca4t350mphfv9x45wq9asrs60cdmrflj)
3) [Juno](https://www.mintscan.io/juno/validators/junovaloper1083svrca4t350mphfv9x45wq9asrs60cpqzg0y)
4) [Sifchain](https://www.mintscan.io/sifchain/validators/sifvaloper1083svrca4t350mphfv9x45wq9asrs60cyssqu6)
5) [Omniflix](https://www.skynetexplorers.com/omniflix/staking/omniflixvaloper15wshq6lmxmcn9vxky2mxf8zhstpn9ywmfc5ke5)
6) [Secret-Network](https://www.mintscan.io/secret/validators/secret18rchk5exp2vzcwrwuret5sjwpxhf4sq2m9hgq2)
7) [Starname](https://www.mintscan.io/starname/validators/starvaloper1pdqlmncych8uzsfdnsptv7s0wpazc0rgv7zc6h)
8) [Regen](https://www.mintscan.io/regen/validators/regenvaloper1083svrca4t350mphfv9x45wq9asrs60ct2p9a5)
9) [Akash](https://www.mintscan.io/akash/validators/akashvaloper1083svrca4t350mphfv9x45wq9asrs60c0k5a63)
10) [Sentinel](https://www.mintscan.io/sentinel/validators/sentvaloper1083svrca4t350mphfv9x45wq9asrs60cv37gc8)
11) [E-Money](https://www.mintscan.io/emoney/validators/emoneyvaloper16dc379m0qj64g4pr4nkl7ewak52qy2srpe6lxp)
12) [Ixo](https://www.mintscan.io/ixo/validators/ixovaloper1083svrca4t350mphfv9x45wq9asrs60camel0h)
13) [Likecoin](https://likecoin.bigdipper.live/validators/cosmosvaloper16dc379m0qj64g4pr4nkl7ewak52qy2srvwj2rz)
14) [Ki](https://blockchain.ki/validator/kivaloper1lmkzaxztjpesh0mf7qy76l5npqwc7fk3l2k57g)
15) [Cyber](https://cyb.ai/network/bostrom/hero/bostromvaloper1g65rmjkeuy5rywx04s4fvwfylmlz98vq4gzln5)
16) [Cheqd](https://explorer.cheqd.io/validators/cheqdvaloper1gyjqlfkrggd0uyd748fw9y5kq9xzmjqqh8848x)
17) [Stargaze](https://www.mintscan.io/stargaze/validators/starsvaloper1v8yp5x5kfex4wep2pfuuyw68cn2lst3ksl0gss)
18) [Band](https://www.mintscan.io/band/validators/bandvaloper19huytqr8srz9wcdhvas5cvxddg8dtqcv6tce0s)
19) [Chihuahua](https://www.mintscan.io/chihuahua/validators/chihuahuavaloper1h6vcu4r2hx70x5f0l3du3ey2g98u9ut2tafnnv)
20) [Kava](https://www.mintscan.io/kava/validators/kavavaloper13jyqfhak8mu4c7pydjm3eu4qla7g06a9u6xf8g)
21) [BitCanna](https://www.mintscan.io/bitcanna/validators/bcnavaloper1dl7w3myyfmnarh0t5uxmy7qe6szagz3kyhzq07)
22) [Konstellation](https://www.mintscan.io/konstellation/validators/darcvaloper1fndgrsqmmq68ppl42wjkxh32nwpuj7vqtgep38)
23) [Evmos](https://www.mintscan.io/evmos/validators/evmosvaloper1rv94jqhlhx6makfwl6qs390e4shg32m6w6dxzy)
24) [Provenance](https://www.mintscan.io/provenance/validators/pbvaloper10ap9fj9uq50cardmlzdj367kqg5x3ghjdp2v6p)
25) [Vidulum](https://ping.pub/vidulum/staking/vdlvaloper16pu0t4yauhduaxvu3k29w539da5d2mfxqjdmjj)
26) [Bitsong](https://www.mintscan.io/bitsong/validators/bitsongvaloper1je872m97uce2ttztkh8pdx6zezw5kr03dj3lff)
27) [Fetch.AI](https://www.mintscan.io/fetchai/validators/fetchvaloper1s9myentgxavnpw7648an2v6zvvpza0axa6dd0x)
28) [Gravity-Bridge](https://www.mintscan.io/gravity-bridge/validators/gravityvaloper10f6jwwrkyhf40v8lx9cdtypqyl796m5vemg00n)
29) [Umee](https://www.mintscan.io/umee/validators/umeevaloper1dmahqt84r9je3sqvljzjrttjj78cmrf39k5zhs)
30) [Injective](https://www.mintscan.io/injective/validators/injvaloper16eg6wf2k6v0lzwu2vsrhxhe0tcycgr7jm98nyz)
31) [Passage3D](https://www.mintscan.io/passage/validators/pasgvaloper14npnd73z5qjwz4az2dpw6vcdvkj29qg0cgar4j)
32) [Stride](https://www.mintscan.io/stride/validators/stridevaloper1kvwpcr45lh7wn53wp9ac42ypr3t8zjqy6ks9au)
33) [QuickSilver](https://quicksilver.explorers.guru/validator/quickvaloper1rszydypce7tmwkderpss58xwtqjg0j0vjm8rmv)
34) [Mars](https://explorer.marsprotocol.io/validators/marsvaloper1v8fkm5qj6lzguwvavj2ms62ekeday824w6c8cs)

## The role of a validator

We think that validators should be actively involved in supporting the communities that they serve.  As we scaled, it became increasingly obvious to Jacob that he could not personally manage every piece of adequately serving all IBCGang blockchain communities, so we're moving to a model where larger vote weight %age validators have an individual rep to the community, and smaller vote weight chains have shared representatives. 

We are in it for the long-haul.

We manage our organization by git issues, and if your community needs help, they can make an issue here.  

## Our validator policy
1. We do not validate chains whose development teams do not prioritize user well-being
1. We prioritize ethics and the well-being of users above all other matters.  When there is a conflict of interest, we will discuss that with the community in an open fashion at: https://twitter.com/notionaldao.  We discuss things on twitter, because it is a commons.
1. We audit and test releases before public upgrade on chain that we validate.
    * As a validator on many chains, we have directly experienced chain upgrade failure when core team overlooks a bug. It is always good to have a second independent inspection from an experienced validator like Notional.
1. While we strive for transparency, in security critical situations where disclosures could harm user well being, we're silent as a mouse. 

## Where we want to validate
Notional is validating, but not in the active set:

## Testnet validators
1) [Axelar](https://testnet.axelarscan.io/validator/axelarvaloper19m6f7gzvjpzj5mm72wcuayr6ds60sjtnkx2j0k)
2) [Stride](https://stride.explorers.guru/validator/stridevaloper1kvwpcr45lh7wn53wp9ac42ypr3t8zjqy6ks9au)
3) [Sei](https://sei.explorers.guru/validator/seivaloper1d4lyuujr4urd7fkdlytccrd0cljqycycjp9xz8)
4) [Mars](https://testnet-explorer.marsprotocol.io/validators/marsvaloper1v8fkm5qj6lzguwvavj2ms62ekeday824w6c8cs)


Notional wishes to validate:
* Every IBC-enabled blockchain


Notional has decided to maintain relayers for all chains -- and [document processes](../relaying) -- on all chains where we are in the active validator set.  Presently, that means that we will maintain relayers on up to 20 * 20 = 400x2 = 800 channels.  If you are a community member or team that wants to see notional relay for your community, please put an issue on this repository and we will set up a relayer.  


## How we validate

We aren't most validators.  We're operating under the assumption that **notional is joining your team, to serve your chain's community**.  From that point of view, we validate, relay, provide support, and soon, even develop hardware products with the blockchain communities that we serve.  

* Bare Metal
* On-Premesis
* Industrial Strength Internet Connections built from residential fiber lines for resilience and easy moves
* 4G network backup
* Love, passion, play, and fun:  we want to get to know you, your software, and your users and build something better than exists today.

## Validators and relayers partnerships <- this became the GMA.
* https://github.com/chandrastation
* NullMames

Our technical partners agree to:
* Mutual Aid Re: Uptime (eg: phone calls to one another)
* Full commitment to open source, repeatable infrastructure (we only partner with validators who document their infrastructure)
* Join a Twitter DM Chat, since it isn't discord. 
* Share information about chain launches


