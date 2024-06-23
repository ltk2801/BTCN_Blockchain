import React from "react";

import { useAuth } from "@/contexts/authContext";

const Network = () => {
  const { latestBlocks, balanceWallet } = useAuth();

  const toFixed4 = (eth) => {
    return Number(eth).toFixed(4);
  };
  return (
    <div className="basis-4/12 p-4">
      <h2 className="text-3xl font-bold text-slate-700 tracking-wide border-l-[6px] border-blue-trans pl-2 mb-6">
        Network & Tokens
      </h2>
      <div className=" bg-white border border-slate-300 rounded-md shadow-sm pb-8">
        {/* Network */}
        <div className="flex items-center">
          <div className="px-6 py-2 mt-4 w-full">
            <h3 className="text-2xl font-medium text-slate-700 tracking-wide mb-4 ">
              Network
            </h3>
            <div className="bg-gray-400 bg-opacity-20 px-4 py-3 rounded-xl flex justify-between items-center text-slate-700 shadow hoverOpacity hover:bg-opacity-45 cursor-pointer">
              <div className="flex flex-col justify-center gap-3">
                <h2 className="text-base font-medium">Ethereum</h2>
                <p className="text-base font-medium text-slate-400 ">
                  Last Block: {latestBlocks[0]?.number}
                </p>
              </div>
              <div className="flex items-center justify-center bg-white p-1 rounded-xl">
                <img
                  src="https://www.myetherwallet.com/img/eth.a30b3d6f.svg"
                  alt="images"
                  className="w-10 h-10 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white border border-slate-300 rounded-md shadow-sm pb-8 mt-10">
        {/* Network */}
        <div className="flex items-center">
          <div className="px-6 py-2 mt-4 w-full">
            <h3 className="text-2xl font-medium text-slate-700 tracking-wide mb-4 ">
              My Tokens
            </h3>
            <div className="flex justify-between items-center">
              <h2 className="text-slate-700 font-medium text-base">
                {toFixed4(balanceWallet?.eth)} tokens
              </h2>
              <h2 className="text-blue-trans font-bold text-base cursor-pointer">
                Buy Crypto
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
