import React from "react";
import LatestBlocks from "./latestBlocks";
import LatestTransactions from "./latestTransactions";
import SidebarMenu from "./sidebarMenu";

const WalletDashboard = () => {
  return (
    <div className="flex flex-auto min-h-[100vh] max-w-full relative">
      <div className="bg-wallet-base h-full w-full ">
        <SidebarMenu />
        <div className="ml-[340px] px-5 py-4 min-h-[100vh]">
          <div className="flex  w-full min-w-full">
            <LatestBlocks />
            <LatestTransactions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletDashboard;
