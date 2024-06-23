const ethers = require("ethers");

const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");

const sendEthByAddress = async (privateKey, address, ethAmount) => {
  try {
    const wallet = new ethers.Wallet(privateKey, provider);

    // Chuyển đổi số lượng ETH từ đơn vị ETH sang wei
    const weiAmount = ethers.utils.parseEther(ethAmount.toString());

    const gasLimit = 21000; // hoặc số gas cần thiết cho giao dịch của bạn

    // Tạo transaction để chuyển ETH từ ví của bạn đến địa chỉ nhận
    const tx = {
      to: address,
      value: weiAmount,
      gasLimit: gasLimit,
    };

    // Gửi giao dịch và chờ cho đến khi nó được xác nhận
    const txResponse = await wallet.sendTransaction(tx);
    await txResponse.wait();

    // Trả về thông tin giao dịch sau khi hoàn thành
    return {
      txHash: txResponse.hash,
      from: wallet.address,
      to: address,
      value: ethAmount,
    };
  } catch (error) {
    console.error("Error sending ETH:", error);
    throw error;
  }
};

module.exports = { sendEthByAddress };
