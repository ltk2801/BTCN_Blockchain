const ethers = require("ethers");

const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");

const createWalletService = () => {
  const wallet = ethers.Wallet.createRandom();
  return {
    address: wallet.address,
    privateKey: wallet.privateKey,
  };
};

const accessWalletService = async (privateKey) => {
  try {
    const wallet = new ethers.Wallet(privateKey, provider);

    const balance = await wallet.getBalance();
    const balanceInEth = ethers.utils.formatEther(balance);
    // Tỷ giá ETH/USD hiện tại là 3450
    const ethToUsdRate = 3450;
    const balanceInUsd = Number(balanceInEth * ethToUsdRate);

    return {
      address: wallet.address,
      privateKey: wallet.privateKey,
      balance: {
        eth: balanceInEth,
        usd: balanceInUsd,
      },
    };
  } catch (error) {
    console.error(error);
    throw new Error("Invalid private key");
  }
};

module.exports = {
  createWalletService,
  accessWalletService,
};
