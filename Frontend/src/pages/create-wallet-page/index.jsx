import Container from "@/components/layout/container";
import React from "react";
import { useAuth } from "../../contexts/authContext";
import { useEffect } from "react";
import Method from "@/components/layout/method";
import { ShieldAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const WalletCreate = () => {
  const { setInCreateWallet } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    setInCreateWallet(true);
    return () => setInCreateWallet(false); // Reset the state when the component is unmounted
  }, [setInCreateWallet]);

  return (
    <>
      <Header />
      <div className="w-full  relative">
        <div className="pt-28 bg-blue-access border-blue-access pb-12">
          <Container className=" w-full p-3 max-w-[1185px]">
            <div className="pt-5 pb-11 rounded-0  ">
              <div className="text-center">
                <h1 className="mb-3 text-3xl font-bold text-white">
                  Create a new wallet
                </h1>
                <p className="text-xl font-normal leading-8 text-slate-200">
                  Please select a method to create your wallet.
                  <br />
                  Already have a wallet ?{" "}
                  <a
                    href="/wallet/access"
                    className="underline text-green-access"
                    target="_blank"
                  >
                    Access Wallet
                  </a>
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col items-center">
              <Method
                official={true}
                title="Install Enkrypt browser enxtension"
                icon="https://www.myetherwallet.com/img/icon-enkrypt-block.cb05ee30.svg"
                content="MEW’s official browser extension. Connect to web3 on Ethereum and Polkadot, manage your NFTs, buy, send and swap"
              />
              <Method
                official={true}
                title=" Download MEW wallet app"
                icon="https://www.myetherwallet.com/img/icon-mew-wallet.f29574d3.png"
                content="Our official mobile app to create your wallet, and connect to MEW Web using your mobile phone "
              />

              <Method
                official={false}
                title="Buy a hardware wallet "
                icon="https://www.myetherwallet.com/img/icon-hardware-wallet.78248a8e.png"
                content="For the highest standard of security, buy a hardware wallet and use it with MEW"
              />
              {/* Software, Private Key */}
              <div className="relative max-w-[650px] w-full ">
                <div className="absolute flex items-center top-[14px] right-[16px] bg-transparent text-orange-access px-[10px] py-[6px] rounded-[30px] z-[1] text-sm ">
                  <ShieldAlert className="mr-1  fill-orange-access stroke-blue-access" />

                  <span className="font-bold">NOT RECOMMENDED</span>
                </div>
                <button
                  className="h-auto min-h-[157px] p-4 bg-transparent tracking-[.5px] rounded-[10px] mb-5 flex items-center justify-center w-full hoverOpacity  hover:bg-white hover:bg-opacity-10  shadow border-2 border-white"
                  onClick={() => navigate("/wallet/create/software")}
                >
                  <span className="max-w-full flex flex-auto text-white items-center  text-left ">
                    <div className="px-3">
                      <div className="flex items-center font-bold text-xl ">
                        Software
                      </div>
                      <div className="mt-3 leading-6 text-base ">
                        Software methods like Keystore File and Mnemonic Phrase
                        should only be used in offline settings by experienced
                        users
                      </div>
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WalletCreate;
