"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Variants, motion } from "framer-motion";

const Navbar = () => {
  const parentVariant: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };
  const childrenVariant: Variants = {
    initial: { opacity: 0, y: "70px" },
    animate: { opacity: 1, y: "0px", transition: { duration: 0.7 } },
  };
  return (
    <nav className="pt-[30px] absolute left-0 right-0 z-[1]">
      <div className="container flex justify-between">
        <motion.div
          initial={{ opacity: 0, x: "-20px" }}
          animate={{ opacity: 1, x: "0px", transition: { duration: 0.7 } }}
        >
          <Link href="/">
            <Image src="logo.svg" alt="logo" width={67} height={0} />
          </Link>
        </motion.div>
        <motion.div
          className="flex gap-3 sm:gap-8"
          variants={parentVariant}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={childrenVariant}>
            <Link href="/" className="">
              Home
            </Link>
          </motion.div>
          <motion.div variants={childrenVariant}>
            <a href="#contact" className="">
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
