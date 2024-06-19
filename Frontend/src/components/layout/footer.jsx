import React from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Slack,
  Gitlab,
  Codepen,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="max-w-full bg-gradient-to-r from-zinc-50 to-zinc-100 shadow-lg rounded-lg p-6">
      <div className="max-w-[1392px] px-10 mx-auto pt-[80px] mb-5 ">
        <div className="grid grid-cols-1 gap-[42px]">
          <div className="grid grid-cols-1 md:grid-cols-4 justify-items-start content-start gap-[80px] text-slate-700">
            <div className="grid grid-cols-1 gap-3 content-start">
              <a
                href="/"
                className="font-medium text-base hoverOpacity leading-[22px] hover:text-slate-400 "
              >
                About us
              </a>
              <a
                href="/"
                className="font-medium text-base hoverOpacity leading-[22px] hover:text-slate-400 "
              >
                Careers
              </a>
              <a
                href="/"
                className="font-medium text-base hoverOpacity leading-[22px] hover:text-slate-400 "
              >
                How it works
              </a>
              <a
                href="/"
                className="font-medium text-base hoverOpacity leading-[22px] hover:text-slate-400 "
              >
                Team
              </a>
              <a
                href="/"
                className="font-medium text-base hoverOpacity leading-[22px] hover:text-slate-400 "
              >
                Advertise With Us
              </a>
              <a
                href="/"
                className="mt-8 font-medium text-base hoverOpacity leading-[22px] hover:text-slate-400 "
              >
                Privacy
              </a>
              <a
                href="/"
                className="font-medium text-base hoverOpacity leading-[22px] hover:text-slate-400 "
              >
                Terms
              </a>
              <a
                href="/"
                className="font-medium text-base hoverOpacity leading-[22px] hover:text-slate-400 "
              >
                Bug Bounty
              </a>
            </div>
            <div className="grid grid-cols-1 gap-3 content-start">
              <a
                href="/"
                className="font-medium text-base hoverOpacity leading-[22px] hover:text-slate-400 "
              >
                MEW Mobile App
              </a>
              <a
                href="/"
                className="font-medium text-base hoverOpacity leading-[22px] hover:text-slate-400 "
              >
                Enkrypt
              </a>
              <a
                href="/"
                className="font-medium text-base hoverOpacity leading-[22px] hover:text-slate-400 "
              >
                MEW Portfolio Manager
              </a>
              <a
                href="/"
                className="font-medium text-base hoverOpacity leading-[22px] hover:text-slate-400 "
              >
                ethVM
              </a>

              <a
                href="/"
                className="mt-8 font-medium text-base hoverOpacity leading-[22px] hover:text-slate-400 "
              >
                Blog
              </a>
              <a
                href="/"
                className="font-medium text-base hoverOpacity leading-[22px] hover:text-slate-400 "
              >
                Press Kit
              </a>
            </div>
            <div className="grid grid-cols-1 gap-3 content-start">
              <a
                href="/"
                className="font-medium text-base hoverOpacity leading-[22px] hover:text-slate-400 "
              >
                Help Center
              </a>
              <a
                href="/"
                className="font-medium text-base hoverOpacity leading-[22px] hover:text-slate-400 "
              >
                FAQ
              </a>
              <a
                href="/"
                className="font-medium text-base hoverOpacity leading-[22px] hover:text-slate-400 "
              >
                Customer Support
              </a>
              <a
                href="/"
                className="font-medium text-base hoverOpacity leading-[22px] hover:text-slate-400 "
              >
                Security Support
              </a>

              <a
                href="/"
                className="font-medium text-base hoverOpacity leading-[22px] hover:text-slate-400 "
              >
                Verify Message
              </a>
              <a
                href="/"
                className="font-medium text-base hoverOpacity leading-[22px] hover:text-slate-400 "
              >
                Convert Units
              </a>
              <a
                href="/"
                className="font-medium text-base hoverOpacity leading-[22px] hover:text-slate-400 "
              >
                Send Offline Helper
              </a>
            </div>
            <div className="grid grid-cols-1 gap-3 content-start">
              <p className="mb-5 text-slate-500 max-w-96">
                Help us keep MEW free and open-source, your donations go a long
                way towards making that possible.
              </p>
              <a
                href="/"
                target="_blank"
                className="flex items-center py-2 font-medium text-base hoverOpacity hover:text-slate-400 text-slate-700 leading-[22px]"
              >
                <span>
                  <img
                    src="https://www.myetherwallet.com/mew-landing-page/_nuxt/donate-eth.CqPNzgt3.svg"
                    alt="icons"
                    className="pr-2"
                  />
                </span>
                Ethereum Donation
              </a>
              <a
                href="/"
                target="_blank"
                className="flex items-center py-2 font-medium text-base hoverOpacity hover:text-slate-400 text-slate-700 leading-[22px]"
              >
                <span>
                  <img
                    src="https://www.myetherwallet.com/mew-landing-page/_nuxt/donate-btc.B_ZENRkA.svg"
                    alt="icons"
                    className="pr-2"
                  />
                </span>
                Bitcoin Donation
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-start content-start gap-[80px] text-slate-700">
            <div className="text-slate-500 order-last md:order-1">
              <div className="flex items-center space-x-2 mb-[42px]">
                <Switch
                  id="data-tracking"
                  className="data-[state=checked]:bg-blue-700 data-[state=unchecked]:bg-slate-700"
                />
                <Label htmlFor="data-tracking">Data Tracking Off</Label>
              </div>
              <p className="mb-[10px]">
                <strong>&copy;</strong> 2024 MyEtherWallet. All rights reserved.
              </p>
              <p className="mb-[10px]">
                Pricing taken from
                <a
                  href="/"
                  className="underline ml-2 font-medium"
                  target="_blank"
                >
                  CoinGecko
                </a>
              </p>
              <a href="/" className="no-underline">
                Version: v6.9.9-landing-page.1
              </a>
            </div>
            <div className="order-1 md:order-last text-slate-700">
              <h5 className="mb-3 font-bold text-base">Join MEW Community</h5>
              <div className="flex flex-wrap gap-3">
                <Facebook className="p-2 border border-gray-200 rounded-full w-12 h-12 hoverOpacity hover:opacity-50 hover:shadow-sm cursor-pointer" />
                <Twitter className="p-2 border border-gray-200 rounded-full w-12 h-12 hoverOpacity hover:opacity-50 hover:shadow-sm cursor-pointer" />
                <Instagram className="p-2 border border-gray-200 rounded-full w-12 h-12 hoverOpacity hover:opacity-50 hover:shadow-sm cursor-pointer" />
                <Linkedin className="p-2 border border-gray-200 rounded-full w-12 h-12 hoverOpacity hover:opacity-50 hover:shadow-sm cursor-pointer" />
                <Github className="p-2 border border-gray-200 rounded-full w-12 h-12 hoverOpacity hover:opacity-50 hover:shadow-sm cursor-pointer" />
                <Slack className="p-2 border border-gray-200 rounded-full w-12 h-12 hoverOpacity hover:opacity-50 hover:shadow-sm cursor-pointer" />
                <Gitlab className="p-2 border border-gray-200 rounded-full w-12 h-12 hoverOpacity hover:opacity-50 hover:shadow-sm cursor-pointer" />
                <Codepen className="p-2 border border-gray-200 rounded-full w-12 h-12 hoverOpacity hover:opacity-50 hover:shadow-sm cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
