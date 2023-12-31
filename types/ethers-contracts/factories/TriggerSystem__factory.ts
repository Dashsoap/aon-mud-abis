/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { TriggerSystem, TriggerSystemInterface } from "../TriggerSystem";

const _abi = [
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
            name: "component",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "entity",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "lastValue",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "newValue",
            type: "bytes",
          },
          {
            internalType: "bool",
            name: "isSet",
            type: "bool",
          },
        ],
        internalType: "struct TriggerInfo",
        name: "triggerInfo",
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
        components: [
          {
            internalType: "uint256",
            name: "component",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "entity",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "lastValue",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "newValue",
            type: "bytes",
          },
          {
            internalType: "bool",
            name: "isSet",
            type: "bool",
          },
        ],
        internalType: "struct TriggerInfo",
        name: "triggerInfo",
        type: "tuple",
      },
    ],
    name: "solveLogic",
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

export class TriggerSystem__factory {
  static readonly abi = _abi;
  static createInterface(): TriggerSystemInterface {
    return new utils.Interface(_abi) as TriggerSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TriggerSystem {
    return new Contract(address, _abi, signerOrProvider) as TriggerSystem;
  }
}
