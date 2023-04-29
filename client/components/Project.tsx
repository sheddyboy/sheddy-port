"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Tags from "./Tags";
import Button from "./Button";
import { ProjectData } from "@/types";
import { motion } from "framer-motion";

const Project = ({ project }: { project: ProjectData }) => {
  const title = project.attributes.title;
  const desc = project.attributes.desc;
  const thumbnail = project.attributes.thumbnail.data.attributes.url;
  const tags = project.attributes.tags.data;
  const slug = project.attributes.slug;

  const [truncatedText, setTruncatedText] = useState(desc);

  useEffect(() => {
    if (desc.length > 30) {
      setTruncatedText(desc.split(" ").splice(0, 30).join(" ") + "...");
    }
  }, [desc]);
  return (
    <div className=" flex justify-between">
      <motion.div
        initial={{ opacity: 0, x: "-70px" }}
        whileInView={{ opacity: 1, x: "0px", transition: { duration: 0.7 } }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <span className=" font-mulish font-bold text-[14px] text-[#B7B4B9] ">
          LATEST WORK
        </span>
        <h2 className=" font-lato font-bold text-[56px] text-pryText mb-[10px] leading-[67px]">
          {title}
        </h2>
        <div className=" flex gap-[16px] mb-[30px]">
          {tags.map((tag) => (
            <Tags key={tag.id} active={true} title={tag.attributes.title} />
          ))}
        </div>
        <p className=" font-mulish font-normal text-[18px] leading-[180%] w-[400px] mb-[30px] ">
          {truncatedText}
        </p>
        <Button type="pry" value="See This Project" link={slug} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: "70px" }}
        whileInView={{ opacity: 1, y: "0px", transition: { duration: 0.8 } }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image
          alt="project"
          src={`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}${thumbnail}`}
          width={544}
          height={0}
          className=" w-fit"
        />
      </motion.div>
    </div>
  );
};

export default Project;
