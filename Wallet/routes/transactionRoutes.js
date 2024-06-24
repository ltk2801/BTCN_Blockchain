const express = require("express");
const {
  sendEth,
  getLatestTransactions,
  getTransaction,
  getTransactionsAddressSend,
  getTransactionsAddressReceive,
} = require("../controllers/transactionController");
const router = express.Router();

router.post("/sendEth", sendEth);
router.get("/latesTransactions", getLatestTransactions);
router.get("/getTran/:hashTransaction", getTransaction);
router.get("/getTransactionsSend/:address", getTransactionsAddressSend);
router.get("/getTransactionsReceive/:address", getTransactionsAddressReceive);

module.exports = router;
