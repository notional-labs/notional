package keeper

import (
	"testing"

	"github.com/BitCannaGlobal/bcna/x/bcna/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"
)

func createNBitcannaid(keeper *Keeper, ctx sdk.Context, n int) []types.Bitcannaid {
	items := make([]types.Bitcannaid, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendBitcannaid(ctx, items[i])
	}
	return items
}

func TestBitcannaidGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBitcannaid(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetBitcannaid(ctx, item.Id))
	}
}

func TestBitcannaidExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBitcannaid(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasBitcannaid(ctx, item.Id))
	}
}

func TestBitcannaidRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBitcannaid(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveBitcannaid(ctx, item.Id)
		assert.False(t, keeper.HasBitcannaid(ctx, item.Id))
	}
}

func TestBitcannaidGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBitcannaid(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllBitcannaid(ctx))
}

func TestBitcannaidCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBitcannaid(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetBitcannaidCount(ctx))
}
