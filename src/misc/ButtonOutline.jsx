import React from "react";

const ButtonOutline = (children) => {
  return (
    <button className={"font-semibold tracking-wide py-2 px-5 text-sm font-inter sm:px-8 border border-primary text-primary bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-primary-400 hover:text-white-500 transition-all hover:shadow-orange-600 hover:shadow-sm" + (children.addClass ? ` ${children.addClass}` : "")}>
      {" "}
      {children.content}
    </button>
  );
};

export default ButtonOutline;
