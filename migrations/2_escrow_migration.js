const ESCROW = artifacts.require('ESCROW');

module.exports = function (deployer) {
    deployer.deploy(ESCROW);
};