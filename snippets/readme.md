# Code snippets for operators

Please go ahead and add your own snipptets with a "contributed by" tag.  We'll attribute all snippets we collect here. 

### Contributed by Jack Zampolin


Get your peers:
```bash
curl -s localhost:26657/net_info | jq -r '.result.peers[] | "\(.node_info.id) \(.remote_ip)"'
```

Get consensus state:
```bash
curl -s localhost:26657/consensus_state | jq '.result.round_state.height_vote_set[].prevotes_bit_array'
```

Get blocks per minute:
```bash
     if [ -z "$2" ]; then
        echo "Need to input a rpc endpoint for a node that is behind chain tip"
        return 1
      fi
      if [ -z "$3" ]; then
        echo "Need to input a rpc endpoint for a node that is on same network at chain tip"
        return 1
      fi
      date
      local behind=$(curl -sL $2/status | jq -r '.result.sync_info.latest_block_height')
      local tip=$(curl -sL $3/status | jq -r '.result.sync_info.latest_block_height')
      local blocks=$(expr $tip - $behind)
      echo "$2 is $blocks blocks behind $3"
      echo "waiting for 60 seconds to estimate sync speed..."
      sleep 60
      local behind1=$(curl -s: $2/status | jq -r '.result.sync_info.latest_block_height')
      local tip1=$(curl -sL $3/status | jq -r '.result.sync_info.latest_block_height')
      local blocks1=$(expr $tip1 - $behind1)
      local permin=$(expr $blocks - $blocks1)
      echo "syncing $permin per minute $(echo "scale=0; ($blocks1/$permin)/1" | bc) min to tip"
      ;;
```

## Contributed by cros-nest

**get validator votes on a proposal**

```bash
vote=39
./osmosisd query staking validators -o json --limit 1000 | jq -r '.validators[] | "\(.operator_address) \(.description.moniker)"' | while read addr moniker ; do echo -en "$moniker\t"; ./osmosisd q gov vote ${vote} $(./osmosisd debug addr $addr 2>&1 | awk '{ if (/Acc/) {print $3} }') -o json | jq -r '.option'; done 2>&1 | grep VOTE | sort -k 2 -t '      ' | column -t -n -s '   '
```


