import React from "react";
import Container from "@/components/layout/container";
import Warning from "@/components/layout/warning";
import { useAuth } from "../../contexts/authContext";
import { useEffect } from "react";

const PrivateKeyCreate = () => {
  const { setInCreateWallet } = useAuth();

  useEffect(() => {
    setInCreateWallet(true);
    return () => setInCreateWallet(false); // Reset the state when the component is unmounted
  }, [setInCreateWallet]);

  return (
    <div className="w-full  relative ">
      <div className="pt-28 bg-blue-access border-blue-access pb-12 min-h-[100vh]">
        <Container className=" w-full p-3 max-w-[800px]">
          <div className="px-8 py-10 bg-white rounded-2xl shadow-md text-slate-700  ">
            <div className="text-center mb-10">
              <h1 className="mb-3 text-4xl font-bold ">
                Create Wallet with Private Key
              </h1>
            </div>
            <div className="flex flex-col justify-center items-start py-5 gap-4 mb-5">
              <h2 className="text-xl font-bold">Your private key</h2>
              <div className="flex flex-col justify-center gap-1 mb-4">
                <div className="p-3 w-full border-2 border-gray-300 shadow-sm rounded-xl text-sm text-slate-500 select-none">
                  fgadsgasdgasfgadsgasdgasfgadsgasdgasfgadsgasdgasfgadsgasdgasfgadsgasdgasfgadsgasdgasfgadsgasdgas
                </div>
                <span className="text-base font-medium">
                  Make sure to copy your private key now. You won't be albe to
                  see it again!
                </span>
              </div>
              <div className="flex flex-col items-center w-full gap-3">
                <button className="block bg-sky-700 w-[300px] rounded-xl text-base text-white font-bold hoverOpacity py-3 hover:opacity-80 uppercase tracking-wider">
                  Copy to clipboard
                </button>
                <p className="font-medium">
                  Go to{" "}
                  <a
                    href="/wallet/access/software/private-key"
                    className="text-blue-700 font-bold"
                  >
                    Access Wallet with Private Key
                  </a>
                </p>
              </div>
            </div>
            <Warning />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PrivateKeyCreate;
