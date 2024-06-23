const crypto = require("crypto");
const Block = require("../models/block");

let geneisBlock = null;

// Hàm tính toán hash cho một khối
const calculateHash = (
  index,
  previousHash,
  timestamp,
  data,
  transactions,
  reward
) => {
  const hash = crypto.createHash("sha256");
  hash.update(
    index +
      previousHash +
      timestamp +
      data +
      JSON.stringify(transactions) +
      reward.toString()
  );
  return hash.digest("hex");
};

const createGenesisBlock = () => {
  const index = 0;
  const previousHash = "";
  const timestamp = Date.now();
  const data = "Genesis Block";
  const transactions = []; // Không có giao dịch ban đầu
  const reward = 0.1;
  const hash = calculateHash(
    index,
    previousHash,
    timestamp,
    data,
    transactions,
    reward
  );

  return new Block(
    index,
    previousHash,
    timestamp,
    data,
    hash,
    transactions,
    reward
  );
};

const getGenesisBlock = () => {
  if (!geneisBlock) {
    geneisBlock = createGenesisBlock();
  }
  return geneisBlock;
};

module.exports = {
  getGenesisBlock,
};
