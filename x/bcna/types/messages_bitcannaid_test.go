package types

import (
	"testing"

	"github.com/BitCannaGlobal/bcna/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateBitcannaid_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateBitcannaid
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateBitcannaid{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateBitcannaid{
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

func TestMsgUpdateBitcannaid_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateBitcannaid
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateBitcannaid{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateBitcannaid{
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

func TestMsgDeleteBitcannaid_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteBitcannaid
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteBitcannaid{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteBitcannaid{
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
