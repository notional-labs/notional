package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	// this line is used by starport scaffolding # 2
	cdc.RegisterConcrete(&MsgCreateSupplychain{}, "bcna/CreateSupplychain", nil)
	cdc.RegisterConcrete(&MsgUpdateSupplychain{}, "bcna/UpdateSupplychain", nil)
	cdc.RegisterConcrete(&MsgDeleteSupplychain{}, "bcna/DeleteSupplychain", nil)

	cdc.RegisterConcrete(&MsgCreateBitcannaid{}, "bcna/CreateBitcannaid", nil)
	cdc.RegisterConcrete(&MsgUpdateBitcannaid{}, "bcna/UpdateBitcannaid", nil)
	cdc.RegisterConcrete(&MsgDeleteBitcannaid{}, "bcna/DeleteBitcannaid", nil)

}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	// this line is used by starport scaffolding # 3
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateSupplychain{},
		&MsgUpdateSupplychain{},
		&MsgDeleteSupplychain{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateBitcannaid{},
		&MsgUpdateBitcannaid{},
		&MsgDeleteBitcannaid{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
