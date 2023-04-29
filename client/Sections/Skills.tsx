"use client";
import Card from "@/components/Card";
import { Variants, motion } from "framer-motion";
import React from "react";

const Skills = () => {
  const parentVariant: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { delayChildren: 0.2 },
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
    <section className=" bg-secBg py-[150px]">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: "40px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          viewport={{ once: true, margin: "-100px" }}
          className=" text-center font-montserrat font-bold text-secText text-[50px] mb-[50px]"
        >
          Languages And Tools
        </motion.h2>
        <motion.div
          variants={parentVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          className=" grid grid-cols-5 gap-[20px]"
        >
          <Card variants={childrenVariant} src="/html_logo.svg" />
          <Card variants={childrenVariant} src="/css_logo.svg" />
          <Card variants={childrenVariant} src="/js_logo.svg" />
          <Card variants={childrenVariant} src="/ts_logo.svg" />
          <Card variants={childrenVariant} src="/git_logo.svg" />
          <Card variants={childrenVariant} src="/mongodb_logo.svg" />
          <Card variants={childrenVariant} src="/express_logo.svg" />
          <Card variants={childrenVariant} src="/react_logo.svg" />
          <Card variants={childrenVariant} src="/nodejs_logo.svg" />
          <Card variants={childrenVariant} src="/nextjs_logo.svg" />
          <Card variants={childrenVariant} src="/webflow_logo.svg" />
          <Card variants={childrenVariant} src="/redux_logo.svg" />
          <Card variants={childrenVariant} src="/mui_logo.svg" />
          <Card variants={childrenVariant} src="/tailwind_logo.svg" />
          <Card variants={childrenVariant} src="/strapi_logo.svg" />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
