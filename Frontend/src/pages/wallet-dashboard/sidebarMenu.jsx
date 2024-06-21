import React from "react";
import { Copy } from "lucide-react";

const SidebarMenu = () => {
  return (
    <div>
      <nav className="h-[100vh] top-0 fixed translate-x-0 w-[340px] max-h-[100%] bg-base-sidebar border border-base-sidebar z-[6] flex flex-col left-0 max-w-[100%] overflow-hidden pointer-events-auto ">
        {/* Card */}
        <div className="p-5 pb-8">
          <div className="mt-2 mb-4 flex items-center justify-between ">
            <a href="/">
              <img
                src="https://www.myetherwallet.com/img/logo-mew.f6482e98.svg"
                alt="img"
                className="w-[140px]"
              />
            </a>
          </div>
          <div className="bg-wallet-sidebar rounded-2xl relative w-full">
            <div className="rounded-2xl overflow-hidden absolute top-0 left-0 z-0 h-full opacity-100 w-full">
              <img
                src="https://mewcard.mewapi.io/?address=0x7323d6cd345283830d4a622d7d1e2c1f8bebf30e"
                alt="card"
                className="w-full h-full"
              />
            </div>
            <div className="pl-8 pr-5 py-4 text-shadow rounded-2xl w-full relative min-h-[172px] top-0 left-0 z-1 flex flex-col justify-between">
              {/* address */}
              <div className="flex justify-between items-start">
                <p className="text-white text-base font-medium">bababababab</p>
              </div>
              {/* Balance USD */}
              <div className="ml-[-16px] mt-5 mb-4 text-shadow text-white text-3xl font-bold">
                0,00&nbsp;$
              </div>
              {/* Balance ETH & copied */}
              <div className="flex justify-between items-center text-white">
                <div className="justify-start">
                  <p className="font-medium">0 ETH</p>
                </div>
                <div className="justify-end">
                  <Copy className="w-7 h-7 cursor-pointer hoverOpacity hover:opacity-70" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Etherscan */}

        <div className="py-3 px-4 bg-white bg-opacity-10 text-shadow ">
          <div className="flex items-center ">
            <div className="basis-1/4 flex justify-center">
              <img
                src="https://www.myetherwallet.com/img/icon-dashboard-enable.bef21fb5.svg"
                alt="icon"
                className="w-7 h-7"
              />
            </div>
            <div className="basis-3/4">
              <p className="text-white font-medium text-base ">Etherscan</p>
            </div>
          </div>
        </div>
        <hr className="my-3 mx-4 border-wallet-sidebar border" />
        <div className="py-3 px-4 text-shadow hover:bg-white hover:bg-opacity-10 cursor-pointer hover:shadow-sm">
          <div className="flex items-center ">
            <div className="basis-1/4 flex justify-center">
              <img
                src="https://www.myetherwallet.com/img/icon-send.91b21cf3.svg"
                alt="icon"
                className="w-7 h-7"
              />
            </div>
            <div className="basis-3/4">
              <p className="text-white-95 font-light text-base">Send</p>
            </div>
          </div>
        </div>
        <div className="py-3 px-4 text-shadow hover:bg-white hover:bg-opacity-10 cursor-pointer hover:shadow-sm  ">
          <div className="flex items-center ">
            <div className="basis-1/4 flex justify-center">
              <img
                src="https://www.myetherwallet.com/img/icon-arrow-down-right.c933da9c.svg"
                alt="icon"
                className="w-7 h-7"
              />
            </div>
            <div className="basis-3/4">
              <p className="text-white-95 font-light text-base">Receive</p>
            </div>
          </div>
        </div>
        <div className="py-3 px-4 text-shadow hover:bg-white hover:bg-opacity-10 cursor-pointer hover:shadow-sm ">
          <div className="flex items-center ">
            <div className="basis-1/4 flex justify-center">
              <img
                src="https://www.myetherwallet.com/img/icon-credit-card.170d3a45.svg"
                alt="icon"
                className="w-7 h-7"
              />
            </div>
            <div className="basis-3/4">
              <p className="text-white-95 font-light text-base">Buy / Sell</p>
            </div>
          </div>
        </div>
        <div className="py-3 px-4 text-shadow hover:bg-white hover:bg-opacity-10 cursor-pointer hover:shadow-sm ">
          <div className="flex items-center ">
            <div className="basis-1/4 flex justify-center">
              <img
                src="https://www.myetherwallet.com/img/icon-stake.28dfcc62.svg"
                alt="icon"
                className="w-7 h-7"
              />
            </div>
            <div className="basis-3/4">
              <p className="text-white-95 font-light text-base">Mine</p>
            </div>
          </div>
        </div>
        <hr className="my-8 mx-4 border-wallet-sidebar border" />
        <div className="py-3 px-4 text-shadow hover:bg-white hover:bg-opacity-10 cursor-pointer hover:shadow-sm ">
          <div className="flex items-center ">
            <div className="basis-1/4 flex justify-center">
              <img
                src="https://www.myetherwallet.com/img/icon-logout-enable.f400612b.svg"
                alt="icon"
                className="w-7 h-7"
              />
            </div>
            <div className="basis-3/4">
              <p className="text-white-95 font-light text-base">Logout</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SidebarMenu;
