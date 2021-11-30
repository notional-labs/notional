package keeper_test

import (
	"testing"

	testkeeper "github.com/BitCannaGlobal/bcna/testutil/keeper"
	"github.com/BitCannaGlobal/bcna/x/bcna/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.BcnaKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
