import React, { useState, useRef, useEffect } from "react";

const SellModal = () => {
  const [amountEth, setAmountEth] = useState("");
  const [money, setMoney] = useState("");

  const [amountEthError, setAmountEthError] = useState(false);

  const validateAmountEth = (amountEth) => {
    if (!amountEth) {
      setAmountEthError("Please enter your amount");
      return false;
    } else {
      setAmountEthError("");
      return true;
    }
  };

  const handleOnchange = (e) => {
    setAmountEth(e.target.value);
    validateAmountEth(e.target.value);

    const ethPrice = 3450; // Current ETH price

    const ethValue = parseFloat(e.target.value);

    const moneyValue = ethValue * ethPrice;
    setMoney(moneyValue.toFixed(2)); // Limit to 6 decimal places
  };

  return (
    <div className="flex flex-col">
      {/* Content */}
      <div className="flex flex-col justify-between mt-6 mx-4">
        <div className="mb-5">
          <h4 className="text-slate-700 font-medium text-xl">
            How much do you want to sell?
          </h4>
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
                type="number"
                className={`form-input h-12 w-full rounded-sm border ${
                  !amountEthError && amountEth
                    ? "border-sky-700"
                    : amountEthError
                    ? "border-red-500"
                    : "border-gray-300"
                } px-4 pl-14 py-2 text-slate-700 transition duration-300 ease-in-out`}
                value={amountEth}
                onChange={handleOnchange}
                onBlur={() => {
                  if (!amountEth) {
                    // Kiểm tra nếu ô input trống sau khi mất focus
                    setAmountEthError("Please enter your amount");
                  }
                }}
                required
              />
            </div>
            {amountEthError && (
              <span className="font-semibold text-red-500">
                {amountEthError}
              </span>
            )}
          </div>
        </div>
        <div className="mb-5">
          <h4 className="text-slate-700 font-medium text-xl">You will get</h4>
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
                type="text"
                className={`form-input h-12 w-full rounded-sm border border-gray-300 px-4 pl-16 py-2 disabled:bg-white text-slate-700 transition duration-300 ease-in-out ${
                  amountEthError || !money
                    ? "border-gray-300"
                    : "border-sky-700"
                }`}
                value={amountEthError ? "" : money}
                disabled
                required
              />
            </div>
          </div>
        </div>
      </div>
      {/* button */}
      {!amountEthError && amountEth && (
        <div className="mx-4 mt-4 flex justify-center">
          <button
            className={`block bg-gray-300 text-gray-500 cursor-not-allowed   hover:opacity-80 hoverOpacity  w-[100px] rounded-xl text-base font-bold  py-3 uppercase tracking-wider`}
            disabled
          >
            Sell
          </button>
        </div>
      )}
    </div>
  );
};

export default SellModal;
