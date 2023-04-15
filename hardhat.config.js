require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config({path:__dirname+'/.env'});
const { API_KEY, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${API_KEY}`,
      accounts: [PRIVATE_KEY],
    },
  },
};