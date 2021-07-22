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

func CmdCreateBitcannaid() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-bitcannaid [bcnaid] [address]",
		Short: "Create a new bitcannaid",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsBcnaid, err := cast.ToStringE(args[0])
			if err != nil {
				return err
			}
			argsAddress, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateBitcannaid(clientCtx.GetFromAddress().String(), argsBcnaid, argsAddress)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateBitcannaid() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-bitcannaid [id] [bcnaid] [address]",
		Short: "Update a bitcannaid",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsBcnaid, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}

			argsAddress, err := cast.ToStringE(args[2])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateBitcannaid(clientCtx.GetFromAddress().String(), id, argsBcnaid, argsAddress)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteBitcannaid() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-bitcannaid [id]",
		Short: "Delete a bitcannaid by id",
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

			msg := types.NewMsgDeleteBitcannaid(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
