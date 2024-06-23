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
import "moment-timezone";

const TransactionDetail = () => {
  const { hashTran } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [dataTransaction, setDataTransaction] = useState(null);

  const getTransaction = async () => {
    setLoading(true);
    try {
      setLoading(true);
      const res = await Axios.get(`/api/transaction/getTran/${hashTran}`);
      setDataTransaction(res.data.transaction);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong !");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTransaction();
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

  const convertTimestampToVietnamTime = (timestamp) => {
    // Chuyển đổi timestamp thành đối tượng moment
    const date = moment.unix(timestamp);

    // Đặt múi giờ thành Việt Nam (GMT+7)
    date.tz("Asia/Ho_Chi_Minh");

    // Định dạng thời gian theo "MMM-DD-YYYY hh:mm:ss A [UTC]"
    return date.format("MMM-DD-YYYY hh:mm:ss A [UTC]");
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
          <div className="mt-20 p-8 border border-slate-300 rounded-xl shadow-sm bg-white">
            <div className="flex flex-col justify-center gap-7">
              <div className="flex items-center">
                <div className="basis-1/4 flex items-center gap-2">
                  <CircleHelp className="h-5 w-5" />
                  <span className="font-medium text-slate-700">
                    Transaction Hash :
                  </span>
                </div>
                <div>
                  <span className="basis-1/4 font-medium text-blue-trans">
                    {dataTransaction?.hash}
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
                    {dataTransaction?.status}
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
                    {getTimeAgo(dataTransaction?.timestamp)} ({" "}
                    {convertTimestampToVietnamTime(dataTransaction?.timestamp)}{" "}
                    )
                  </span>
                </div>
              </div>
              <div className="flex items-center ">
                <div className="basis-1/4  flex items-center gap-2">
                  <CircleHelp className="h-5 w-5" />
                  <span className="font-medium text-slate-700">From:</span>
                </div>
                <div>
                  <span className="basis-1/4  font-medium text-blue-trans">
                    {dataTransaction?.from}
                  </span>
                </div>
              </div>
              <div className="flex items-center ">
                <div className="basis-1/4  flex items-center gap-2">
                  <CircleHelp className="h-5 w-5" />
                  <span className="font-medium text-slate-700">To:</span>
                </div>
                <div>
                  <span className="basis-1/4  font-medium text-blue-trans">
                    {dataTransaction?.to}
                  </span>
                </div>
              </div>
              <div className="flex items-center ">
                <div className="basis-1/4  flex items-center gap-2">
                  <CircleHelp className="h-5 w-5" />
                  <span className="font-medium text-slate-700">Value:</span>
                </div>
                <div>
                  <span className="basis-1/4  font-medium flex items-center justify-center px-3 py-[2px] border border-green-access text-green-access rounded-3xl shadow-sm">
                    {dataTransaction?.value} ETH
                  </span>
                </div>
              </div>
              <div className="flex items-center ">
                <div className="basis-1/4  flex items-center gap-2">
                  <CircleHelp className="h-5 w-5" />
                  <span className="font-medium text-slate-700">Gas Price:</span>
                </div>
                <div>
                  <span className="basis-1/4  font-medium flex items-center justify-center px-3 py-[2px] border border-green-access text-green-access rounded-3xl shadow-sm">
                    {dataTransaction?.gasPrice} ETH
                  </span>
                </div>
              </div>
              <div className="flex items-center ">
                <div className="basis-1/4  flex items-center gap-2">
                  <CircleHelp className="h-5 w-5" />
                  <span className="font-medium text-slate-700">
                    Gas Litmit:
                  </span>
                </div>
                <div>
                  <span className="basis-1/4  font-medium flex items-center justify-center px-3 py-[2px] border border-green-access text-green-access rounded-3xl shadow-sm">
                    {dataTransaction?.gasLimit}
                  </span>
                </div>
              </div>
              <div className="flex items-center ">
                <div className="basis-1/4  flex items-center gap-2">
                  <CircleHelp className="h-5 w-5" />
                  <span className="font-medium text-slate-700">Nonce:</span>
                </div>
                <div>
                  <span className="basis-1/4   text-slate-700 flex items-center justify-center px-3 py-[2px] border border-slate-300 rounded-2xl shadow-sm font-medium">
                    {dataTransaction?.nonce}
                  </span>
                </div>
              </div>
              <div className="flex items-center ">
                <div className="basis-1/4  flex items-center gap-2">
                  <CircleHelp className="h-5 w-5" />
                  <span className="font-medium text-slate-700">ChainId:</span>
                </div>
                <div>
                  <span className="basis-1/4   text-slate-700 flex items-center justify-center px-3 py-[2px] border border-slate-300 rounded-2xl shadow-sm font-medium">
                    {dataTransaction?.chainId}
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

export default TransactionDetail;
