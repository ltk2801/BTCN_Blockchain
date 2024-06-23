const ethers = require("ethers");

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
    let balanceInEth = 0;
    // Tỷ giá ETH/USD hiện tại là 3450
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

const depositToWallet = async (walletAddress, ethAmount) => {
  try {
    // Chuyển đổi số ETH từ đơn vị ETH sang wei
    const ethAmountWei = ethers.utils.parseEther(ethAmount.toString());

    // Gửi ETH tới địa chỉ ví
    const tx = await provider.sendTransaction({
      to: walletAddress,
      value: ethAmountWei.toHexString(),
    });

    // Đợi cho đến khi giao dịch được xác nhận
    await tx.wait();

    // Lấy số dư cập nhật của ví
    const balance = await provider.getBalance(walletAddress);
    const balanceInEth = ethers.utils.formatEther(balance);

    return {
      address: walletAddress,
      balance: {
        eth: balanceInEth,
      },
    };
  } catch (error) {
    console.error("Error depositing ETH to wallet:", error.message);
    throw error;
  }
};

module.exports = {
  createWalletService,
  accessWalletService,
  depositToWallet,
};
