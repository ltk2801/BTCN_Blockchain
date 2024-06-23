const express = require("express");
const {
  createWallet,
  accessWallet,
  depositWallet,
  getBalance,
} = require("../controllers/walletController");
const router = express.Router();

router.post("/create", createWallet);
router.post("/access", accessWallet);
router.post("/deposit", depositWallet);
router.get("/balance/:address", getBalance);

module.exports = router;
