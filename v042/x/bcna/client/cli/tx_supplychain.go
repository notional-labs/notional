package cli

import (
	"strconv"

	"github.com/spf13/cobra"

	"github.com/spf13/cast"

	"github.com/BitCannaGlobal/bcna/x/bcna/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
)

func CmdCreateSupplychain() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-supplychain [product] [info] [supplyinfo]",
		Short: "Create a new supplychain",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsProduct, err := cast.ToStringE(args[0])
			if err != nil {
				return err
			}
			argsInfo, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}
			argsSupplyinfo, err := cast.ToStringE(args[2])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateSupplychain(clientCtx.GetFromAddress().String(), argsProduct, argsInfo, argsSupplyinfo)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateSupplychain() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-supplychain [id] [product] [info] [supplyinfo]",
		Short: "Update a supplychain",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsProduct, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}

			argsInfo, err := cast.ToStringE(args[2])
			if err != nil {
				return err
			}

			argsSupplyinfo, err := cast.ToStringE(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateSupplychain(clientCtx.GetFromAddress().String(), id, argsProduct, argsInfo, argsSupplyinfo)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteSupplychain() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-supplychain [id]",
		Short: "Delete a supplychain by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteSupplychain(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
