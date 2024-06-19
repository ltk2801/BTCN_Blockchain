import React from "react";

const Token = ({ token }) => {
  return (
    <a
      href={token.link}
      className="p-4 bg-zinc-100 shadow text-2xl flex items-center rounded-full hover:bg-gray-200 hover:shadow-md hoverOpacity"
      target="blank"
    >
      <img
        src={token.img}
        alt={token.name}
        className="max-h-[24px] lg:max-h-[42px] pr-2"
      />
      <p>{token.name} </p>
    </a>
  );
};

export default Token;
