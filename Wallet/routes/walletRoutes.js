const express = require("express");
const {
  createWallet,
  accessWallet,
} = require("../controllers/walletController");
const router = express.Router();

router.post("/create", createWallet);
router.post("/access", accessWallet);

module.exports = router;
