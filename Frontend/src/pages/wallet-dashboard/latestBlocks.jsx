import React, { useState } from "react";
import { Box, ChevronLeft, ChevronRight } from "lucide-react";

const data = [
  { blockHeight: 1, status: "Finalized", blockReward: 2 },
  { blockHeight: 2, status: "Finalized", blockReward: 1.5 },
  { blockHeight: 3, status: "Finalized", blockReward: 2.3 },
  { blockHeight: 4, status: "Finalized", blockReward: 1.8 },
  { blockHeight: 5, status: "Finalized", blockReward: 1.2 },
  { blockHeight: 6, status: "Finalized", blockReward: 2.1 },
  { blockHeight: 7, status: "Finalized", blockReward: 1.7 },
  { blockHeight: 8, status: "Finalized", blockReward: 1.9 },
];

const LatestBlocks = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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

  return (
    <div className="basis-1/2 p-4">
      {/* title */}
      <h2 className="text-3xl font-bold text-slate-700 tracking-wide border-l-[6px] border-blue-trans pl-2 mb-6">
        Latest Blocks
      </h2>
      {/* table */}
      <div className="min-h-[300px] bg-white border border-slate-300 rounded-md shadow-sm">
        {/* header */}
        <div className="flex items-center p-4 text-slate-700 font-medium text-base border-b border-slate-300">
          <div className="basis-1/3 flex justify-start">
            <p>Block Height</p>
          </div>
          <div className="basis-1/3 flex justify-center">
            <p>Status</p>
          </div>
          <div className="basis-1/3 flex justify-end">
            <p>Block Reward</p>
          </div>
        </div>
        {/* content */}
        {paginatedData?.map((dt) => (
          <div
            key={dt.blockHeight}
            className="flex items-center min-h-24 p-4 text-slate-700 font-normal text-base border-b border-slate-300 hover:bg-gray-200 hover:bg-opacity-50 hoverOpacity"
          >
            <div className="basis-1/3 flex justify-start">
              <div className="flex items-center gap-2">
                <Box className="w-8 h-8" />
                <a
                  href={`/wallet/dashboard/block/${dt.blockHeight}`}
                  className="text-blue-trans underline font-medium"
                >
                  {dt.blockHeight}
                </a>
                <span className="text-sm text-slate-400">(1 mins ago)</span>
              </div>
            </div>
            <div className="basis-1/3 flex justify-center">
              <div className="flex items-center justify-center px-3 py-[2px] border border-green-access text-green-access rounded-3xl shadow-sm">
                {dt.status}
              </div>
            </div>
            <div className="basis-1/3 flex justify-end">
              <div className="flex items-center justify-center px-3 py-[2px] border border-slate-300 rounded-2xl shadow-sm font-medium">
                {dt.blockReward} ETH
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

export default LatestBlocks;
