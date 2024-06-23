const express = require("express");
const {
  createWallet,
  accessWallet,
  depositWallet,
} = require("../controllers/walletController");
const router = express.Router();

router.post("/create", createWallet);
router.post("/access", accessWallet);
router.post("/depositWallet", depositWallet);

module.exports = router;
