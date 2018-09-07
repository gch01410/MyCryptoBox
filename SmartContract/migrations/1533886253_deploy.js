const myCrpytoBox = artifacts.require('./myCryptoBox');

module.exports = function(deployer) {
  // Use deployer to state migration tasks.
    deployer.deploy(myCrpytoBox);
};
