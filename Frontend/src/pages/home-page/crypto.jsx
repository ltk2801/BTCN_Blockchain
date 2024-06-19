import React from "react";

const Crypto = () => {
  return (
    <div>
      <div className="flex mb-10 md:mb-16 xl:mb-20">
        <div className="basis-full md:basis-2/3 lg:basis-1/2">
          <h2 className="text-6xl font-bold text-slate-700 leading-[1.1] mb-3">
            Make your crypto make crypto.
          </h2>
          <p className="text-3xl leading-[1.1] text-slate-700">
            Stake your ETH and get rewarded by the Ethereum blockchain.
          </p>
        </div>
        <div className="relative hidden md:flex md:basis-1/3 lg:basis-1/2">
          <img
            src="https://www.myetherwallet.com/mew-landing-page/_nuxt/percent-numbers.COGQrU21.svg"
            alt="images"
            className="absolute right-[20px] lg:right-[124px] top-[-16px] -z-20"
          />
        </div>
      </div>
      <div className="grid content-stretch grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-zinc-100 shadow-md p-8 rounded-3xl">
          <div className="flex text-center mb-8">
            <img
              src="https://www.myetherwallet.com/mew-landing-page/_nuxt/ETHLido.C7yEot9i.png"
              alt="Lido Logo"
              className="w-[60px] h-[60px]"
            />
            <img
              src="data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_717_8222)'%3e%3ccircle%20cx='40'%20cy='40'%20r='40'%20fill='%23112037'/%3e%3ccircle%20cx='40'%20cy='40'%20r='39.375'%20stroke='white'%20stroke-opacity='0.2'%20stroke-width='1.25'/%3e%3cg%20clip-path='url(%23clip1_717_8222)'%3e%3cpath%20d='M40%2033.001L56%2040.501L40%2050.001V33.001Z'%20fill='white'%20fill-opacity='0.8'/%3e%3cpath%20d='M39.9999%2033.001L23.9999%2040.501L39.9999%2050.001V33.001Z'%20fill='white'%20fill-opacity='0.9'/%3e%3cpath%20d='M39.9999%2033.0005L23.9999%2040.5005L39.9999%2014.0005V33.0005Z'%20fill='white'/%3e%3cpath%20d='M40%2033.0005L56%2040.5005L40%2014.0005V33.0005Z'%20fill='white'%20fill-opacity='0.9'/%3e%3cpath%20d='M40%2053.0005L56%2043.5005L40%2066.0005V53.0005Z'%20fill='white'%20fill-opacity='0.8'/%3e%3cpath%20d='M39.9999%2053.0005L23.9999%2043.5005L39.9999%2066.0005V53.0005Z'%20fill='white'%20fill-opacity='0.9'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_717_8222'%3e%3crect%20width='80'%20height='80'%20fill='white'/%3e%3c/clipPath%3e%3cclipPath%20id='clip1_717_8222'%3e%3crect%20width='80'%20height='80'%20rx='40'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
              alt="Staked Logo"
              className="w-[60px] h-[60px] relative left-[-17px]"
            />
          </div>
          <div className="mb-4">
            <h3 className="text-3xl font-medium text-slate-700">
              32 ETH Staking
            </h3>
            <p className="text-xl text-blue-700 font-normal -tracking-[0.01em] leading-[30px]">
              Up to 4.0% APR
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-medium text-slate-700">
              No minimum liquid staking
            </h3>
            <p className="text-xl text-blue-700 font-normal -tracking-[0.01em] leading-[30px]">
              Up to 3.6% APR
            </p>
          </div>
        </div>
        <div className="bg-zinc-100 shadow-md p-8 rounded-3xl">
          <img
            src="https://www.myetherwallet.com/mew-landing-page/_nuxt/bank-pic.B7u_1YsL.png"
            alt="image"
            className="w-[96px] h-[96px] mb-6"
          />
          <h3 className="text-3xl font-medium text-slate-700 mb-2">
            Be your own bank
          </h3>
          <p className="text-xl text-slate-500 leading-[30px] -tracking-[0.01em] ">
            Unlike big finance banks that lend your money out, in crypto, you
            are the bank. Earn rewards by helping keep Ethereum secure
            automatically.
          </p>
        </div>
        <div className="relative">
          <div className="absolute bg-zinc-100 flex p-4 items-center rounded-xl w-[268px] top-[170px] sm:top-[150px] left-[00px] lg:top-[119px] shadow-md">
            <img
              src="https://www.myetherwallet.com/mew-landing-page/_nuxt/ETHLido.C7yEot9i.png"
              alt="Lido Logo"
              className="w-[51px] h-[51px] mr-3"
            />
            <h3 className="text-[17px] font-bold leading-[22px] tracking-[0.28px] text-slate-700">
              Ethereum liquid staking
            </h3>
          </div>
          <div className="z-[1] absolute bg-zinc-100 p-5 rounded-xl left-[60px] lg:top-[-56px] shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_717_8222)'%3e%3ccircle%20cx='40'%20cy='40'%20r='40'%20fill='%23112037'/%3e%3ccircle%20cx='40'%20cy='40'%20r='39.375'%20stroke='white'%20stroke-opacity='0.2'%20stroke-width='1.25'/%3e%3cg%20clip-path='url(%23clip1_717_8222)'%3e%3cpath%20d='M40%2033.001L56%2040.501L40%2050.001V33.001Z'%20fill='white'%20fill-opacity='0.8'/%3e%3cpath%20d='M39.9999%2033.001L23.9999%2040.501L39.9999%2050.001V33.001Z'%20fill='white'%20fill-opacity='0.9'/%3e%3cpath%20d='M39.9999%2033.0005L23.9999%2040.5005L39.9999%2014.0005V33.0005Z'%20fill='white'/%3e%3cpath%20d='M40%2033.0005L56%2040.5005L40%2014.0005V33.0005Z'%20fill='white'%20fill-opacity='0.9'/%3e%3cpath%20d='M40%2053.0005L56%2043.5005L40%2066.0005V53.0005Z'%20fill='white'%20fill-opacity='0.8'/%3e%3cpath%20d='M39.9999%2053.0005L23.9999%2043.5005L39.9999%2066.0005V53.0005Z'%20fill='white'%20fill-opacity='0.9'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_717_8222'%3e%3crect%20width='80'%20height='80'%20fill='white'/%3e%3c/clipPath%3e%3cclipPath%20id='clip1_717_8222'%3e%3crect%20width='80'%20height='80'%20rx='40'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                alt="images"
                className="w-[64px] h-[64px]"
              />
              <div>
                <h4 className="text-[22px] font-bold leading-[25px] -tracking-[0.02em]">
                  Ethereum staking
                </h4>
                <p className="text-xl text-blue-700 -tracking-[0.01em] leading-[30px]">
                  ~4.0% APR
                </p>
              </div>
            </div>
            <p className="text-[17px] font-normal leading-normal text-slate-500 mb-4 -tracking-[0.01em]">
              Best yield option, requires 32 ETH minimum to stake.
            </p>
            <div className="flex items-center gap-1">
              <img
                src="data:image/png;base64,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"
                alt="Staked Logo"
                className="w-[24px] h-[24px]"
              />
              <p className="text-[13px] leading-[18px] -tracking-[0.08px] text-slate-500  ">
                Powered by Staked
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crypto;
