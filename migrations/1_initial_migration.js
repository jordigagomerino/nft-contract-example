const Migrations = artifacts.require("NFT");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
