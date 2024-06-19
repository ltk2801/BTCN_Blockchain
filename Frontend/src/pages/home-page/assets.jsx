import React from "react";

const Assets = () => {
  return (
    <div className="mb-8 -mt-20 h-[70vh] relative flex justify-start items-center overflow-x-clip">
      <img
        src="https://www.myetherwallet.com/mew-landing-page/_nuxt/self-custody.Pg99LToI.svg"
        alt="images"
        className="absolute top-[0px] right-[-10%] h-[100%] "
      />
      <div className="basis-7/12 z-[1]">
        <h2 className="tracking-tight text-6xl font-bold text-slate-700 mb-6 leading-[1.1]">
          Truly own your <br /> crypto assets.
        </h2>
        <p className="text-3xl leading-snug text-slate-700 font-normal">
          MEW is a self-custody wallet, which means that you hold your keys and
          nobody except you (not event the MEW team) can access your crypto.
        </p>
      </div>
    </div>
  );
};

export default Assets;
