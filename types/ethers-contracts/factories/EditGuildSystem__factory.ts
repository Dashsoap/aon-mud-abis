/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  EditGuildSystem,
  EditGuildSystemInterface,
} from "../EditGuildSystem";

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
            name: "guildCrestId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "flag",
            type: "string",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "uint32",
            name: "regime",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "taxRate",
            type: "uint32",
          },
        ],
        internalType: "struct EditInfo",
        name: "editInfo",
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
  "0x60806040523480156200001157600080fd5b506040516200174c3803806200174c83398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b6200039617901c565b5050505062000292565b600062000126620001ef60201b620004271760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b6114aa80620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe14610051578063297818e11461007a5780638da5cb5b1461008d578063f2fde38b146100ba575b600080fd5b61006461005f366004610d73565b6100cf565b6040516100719190610e36565b60405180910390f35b610064610088366004610e8b565b6100f9565b6100956102d5565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100cd6100c8366004610f6c565b61031a565b005b60606000828060200190518101906100e79190610ff2565b90506100f2816100f9565b9392505050565b6060600061010a836000015161044b565b60008054919250906101529073ffffffffffffffffffffffffffffffffffffffff167f47847aa6dad6656997b23b837b7a178fcf6ee815ad8065af73bc07856277a776610a01565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810184905290915060009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401600060405180830381865afa1580156101c3573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261020991908101906110dd565b602080870151908201526040808701518183015260608088015190830152608087015163ffffffff90811660a0808501919091528801511660c0830152517fdc7e801000000000000000000000000000000000000000000000000000000000815290915073ffffffffffffffffffffffffffffffffffffffff83169063dc7e80109061029b90869085906004016111dd565b600060405180830381600087803b1580156102b557600080fd5b505af11580156102c9573d6000803e3d6000fd5b50505050505050919050565b60006103157f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff16331461038a576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61039381610b4d565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b60008054339082906104939073ffffffffffffffffffffffffffffffffffffffff167fd9a058a8db06aec9057108bd96cfe2e7f580ccef7b81e22c7f33b2889597c1f2610a01565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810186905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610501573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061052591906112bf565b80156105bf57506040517f0ff4c91600000000000000000000000000000000000000000000000000000000815260048101859052829073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa158015610599573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105bd91906112e1565b145b61062a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6e6f74206f776e6572206f66206775696c64206372657374000000000000000060448201526064015b60405180910390fd5b6000805461066e9073ffffffffffffffffffffffffffffffffffffffff167fde95e8412e4c1b59c183267e54d1bef716ab450b30c57bb7c5c88a38771301ab610a01565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810187905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa1580156106dc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061070091906112bf565b80156107c657506040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810186905273ffffffffffffffffffffffffffffffffffffffff821690630ff4c91690602401600060405180830381865afa158015610772573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526107b891908101906112fa565b6000015163ffffffff166004145b61082c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f6e6f74206c6561646572206f66206775696c64000000000000000000000000006044820152606401610621565b600080546108709073ffffffffffffffffffffffffffffffffffffffff167f53c6c48404020c13382f2b1b9b291c13f7e76aa44e5c76f2f9384b8aa97bfbe0610a01565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810188905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa1580156108de573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061090291906112bf565b610968576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6e6f206775696c6420626f756e646564000000000000000000000000000000006044820152606401610621565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810187905273ffffffffffffffffffffffffffffffffffffffff821690630ff4c91690602401602060405180830381865afa1580156109d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109f791906112e1565b9695505050505050565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610a71573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610ab7919081019061139f565b90508051600003610b24576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f7420726567697374657265640000000000000000000000000000006044820152606401610621565b610b4581600081518110610b3a57610b3a611445565b602002602001015190565b949350505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610393928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160c0810167ffffffffffffffff81118282101715610c5357610c53610c01565b60405290565b604051610100810167ffffffffffffffff81118282101715610c5357610c53610c01565b60405160a0810167ffffffffffffffff81118282101715610c5357610c53610c01565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610ce757610ce7610c01565b604052919050565b600067ffffffffffffffff821115610d0957610d09610c01565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b6000610d48610d4384610cef565b610ca0565b9050828152838383011115610d5c57600080fd5b828260208301376000602084830101529392505050565b600060208284031215610d8557600080fd5b813567ffffffffffffffff811115610d9c57600080fd5b8201601f81018413610dad57600080fd5b610b4584823560208401610d35565b60005b83811015610dd7578181015183820152602001610dbf565b83811115610de6576000848401525b50505050565b60008151808452610e04816020860160208601610dbc565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006100f26020830184610dec565b600082601f830112610e5a57600080fd5b6100f283833560208501610d35565b63ffffffff8116811461039357600080fd5b8035610e8681610e69565b919050565b600060208284031215610e9d57600080fd5b813567ffffffffffffffff80821115610eb557600080fd5b9083019060c08286031215610ec957600080fd5b610ed1610c30565b82358152602083013582811115610ee757600080fd5b610ef387828601610e49565b602083015250604083013582811115610f0b57600080fd5b610f1787828601610e49565b604083015250606083013582811115610f2f57600080fd5b610f3b87828601610e49565b606083015250610f4d60808401610e7b565b6080820152610f5e60a08401610e7b565b60a082015295945050505050565b600060208284031215610f7e57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146100f257600080fd5b600082601f830112610fb357600080fd5b8151610fc1610d4382610cef565b818152846020838601011115610fd657600080fd5b610b45826020830160208701610dbc565b8051610e8681610e69565b60006020828403121561100457600080fd5b815167ffffffffffffffff8082111561101c57600080fd5b9083019060c0828603121561103057600080fd5b611038610c30565b8251815260208301518281111561104e57600080fd5b61105a87828601610fa2565b60208301525060408301518281111561107257600080fd5b61107e87828601610fa2565b60408301525060608301518281111561109657600080fd5b6110a287828601610fa2565b6060830152506110b460808401610fe7565b6080820152610f5e60a08401610fe7565b805167ffffffffffffffff81168114610e8657600080fd5b6000602082840312156110ef57600080fd5b815167ffffffffffffffff8082111561110757600080fd5b90830190610100828603121561111c57600080fd5b611124610c59565b8251815260208301518281111561113a57600080fd5b61114687828601610fa2565b60208301525060408301518281111561115e57600080fd5b61116a87828601610fa2565b60408301525060608301518281111561118257600080fd5b61118e87828601610fa2565b6060830152506111a0608084016110c5565b60808201526111b160a08401610fe7565b60a08201526111c260c08401610fe7565b60c082015260e083015160e082015280935050505092915050565b82815260406020820152815160408201526000602083015161010080606085015261120c610140850183610dec565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0808685030160808701526112488483610dec565b935060608701519150808685030160a0870152506112668382610dec565b925050608085015161128460c086018267ffffffffffffffff169052565b5060a085015163ffffffff811660e08601525060c085015163ffffffff811685830152505060e0840151610120840152809150509392505050565b6000602082840312156112d157600080fd5b815180151581146100f257600080fd5b6000602082840312156112f357600080fd5b5051919050565b60006020828403121561130c57600080fd5b815167ffffffffffffffff8082111561132457600080fd5b9083019060a0828603121561133857600080fd5b611340610c7d565b825161134b81610e69565b815260208301518281111561135f57600080fd5b61136b87828601610fa2565b6020830152506040830151604082015260608301516060820152611391608084016110c5565b608082015295945050505050565b600060208083850312156113b257600080fd5b825167ffffffffffffffff808211156113ca57600080fd5b818501915085601f8301126113de57600080fd5b8151818111156113f0576113f0610c01565b8060051b9150611401848301610ca0565b818152918301840191848101908884111561141b57600080fd5b938501935b8385101561143957845182529385019390850190611420565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea2646970667358221220d6dd02f0abbc7c7770bd26c93b92f128d3de1a1e87a99dc5881b5e49d1eed94d64736f6c634300080d0033";

type EditGuildSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EditGuildSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EditGuildSystem__factory extends ContractFactory {
  constructor(...args: EditGuildSystemConstructorParams) {
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
  ): Promise<EditGuildSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<EditGuildSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): EditGuildSystem {
    return super.attach(address) as EditGuildSystem;
  }
  override connect(signer: Signer): EditGuildSystem__factory {
    return super.connect(signer) as EditGuildSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EditGuildSystemInterface {
    return new utils.Interface(_abi) as EditGuildSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EditGuildSystem {
    return new Contract(address, _abi, signerOrProvider) as EditGuildSystem;
  }
}