package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateSupplychain = "create_supplychain"
	TypeMsgUpdateSupplychain = "update_supplychain"
	TypeMsgDeleteSupplychain = "delete_supplychain"
)

var _ sdk.Msg = &MsgCreateSupplychain{}

func NewMsgCreateSupplychain(creator string, product string, info string, supplyinfo string, supplyextra string) *MsgCreateSupplychain {
	return &MsgCreateSupplychain{
		Creator:     creator,
		Product:     product,
		Info:        info,
		Supplyinfo:  supplyinfo,
		Supplyextra: supplyextra,
	}
}

func (msg *MsgCreateSupplychain) Route() string {
	return RouterKey
}

func (msg *MsgCreateSupplychain) Type() string {
	return TypeMsgCreateSupplychain
}

func (msg *MsgCreateSupplychain) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateSupplychain) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateSupplychain) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateSupplychain{}

func NewMsgUpdateSupplychain(creator string, id uint64, product string, info string, supplyinfo string, supplyextra string) *MsgUpdateSupplychain {
	return &MsgUpdateSupplychain{
		Id:          id,
		Creator:     creator,
		Product:     product,
		Info:        info,
		Supplyinfo:  supplyinfo,
		Supplyextra: supplyextra,
	}
}

func (msg *MsgUpdateSupplychain) Route() string {
	return RouterKey
}

func (msg *MsgUpdateSupplychain) Type() string {
	return TypeMsgUpdateSupplychain
}

func (msg *MsgUpdateSupplychain) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateSupplychain) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateSupplychain) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteSupplychain{}

func NewMsgDeleteSupplychain(creator string, id uint64) *MsgDeleteSupplychain {
	return &MsgDeleteSupplychain{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteSupplychain) Route() string {
	return RouterKey
}

func (msg *MsgDeleteSupplychain) Type() string {
	return TypeMsgDeleteSupplychain
}

func (msg *MsgDeleteSupplychain) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteSupplychain) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteSupplychain) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
