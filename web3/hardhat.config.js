// require("@matterlabs/hardhat-zksync-solc");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   zksolc: {
//     version: "1.3.9",
//     compilerSource: "binary",
//     settings: {
//       optimizer: {
//         enabled: true,
//       },
//     },
//   },
//   networks: {
//     zksync_testnet: {
//       url: "https://zksync2-testnet.zksync.dev",
//       ethNetwork: "goerli",
//       chainId: 280,
//       zksync: true,
//     },
//     zksync_mainnet: {
//       url: "https://zksync2-mainnet.zksync.io/",
//       ethNetwork: "mainnet",
//       chainId: 324,
//       zksync: true,
//     },
//   },
//   paths: {
//     artifacts: "./artifacts-zk",
//     cache: "./cache-zk",
//     sources: "./contracts",
//     tests: "./test",
//   },
//   solidity: {
//     version: "0.8.17",
//     defaultNetwork: "sepolia",
//     networks:{
//       hardhat: {},
//       sepolia: {
//         url: "https://base-sepolia-testnet.rpc.thirdweb.com/d391b93f5f62d9c15f67142e43841acc",
//         accounts: [`0x${process.env.PRIVATE_KEY}`],
//       }
//     },
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   },
// };

/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  defaultNetwork: "sepolia",
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://sepolia.rpc.thirdweb.com",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};