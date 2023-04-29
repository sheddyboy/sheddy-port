import Hero from "@/Sections/Hero";
import MyWork from "@/Sections/MyWork";
import Skills from "@/Sections/Skills";
import Footer from "@/components/Footer";
import { ProjectResponse, TagsResponse } from "@/types";

export default async function Home() {
  const projectsRes = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/projects?populate=*&sort=createdAt:desc`
  );
  const { data: projectsData }: ProjectResponse = await projectsRes.json();
  const tagsRes = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/tags`,
    { next: { revalidate: 60 } }
  );
  const { data: tagsData }: TagsResponse = await tagsRes.json();
  return (
    <>
      <Hero />
      <Skills />
      <MyWork projects={projectsData} tags={tagsData} />
      <Footer type="sec" />
    </>
  );
}
