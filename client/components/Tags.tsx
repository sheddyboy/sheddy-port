"use client";
import React from "react";

const Tags = ({
  title,
  active,
  onClick,
}: {
  title: string;
  active: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`rounded-[5px] px-[12px] py-[6px] font-mulish font-bold text-[13px] ${
        active ? " bg-pryText text-white" : " bg-white text-pryText"
      }`}
      onClick={() => {
        onClick && onClick();
      }}
    >
      {title}
    </button>
  );
};

export default Tags;
