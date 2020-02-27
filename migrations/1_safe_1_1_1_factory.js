const SafeFactory = artifacts.require("Safe_1_1_1_Factory");

module.exports = function(deployer) {
  deployer.deploy(SafeFactory);
};
