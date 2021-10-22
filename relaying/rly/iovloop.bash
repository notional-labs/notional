#!/bin/bash
while true
do
#	rly tx relay-packets dvpnhub
#	rly tx relay-packets hubdvpn
	sleep 30
	rly tx relay-packets iovosmo
	sleep 30
	rly tx relay-packets osmoiov
done
