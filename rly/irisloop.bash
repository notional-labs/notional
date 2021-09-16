#!/bin/bash
while true
do
	rly tx relay-packets irishub
	rly tx relay-acknowledgements irishub
	rly tx relay-packets hubiris
	rly tx relay-acknowledgements hubiris
	rly tx relay-packets osmoiris
	rly tx relay-acknowledgements osmoiris
	rly tx relay-packets irisosmo
	rly tx relay-acknowledgements irisosmo
done
