export type FaucetInfo = {
  chainName: string;
  logoUrl: string;
  isCCIP: boolean;
  faucetName: string;
  faucetUrl: string;
};

export const faucets: FaucetInfo[] = [
  // SEPOLIA
  {
    chainName: 'Sepolia',
    logoUrl: '/Chains/11155111.svg',
    isCCIP: true,
    faucetName: 'Sepolia 1',
    faucetUrl: 'https://cloud.google.com/application/web3/faucet/ethereum/sepolia'
  },
  {
    chainName: 'Sepolia',
    logoUrl: '/Chains/11155111.svg',
    isCCIP: true,
    faucetName: 'Sepolia 2',
    faucetUrl: 'https://www.alchemy.com/faucets/ethereum-sepolia'
  },
  {
    chainName: 'Sepolia',
    logoUrl: '/Chains/11155111.svg',
    isCCIP: true,
    faucetName: 'Sepolia 3',
    faucetUrl: 'https://sepolia-faucet.pk910.de/'
  },
  {
    chainName: 'Sepolia',
    logoUrl: '/Chains/11155111.svg',
    isCCIP: true,
    faucetName: 'Sepolia 4',
    faucetUrl: 'https://faucets.chain.link/sepolia'
  },
  {
    chainName: 'Sepolia',
    logoUrl: '/Chains/11155111.svg',
    isCCIP: true,
    faucetName: 'Sepolia 5',
    faucetUrl: 'https://www.infura.io/zh/faucet/sepolia'
  },

  // ARBITRUM SEPOLIA
  {
    chainName: 'Arbitrum',
    logoUrl: '/Chains/421614.svg',
    isCCIP: true,
    faucetName: 'Arbitrum 1',
    faucetUrl: 'https://www.alchemy.com/faucets/arbitrum-sepolia'
  },
  {
    chainName: 'Arbitrum',
    logoUrl: '/Chains/421614.svg',
    isCCIP: true,
    faucetName: 'Arbitrum 2',
    faucetUrl: 'https://faucets.chain.link/arbitrum-sepolia'
  },

  // MONAD TESTNET
  {
    chainName: 'Monad',
    logoUrl: '/Chains/10143.svg',
    isCCIP: true,
    faucetName: 'Monad 1',
    faucetUrl: 'https://faucet.quicknode.com/monad/testnet'
  },
  {
    chainName: 'Monad',
    logoUrl: '/Chains/10143.svg',
    isCCIP: true,
    faucetName: 'Monad 2',
    faucetUrl: 'https://testnet.monad.xyz/'
  },

  // BASE SEPOLIA
  {
    chainName: 'Base',
    logoUrl: '/Chains/84532.svg',
    isCCIP: true,
    faucetName: 'Base 1',
    faucetUrl: 'https://www.alchemy.com/faucets/base-sepolia'
  },
  {
    chainName: 'Base',
    logoUrl: '/Chains/84532.svg',
    isCCIP: true,
    faucetName: 'Base 2',
    faucetUrl: 'https://faucets.chain.link/base-sepolia'
  },
  {
    chainName: 'Base',
    logoUrl: '/Chains/84532.svg',
    isCCIP: true,
    faucetName: 'Base 3',
    faucetUrl: 'https://faucet.quicknode.com/base/sepolia'
  },
  {
    chainName: 'Base',
    logoUrl: '/Chains/84532.svg',
    isCCIP: true,
    faucetName: 'Base 4',
    faucetUrl: 'https://learnweb3.io/faucets/base_sepolia/'
  },
  {
    chainName: 'Base',
    logoUrl: '/Chains/84532.svg',
    isCCIP: true,
    faucetName: 'Base 5',
    faucetUrl: 'https://faucet.chainstack.com/base-testnet-faucet'
  },

  // MEGAETH TESTNET
  {
    chainName: 'MegaETH',
    logoUrl: '/Chains/6342.svg',
    isCCIP: false,
    faucetName: 'MegaETH 1',
    faucetUrl: 'https://testnet.megaeth.com/'
  },
  {
    chainName: 'MegaETH',
    logoUrl: '/Chains/6342.svg',
    isCCIP: false,
    faucetName: 'MegaETH 2',
    faucetUrl: 'https://faucet.trade/megaeth-testnet-eth-faucet'
  },
  {
    chainName: 'MegaETH',
    logoUrl: '/Chains/6342.svg',
    isCCIP: false,
    faucetName: 'MegaETH 3',
    faucetUrl: 'https://www.gas.zip/faucet/megaeth'
  },

  // SONEIUM MINATO
  {
    chainName: 'Minato',
    logoUrl: '/Chains/1946.svg',
    isCCIP: true,
    faucetName: 'Minato 1',
    faucetUrl: 'https://faucet.trade/soneium-minato-sepolia-eth-faucet'
  },
  {
    chainName: 'Minato',
    logoUrl: '/Chains/1946.svg',
    isCCIP: true,
    faucetName: 'Minato 2',
    faucetUrl: 'https://faucets.alchemy.com/faucets/soneium-minato'
  },
  {
    chainName: 'Minato',
    logoUrl: '/Chains/1946.svg',
    isCCIP: true,
    faucetName: 'Minato 3',
    faucetUrl: 'https://thirdweb.com/soneium-minato'
  },
  {
    chainName: 'Minato',
    logoUrl: '/Chains/1946.svg',
    isCCIP: true,
    faucetName: 'Minato 4',
    faucetUrl: 'https://docs.soneium.org/docs/builders/tools/faucets'
  },

  // APECHAIN CURTIS
  {
    chainName: 'Curtis',
    logoUrl: '/Chains/33111.svg',
    isCCIP: true,
    faucetName: 'Curtis',
    faucetUrl: 'https://curtis.hub.caldera.xyz/'
  },

  // AVALANCHE FUJI
  {
    chainName: 'Fuji',
    logoUrl: '/Chains/43113.svg',
    isCCIP: true,
    faucetName: 'Fuji 1',
    faucetUrl: 'https://core.app/tools/testnet-faucet/?subnet=c&token=c'
  },
  {
    chainName: 'Fuji',
    logoUrl: '/Chains/43113.svg',
    isCCIP: true,
    faucetName: 'Fuji 2',
    faucetUrl: 'https://faucet.quicknode.com/avalanche/fuji'
  },
  {
    chainName: 'Fuji',
    logoUrl: '/Chains/43113.svg',
    isCCIP: true,
    faucetName: 'Fuji 3',
    faucetUrl: 'https://faucets.chain.link/fuji'
  },
  {
    chainName: 'Fuji',
    logoUrl: '/Chains/43113.svg',
    isCCIP: true,
    faucetName: 'Fuji 4',
    faucetUrl: 'https://tokentool.bitbond.com/faucet/avalanche-fuji'
  },

  // UNICHAIN SEPOLIA
  {
    chainName: 'Unichain',
    logoUrl: '/Chains/1301.svg',
    isCCIP: true,
    faucetName: 'Unichain 1',
    faucetUrl: 'https://console.optimism.io/faucet'
  },
  {
    chainName: 'Unichain',
    logoUrl: '/Chains/1301.svg',
    isCCIP: true,
    faucetName: 'Unichain 2',
    faucetUrl: 'https://faucet.quicknode.com/unichain/sepolia'
  },
  {
    chainName: 'Unichain',
    logoUrl: '/Chains/1301.svg',
    isCCIP: true,
    faucetName: 'Unichain 3',
    faucetUrl: 'https://www.l2faucet.com/unichain'
  },
  {
    chainName: 'Unichain',
    logoUrl: '/Chains/1301.svg',
    isCCIP: true,
    faucetName: 'Unichain 4',
    faucetUrl: 'https://thirdweb.com/unichain-sepolia-testnet'
  },

  // OPTIMISM SEPOLIA
  {
    chainName: 'Optimism',
    logoUrl: '/Chains/11155420.svg',
    isCCIP: true,
    faucetName: 'Optimism 1',
    faucetUrl: 'https://www.alchemy.com/faucets/optimism-sepolia'
  },
  {
    chainName: 'Optimism',
    logoUrl: '/Chains/11155420.svg',
    isCCIP: true,
    faucetName: 'Optimism 2',
    faucetUrl: 'https://console.optimism.io/faucet'
  },
  {
    chainName: 'Optimism',
    logoUrl: '/Chains/11155420.svg',
    isCCIP: true,
    faucetName: 'Optimism 3',
    faucetUrl: 'https://faucet.quicknode.com/optimism/sepolia'
  },
  {
    chainName: 'Optimism',
    logoUrl: '/Chains/11155420.svg',
    isCCIP: true,
    faucetName: 'Optimism 4',
    faucetUrl: 'https://getblock.io/faucet/op-sepolia/'
  },

  // INK SEPOLIA
  {
    chainName: 'Ink',
    logoUrl: '/Chains/763373.svg',
    isCCIP: true,
    faucetName: 'Ink 1',
    faucetUrl: 'https://console.optimism.io/faucet'
  },
  {
    chainName: 'Ink',
    logoUrl: '/Chains/763373.svg',
    isCCIP: true,
    faucetName: 'Ink 2',
    faucetUrl: 'https://faucet.quicknode.com/ink/sepolia'
  },

  // CELO ALFAJORES
  {
    chainName: 'Alfajores',
    logoUrl: '/Chains/44787.svg',
    isCCIP: true,
    faucetName: 'Alfajores 1',
    faucetUrl: 'https://faucet.celo.org/alfajores'
  },
  {
    chainName: 'Alfajores',
    logoUrl: '/Chains/44787.svg',
    isCCIP: true,
    faucetName: 'Alfajores 2',
    faucetUrl: 'https://learnweb3.io/faucets/celo_alfajores/'
  },

  // BNB TESTNET
  {
    chainName: 'BSC',
    logoUrl: '/Chains/97.svg',
    isCCIP: true,
    faucetName: 'BSC 1',
    faucetUrl: 'https://www.bnbchain.org/en/testnet-faucet'
  },
  {
    chainName: 'BSC',
    logoUrl: '/Chains/97.svg',
    isCCIP: true,
    faucetName: 'BSC 2',
    faucetUrl: 'https://tokentool.bitbond.com/faucet/bsc-testnet'
  },
  {
    chainName: 'BSC',
    logoUrl: '/Chains/97.svg',
    isCCIP: true,
    faucetName: 'BSC 3',
    faucetUrl: 'https://faucet.quicknode.com/binance-smart-chain/bnb-testnet'
  },
  {
    chainName: 'BSC',
    logoUrl: '/Chains/97.svg',
    isCCIP: true,
    faucetName: 'BSC 4',
    faucetUrl: 'https://faucet.chainstack.com/bnb-testnet-faucet'
  },

  // RONIN SAIGON
  {
    chainName: 'Saigon',
    logoUrl: '/Chains/2021.svg',
    isCCIP: true,
    faucetName: 'Saigon',
    faucetUrl: 'https://faucet.roninchain.com/'
  },

  // BOTANIX TESTNET
  {
    chainName: 'Botanix',
    logoUrl: '/Chains/3636.svg',
    isCCIP: true,
    faucetName: 'Botanix',
    faucetUrl: 'https://faucet.botanixlabs.dev/'
  },

  // BITLAYER TESTNET
  {
    chainName: 'Bitlayer',
    logoUrl: '/Chains/200810.svg',
    isCCIP: true,
    faucetName: 'Bitlayer',
    faucetUrl: 'https://www.bitlayer.org/faucet'
  },

  // BLAST SEPOLIA
  {
    chainName: 'Blast',
    logoUrl: '/Chains/168587773.svg',
    isCCIP: true,
    faucetName: 'Blast 1',
    faucetUrl: 'https://faucets.chain.link/blast-sepolia'
  },
  {
    chainName: 'Blast',
    logoUrl: '/Chains/168587773.svg',
    isCCIP: true,
    faucetName: 'Blast 2',
    faucetUrl: 'https://faucet.quicknode.com/blast/sepolia'
  },
  {
    chainName: 'Blast',
    logoUrl: '/Chains/168587773.svg',
    isCCIP: true,
    faucetName: 'Blast 3',
    faucetUrl: 'https://blastapi.io/faucets/blastl2-testnet'
  },

  // CORE TESTNET
  {
    chainName: 'Core',
    logoUrl: '/Chains/1114.svg',
    isCCIP: true,
    faucetName: 'Core 1',
    faucetUrl: 'https://scan.test.btcs.network/faucet'
  },
  {
    chainName: 'Core',
    logoUrl: '/Chains/1114.svg',
    isCCIP: true,
    faucetName: 'Core 2',
    faucetUrl: 'https://thirdweb.com/core-blockchain-testnet'
  },

  // CRONOS TESTNET
  {
    chainName: 'Cronos',
    logoUrl: '/Chains/338.svg',
    isCCIP: true,
    faucetName: 'Cronos',
    faucetUrl: 'https://cronos.org/faucet'
  },

  // GNOSIS CHIADO
  {
    chainName: 'Chiado',
    logoUrl: '/Chains/10200.svg',
    isCCIP: true,
    faucetName: 'Chiado 1',
    faucetUrl: 'https://faucet.chiadochain.net/'
  },
  {
    chainName: 'Chiado',
    logoUrl: '/Chains/10200.svg',
    isCCIP: true,
    faucetName: 'Chiado 2',
    faucetUrl: 'https://stakely.io/faucet/gnosis-chain-xdai'
  },

  // HASHKEY TESTNET
  {
    chainName: 'HashKey',
    logoUrl: '/Chains/133.svg',
    isCCIP: true,
    faucetName: 'HashKey',
    faucetUrl: 'https://faucet.hsk.xyz/faucet'
  },

  // LINEA SEPOLIA
  {
    chainName: 'Linea',
    logoUrl: '/Chains/59141.svg',
    isCCIP: true,
    faucetName: 'Linea 1',
    faucetUrl: 'https://www.infura.io/zh/faucet/linea'
  },
  {
    chainName: 'Linea',
    logoUrl: '/Chains/59141.svg',
    isCCIP: true,
    faucetName: 'Linea 2',
    faucetUrl: 'https://getblock.io/faucet/linea-sepolia/'
  },
  {
    chainName: 'Linea',
    logoUrl: '/Chains/59141.svg',
    isCCIP: true,
    faucetName: 'Linea 3',
    faucetUrl: 'https://www.hackquest.io/faucets/59141'
  },
  {
    chainName: 'Linea',
    logoUrl: '/Chains/59141.svg',
    isCCIP: true,
    faucetName: 'Linea 4',
    faucetUrl: 'https://faucets.chain.link/linea-sepolia'
  },

  // MANTLE SEPOLIA
  {
    chainName: 'Mantle',
    logoUrl: '/Chains/5003.svg',
    isCCIP: true,
    faucetName: 'Mantle 1',
    faucetUrl: 'https://faucet.testnet.mantle.xyz/'
  },
  {
    chainName: 'Mantle',
    logoUrl: '/Chains/5003.svg',
    isCCIP: true,
    faucetName: 'Mantle 2',
    faucetUrl: 'https://faucet.quicknode.com/mantle/sepolia'
  },
  {
    chainName: 'Mantle',
    logoUrl: '/Chains/5003.svg',
    isCCIP: true,
    faucetName: 'Mantle 3',
    faucetUrl: 'https://www.hackquest.io/faucets/5003'
  },

  // MODE TESTNET
  {
    chainName: 'Mode',
    logoUrl: '/Chains/919.svg',
    isCCIP: true,
    faucetName: 'Mode 1',
    faucetUrl: 'https://console.optimism.io/faucet'
  },
  {
    chainName: 'Mode',
    logoUrl: '/Chains/919.svg',
    isCCIP: true,
    faucetName: 'Mode 2',
    faucetUrl: 'https://www.l2faucet.com/mode'
  },
  {
    chainName: 'Mode',
    logoUrl: '/Chains/919.svg',
    isCCIP: true,
    faucetName: 'Mode 3',
    faucetUrl: 'https://faucets.chain.link/mode-sepolia'
  },

  // POLYGON AMOY
  {
    chainName: 'Amoy',
    logoUrl: '/Chains/80002.svg',
    isCCIP: true,
    faucetName: 'Amoy 1',
    faucetUrl: 'https://faucet.polygon.technology/'
  },
  {
    chainName: 'Amoy',
    logoUrl: '/Chains/80002.svg',
    isCCIP: true,
    faucetName: 'Amoy 2',
    faucetUrl: 'https://faucets.chain.link/polygon-amoy'
  },
  {
    chainName: 'Amoy',
    logoUrl: '/Chains/80002.svg',
    isCCIP: true,
    faucetName: 'Amoy 3',
    faucetUrl: 'https://faucet.stakepool.dev.br/amoy'
  },

  // SCROLL SEPOLIA
  {
    chainName: 'Scroll',
    logoUrl: '/Chains/534351.svg',
    isCCIP: true,
    faucetName: 'Scroll 1',
    faucetUrl: 'https://faucet.quicknode.com/scroll'
  },
  {
    chainName: 'Scroll',
    logoUrl: '/Chains/534351.svg',
    isCCIP: true,
    faucetName: 'Scroll 2',
    faucetUrl: 'https://faucets.chain.link/scroll-sepolia-testnet'
  },
  {
    chainName: 'Scroll',
    logoUrl: '/Chains/534351.svg',
    isCCIP: true,
    faucetName: 'Scroll 3',
    faucetUrl: 'https://www.l2faucet.com/scroll'
  },
  {
    chainName: 'Scroll',
    logoUrl: '/Chains/534351.svg',
    isCCIP: true,
    faucetName: 'Scroll 4',
    faucetUrl: 'https://faucet.chainstack.com/scroll-sepolia-testnet-faucet'
  },
  {
    chainName: 'Scroll',
    logoUrl: '/Chains/534351.svg',
    isCCIP: true,
    faucetName: 'Scroll 5',
    faucetUrl: 'https://bwarelabs.com/faucets/scroll-testnet'
  },
  {
    chainName: 'Scroll',
    logoUrl: '/Chains/534351.svg',
    isCCIP: true,
    faucetName: 'Scroll 6',
    faucetUrl: 'https://thirdweb.com/scroll-sepolia-testnet'
  },
  {
    chainName: 'Scroll',
    logoUrl: '/Chains/534351.svg',
    isCCIP: true,
    faucetName: 'Scroll 7',
    faucetUrl: 'https://scroll.faucetme.pro/'
  },

  // SEI TESTNET
  {
    chainName: 'Sei',
    logoUrl: '/Chains/1328.svg',
    isCCIP: true,
    faucetName: 'Sei 1',
    faucetUrl: 'https://sei-faucet.nima.enterprises/'
  },
  {
    chainName: 'Sei',
    logoUrl: '/Chains/1328.svg',
    isCCIP: true,
    faucetName: 'Sei 2',
    faucetUrl: 'https://www.allthatnode.com/faucet/sei.dsrv'
  },

  // SHIBARIUM PUPPYNET
  {
    chainName: 'Puppynet',
    logoUrl: '/Chains/157.svg',
    isCCIP: true,
    faucetName: 'Puppynet',
    faucetUrl: 'https://shibarium.shib.io/faucet'
  },

  // XLAYER SEPOLIA
  {
    chainName: 'XLayer',
    logoUrl: '/Chains/195.svg',
    isCCIP: true,
    faucetName: 'XLayer 1',
    faucetUrl: 'https://www.okx.com/xlayer/faucet'
  },
  {
    chainName: 'XLayer',
    logoUrl: '/Chains/195.svg',
    isCCIP: true,
    faucetName: 'XLayer 2',
    faucetUrl: 'https://www.l2faucet.com/x-layer'
  },

  // ZIRCUIT TESTNET
  {
    chainName: 'Zircuit',
    logoUrl: '/Chains/48899.svg',
    isCCIP: true,
    faucetName: 'Zircuit',
    faucetUrl: 'https://bridge.testnet.zircuit.com/'
  }
];