import React from "react";
import { ShieldCheck } from "lucide-react";

const Method = ({ official, title, icon, content }) => {
  return (
    <div className="relative max-w-[650px] w-full">
      {official && (
        <div className="absolute flex items-center top-[14px] right-[16px] bg-green-access text-white px-[10px] py-[6px] rounded-[30px] z-[1] ">
          <ShieldCheck className="mr-1 fill-white stroke-green-access" />
          <span className="font-medium">Official</span>
        </div>
      )}

      <button className="h-auto min-h-[157px] p-4 bg-white tracking-[.5px] rounded-[10px] mb-5 flex items-center justify-center w-full hoverOpacity  hover:bg-gray-200 hover:shadow-md shadown">
        <span className="max-w-full flex flex-auto text-slate-700 items-center  text-left ">
          <img src={icon} alt={title} className=" ml-5 mr-6 h-[70px]" />
          <div className="px-3">
            <div className="flex items-center font-bold text-xl ">{title}</div>
            <div className="mt-3 leading-6 text-sm ">{content}</div>
          </div>
        </span>
      </button>
    </div>
  );
};

export default Method;
