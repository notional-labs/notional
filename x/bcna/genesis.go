package bcna

import (
	"github.com/BitCannaGlobal/bcna/x/bcna/keeper"
	"github.com/BitCannaGlobal/bcna/x/bcna/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the bitcannaid
	for _, elem := range genState.BitcannaidList {
		k.SetBitcannaid(ctx, elem)
	}

	// Set bitcannaid count
	k.SetBitcannaidCount(ctx, genState.BitcannaidCount)
	// Set all the supplychain
	for _, elem := range genState.SupplychainList {
		k.SetSupplychain(ctx, elem)
	}

	// Set supplychain count
	k.SetSupplychainCount(ctx, genState.SupplychainCount)
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.BitcannaidList = k.GetAllBitcannaid(ctx)
	genesis.BitcannaidCount = k.GetBitcannaidCount(ctx)
	genesis.SupplychainList = k.GetAllSupplychain(ctx)
	genesis.SupplychainCount = k.GetSupplychainCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
