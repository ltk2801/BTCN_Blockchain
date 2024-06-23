const { ethers } = require("ethers");

class Block {
  constructor(index, previousHash, timestamp, data, transactions, reward) {
    this.index = index;
    this.previousHash = previousHash || "";
    this.timestamp = timestamp;
    this.data = data || "";
    this.transactions = transactions || [];
    this.reward = reward || 0;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return ethers.utils.keccak256(
      ethers.utils.defaultAbiCoder.encode(
        ["uint256", "string", "uint256", "string", "string", "uint256"],
        [
          this.index,
          this.previousHash,
          this.timestamp,
          this.data,
          JSON.stringify(this.transactions),
          this.reward,
        ]
      )
    );
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    return new Block(0, "", Date.now(), "Genesis Block", [], 0);
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }

  createTransaction(transaction) {
    this.getLatestBlock().transactions.push(transaction);
  }

  getChain() {
    return this.chain;
  }
}

module.exports = { Blockchain, Block };
