package keeper

import (
	"testing"

	"github.com/BitCannaGlobal/bcna/x/bcna/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"
)

func createNSupplychain(keeper *Keeper, ctx sdk.Context, n int) []types.Supplychain {
	items := make([]types.Supplychain, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendSupplychain(ctx, items[i])
	}
	return items
}

func TestSupplychainGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNSupplychain(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetSupplychain(ctx, item.Id))
	}
}

func TestSupplychainExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNSupplychain(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasSupplychain(ctx, item.Id))
	}
}

func TestSupplychainRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNSupplychain(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveSupplychain(ctx, item.Id)
		assert.False(t, keeper.HasSupplychain(ctx, item.Id))
	}
}

func TestSupplychainGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNSupplychain(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllSupplychain(ctx))
}

func TestSupplychainCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNSupplychain(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetSupplychainCount(ctx))
}
