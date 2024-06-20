import React from "react";

import { useNavigate } from "react-router-dom";

const MethodSoftware = ({ title, icon, content, access }) => {
  const navigate = useNavigate();

  return (
    <div
      className="px-8 py-6 border border-gray-200 rounded-xl shadow-sm mb-6 cursor-pointer hoverOpacity hover:bg-gray-100 hover:shadow "
      onClick={() => {
        if (title === "Private Key") {
          if (access) {
            navigate("/wallet/access/software/private-key");
          } else {
            navigate("/wallet/create/software/private-key");
          }
        } else {
          return;
        }
      }}
    >
      <div className="flex flex-row items-center justify-between gap-5  ">
        <div className="basis-4/5 flex flex-col gap-2 justify-center">
          <h3 className="text-2xl font-bold tracking-wide">{title}</h3>
          <p className="text-[18px] leading-7 ">{content}</p>
        </div>
        <div className="flex justify-center items-center basis-1/5">
          <img src={icon} alt="images" className="h-[90px] w-[90px]" />
        </div>
      </div>
    </div>
  );
};

export default MethodSoftware;
