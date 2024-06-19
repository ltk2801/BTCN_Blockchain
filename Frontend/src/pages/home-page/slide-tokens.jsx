import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";

const SlideTokens = () => {
  return (
    <div className="h-[750px]">
      <div className="flex">
        <h2 className="text-center basis-full   tracking-tight text-6xl font-bold text-slate-700 mb-12 leading-[1.1]">
          Buy, store, send, <br /> and swap tokens
        </h2>
      </div>
      <Carousel>
        {/* slide */}
        <CarouselContent>
          <CarouselItem>
            {" "}
            <div className="rounded-[32px] bg-slate-50 w-full shadow-sm">
              <div className="grid grid-cols-2 h-[544px] sm:h-fit">
                <div className="block self-center py-5 px-5 lg:px-12 text-left max-w-[406px] xl:max-w-[560px]">
                  <div className="text-5xl font-medium text-slate-700 mb-2 tracking-wide leading-[1.1] ">
                    Store your tokens.
                  </div>
                  <div className="text-3xl font-normal text-slate-700 leading-[1.1] tracking-wide ">
                    MEW supports ETH and all ERC-20 tokens !
                  </div>
                </div>
                <div className="self-end sm:self-center sm:justify-self-end ">
                  <img
                    src="https://www.myetherwallet.com/mew-landing-page/_nuxt/store.CIzsRSds.png"
                    alt="images"
                    className="lg:object-left object-cover h-[300px] sm:h-[400px] lg:h-[570px] "
                  />
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="rounded-[32px] bg-slate-50 w-full shadow-sm">
              <div className="grid grid-cols-2 h-[544px] sm:h-fit">
                <div className="block self-center py-5 px-5 lg:px-12 text-left max-w-[406px] xl:max-w-[560px]">
                  <div className="text-5xl font-medium text-slate-700 mb-2 tracking-wide leading-[1.1] ">
                    Buy & sell
                  </div>
                  <div className="text-3xl font-normal text-slate-700 leading-[1.1] tracking-wide ">
                    Buy & sell crypto with ease. Pay however you like.
                  </div>
                </div>
                <div className="self-end sm:self-center sm:justify-self-end ">
                  <img
                    src="https://www.myetherwallet.com/mew-landing-page/_nuxt/buy.B9ROPqBn.png"
                    alt="images"
                    className="lg:object-left object-cover h-[300px] sm:h-[400px] lg:h-[570px] "
                  />
                </div>
              </div>
            </div>{" "}
          </CarouselItem>
          <CarouselItem>
            {" "}
            <div className="rounded-[32px] bg-slate-50 w-full shadow-sm">
              <div className="grid grid-cols-2 h-[544px] sm:h-fit">
                <div className="block self-center py-5 px-5 lg:px-12 text-left max-w-[406px] xl:max-w-[560px]">
                  <div className="text-5xl font-medium text-slate-700 mb-2 tracking-wide leading-[1.1] ">
                    Swap.
                  </div>
                  <div className="text-3xl font-normal text-slate-700 leading-[1.1] tracking-wide ">
                    Swap ETH,ERC-20 tokens and even BTC via our integrated
                    decentralized partners without relying on centralized
                    exchanges. We find the best price for you !
                  </div>
                </div>
                <div className="self-end sm:self-center sm:justify-self-end ">
                  <img
                    src="https://www.myetherwallet.com/mew-landing-page/_nuxt/swap.CHqoovDS.png"
                    alt="images"
                    className="lg:object-left object-cover h-[300px] sm:h-[400px] lg:h-[570px] "
                  />
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        {/* button */}
        <div className="flex justify-center items-center mt-3">
          <button type="button" className="rounded-full h-[40px] w-[40px] ">
            <CarouselPrevious />
          </button>
          <CarouselDots />
          <button type="button" className="rounded-full h-[40px] w-[40px] ">
            <CarouselNext />
          </button>
        </div>
      </Carousel>
    </div>
  );
};

export default SlideTokens;
