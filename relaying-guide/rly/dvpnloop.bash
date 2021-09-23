#!/bin/bash
while true
do
	sleep 10
	rly tx relay-packets dvpnhub
	rly tx relay-acknowledgements dvpnhub
	sleep 10
	rly tx relay-packets hubdvpn
	rly tx relay-acknowledgements hubdvpn
	sleep 10
	rly tx relay-packets osmodvpn
	rly tx relay-acknowledgements osmodvpn
	sleep 10
	rly tx relay-packets dvpnosmo
	rly tx relay-acknowledgements dvpnosmo
done
