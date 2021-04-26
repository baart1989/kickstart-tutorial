/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { Campaign } from "../Campaign";

export class Campaign__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    minimum: BigNumberish,
    creator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Campaign> {
    return super.deploy(minimum, creator, overrides || {}) as Promise<Campaign>;
  }
  getDeployTransaction(
    minimum: BigNumberish,
    creator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(minimum, creator, overrides || {});
  }
  attach(address: string): Campaign {
    return super.attach(address) as Campaign;
  }
  connect(signer: Signer): Campaign__factory {
    return super.connect(signer) as Campaign__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Campaign {
    return new Contract(address, _abi, signerOrProvider) as Campaign;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minimum",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "approveRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "approvers",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "approversCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contribute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "desc",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "recipient",
        type: "address",
      },
    ],
    name: "createRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "finalizeRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getRequestsCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSummary",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
    inputs: [],
    name: "manager",
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
    inputs: [],
    name: "minContribution",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "requests",
    outputs: [
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "bool",
        name: "complete",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "approvalCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610d1f380380610d1f8339818101604052604081101561003357600080fd5b81019080805190602001909291908051906020019092919050505080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550816002819055505050610c78806100a76000396000f3fe60806040526004361061009c5760003560e01c806381d12c581161006457806381d12c581461020c57806382fde093146102f45780638a9cfd551461031f578063aaffadf314610411578063d7bb99ba1461043c578063d7d1bbdb146104465761009c565b806303441006146100a15780630a144391146100dc5780633410452a146101435780634051ddac1461016e578063481c6a75146101cb575b600080fd5b3480156100ad57600080fd5b506100da600480360360208110156100c457600080fd5b8101908080359060200190929190505050610481565b005b3480156100e857600080fd5b5061012b600480360360208110156100ff57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610567565b60405180821515815260200191505060405180910390f35b34801561014f57600080fd5b50610158610587565b6040518082815260200191505060405180910390f35b34801561017a57600080fd5b50610183610593565b604051808681526020018581526020018481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019550505050505060405180910390f35b3480156101d757600080fd5b506101e06105dc565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561021857600080fd5b506102456004803603602081101561022f57600080fd5b8101908080359060200190929190505050610602565b60405180806020018681526020018573ffffffffffffffffffffffffffffffffffffffff1681526020018415158152602001838152602001828103825287818151815260200191508051906020019080838360005b838110156102b557808201518184015260208101905061029a565b50505050905090810190601f1680156102e25780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b34801561030057600080fd5b5061030961070a565b6040518082815260200191505060405180910390f35b34801561032b57600080fd5b5061040f6004803603606081101561034257600080fd5b810190808035906020019064010000000081111561035f57600080fd5b82018360208201111561037157600080fd5b8035906020019184600183028401116401000000008311171561039357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610710565b005b34801561041d57600080fd5b5061042661086b565b6040518082815260200191505060405180910390f35b610444610871565b005b34801561045257600080fd5b5061047f6004803603602081101561046957600080fd5b8101908080359060200190929190505050610937565b005b600080828154811061048f57fe5b906000526020600020906005020190506002600354816104ab57fe5b048160030154116104bb57600080fd5b8060020160149054906101000a900460ff16156104d757600080fd5b8060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc82600101549081150290604051600060405180830381858888f19350505050158015610545573d6000803e3d6000fd5b5060018160020160146101000a81548160ff0219169083151502179055505050565b60046020528060005260406000206000915054906101000a900460ff1681565b60008080549050905090565b600080600080600060025460008080549050600354600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16945094509450945094509091929394565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000818154811061060f57fe5b9060005260206000209060050201600091509050806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106bb5780601f10610690576101008083540402835291602001916106bb565b820191906000526020600020905b81548152906001019060200180831161069e57829003601f168201915b5050505050908060010154908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160149054906101000a900460ff16908060030154905085565b60035481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146107b6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180610be66025913960400191505060405180910390fd5b6000806001816001815401808255809150500390600052602060002090600502019050838160000190805190602001906107f1929190610b48565b50828160010181905550818160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008160020160146101000a81548160ff0219169083151502179055506000816003018190555050505050565b60025481565b60025434116108cb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526038815260200180610c0b6038913960400191505060405180910390fd5b6001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600360008154809291906001019190505550565b600080828154811061094557fe5b90600052602060002090600502019050600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610a14576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f4163636573732064656e6965640000000000000000000000000000000000000081525060200191505060405180910390fd5b8060040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610ad6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f5573657220616c726561647920617070726f766564207265717565737400000081525060200191505060405180910390fd5b60018160040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555080600301600081548092919060010191905055505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610b8957805160ff1916838001178555610bb7565b82800160010185558215610bb7579182015b82811115610bb6578251825591602001919060010190610b9b565b5b509050610bc49190610bc8565b5090565b5b80821115610be1576000816000905550600101610bc9565b509056fe4f6e6c79206d616e616765722063616e206d6f64696679207468697320636f6e747261637456616c7565206973206c6f776572207468656e206d696e696d616c20636f6e747269627574696f6e20666f72207468652070726f6a656374a2646970667358221220831be6c5ed541ef5ae828e13ea846c79a28c0cf440caca1c9a4270d06572bb6964736f6c63430007030033";
