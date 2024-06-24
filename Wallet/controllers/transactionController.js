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

const getLatestTransactions = async (req, res) => {
  try {
    const latestTransactions =
      await transactionService.getLatestTransactionsService();
    res.json({ latestTransactions: latestTransactions });
  } catch (error) {
    res.status(500).json({ message: "Failed to get latest blocks" });
  }
};

const getTransaction = async (req, res) => {
  const hashTransaction = req.params.hashTransaction;
  try {
    const transaction = await transactionService.getTransactionService(
      hashTransaction
    );
    res.json({ transaction: transaction });
  } catch (error) {
    res.status(500).json({ message: "Failed to get transaction" });
  }
};

const getTransactionsAddressSend = async (req, res) => {
  const address = req.params.address;
  try {
    const transactions =
      await transactionService.getTransactionsAddressSendService(address);
    res.json({ transactions: transactions });
  } catch (error) {
    res.status(500).json({ message: "Failed to get transactions" });
  }
};

const getTransactionsAddressReceive = async (req, res) => {
  const address = req.params.address;
  try {
    const transactions =
      await transactionService.getTransactionsAddressReceiveService(address);
    res.json({ transactions: transactions });
  } catch (error) {
    res.status(500).json({ message: "Failed to get transactions" });
  }
};

module.exports = {
  sendEth,
  getLatestTransactions,
  getTransaction,
  getTransactionsAddressSend,
  getTransactionsAddressReceive,
};
