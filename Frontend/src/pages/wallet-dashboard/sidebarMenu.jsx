import React, { useState } from "react";
import { Copy } from "lucide-react";
import BuySellModal from "./modal/buy-sell-modal";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/authContext";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "react-toastify";

const SidebarMenu = () => {
  const [openModalBuySell, setOpenModalBuySell] = useState(false);
  const { logout, currentWallet, balanceWallet } = useAuth();

  const navigate = useNavigate();

  const location = useLocation();

  // Kiểm tra nếu location.pathname chứa '/wallet/dashboard' thì activeClass = 'active'
  const dashboardActive = location.pathname.includes("/wallet/dashboard")
    ? true
    : false;
  // Kiểm tra nếu location.pathname chứa '/wallet/send' thì activeClass = 'active'
  const sendActive = location.pathname.includes("/wallet/send") ? true : false;

  // Kiểm tra nếu location.pathname chứa '/wallet/stake' thì activeClass = 'active'
  const stakeActive = location.pathname.includes("/wallet/stake")
    ? true
    : false;

  // Kiểm tra nếu location.pathname chứa '/wallet/history' thì activeClass = 'active'
  const historyActive = location.pathname.includes("/wallet/history")
    ? true
    : false;

  const handleOpenModalBuySell = () => {
    setOpenModalBuySell(true);
  };

  // Function to mask the middle part of the address
  const maskAddress = (address) => {
    if (!address) return "";

    const visibleChars = 10; // Number of characters visible at start and end
    const start = address.slice(0, visibleChars);
    const end = address.slice(-visibleChars);
    const maskedMiddle = "...";

    return `${start}${maskedMiddle}${end}`;
  };

  const toFixed2 = (usd) => {
    return Number(usd).toFixed(2);
  };
  const toFixed4 = (eth) => {
    return Number(eth).toFixed(4);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentWallet.address);
      toast.success("Private key copied to clipboard!");
    } catch (error) {
      toast.error("Failed to copy private key to clipboard.");
    }
  };

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
                <p className="text-white text-base font-medium">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        {" "}
                        {maskAddress(currentWallet?.address)}
                      </TooltipTrigger>
                      <TooltipContent className="bg-slate-700 text-white items-center">
                        <span>{currentWallet?.address}</span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </p>
              </div>
              {/* Balance USD */}
              <div className="ml-[-16px] mt-5 mb-4 text-shadow text-white text-3xl font-bold">
                {toFixed2(balanceWallet?.usd)}&nbsp;$
              </div>
              {/* Balance ETH & copied */}
              <div className="flex justify-between items-center text-white">
                <div className="justify-start">
                  <p className="font-medium">
                    {toFixed4(balanceWallet?.eth)} ETH
                  </p>
                </div>
                <div className="justify-end">
                  <Copy
                    className="w-7 h-7 cursor-pointer hoverOpacity hover:opacity-70"
                    onClick={copyToClipboard}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Etherscan */}

        <div
          className={`py-3 px-4 text-shadow cursor-pointer ${
            dashboardActive
              ? "bg-white bg-opacity-10  "
              : "hover:bg-white hover:bg-opacity-10 hover:shadow-sm "
          }  `}
          onClick={() => navigate("/wallet/dashboard")}
        >
          <div className="flex items-center ">
            <div className="basis-1/4 flex justify-center">
              <img
                src="https://www.myetherwallet.com/img/icon-dashboard-enable.bef21fb5.svg"
                alt="icon"
                className="w-7 h-7"
              />
            </div>
            <div className="basis-3/4">
              <p
                className={`${
                  dashboardActive
                    ? " text-white font-medium text-base"
                    : "text-white-95 font-light text-base"
                }`}
              >
                Etherscan
              </p>
            </div>
          </div>
        </div>
        <hr className="my-3 mx-4 border-wallet-sidebar border" />
        <div
          className={`py-3 px-4 text-shadow cursor-pointer ${
            sendActive
              ? "bg-white bg-opacity-10 "
              : "hover:bg-white hover:bg-opacity-10 hover:shadow-sm "
          }  `}
          onClick={() => navigate("/wallet/send")}
        >
          <div className="flex items-center ">
            <div className="basis-1/4 flex justify-center">
              <img
                src="https://www.myetherwallet.com/img/icon-send.91b21cf3.svg"
                alt="icon"
                className="w-7 h-7"
              />
            </div>
            <div className="basis-3/4">
              <p
                className={`${
                  sendActive
                    ? " text-white font-medium text-base"
                    : "text-white-95 font-light text-base"
                }`}
              >
                Send
              </p>
            </div>
          </div>
        </div>
        <div
          className="py-3 px-4 text-shadow hover:bg-white hover:bg-opacity-10 cursor-pointer hover:shadow-sm "
          onClick={handleOpenModalBuySell}
        >
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
        <div
          className={`py-3 px-4 text-shadow cursor-pointer ${
            historyActive
              ? "bg-white bg-opacity-10 "
              : "hover:bg-white hover:bg-opacity-10 hover:shadow-sm "
          }  `}
          onClick={() => navigate("/wallet/history")}
        >
          <div className="flex items-center ">
            <div className="basis-1/4 flex justify-center">
              <img
                src="https://www.myetherwallet.com/img/icon-swap-enable.39784740.svg"
                alt="icon"
                className="w-7 h-7"
              />
            </div>
            <div className="basis-3/4">
              <p
                className={`${
                  historyActive
                    ? " text-white font-medium text-base"
                    : "text-white-95 font-light text-base"
                }`}
              >
                Transactions History
              </p>
            </div>
          </div>
        </div>
        <div
          className={`py-3 px-4 text-shadow cursor-pointer ${
            stakeActive
              ? "bg-white bg-opacity-10 "
              : "hover:bg-white hover:bg-opacity-10 hover:shadow-sm "
          }  `}
          onClick={() => navigate("/wallet/stake")}
        >
          <div className="flex items-center ">
            <div className="basis-1/4 flex justify-center">
              <img
                src="https://www.myetherwallet.com/img/icon-stake.28dfcc62.svg"
                alt="icon"
                className="w-7 h-7"
              />
            </div>
            <div className="basis-3/4">
              <p
                className={`${
                  stakeActive
                    ? " text-white font-medium text-base"
                    : "text-white-95 font-light text-base"
                }`}
              >
                Stake
              </p>
            </div>
          </div>
        </div>
        <hr className="my-8 mx-4 border-wallet-sidebar border" />
        <div
          className="py-3 px-4 text-shadow hover:bg-white hover:bg-opacity-10 cursor-pointer hover:shadow-sm  "
          onClick={logout}
        >
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
      {openModalBuySell && (
        <BuySellModal onClose={() => setOpenModalBuySell(false)} />
      )}
    </div>
  );
};

export default SidebarMenu;
