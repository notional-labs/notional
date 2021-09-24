package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"github.com/BitCannaGlobal/bcna/x/bcna/types"
)

func TestSupplychainMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateSupplychain(ctx, &types.MsgCreateSupplychain{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestSupplychainMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateSupplychain
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateSupplychain{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateSupplychain{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateSupplychain{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateSupplychain(ctx, &types.MsgCreateSupplychain{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateSupplychain(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestSupplychainMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteSupplychain
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteSupplychain{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteSupplychain{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteSupplychain{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateSupplychain(ctx, &types.MsgCreateSupplychain{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteSupplychain(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
