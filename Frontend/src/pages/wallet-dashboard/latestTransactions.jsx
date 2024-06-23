import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Boxes } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ClipLoader } from "react-spinners";
import { useAuth } from "@/contexts/authContext";

const LatestTransactions = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, latestTransactions } = useAuth();
  const itemsPerPage = 6;

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(latestTransactions?.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginatedData =
    latestTransactions.length > 0
      ? latestTransactions.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        )
      : [];

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

  const truncateHash = (hash) => {
    return hash.length > 13 ? `${hash.slice(0, 13)}...` : hash;
  };

  const maskAddress = (address) => {
    if (!address) return "";

    const visibleChars = 10; // Number of characters visible at start and end
    const start = address.slice(0, visibleChars);
    const end = address.slice(-visibleChars);
    const maskedMiddle = "...";

    return `${start}${maskedMiddle}${end}`;
  };

  const toFixed4 = (eth) => {
    const num = Number(eth);

    if (!Number.isFinite(num)) {
      return eth;
    }

    const str = num.toString();
    const hasDecimal = str.includes(".");
    if (hasDecimal) {
      const decimalPlaces = str.split(".")[1].length;
      if (decimalPlaces > 4) {
        return num.toFixed(4);
      }
    }

    return str;
  };

  return (
    <div className="basis-1/2 p-4">
      <h2 className="text-3xl font-bold text-slate-700 tracking-wide border-l-[6px] border-blue-trans pl-2 mb-6">
        Latest Transactions
      </h2>

      {loading ? (
        <ClipLoader size={50} color={"red"} loading={loading} />
      ) : (
        <div className="min-h-[300px] bg-white border border-slate-300 rounded-md shadow-sm">
          {paginatedData.length === 0 ? (
            <div className="flex items-center justify-center h-full text-lg text-gray-500">
              No transactions
            </div>
          ) : (
            <>
              <div className="flex items-center p-4 text-slate-700 font-bold text-base border-b border-slate-300">
                <div className="basis-2/5 flex justify-start">
                  <p>Transaction Hash</p>
                </div>
                <div className="basis-1/5 flex justify-center"></div>
                <div className="basis-1/5 flex justify-center"></div>
                <div className="basis-1/5 flex justify-end">
                  <p>Amount</p>
                </div>
              </div>

              {paginatedData.map((dt) => (
                <div
                  key={dt.hash}
                  className="flex items-center min-h-24 p-4 text-slate-700 font-normal text-base border-b border-slate-300 hover:bg-gray-200 hover:bg-opacity-50 hoverOpacity"
                >
                  <div className="basis-2/5 flex justify-start">
                    <div className="flex items-center gap-2">
                      <Boxes className="w-8 h-8" />
                      <a
                        href={`/wallet/dashboard/transaction/${dt.hash}`}
                        className="text-blue-trans underline font-medium"
                      >
                        {truncateHash(dt.hash)}
                      </a>
                      <span className="text-sm text-slate-400">
                        {" "}
                        {getTimeAgo(dt.timestamp)}
                      </span>
                    </div>
                  </div>
                  <div className="basis-2/5 flex flex-col justify-center">
                    <div className="flex items-center justify-center font-medium">
                      From{" "}
                      <span className="text-blue-trans ml-2 tracking-wider">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              {maskAddress(dt.from)}
                            </TooltipTrigger>
                            <TooltipContent className="bg-slate-700 text-white">
                              <span>{dt.from}</span>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </span>
                    </div>
                    <div className="flex items-center justify-center font-medium">
                      To
                      <span className="text-blue-trans ml-2 tracking-wider">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              {maskAddress(dt.to)}
                            </TooltipTrigger>
                            <TooltipContent className="bg-slate-700 text-white">
                              <span>{dt.to}</span>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </span>
                    </div>
                  </div>

                  <div className="basis-1/5 flex justify-end">
                    <div className="flex items-center justify-center px-3 py-[2px] border border-slate-300 rounded-2xl shadow-sm font-medium">
                      {toFixed4(dt.value)} ETH
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex items-center justify-end p-4 text-slate-700 font-medium text-base  gap-10">
                <div>
                  Page {currentPage} of{" "}
                  {Math.ceil(latestTransactions?.length / itemsPerPage)}
                </div>
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className="disabled:opacity-50"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={handleNextPage}
                  disabled={
                    currentPage ===
                    Math.ceil(latestTransactions?.length / itemsPerPage)
                  }
                  className="disabled:opacity-50"
                >
                  <ChevronRight />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default LatestTransactions;
