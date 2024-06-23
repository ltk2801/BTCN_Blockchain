import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "@/contexts/authContext";
import { toast } from "react-toastify";
import Axios from "@/lib/APIs/Axios";

const BuyModal = ({ onClose }) => {
  const { currentWallet, setCurrentWallet } = useAuth();
  const [amountEth, setAmountEth] = useState("");
  const [money, setMoney] = useState("");

  const [moneyError, setMoneyError] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateMoney = (money) => {
    if (!money) {
      setMoneyError("Please enter your amount");
      return false;
    } else if (money <= 50) {
      setMoneyError("Amount can't be below provider's minimum $50.00 USD");
      return false;
    } else if (money >= 1000000) {
      setMoneyError("Amount can't be below provider's maximum $1000000.00 USD");
      return false;
    } else {
      setMoneyError("");
      return true;
    }
  };

  const handleOnchange = (e) => {
    setMoney(e.target.value);
    validateMoney(e.target.value);

    const ethPrice = 3450; // Current ETH price

    const moneyValue = parseFloat(e.target.value);

    const amountEthValue = moneyValue / ethPrice;
    setAmountEth(amountEthValue.toFixed(6)); // Limit to 6 decimal places
  };

  const handeleBuyEth = async () => {
    setLoading(true);
    try {
      const res = await Axios.post("/api/wallet/deposit", {
        address: currentWallet.address,
        usdAmount: money,
      });

      const getBalance = await Axios.get(
        `/api/wallet/balance/${currentWallet.address}`
      );

      const updateWallet = {
        address: currentWallet.address,
        balance: getBalance.data.balance,
      };
      setCurrentWallet(updateWallet);
      toast.success("Buy ETH successfully !");
      onClose();
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Content */}
      <div className="flex flex-col justify-between mt-6 mx-4">
        <div className="mb-5">
          <h4 className="text-slate-700 font-medium text-xl">
            How much do you want to spend?
          </h4>
          <div className="mt-4">
            <div className="relative mb-1">
              <span className="absolute bottom-0 left-0 translate-x-[40%] translate-y-[-40%] transform flex items-center gap-2 ">
                <img
                  src="https://www.myetherwallet.com/img/us.5947945e.svg"
                  alt="images"
                  className="w-6 h-6"
                />
                <span className="text-xl text-slate-400">$</span>
              </span>
              <input
                type="number"
                className={`form-input h-12 w-full rounded-sm border ${
                  !moneyError && money
                    ? "border-sky-700"
                    : moneyError
                    ? "border-red-500"
                    : "border-gray-300"
                } px-4 pl-16 py-2 text-slate-700 transition duration-300 ease-in-out`}
                value={money}
                onChange={handleOnchange}
                onBlur={() => {
                  if (!money) {
                    // Kiểm tra nếu ô input trống sau khi mất focus
                    setMoneyError("Please enter your amount");
                  }
                }}
                required
              />
            </div>
            {moneyError && (
              <span className="font-semibold text-red-500">{moneyError}</span>
            )}
          </div>
        </div>
        <div className="mb-5">
          <h4 className="text-slate-700 font-medium text-xl">You will get</h4>
          <div className="mt-4">
            <div className="relative mb-1">
              <span className="absolute bottom-0 left-0 translate-x-[50%] translate-y-[-30%] transform flex items-center gap-2 ">
                <img
                  src="https://img.mewapi.io/?image=https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628"
                  alt="images"
                  className="w-8 h-8"
                />
              </span>
              <input
                type="text"
                className={`form-input h-12 w-full rounded-sm border  px-4 pl-14 py-2 disabled:bg-white text-slate-700 transition duration-300 ease-in-out ${
                  moneyError || !amountEth
                    ? "border-gray-300"
                    : "border-sky-700"
                }`}
                value={
                  moneyError
                    ? ""
                    : amountEth
                    ? `${amountEth}  ETH ≈ $${money}`
                    : ""
                }
                disabled
                required
              />
            </div>
          </div>
        </div>
      </div>
      {/* button */}
      {!moneyError && money && (
        <div className="mx-4 mt-4 flex justify-center">
          <button
            className={`block bg-sky-700 text-white hover:opacity-80 hoverOpacity  w-[100px] rounded-xl text-base font-bold  py-3 uppercase tracking-wider`}
            onClick={handeleBuyEth}
            disabled={loading}
          >
            Buy
          </button>
        </div>
      )}
    </div>
  );
};

export default BuyModal;
