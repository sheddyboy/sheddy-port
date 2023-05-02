import Link from "next/link";
import React from "react";

interface ButtonProps {
  type: "pry" | "sec";
  value: string;
  link?: string;
  samePage?: boolean;
  projectPage?: boolean;
}

const Button = ({ type, value, link, samePage, projectPage }: ButtonProps) => {
  return !link ? (
    <button className="group border border-black rounded-[5px] py-[10px] w-[200px] inline-block text-center relative text-[13px] lg:text-[14px] xl:text-[16px]">
      <div
        className={`rounded-[5px] py-[10px] w-full h-full ${
          type === "pry" ? "bg-pryBtn" : "bg-secBtn"
        } absolute top-[5px] left-[5px] group-hover:top-[0px] group-hover:left-[0px] transition-all ease-linear duration-200`}
      ></div>
      {value}
    </button>
  ) : samePage ? (
    <a
      href={link}
      className="group border border-black rounded-[5px] py-[10px] w-[200px] inline-block text-center relative text-[13px] lg:text-[14px] xl:text-[16px]"
    >
      <div
        className={`rounded-[5px] py-[10px] w-full h-full ${
          type === "pry" ? "bg-pryBtn" : "bg-secBtn"
        } absolute top-[5px] left-[5px] group-hover:top-[0px] group-hover:left-[0px] transition-all ease-linear duration-200`}
      ></div>
      {value}
    </a>
  ) : (
    <Link
      href={link}
      target={projectPage ? "_blank" : ""}
      className="group border border-black rounded-[5px] py-[10px] w-[200px] inline-block text-center relative text-[13px] lg:text-[14px] xl:text-[16px]"
    >
      <div
        className={`rounded-[5px] py-[10px] w-full h-full ${
          type === "pry" ? "bg-pryBtn" : "bg-secBtn"
        } absolute top-[5px] left-[5px] group-hover:top-[0px] group-hover:left-[0px] transition-all ease-linear duration-200`}
      ></div>
      {value}
    </Link>
  );
};

export default Button;
