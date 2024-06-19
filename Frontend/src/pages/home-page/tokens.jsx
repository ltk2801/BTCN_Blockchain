import React from "react";
import Token from "./token";
import { MoveRight } from "lucide-react";

const tokens = [
  {
    id: "1",
    name: "Ethereum (ETH)",
    link: "https://www.myetherwallet.com/pages/best-wallet-for/eth",
    img: "https://strapi.mewapi.io/uploads/thumbnail_ethereum_eth_logo_fe7073d75c.png",
  },
  {
    id: "2",
    name: "Chromia (CHR)",
    link: "https://www.myetherwallet.com/pages/best-wallet-for/chr",
    img: "https://strapi.mewapi.io/uploads/thumbnail_CHROMIA_SYMBOL_RGB_2f30d01776.png",
  },
  {
    id: "3",
    name: "Nuco.cloud (NCDT)",
    link: "https://www.myetherwallet.com/pages/best-wallet-for/ncdt",
    img: "https://strapi.mewapi.io/uploads/thumbnail_image_1668_92e26c2de6.png",
  },
  {
    id: "4",
    name: "Ternoa (CAPS)",
    link: "https://www.myetherwallet.com/pages/best-wallet-for/caps",
    img: "https://strapi.mewapi.io/uploads/thumbnail_token_symbol_colored_62d31bb86a.png",
  },
  {
    id: "5",
    name: "Ethereum Classic (ETC)",
    link: "https://www.myetherwallet.com/pages/best-wallet-for/etc",
    img: "https://strapi.mewapi.io/uploads/thumbnail_ethereum_classic_etc_logo_bf34601fda.png",
  },
  {
    id: "6",
    name: "Victoria VR (VR)",
    link: "https://www.myetherwallet.com/pages/best-wallet-for/vr",
    img: "https://strapi.mewapi.io/uploads/thumbnail_vrlol_f61864e5bd.png",
  },
  {
    id: "7",
    name: "Optimism (OP)",
    link: "https://www.myetherwallet.com/pages/best-wallet-for/op",
    img: "https://strapi.mewapi.io/uploads/thumbnail_optimism_logo_98185389ff.png",
  },
  {
    id: "8",
    name: "The Graph (GRT)",
    link: "https://www.myetherwallet.com/pages/best-wallet-for/grt",
    img: "https://strapi.mewapi.io/uploads/thumbnail_the_graph_grt_logo_32b59b4111.png",
  },
  {
    id: "9",
    name: "Wrapped Bitcoin (WBTC)",
    link: "https://www.myetherwallet.com/pages/best-wallet-for/wbtc",
    img: "https://strapi.mewapi.io/uploads/thumbnail_wrapped_bitcoin_wbtc_logo_cadc672dda.png",
  },
  {
    id: "10",
    name: "Venus (XVS)",
    link: "https://www.myetherwallet.com/pages/best-wallet-for/xvs",
    img: "https://strapi.mewapi.io/uploads/thumbnail_XVS_e6b21e4add.png",
  },
  {
    id: "11",
    name: "Axelar (AXL)",
    link: "https://www.myetherwallet.com/pages/best-wallet-for/axl",
    img: "https://strapi.mewapi.io/uploads/thumbnail_AXELAR_BLACK_fdfb333573.png",
  },
  {
    id: "12",
    name: "Arbitrum (ARB)",
    link: "https://www.myetherwallet.com/pages/best-wallet-for/arb",
    img: "https://strapi.mewapi.io/uploads/thumbnail_arbitrum_shield_3f24102a28.png",
  },
  {
    id: "13",
    name: "Bella Protocol (BEL)",
    link: "https://www.myetherwallet.com/pages/best-wallet-for/bel",
    img: "https://strapi.mewapi.io/uploads/thumbnail_image_1660_ddfbad3863.png",
  },
  {
    id: "14",
    name: "Moonbeam (GLMR)",
    link: "https://www.myetherwallet.com/pages/best-wallet-for/glmr",
    img: "https://strapi.mewapi.io/uploads/thumbnail_moonbeam_large_d21f6b001f.png",
  },
  {
    id: "15",
    name: "DIA (DIA)",
    link: "https://www.myetherwallet.com/pages/best-wallet-for/dia",
    img: "https://strapi.mewapi.io/uploads/thumbnail_image_1653_418dc6fea6.png",
  },
  {
    id: "16",
    name: "Decentraland (MANA)",
    link: "https://www.myetherwallet.com/pages/best-wallet-for/mana",
    img: "https://strapi.mewapi.io/uploads/thumbnail_decentraland_mana_logo_36223f6645.png",
  },
];

const Tokens = () => {
  return (
    <div>
      <div className="flex">
        <h2 className="basis-full md:basis-2/3 mb-10 md:mb-16 xl:mb-18  text-6xl font-bold text-slate-700 leading-[1.1]">
          MEW supports ETH and all ERC-20 tokens!
        </h2>
      </div>
      <div className="flex flex-wrap gap-6">
        {tokens.map((tk) => (
          <Token key={tk.id} token={tk} />
        ))}
        <a
          href="/"
          className="rounded-full flex bg-blue-700 items-center shadow py-4 px-6  text-white font-medium hoverOpacity hover:bg-blue-500"
        >
          <p className="text-2xl text-white pr-3">Get Tokens</p>
          <MoveRight className="fill-white w-8 h-8" />
        </a>
      </div>
    </div>
  );
};

export default Tokens;
