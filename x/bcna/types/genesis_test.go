package types_test

import (
	"testing"

	"github.com/BitCannaGlobal/bcna/x/bcna/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

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
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated bitcannaid",
			genState: &types.GenesisState{
				BitcannaidList: []types.Bitcannaid{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid bitcannaid count",
			genState: &types.GenesisState{
				BitcannaidList: []types.Bitcannaid{
					{
						Id: 1,
					},
				},
				BitcannaidCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated supplychain",
			genState: &types.GenesisState{
				SupplychainList: []types.Supplychain{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid supplychain count",
			genState: &types.GenesisState{
				SupplychainList: []types.Supplychain{
					{
						Id: 1,
					},
				},
				SupplychainCount: 0,
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
