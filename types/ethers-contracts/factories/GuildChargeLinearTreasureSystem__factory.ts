/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  GuildChargeLinearTreasureSystem,
  GuildChargeLinearTreasureSystemInterface,
} from "../GuildChargeLinearTreasureSystem";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IWorld",
        name: "_world",
        type: "address",
      },
      {
        internalType: "address",
        name: "_components",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Ownable__NotOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "Ownable__NotTransitiveOwner",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "args",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "treasureId",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "realHash",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "fogHash",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "fogSeed",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "width",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "height",
                type: "uint256",
              },
              {
                internalType: "uint256[2]",
                name: "a",
                type: "uint256[2]",
              },
              {
                internalType: "uint256[2][2]",
                name: "b",
                type: "uint256[2][2]",
              },
              {
                internalType: "uint256[2]",
                name: "c",
                type: "uint256[2]",
              },
            ],
            internalType: "struct CoordVerifyParam",
            name: "position",
            type: "tuple",
          },
          {
            internalType: "uint32",
            name: "direction",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "distance",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "area",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "guildCrestId",
            type: "uint256",
          },
        ],
        internalType: "struct ChargeTreasureInfo",
        name: "chargeTreasureInfo",
        type: "tuple",
      },
    ],
    name: "executeTyped",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002a2f38038062002a2f83398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b62000c3417901c565b5050505062000292565b600062000126620001ef60201b62000cc51760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b61278d80620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe14610051578063698b78c61461007a5780638da5cb5b1461008d578063f2fde38b146100ba575b600080fd5b61006461005f366004611a8e565b6100cf565b6040516100719190611b3e565b60405180910390f35b610064610088366004611c71565b6100f9565b610095610b73565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100cd6100c8366004611da6565b610bb8565b005b60606000828060200190518101906100e79190611e6d565b90506100f2816100f9565b9392505050565b6060600061010f83600001518460a00151610ce9565b6000549091506101559073ffffffffffffffffffffffffffffffffffffffff167f3bd234c3ac242ccb68ea679d53643377673bad40b047c3f5a3313563fef9c068611559565b73ffffffffffffffffffffffffffffffffffffffff1663cccf7a8e826040518263ffffffff1660e01b815260040161018f91815260200190565b602060405180830381865afa1580156101ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d09190611f90565b1561023c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4368617267696e6700000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b6020830151600054610264919073ffffffffffffffffffffffffffffffffffffffff166116a5565b6102ca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f506f736974696f6e20696e76616c6964000000000000000000000000000000006044820152606401610233565b6000805461030e9073ffffffffffffffffffffffffffffffffffffffff167f65188156108ab445e8ddb20e749f49402ca97dc723f07951b1c4a011dd8e1166611559565b60008054919250906103569073ffffffffffffffffffffffffffffffffffffffff167ff899011875ecdd0cff874cbbf66c1a2682791e10ae993d0a0ef3d2530849a7de611559565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401600060405180830381865afa1580156103a0573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526103e69190810190611ff0565b85516040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481019190915290915060009073ffffffffffffffffffffffffffffffffffffffff841690630ff4c91690602401600060405180830381865afa15801561045a573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526104a09190810190612169565b9050806040015160ff1660011480156104be5750606081015160ff16155b610524576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f6e6f7420666f72207468697320757365206d6f646500000000000000000000006044820152606401610233565b600080546105689073ffffffffffffffffffffffffffffffffffffffff167f44d5df6fedbb1676612b3073b831a5f6f1d59057fb2b8978e7146cb8eee3ca8c611559565b87516040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481019190915290915060009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c916906024016040805180830381865afa1580156105db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ff9190612261565b90504267ffffffffffffffff16816000015167ffffffffffffffff1610801561063f57504267ffffffffffffffff16816020015167ffffffffffffffff16105b6106a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6e6f7420636f6f6c646f776e20796574000000000000000000000000000000006044820152606401610233565b600080546106e99073ffffffffffffffffffffffffffffffffffffffff167fef3393883620fd592853ef61d4a33b35dd9fd9e4dc925bc5e1463919917423ab611559565b89516040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481019190915290915060009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401606060405180830381865afa15801561075d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061078191906122c0565b90506103e88661014001518660a0015161079b9190612358565b6107a591906123b7565b67ffffffffffffffff168a6060015167ffffffffffffffff1610610825576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f64697374616e636520696e76616c6964000000000000000000000000000000006044820152606401610233565b6000546108689073ffffffffffffffffffffffffffffffffffffffff167fdc70892ae22810336b1b3e3970e52ce30e6bd067541740d764e72825b722b06c611559565b73ffffffffffffffffffffffffffffffffffffffff16633e5879d48b6000015160405180608001604052808e602001516000015181526020018e6040015163ffffffff1681526020018e6060015167ffffffffffffffff1681526020016103e88b610100015187602001516108dd91906123de565b6108e79190612401565b63ffffffff908116909152604080517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b16815260048101949094528251602485015260208301518216604485015282015167ffffffffffffffff16606484015260609091015116608482015260a401600060405180830381600087803b15801561097557600080fd5b505af1158015610989573d6000803e3d6000fd5b505050508373ffffffffffffffffffffffffffffffffffffffff16634e6641a98b6000015160405180604001604052808960800151426109c99190612418565b67ffffffffffffffff1681526020016109e342600a612418565b67ffffffffffffffff9081169091526040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b1681526004810193909352815181166024840152602090910151166044820152606401600060405180830381600087803b158015610a5857600080fd5b505af1158015610a6c573d6000803e3d6000fd5b5050600054610ab4925073ffffffffffffffffffffffffffffffffffffffff1690507f3bd234c3ac242ccb68ea679d53643377673bad40b047c3f5a3313563fef9c068611559565b6040805180820182528c51815267ffffffffffffffff4281166020830190815292517fdf49b421000000000000000000000000000000000000000000000000000000008152600481018d9052915160248301529151909116604482015273ffffffffffffffffffffffffffffffffffffffff919091169063df49b42190606401600060405180830381600087803b158015610b4e57600080fd5b505af1158015610b62573d6000803e3d6000fd5b505050505050505050505050919050565b6000610bb37f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610c28576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c318161183b565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b600080548190610d2f9073ffffffffffffffffffffffffffffffffffffffff167f28b9f73e6b271728535a5e2b6da73f60f1fa049519ed11d9203e38922757cf06611559565b600080549192503391610d789073ffffffffffffffffffffffffffffffffffffffff167fd9a058a8db06aec9057108bd96cfe2e7f580ccef7b81e22c7f33b2889597c1f2611559565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810187905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610de6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0a9190611f90565b8015610ea457506040517f0ff4c91600000000000000000000000000000000000000000000000000000000815260048101869052829073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa158015610e7e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ea29190612444565b145b610f0a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6e6f74206f776e6572206f66206775696c6420637265737400000000000000006044820152606401610233565b60008054610f4e9073ffffffffffffffffffffffffffffffffffffffff167fde95e8412e4c1b59c183267e54d1bef716ab450b30c57bb7c5c88a38771301ab611559565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810188905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610fbc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fe09190611f90565b80156110a657506040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810187905273ffffffffffffffffffffffffffffffffffffffff821690630ff4c91690602401600060405180830381865afa158015611052573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052611098919081019061245d565b6000015163ffffffff166004145b61110c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f6e6f74206c6561646572206f66206775696c64000000000000000000000000006044820152606401610233565b600080546111509073ffffffffffffffffffffffffffffffffffffffff167f53c6c48404020c13382f2b1b9b291c13f7e76aa44e5c76f2f9384b8aa97bfbe0611559565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810189905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa1580156111be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111e29190611f90565b611248576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6e6f206775696c6420626f756e646564000000000000000000000000000000006044820152606401610233565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810188905260009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa1580156112b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112da9190612444565b60008054919250906113229073ffffffffffffffffffffffffffffffffffffffff167f65188156108ab445e8ddb20e749f49402ca97dc723f07951b1c4a011dd8e1166611559565b6040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018c905290915073ffffffffffffffffffffffffffffffffffffffff88169063cccf7a8e90602401602060405180830381865afa158015611390573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113b49190611f90565b801561144e57506040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481018b9052829073ffffffffffffffffffffffffffffffffffffffff891690630ff4c91690602401602060405180830381865afa158015611428573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061144c9190612444565b145b80156114e457506040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018b905273ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa1580156114c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114e49190611f90565b61154a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f742076616c696420747265617375726500000000000000000000000000006044820152606401610233565b50955050505050505b92915050565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa1580156115c9573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261160f9190810190612508565b9050805160000361167c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f7420726567697374657265640000000000000000000000000000006044820152606401610233565b61169d81600081518110611692576116926125ae565b602002602001015190565b949350505050565b6000806116d2837fd0deb8af54f5692432398f7f62bf53c9e54e6d6a9b4dbccb012b3fe04ea432d3611559565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040161014060405180830381865afa15801561171d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061174191906125e8565b805190915015611834576040805160a080820183528651825260208088015190830152868301518284015260608088015190830152608080880151908301526101208401519087015160c088015160e089015194517f34baeab9000000000000000000000000000000000000000000000000000000008152939473ffffffffffffffffffffffffffffffffffffffff909316936334baeab9936117ea93929187906004016126d3565b602060405180830381865afa158015611807573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061182b9190611f90565b92505050611553565b5092915050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610c31928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160c0810167ffffffffffffffff81118282101715611941576119416118ef565b60405290565b604051610100810167ffffffffffffffff81118282101715611941576119416118ef565b604051610160810167ffffffffffffffff81118282101715611941576119416118ef565b60405160a0810167ffffffffffffffff81118282101715611941576119416118ef565b604051610140810167ffffffffffffffff81118282101715611941576119416118ef565b6040805190810167ffffffffffffffff81118282101715611941576119416118ef565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611a4057611a406118ef565b604052919050565b600067ffffffffffffffff821115611a6257611a626118ef565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600060208284031215611aa057600080fd5b813567ffffffffffffffff811115611ab757600080fd5b8201601f81018413611ac857600080fd5b8035611adb611ad682611a48565b6119f9565b818152856020838501011115611af057600080fd5b81602084016020830137600091810160200191909152949350505050565b60005b83811015611b29578181015183820152602001611b11565b83811115611b38576000848401525b50505050565b6020815260008251806020840152611b5d816040850160208701611b0e565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b600082601f830112611ba057600080fd5b611ba86119d6565b806040840185811115611bba57600080fd5b845b81811015611bd4578035845260209384019301611bbc565b509095945050505050565b600082601f830112611bf057600080fd5b611bf86119d6565b806080840185811115611c0a57600080fd5b845b81811015611bd457611c1e8782611b8f565b8452602090930192604001611c0c565b63ffffffff81168114610c3157600080fd5b8035611c4b81611c2e565b919050565b67ffffffffffffffff81168114610c3157600080fd5b8035611c4b81611c50565b6000818303610240811215611c8557600080fd5b611c8d61191e565b833581526101a07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe083011215611cc257600080fd5b611cca611947565b91506020840135825260408401356020830152606084013560408301526080840135606083015260a08401356080830152611d088560c08601611b8f565b60a0830152611d1b856101008601611bdf565b60c0830152611d2e856101808601611b8f565b60e0830152816020820152611d466101c08501611c40565b6040820152611d586101e08501611c66565b6060820152611d6a6102008501611c40565b6080820152610220939093013560a0840152509092915050565b73ffffffffffffffffffffffffffffffffffffffff81168114610c3157600080fd5b600060208284031215611db857600080fd5b81356100f281611d84565b600082601f830112611dd457600080fd5b611ddc6119d6565b806040840185811115611dee57600080fd5b845b81811015611bd4578051845260209384019301611df0565b600082601f830112611e1957600080fd5b611e216119d6565b806080840185811115611e3357600080fd5b845b81811015611bd457611e478782611dc3565b8452602090930192604001611e35565b8051611c4b81611c2e565b8051611c4b81611c50565b6000818303610240811215611e8157600080fd5b611e8961191e565b835181526101a07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe083011215611ebe57600080fd5b611ec6611947565b91506020840151825260408401516020830152606084015160408301526080840151606083015260a08401516080830152611f048560c08601611dc3565b60a0830152611f17856101008601611e08565b60c0830152611f2a856101808601611dc3565b60e0830152816020820152611f426101c08501611e57565b6040820152611f546101e08501611e62565b6060820152611f666102008501611e57565b6080820152610220939093015160a0840152509092915050565b80518015158114611c4b57600080fd5b600060208284031215611fa257600080fd5b6100f282611f80565b600082601f830112611fbc57600080fd5b8151611fca611ad682611a48565b818152846020838601011115611fdf57600080fd5b61169d826020830160208701611b0e565b60006020828403121561200257600080fd5b815167ffffffffffffffff8082111561201a57600080fd5b90830190610160828603121561202f57600080fd5b61203761196b565b8251815261204760208401611e57565b602082015261205860408401611e57565b604082015260608301518281111561206f57600080fd5b61207b87828601611fab565b60608301525060808301518281111561209357600080fd5b61209f87828601611fab565b60808301525060a0830151828111156120b757600080fd5b6120c387828601611fab565b60a08301525060c0830151828111156120db57600080fd5b6120e787828601611fab565b60c08301525060e0830151828111156120ff57600080fd5b61210b87828601611fab565b60e0830152506101009150612121828401611e57565b828201526101209150612135828401611e57565b828201526101409150612149828401611e62565b91810191909152949350505050565b805160ff81168114611c4b57600080fd5b60006020828403121561217b57600080fd5b815167ffffffffffffffff8082111561219357600080fd5b9083019061010082860312156121a857600080fd5b6121b0611947565b8251828111156121bf57600080fd5b6121cb87828601611fab565b8252506020830151828111156121e057600080fd5b6121ec87828601611fab565b6020830152506121fe60408401612158565b604082015261220f60608401612158565b606082015261222060808401611e62565b608082015261223160a08401611e62565b60a082015261224260c08401611e57565b60c082015261225360e08401611e62565b60e082015295945050505050565b60006040828403121561227357600080fd5b6040516040810181811067ffffffffffffffff82111715612296576122966118ef565b60405282516122a481611c50565b815260208301516122b481611c50565b60208201529392505050565b6000606082840312156122d257600080fd5b6040516060810181811067ffffffffffffffff821117156122f5576122f56118ef565b60405282518152602083015161230a81611c2e565b6020820152604083015161231d81611c2e565b60408201529392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600067ffffffffffffffff8083168185168183048111821515161561237f5761237f612329565b02949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600067ffffffffffffffff808416806123d2576123d2612388565b92169190910492915050565b600063ffffffff8083168185168183048111821515161561237f5761237f612329565b600063ffffffff808416806123d2576123d2612388565b600067ffffffffffffffff80831681851680830382111561243b5761243b612329565b01949350505050565b60006020828403121561245657600080fd5b5051919050565b60006020828403121561246f57600080fd5b815167ffffffffffffffff8082111561248757600080fd5b9083019060a0828603121561249b57600080fd5b6124a361198f565b82516124ae81611c2e565b81526020830151828111156124c257600080fd5b6124ce87828601611fab565b6020830152506040830151604082015260608301516060820152608083015192506124f883611c50565b6080810192909252509392505050565b6000602080838503121561251b57600080fd5b825167ffffffffffffffff8082111561253357600080fd5b818501915085601f83011261254757600080fd5b815181811115612559576125596118ef565b8060051b915061256a8483016119f9565b818152918301840191848101908884111561258457600080fd5b938501935b838510156125a257845182529385019390850190612589565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b8051611c4b81611d84565b600061014082840312156125fb57600080fd5b6126036119b2565b61260c83611f80565b815261261a602084016125dd565b602082015261262b604084016125dd565b604082015261263c606084016125dd565b606082015261264d608084016125dd565b608082015261265e60a084016125dd565b60a082015261266f60c084016125dd565b60c082015261268060e084016125dd565b60e08201526101006126938185016125dd565b908201526101206126a58482016125dd565b908201529392505050565b8060005b6002811015611b385781518452602093840193909101906001016126b4565b6101a081016126e282876126b0565b60408083018660005b6002811015612712576126ff8383516126b0565b91830191602091909101906001016126eb565b5050505061272360c08301856126b0565b61010082018360005b600581101561274b57815183526020928301929091019060010161272c565b5050509594505050505056fea2646970667358221220b9d0ae58691cfe69b885d689bc806d2cb7370cef12b6769eedb9f4267a48ba9664736f6c634300080d0033";

type GuildChargeLinearTreasureSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GuildChargeLinearTreasureSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GuildChargeLinearTreasureSystem__factory extends ContractFactory {
  constructor(...args: GuildChargeLinearTreasureSystemConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GuildChargeLinearTreasureSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<GuildChargeLinearTreasureSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): GuildChargeLinearTreasureSystem {
    return super.attach(address) as GuildChargeLinearTreasureSystem;
  }
  override connect(signer: Signer): GuildChargeLinearTreasureSystem__factory {
    return super.connect(signer) as GuildChargeLinearTreasureSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GuildChargeLinearTreasureSystemInterface {
    return new utils.Interface(
      _abi
    ) as GuildChargeLinearTreasureSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GuildChargeLinearTreasureSystem {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as GuildChargeLinearTreasureSystem;
  }
}
