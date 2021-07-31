# Notional


This is the notional software repository.  

On ARM, you should use SOS to use Notional

In Docker, you should use faddat/archlinux-docker to use Notional.

On AMD64, you should use Arch Linux to use Notional.

Over time, all of these will converge.  The .bash_profile here configures every major cosmos-sdk blockchain.  I encourage you to submit pull requests to add your own chain or fix seeds/peers.

the .bash_profile breaks down into a set of systemD unit files.  We have chosen to run without containers and initially only with screen to avoid software complexity. So far, that has gone extremely well.

At notional, we open source every piece of software that we use for validation and relaying.  If you want to get involved, just fork this repository and begin contributing.  This software has fairly steep system requirements which can be lowered by using State Sync. 

We hope to open source our hardware, as well. 

# System Requirements

### Single Node
* A raspberry pi 4 with SOS should do.

### Somewhere between single and many
* Hardware between rpi and the omni configuration

### Every IBC chain
8+ Core intel or amd cpu (I have 12, 16 and 32 core machines in production)
64+ GB RAM
8TB+ NVMe Storage with high write cycle capacity


## Thanks

Notional would like to thank its delegagtes, who feel that sustained R&D will lead to long-term higher profits in their cryptographic assets when compared to low-fee, no-fee or no-R&D validators.

Notional would like to thank PCBViet for then assistance navigating the challenging hardware design and manufacturing space. 