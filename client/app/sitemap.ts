import { ProjectResponse } from "@/types";

export default async function sitemap() {
  const projectsRes = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/projects?populate=*&sort=createdAt:desc`
  );
  const { data: projectsData }: ProjectResponse = await projectsRes.json();
  const projectsSiteMap = projectsData.map((project) => ({
    url: `https://www.sheddyport.com/${project.attributes.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://www.sheddyport.com",
      lastModified: new Date(),
    },
    ...projectsSiteMap,
  ];
}
