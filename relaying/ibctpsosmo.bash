#!/bin/bash
while true
do
	hermes tx raw ft-transfer cosmoshub-4 osmosis-1 transfer channel-0 10 -d uosmo -n 1 -r cosmos134uk798rzj7eylfj9n7fdujemgj2f0gl3p5el3 -t 60
	hermes tx raw ft-transfer akashnet-2 osmosis-1 transfer channel-1 10 -d uosmo -n 1 -r akash1lxh0u07haj646pt9e0l2l4qc3d8htfx5u55rh8 -t 60
	hermes tx raw ft-transfer regen-1 osmosis-1 transfer channel-8 10 -d uosmo -n 1 -r regen134uk798rzj7eylfj9n7fdujemgj2f0glwrl9f4 -t 60
	hermes tx raw ft-transfer core-1 osmosis-1 transfer channel-4 10 -d uosmo -n 1 -r persistence1dv3v662kd3pp6pxfagck4zyysas82adsgl2f2l -t 60
	hermes tx raw ft-transfer irisnet-1 osmosis-1 transfer channel-6 10 -d uosmo -n 1 -r iaa1dv3v662kd3pp6pxfagck4zyysas82adsn3vtx2 -t 60
	hermes tx raw ft-transfer sentinelhub-2 osmosis-1 transfer channel-2 10 -d uosmo -n 1 -r sent1dv3v662kd3pp6pxfagck4zyysas82adsag6rq5  -t 60
	hermes tx raw ft-transfer iov-mainnet-ibc osmosis-1 transfer channel-15 10 -d uosmo -n 1 -r star1dv3v662kd3pp6pxfagck4zyysas82ads8fznnh -t 60
done
