import React from "react";

const Info = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center">
        <div className="basis-full">
          <h2 className="tracking-tight text-6xl font-bold text-slate-700 mb-10 leading-[1.1]">
            Want to get into crypto? <br /> MEW is the way to do it.
          </h2>
        </div>
        <div className="basis-full md:basis-1/2 pl-4">
          <ul className="list-disc list-outside marker:text-[rgba(0,0,0,0.3)] font-normal tracking-tight leading-normal text-2xl text-slate-700">
            <li className="mb-4">
              The Ethereum ecosystem has the biggest development community in
              all of web3.
            </li>
            <li>MEW is the most trusted and battle tested Ethereum wallet.</li>
          </ul>
        </div>
        <div className="basis-full md:basis-1/2 flex md:justify-center justify-end py-10">
          <div className="bg-zinc-100 rounded-3xl p-5 max-w-[304px] z-[1] shadow-sm">
            <div className="flex text-center mb-4 text-lg gap-4">
              <img
                src="https://www.myetherwallet.com/mew-landing-page/_nuxt/donate-eth.CqPNzgt3.svg"
                alt="eth"
                contain="true"
              />
              <p className="text-bold">Ethereum</p>
              <p>$3545.49</p>
            </div>
            <p className="text-slate-500   text-[15px] leading-[21px] ">
              Not investment advice. All decisions are made at the user's own
              risk.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
