let genesisBlock = null; // Khởi tạo biến lưu trữ Genesis block

const createGenesisBlock = (walletAddress) => {
  const timestamp = new Date().toISOString();
  return {
    blockHeight: 1,
    status: "finalized",
    timestamp: timestamp,
    transactions: [],
    blockReward: 0.1,
    miner: walletAddress,
  };
};

const getOrCreateGenesisBlock = (walletAddress) => {
  if (!genesisBlock) {
    genesisBlock = createGenesisBlock(walletAddress);
  }
  return genesisBlock;
};

module.exports = {
  getOrCreateGenesisBlock,
};
