package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateBitcannaid{}, "bcna/CreateBitcannaid", nil)
	cdc.RegisterConcrete(&MsgUpdateBitcannaid{}, "bcna/UpdateBitcannaid", nil)
	cdc.RegisterConcrete(&MsgDeleteBitcannaid{}, "bcna/DeleteBitcannaid", nil)
	cdc.RegisterConcrete(&MsgCreateSupplychain{}, "bcna/CreateSupplychain", nil)
	cdc.RegisterConcrete(&MsgUpdateSupplychain{}, "bcna/UpdateSupplychain", nil)
	cdc.RegisterConcrete(&MsgDeleteSupplychain{}, "bcna/DeleteSupplychain", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateBitcannaid{},
		&MsgUpdateBitcannaid{},
		&MsgDeleteBitcannaid{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateSupplychain{},
		&MsgUpdateSupplychain{},
		&MsgDeleteSupplychain{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
