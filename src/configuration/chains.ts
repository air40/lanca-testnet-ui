import type { AppKitNetwork } from '@reown/appkit/networks'
import { http, fallback } from 'viem'
import { defineChain } from 'viem'
import {
	curtis,
	arbitrumSepolia,
	avalancheFuji,
	baseSepolia,
	bitlayerTestnet,
	blastSepolia,
	bscTestnet,
	botanixTestnet,
	celoAlfajores,
	cronosTestnet,
	gnosisChiado,
	hashkeyTestnet,
	inkSepolia,
	lineaSepolia,
	mantleSepoliaTestnet,
	megaethTestnet,
	modeTestnet,
	monadTestnet,
	optimismSepolia,
	polygonAmoy,
	saigon,
	scrollSepolia,
	seiTestnet,
	sepolia,
	shibariumTestnet,
	soneiumMinato,
	unichainSepolia,
	xLayerTestnet,
	zircuitTestnet,
	berachainBepolia,
	opBNBTestnet,
	auroraTestnet,
	worldchainSepolia,
	bobSepolia,
	cronoszkEVMTestnet,
	flowTestnet,
	fraxtalTestnet,
	metisSepolia,
	kavaTestnet,
	filecoinCalibration,
	morphHolesky,
	abstractTestnet,
	oasisTestnet,
	sonicBlazeTestnet,
	seismicDevnet,
} from '@reown/appkit/networks'

const coreTestnet = defineChain({
	id: 1114,
	name: 'Core Blockchain TestNet',
	nativeCurrency: {
		decimals: 18,
		name: 'CORE',
		symbol: 'tCORE2',
	},
	rpcUrls: {
		default: {
			http: ['https://rpc.test2.btcs.network'],
		},
	},
	blockExplorers: {
		default: { name: 'Core Scan', url: 'https://scan.test2.btcs.network' },
	},
	testnet: true,
})

const wemixTestnet = defineChain({
	id: 1112,
	name: 'WEMIX_Testnet',
	nativeCurrency: {
		decimals: 18,
		name: 'tWEMIX',
		symbol: 'tWEMIX',
	},
	rpcUrls: {
		default: {
			http: ['https://api.test.wemix.com'],
		},
	},
	blockExplorers: {
		default: { name: 'WEMIX Explorer', url: 'https://explorer.test.wemix.com/' },
	},
	testnet: true,
})

const irysTestnet = defineChain({
	id: 1270,
	name: 'Irys Testnet',
	nativeCurrency: {
		decimals: 18,
		name: 'mIRYS',
		symbol: 'IRYS',
	},
	rpcUrls: {
		default: {
			http: ['https://testnet-rpc.irys.xyz/v1/execution-rpc'],
		},
	},
	blockExplorers: {
		default: { name: 'Irys Explorer', url: 'https://testnet-explorer.irys.xyz' },
	},
	testnet: true,
})

const expchainTestnet = defineChain({
	id: 18880,
	name: 'EXPchain Testnet',
	nativeCurrency: {
		decimals: 18,
		name: 'tZKJ',
		symbol: 'tZKJ',
	},
	rpcUrls: {
		default: {
			http: ['https://expchain.polyhedra.network/rpc0-testnet'],
		},
	},
	blockExplorers: {
		default: { name: 'EXPchain Explorer', url: 'https://expchain.polyhedra.network/blockscout-testnet' },
	},
	testnet: true,
})

const b2Testnet = defineChain({
	id: 1123,
	name: 'B2 Testnet',
	nativeCurrency: {
		decimals: 18,
		name: 'BTC',
		symbol: 'BTC',
	},
	rpcUrls: {
		default: {
			http: [
				'https://b2-testnet.alt.technology',
				'https://rpc.ankr.com/b2_testnet',
				'https://testnet-rpc.bsquared.network',
			],
		},
	},
	blockExplorers: {
		default: { name: 'B2 Testnet Explorer', url: 'https://explorer.bsquared.network' },
	},
	testnet: true,
})

const taikoHekla = defineChain({
	id: 167009,
	name: 'Taiko Hekla Testnet',
	nativeCurrency: {
		decimals: 18,
		name: 'Ether',
		symbol: 'ETH',
	},
	rpcUrls: {
		default: {
			http: ['https://rpc.hekla.taiko.xyz'],
		},
	},
	blockExplorers: {
		default: {
			name: 'Taikoscan',
			url: 'https://hekla.taikoscan.io',
		},
	},
	testnet: true,
})

