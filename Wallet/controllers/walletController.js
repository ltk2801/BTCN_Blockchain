const walletService = require("../services/walletService");
const blockchainService = require("../services/blockchainService");

// Tạo ví
const createWallet = async (req, res) => {
  try {
    const wallet = walletService.createWalletService();
    res.json({ address: wallet.address, privateKey: wallet.privateKey });
  } catch (error) {
    res.status(500).json({ message: "Failed to create wallet" });
  }
};

// Truy cập vào ví
const accessWallet = async (req, res) => {
  const { privateKey } = req.body;

  if (!privateKey) {
    return res.status(400).json({
      error: "Private key is required !",
    });
  }
  try {
    const wallet = await walletService.accessWalletService(privateKey);

    // Get or create genesis block
    const genesisBlock = blockchainService.getOrCreateGenesisBlock(
      wallet.address
    );

    return res.json({
      wallet,
      genesisBlock,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = { createWallet, accessWallet };
