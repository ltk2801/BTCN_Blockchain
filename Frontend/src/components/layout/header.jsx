import React, { useState, useEffect } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useAuth } from "@/contexts/authContext";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();

  const { inAccessWallet, inCreateWallet, currentWallet } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-10 h-[104px] py-5  `}>
      <div
        className={` max-w-[1392px] h-full mx-auto rounded-[52px] transition-all duration-500 ${
          scrolled || inAccessWallet || inCreateWallet
            ? "bg-white-95 shadow-md"
            : "bg-transparent"
        } `}
      >
        <div className="flex flex-row items-center justify-between p-4 my-auto h-full">
          {/* logo */}
          <a href="/" className="py-2">
            <img
              src="data:image/svg+xml,%3csvg%20width='113'%20height='32'%20viewBox='0%200%20113%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M16.0926%2031.158C24.4641%2031.158%2031.2505%2024.3715%2031.2505%2016.0001C31.2505%207.62858%2024.4641%200.842163%2016.0926%200.842163C7.72111%200.842163%200.934692%207.62858%200.934692%2016.0001C0.934692%2024.3715%207.72111%2031.158%2016.0926%2031.158Z'%20fill='%231896A4'%20/%3e%3cpath%20d='M16.8729%2021.0428C16.2577%2021.137%2015.6181%2021.1247%2014.9754%2020.9763C12.2731%2020.3525%2010.5881%2017.6559%2011.212%2014.9536C11.2581%2014.754%2011.3199%2014.5608%2011.3866%2014.3717L6.64306%2012.4324C6.48319%2012.8548%206.35157%2013.2874%206.24908%2013.7272C4.99377%2019.1645%208.38483%2024.5913%2013.8222%2025.8466C15.7285%2026.2868%2017.632%2026.1529%2019.3556%2025.5627L16.8729%2021.0428ZM21.0933%2015.4776L14.2122%2015.41L25.1613%2020.4557C25.4942%2019.7749%2025.7608%2019.0442%2025.9389%2018.2729C27.1942%2012.8356%2023.8031%207.40878%2018.3658%206.15348C16.1832%205.64959%2014.006%205.89596%2012.096%206.71969L14.6258%2011.2851C15.4715%2011.0211%2016.3722%2010.9874%2017.2353%2011.1875C19.3522%2011.6762%2020.8467%2013.4386%2021.0933%2015.4776Z'%20fill='white'%20/%3e%3cpath%20d='M39.1747%205.61121V26.3887H44.2105V14.7593L48.5361%2022.9838H51.1606L55.6996%2014.7593V26.3887H60.6624V5.61121H55.6996L49.9199%2016.101L44.4238%205.61121H39.1747ZM64.0224%205.61121H78.8884V9.86664H68.8898V13.6421H77.5045V17.7094H68.915V21.8582H79.127V26.3887H64.0224V5.61121ZM80.7326%205.61121H85.6926L92.5361%2019.8287L94.3073%2016L89.4147%205.61121H94.0968L96.2947%2010.08L97.9957%205.61121H103.385L99.1298%2016.101L100.974%2019.8287L106.4%205.61121H111.907L103.245%2026.3887H99.1663L96.8617%2021.353L94.8743%2026.3887H90.6582L80.7326%205.61121Z'%20fill='%230C5876'%20/%3e%3c/svg%3e"
              contain="true"
              alt="logo"
            />
          </a>
          {/* middle */}
          <div className="flex flex-row gap-x-8 items-center text-slate-700">
            <a
              href="/"
              className="font-medium text-lg hoverOpacity hover:text-slate-400 "
            >
              Buy Crypto
            </a>
            <a
              href="/"
              className="font-medium text-lg hoverOpacity hover:text-slate-400 "
            >
              Swap Tokens
            </a>
            <>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-medium text-lg p-0  hover:text-slate-400 hoverOpacity   ">
                      More Features
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="flex flex-col px-5 py-5 gap-4 min-w-56 max-w-full bg-white shadow-[0px_8px_16px_-6px_rgba(0,0,0,0.32)] rounded-2xl   ">
                      <NavigationMenuLink className="text-lg  hoverOpacity text-slate-700 cursor-pointer hover:text-slate-400">
                        NFT
                      </NavigationMenuLink>
                      <NavigationMenuLink className="text-lg  hoverOpacity text-slate-700 cursor-pointer hover:text-slate-400">
                        DApps
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-medium text-lg p-0  hover:text-slate-400 hoverOpacity  ">
                      Resources
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="flex flex-col px-5 py-3 gap-4 min-w-56 max-w-full bg-white shadow-[0px_8px_16px_-6px_rgba(0,0,0,0.32)] rounded-2xl top-10   ">
                      <NavigationMenuLink className="text-lg  hoverOpacity text-slate-700 cursor-pointer hover:text-slate-400">
                        Blog
                      </NavigationMenuLink>
                      <NavigationMenuLink className="text-lg  hoverOpacity text-slate-700 cursor-pointer hover:text-slate-400">
                        Help Center
                      </NavigationMenuLink>
                      <NavigationMenuLink className="text-lg  hoverOpacity text-slate-700 cursor-pointer hover:text-slate-400">
                        FAQ
                      </NavigationMenuLink>
                      <NavigationMenuLink className="text-lg  hoverOpacity text-slate-700 cursor-pointer hover:text-slate-400">
                        Customer Support
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-medium text-lg p-0  hover:text-slate-400 hoverOpacity ">
                      Products
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="grid grid-cols-2 py-4 px-5 gap-4 min-w-[600px] max-w-full bg-white shadow-[0px_8px_16px_-6px_rgba(0,0,0,0.32)] rounded-2xl    ">
                      <NavigationMenuLink className="flex items-center gap-1 hover:bg-gray-100 rounded-xl hoverOpacity cursor-pointer">
                        <div className="p-2 ">
                          <img
                            src="https://www.myetherwallet.com/mew-landing-page/_nuxt/mewwallet-logo.BvvzoP6u.svg"
                            alt="logo"
                            className="h-14 w-14 bg-white shadow-sm rounded-2xl"
                          />
                        </div>

                        <div className="flex flex-col justify-between gap-1 ">
                          <p className="text-base text-slate-700 font-bold">
                            MEW Mobile App
                          </p>
                          <p className="text-sm text-slate-700 font-light">
                            Mobile Wallet
                          </p>
                        </div>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="flex items-center gap-1 hover:bg-gray-100 rounded-xl hoverOpacity cursor-pointer">
                        <div className="p-2 ">
                          <img
                            src="data:image/svg+xml,%3csvg%20width='220'%20height='220'%20viewBox='0%200%20220%20220'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='220'%20height='220'%20fill='white'/%3e%3cpath%20d='M109.632%20189.632C153.814%20189.632%20189.632%20153.814%20189.632%20109.632C189.632%2065.4488%20153.814%2029.6316%20109.632%2029.6316C65.4488%2029.6316%2029.6316%2065.4488%2029.6316%20109.632C29.6316%20153.814%2065.4488%20189.632%20109.632%20189.632Z'%20fill='%231896A4'/%3e%3cpath%20d='M113.75%20136.246C110.503%20136.743%20107.127%20136.678%20103.735%20135.895C89.4732%20132.603%2080.5801%20118.371%2083.8727%20104.109C84.116%20103.055%2084.4426%20102.036%2084.7947%20101.037L59.7591%2090.8026C58.9153%2093.0318%2058.2207%2095.3146%2057.6797%2097.636C51.0545%20126.333%2068.9517%20154.975%2097.6487%20161.6C107.71%20163.923%20117.756%20163.216%20126.853%20160.101L113.75%20136.246ZM136.024%20106.874L99.7071%20106.518L157.494%20133.148C159.251%20129.554%20160.658%20125.698%20161.598%20121.627C168.223%2092.9304%20150.326%2064.2888%20121.629%2057.6636C110.11%2055.0042%2098.6191%2056.3045%2088.5384%2060.652L101.89%2084.7471C106.353%2083.354%20111.108%2083.1762%20115.663%2084.232C126.835%2086.8114%20134.723%2096.113%20136.024%20106.874Z'%20fill='white'/%3e%3c/svg%3e"
                            alt="logo"
                            className="h-14 w-14 bg-white shadow-sm rounded-2xl"
                          />
                        </div>

                        <div className="flex flex-col justify-between gap-1">
                          <p className="text-base text-slate-700 font-bold">
                            MEW Portfolio Manager
                          </p>
                          <p className="text-sm text-slate-700 font-light">
                            Web portfolio interface
                          </p>
                        </div>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="flex items-center gap-1 hover:bg-gray-100 rounded-xl hoverOpacity cursor-pointer">
                        <div className="p-2 ">
                          <img
                            src="https://www.myetherwallet.com/mew-landing-page/_nuxt/enkrypt-logo.CIIZCFlO.png"
                            alt="logo"
                            className="h-14 w-14 bg-white shadow-sm rounded-2xl"
                          />
                        </div>

                        <div className="flex flex-col justify-between gap-1">
                          <p className="text-base text-slate-700 font-bold">
                            Enkrypt
                          </p>
                          <p className="text-sm text-slate-700 font-light">
                            Browser extension wallet
                          </p>
                        </div>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="flex items-center gap-1 hover:bg-gray-100 rounded-xl hoverOpacity cursor-pointer">
                        <div className="p-2 ">
                          <img
                            src="data:image/svg+xml,%3csvg%20width='220'%20height='220'%20viewBox='0%200%20220%20220'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='220'%20height='220'%20fill='%23091E41'/%3e%3cpath%20d='M165.21%2058.4752L137.118%20125.094L119.81%2084.3113L111.704%20102.167L137.131%20162.049L162.273%20103.167L176.256%20156.409H191.199L165.21%2058.4752Z'%20fill='%230065FF'/%3e%3cpath%20d='M99.3596%2065.3054L72.0452%20125.824L44.9363%2065.3054H28.9004L71.8814%20161.467L115.518%2065.3054H99.3596Z'%20fill='%230065FF'/%3e%3c/svg%3e"
                            alt="logo"
                            className="h-14 w-14 bg-white shadow-sm rounded-2xl"
                          />
                        </div>

                        <div className="flex flex-col justify-between gap-1 ">
                          <p className="text-base text-slate-700 font-bold">
                            ethVM
                          </p>
                          <p className="text-sm text-slate-700 font-light">
                            Blockchain explorer
                          </p>
                        </div>
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </>
          </div>
          {/* button */}

          <div className="flex-none">
            {inAccessWallet ? (
              <> </>
            ) : currentWallet ? (
              <button
                className="flex items-center justify-center w-[190px] text-center px-4 py-2 bg-black text-white h-10 rounded-3xl hoverOpacity  hover:opacity-60"
                onClick={() => navigate("/wallet/dashboard")}
              >
                <span className="text-lg text-center font-medium tracking-[.6px] ">
                  Dashboard
                </span>
              </button>
            ) : (
              <button
                className="flex items-center justify-center w-[190px] text-center px-4 py-2 bg-black text-white h-10 rounded-3xl hoverOpacity  hover:opacity-60"
                onClick={() => navigate("/wallet/access")}
              >
                <span className="text-lg text-center font-medium tracking-[.6px] ">
                  Access my wallet
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
