import React, { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";

import { toast } from "react-toastify";
import BuyModal from "./buyModal";
import SellModal from "./sellModal";

const BuySellModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("buy");
  const popupRef = useRef(null);

  // Click background close popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      id="work-experience-popup"
      className="fixed left-0 right-0 top-0 z-[999] flex h-full w-full items-center justify-center bg-black/50"
    >
      <div
        ref={popupRef}
        className=" flex h-[50%] max-h-[90vh] w-[30%] flex-col  overflow-auto  rounded-lg bg-white p-4 shadow-md transition-all duration-300 ease-in-out "
      >
        {/* title */}
        <div>
          <div className=" flex justify-end">
            <button onClick={onClose}>
              <X className="h-6 w-6 text-slate-700" />
            </button>
          </div>
        </div>
        {/* buy/sell nav */}
        <div className="flex items-center text-slate-700 mx-4  border-b-[2px] border-slate-300 ">
          <div
            className={`px-8 py-3  cursor-pointer hoverOpacity ${
              activeTab === "buy"
                ? "border-b-[2px] border-b-blue-trans mb-[-2px] text-blue-trans font-medium"
                : ""
            }`}
            onClick={() => setActiveTab("buy")}
          >
            <p className="uppercase text-xl">buy</p>
          </div>
          <div
            className={`px-8 py-3  cursor-pointer hoverOpacity ${
              activeTab === "sell"
                ? "border-b-[2px] border-b-blue-trans mb-[-2px] text-blue-trans font-medium"
                : ""
            }`}
            onClick={() => setActiveTab("sell")}
          >
            <p className="uppercase text-xl">sell</p>
          </div>
        </div>
        {/* Content */}
        {activeTab === "buy" ? <BuyModal onClose={onClose} /> : <SellModal />}
      </div>
    </div>
  );
};

export default BuySellModal;
