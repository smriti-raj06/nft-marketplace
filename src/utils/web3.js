export function getProvider () {
  if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    if (window.ethereum.isMetaMask) return 'Metamask'
    if (window.ethereum.isImToken) return 'imToken'
  }
  return 'Wallet'
}

export const chains = {
  polygonMumbaiTestnet: {
    name: 'Polygon Testnet Mumbai',
    chain: 'Polygon',
    rpc: [
      'https://matic-mumbai.chainstacklabs.com',
      'https://rpc-mumbai.maticvigil.com',
      'https://matic-testnet-archive-rpc.bwarelabs.com'
    ],
    faucets: [
      'https://faucet.polygon.technology/'
    ],
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18
    },
    infoURL: 'https://polygon.technology/',
    shortName: 'maticmum',
    chainId: 80001,
    networkId: 80001,
    explorers: [{
      name: 'polygonscan',
      url: 'https://mumbai.polygonscan.com',
      standard: 'EIP3091'
    }]
  },

  polygonAmoyTestnet: {
    name: 'Polygon Testnet Amoy',
    chain: 'Polygon',
    rpc: [
      'https://rpc-amoy.polygon.technology'
    ],
    faucets: [
      'https://faucet.polygon.technology/'
    ],
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18
    },
    infoURL: 'https://polygon.technology/',
    shortName: 'amoy',
    chainId: 80002,
    networkId: 80002,
    explorers: [{
      name: 'oklink',
      url: 'https://www.oklink.com/amoy',
      standard: 'EIP3091'
    }]
  },
  sepoliaTestnet: {
    name: 'Ethereum Sepolia Testnet',
    chain: 'Ethereum',
    rpc: [
      'https://rpc.sepolia.org',          // public RPC
      // 'https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID', // Infura RPC (replace YOUR_INFURA_PROJECT_ID)
      'https://sepolia.alchemyapi.io/v2/ykcRkRHsY-9uURFXdon0o'    // Alchemy RPC (replace YOUR_ALCHEMY_KEY)
    ],
    faucets: [
      'https://sepoliafaucet.com/'        // Sepolia faucet
    ],
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18
    },
    infoURL: 'https://ethereum.org/en/developers/docs/networks/',
    shortName: 'sepolia',
    chainId: 11155111,
    networkId: 11155111,
    explorers: [{
      name: 'etherscan',
      url: 'https://sepolia.etherscan.io',
      standard: 'EIP3091'
    }]
  }
}
