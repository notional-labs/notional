## Manual update guide for bitcanna-1. Ruderalis upgrade on 24th Feb.
 
This guide shows how to perform a manual update of the binaries after a governance proposal has been approved for a chain update. If you want to build the binary from the source, detailed instructions can be found in the [README](https://github.com/BitCannaGlobal/bcna/blob/v.1.3.1.pre1/README.md) of our GitHub.

1) Stop your bcnad service **after you see this** in your logs `ERR UPGRADE "ruderalis" NEEDED at height: xxxxxxxxx`

```
sudo service bcnad stop
```
2) Download the binary (or compile it from the source).
```
wget -nc https://github.com/BitCannaGlobal/bcna/releases/download/v.1.3.1/bcnad
```
3) Check the sha256sum. 
```
sha256sum ./bcnad
```
It must return: `xxxxxxxxxxxxxxxxxxx`

4) Verify that the version is `.1.3.1`
```
chmod +x bcnad
./bcnad version
```
5) Move the new binary to your machine's PATH and overwrite the previous version
```
sudo mv bcnad $(which bcnad)   #copy&paste don't replace anything
```
If you know the exact destination you could also run: 
```
sudo mv bcnad /usr/local/bin/ #or wherever you have it
```
6) Start the bcnad service
```
sudo service bcnad start
```
7) Ensure that everything is OK by checking the logs 
```
sudo journalctl -u bcnad -f
```
