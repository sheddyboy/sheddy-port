"use client";
import Button from "@/components/Button";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const mobile = useMediaQuery("(max-width: 450px)");
  const [text, helper] = useTypewriter({
    words: [
      `Frontend ${mobile ? "Dev" : "Developer"}`,
      `React ${mobile ? "Dev" : "Developer"}`,
      `MERN ${mobile ? "Dev" : "Developer"}`,
      `Webflow ${mobile ? "Dev" : "Developer"}`,
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 2500,
  });
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
    <section className="bg-pryBg pt-[112px] lg:pb-[280px] overflow-x-clip">
      <div className="container ">
        <motion.h1
          initial={{ opacity: 0, y: "-50px" }}
          animate={{
            opacity: 1,
            y: "0px",
            transition: { delay: 0.3, duration: 0.7 },
          }}
          className=" text-center lg:text-left max-w-[700px] xl:max-w-[950px] text-[36px] sm:text-[40px] md:text-[56px] lg:text-[40px] xl:text-[56px] mb-[10px] lg:mb-[18px] xl:mb-[25px] leading-[111.9%] font-montserrat text-[#1a1818;] font-medium "
        >
          Hi, I’m Shadrack,
          <span className=" font-semibold text-pryText"> Web Designer </span>
          and <span className=" block lg:inline"></span>
          <span className=" font-semibold text-pryText">
            {text}
            <Cursor />
            {mobile ? "" : " "}
          </span>
        </motion.h1>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-7/12 ">
            <motion.p
              initial={{ opacity: 0, y: "30px" }}
              animate={{
                opacity: 1,
                y: "0px",
                transition: { delay: 0.4, duration: 0.7 },
              }}
              className=" text-center lg:text-left  leading-[180%] font-mulish font-normal mb-[20px] lg:mb-[30px] xl:mb-[54px] mx-auto max-w-[700px] lg:mx-0 lg:max-w-[400px] xl:max-w-[500px] text-[16px] lg:text-[14px] xl:text-[18px]"
            >
              I design and build beautiful websites for businesses around the
              globe. If you need a modern and powerful website, send me an
              email. If we are a good fit, I will give you a time and cost
              estimate.
            </motion.p>
            <motion.div
              className="flex flex-col items-center sm:flex-row gap-3 justify-center lg:justify-start"
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
          <div className=" lg:w-5/12 relative ">
            <motion.div
              className="relative vs:left-[60px]  sm:left-[70px] lg:absolute  lg:top-[-160px] lg:left-[-220px]"
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
                className="min-w-[400px] lg:min-w-[900px] xl:min-w-[1000px]"
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
