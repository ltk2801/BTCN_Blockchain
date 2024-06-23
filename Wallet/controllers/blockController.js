// controllers/blockchainController.js
const { Blockchain } = require("../models/blockchain");

const blockchain = new Blockchain();

const createTransaction = (req, res) => {
  const { fromAddress, toAddress, amount } = req.body;
  const transaction = { from: fromAddress, to: toAddress, amount };
  blockchain.createTransaction(transaction);
  res.json(transaction);
};

const getBlockchain = (req, res) => {
  const chain = blockchain.getChain();
  res.json(chain);
};

module.exports = {
  createTransaction,
  getBlockchain,
};
