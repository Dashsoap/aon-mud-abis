/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  ApproveGuildSystem,
  ApproveGuildSystemInterface,
} from "../ApproveGuildSystem";

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
  "0x60806040523480156200001157600080fd5b50604051620018973803806200189783398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b620006db17901c565b5050505062000292565b600062000126620001ef60201b6200076c1760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b6115f580620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780638da5cb5b1461007a578063a85bbf29146100a7578063f2fde38b146100ba575b600080fd5b61006461005f36600461102c565b6100cf565b6040516100719190611122565b60405180910390f35b6100826100f9565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100646100b5366004611135565b61013e565b6100cd6100c8366004611159565b61065f565b005b60606000828060200190518101906100e7919061118f565b90506100f28161013e565b9392505050565b60006101397f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b80516000805460609291339161018a9073ffffffffffffffffffffffffffffffffffffffff167fde95e8412e4c1b59c183267e54d1bef716ab450b30c57bb7c5c88a38771301ab610790565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810185905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa1580156101f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061021c91906111b3565b610287576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f637265737420696e76616c69640000000000000000000000000000000000000060448201526064015b60405180910390fd5b600080546102cb9073ffffffffffffffffffffffffffffffffffffffff167f1eda1d28f6db5e8d259ef45f3ba538b7df923e0105b5098809b1ebfe9dd4983f610790565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810186905290915060009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa15801561033c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061036091906111d5565b905061036b816108dc565b600080546103af9073ffffffffffffffffffffffffffffffffffffffff167ff899011875ecdd0cff874cbbf66c1a2682791e10ae993d0a0ef3d2530849a7de610790565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401600060405180830381865afa1580156103f9573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261043f919081019061124c565b905061044f828260400151610cd1565b6040805160a0810182526001815260808084015160208301526000828401819052606083015267ffffffffffffffff42169082015290517fa829044000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86169163a8290440916104d5918a91600401611376565b600060405180830381600087803b1580156104ef57600080fd5b505af1158015610503573d6000803e3d6000fd5b50506040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810189905273ffffffffffffffffffffffffffffffffffffffff86169250634cc822159150602401600060405180830381600087803b15801561056f57600080fd5b505af1158015610583573d6000803e3d6000fd5b50506000546105cb925073ffffffffffffffffffffffffffffffffffffffff1690507f53c6c48404020c13382f2b1b9b291c13f7e76aa44e5c76f2f9384b8aa97bfbe0610790565b6040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018890526024810184905273ffffffffffffffffffffffffffffffffffffffff9190911690631ab06ee590604401600060405180830381600087803b15801561063c57600080fd5b505af1158015610650573d6000803e3d6000fd5b50505050505050505050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146106cf576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106d881610e44565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610800573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261084691908101906113dd565b905080516000036108b3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f742072656769737465726564000000000000000000000000000000604482015260640161027e565b6108d4816000815181106108c9576108c9611483565b602002602001015190565b949350505050565b600080543391906109239073ffffffffffffffffffffffffffffffffffffffff167fd9a058a8db06aec9057108bd96cfe2e7f580ccef7b81e22c7f33b2889597c1f2610790565b600080549192509061096b9073ffffffffffffffffffffffffffffffffffffffff167f53c6c48404020c13382f2b1b9b291c13f7e76aa44e5c76f2f9384b8aa97bfbe0610790565b60008054919250906109b39073ffffffffffffffffffffffffffffffffffffffff167fde95e8412e4c1b59c183267e54d1bef716ab450b30c57bb7c5c88a38771301ab610790565b6040517ffbdfa1ea0000000000000000000000000000000000000000000000000000000081526004810186905290915060009073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610a24573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610a6a91908101906113dd565b90506000805b8251811015610c6057878573ffffffffffffffffffffffffffffffffffffffff16630ff4c916858481518110610aa857610aa8611483565b60200260200101516040518263ffffffff1660e01b8152600401610ace91815260200190565b602060405180830381865afa158015610aeb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b0f91906111d5565b03610c4e5760008473ffffffffffffffffffffffffffffffffffffffff16630ff4c916858481518110610b4457610b44611483565b60200260200101516040518263ffffffff1660e01b8152600401610b6a91815260200190565b600060405180830381865afa158015610b87573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610bcd91908101906114b2565b90506002816000015163ffffffff161015610c44576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f686173206e6f20617574686f7269747900000000000000000000000000000000604482015260640161027e565b6001925050610c60565b80610c5881611560565b915050610a70565b5080610cc8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f6f70657261746f72206e6f7420696e206775696c640000000000000000000000604482015260640161027e565b50505050505050565b60008054610d159073ffffffffffffffffffffffffffffffffffffffff167f53c6c48404020c13382f2b1b9b291c13f7e76aa44e5c76f2f9384b8aa97bfbe0610790565b6040517ffbdfa1ea0000000000000000000000000000000000000000000000000000000081526004810185905290915060009073ffffffffffffffffffffffffffffffffffffffff83169063fbdfa1ea90602401600060405180830381865afa158015610d86573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610dcc91908101906113dd565b90508263ffffffff16815110610e3e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6c61636b206f6620706f736974696f6e73000000000000000000000000000000604482015260640161027e565b50505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046080546040516106d8928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516020810167ffffffffffffffff81118282101715610f4a57610f4a610ef8565b60405290565b604051610100810167ffffffffffffffff81118282101715610f4a57610f4a610ef8565b60405160a0810167ffffffffffffffff81118282101715610f4a57610f4a610ef8565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610fde57610fde610ef8565b604052919050565b600067ffffffffffffffff82111561100057611000610ef8565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b60006020828403121561103e57600080fd5b813567ffffffffffffffff81111561105557600080fd5b8201601f8101841361106657600080fd5b803561107961107482610fe6565b610f97565b81815285602083850101111561108e57600080fd5b81602084016020830137600091810160200191909152949350505050565b60005b838110156110c75781810151838201526020016110af565b83811115610e3e5750506000910152565b600081518084526110f08160208601602086016110ac565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006100f260208301846110d8565b60006020828403121561114757600080fd5b61114f610f27565b9135825250919050565b60006020828403121561116b57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146100f257600080fd5b6000602082840312156111a157600080fd5b6111a9610f27565b9151825250919050565b6000602082840312156111c557600080fd5b815180151581146100f257600080fd5b6000602082840312156111e757600080fd5b5051919050565b805163ffffffff8116811461120257600080fd5b919050565b600082601f83011261121857600080fd5b815161122661107482610fe6565b81815284602083860101111561123b57600080fd5b6108d48260208301602087016110ac565b60006020828403121561125e57600080fd5b815167ffffffffffffffff8082111561127657600080fd5b90830190610100828603121561128b57600080fd5b611293610f50565b825181526112a3602084016111ee565b60208201526112b4604084016111ee565b60408201526060830151828111156112cb57600080fd5b6112d787828601611207565b6060830152506080830151828111156112ef57600080fd5b6112fb87828601611207565b60808301525060a08301518281111561131357600080fd5b61131f87828601611207565b60a08301525060c08301518281111561133757600080fd5b61134387828601611207565b60c08301525060e08301518281111561135b57600080fd5b61136787828601611207565b60e08301525095945050505050565b8281526040602082015263ffffffff82511660408201526000602083015160a060608401526113a860e08401826110d8565b905060408401516080840152606084015160a084015267ffffffffffffffff60808501511660c0840152809150509392505050565b600060208083850312156113f057600080fd5b825167ffffffffffffffff8082111561140857600080fd5b818501915085601f83011261141c57600080fd5b81518181111561142e5761142e610ef8565b8060051b915061143f848301610f97565b818152918301840191848101908884111561145957600080fd5b938501935b838510156114775784518252938501939085019061145e565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000602082840312156114c457600080fd5b815167ffffffffffffffff808211156114dc57600080fd5b9083019060a082860312156114f057600080fd5b6114f8610f74565b611501836111ee565b815260208301518281111561151557600080fd5b61152187828601611207565b602083015250604083015160408201526060830151606082015260808301519250818316831461155057600080fd5b6080810192909252509392505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036115b8577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b506001019056fea264697066735822122093b12c8e36b049d7ed4ec2f3e31bcf0e733cacf98c40e551f6dfc273abe8499664736f6c634300080d0033";

type ApproveGuildSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ApproveGuildSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ApproveGuildSystem__factory extends ContractFactory {
  constructor(...args: ApproveGuildSystemConstructorParams) {
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
  ): Promise<ApproveGuildSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<ApproveGuildSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): ApproveGuildSystem {
    return super.attach(address) as ApproveGuildSystem;
  }
  override connect(signer: Signer): ApproveGuildSystem__factory {
    return super.connect(signer) as ApproveGuildSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ApproveGuildSystemInterface {
    return new utils.Interface(_abi) as ApproveGuildSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ApproveGuildSystem {
    return new Contract(address, _abi, signerOrProvider) as ApproveGuildSystem;
  }
}
