const express = require("express");
const { sendEth } = require("../controllers/transactionController");
const router = express.Router();

router.post("/sendEth", sendEth);

module.exports = router;
