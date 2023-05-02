"use client";
import Project from "@/components/Project";
import Tags from "@/components/Tags";
import { ProjectData, TagsData } from "@/types";
import { motion } from "framer-motion";
import React, { useState } from "react";

const MyWork = ({
  projects,
  tags,
}: {
  projects: ProjectData[];
  tags: TagsData[];
}) => {
  const structuredTags = tags.map((tag) => ({
    id: tag.id,
    title: tag.attributes.title,
    active: false,
  }));
  const [tagFilters, setTagFilters] = useState([
    { id: 0, title: "All", active: true },
    ...structuredTags,
  ]);
  const [projectsFilter, setProjectsFilter] = useState(projects);

  const handleClick = (id: number, tagName: string) => {
    console.log(tagName);
    const updatedTags = tagFilters.map((tag) =>
      tag.id === id ? { ...tag, active: true } : { ...tag, active: false }
    );
    setTagFilters(updatedTags);

    if (tagName === "All") {
      setProjectsFilter(projects);
    } else {
      const filter = projects.filter((project) =>
        project.attributes.tags.data.some((tag) => {
          console.log(tag.attributes.title, tagName);
          return tag.attributes.title === tagName;
        })
      );
      setProjectsFilter(filter);
    }
  };
  return (
    <section
      className=" bg-pryBg pt-[50px] md:pt-[100px] pb-[100px] md:pb-[250px]"
      id="myWork"
    >
      <div className="container flex flex-col">
        <motion.h3
          initial={{ opacity: 0, y: "50px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          viewport={{ once: true, amount: 0.3 }}
          className=" font-montserrat font-bold text-[40px] md:text-[56px] text-pryText mb-[20px] text-center"
        >
          My Work
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: "50px" }}
          whileInView={{ opacity: 1, y: "0px", transition: { duration: 0.2 } }}
          viewport={{ once: true, amount: 0.5 }}
          className=" flex flex-wrap justify-center gap-[10px] ml-auto mr-auto"
        >
          {tagFilters.map((tag) => (
            <Tags
              active={tag.active}
              title={tag.title}
              key={tag.id}
              onClick={() => {
                handleClick(tag.id, tag.title);
              }}
            />
          ))}
        </motion.div>
        <div className=" flex flex-col gap-[100px] lg:gap-[200px] mt-[60px]">
          {projectsFilter.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWork;