const pulsechainTestnet = defineChain({
	id: 940,
	name: 'PulseChain Testnet',
	nativeCurrency: {
		decimals: 18,
		name: 'tPLS',
		symbol: 'tPLS',
	},
	rpcUrls: {
		default: {
			http: ['https://rpc.v2.testnet.pulsechain.com/'],
		},
	},
	blockExplorers: {
		default: { name: 'PulseChain Explorer', url: 'https://scan.v2.testnet.pulsechain.com/' },
	},
	testnet: true,
})

const kaiaKairos = defineChain({
	id: 1001,
	name: 'Kaia Kairos Testnet',
	nativeCurrency: {
		decimals: 18,
		name: 'KAIA',
		symbol: 'KAIA',
	},
	rpcUrls: {
		default: {
			http: [
				'https://public-en-kairos.node.kaia.io',
				'https://kaia-kairos.blockpi.network/v1/rpc/public',
				'https://responsive-green-emerald.kaia-kairos.quiknode.pro/',
			],
		},
	},
	blockExplorers: {
		default: { name: 'Kairos Scope', url: 'https://kairos.kaiascope.com' },
	},
	testnet: true,
})

const mantaPacificSepoliaTestnet = defineChain({
	id: 3441006,
	name: 'Manta Pacific Sepolia Testnet',
	nativeCurrency: {
		decimals: 18,
		name: 'Ether',
		symbol: 'ETH',
	},
	rpcUrls: {
		default: {
			http: ['https://pacific-rpc.sepolia-testnet.manta.network/http'],
			webSocket: ['wss://pacific-rpc.sepolia-testnet.manta.network/ws'],
		},
	},
	blockExplorers: {
		default: {
			name: 'Manta Pacific Sepolia Explorer',
			url: 'https://pacific-explorer.sepolia-testnet.manta.network',
		},
	},
	testnet: true,
})

export const astarShibuya = defineChain({
	id: 81,
	name: 'Astar Shibuya Testnet',
	network: 'shibuya',
	nativeCurrency: {
		decimals: 18,
		name: 'Shibuya Token',
		symbol: 'SBY',
	},
	rpcUrls: {
		default: {
			http: ['https://evm.shibuya.astar.network'],
		},
	},
	blockExplorers: {
		default: {
			name: 'Blockscout',
			url: 'https://blockscout.com/shibuya',
		},
	},
})

const options = {
	retryCount: 5,
	retryDelay: 15000,
	timeout: 30000,
}

export const chains: [AppKitNetwork, ...AppKitNetwork[]] = [
	//// APECHAIN CURTIS ////
	curtis,

	//// ARBITRUM SEPOLIA ////
	arbitrumSepolia,

	//// AVALANCHE FUJI ////
	avalancheFuji,

	//// BASE SEPOLIA ////
	baseSepolia,

	//// BITLAYER TESTNET ////
	bitlayerTestnet,

	//// BLAST SEPOLIA ////
	blastSepolia,

	//// BNB TESTNET ////
	bscTestnet,

	//// BOTANIX TESTNET ////
	botanixTestnet,

	//// CELO ALFAJORES ////
	celoAlfajores,

	//// CORE TESTNET ////
	coreTestnet,

	//// CRONOS TESTNET ////
	cronosTestnet,

	//// GNOSIS CHIADO ////
	gnosisChiado,

	//// HASHKEY TESTNET ////
	hashkeyTestnet,

	//// INK SEPOLIA ////
	inkSepolia,

	//// LINEA SEPOLIA ////
	lineaSepolia,

	//// MANTLE SEPOLIA ////
	mantleSepoliaTestnet,

	//// MEGAETH TESTNET ////
	megaethTestnet,

	//// MODE TESTNET ////
	modeTestnet,

	//// MONAD TESTNET ////
	monadTestnet,

	//// OPTIMISM SEPOLIA ////
	optimismSepolia,

	//// POLYGON AMOY ////
	polygonAmoy,

	//// SAIGON ////
	saigon,

	//// SCROLL SEPOLIA ////
	scrollSepolia,

	//// SEI TESTNET ////
	seiTestnet,

	//// SEPOLIA ////
	sepolia,

	//// SHIBARIUM TESTNET ////
	shibariumTestnet,

	//// SONEIUM MINATO ////
	soneiumMinato,

	//// UNICHAIN SEPOLIA ////
	unichainSepolia,

	//// XLAYER SEPOLIA ////
	xLayerTestnet,

	//// ZIRCUT TESTNET ////
	zircuitTestnet,

	//// BERACHAIN BEPOLIA ////
	berachainBepolia,

	//// OP BNB TESTNET ////
	opBNBTestnet,

	//// AURORA TESTNET ////
	auroraTestnet,

	//// WORLDCHAIN SEPOLIA ////
	worldchainSepolia,

	//// BOB SEPOLIA ////
	bobSepolia,

	//// CRONOS ZKEVM TESTNET ////
	cronoszkEVMTestnet,

	//// FLOW TESTNET ////
	flowTestnet,

	//// FRAXTAL TESTNET ////
	fraxtalTestnet,

	//// METIS SEPOLIA ////
	metisSepolia,

	//// KAVA TESTNET ////
	kavaTestnet,

	//// FILECOIN CALIBRATION ////
	filecoinCalibration,

	//// MORPH HOLESKY ////
	morphHolesky,

	//// ABSTRACT SEPOLIA ////
	abstractTestnet,

	//// OASIS SAPPHIRE ////
	oasisTestnet,

	//// WEMIX TESTNET ////
	wemixTestnet,

	//// IRYS TESTNET ////
	irysTestnet,

	//// EXPCHAIN TESTNET ////
	expchainTestnet,

	//// B2 TESTNET ////
	b2Testnet,

	//// TAIKO HEKLA ////
	taikoHekla,

	//// PULSECHAIN TESTNET ////
	pulsechainTestnet,

	//// KAIA KAIROS ////
	kaiaKairos,

	//// MANTA PACIFIC SEPOLIA ////
	mantaPacificSepoliaTestnet,

	//// SONIC BLAZE TESTNET ////
	sonicBlazeTestnet,

	//// SEISMIC DEVNET ////
	seismicDevnet,

	//// ASTAR SHIBUYA ////
	astarShibuya,
]

