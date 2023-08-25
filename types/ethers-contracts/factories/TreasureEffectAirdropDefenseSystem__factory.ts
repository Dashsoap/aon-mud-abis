/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  TreasureEffectAirdropDefenseSystem,
  TreasureEffectAirdropDefenseSystemInterface,
} from "../TreasureEffectAirdropDefenseSystem";

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
        indexed: false,
        internalType: "string",
        name: "prex",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Debug",
    type: "event",
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
            name: "sourceID",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isComponent",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "entity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "treasureID",
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
            internalType: "struct CoordVerifyParam[]",
            name: "path",
            type: "tuple[]",
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
            internalType: "struct CoordVerifyParam[]",
            name: "area",
            type: "tuple[]",
          },
          {
            internalType: "uint32",
            name: "value",
            type: "uint32",
          },
        ],
        internalType: "struct TreasureEffectInfo",
        name: "effectInfo",
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
  "0x60806040523480156200001157600080fd5b506040516200240c3803806200240c833981016040819052620000349162000230565b81818181620000433362000113565b6001600160a01b038116156200005a5780620000bf565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000099573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bf91906200026f565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000107919062000187602090811b620001cb17901c565b50505050505062000296565b60006200012a620001f360201b6200025c1760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022d57600080fd5b50565b600080604083850312156200024457600080fd5b8251620002518162000217565b6020840151909250620002648162000217565b809150509250929050565b6000602082840312156200028257600080fd5b81516200028f8162000217565b9392505050565b61216680620002a66000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780637e62c17a1461007a5780638da5cb5b1461008d578063f2fde38b146100ba575b600080fd5b61006461005f366004611750565b6100cf565b6040516100719190611803565b60405180910390f35b610064610088366004611a59565b6100f9565b61009561010a565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100cd6100c8366004611b4c565b61014f565b005b60606000828060200190518101906100e79190611ce6565b90506100f2816100f9565b9392505050565b606061010482610280565b92915050565b600061014a7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146101bf576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101c881610804565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b60408082015160015482517f614bfa6e000000000000000000000000000000000000000000000000000000008152925160609360009273ffffffffffffffffffffffffffffffffffffffff169163614bfa6e916004808201926020929091908290030181865afa1580156102f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061031c9190611da9565b90507f3c5ad147104e56be34a9176a6692f7df8d2f4b29a5af06bc6b98970d329d657784608001515160405161038c919060408082526005908201527f706174683a0000000000000000000000000000000000000000000000000000006060820152602081019190915260800190565b60405180910390a17f3c5ad147104e56be34a9176a6692f7df8d2f4b29a5af06bc6b98970d329d65778460a0015151604051610402919060408082526005908201527f617265613a0000000000000000000000000000000000000000000000000000006060820152602081019190915260800190565b60405180910390a183608001515160011461047e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f74617267657420636f6f726420696e76616c696400000000000000000000000060448201526064015b60405180910390fd5b6104a9846080015160008151811061049857610498611dc2565b60200260200101516020015161080d565b60005b8460a00151518110156105bd577f3c5ad147104e56be34a9176a6692f7df8d2f4b29a5af06bc6b98970d329d65778560a0015182815181106104f0576104f0611dc2565b602002602001015160200151604051610543919060408082526009908201527f636865636b696e673a00000000000000000000000000000000000000000000006060820152602081019190915260800190565b60405180910390a160008560a00151828151811061056357610563611dc2565b602002602001015190506105978160008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1661097a565b506105aa81600001518260400151610b10565b50806105b581611df1565b9150506104ac565b5060005b8460a00151518110156106b1577f3c5ad147104e56be34a9176a6692f7df8d2f4b29a5af06bc6b98970d329d65778560a00151828151811061060557610605611dc2565b602002602001015160200151604051610658919060408082526013908201527f616464696e672065666665637420617265613a000000000000000000000000006060820152602081019190915260800190565b60405180910390a160008560a00151828151811061067857610678611dc2565b6020026020010151905061069481600001518260400151610ecd565b61069e8184610fe1565b50806106a981611df1565b9150506105c1565b507f3c5ad147104e56be34a9176a6692f7df8d2f4b29a5af06bc6b98970d329d657784608001516000815181106106ea576106ea611dc2565b60200260200101516020015160405161073d91906040808252600e908201527f616464696e6720736869656c643a0000000000000000000000000000000000006060820152602081019190915260800190565b60405180910390a1610771846080015160008151811061075f5761075f611dc2565b602002602001015160200151826111d4565b7f3c5ad147104e56be34a9176a6692f7df8d2f4b29a5af06bc6b98970d329d65778460c001516040516107e491906040808252600d908201527f736869656c642076616c75653a00000000000000000000000000000000000000606082015263ffffffff91909116602082015260800190565b60405180910390a16107fd828560c00151600084611275565b5050919050565b6101c881611446565b600080546108519073ffffffffffffffffffffffffffffffffffffffff167fd7eb4644b0f312b764e14b10dbe895c6ee4acad8c1eb37a4791309b4d942e4276114f2565b6040517ffbdfa1ea0000000000000000000000000000000000000000000000000000000081526004810184905290915060009073ffffffffffffffffffffffffffffffffffffffff83169063fbdfa1ea90602401600060405180830381865afa1580156108c2573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526109089190810190611e50565b90508051600014610975576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f68617320456e7469747920696e2074617267657420636f6f72640000000000006044820152606401610475565b505050565b6000806109a7837fd0deb8af54f5692432398f7f62bf53c9e54e6d6a9b4dbccb012b3fe04ea432d36114f2565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040161014060405180830381865afa1580156109f2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a169190611eec565b805190915015610b09576040805160a080820183528651825260208088015190830152868301518284015260608088015190830152608080880151908301526101208401519087015160c088015160e089015194517f34baeab9000000000000000000000000000000000000000000000000000000008152939473ffffffffffffffffffffffffffffffffffffffff909316936334baeab993610abf9392918790600401611fd7565b602060405180830381865afa158015610adc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b00919061205b565b92505050610104565b5092915050565b60008054610b549073ffffffffffffffffffffffffffffffffffffffff167f4b1ac4c3aa37732e927cbff52c019e9fbdad0f3e454031afaefd319a3dc66ce46114f2565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810185905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610bc2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610be6919061205b565b15610d3a576040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810184905260009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401606060405180830381865afa158015610c59573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c7d9190612078565b90508263ffffffff16816000015163ffffffff16148015610cce5750806040015180610cce57508060400151158015610cce57504267ffffffffffffffff16816020015167ffffffffffffffff1610155b610d34576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f666f67207365656420696e76616c6964000000000000000000000000000000006044820152606401610475565b50505050565b6001546040517f4f27da180000000000000000000000000000000000000000000000000000000081527fd65d260f5f5c04658319eb649c1b2668791985f80e1dc9150523f9df6efd57b4600482015263ffffffff84169173ffffffffffffffffffffffffffffffffffffffff1690634f27da1890602401602060405180830381865afa158015610dce573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610df291906120f6565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e3c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e609190612113565b63ffffffff1614610975576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f666f67207365656420696e76616c6964000000000000000000000000000000006044820152606401610475565b60008054610f119073ffffffffffffffffffffffffffffffffffffffff167f4b1ac4c3aa37732e927cbff52c019e9fbdad0f3e454031afaefd319a3dc66ce46114f2565b6040805160608101825263ffffffff8581168252600060208301908152600183850190815293517f951f165900000000000000000000000000000000000000000000000000000000815260048101899052925190911660248301525167ffffffffffffffff16604482015290511515606482015290915073ffffffffffffffffffffffffffffffffffffffff82169063951f1659906084015b600060405180830381600087803b158015610fc457600080fd5b505af1158015610fd8573d6000803e3d6000fd5b50505050505050565b600154604080517f614bfa6e000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163614bfa6e9160048083019260209291908290030181865afa158015611051573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110759190611da9565b6000549091506110bb9073ffffffffffffffffffffffffffffffffffffffff167f4c72609ffe767189426b756bdb4b34d206c9d4f7f58880d1cb7b77186b7647656114f2565b73ffffffffffffffffffffffffffffffffffffffff16631ab06ee58285602001516040518363ffffffff1660e01b8152600401611102929190918252602082015260400190565b600060405180830381600087803b15801561111c57600080fd5b505af1158015611130573d6000803e3d6000fd5b5050600054611178925073ffffffffffffffffffffffffffffffffffffffff1690507fa25d1e63f0e4f319cc626350346fd351279a4087ff185698c3e632cef078c7f96114f2565b6040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018390526024810184905273ffffffffffffffffffffffffffffffffffffffff9190911690631ab06ee590604401610faa565b600080546112189073ffffffffffffffffffffffffffffffffffffffff167fd7eb4644b0f312b764e14b10dbe895c6ee4acad8c1eb37a4791309b4d942e4276114f2565b6040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018490526024810185905290915073ffffffffffffffffffffffffffffffffffffffff821690631ab06ee590604401610faa565b6000546112b89073ffffffffffffffffffffffffffffffffffffffff167f3a491e792f21d1dfbaf5fe3e6a9453e90f9d0e1e3bab4ac6e371ac1ed485393f6114f2565b60408051808201825263ffffffff808716825267ffffffffffffffff8087166020840190815293517f5bccf83b00000000000000000000000000000000000000000000000000000000815260048101879052925190911660248301529151909116604482015273ffffffffffffffffffffffffffffffffffffffff9190911690635bccf83b90606401600060405180830381600087803b15801561135b57600080fd5b505af115801561136f573d6000803e3d6000fd5b50506000546113b7925073ffffffffffffffffffffffffffffffffffffffff1690507fb88588d8fec752d1ccdaad27c5bbc03a1851f8687c806717617134354a8a7cd66114f2565b6040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018390526024810186905273ffffffffffffffffffffffffffffffffffffffff9190911690631ab06ee590604401600060405180830381600087803b15801561142857600080fd5b505af115801561143c573d6000803e3d6000fd5b5050505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405173ffffffffffffffffffffffffffffffffffffffff8481169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015611562573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526115a89190810190611e50565b90508051600003611615576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f7420726567697374657265640000000000000000000000000000006044820152606401610475565b6116368160008151811061162b5761162b611dc2565b602002602001015190565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610100810167ffffffffffffffff811182821017156116915761169161163e565b60405290565b60405160e0810167ffffffffffffffff811182821017156116915761169161163e565b604051610140810167ffffffffffffffff811182821017156116915761169161163e565b6040805190810167ffffffffffffffff811182821017156116915761169161163e565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156117485761174861163e565b604052919050565b6000602080838503121561176357600080fd5b823567ffffffffffffffff8082111561177b57600080fd5b818501915085601f83011261178f57600080fd5b8135818111156117a1576117a161163e565b6117d1847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611701565b915080825286848285010111156117e757600080fd5b8084840185840137600090820190930192909252509392505050565b600060208083528351808285015260005b8181101561183057858101830151858201604001528201611814565b81811115611842576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b80151581146101c857600080fd5b803561188f81611876565b919050565b600067ffffffffffffffff8211156118ae576118ae61163e565b5060051b60200190565b600082601f8301126118c957600080fd5b6118d16116de565b8060408401858111156118e357600080fd5b845b818110156118fd5780358452602093840193016118e5565b509095945050505050565b600082601f83011261191957600080fd5b6119216116de565b80608084018581111561193357600080fd5b845b818110156118fd5761194787826118b8565b8452602090930192604001611935565b600082601f83011261196857600080fd5b8135602061197d61197883611894565b611701565b8281526101a0928302850182019282820191908785111561199d57600080fd5b8387015b85811015611a2f5781818a0312156119b95760008081fd5b6119c161166d565b81358152858201358682015260408083013590820152606080830135908201526080808301359082015260a06119f98b8285016118b8565b9082015260e0611a0b8b848301611908565b60c0830152611a1e8b61016085016118b8565b9082015284529284019281016119a1565b5090979650505050505050565b63ffffffff811681146101c857600080fd5b803561188f81611a3c565b600060208284031215611a6b57600080fd5b813567ffffffffffffffff80821115611a8357600080fd5b9083019060e08286031215611a9757600080fd5b611a9f611697565b82358152611aaf60208401611884565b60208201526040830135604082015260608301356060820152608083013582811115611ada57600080fd5b611ae687828601611957565b60808301525060a083013582811115611afe57600080fd5b611b0a87828601611957565b60a083015250611b1c60c08401611a4e565b60c082015295945050505050565b73ffffffffffffffffffffffffffffffffffffffff811681146101c857600080fd5b600060208284031215611b5e57600080fd5b81356100f281611b2a565b805161188f81611876565b600082601f830112611b8557600080fd5b611b8d6116de565b806040840185811115611b9f57600080fd5b845b818110156118fd578051845260209384019301611ba1565b600082601f830112611bca57600080fd5b611bd26116de565b806080840185811115611be457600080fd5b845b818110156118fd57611bf88782611b74565b8452602090930192604001611be6565b600082601f830112611c1957600080fd5b81516020611c2961197883611894565b8281526101a09283028501820192828201919087851115611c4957600080fd5b8387015b85811015611a2f5781818a031215611c655760008081fd5b611c6d61166d565b81518152858201518682015260408083015190820152606080830151908201526080808301519082015260a0611ca58b828501611b74565b9082015260e0611cb78b848301611bb9565b60c0830152611cca8b6101608501611b74565b908201528452928401928101611c4d565b805161188f81611a3c565b600060208284031215611cf857600080fd5b815167ffffffffffffffff80821115611d1057600080fd5b9083019060e08286031215611d2457600080fd5b611d2c611697565b82518152611d3c60208401611b69565b60208201526040830151604082015260608301516060820152608083015182811115611d6757600080fd5b611d7387828601611c08565b60808301525060a083015182811115611d8b57600080fd5b611d9787828601611c08565b60a083015250611b1c60c08401611cdb565b600060208284031215611dbb57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611e49577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b60006020808385031215611e6357600080fd5b825167ffffffffffffffff811115611e7a57600080fd5b8301601f81018513611e8b57600080fd5b8051611e9961197882611894565b81815260059190911b82018301908381019087831115611eb857600080fd5b928401925b82841015611ed657835182529284019290840190611ebd565b979650505050505050565b805161188f81611b2a565b60006101408284031215611eff57600080fd5b611f076116ba565b611f1083611b69565b8152611f1e60208401611ee1565b6020820152611f2f60408401611ee1565b6040820152611f4060608401611ee1565b6060820152611f5160808401611ee1565b6080820152611f6260a08401611ee1565b60a0820152611f7360c08401611ee1565b60c0820152611f8460e08401611ee1565b60e0820152610100611f97818501611ee1565b90820152610120611fa9848201611ee1565b908201529392505050565b8060005b6002811015610d34578151845260209384019390910190600101611fb8565b6101a08101611fe68287611fb4565b60408083018660005b600281101561201657612003838351611fb4565b9183019160209190910190600101611fef565b5050505061202760c0830185611fb4565b61010082018360005b600581101561204f578151835260209283019290910190600101612030565b50505095945050505050565b60006020828403121561206d57600080fd5b81516100f281611876565b60006060828403121561208a57600080fd5b6040516060810167ffffffffffffffff82821081831117156120ae576120ae61163e565b81604052845191506120bf82611a3c565b90825260208401519080821682146120d657600080fd5b50602082015260408301516120ea81611876565b60408201529392505050565b60006020828403121561210857600080fd5b81516100f281611b2a565b60006020828403121561212557600080fd5b81516100f281611a3c56fea2646970667358221220ee8277a8a900a9fb3b360ae3244f2db5a0b332106a321cdd2f0a7bba1ae50bd664736f6c634300080d0033";

type TreasureEffectAirdropDefenseSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TreasureEffectAirdropDefenseSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TreasureEffectAirdropDefenseSystem__factory extends ContractFactory {
  constructor(...args: TreasureEffectAirdropDefenseSystemConstructorParams) {
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
  ): Promise<TreasureEffectAirdropDefenseSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<TreasureEffectAirdropDefenseSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): TreasureEffectAirdropDefenseSystem {
    return super.attach(address) as TreasureEffectAirdropDefenseSystem;
  }
  override connect(
    signer: Signer
  ): TreasureEffectAirdropDefenseSystem__factory {
    return super.connect(signer) as TreasureEffectAirdropDefenseSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TreasureEffectAirdropDefenseSystemInterface {
    return new utils.Interface(
      _abi
    ) as TreasureEffectAirdropDefenseSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TreasureEffectAirdropDefenseSystem {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TreasureEffectAirdropDefenseSystem;
  }
}
