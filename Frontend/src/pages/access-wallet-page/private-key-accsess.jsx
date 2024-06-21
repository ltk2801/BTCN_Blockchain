import React from "react";
import Container from "@/components/layout/container";
import Warning from "@/components/layout/warning";
import { useAuth } from "../../contexts/authContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Axios from "@/lib/APIs/Axios";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const PrivateKeyAccess = () => {
  const { setInAccessWallet, setCurrentWallet } = useAuth();

  const navigate = useNavigate();

  const [privateKey, setPrivateKey] = useState("");
  const [privateKeyError, setPrivateKeyError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [check, setCheck] = useState(false);

  useEffect(() => {
    setInAccessWallet(true);
    return () => setInAccessWallet(false); // Reset the state when the component is unmounted
  }, [setInAccessWallet]);

  const validatePrivateKey = (privateKey) => {
    if (!privateKey) {
      setPrivateKeyError("Please enter your private key");
      return false;
    } else {
      setPrivateKeyError("");
      return true;
    }
  };

  const handleAccessWallet = async () => {
    setLoading(true);
    try {
      const res = await Axios.post("/api/wallet/access", {
        privateKey,
      });
      setCurrentWallet(res.data.wallet);
      toast.success("Access wallet successfully !");
      navigate("/wallet/dashboard");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="w-full  relative ">
        <div className="pt-28 bg-blue-access border-blue-access pb-12 min-h-[100vh]">
          <Container className=" w-full p-3 max-w-[800px]">
            <div className="px-8 py-10 bg-white rounded-2xl shadow-md text-slate-700  ">
              <div className="text-center mb-10">
                <h1 className="mb-3 text-4xl font-bold ">
                  Access Wallet with Private Key
                </h1>
              </div>
              <div className="flex flex-col justify-center items-start py-5 gap-4 mb-5">
                <h2 className="text-xl font-bold">Enter your private key</h2>
                <div className="mb-6 mt-3 w-full">
                  <div className="relative mb-1 ">
                    <input
                      type={"password"}
                      className={`h-12 w-full rounded-xl border-2 ${
                        !privateKeyError && privateKey
                          ? "border-sky-700"
                          : privateKeyError
                          ? "border-red-500"
                          : "border-gray-300"
                      } px-4 py-2 `}
                      placeholder="Private Key"
                      value={privateKey}
                      onChange={(e) => {
                        setPrivateKey(e.target.value);
                        validatePrivateKey(e.target.value);
                      }}
                      onBlur={() => {
                        if (!privateKey) {
                          // Kiểm tra nếu ô input trống sau khi mất focus
                          setPrivateKeyError("Please enter your private key");
                        }
                      }}
                      required
                    />
                  </div>
                  {privateKeyError && (
                    <span className="font-semibold text-red-500">
                      {privateKeyError}
                    </span>
                  )}
                </div>
                <div className="flex justify-center items-center w-full ">
                  <div className="inline-flex items-center">
                    <label
                      className="relative flex cursor-pointer items-center rounded-full p-3 "
                      htmlFor="check"
                    >
                      <input
                        type="checkbox"
                        className="before:content[''] border-sky-700 before:bg-sky-700 peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-sky-700 checked:bg-sky-700 checked:before:bg-sky-700 hover:before:opacity-10"
                        id="check"
                        onChange={() => setCheck((prevState) => !prevState)}
                      />
                      <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                  </div>
                  <p className="text-base font-medium">
                    To access my wallet, I accept
                    <span className="text-sky-700 ml-1 cursor-pointer">
                      Terms
                    </span>
                  </p>
                </div>

                <div className="flex flex-col items-center w-full gap-3">
                  <button
                    className={`block ${
                      privateKeyError || !check || !privateKey || loading
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed "
                        : "bg-sky-700 text-white hover:opacity-80 hoverOpacity"
                    }  w-[300px] rounded-xl text-base font-bold  py-3 uppercase tracking-wider`}
                    disabled={privateKeyError || !check || loading}
                    onClick={handleAccessWallet}
                  >
                    {loading ? "accessing..." : "access wallet"}
                  </button>
                </div>
              </div>
              <Warning />
            </div>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivateKeyAccess;
