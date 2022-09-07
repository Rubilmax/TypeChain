/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  NestedLibrary,
  NestedLibraryInterface,
} from "../../../../v0.8.9/nested/a/NestedLibrary";

const _abi = [
  {
    inputs: [],
    name: "getValue",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

export class NestedLibrary__factory {
  static readonly abi = _abi;
  static createInterface(): NestedLibraryInterface {
    return new utils.Interface(_abi) as NestedLibraryInterface;
  }
  static connect(
    address: string,
    signerOrProvider?: Signer | Provider
  ): NestedLibrary {
    return new Contract(address, _abi, signerOrProvider) as NestedLibrary;
  }
}
