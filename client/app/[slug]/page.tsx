import Button from "@/components/Button";
import Footer from "@/components/Footer";
import { ProjectData } from "@/types";
import Image from "next/image";

const ProjectPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const projectRes = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/projects/${slug}?populate=projectImage,tags`
  );
  const { data: projectData }: { data: ProjectData } = await projectRes.json();
  const projectName = projectData.attributes.title;
  const projectDesc = projectData.attributes.desc;
  const liveLink = projectData.attributes.link;
  const githubLink = projectData.attributes.github;
  const image = projectData.attributes.projectImage.data.attributes.url;
  const imageHeight =
    projectData.attributes.projectImage.data.attributes.height / 2;
  const imgSrc =
    process.env.NEXT_PUBLIC_P_O_D === "development"
      ? process.env.NEXT_PUBLIC_SERVER_BASE_URL
      : image;

  return (
    <div>
      <section className=" bg-pryBg pt-[165px] pb-[230px]">
        <div className="container flex flex-col">
          <span className=" inline-block font-mulish font-bold text-[14px] text-center text-[#969fa2] tracking-[0.2em] mb-[8px]">
            PROJECT SHOWCASE
          </span>
          <h1 className=" text-center font-lato font-bold text-[56px] text-pryText mb-[20px]">
            {projectName}
          </h1>
          <p className=" font-mulish font-normal text-[18px] leading-[180%] text-center max-w-[736px] ml-auto mr-auto mb-[40px]">
            {projectDesc}
          </p>
          <div className="flex justify-center gap-[20px]">
            <Button
              type="pry"
              value="Live Link"
              link={liveLink}
              projectPage={true}
            />
            {githubLink && (
              <Button
                type="sec"
                value="Github Link"
                link={githubLink}
                projectPage={true}
              />
            )}
          </div>
        </div>
      </section>
      <section className=" bg-secBg flex justify-center pb-[100px] ">
        <Image
          src={imgSrc!}
          width={930}
          height={imageHeight}
          alt="project"
          className="relative top-[-150px]"
        />
      </section>
      <Footer type="pry" />
    </div>
  );
};

export default ProjectPage;