export const transports = {
	//// APECHAIN CURTIS ////
	[curtis.id]: fallback([http('https://rpc.curtis.apechain.com'), http(), http('https://apechain-curtis.drpc.org')]),

	//// ARBITRUM SEPOLIA ////
	[arbitrumSepolia.id]: fallback([
		http('https://endpoints.omniatech.io/v1/arbitrum/sepolia/public'),
		http('https://arbitrum-sepolia.gateway.tenderly.co'),
		http(),
		http('https://arbitrum-sepolia.drpc.org'),
	]),

	//// AVALANCHE FUJI ////
	[avalancheFuji.id]: fallback([
		http('https://ava-testnet.public.blastapi.io/ext/bc/C/rpc'),
		http('https://avalanche-fuji-c-chain-rpc.publicnode.com'),
		http(),
		http('https://avalanche-fuji.drpc.org'),
	]),

	//// BASE SEPOLIA ////
	[baseSepolia.id]: fallback([
		http('https://base-sepolia.gateway.tenderly.co'),
		http('https://base-sepolia-rpc.publicnode.com'),
		http(),
		http('https://base-sepolia.drpc.org'),
	]),

	//// BITLAYER TESTNET ////
	[bitlayerTestnet.id]: fallback([
		http('https://testnet-rpc.bitlayer.org'),
		http('https://rpc.ankr.com/bitlayer_testnet'),
		http(),
	]),

	//// BLAST SEPOLIA ////
	[blastSepolia.id]: fallback([
		http('https://sepolia.blast.io'),
		http('https://endpoints.omniatech.io/v1/blast/sepolia/public'),
		http(),
	]),

	/// BNB TESTNET ///
	[bscTestnet.id]: fallback([
		http('https://endpoints.omniatech.io/v1/bsc/testnet/public'),
		http('https://public.stackup.sh/api/v1/node/bsc-testnet'),
		http(),
		http('https://bsc-testnet.drpc.org'),
	]),

	//// BOTANIX TESTNET ////
	[botanixTestnet.id]: fallback([http('https://https://rpc.ankr.com/botanix_testnet.botanixlabs.dev'), http()]),

	//// CELO ALFAJORES ////
	[celoAlfajores.id]: fallback([
		http('https://alfajores-forno.celo-testnet.org'),
		http(),
		http('https://celo-alfajores.drpc.org'),
	]),

	//// CORE TESTNET ////
	[coreTestnet.id]: fallback([http()]),

	//// CRONOS TESTNET ////
	[cronosTestnet.id]: fallback([
		http('https://evm-t3.cronos.org'),
		http('https://endpoints.omniatech.io/v1/cronos/testnet/public'),
		http(),
	]),

	//// GNOSIS CHIADO ////
	[gnosisChiado.id]: fallback([
		http('https://gnosis-chiado-rpc.publicnode.com'),
		http('https://endpoints.omniatech.io/v1/gnosis/chiado/public'),
		http(),
	]),

	//// HASHKEY TESTNET ////
	[hashkeyTestnet.id]: fallback([http()]),

	//// INK SEPOLIA ////
	[inkSepolia.id]: fallback([http(), http('https://ink-sepolia.drpc.org')]),

	//// LINEA SEPOLIA ////
	[lineaSepolia.id]: fallback([
		http('https://linea-sepolia-rpc.publicnode.com'),
		http(),
		http('https://linea-sepolia.drpc.org'),
	]),

	//// MANTLE SEPOLIA ////
	[mantleSepoliaTestnet.id]: fallback([
		http('https://endpoints.omniatech.io/v1/mantle/sepolia/public'),
		http('https://rpc.sepolia.mantle.xyz'),
		http(),
	]),

	//// MEGAETH TESTNET ////
	[megaethTestnet.id]: fallback([http('https://carrot.megaeth.com/rpc'), http()]),

	//// MODE TESTNET ////
	[modeTestnet.id]: fallback([http('https://sepolia.mode.network'), http()]),

	//// MONAD TESTNET ////
	[monadTestnet.id]: fallback([http(), http('https://monad-testnet.drpc.org')], options),

	//// OPTIMISM SEPOLIA ////
	[optimismSepolia.id]: fallback([
		http('https://endpoints.omniatech.io/v1/op/sepolia/public'),
		http('https://optimism-sepolia.gateway.tenderly.co'),
		http(),
		http('https://optimism-sepolia.drpc.org'),
	]),

	//// POLYGON AMOY ////
	[polygonAmoy.id]: fallback([
		http('https://polygon-amoy-bor-rpc.publicnode.com'),
		http('https://polygon-amoy.gateway.tenderly.co'),
		http('https://rpc-amoy.polygon.technology'),
		http(),
	]),

	//// SAIGON ////
	[saigon.id]: fallback([http()]),

	//// SCROLL SEPOLIA ////
	[scrollSepolia.id]: fallback([
		http('https://sepolia-rpc.scroll.io'),
		http('https://scroll-sepolia.chainstacklabs.com'),
		http('https://scroll-public.scroll-testnet.quiknode.pro'),
		http(),
	]),

	//// SEI TESTNET ////
	[seiTestnet.id]: fallback([http('https://evm-rpc-testnet.sei-apis.com'), http()]),

	//// SEPOLIA ////
	[sepolia.id]: fallback([
		http('https://ethereum-sepolia-rpc.publicnode.com'),
		http('https://endpoints.omniatech.io/v1/eth/sepolia/public'),
		http('https://1rpc.io/sepolia'),
		http(),
	]),

	//// SHIBARIUM TESTNET ////
	[shibariumTestnet.id]: fallback([http('https://puppynet.shibrpc.com'), http()]),

	//// SONEIUM MINATO ////
	[soneiumMinato.id]: fallback([
		http('https://rpc.minato.soneium.org'),
		http(),
		http('https://soneium-minato.drpc.org'),
	]),

	//// UNICHAIN SEPOLIA ////
	[unichainSepolia.id]: fallback([
		http('https://sepolia.unichain.org'),
		http('https://unichain-sepolia-rpc.publicnode.com'),
		http(),
		http('https://unichain-sepolia.drpc.org'),
	]),

	//// XLAYER SEPOLIA ////
	[xLayerTestnet.id]: fallback([
		http('https://rpc.ankr.com/xlayer_testnet'),
		http('https://endpoints.omniatech.io/v1/xlayer/testnet/public'),
		http('https://xlayertestrpc.okx.com'),
		http(),
	]),

	//// ZIRCUT TESTNET ////
	[zircuitTestnet.id]: fallback([
		http('https://testnet.zircuit.com'),
		http('https://zircuit1-testnet.p2pify.com'),
		http(),
	]),

	//// BERACHAIN BEPOLIA ////
	[berachainBepolia.id]: fallback([
		http('https://bepolia.rpc.berachain.com'),
		http('https://berachain-bepolia.drpc.org'),
		http(),
	]),

	//// OP BNB TESTNET ////
	[opBNBTestnet.id]: fallback([
		http('https://opbnb-testnet.nodereal.io/v1/64a9df0874fb4a93b9d0a3849de012d3'),
		http('https://opbnb-testnet.nodereal.io/v1/e9a36765eb8a40b9bd12e680a1fd2bc5'),
		http(),
	]),

	//// AURORA TESTNET ////
	[auroraTestnet.id]: fallback([http('https://testnet.aurora.dev'), http('https://aurora-testnet.drpc.org'), http()]),

	//// WORLDCHAIN SEPOLIA ////
	[worldchainSepolia.id]: fallback([
		http('https://worldchain-sepolia.g.alchemy.com/public'),
		http('https://worldchain-sepolia.drpc.org'),
		http(),
	]),

	//// BOB SEPOLIA ////
	[bobSepolia.id]: fallback([http('https://bob-sepolia.rpc.gobob.xyz'), http('https://bob-testnet.drpc.org')]),

	//// CRONOS ZKEVM TESTNET ////
	[cronoszkEVMTestnet.id]: fallback([http('https://testnet.zkevm.cronos.org'), http()]),

	//// FLOW TESTNET ////
	[flowTestnet.id]: fallback([http('https://testnet.evm.nodes.onflow.org'), http()]),

	//// FRAXTAL TESTNET ////
	[fraxtalTestnet.id]: fallback([
		http('https://fraxtal-holesky-rpc.publicnode.com'),
		http('https://rpc.testnet.frax.com'),
		http(),
	]),

	//// METIS SEPOLIA ////
	[metisSepolia.id]: fallback([
		http('https://metis-sepolia.gateway.tenderly.co'),
		http('https://metis-sepolia-rpc.publicnode.com'),
		http(),
	]),

	//// KAVA TESTNET ////
	[kavaTestnet.id]: fallback([http('https://evm.testnet.kava.io'), http('https://kava-testnet.drpc.org'), http()]),

	//// FILECOIN CALIBRATION ////
	[filecoinCalibration.id]: fallback([
		http('https://api.calibration.node.glif.io/rpc/v1'),
		http('https://rpc.ankr.com/filecoin_testnet'),
		http(),
	]),

	//// MORPH HOLESKY ////
	[morphHolesky.id]: fallback([
		http('https://rpc-holesky.morphl2.io'),
		http('https://rpc-quicknode-holesky.morphl2.io'),
		http(),
	]),

	//// ABSTRACT SEPOLIA ////
	[abstractTestnet.id]: fallback([http('https://api.testnet.abs.xyz'), http()]),

	//// OASIS SAPPHIRE ////
	[oasisTestnet.id]: fallback([http('https://rpc1.oasis.bahamutchain.com'), http()]),

	//// WEMIX TESTNET ////
	[wemixTestnet.id]: fallback([http('https://wemix-testnet.drpc.org'), http()]),

	//// IRYS TESTNET ////
	[irysTestnet.id]: fallback([http('https://testnet-rpc.irys.xyz/v1/execution-rpc'), http()]),

	//// EXPCHAIN TESTNET ////
	[expchainTestnet.id]: fallback([http('https://rpc1-testnet.expchain.ai'), http()]),

	//// B2 TESTNET ////
	[b2Testnet.id]: fallback([
		http('https://b2-testnet.alt.technology'),
		http('https://rpc.ankr.com/b2_testnet'),
		http(),
	]),

	//// TAIKO HEKLA ////
	[taikoHekla.id]: fallback([
		http('https://rpc.ankr.com/taiko_hekla'),
		http('https://taiko-hekla.gateway.tenderly.co'),
		http('https://rpc.hekla.taiko.xyz'),
		http(),
	]),

	//// PULSECHAIN TESTNET ////
	[pulsechainTestnet.id]: fallback([http('https://rpc.v2.testnet.pulsechain.com/'), http()]),

	//// KAIA KAIROS ////
	[kaiaKairos.id]: fallback([
		http('https://rpc.ankr.com/kaia_testnet'),
		http('https://public-en-kairos.node.kaia.io'),
		http('https://kaia-kairos.blockpi.network/v1/rpc/public'),
		http(),
	]),

	//// MANTA PACIFIC SEPOLIA ////
	[mantaPacificSepoliaTestnet.id]: fallback([
		http('https://pacific-rpc.sepolia-testnet.manta.network/http'),
		http('https://endpoints.omniatech.io/v1/manta-pacific/sepolia/public'),
		http(),
	]),

	//// SONIC BLAZE TESTNET ////
	[sonicBlazeTestnet.id]: fallback([http('https://rpc.blaze.soniclabs.com'), http('https://rpc.ankr.com/sonic_blaze_testnet'), http('https://rpc.blaze.soniclabs.com')]),


	//// SEISMIC DEVNET ////
	[seismicDevnet.id]: fallback([http('https://node-2.seismicdev.net/rpc'), http()]),

	//// ASTAR SHIBUYA ////
	[astarShibuya.id]: fallback([ http('https://shibuya-rpc.dwellir.com'), http('https://shibuya.public.blastapi.io'), http()]),
}
