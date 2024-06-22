import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Send = () => {
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");

  const [amountError, setAmountError] = useState(false);
  const [addressError, setAddressError] = useState(false);

  const validateAmount = (amount) => {
    if (!amount) {
      setAmountError("Please enter your amount");
      return false;
    } else if (amount < 0) {
      setAmountError("Amount must be greater than 0");
      return false;
    } else if (amount >= 1000) {
      setAmountError("Not enough balance to send!");
      return false;
    } else {
      setAmountError("");
      return true;
    }
  };

  const validateAddress = (address) => {
    if (!address) {
      setAddressError("Please enter your address receive token");
      return false;
    } else {
      setAddressError("");
      return true;
    }
  };

  return (
    <div className="basis-8/12 p-4">
      <h2 className="text-3xl font-bold text-slate-700 tracking-wide border-l-[6px] border-blue-trans pl-2 mb-6">
        Send
      </h2>
      {/* table */}
      <div className=" bg-white border border-slate-300 rounded-md shadow-sm pb-8">
        {/* token & amount */}
        <div className="flex items-center">
          <div className="px-6 py-4 mt-6 w-full">
            <h3 className="py-2 text-slate-700 font-medium text-xl">Token</h3>
            <div className="relative mb-1">
              <span className="absolute bottom-0 left-0 translate-x-[50%] translate-y-[-30%] transform flex items-center gap-2 ">
                <img
                  src="https://img.mewapi.io/?image=https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628"
                  alt="images"
                  className="w-8 h-8"
                />
              </span>
              <span className="absolute bottom-0 right-0 translate-x-[-70%] translate-y-[-50%] transform flex items-center gap-2 ">
                <ChevronDown className="stroke-slate-700" />
              </span>
              <input
                type="text"
                className={`form-input h-12 w-full rounded-sm border text-xl  px-4 pl-14 py-2 disabled:bg-white text-slate-700 transition duration-300 ease-in-out  border-sky-700`}
                value="ETH"
                disabled
                required
              />
            </div>
          </div>
          <div className="px-6 py-4 mt-6 w-full relative">
            <h3 className="py-2 text-slate-700 font-medium text-xl">Amount</h3>
            <div className="relative mb-1">
              <input
                type="number"
                className={`form-input h-12 w-full rounded-sm border ${
                  !amountError && amount
                    ? "border-sky-700"
                    : amountError
                    ? "border-red-500"
                    : "border-gray-300"
                } px-4  py-2 text-slate-700 transition duration-300 ease-in-out`}
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                  validateAmount(e.target.value);
                }}
                onBlur={() => {
                  if (!amount) {
                    // Kiểm tra nếu ô input trống sau khi mất focus
                    setAmountError("Please enter your amount");
                  }
                }}
                required
              />
            </div>
            {amountError && (
              <span className="absolute bottom-[-1] left-6 font-semibold text-red-500">
                {amountError}
              </span>
            )}
          </div>
        </div>
        {/* address */}
        <div className="flex items-center">
          <div className="px-6 py-4 w-full">
            <h3 className="py-2 text-slate-700 font-medium text-xl">
              To Address
            </h3>
            <div className="relative mb-1">
              <input
                type="text"
                className={`form-input h-12 w-full rounded-sm border ${
                  !addressError && address
                    ? "border-sky-700"
                    : addressError
                    ? "border-red-500"
                    : "border-gray-300"
                } px-4  py-2 text-slate-700 transition duration-300 ease-in-out`}
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                  validateAddress(e.target.value);
                }}
                onBlur={() => {
                  if (!address) {
                    // Kiểm tra nếu ô input trống sau khi mất focus
                    setAddressError("Please enter your address receive token");
                  }
                }}
                required
              />
            </div>
            {addressError && (
              <span className="font-semibold text-red-500">{addressError}</span>
            )}
          </div>
        </div>
        {/* transaction fee */}
        <div className="flex items-center justify-between text-slate-700">
          <div className="px-6 py-4 ">
            <h3 className="py-2 text-slate-700 font-medium text-xl">
              Transaction Fee
            </h3>
            <div className="relative mb-1">
              <input
                type="text"
                className={`form-input h-12 w-full rounded-sm border  px-4  py-2 disabled:bg-white text-slate-700 transition duration-300 ease-in-out border-sky-700`}
                value={"$0.88 ≈ 0.000256 ETH"}
                required
                disabled
              />
            </div>
          </div>
          <div className="px-6 py-4 ">
            <h3 className="py-2 text-slate-400 font-medium text-xl">
              Total: 0.000256 ETH
            </h3>
          </div>
        </div>
        {/* Sau khi nhập đủ thì sẽ xuất hiện 2 block này */}
        {/* total */}
        {amount && address && !amountError && !addressError && (
          <div className="flex items-center justify-between text-slate-700">
            <div className="px-6 py-4 ">
              <h3 className="py-2 text-slate-700 font-medium text-xl">Total</h3>
            </div>
            <div className="px-6 py-4 ">
              <h3 className="py-2 text-slate-700 font-medium text-xl">
                T312312321 ETH
              </h3>
            </div>
          </div>
        )}

        {/* button */}
        {amount && address && !amountError && !addressError && (
          <div className="flex justify-center mt-4">
            <button
              className={`block bg-sky-700 text-white hover:opacity-80 hoverOpacity  w-[100px] rounded-xl text-base font-bold  py-3 uppercase tracking-wider`}
            >
              SEND
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Send;
