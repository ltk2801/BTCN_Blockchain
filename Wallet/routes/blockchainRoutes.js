const express = require("express");
const {
  getLatestBlocks,
  getBlock,
} = require("../controllers/blockchainController");
const router = express.Router();

router.get("/lastesBlocks", getLatestBlocks);
router.get("/block/:blockHeight", getBlock);

module.exports = router;
