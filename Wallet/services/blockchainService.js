const ethers = require("ethers");

const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");

const getLatestBlocksService = async () => {
  try {
    // Lấy số block mới nhất
    const latestBlockNumber = await provider.getBlockNumber();
    // Mảng để lưu trữ thông tin của các block
    let latestBlocks = [];

    // Lấy thông tin của các block từ 1 đến latestBlockNumber
    const promises = [];
    for (let i = 0; i <= latestBlockNumber; i++) {
      promises.push(provider.getBlockWithTransactions(i));
    }

    // Chờ cho tất cả các promises hoàn thành
    const blocks = await Promise.all(promises);

    latestBlocks = blocks.filter((block) => block !== null); // Loại bỏ những block null (có thể do không tồn tại)

    return latestBlocks;
  } catch (error) {
    console.error("Error getting latest blocks:", error);
    throw error;
  }
};

const getBlockService = async (blockHeight) => {
  try {
    const block = await provider.getBlockWithTransactions(Number(blockHeight));
    return block;
  } catch (error) {
    console.error("Error getting block:", error);
    throw error;
  }
};

module.exports = {
  getLatestBlocksService,
  getBlockService,
};
