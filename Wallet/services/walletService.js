const { ethers } = require("ethers");

const createWalletService = () => {
  const wallet = ethers.Wallet.createRandom();
  return {
    address: wallet.address,
    privateKey: wallet.privateKey,
  };
};

const accessWalletService = async (privateKey) => {
  try {
    const wallet = new ethers.Wallet(privateKey);

    const provider = ethers.getDefaultProvider("mainnet");

    const balance = await provider.getBalance(wallet.address);
    let balanceInEth = 0;
    if (balance) {
      balanceInEth = ethers.utils.formatEther(balance);
    }
    // Tỷ giá ETH/USD đang là 3450,
    const ethToUsdRate = 3450;
    const balanceInUsd = balanceInEth * ethToUsdRate;

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
