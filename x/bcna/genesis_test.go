package bcna_test

import (
	"testing"

	keepertest "github.com/BitCannaGlobal/bcna/testutil/keeper"
	"github.com/BitCannaGlobal/bcna/testutil/nullify"
	"github.com/BitCannaGlobal/bcna/x/bcna"
	"github.com/BitCannaGlobal/bcna/x/bcna/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		BitcannaidList: []types.Bitcannaid{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		BitcannaidCount: 2,
		SupplychainList: []types.Supplychain{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		SupplychainCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.BcnaKeeper(t)
	bcna.InitGenesis(ctx, *k, genesisState)
	got := bcna.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.BitcannaidList, got.BitcannaidList)
	require.Equal(t, genesisState.BitcannaidCount, got.BitcannaidCount)
	require.ElementsMatch(t, genesisState.SupplychainList, got.SupplychainList)
	require.Equal(t, genesisState.SupplychainCount, got.SupplychainCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
