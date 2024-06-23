const walletService = require("../services/walletService");

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

    return res.json({
      wallet,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

// deposit

const depositWallet = async (req, res) => {
  const { walletAddress, usdAmount } = req.body;
  try {
    // Tính toán số ETH dựa trên tỷ giá ETH/USD
    const ethAmount = usdAmount / 3450;

    // Gửi yêu cầu gửi ETH tới địa chỉ ví
    const result = await walletService.depositToWallet(
      walletAddress,
      ethAmount
    );
    res.status(200).json({ message: "Deposit successful", wallet: result });
    // console.log(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = { createWallet, accessWallet, depositWallet };
