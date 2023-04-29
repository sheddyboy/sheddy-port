"use client";
import Button from "@/components/Button";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Hero = () => {
  const parentVariant: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.7 },
    },
  };
  const childrenVariant: Variants = {
    initial: { opacity: 0, y: "70px" },
    animate: {
      opacity: 1,
      y: "0px",
      transition: { duration: 0.7 },
    },
  };
  return (
    <section className="bg-pryBg pt-[112px] pb-[280px] overflow-x-clip">
      <div className="container ">
        <motion.h1
          initial={{ opacity: 0, y: "-50px" }}
          animate={{
            opacity: 1,
            y: "0px",
            transition: { delay: 0.3, duration: 0.7 },
          }}
          className=" text-6xl mb-[25px] leading-[111.9%] font-montserrat text-[#1a1818;] font-medium"
        >
          Hi, I’m Shadrack,
          <span className=" font-semibold text-pryText"> Web Designer </span>and
          <br />a
          <span className=" font-semibold text-pryText">
            {" "}
            Frontend Developer
          </span>
        </motion.h1>
        <div className="flex">
          <div className="w-7/12">
            <motion.p
              initial={{ opacity: 0, y: "30px" }}
              animate={{
                opacity: 1,
                y: "0px",
                transition: { delay: 0.4, duration: 0.7 },
              }}
              className=" leading-[180%] font-mulish font-normal mb-[54px] max-w-[500px]"
            >
              I design and build beautiful websites for businesses around the
              globe. If you need a modern and powerful website, send me an
              email. If we are a good fit, I will give you a time and cost
              estimate.
            </motion.p>
            <motion.div
              className="flex gap-6 "
              variants={parentVariant}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={childrenVariant}>
                <Button
                  type="pry"
                  value="My work"
                  samePage={true}
                  link="#myWork"
                />
              </motion.div>
              <motion.div variants={childrenVariant}>
                <Button
                  type="sec"
                  value="Contact"
                  samePage={true}
                  link="#contact"
                />
              </motion.div>
            </motion.div>
          </div>
          <div className=" w-5/12 relative ">
            <motion.div
              className=" absolute top-[-160px] left-[-220px]"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: ["-5px", "5px", "-5px"],
                transition: {
                  duration: 0.8,
                  delay: 0.7,
                  y: { repeat: Infinity, duration: 8, ease: "easeInOut" },
                },
              }}
            >
              <Image
                className=" max-w-none"
                src="/hero.png"
                alt="hero"
                width={1000}
                height={0}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
