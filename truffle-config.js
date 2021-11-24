require("babel-register");
require("babel-polyfill");

module.exports = {
  networks: {
    development: {
      host: "192.168.1.185",
      port: 21004,
      network_id: "21004", // Match any network id
    },
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",
  compilers: {
    solc: {
      version: "pragma",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
