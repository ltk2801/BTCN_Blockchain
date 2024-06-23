const express = require("express");
const {
  sendEth,
  getLatestTransactions,
  getTransaction,
} = require("../controllers/transactionController");
const router = express.Router();

router.post("/sendEth", sendEth);
router.get("/latesTransactions", getLatestTransactions);
router.get("/getTran/:hashTransaction", getTransaction);

module.exports = router;
