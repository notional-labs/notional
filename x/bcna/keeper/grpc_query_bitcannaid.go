package keeper

import (
	"context"

	"github.com/BitCannaGlobal/bcna/x/bcna/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) BitcannaidAll(c context.Context, req *types.QueryAllBitcannaidRequest) (*types.QueryAllBitcannaidResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var bitcannaids []*types.Bitcannaid
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	bitcannaidStore := prefix.NewStore(store, types.KeyPrefix(types.BitcannaidKey))

	pageRes, err := query.Paginate(bitcannaidStore, req.Pagination, func(key []byte, value []byte) error {
		var bitcannaid types.Bitcannaid
		if err := k.cdc.UnmarshalBinaryBare(value, &bitcannaid); err != nil {
			return err
		}

		bitcannaids = append(bitcannaids, &bitcannaid)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllBitcannaidResponse{Bitcannaid: bitcannaids, Pagination: pageRes}, nil
}

func (k Keeper) Bitcannaid(c context.Context, req *types.QueryGetBitcannaidRequest) (*types.QueryGetBitcannaidResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var bitcannaid types.Bitcannaid
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasBitcannaid(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BitcannaidKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetBitcannaidIDBytes(req.Id)), &bitcannaid)

	return &types.QueryGetBitcannaidResponse{Bitcannaid: &bitcannaid}, nil
}
