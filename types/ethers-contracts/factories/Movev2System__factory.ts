/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Movev2System, Movev2SystemInterface } from "../Movev2System";

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
            name: "coordHash",
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
            internalType: "uint256",
            name: "seed",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "oldHash",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "oldSeed",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "distance",
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
        internalType: "struct MoveInfo",
        name: "moveInfo",
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
  "0x60806040523480156200001157600080fd5b506040516200189f3803806200189f83398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b62000a6a17901c565b5050505062000292565b600062000126620001ef60201b62000afb1760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b6115fd80620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780638da5cb5b1461007a578063aa006f7a146100a7578063f2fde38b146100ba575b600080fd5b61006461005f366004610dea565b6100cf565b6040516100719190610e9d565b60405180910390f35b6100826100f9565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100646100b5366004610faf565b61013e565b6100cd6100c836600461106c565b6109ee565b005b60606000828060200190518101906100e7919061111d565b90506100f28161013e565b9392505050565b60006101397f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b60008054606091906101869073ffffffffffffffffffffffffffffffffffffffff167fd0deb8af54f5692432398f7f62bf53c9e54e6d6a9b4dbccb012b3fe04ea432d3610b1f565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040161014060405180830381865afa1580156101d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101f591906111cd565b8051909150156103515760006040518060e0016040528085608001518152602001856000015181526020018560c001518152602001856060015181526020018560a0015181526020018560200151815260200185604001518152509050816040015173ffffffffffffffffffffffffffffffffffffffff1663c894e7578560e00151866101000151876101200151856040518563ffffffff1660e01b81526004016102a394939291906112b3565b602060405180830381865afa1580156102c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e49190611337565b61034f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4661696c6564207069636b75702070726f6f6620636865636b0000000000000060448201526064015b60405180910390fd5b505b600080543391906103989073ffffffffffffffffffffffffffffffffffffffff167f8900e57ac2ff61c328bbaa69d2071a542ae5ff48c693375a49fd2937c1ef8332610b1f565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810184905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610406573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061042a9190611337565b610490576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6e6f74206a6f696e6564000000000000000000000000000000000000000000006044820152606401610346565b600080546104d49073ffffffffffffffffffffffffffffffffffffffff167f189eafd1a01543209399086ef2e12962fca648be4826ce2b3eb2e53ed14bf141610b1f565b600080549192509061051c9073ffffffffffffffffffffffffffffffffffffffff167fdc602e66a6d8c84d0c8d6c4292d80341393a1e04ff02909a12718a4216d3a9f7610b1f565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401608060405180830381865afa158015610566573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061058a919061136a565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810186905290915060009073ffffffffffffffffffffffffffffffffffffffff841690630ff4c916906024016040805180830381865afa1580156105fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061e91906113e7565b9050816060015167ffffffffffffffff168860c00151111561069c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6d6f766520746f6f2066617200000000000000000000000000000000000000006044820152606401610346565b600080546106e09073ffffffffffffffffffffffffffffffffffffffff167fd7eb4644b0f312b764e14b10dbe895c6ee4acad8c1eb37a4791309b4d942e427610b1f565b89516040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815291925073ffffffffffffffffffffffffffffffffffffffff83169163fbdfa1ea916107399160040190815260200190565b600060405180830381865afa158015610756573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261079c9190810190611442565b5115610804576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f6861766520656e74697479206f6e2074696c65000000000000000000000000006044820152606401610346565b600080546108489073ffffffffffffffffffffffffffffffffffffffff167f9e0b856941fb70fc9b56c896d5f39a2079c3ed041dbc5e87efbf9c503b354b76610b1f565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa158015610892573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b691906114e8565b9050806080015167ffffffffffffffff168a60200151111580156108ec57508060a0015167ffffffffffffffff168a6040015111155b610952576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f726164697573206f766572206c696d69740000000000000000000000000000006044820152606401610346565b89516040517f1ab06ee500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff841691631ab06ee5916109af918b91600401918252602082015260400190565b600060405180830381600087803b1580156109c957600080fd5b505af11580156109dd573d6000803e3d6000fd5b505050505050505050505050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610a5e576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a6781610c6b565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610b8f573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610bd59190810190611442565b90508051600003610c42576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f7420726567697374657265640000000000000000000000000000006044820152606401610346565b610c6381600081518110610c5857610c58611598565b602002602001015190565b949350505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610a67928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715610d7257610d72610d1f565b60405290565b6040805190810167ffffffffffffffff81118282101715610d7257610d72610d1f565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610de257610de2610d1f565b604052919050565b60006020808385031215610dfd57600080fd5b823567ffffffffffffffff80821115610e1557600080fd5b818501915085601f830112610e2957600080fd5b813581811115610e3b57610e3b610d1f565b610e6b847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601610d9b565b91508082528684828501011115610e8157600080fd5b8084840185840137600090820190930192909252509392505050565b600060208083528351808285015260005b81811015610eca57858101830151858201604001528201610eae565b81811115610edc576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b600082601f830112610f2157600080fd5b610f29610d78565b806040840185811115610f3b57600080fd5b845b81811015610f55578035845260209384019301610f3d565b509095945050505050565b600082601f830112610f7157600080fd5b610f79610d78565b806080840185811115610f8b57600080fd5b845b81811015610f5557610f9f8782610f10565b8452602090930192604001610f8d565b60006101e08284031215610fc257600080fd5b610fca610d4e565b823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a082015260c083013560c08201526110178460e08501610f10565b60e082015261012061102b85828601610f60565b61010083015261103f856101a08601610f10565b908201529392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610a6757600080fd5b60006020828403121561107e57600080fd5b81356100f28161104a565b600082601f83011261109a57600080fd5b6110a2610d78565b8060408401858111156110b457600080fd5b845b81811015610f555780518452602093840193016110b6565b600082601f8301126110df57600080fd5b6110e7610d78565b8060808401858111156110f957600080fd5b845b81811015610f555761110d8782611089565b84526020909301926040016110fb565b60006101e0828403121561113057600080fd5b611138610d4e565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201526111858460e08501611089565b60e0820152610120611199858286016110ce565b61010083015261103f856101a08601611089565b805180151581146111bd57600080fd5b919050565b80516111bd8161104a565b600061014082840312156111e057600080fd5b6111e8610d4e565b6111f1836111ad565b81526111ff602084016111c2565b6020820152611210604084016111c2565b6040820152611221606084016111c2565b6060820152611232608084016111c2565b608082015261124360a084016111c2565b60a082015261125460c084016111c2565b60c082015261126560e084016111c2565b60e08201526101006112788185016111c2565b9082015261012061103f8482016111c2565b8060005b60028110156112ad57815184526020938401939091019060010161128e565b50505050565b6101e081016112c2828761128a565b60408083018660005b60028110156112f2576112df83835161128a565b91830191602091909101906001016112cb565b5050505061130360c083018561128a565b61010082018360005b600781101561132b57815183526020928301929091019060010161130c565b50505095945050505050565b60006020828403121561134957600080fd5b6100f2826111ad565b805167ffffffffffffffff811681146111bd57600080fd5b60006080828403121561137c57600080fd5b6040516080810181811067ffffffffffffffff8211171561139f5761139f610d1f565b6040526113ab83611352565b81526113b960208401611352565b60208201526113ca60408401611352565b60408201526113db60608401611352565b60608201529392505050565b6000604082840312156113f957600080fd5b6040516040810181811067ffffffffffffffff8211171561141c5761141c610d1f565b60405261142883611352565b815261143660208401611352565b60208201529392505050565b6000602080838503121561145557600080fd5b825167ffffffffffffffff8082111561146d57600080fd5b818501915085601f83011261148157600080fd5b81518181111561149357611493610d1f565b8060051b91506114a4848301610d9b565b81815291830184019184810190888411156114be57600080fd5b938501935b838510156114dc578451825293850193908501906114c3565b98975050505050505050565b600060e082840312156114fa57600080fd5b60405160e0810181811067ffffffffffffffff8211171561151d5761151d610d1f565b60405261152983611352565b815261153760208401611352565b602082015261154860408401611352565b604082015261155960608401611352565b606082015261156a60808401611352565b608082015261157b60a08401611352565b60a082015261158c60c08401611352565b60c08201529392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea264697066735822122015ecd2bf75d8f701f5303f6ff5f773d17ddc3835e1abee7862910d192a762fc164736f6c634300080d0033";

type Movev2SystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Movev2SystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Movev2System__factory extends ContractFactory {
  constructor(...args: Movev2SystemConstructorParams) {
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
  ): Promise<Movev2System> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<Movev2System>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): Movev2System {
    return super.attach(address) as Movev2System;
  }
  override connect(signer: Signer): Movev2System__factory {
    return super.connect(signer) as Movev2System__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Movev2SystemInterface {
    return new utils.Interface(_abi) as Movev2SystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Movev2System {
    return new Contract(address, _abi, signerOrProvider) as Movev2System;
  }
}
