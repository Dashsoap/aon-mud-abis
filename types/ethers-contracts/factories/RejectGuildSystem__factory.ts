/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  RejectGuildSystem,
  RejectGuildSystemInterface,
} from "../RejectGuildSystem";

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
        ],
        internalType: "struct Info",
        name: "info",
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
  "0x60806040523480156200001157600080fd5b50604051620015a3380380620015a383398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b620005c917901c565b5050505062000292565b600062000126620001ef60201b6200065a1760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b61130180620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780638da5cb5b1461007a578063a85bbf29146100a7578063f2fde38b146100ba575b600080fd5b61006461005f366004610da7565b6100cf565b6040516100719190610e57565b60405180910390f35b6100826100f9565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100646100b5366004610ea8565b61013e565b6100cd6100c8366004610ecc565b61054d565b005b60606000828060200190518101906100e79190610f02565b90506100f28161013e565b9392505050565b60006101397f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b80516000805460609291339161018a9073ffffffffffffffffffffffffffffffffffffffff167fde95e8412e4c1b59c183267e54d1bef716ab450b30c57bb7c5c88a38771301ab61067e565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810185905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa1580156101f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061021c9190610f26565b610287576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f637265737420696e76616c69640000000000000000000000000000000000000060448201526064015b60405180910390fd5b600080546102cb9073ffffffffffffffffffffffffffffffffffffffff167f1eda1d28f6db5e8d259ef45f3ba538b7df923e0105b5098809b1ebfe9dd4983f61067e565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810186905290915060009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa15801561033c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103609190610f48565b905061036b816107ca565b600080546103af9073ffffffffffffffffffffffffffffffffffffffff167ff899011875ecdd0cff874cbbf66c1a2682791e10ae993d0a0ef3d2530849a7de61067e565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401600060405180830381865afa1580156103f9573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261043f9190810190610fbf565b6040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810188905290915073ffffffffffffffffffffffffffffffffffffffff851690634cc8221590602401600060405180830381600087803b1580156104aa57600080fd5b505af11580156104be573d6000803e3d6000fd5b50506040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810189905273ffffffffffffffffffffffffffffffffffffffff86169250634cc822159150602401600060405180830381600087803b15801561052a57600080fd5b505af115801561053e573d6000803e3d6000fd5b50505050505050505050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146105bd576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105c681610bbf565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa1580156106ee573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261073491908101906110e9565b905080516000036107a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f742072656769737465726564000000000000000000000000000000604482015260640161027e565b6107c2816000815181106107b7576107b761118f565b602002602001015190565b949350505050565b600080543391906108119073ffffffffffffffffffffffffffffffffffffffff167fd9a058a8db06aec9057108bd96cfe2e7f580ccef7b81e22c7f33b2889597c1f261067e565b60008054919250906108599073ffffffffffffffffffffffffffffffffffffffff167f53c6c48404020c13382f2b1b9b291c13f7e76aa44e5c76f2f9384b8aa97bfbe061067e565b60008054919250906108a19073ffffffffffffffffffffffffffffffffffffffff167fde95e8412e4c1b59c183267e54d1bef716ab450b30c57bb7c5c88a38771301ab61067e565b6040517ffbdfa1ea0000000000000000000000000000000000000000000000000000000081526004810186905290915060009073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610912573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261095891908101906110e9565b90506000805b8251811015610b4e57878573ffffffffffffffffffffffffffffffffffffffff16630ff4c9168584815181106109965761099661118f565b60200260200101516040518263ffffffff1660e01b81526004016109bc91815260200190565b602060405180830381865afa1580156109d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109fd9190610f48565b03610b3c5760008473ffffffffffffffffffffffffffffffffffffffff16630ff4c916858481518110610a3257610a3261118f565b60200260200101516040518263ffffffff1660e01b8152600401610a5891815260200190565b600060405180830381865afa158015610a75573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610abb91908101906111be565b90506002816000015163ffffffff161015610b32576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f686173206e6f20617574686f7269747900000000000000000000000000000000604482015260640161027e565b6001925050610b4e565b80610b468161126c565b91505061095e565b5080610bb6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f6f70657261746f72206e6f7420696e206775696c640000000000000000000000604482015260640161027e565b50505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046080546040516105c6928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516020810167ffffffffffffffff81118282101715610cc557610cc5610c73565b60405290565b604051610100810167ffffffffffffffff81118282101715610cc557610cc5610c73565b60405160a0810167ffffffffffffffff81118282101715610cc557610cc5610c73565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610d5957610d59610c73565b604052919050565b600067ffffffffffffffff821115610d7b57610d7b610c73565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600060208284031215610db957600080fd5b813567ffffffffffffffff811115610dd057600080fd5b8201601f81018413610de157600080fd5b8035610df4610def82610d61565b610d12565b818152856020838501011115610e0957600080fd5b81602084016020830137600091810160200191909152949350505050565b60005b83811015610e42578181015183820152602001610e2a565b83811115610e51576000848401525b50505050565b6020815260008251806020840152610e76816040850160208701610e27565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b600060208284031215610eba57600080fd5b610ec2610ca2565b9135825250919050565b600060208284031215610ede57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146100f257600080fd5b600060208284031215610f1457600080fd5b610f1c610ca2565b9151825250919050565b600060208284031215610f3857600080fd5b815180151581146100f257600080fd5b600060208284031215610f5a57600080fd5b5051919050565b805163ffffffff81168114610f7557600080fd5b919050565b600082601f830112610f8b57600080fd5b8151610f99610def82610d61565b818152846020838601011115610fae57600080fd5b6107c2826020830160208701610e27565b600060208284031215610fd157600080fd5b815167ffffffffffffffff80821115610fe957600080fd5b908301906101008286031215610ffe57600080fd5b611006610ccb565b8251815261101660208401610f61565b602082015261102760408401610f61565b604082015260608301518281111561103e57600080fd5b61104a87828601610f7a565b60608301525060808301518281111561106257600080fd5b61106e87828601610f7a565b60808301525060a08301518281111561108657600080fd5b61109287828601610f7a565b60a08301525060c0830151828111156110aa57600080fd5b6110b687828601610f7a565b60c08301525060e0830151828111156110ce57600080fd5b6110da87828601610f7a565b60e08301525095945050505050565b600060208083850312156110fc57600080fd5b825167ffffffffffffffff8082111561111457600080fd5b818501915085601f83011261112857600080fd5b81518181111561113a5761113a610c73565b8060051b915061114b848301610d12565b818152918301840191848101908884111561116557600080fd5b938501935b838510156111835784518252938501939085019061116a565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000602082840312156111d057600080fd5b815167ffffffffffffffff808211156111e857600080fd5b9083019060a082860312156111fc57600080fd5b611204610cef565b61120d83610f61565b815260208301518281111561122157600080fd5b61122d87828601610f7a565b602083015250604083015160408201526060830151606082015260808301519250818316831461125c57600080fd5b6080810192909252509392505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036112c4577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b506001019056fea264697066735822122080df46971ea10921095cfd41cde4b54ec522fa5c1df8480eceba1e8810c67d5164736f6c634300080d0033";

type RejectGuildSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RejectGuildSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RejectGuildSystem__factory extends ContractFactory {
  constructor(...args: RejectGuildSystemConstructorParams) {
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
  ): Promise<RejectGuildSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<RejectGuildSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): RejectGuildSystem {
    return super.attach(address) as RejectGuildSystem;
  }
  override connect(signer: Signer): RejectGuildSystem__factory {
    return super.connect(signer) as RejectGuildSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RejectGuildSystemInterface {
    return new utils.Interface(_abi) as RejectGuildSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RejectGuildSystem {
    return new Contract(address, _abi, signerOrProvider) as RejectGuildSystem;
  }
}
