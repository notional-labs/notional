package types

import (
	"testing"

	"github.com/BitCannaGlobal/bcna/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateSupplychain_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateSupplychain
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateSupplychain{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateSupplychain{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgUpdateSupplychain_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateSupplychain
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateSupplychain{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateSupplychain{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgDeleteSupplychain_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteSupplychain
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteSupplychain{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteSupplychain{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
