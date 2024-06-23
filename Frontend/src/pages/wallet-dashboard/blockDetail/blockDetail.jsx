import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SidebarMenu from "../sidebarMenu";
import { ArrowLeft, CircleHelp } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Axios from "@/lib/APIs/Axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { ClipLoader } from "react-spinners"; // Import the ClipLoadermport Spinner component
import moment from "moment";
import { ethers } from "ethers";

const BlockDetail = () => {
  const { blockHeight } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [dataBlock, setDataBlock] = useState(null);

  const getBlock = async () => {
    setLoading(true);
    try {
      setLoading(true);
      const res = await Axios.get(`/api/blockchain/block/${blockHeight}`);
      setDataBlock(res.data.block);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong !");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlock();
  }, []);

  const getTimeAgo = (timestamp) => {
    const now = Math.floor(Date.now() / 1000);
    const diff = now - timestamp;

    if (diff < 60) {
      return `${diff} secs ago`;
    } else if (diff < 3600) {
      const mins = Math.floor(diff / 60);
      return `${mins} mins ago`;
    } else if (diff < 86400) {
      const hrs = Math.floor(diff / 3600);
      return `${hrs} hrs ago`;
    } else {
      const days = Math.floor(diff / 86400);
      return `${days} days ago`;
    }
  };

  const convertTimestamp = (timestamp) => {
    // Chuyển đổi timestamp thành đối tượng moment
    const date = moment.unix(timestamp);

    // Định dạng thời gian thành "MMM-DD-YYYY hh:mm:ss A [UTC]"
    return date.utc().format("MMM-DD-YYYY hh:mm:ss A [UTC]");
  };

  const coverGas = (gas) => {
    const gasLimitBigNumber = parseInt(gas, 16);
    return gasLimitBigNumber;
  };

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
                  <span>Go back</span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          {/* content */}
          {loading ? (
            <ClipLoader size={50} color={"red"} loading={loading} />
          ) : (
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
                    <span className="basis-1/4 font-medium text-blue-trans">
                      {dataBlock?.number}
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="basis-1/4 flex items-center gap-2">
                    <CircleHelp className="h-5 w-5" />
                    <span className="font-medium text-slate-700">Hash :</span>
                  </div>
                  <div>
                    <span className="basis-1/4 font-medium text-blue-trans">
                      {dataBlock?.hash}
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="basis-1/4 flex items-center gap-2">
                    <CircleHelp className="h-5 w-5" />
                    <span className="font-medium text-slate-700">
                      ParentHash :
                    </span>
                  </div>
                  <div>
                    <span className="basis-1/4 font-medium text-blue-trans">
                      {dataBlock?.parentHash}
                    </span>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="basis-1/4 flex items-center gap-2">
                    <CircleHelp className="h-5 w-5" />
                    <span className="font-medium text-slate-700">Nonce :</span>
                  </div>
                  <div>
                    <span className="basis-1/4  font-medium flex items-center justify-center px-3 py-[2px] border border-green-access text-green-access rounded-3xl shadow-sm">
                      {dataBlock?.nonce}
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="basis-1/4 flex items-center gap-2">
                    <CircleHelp className="h-5 w-5" />
                    <span className="font-medium text-slate-700">
                      Difficulty :
                    </span>
                  </div>
                  <div>
                    <span className="basis-1/4  font-medium flex items-center justify-center px-3 py-[2px] border border-green-access text-green-access rounded-3xl shadow-sm">
                      {dataBlock?.difficulty}
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
                      {getTimeAgo(dataBlock?.timestamp)} ({" "}
                      {convertTimestamp(dataBlock?.timestamp)} )
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
                        {dataBlock?.transactions.length}transactions
                      </a>
                      in this block
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="basis-1/4 flex items-center gap-2">
                    <CircleHelp className="h-5 w-5" />
                    <span className="font-medium text-slate-700">
                      Gas Used :
                    </span>
                  </div>
                  <div>
                    <span className="basis-1/4  font-medium flex items-center justify-center px-3 py-[2px] border border-green-access text-green-access rounded-3xl shadow-sm">
                      {coverGas(dataBlock?.gasUsed?.hex)}
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="basis-1/4 flex items-center gap-2">
                    <CircleHelp className="h-5 w-5" />
                    <span className="font-medium text-slate-700">
                      Gas Limit :
                    </span>
                  </div>
                  <div>
                    <span className="basis-1/4  font-medium flex items-center justify-center px-3 py-[2px] border border-green-access text-green-access rounded-3xl shadow-sm">
                      {coverGas(dataBlock?.gasLimit?.hex)}
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="basis-1/4 flex items-center gap-2">
                    <CircleHelp className="h-5 w-5" />
                    <span className="font-medium text-slate-700">Miner :</span>
                  </div>
                  <div>
                    <span className="basis-1/4 font-medium text-blue-trans">
                      {dataBlock?.miner}
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
                      0.1 ETH
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
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
