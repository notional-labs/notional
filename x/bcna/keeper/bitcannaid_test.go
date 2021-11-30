package keeper_test

import (
	"testing"

	keepertest "github.com/BitCannaGlobal/bcna/testutil/keeper"
	"github.com/BitCannaGlobal/bcna/testutil/nullify"
	"github.com/BitCannaGlobal/bcna/x/bcna/keeper"
	"github.com/BitCannaGlobal/bcna/x/bcna/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func createNBitcannaid(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Bitcannaid {
	items := make([]types.Bitcannaid, n)
	for i := range items {
		items[i].Id = keeper.AppendBitcannaid(ctx, items[i])
	}
	return items
}

func TestBitcannaidGet(t *testing.T) {
	keeper, ctx := keepertest.BcnaKeeper(t)
	items := createNBitcannaid(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetBitcannaid(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestBitcannaidRemove(t *testing.T) {
	keeper, ctx := keepertest.BcnaKeeper(t)
	items := createNBitcannaid(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveBitcannaid(ctx, item.Id)
		_, found := keeper.GetBitcannaid(ctx, item.Id)
		require.False(t, found)
	}
}

func TestBitcannaidGetAll(t *testing.T) {
	keeper, ctx := keepertest.BcnaKeeper(t)
	items := createNBitcannaid(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllBitcannaid(ctx)),
	)
}

func TestBitcannaidCount(t *testing.T) {
	keeper, ctx := keepertest.BcnaKeeper(t)
	items := createNBitcannaid(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetBitcannaidCount(ctx))
}
