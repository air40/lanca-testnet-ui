import type { Abi } from 'viem'

export const CCIPRouter = [
	{
		inputs: [
			{
				internalType: 'address',
				name: 'wrappedNative',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'armProxy',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'BadARMSignal',
		type: 'error',
	},
	{
		inputs: [],
		name: 'FailedToSendValue',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InsufficientFeeTokenAmount',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidMsgValue',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
		],
		name: 'InvalidRecipientAddress',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint64',
				name: 'chainSelector',
				type: 'uint64',
			},
			{
				internalType: 'address',
				name: 'offRamp',
				type: 'address',
			},
		],
		name: 'OffRampMismatch',
		type: 'error',
	},
	{
		inputs: [],
		name: 'OnlyOffRamp',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint64',
				name: 'destChainSelector',
				type: 'uint64',
			},
		],
		name: 'UnsupportedDestinationChain',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'messageId',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'uint64',
				name: 'sourceChainSelector',
				type: 'uint64',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'offRamp',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'calldataHash',
				type: 'bytes32',
			},
		],
		name: 'MessageExecuted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint64',
				name: 'sourceChainSelector',
				type: 'uint64',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'offRamp',
				type: 'address',
			},
		],
		name: 'OffRampAdded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint64',
				name: 'sourceChainSelector',
				type: 'uint64',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'offRamp',
				type: 'address',
			},
		],
		name: 'OffRampRemoved',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint64',
				name: 'destChainSelector',
				type: 'uint64',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'onRamp',
				type: 'address',
			},
		],
		name: 'OnRampSet',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
		],
		name: 'OwnershipTransferRequested',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
		],
		name: 'OwnershipTransferred',
		type: 'event',
	},
	{
		inputs: [],
		name: 'MAX_RET_BYTES',
		outputs: [
			{
				internalType: 'uint16',
				name: '',
				type: 'uint16',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'acceptOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'uint64',
						name: 'destChainSelector',
						type: 'uint64',
					},
					{
						internalType: 'address',
						name: 'onRamp',
						type: 'address',
					},
				],
				internalType: 'struct Router.OnRamp[]',
				name: 'onRampUpdates',
				type: 'tuple[]',
			},
			{
				components: [
					{
						internalType: 'uint64',
						name: 'sourceChainSelector',
						type: 'uint64',
					},
					{
						internalType: 'address',
						name: 'offRamp',
						type: 'address',
					},
				],
				internalType: 'struct Router.OffRamp[]',
				name: 'offRampRemoves',
				type: 'tuple[]',
			},
			{
				components: [
					{
						internalType: 'uint64',
						name: 'sourceChainSelector',
						type: 'uint64',
					},
					{
						internalType: 'address',
						name: 'offRamp',
						type: 'address',
					},
				],
				internalType: 'struct Router.OffRamp[]',
				name: 'offRampAdds',
				type: 'tuple[]',
			},
		],
		name: 'applyRampUpdates',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint64',
				name: 'destinationChainSelector',
				type: 'uint64',
			},
			{
				components: [
					{
						internalType: 'bytes',
						name: 'receiver',
						type: 'bytes',
					},
					{
						internalType: 'bytes',
						name: 'data',
						type: 'bytes',
					},
					{
						components: [
							{
								internalType: 'address',
								name: 'token',
								type: 'address',
							},
							{
								internalType: 'uint256',
								name: 'amount',
								type: 'uint256',
							},
						],
						internalType: 'struct Client.EVMTokenAmount[]',
						name: 'tokenAmounts',
						type: 'tuple[]',
					},
					{
						internalType: 'address',
						name: 'feeToken',
						type: 'address',
					},
					{
						internalType: 'bytes',
						name: 'extraArgs',
						type: 'bytes',
					},
				],
				internalType: 'struct Client.EVM2AnyMessage',
				name: 'message',
				type: 'tuple',
			},
		],
		name: 'ccipSend',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getArmProxy',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint64',
				name: 'destinationChainSelector',
				type: 'uint64',
			},
			{
				components: [
					{
						internalType: 'bytes',
						name: 'receiver',
						type: 'bytes',
					},
					{
						internalType: 'bytes',
						name: 'data',
						type: 'bytes',
					},
					{
						components: [
							{
								internalType: 'address',
								name: 'token',
								type: 'address',
							},
							{
								internalType: 'uint256',
								name: 'amount',
								type: 'uint256',
							},
						],
						internalType: 'struct Client.EVMTokenAmount[]',
						name: 'tokenAmounts',
						type: 'tuple[]',
					},
					{
						internalType: 'address',
						name: 'feeToken',
						type: 'address',
					},
					{
						internalType: 'bytes',
						name: 'extraArgs',
						type: 'bytes',
					},
				],
				internalType: 'struct Client.EVM2AnyMessage',
				name: 'message',
				type: 'tuple',
			},
		],
		name: 'getFee',
		outputs: [
			{
				internalType: 'uint256',
				name: 'fee',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getOffRamps',
		outputs: [
			{
				components: [
					{
						internalType: 'uint64',
						name: 'sourceChainSelector',
						type: 'uint64',
					},
					{
						internalType: 'address',
						name: 'offRamp',
						type: 'address',
					},
				],
				internalType: 'struct Router.OffRamp[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint64',
				name: 'destChainSelector',
				type: 'uint64',
			},
		],
		name: 'getOnRamp',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint64',
				name: 'chainSelector',
				type: 'uint64',
			},
		],
		name: 'getSupportedTokens',
		outputs: [
			{
				internalType: 'address[]',
				name: '',
				type: 'address[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getWrappedNative',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint64',
				name: 'chainSelector',
				type: 'uint64',
			},
		],
		name: 'isChainSupported',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint64',
				name: 'sourceChainSelector',
				type: 'uint64',
			},
			{
				internalType: 'address',
				name: 'offRamp',
				type: 'address',
			},
		],
		name: 'isOffRamp',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'owner',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'tokenAddress',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'recoverTokens',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'bytes32',
						name: 'messageId',
						type: 'bytes32',
					},
					{
						internalType: 'uint64',
						name: 'sourceChainSelector',
						type: 'uint64',
					},
					{
						internalType: 'bytes',
						name: 'sender',
						type: 'bytes',
					},
					{
						internalType: 'bytes',
						name: 'data',
						type: 'bytes',
					},
					{
						components: [
							{
								internalType: 'address',
								name: 'token',
								type: 'address',
							},
							{
								internalType: 'uint256',
								name: 'amount',
								type: 'uint256',
							},
						],
						internalType: 'struct Client.EVMTokenAmount[]',
						name: 'destTokenAmounts',
						type: 'tuple[]',
					},
				],
				internalType: 'struct Client.Any2EVMMessage',
				name: 'message',
				type: 'tuple',
			},
			{
				internalType: 'uint16',
				name: 'gasForCallExactCheck',
				type: 'uint16',
			},
			{
				internalType: 'uint256',
				name: 'gasLimit',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'receiver',
				type: 'address',
			},
		],
		name: 'routeMessage',
		outputs: [
			{
				internalType: 'bool',
				name: 'success',
				type: 'bool',
			},
			{
				internalType: 'bytes',
				name: 'retData',
				type: 'bytes',
			},
			{
				internalType: 'uint256',
				name: 'gasUsed',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'wrappedNative',
				type: 'address',
			},
		],
		name: 'setWrappedNative',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
		],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'typeAndVersion',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
] as Abi
