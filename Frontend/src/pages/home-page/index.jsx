import Container from "@/components/layout/container";
import React from "react";
import Assets from "./assets";
import Banner from "./banner";
import Crypto from "./crypto";
import Info from "./info";
import SlideTokens from "./slide-tokens";
import Tokens from "./tokens";

const HomePage = () => {
  return (
    <div className="relative bg-gradient-to-b  via-appBackground bg-[center_top_710px] mb-10 ">
      <div className="absolute top-0 inset-x-0 flex justify-center overflow-hidden bg-[url('https://www.myetherwallet.com/mew-landing-page/_nuxt/bg-home.ChGNDbs1.png')] bg-bottom bg-no-repeat bg-cover h-[710px] -z-30 " />
      <Container className="max-w-[1392px] px-10 pt-[104px] relative">
        <div>
          <div className="mt-[50px]">
            <div className="grid grid-cols-1 gap-[60px] md:gap-[80px] xl:gap-[110px]">
              <Banner />
              <Info />
              <Assets />
              <SlideTokens />
              <Tokens />
              <Crypto />
              <div className="relative h-[100px] md:h-[200px] xl:h-[400px] flex items-center justify-center flex-col">
                <h2 className="text-7xl font-bold leading-[1.1] -tracking-[0.01em] text-slate-700 text-center mb-8 relative">
                  Grab control <br /> of your future
                  <img
                    src="https://www.myetherwallet.com/mew-landing-page/_nuxt/peggy-love.D_ZhaU4l.svg"
                    alt="icons"
                    className="absolute top-[-30px] sm:top-[-39px] xl:top-[-46px] left-[-15px] xl:left-[-18px] h-[56px] sm:h-[76px] xl:h-[96px]"
                  />
                </h2>
                <div className="relative">
                  <button className="block bg-blue-700 rounded-[20px] text-2xl text-white font-bold hoverOpacity px-8 py-5 hover:bg-blue-500 ">
                    Create a new wallet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
