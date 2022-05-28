var MultiSig = artifacts.require("MultiSignatureWallet")
var SimpleStorage = artifacts.require("SimpleStorage")

module.exports = function(deployer, network, accounts) {

    const owners = [accounts[0], accounts[1], accounts[2], accounts[3], accounts[4]]

    deployer.deploy(SimpleStorage);
    deployer.deploy(MultiSig, owners, 3);

    
};
