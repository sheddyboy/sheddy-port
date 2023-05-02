import { Variants, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Card = ({ src, variants }: { src: string; variants: Variants }) => {
  return (
    <motion.div
      variants={variants}
      className=" flex justify-center items-center rounded-[5px] w-[100px] min-h-[100px] sm:w-[173px] sm:min-h-[125px] bg-white"
    >
      <Image
        alt="skill"
        src={src}
        width={173}
        height={125}
        className="w-[60px] sm:w-fit"
      />
    </motion.div>
  );
};

export default Card;
