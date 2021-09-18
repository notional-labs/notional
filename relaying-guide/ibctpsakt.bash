#!/bin/bash
while true
do
	hermes tx raw ft-transfer cosmoshub-4 akashnet-2 transfer channel-17 10 -d uosmo -n 1 -r cosmos134uk798rzj7eylfj9n7fdujemgj2f0gl3p5el3 -t 60
	hermes tx raw ft-transfer osmosis-1 akashnet-2 transfer channel-9 10 -d uosmo -n 1 -r osmo1dv3v662kd3pp6pxfagck4zyysas82adswgl2jf -t 60
	hermes tx raw ft-transfer regen-1 akashnet-2 transfer channel-13 10 -d uosmo -n 1 -r regen134uk798rzj7eylfj9n7fdujemgj2f0glwrl9f4 -t 60
	hermes tx raw ft-transfer core-1 akashnet-2 transfer channel-3 10 -d uosmo -n 1 -r persistence1dv3v662kd3pp6pxfagck4zyysas82adsgl2f2l -t 60
	hermes tx raw ft-transfer irisnet-1 akashnet-2 transfer channel-16 10 -d uosmo -n 1 -r iaa1dv3v662kd3pp6pxfagck4zyysas82adsn3vtx2 -t 60
	hermes tx raw ft-transfer sentinelhub-2 akashnet-2 transfer channel-2 10 -d uosmo -n 1 -r sent1dv3v662kd3pp6pxfagck4zyysas82adsag6rq5 -t 60
	hermes tx raw ft-transfer crypto-org-chain-mainnet-1 akashnet-2 transfer channel-15 10 -d uosmo -n 1 -r cro1dv3v662kd3pp6pxfagck4zyysas82ads7gyrc2 -t 60
done
