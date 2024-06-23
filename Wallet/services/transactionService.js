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

const getLatestTransactionsService = async () => {
  try {
    // Lấy số block mới nhất
    const latestBlockNumber = await provider.getBlockNumber();
    let transactions = [];

    // Lặp qua từng block để lấy các giao dịch
    for (let i = 0; i <= latestBlockNumber; i++) {
      const block = await provider.getBlockWithTransactions(i);
      transactions = transactions.concat(
        block.transactions.map((tx) => tx.hash)
      );
    }

    // Xóa các giao dịch trùng lặp (nếu có)
    transactions = Array.from(new Set(transactions));

    // Lấy chi tiết của từng giao dịch
    const detailedTransactions = await Promise.all(
      transactions.map(async (txHash) => {
        try {
          const tx = await provider.getTransaction(txHash);
          const block = await provider.getBlock(tx.blockNumber);

          if (!tx || !block) {
            return null;
          }

          return {
            blockNumber: tx.blockNumber,
            hash: tx.hash,
            from: tx.from,
            to: tx.to,
            value: ethers.utils.formatEther(tx.value), // Chuyển đổi từ wei sang ETH
            timestamp: block.timestamp,
            gasPrice: ethers.utils.formatUnits(tx.gasPrice, "ether"), // Chuyển đổi gas price từ wei sang eth
            gasLimit: tx.gasLimit.toString(),
          };
        } catch (error) {
          console.error("Error fetching transaction:", error);
          return null;
        }
      })
    );

    // Lọc bỏ các giao dịch null (có thể do lỗi khi lấy chi tiết giao dịch)
    return detailedTransactions.filter((tx) => tx !== null);
  } catch (error) {
    console.error("Error getting all transactions:", error);
    throw error;
  }
};

const getTransactionService = async (txHash) => {
  try {
    // Lấy thông tin chi tiết của giao dịch từ hash
    const tx = await provider.getTransaction(txHash);

    // Nếu không tìm thấy giao dịch, trả về null
    if (!tx) {
      console.log(`Transaction with hash ${txHash} not found.`);
      return null;
    }

    const block = await provider.getBlock(tx.blockHash);

    // Lấy thông tin receipt của giao dịch để kiểm tra trạng thái
    const txReceipt = await provider.getTransactionReceipt(txHash);

    // Format dữ liệu
    const transactionDetails = {
      hash: tx.hash,
      blockNumber: tx.blockNumber,
      from: tx.from,
      to: tx.to,
      value: ethers.utils.formatEther(tx.value), // Chuyển đổi từ wei sang ETH
      gasPrice: ethers.utils.formatUnits(tx.gasPrice, "ether"),
      gasLimit: tx.gasLimit.toString(),
      nonce: tx.nonce,
      data: tx.data,
      timestamp: block.timestamp,
      chainId: tx.chainId,
      status: txReceipt.status === 1 ? "Success" : "Failure", // Kiểm tra trạng thái của giao dịch
    };

    return transactionDetails;
  } catch (error) {
    console.error(`Error fetching transaction ${txHash}:`, error);
    throw error;
  }
};

module.exports = {
  sendEthByAddress,
  getLatestTransactionsService,
  getTransactionService,
};
