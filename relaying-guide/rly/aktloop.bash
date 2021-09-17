#!/bin/bash
while true
do
	rly tx relay-packets hubakt
	rly tx relay-acknowledgements hubakt
	rly tx relay-packets akthub
	rly tx relay-acknowledgements akthub
	rly tx relay-packets aktosmo
	rly tx relay-acknowledgements aktosmo
	rly tx relay-packets osmoakt
	rly tx relay-acknowledgements osmoakt
done
