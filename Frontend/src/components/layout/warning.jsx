import React from "react";
import { TriangleAlert } from "lucide-react";

const Warning = () => {
  return (
    <div className=" pr-10 pl-20 py-6   rounded-xl shadow-sm mb-6  bg-amber-100 relative flex flex-col justify-center gap-1  ">
      <TriangleAlert className="absolute top-6 left-6 fill-orange-600 stroke-amber-100 w-10 h-10" />
      <h1 className="text-xl text-blue-access uppercase font-medium">
        not recommended
      </h1>
      <p className="text-base leading-6">
        This information is sensitive and these options should only be used in
        offline settings by experienced crypto users.
      </p>
      <span className="text-base font-bold text-blue-700 cursor-pointer">
        Learn More
      </span>
    </div>
  );
};

export default Warning;
