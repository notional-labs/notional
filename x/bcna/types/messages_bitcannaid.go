package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateBitcannaid = "create_bitcannaid"
	TypeMsgUpdateBitcannaid = "update_bitcannaid"
	TypeMsgDeleteBitcannaid = "delete_bitcannaid"
)

var _ sdk.Msg = &MsgCreateBitcannaid{}

func NewMsgCreateBitcannaid(creator string, bcnaid string, address string) *MsgCreateBitcannaid {
	return &MsgCreateBitcannaid{
		Creator: creator,
		Bcnaid:  bcnaid,
		Address: address,
	}
}

func (msg *MsgCreateBitcannaid) Route() string {
	return RouterKey
}

func (msg *MsgCreateBitcannaid) Type() string {
	return TypeMsgCreateBitcannaid
}

func (msg *MsgCreateBitcannaid) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateBitcannaid) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateBitcannaid) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateBitcannaid{}

func NewMsgUpdateBitcannaid(creator string, id uint64, bcnaid string, address string) *MsgUpdateBitcannaid {
	return &MsgUpdateBitcannaid{
		Id:      id,
		Creator: creator,
		Bcnaid:  bcnaid,
		Address: address,
	}
}

func (msg *MsgUpdateBitcannaid) Route() string {
	return RouterKey
}

func (msg *MsgUpdateBitcannaid) Type() string {
	return TypeMsgUpdateBitcannaid
}

func (msg *MsgUpdateBitcannaid) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateBitcannaid) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateBitcannaid) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteBitcannaid{}

func NewMsgDeleteBitcannaid(creator string, id uint64) *MsgDeleteBitcannaid {
	return &MsgDeleteBitcannaid{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteBitcannaid) Route() string {
	return RouterKey
}

func (msg *MsgDeleteBitcannaid) Type() string {
	return TypeMsgDeleteBitcannaid
}

func (msg *MsgDeleteBitcannaid) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteBitcannaid) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteBitcannaid) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
