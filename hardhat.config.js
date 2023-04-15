require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config({path:__dirname+'/.env'});
const { API_KEY, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: `https://app.zeeve.io/shared-api/poly/${API_KEY}`,
      accounts: [PRIVATE_KEY],
    },
  },
};