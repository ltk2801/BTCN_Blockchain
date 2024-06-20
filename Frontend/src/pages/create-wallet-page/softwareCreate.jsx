import React from "react";
import Container from "@/components/layout/container";
import { useAuth } from "../../contexts/authContext";
import { useEffect } from "react";
import MethodSoftware from "@/components/layout/method-software";
import { useNavigate } from "react-router-dom";
import Warning from "@/components/layout/warning";

const SoftwareCreate = () => {
  const { setInCreateWallet } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    setInCreateWallet(true);
    return () => setInCreateWallet(false); // Reset the state when the component is unmounted
  }, [setInCreateWallet]);

  return (
    <div className="w-full  relative">
      <div className="pt-28 bg-blue-access border-blue-access pb-12">
        <Container className=" w-full p-3 max-w-[800px]">
          <div className="px-8 py-10 bg-white rounded-2xl shadow-md text-slate-700  ">
            <div className="text-center mb-10">
              <h1 className="mb-3 text-4xl font-bold ">
                Create wallet using software
              </h1>
            </div>
            <div className="mb-10">
              <MethodSoftware
                title="Keystore"
                icon="https://www.myetherwallet.com/img/icon-keystore-file.956cbf72.svg"
                content="Using a keystore file online makes your wallet more vulnerable to loss of funds. We don't recommend this method of wallet creation."
              />
              <MethodSoftware
                title="Mnemonic Phrase"
                icon="https://www.myetherwallet.com/img/icon-mnemonic.7c3d34fc.svg"
                content="Using a Mnemonic Phrase online makes your wallet more vulnerable to loss of funds. We don't recommend this method of wallet creation."
              />
              <MethodSoftware
                title="Private Key"
                icon="data:image/png;base64,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"
                content="A private key is a crucial piece of information granting access to your cryptocurrency holdings. Keep it secure offline, as online exposure risks theft or loss of funds."
              />
            </div>
            <div className="flex justify-center mb-8">
              <button
                className="block bg-sky-700 rounded-[20px] text-xl text-white font-bold hoverOpacity px-8 py-5 hover:opacity-80 "
                onClick={() => navigate("/wallet/create")}
              >
                Back to Create Wallet
              </button>
            </div>
            <Warning />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SoftwareCreate;
