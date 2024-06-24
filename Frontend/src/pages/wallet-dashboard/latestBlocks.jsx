import React, { useState } from "react";
import { Box, ChevronLeft, ChevronRight } from "lucide-react";
import { ClipLoader } from "react-spinners"; // Import the ClipLoadermport Spinner component
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useAuth } from "@/contexts/authContext";

const LatestBlocks = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, latestBlocks } = useAuth();

  const itemsPerPage = 6;

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(latestBlocks?.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginatedData =
    latestBlocks.length > 0
      ? latestBlocks.slice(
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

  // Function to mask the middle part of the address
  const maskAddress = (address) => {
    if (!address) return "";

    const visibleChars = 5; // Number of characters visible at start and end
    const start = address.slice(0, visibleChars);
    const end = address.slice(-visibleChars);
    const maskedMiddle = "...";

    return `${start}${maskedMiddle}${end}`;
  };
  return (
    <div className="basis-1/2 p-4">
      {/* title */}
      <h2 className="text-3xl font-bold text-slate-700 tracking-wide border-l-[6px] border-blue-trans pl-2 mb-6">
        Latest Blocks
      </h2>
      {/* table */}
      {loading ? (
        <ClipLoader size={50} color={"red"} loading={loading} />
      ) : (
        <div className="min-h-[200px] bg-white border border-slate-300 rounded-md shadow-sm">
          <div className="flex items-center p-4 text-slate-700 font-medium text-base border-b border-slate-300">
            <div className="basis-2/6 flex justify-start">
              <p>Block Height</p>
            </div>
            <div className="basis-1/6 flex justify-center">
              <p>Nonce</p>
            </div>
            <div className="basis-1/6 flex justify-center">
              <p>Difficulty</p>
            </div>
            <div className="basis-1/6 flex justify-center">
              <p>Miner</p>
            </div>
            <div className="basis-1/6 flex justify-end">
              <p>Block Reward</p>
            </div>
          </div>

          {paginatedData?.map((dt) => (
            <div
              key={dt.hash}
              className="flex items-center min-h-24 p-4 text-slate-700 font-normal text-base border-b border-slate-300 hover:bg-gray-200 hover:bg-opacity-50 hoverOpacity"
            >
              <div className="basis-2/6 flex justify-start">
                <div className="flex items-center gap-2">
                  <Box className="w-8 h-8" />
                  <a
                    href={`/wallet/dashboard/block/${dt.number}`}
                    className="text-blue-trans underline font-medium"
                  >
                    {dt.number}
                  </a>
                  <span className="text-base text-slate-400">
                    {getTimeAgo(dt.timestamp)}
                  </span>
                </div>
              </div>
              <div className="basis-1/6 flex justify-center">
                <div className="flex items-center justify-center px-3 py-[2px] border border-green-access text-green-access rounded-3xl shadow-sm">
                  {dt.nonce.slice(0, 7)}
                </div>
              </div>
              <div className="basis-1/6 flex justify-center">
                <div className="flex items-center justify-center px-3 py-[2px] border border-green-access text-green-access rounded-3xl shadow-sm">
                  {dt.difficulty}
                </div>
              </div>
              <div className="basis-1/6 flex flex-col justify-center">
                <div className="flex items-center justify-center font-medium">
                  <span className="text-blue-trans ml-2 tracking-wider">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          {" "}
                          {maskAddress(dt.miner)}
                        </TooltipTrigger>
                        <TooltipContent className="bg-slate-700 text-white">
                          <span>{dt.miner}</span>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </span>
                </div>
              </div>
              <div className="basis-1/6 flex justify-end">
                <div className="flex items-center justify-center px-3 py-[2px] border border-slate-300 rounded-2xl shadow-sm font-medium">
                  0.01 ETH
                </div>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-end p-4 text-slate-700 font-medium text-base  gap-10">
            <div>
              Page {currentPage} of{" "}
              {Math.ceil(latestBlocks?.length / itemsPerPage)}
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
                currentPage === Math.ceil(latestBlocks?.length / itemsPerPage)
              }
              className="disabled:opacity-50"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LatestBlocks;
