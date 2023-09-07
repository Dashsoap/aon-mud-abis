/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  ChargeLinearTreasureSystem,
  ChargeLinearTreasureSystemInterface,
} from "../ChargeLinearTreasureSystem";

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
  "0x60806040523480156200001157600080fd5b5060405162001f5038038062001f5083398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b62000d0417901c565b5050505062000292565b600062000126620001ef60201b62000d951760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b611cae80620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780638da5cb5b1461007a578063e86660cf146100a7578063f2fde38b146100ba575b600080fd5b61006461005f3660046112a9565b6100cf565b6040516100719190611359565b60405180910390f35b6100826100f9565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100646100b536600461148c565b61013e565b6100cd6100c83660046115b4565b610c88565b005b60606000828060200190518101906100e7919061167b565b90506100f28161013e565b9392505050565b60006101397f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b60005460609033906101869073ffffffffffffffffffffffffffffffffffffffff167f3bd234c3ac242ccb68ea679d53643377673bad40b047c3f5a3313563fef9c068610db9565b73ffffffffffffffffffffffffffffffffffffffff1663cccf7a8e826040518263ffffffff1660e01b81526004016101c091815260200190565b602060405180830381865afa1580156101dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102019190611784565b1561026d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4368617267696e6700000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b6020830151600054610295919073ffffffffffffffffffffffffffffffffffffffff16610f07565b6102fb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f506f736974696f6e20696e76616c6964000000000000000000000000000000006044820152606401610264565b6000805461033f9073ffffffffffffffffffffffffffffffffffffffff167f28b9f73e6b271728535a5e2b6da73f60f1fa049519ed11d9203e38922757cf06610db9565b60008054919250906103879073ffffffffffffffffffffffffffffffffffffffff167f65188156108ab445e8ddb20e749f49402ca97dc723f07951b1c4a011dd8e1166610db9565b85516040517fcccf7a8e00000000000000000000000000000000000000000000000000000000815291925073ffffffffffffffffffffffffffffffffffffffff84169163cccf7a8e916103e09160040190815260200190565b602060405180830381865afa1580156103fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104219190611784565b80156104c3575084516040517f0ff4c916000000000000000000000000000000000000000000000000000000008152849173ffffffffffffffffffffffffffffffffffffffff851691630ff4c916916104809160040190815260200190565b602060405180830381865afa15801561049d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c1919061179f565b145b801561055c575084516040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481019190915273ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610538573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061055c9190611784565b6105c2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f742076616c696420747265617375726500000000000000000000000000006044820152606401610264565b84516040517f0ff4c91600000000000000000000000000000000000000000000000000000000815260009173ffffffffffffffffffffffffffffffffffffffff841691630ff4c9169161061b9160040190815260200190565b600060405180830381865afa158015610638573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261067e9190810190611816565b9050806040015160ff16600114801561069c5750606081015160ff16155b610702576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f6e6f7420666f72207468697320757365206d6f646500000000000000000000006044820152606401610264565b600080546107469073ffffffffffffffffffffffffffffffffffffffff167f44d5df6fedbb1676612b3073b831a5f6f1d59057fb2b8978e7146cb8eee3ca8c610db9565b87516040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481019190915290915060009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c916906024016040805180830381865afa1580156107b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107dd919061190e565b90504267ffffffffffffffff16816000015167ffffffffffffffff1610801561081d57504267ffffffffffffffff16816020015167ffffffffffffffff16105b610883576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6e6f7420636f6f6c646f776e20796574000000000000000000000000000000006044820152606401610264565b600080546108c79073ffffffffffffffffffffffffffffffffffffffff167fef3393883620fd592853ef61d4a33b35dd9fd9e4dc925bc5e1463919917423ab610db9565b89516040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481019190915290915060009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401606060405180830381865afa15801561093b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095f919061196d565b6000549091506109a59073ffffffffffffffffffffffffffffffffffffffff167fdc70892ae22810336b1b3e3970e52ce30e6bd067541740d764e72825b722b06c610db9565b73ffffffffffffffffffffffffffffffffffffffff16633e5879d48b6000015160405180608001604052808e602001516000015181526020018e6040015163ffffffff1681526020018e6060015167ffffffffffffffff168152602001856020015163ffffffff168152506040518363ffffffff1660e01b8152600401610a70929190918252805160208084019190915281015163ffffffff90811660408085019190915282015167ffffffffffffffff166060808501919091529091015116608082015260a00190565b600060405180830381600087803b158015610a8a57600080fd5b505af1158015610a9e573d6000803e3d6000fd5b505050508373ffffffffffffffffffffffffffffffffffffffff16634e6641a98b600001516040518060400160405280896080015142610ade91906119d6565b67ffffffffffffffff168152602001610af842600a6119d6565b67ffffffffffffffff9081169091526040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b1681526004810193909352815181166024840152602090910151166044820152606401600060405180830381600087803b158015610b6d57600080fd5b505af1158015610b81573d6000803e3d6000fd5b5050600054610bc9925073ffffffffffffffffffffffffffffffffffffffff1690507f3bd234c3ac242ccb68ea679d53643377673bad40b047c3f5a3313563fef9c068610db9565b6040805180820182528c51815267ffffffffffffffff4281166020830190815292517fdf49b421000000000000000000000000000000000000000000000000000000008152600481018d9052915160248301529151909116604482015273ffffffffffffffffffffffffffffffffffffffff919091169063df49b42190606401600060405180830381600087803b158015610c6357600080fd5b505af1158015610c77573d6000803e3d6000fd5b505050505050505050505050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610cf8576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d018161109d565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610e29573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610e6f9190810190611a29565b90508051600003610edc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f7420726567697374657265640000000000000000000000000000006044820152606401610264565b610efd81600081518110610ef257610ef2611acf565b602002602001015190565b9150505b92915050565b600080610f34837fd0deb8af54f5692432398f7f62bf53c9e54e6d6a9b4dbccb012b3fe04ea432d3610db9565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040161014060405180830381865afa158015610f7f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fa39190611b09565b805190915015611096576040805160a080820183528651825260208088015190830152868301518284015260608088015190830152608080880151908301526101208401519087015160c088015160e089015194517f34baeab9000000000000000000000000000000000000000000000000000000008152939473ffffffffffffffffffffffffffffffffffffffff909316936334baeab99361104c9392918790600401611bf4565b602060405180830381865afa158015611069573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061108d9190611784565b92505050610f01565b5092915050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610d01928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160a0810167ffffffffffffffff811182821017156111a3576111a3611151565b60405290565b604051610100810167ffffffffffffffff811182821017156111a3576111a3611151565b604051610140810167ffffffffffffffff811182821017156111a3576111a3611151565b6040805190810167ffffffffffffffff811182821017156111a3576111a3611151565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561125b5761125b611151565b604052919050565b600067ffffffffffffffff82111561127d5761127d611151565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b6000602082840312156112bb57600080fd5b813567ffffffffffffffff8111156112d257600080fd5b8201601f810184136112e357600080fd5b80356112f66112f182611263565b611214565b81815285602083850101111561130b57600080fd5b81602084016020830137600091810160200191909152949350505050565b60005b8381101561134457818101518382015260200161132c565b83811115611353576000848401525b50505050565b6020815260008251806020840152611378816040850160208701611329565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b600082601f8301126113bb57600080fd5b6113c36111f1565b8060408401858111156113d557600080fd5b845b818110156113ef5780358452602093840193016113d7565b509095945050505050565b600082601f83011261140b57600080fd5b6114136111f1565b80608084018581111561142557600080fd5b845b818110156113ef5761143987826113aa565b8452602090930192604001611427565b63ffffffff81168114610d0157600080fd5b803561146681611449565b919050565b67ffffffffffffffff81168114610d0157600080fd5b80356114668161146b565b60008183036102208112156114a057600080fd5b6114a8611180565b833581526101a07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0830112156114dd57600080fd5b6114e56111a9565b91506020840135825260408401356020830152606084013560408301526080840135606083015260a084013560808301526115238560c086016113aa565b60a08301526115368561010086016113fa565b60c08301526115498561018086016113aa565b60e08301528160208201526115616101c0850161145b565b60408201526115736101e08501611481565b6060820152611585610200850161145b565b6080820152949350505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610d0157600080fd5b6000602082840312156115c657600080fd5b81356100f281611592565b600082601f8301126115e257600080fd5b6115ea6111f1565b8060408401858111156115fc57600080fd5b845b818110156113ef5780518452602093840193016115fe565b600082601f83011261162757600080fd5b61162f6111f1565b80608084018581111561164157600080fd5b845b818110156113ef5761165587826115d1565b8452602090930192604001611643565b805161146681611449565b80516114668161146b565b600081830361022081121561168f57600080fd5b611697611180565b835181526101a07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0830112156116cc57600080fd5b6116d46111a9565b91506020840151825260408401516020830152606084015160408301526080840151606083015260a084015160808301526117128560c086016115d1565b60a0830152611725856101008601611616565b60c08301526117388561018086016115d1565b60e08301528160208201526117506101c08501611665565b60408201526117626101e08501611670565b60608201526115856102008501611665565b8051801515811461146657600080fd5b60006020828403121561179657600080fd5b6100f282611774565b6000602082840312156117b157600080fd5b5051919050565b600082601f8301126117c957600080fd5b81516117d76112f182611263565b8181528460208386010111156117ec57600080fd5b6117fd826020830160208701611329565b949350505050565b805160ff8116811461146657600080fd5b60006020828403121561182857600080fd5b815167ffffffffffffffff8082111561184057600080fd5b90830190610100828603121561185557600080fd5b61185d6111a9565b82518281111561186c57600080fd5b611878878286016117b8565b82525060208301518281111561188d57600080fd5b611899878286016117b8565b6020830152506118ab60408401611805565b60408201526118bc60608401611805565b60608201526118cd60808401611670565b60808201526118de60a08401611670565b60a08201526118ef60c08401611665565b60c082015261190060e08401611670565b60e082015295945050505050565b60006040828403121561192057600080fd5b6040516040810181811067ffffffffffffffff8211171561194357611943611151565b60405282516119518161146b565b815260208301516119618161146b565b60208201529392505050565b60006060828403121561197f57600080fd5b6040516060810181811067ffffffffffffffff821117156119a2576119a2611151565b6040528251815260208301516119b781611449565b602082015260408301516119ca81611449565b60408201529392505050565b600067ffffffffffffffff808316818516808303821115611a20577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b01949350505050565b60006020808385031215611a3c57600080fd5b825167ffffffffffffffff80821115611a5457600080fd5b818501915085601f830112611a6857600080fd5b815181811115611a7a57611a7a611151565b8060051b9150611a8b848301611214565b8181529183018401918481019088841115611aa557600080fd5b938501935b83851015611ac357845182529385019390850190611aaa565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b805161146681611592565b60006101408284031215611b1c57600080fd5b611b246111cd565b611b2d83611774565b8152611b3b60208401611afe565b6020820152611b4c60408401611afe565b6040820152611b5d60608401611afe565b6060820152611b6e60808401611afe565b6080820152611b7f60a08401611afe565b60a0820152611b9060c08401611afe565b60c0820152611ba160e08401611afe565b60e0820152610100611bb4818501611afe565b90820152610120611bc6848201611afe565b908201529392505050565b8060005b6002811015611353578151845260209384019390910190600101611bd5565b6101a08101611c038287611bd1565b60408083018660005b6002811015611c3357611c20838351611bd1565b9183019160209190910190600101611c0c565b50505050611c4460c0830185611bd1565b61010082018360005b6005811015611c6c578151835260209283019290910190600101611c4d565b5050509594505050505056fea264697066735822122040c4a2faaa6b9b8da42c257314b0b365abb3219a741ca7341ace8ff03542519264736f6c634300080d0033";

type ChargeLinearTreasureSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ChargeLinearTreasureSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ChargeLinearTreasureSystem__factory extends ContractFactory {
  constructor(...args: ChargeLinearTreasureSystemConstructorParams) {
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
  ): Promise<ChargeLinearTreasureSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<ChargeLinearTreasureSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): ChargeLinearTreasureSystem {
    return super.attach(address) as ChargeLinearTreasureSystem;
  }
  override connect(signer: Signer): ChargeLinearTreasureSystem__factory {
    return super.connect(signer) as ChargeLinearTreasureSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChargeLinearTreasureSystemInterface {
    return new utils.Interface(_abi) as ChargeLinearTreasureSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChargeLinearTreasureSystem {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ChargeLinearTreasureSystem;
  }
}
