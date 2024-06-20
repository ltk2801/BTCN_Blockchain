const { ethers } = require("ethers");
const wallets = [];

const createWallet = async (req, res) => {
  try {
    const wallet = ethers.Wallet.createRandom();

    res.json({ address: wallet.address, privateKey: wallet.privateKey });
  } catch (error) {
    res.status(500).json({ message: "Failed to create wallet" });
  }
};

module.exports = { createWallet };
