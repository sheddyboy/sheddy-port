import { Variants, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Card = ({ src, variants }: { src: string; variants: Variants }) => {
  return (
    <motion.div
      variants={variants}
      className=" flex justify-center items-center rounded-[5px] w-[173px] min-h-[125px] bg-white"
    >
      <Image alt="skill" src={src} width={173} height={125} className="w-fit" />
    </motion.div>
  );
};

export default Card;
