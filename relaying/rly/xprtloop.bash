#!/bin/bash
while true
do
	rly tx relay-packets xprthub
	rly tx relay-acknowledgements xprthub
	rly tx relay-packets hubxprt
	rly tx relay-acknowledgements hubxprt
	rly tx relay-packets osmoxprt
	rly tx relay-acknowledgements osmoxprt
	rly tx relay-packets xprtosmo
	rly tx relay-acknowledgements xprtosmo
done
