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
      privateKey: wallet.privateKey,
      address: wallet.address,
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

const getBalanceService = async (address) => {
  try {
    const balance = await provider.getBalance(address);

    // chuyển đổi số dư từ wei sang ether và định dạng lại
    const balanceInEth = ethers.utils.formatEther(balance);
    // Tỷ giá ETH/USD hiện tại là 3450
    const ethToUsdRate = 3450;
    const balanceInUsd = Number(balanceInEth * ethToUsdRate);

    return {
      balance: {
        eth: balanceInEth,
        usd: balanceInUsd,
      },
    };
  } catch (error) {
    console.error("Error get balance from ADDRESS", error);
    throw new Error("Error get balance from ADDRESS");
  }
};

// Hàm cập nhật số dư của ví từ số tiền USD và tỷ giá ETH/USD
const updateWalletBalanceFromUsd = async (address, usdAmount, ethToUsdRate) => {
  try {
    const wallet = new ethers.Wallet(
      "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
      provider
    );

    const ethAmount = usdAmount / ethToUsdRate;
    // // Chuyển đổi số lượng ETH từ đơn vị ETH sang wei
    const weiAmount = ethers.utils.parseEther(ethAmount.toString());

    // // Tạo transaction để chuyển ETH từ ví của bạn đến địa chỉ nhận
    const tx = {
      to: address,
      value: weiAmount,
    };
    // // Gửi giao dịch và chờ cho đến khi nó được xác nhận
    const txResponse = await wallet.sendTransaction(tx);
    await txResponse.wait();

    // // Trả về thông tin giao dịch sau khi hoàn thành
    return {
      txHash: txResponse.hash,
      from: wallet.address,
      to: address,
      value: ethAmount,
    };
  } catch (error) {
    console.error("Error updating wallet balance from USD:", error);
    throw new Error("Error updating wallet balance from USD");
  }
};
module.exports = {
  createWalletService,
  accessWalletService,
  updateWalletBalanceFromUsd,
  getBalanceService,
};
