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
    <div className="relative bg-gradient-to-b  via-appBackground bg-[center_top_710px] ">
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
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
