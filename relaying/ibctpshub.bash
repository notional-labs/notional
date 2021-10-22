#!/bin/bash
while true
do
	hermes tx raw ft-transfer akashnet-2 cosmoshub-4 transfer channel-17 10 -d uatom -n 1 -r akash1lxh0u07haj646pt9e0l2l4qc3d8htfx5u55rh8 -t 60
	hermes tx raw ft-transfer osmosis-1 cosmoshub-4 transfer channel-141 10 -d uatom -n 1 -r osmo1dv3v662kd3pp6pxfagck4zyysas82adswgl2jf -t 60
	hermes tx raw ft-transfer regen-1 cosmoshub-4 transfer channel-185 10 -d uatom -n 1 -r regen134uk798rzj7eylfj9n7fdujemgj2f0glwrl9f4 -t 60
	hermes tx raw ft-transfer core-1 cosmoshub-4 transfer channel-190 10 -d uatom -n 1 -r persistence1dv3v662kd3pp6pxfagck4zyysas82adsgl2f2l -t 60
	hermes tx raw ft-transfer irisnet-1 cosmoshub-4 transfer channel-182 10 -d uatom -n 1 -r iaa1dv3v662kd3pp6pxfagck4zyysas82adsn3vtx2 -t 60
	hermes tx raw ft-transfer sentinelhub-2 cosmoshub-4 transfer channel-186 10 -d uatom -n 1 -r sent1dv3v662kd3pp6pxfagck4zyysas82adsag6rq5 -t 60
	hermes tx raw ft-transfer crypto-org-chain-mainnet-1 cosmoshub-4 transfer channel-187 10 -d uatom -n 1 -r cro1dv3v662kd3pp6pxfagck4zyysas82ads7gyrc2 -t 60
done
