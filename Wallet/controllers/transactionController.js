const transactionService = require("../services/transactionService");

const sendEth = async (req, res) => {
  const { privateKey, address, ethAmount } = req.body;
  try {
    // Cập nhật số dư của ví từ số tiền USD
    const sendEth = await transactionService.sendEthByAddress(
      privateKey,
      address,
      ethAmount
    );
    res.json(sendEth);
  } catch (error) {
    console.error("Error send ETH ", error);
    res.status(500).json({ error: "Error send ETH" });
  }
};

module.exports = { sendEth };
