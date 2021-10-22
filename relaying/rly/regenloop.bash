#!/bin/bash
while true
do
	rly tx relay-packets regenhub
	rly tx relay-acknowledgements regenhub
	rly tx relay-packets hubregen
	rly tx relay-acknowledgements hubregen
	rly tx relay-packets osmoregen
	rly tx relay-acknowledgements osmoregen
	rly tx relay-packets regenosmo
	rly tx relay-acknowledgements rgenosmo
done
