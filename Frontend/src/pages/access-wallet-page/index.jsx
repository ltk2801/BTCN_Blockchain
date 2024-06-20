import Container from "@/components/layout/container";
import React from "react";
import { useAuth } from "../../contexts/authContext";
import { useEffect } from "react";
import Method from "@/components/layout/method";
import { ShieldAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WalletAccess = () => {
  const { setInAccessWallet } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    setInAccessWallet(true);
    return () => setInAccessWallet(false); // Reset the state when the component is unmounted
  }, [setInAccessWallet]);

  return (
    <div className="w-full  relative">
      <div className="pt-28 bg-blue-access border-blue-access pb-12">
        <Container className=" w-full p-3 max-w-[1185px]">
          <div className="pt-5 pb-11 rounded-0  ">
            <div className="text-center">
              <h1 className="mb-3 text-3xl font-bold text-white">
                Access my wallet
              </h1>
              <p className="text-xl font-normal leading-8 text-slate-200">
                Please select a method to access your wallet.
                <br />
                Don't have a wallet ?{" "}
                <a
                  href="/wallet/create"
                  className="underline text-green-access"
                  target="_blank"
                >
                  Create Wallet
                </a>
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <Method
              official={true}
              title="Enkrypt"
              icon="https://www.myetherwallet.com/img/icon-enkrypt-block.cb05ee30.svg"
              content="Connect with Enkrypt browser extension"
            />
            <Method
              official={true}
              title="MEW wallet app"
              icon="https://www.myetherwallet.com/img/icon-mew-wallet.f29574d3.png"
              content="Connect MEW Wallet app to MEW web"
            />
            <Method
              official={false}
              title="Browser extension"
              icon="https://www.myetherwallet.com/img/icon-extensions.fbf7b80e.png"
              content="Use your Web3 wallet with MEW"
            />
            <Method
              official={false}
              title="Mobile Apps"
              icon="https://www.myetherwallet.com/img/icon-mobile-apps.40f4eb5f.png"
              content="WalletConnect, WalletLink"
            />
            <Method
              official={false}
              title="Hardware wallets"
              icon="https://www.myetherwallet.com/img/icon-hardware-wallet.78248a8e.png"
              content="Ledger,Trezor,KeepKey,Cool Wallet, Bitbox02"
            />
            {/* Software, Private Key */}
            <div className="relative max-w-[650px] w-full ">
              <div className="absolute flex items-center top-[14px] right-[16px] bg-transparent text-orange-access px-[10px] py-[6px] rounded-[30px] z-[1] text-sm ">
                <ShieldAlert className="mr-1  fill-orange-access stroke-blue-access" />

                <span className="font-bold">NOT RECOMMENDED</span>
              </div>
              <button
                className="h-auto min-h-[157px] p-4 bg-transparent tracking-[.5px] rounded-[10px] mb-5 flex items-center justify-center w-full hoverOpacity  hover:bg-white hover:bg-opacity-10  shadow border-2 border-white"
                onClick={() => navigate("/wallet/access/software")}
              >
                <span className="max-w-full flex flex-auto text-white items-center  text-left ">
                  <div className="px-3">
                    <div className="flex items-center font-bold text-xl ">
                      Software
                    </div>
                    <div className="mt-3 leading-6 text-base ">
                      Keystore File, Mnemonic Phrase, and Private Key
                    </div>
                  </div>
                </span>
              </button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default WalletAccess;
