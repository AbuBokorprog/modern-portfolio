import Project from "@/components/dashboard/project";
import { getProjects } from "@/components/serversideData/portfolio";
import React from "react";

export default async function page() {
  const data = await getProjects();

  return (
    <div>
      <h2 className="text-3xl text-center font-bold my-4">Add Project</h2>
      <Project projects={data?.data} />
    </div>
  );
}
