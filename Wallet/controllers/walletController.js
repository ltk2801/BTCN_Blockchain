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

const getBalance = async (req, res) => {
  const address = req.params.address;

  try {
    const getBalance = await walletService.getBalanceService(address);
    res.json(getBalance);
  } catch (error) {
    console.error("Error get balance wallet by address:", error);
    res.status(500).json({ error: "Error get balance wallet by address" });
  }
};

// deposit
const depositWallet = async (req, res) => {
  const { address, usdAmount } = req.body;
  const ethToUsdRate = 3450; // Tỉ giá ETH/USD cứng ở 3450
  try {
    // Cập nhật số dư của ví từ số tiền USD
    const updatedWallet = await walletService.updateWalletBalanceFromUsd(
      address,
      usdAmount,
      ethToUsdRate
    );
    res.json(updatedWallet);
  } catch (error) {
    console.error("Error updating wallet balance from USD:", error);
    res.status(500).json({ error: "Error updating wallet balance from USD" });
  }
};

module.exports = { createWallet, accessWallet, depositWallet, getBalance };
