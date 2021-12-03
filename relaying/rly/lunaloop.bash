#!/bin/bash
while true
do
	rly tx relay-packets hubluna
	rly tx relay-acknowledgements hubluna
	rly tx relay-packets lunahub
	rly tx relay-acknowledgements lunahub
	rly tx relay-packets lunaosmo
	rly tx relay-acknowledgements lunaosmo
	rly tx relay-packets osmoluna
	rly tx relay-acknowledgements osmoluna
done
