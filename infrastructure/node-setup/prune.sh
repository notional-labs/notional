while true
do
        systemctl stop osmosis
        ~/cosmprund/build/cosmprund prune ~/.osmosisd/data --cosmos-sdk=false
        systemctl start osmosis
        systemctl stop gaia
        ~/cosmprund/build/cosmprund prune ~/.gaia/data --cosmos-sdk=false    
        systemctl start gaia
        sleep 604800
done
