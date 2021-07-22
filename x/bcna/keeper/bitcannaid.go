package keeper

import (
	"encoding/binary"
	"github.com/BitCannaGlobal/bcna/x/bcna/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"strconv"
)

// GetBitcannaidCount get the total number of TypeName.LowerCamel
func (k Keeper) GetBitcannaidCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BitcannaidCountKey))
	byteKey := types.KeyPrefix(types.BitcannaidCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to uint64
		panic("cannot decode count")
	}

	return count
}

// SetBitcannaidCount set the total number of bitcannaid
func (k Keeper) SetBitcannaidCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BitcannaidCountKey))
	byteKey := types.KeyPrefix(types.BitcannaidCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendBitcannaid appends a bitcannaid in the store with a new id and update the count
func (k Keeper) AppendBitcannaid(
	ctx sdk.Context,
	bitcannaid types.Bitcannaid,
) uint64 {
	// Create the bitcannaid
	count := k.GetBitcannaidCount(ctx)

	// Set the ID of the appended value
	bitcannaid.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BitcannaidKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&bitcannaid)
	store.Set(GetBitcannaidIDBytes(bitcannaid.Id), appendedValue)

	// Update bitcannaid count
	k.SetBitcannaidCount(ctx, count+1)

	return count
}

// SetBitcannaid set a specific bitcannaid in the store
func (k Keeper) SetBitcannaid(ctx sdk.Context, bitcannaid types.Bitcannaid) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BitcannaidKey))
	b := k.cdc.MustMarshalBinaryBare(&bitcannaid)
	store.Set(GetBitcannaidIDBytes(bitcannaid.Id), b)
}

// GetBitcannaid returns a bitcannaid from its id
func (k Keeper) GetBitcannaid(ctx sdk.Context, id uint64) types.Bitcannaid {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BitcannaidKey))
	var bitcannaid types.Bitcannaid
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetBitcannaidIDBytes(id)), &bitcannaid)
	return bitcannaid
}

// HasBitcannaid checks if the bitcannaid exists in the store
func (k Keeper) HasBitcannaid(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BitcannaidKey))
	return store.Has(GetBitcannaidIDBytes(id))
}

// GetBitcannaidOwner returns the creator of the
func (k Keeper) GetBitcannaidOwner(ctx sdk.Context, id uint64) string {
	return k.GetBitcannaid(ctx, id).Creator
}

// RemoveBitcannaid removes a bitcannaid from the store
func (k Keeper) RemoveBitcannaid(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BitcannaidKey))
	store.Delete(GetBitcannaidIDBytes(id))
}

// GetAllBitcannaid returns all bitcannaid
func (k Keeper) GetAllBitcannaid(ctx sdk.Context) (list []types.Bitcannaid) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BitcannaidKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Bitcannaid
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetBitcannaidIDBytes returns the byte representation of the ID
func GetBitcannaidIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetBitcannaidIDFromBytes returns ID in uint64 format from a byte array
func GetBitcannaidIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
