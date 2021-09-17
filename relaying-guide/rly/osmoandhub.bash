#!/bin/bash
while true
do
	rly tx relay-packets osmohub
	rly tx relay-acknowledgements osmohub
	rly tx relay-packets hubosmo
	rly tx relay-acknowledgements hubosmo
done
