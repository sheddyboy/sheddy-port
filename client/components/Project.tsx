"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Tags from "./Tags";
import Button from "./Button";
import { ProjectData } from "@/types";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";

const Project = ({ project }: { project: ProjectData }) => {
  const mobileAndTabs = useMediaQuery("(max-width: 768px)");
  const title = project.attributes.title;
  const desc = project.attributes.desc;
  const thumbnail = project.attributes.thumbnailUrl;
  const tags = project.attributes.tags.data;
  const slug = project.attributes.slug;

  const [truncatedText, setTruncatedText] = useState(desc);

  useEffect(() => {
    if (desc.length > 30) {
      setTruncatedText(desc.split(" ").splice(0, 30).join(" ") + "...");
    }
  }, [desc]);
  return (
    <div className=" flex flex-col gap-y-12 items-center justify-between lg:flex-row">
      <motion.div
        initial={{ opacity: 0, x: "-70px" }}
        whileInView={{
          opacity: 1,
          x: "0px",
          transition: { duration: mobileAndTabs ? 0.4 : 0.7 },
        }}
        viewport={{ once: true, amount: 0.3 }}
        className=" lg:w-1/2 flex flex-col items-center  lg:items-start "
      >
        <span className=" font-mulish font-bold text-[10px] xl:text-[14px] text-[#B7B4B9] ">
          LATEST WORK
        </span>
        <h2 className="text-center md:text-left text-[34px] leading-none font-lato font-bold  text-pryText mb-[20px]   lg:text-[34px] xl:text-[56px]">
          {title}
        </h2>
        <div className=" flex gap-[16px] mb-[20px]">
          {tags.map((tag) => (
            <Tags key={tag.id} active={true} title={tag.attributes.title} />
          ))}
        </div>
        <p className=" max-w-[400px] text-justify lg:text-left font-mulish font-normal text-[18px] leading-[180%] lg:w-[300px] xl:w-[400px] mb-[30px] lg:text-[12px] xl:text-[18px]">
          {truncatedText}
        </p>
        <Button type="pry" value="See This Project" link={slug} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: "70px" }}
        whileInView={{
          opacity: 1,
          y: "0px",
          transition: { duration: mobileAndTabs ? 0.4 : 0.8 },
        }}
        viewport={{ once: true, amount: 0.5 }}
        className="lg:w-1/2"
      >
        <Image
          alt="project"
          src={thumbnail}
          width={544}
          height={0}
          // className=" w-fit"
        />
      </motion.div>
    </div>
  );
};

export default Project;
