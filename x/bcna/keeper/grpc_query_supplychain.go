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

func (k Keeper) SupplychainAll(c context.Context, req *types.QueryAllSupplychainRequest) (*types.QueryAllSupplychainResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var supplychains []types.Supplychain
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	supplychainStore := prefix.NewStore(store, types.KeyPrefix(types.SupplychainKey))

	pageRes, err := query.Paginate(supplychainStore, req.Pagination, func(key []byte, value []byte) error {
		var supplychain types.Supplychain
		if err := k.cdc.Unmarshal(value, &supplychain); err != nil {
			return err
		}

		supplychains = append(supplychains, supplychain)
		return nil
	})
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllSupplychainResponse{Supplychain: supplychains, Pagination: pageRes}, nil
}

func (k Keeper) Supplychain(c context.Context, req *types.QueryGetSupplychainRequest) (*types.QueryGetSupplychainResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	supplychain, found := k.GetSupplychain(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetSupplychainResponse{Supplychain: supplychain}, nil
}
