import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Boxes } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const data = [
  {
    transactionHash: "0x1a2b3c4d5e6f7g8h9i0j",
    from: "0xa1b2c3d4e5f6g7h8i9j0k1",
    to: "0x1a2b3c4d5e6f7g8h9i0j1a2b",
    amount: 2.5,
  },
  {
    transactionHash: "0x2b3c4d5e6f7g8h9i0j1k",
    from: "0xb2c3d4e5f6g7h8i9j0k1l2",
    to: "0x2b3c4d5e6f7g8h9i0j1k2l3",
    amount: 1.2,
  },
  {
    transactionHash: "0x3c4d5e6f7g8h9i0j1k2l",
    from: "0xc3d4e5f6g7h8i9j0k1l2m3",
    to: "0x3c4d5e6f7g8h9i0j1k2l3m4",
    amount: 3.8,
  },
  {
    transactionHash: "0x4d5e6f7g8h9i0j1k2l3m",
    from: "0xd4e5f6g7h8i9j0k1l2m3n4",
    to: "0x4d5e6f7g8h9i0j1k2l3m4n5",
    amount: 0.9,
  },
  {
    transactionHash: "0x5e6f7g8h9i0j1k2l3m4n",
    from: "0xe5f6g7h8i9j0k1l2m3n4o5",
    to: "0x5e6f7g8h9i0j1k2l3m4n5o6",
    amount: 4.1,
  },
  {
    transactionHash: "0x6f7g8h9i0j1k2l3m4n5o",
    from: "0xf6g7h8i9j0k1l2m3n4o5p6",
    to: "0x6f7g8h9i0j1k2l3m4n5o6p7",
    amount: 2.0,
  },
  {
    transactionHash: "0x7g8h9i0j1k2l3m4n5o6p",
    from: "0x7g8h9i0j1k2l3m4n5o6p7q",
    to: "0x7g8h9i0j1k2l3m4n5o6p7q8",
    amount: 1.7,
  },
  {
    transactionHash: "0x8h9i0j1k2l3m4n5o6p7q",
    from: "0x8h9i0j1k2l3m4n5o6p7q8r",
    to: "0x8h9i0j1k2l3m4n5o6p7q8r9",
    amount: 3.2,
  },
  {
    transactionHash: "0x9i0j1k2l3m4n5o6p7q8r",
    from: "0x9i0j1k2l3m4n5o6p7q8r9s",
    to: "0x9i0j1k2l3m4n5o6p7q8r9s0",
    amount: 2.9,
  },
  {
    transactionHash: "0x0j1k2l3m4n5o6p7q8r9s",
    from: "0x0j1k2l3m4n5o6p7q8r9s0t",
    to: "0x0j1k2l3m4n5o6p7q8r9s0t1",
    amount: 4.8,
  },
];

const LatestTransactions = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const truncateHash = (hash) => {
    return hash.length > 13 ? `${hash.slice(0, 13)}...` : hash;
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

  return (
    <div className="basis-1/2 p-4">
      {/* title */}
      <h2 className="text-3xl font-bold text-slate-700 tracking-wide border-l-[6px] border-blue-access pl-2 mb-6">
        Latest Transactions
      </h2>
      {/* table */}
      <div className="min-h-[300px] bg-white border border-slate-300 rounded-md shadow-sm">
        {/* header */}
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
        {/* content */}
        {paginatedData?.map((dt) => (
          <div
            key={dt.transactionHash}
            className="flex items-center min-h-24 p-4 text-slate-700 font-normal text-base border-b border-slate-300 hover:bg-gray-200 hover:bg-opacity-50 hoverOpacity"
          >
            <div className="basis-2/5 flex justify-start">
              <div className="flex items-center gap-2">
                <Boxes className="w-8 h-8" />
                <a href="/" className="text-blue-trans underline font-medium">
                  {truncateHash(dt.transactionHash)}
                </a>
                <span className="text-sm text-slate-400">(12 secs ago)</span>
              </div>
            </div>
            <div className="basis-2/5 flex flex-col justify-center">
              <div className="flex items-center justify-center font-medium">
                From{" "}
                <span className="text-blue-trans ml-2 tracking-wider">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger> {maskAddress(dt.from)}</TooltipTrigger>
                      <TooltipContent className="bg-slate-700 text-white">
                        <p>{dt.from}</p>
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
                      <TooltipTrigger> {maskAddress(dt.to)}</TooltipTrigger>
                      <TooltipContent className="bg-slate-700 text-white">
                        <p>{dt.to}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </span>
              </div>
            </div>

            <div className="basis-1/5 flex justify-end">
              <div className="flex items-center justify-center px-3 py-[2px] border border-slate-300 rounded-2xl shadow-sm font-medium">
                {dt.amount} Eth
              </div>
            </div>
          </div>
        ))}
        {/* page & button */}
        <div className="flex items-center justify-end p-4 text-slate-700 font-medium text-base  gap-10">
          <div>
            Page {currentPage} of {Math.ceil(data.length / itemsPerPage)}
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
            disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
            className="disabled:opacity-50"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestTransactions;
