const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const walletRoutes = require("./routes/walletRoutes");

dotenv.config();

const app = express();
app.use(bodyParser.json());
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  allowedHeaders: ["Authorization"], // Cho phép header Authorization
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(express.json());

app.use("/api/wallet", walletRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
