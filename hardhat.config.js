const path = require('path')
require('@nomiclabs/hardhat-waffle')
require('dotenv').config({ path: path.join(__dirname, '/.env.local') })
require('hardhat-gas-reporter')

const { ALCHEMY_KEY, ACCOUNT_PRIVATE_KEY, ACCOUNT2_PRIVATE_KEY, INFURA_ID } = process.env;


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337
    },
  //   sepolia: {
  //      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`,
  //     accounts: [process.env.ACCOUNT_PRIVATE_KEY, process.env.ACCOUNT2_PRIVATE_KEY],
  // //  accounts :['512a444ec05506c06fdfbc66bbe7cc8f263ed270b34564c613770266726f9832','bd449c49a0f0e788520663a04
  // // 3a989b64a2c12f7fc549c4b4d1040f67d50b9a5'],
  //     chainId: 11155111,
  //     gas: 5500000,
  //     gasPrice: 7000000000
  //   },
  amoy: {
  url: `https://polygon-amoy.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`,
  accounts: [process.env.ACCOUNT_PRIVATE_KEY, process.env.ACCOUNT2_PRIVATE_KEY],
  chainId: 80002,
  gas: 5500000,        // optional, you can keep or remove
  gasPrice: 7000000000 // 7 gwei, or comment out to let Alchemy auto-set
},
    
    // mainnet: {
    //   url: `https://mainnet.infura.io/v3/${process.env.INFURA_ID}`,
    //   accounts: [process.env.ACCOUNT_PRIVATE_KEY, process.env.ACCOUNT2_PRIVATE_KEY]
    // }
  },
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
