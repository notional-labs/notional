#!/bin/bash
while true
do
	rly tx relay-packets emhub
	rly tx relay-acknowledgements emhub
	rly tx relay-packets hubem
	rly tx relay-acknowledgements hubem
	rly tx relay-packets osmoem
	rly tx relay-acknowledgements osmoem
	rly tx relay-packets emosmo
	rly tx relay-acknowledgements emosmo
	rly tx relay-packets emiris
	rly tx relay-acknowledgements emiris
	rly tx relay-packets irisem
	rly tx relay-acknowledgements irisem
done
