const blockchainService = require("../services/blockchainService");

// Lấy danh sách blocks
const getLatestBlocks = async (req, res) => {
  try {
    const latestBlocks = await blockchainService.getLatestBlocksService();
    res.json({ latestBlocks: latestBlocks });
  } catch (error) {
    res.status(500).json({ message: "Failed to get latest blocks" });
  }
};

const getBlock = async (req, res) => {
  const blockHeight = req.params.blockHeight;
  try {
    const block = await blockchainService.getBlockService(blockHeight);
    res.json({ block: block });
  } catch (error) {
    res.status(500).json({ message: "Failed to get block" });
  }
};

module.exports = { getLatestBlocks, getBlock };
