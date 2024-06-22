import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import SidebarMenu from "./sidebarMenu";
import { ArrowLeft, CircleHelp } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const BlockDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="flex flex-auto min-h-[100vh] max-w-full relative">
      <div className="bg-wallet-base h-full w-full ">
        <SidebarMenu />
        <div className="ml-[340px] px-14 py-4 min-h-[93vh] relative">
          {/* go back */}
          <div className="absolute top-8 left-8">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {" "}
                  <ArrowLeft
                    className="w-7 h-7 text-slate-700 text-shadow hoverOpacity hover:text-opacity-70 "
                    onClick={() => navigate("/wallet/dashboard")}
                  />
                </TooltipTrigger>
                <TooltipContent className="bg-slate-700 text-white">
                  <p>Go back</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          {/* content */}
          <div className="mt-20 p-8 border border-slate-300 rounded-xl shadow-sm bg-white">
            <div className="flex flex-col justify-center gap-8">
              <div className="flex items-center">
                <div className="basis-1/4 flex items-center gap-2">
                  <CircleHelp className="h-5 w-5" />
                  <span className="font-medium text-slate-700">
                    Block Height :
                  </span>
                </div>
                <div>
                  <span className="basis-1/4 font-medium text-slate-700">
                    1
                  </span>
                </div>
              </div>

              <div className="flex items-center ">
                <div className="basis-1/4  flex items-center gap-2">
                  <CircleHelp className="h-5 w-5" />
                  <span className="font-medium text-slate-700">Status :</span>
                </div>
                <div>
                  <span className="basis-1/4  font-medium flex items-center justify-center px-3 py-[2px] border border-green-access text-green-access rounded-3xl shadow-sm">
                    Finalized
                  </span>
                </div>
              </div>
              <div className="flex items-center ">
                <div className=" basis-1/4 flex items-center gap-2">
                  <CircleHelp className="h-5 w-5" />
                  <span className="font-medium text-slate-700">
                    Timestamp :
                  </span>
                </div>
                <div>
                  <span className=" basis-1/4  font-medium text-slate-700">
                    1 mins ago (May-20-2024 12:18:40 AM +UTC)
                  </span>
                </div>
              </div>
              <div className="flex items-center ">
                <div className="basis-1/4  flex items-center gap-2">
                  <CircleHelp className="h-5 w-5" />
                  <span className="font-medium text-slate-700">
                    Transactions :
                  </span>
                </div>
                <div>
                  <span className="basis-1/4  font-medium text-slate-700">
                    <a
                      href="/wallet/dashboard"
                      className="underline text-blue-trans mr-1 font-bold"
                    >
                      0 transactions
                    </a>
                    in this block
                  </span>
                </div>
              </div>
              <div className="flex items-center ">
                <div className="basis-1/4  flex items-center gap-2">
                  <CircleHelp className="h-5 w-5" />
                  <span className="font-medium text-slate-700">
                    Block Reward :
                  </span>
                </div>
                <div>
                  <span className="basis-1/4   text-slate-700 flex items-center justify-center px-3 py-[2px] border border-slate-300 rounded-2xl shadow-sm font-medium">
                    0.1 Eth
                  </span>
                </div>
              </div>
            </div>
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

export default BlockDetail;
