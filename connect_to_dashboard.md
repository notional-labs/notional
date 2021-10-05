# Connect your validator to Prometheus Analytics

By connecting your validator to our Prometheus Analytics your node will provide valuable data, which will be shown in a public dashboard so we can better monitor the network.
[Mainnet Dashboard](https://monitor.bitcanna.io/d/UJyurCTWz/bitcanna-mainnet-dashboard?orgId=2&refresh=5s)

1. Enable the prometheus metrics in config.toml
```
nano $HOME/.bcna/config/config.toml
```
Go to the end of the file and change these parameters:
```
#######################################################
###       Instrumentation Configuration Options     ###
#######################################################
[instrumentation]

prometheus = true

prometheus_listen_addr = "0.0.0.0:26660"

```
>in `nano` type CTRL + X to exit + Y to save and exit.
Reset the daemon:
```
sudo service bcnad restart
```
2. Enable a firewall rule to let us collect the data.
For Ubuntu user:
```
sudo ufw allow from 178.62.236.228 proto tcp to any port 26660
```

3. Provide the server IP from your validator (and sentries if applicable) to Raul BitCanna ES#3102 on Discord by Private message.

4. Check if your server is providing the data correctly by clicking the link below (after we have added your IP, this must be done manually by the team):
  * https://monitor.bitcanna.io/d/UJyurCTWz/bitcanna-mainnet-dashboard?orgId=2&refresh=5s 
  


