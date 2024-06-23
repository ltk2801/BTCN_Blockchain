import React from "react";
import LatestBlocks from "./latestBlocks";
import LatestTransactions from "./latestTransactions";
import SidebarMenu from "./sidebarMenu";
import { useEffect } from "react";
import Axios from "@/lib/APIs/Axios";
import { useAuth } from "@/contexts/authContext";

const WalletDashboard = () => {
  const { setBalanceWallet } = useAuth();

  const walletFromStorage = JSON.parse(localStorage.getItem("currentWallet"));

  const fetchBalance = async () => {
    try {
      const getBalance = await Axios.get(
        `/api/wallet/balance/${walletFromStorage.address}`
      );

      setBalanceWallet(getBalance.data.balance);
    } catch (error) {
      console.error("Error fetching balance:", error);
      // Xử lý lỗi nếu cần thiết
    }
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  return (
    <div className="flex flex-auto min-h-[100vh] max-w-full relative">
      <div className="bg-wallet-base h-full w-full ">
        <SidebarMenu />
        <div className="ml-[340px] px-10 py-4 min-h-[93vh]">
          <div className="flex  w-full min-w-full">
            <LatestBlocks />
            <LatestTransactions />
          </div>
        </div>
        <footer className="ml-[340px] px-14 py-5  bg-white flex items-center justify-between">
          <p className="text-slate-700 font-medium">
            © 2024 MyEtherWallet. All rights reserved. Pricing taken from
            <span className="text-blue-trans font-medium ml-1 cursor-pointer">
              CoinGecko
            </span>
          </p>
          <p className="text-slate-700 font-medium">
            <span className="cursor-pointer mr-2">Help Center</span>|
            <span className="cursor-pointer ml-2">Bug Bounty</span>{" "}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default WalletDashboard;
